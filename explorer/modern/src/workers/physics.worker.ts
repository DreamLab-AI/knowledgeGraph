/**
 * physics.worker.ts — the off-main-thread force simulation (ADR-NG-001 §3).
 *
 * Owns the rust-wasm module and the position buffer; the main thread owns the
 * scene graph. Speaks the typed contract in `protocol.ts`. Positions cross the
 * boundary zero-copy: a SharedArrayBuffer written in place when the page is
 * `crossOriginIsolated` (coi-serviceworker), else a transferable double-buffer
 * ping-pong. No entity objects ever cross (DDD-NG-001 INV-3).
 *
 * Lifecycle mirrors the sim state machine (DDD INV-4): a LoadScope seeds and
 * publishes one baked frame; Start begins settling at ≤60 Hz; the loop
 * auto-sleeps on `is_finished()` (alpha floor) and stays asleep until the next
 * Start. The main thread sends Stop on `document.hidden` / reduced-motion, so
 * the worker never needs DOM access.
 */

/// <reference lib="webworker" />

import {
  type MainToWorker,
  type PositionTransport,
  type Positions,
  type Ready,
  type SharedPositions,
  type Settled,
  canUseSharedMemory,
  isMainToWorker,
} from './protocol';
import { DoubleBuffer, copyPositions, positionByteLength } from './positionTransport';

/* ─────────────────────── wasm module adapter ────────────────────────── */

/**
 * The subset of the rust-wasm public API this worker drives (ADR §3). The crate
 * builder emits these; the names are resolved permissively (snake_case per Rust,
 * with camelCase fallbacks) so the worker binds whichever the built pkg exports.
 * `memory` comes from the wasm-bindgen init output (`InitOutput.memory`).
 */
interface WasmPhysics {
  loadCsr(bytes: Uint8Array): void;
  tick(): void;
  isFinished(): boolean;
  getAlpha(): number;
  /** Byte offset of the live [x,y]×n position array inside wasm memory. */
  positionsPtr(): number;
  /** Element count of that array (== nodeCount*2). */
  positionsLen(): number;
  /** Optional live parameter tuning (charge/linkDistance/…). */
  setParam?(key: string, val: number): void;
  memory: WebAssembly.Memory;
}

/** wasm-bindgen `--target web` glue module shape (loosely typed on purpose). */
type WasmGlue = {
  default: (moduleOrPath?: unknown) => Promise<{ memory: WebAssembly.Memory }>;
  [k: string]: unknown;
};

/**
 * The rust-wasm crate exposes the physics engine as the `NggExplorer` CLASS
 * (ADR-NG-001 §3, bindings/explorer.rs) — one instance per worker, with the
 * sim methods as INSTANCE methods (`loadCsr`, `tick`, `isFinished`, `getAlpha`,
 * `positionsPtr`, `positionsLen`, `setParam`), NOT free module functions. An
 * earlier binding that looked the methods up on the module namespace always
 * threw at init, so the worker never posted `ready` and no scope ever settled
 * (the whole graph sat on its baked seed). Construct the class and bind its
 * methods, tolerating snake_case in case a differently-built pkg emits it.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => any;

function bindMethod<T extends AnyFn>(inst: Record<string, unknown>, names: string[]): T {
  for (const n of names) {
    const f = inst[n];
    if (typeof f === 'function') return (f as AnyFn).bind(inst) as unknown as T;
  }
  throw new Error(`physics.worker: NggExplorer method not found (tried ${names.join(', ')})`);
}

function optionalMethod<T extends AnyFn>(inst: Record<string, unknown>, names: string[]): T | undefined {
  for (const n of names) {
    const f = inst[n];
    if (typeof f === 'function') return (f as AnyFn).bind(inst) as unknown as T;
  }
  return undefined;
}

/**
 * Load and initialise the wasm module, returning the normalised physics façade.
 * Prefers the URL handed in via Init (prod/CDN override); falls back to the
 * package the SPA already depends on. `@vite-ignore` keeps the dynamic URL out
 * of Vite's static analysis; the package path is bundled normally.
 */
async function instantiate(wasmUrl: string): Promise<WasmPhysics> {
  let mod: WasmGlue;
  try {
    mod = wasmUrl
      ? ((await import(/* @vite-ignore */ wasmUrl)) as WasmGlue)
      : ((await import('webvowl-wasm')) as unknown as WasmGlue);
  } catch {
    mod = (await import('webvowl-wasm')) as unknown as WasmGlue;
  }

  const out = await mod.default(wasmUrl || undefined);
  const memory = (out?.memory ?? (mod['memory'] as WebAssembly.Memory)) as WebAssembly.Memory;

  const m = mod as unknown as Record<string, unknown>;
  const Explorer = m['NggExplorer'] as (new () => Record<string, unknown>) | undefined;
  if (typeof Explorer !== 'function') {
    throw new Error('physics.worker: wasm export NggExplorer not found');
  }
  const inst = new Explorer();

  return {
    loadCsr: bindMethod(inst, ['loadCsr', 'load_csr']),
    tick: bindMethod(inst, ['tick', 'step']),
    isFinished: bindMethod(inst, ['isFinished', 'is_finished']),
    getAlpha: bindMethod(inst, ['getAlpha', 'get_alpha']),
    positionsPtr: bindMethod(inst, ['positionsPtr', 'positions_ptr']),
    positionsLen: bindMethod(inst, ['positionsLen', 'positions_len']),
    setParam: optionalMethod(inst, ['setParam', 'set_param']),
    memory,
  };
}

/* ───────────────────────────── worker state ─────────────────────────── */

const scope: {
  ctx: DedicatedWorkerGlobalScope;
  physics: WasmPhysics | null;
  transport: PositionTransport;
  generation: number;
  nodeCount: number;
  running: boolean;
  loopPending: boolean;
  /** shared transport: the SAB written in place every tick. */
  sab: SharedArrayBuffer | null;
  sabView: Float32Array | null;
  /** pingpong transport: the transferable double-buffer pool. */
  pool: DoubleBuffer | null;
} = {
  ctx: self as unknown as DedicatedWorkerGlobalScope,
  physics: null,
  transport: 'pingpong',
  generation: -1,
  nodeCount: 0,
  running: false,
  loopPending: false,
  sab: null,
  sabView: null,
  pool: null,
};

const TICK_INTERVAL_MS = 16; // ≤ 60 Hz cap (PRD §9 frame budget).

/** Build a zero-copy Float32Array over the wasm-owned positions (rebuilt each
 *  publish — the view is cheap and wasm memory may have grown/detached). */
function wasmPositions(p: WasmPhysics): Float32Array {
  const ptr = p.positionsPtr();
  const len = p.positionsLen();
  return new Float32Array(p.memory.buffer, ptr, len);
}

/** Copy the current wasm positions into whichever transport is active and, for
 *  ping-pong, transfer a frame out. Returns nothing; shared mode is in place. */
function publishFrame(alpha: number): void {
  const p = scope.physics;
  if (!p) return;
  const src = wasmPositions(p);

  if (scope.transport === 'shared') {
    if (scope.sabView) copyPositions(src, scope.sabView);
    return; // main reads the SAB directly; no per-frame message.
  }

  // ping-pong: grab a free buffer, copy, transfer. Skip if both are in flight.
  const pool = scope.pool;
  if (!pool) return;
  const buf = pool.acquire();
  if (!buf) return;
  copyPositions(src, new Float32Array(buf));
  const msg: Positions = { type: 'positions', buffer: buf, generation: scope.generation, alpha };
  scope.ctx.postMessage(msg, [buf]);
}

/** One settled/streamed step: tick, publish, and auto-sleep at the alpha floor. */
function step(): void {
  scope.loopPending = false;
  const p = scope.physics;
  if (!p || !scope.running) return;

  p.tick();
  const alpha = p.getAlpha();
  publishFrame(alpha);

  if (p.isFinished()) {
    scope.running = false;
    const done: Settled = { type: 'settled', alpha, generation: scope.generation };
    scope.ctx.postMessage(done);
    return;
  }
  scheduleTick();
}

function scheduleTick(): void {
  if (scope.loopPending || !scope.running) return;
  scope.loopPending = true;
  scope.ctx.setTimeout(step, TICK_INTERVAL_MS);
}

/** Seed and publish exactly one baked frame after a LoadScope, before any Start.
 *  This gives the renderer positions immediately (reduced-motion shows this and
 *  never starts ticking). */
function publishSeed(): void {
  const p = scope.physics;
  if (!p) return;
  const alpha = p.getAlpha();

  if (scope.transport === 'shared') {
    if (scope.sabView) copyPositions(wasmPositions(p), scope.sabView);
    const shared: SharedPositions = {
      type: 'sharedPositions',
      sab: scope.sab as SharedArrayBuffer,
      generation: scope.generation,
    };
    scope.ctx.postMessage(shared);
    return;
  }
  // ping-pong: emit one seed frame through the normal path.
  publishFrame(alpha);
}

/* ───────────────────────────── message loop ─────────────────────────── */

async function onMessage(data: MainToWorker): Promise<void> {
  switch (data.type) {
    case 'init': {
      scope.physics = await instantiate(data.wasmUrl);
      scope.transport =
        data.forceTransport ?? (canUseSharedMemory() ? 'shared' : 'pingpong');
      const ready: Ready = { type: 'ready', transport: scope.transport };
      scope.ctx.postMessage(ready);
      return;
    }

    case 'loadScope': {
      const p = scope.physics;
      if (!p) return; // init not yet complete; main sequences init→ready→loadScope.
      // Whole-aggregate swap (INV-2): stop, retire old transport, load new.
      scope.running = false;
      scope.generation = data.generation;
      scope.nodeCount = data.nodeCount;

      p.loadCsr(new Uint8Array(data.buffer));

      const bytes = positionByteLength(data.nodeCount);
      if (scope.transport === 'shared') {
        scope.pool = null;
        scope.sab = new SharedArrayBuffer(bytes);
        scope.sabView = new Float32Array(scope.sab);
      } else {
        scope.sab = null;
        scope.sabView = null;
        scope.pool = new DoubleBuffer(bytes);
      }
      publishSeed();
      return;
    }

    case 'start': {
      if (!scope.physics || scope.running) return;
      scope.running = true;
      scheduleTick();
      return;
    }

    case 'stop': {
      scope.running = false; // state retained; a later Start resumes.
      return;
    }

    case 'setParam': {
      scope.physics?.setParam?.(data.key, data.val);
      return;
    }

    case 'returnBuffer': {
      // Reclaim only if it belongs to the current generation and pool.
      if (data.generation === scope.generation) scope.pool?.release(data.buffer);
      return;
    }
  }
}

scope.ctx.onmessage = (ev: MessageEvent) => {
  const data = ev.data;
  if (!isMainToWorker(data)) return;
  void onMessage(data).catch((err: unknown) => {
    // Never die silent — a swallowed init/loadScope failure reads as a blank
    // scene downstream (the production T2 lesson, 2026-07-23).
    scope.ctx.postMessage({ type: 'workerError', message: String(err) });
  });
};
