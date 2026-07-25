/**
 * protocol.ts — typed message contract between the main thread and the physics
 * Web Worker (ADR-NG-001 §3). The worker owns the WASM simulation and the
 * position buffer; the main thread owns the scene graph. Positions cross the
 * boundary zero-copy: SharedArrayBuffer when `crossOriginIsolated`, otherwise a
 * transferable ArrayBuffer ping-pong. No entity objects ever cross (DDD INV-3).
 *
 * Layout of every position buffer: Float32Array [x0,y0,x1,y1,…], length
 * = nodeCount * 2, indexed by scope-local instance index. Seeded from NGG1
 * node x,y (warm start, ADR §3).
 *
 * No runtime dependencies — types only, plus two type guards.
 */

/* ═══════════════════════ main → worker ═══════════════════════════════ */

/** One-time worker boot: hand it the compiled WASM module URL. */
export interface Init {
  type: 'init';
  /** URL of the rust-wasm glue (resolved on main thread, fetched in worker). */
  wasmUrl: string;
  /** Force a transport (diagnostic/self-heal path); omit ⇒ negotiate from COI. */
  forceTransport?: 'shared' | 'pingpong';
}

/**
 * Swap the whole scope (DDD INV-2 — never incremental). Transfers an NGG1
 * slice into the worker, which calls `load_csr(bytes)` and seeds positions.
 * The buffer is TRANSFERRED (listed in the transfer list) — the main thread
 * must not touch it after posting.
 */
export interface LoadScope {
  type: 'loadScope';
  /** NGG1 bytes for this tier (domain-<slug>.bin or a focus sub-slice). */
  buffer: ArrayBuffer;
  /** Node count of the scope (post-cap; ≤ INVARIANTS.MAX_NODES). */
  nodeCount: number;
  /** Monotonic id echoed back on Positions/Settled so the main thread can
   *  discard frames from a superseded scope. */
  generation: number;
}

/** Begin/resume ticking (baked → settling). */
export interface Start {
  type: 'start';
}

/** Pause the simulation (→ asleep). Sent on `document.hidden`, settle, or
 *  prefers-reduced-motion. State is retained; `Start` resumes. */
export interface Stop {
  type: 'stop';
}

/** Live-tune a scalar sim parameter (charge, linkDistance, damping, alphaMin…).
 *  The only physics knobs exposed; no WebVOWL-style settings sprawl. */
export interface SetParam {
  type: 'setParam';
  key: SimParamKey;
  val: number;
}

export type SimParamKey =
  | 'charge'
  | 'linkDistance'
  | 'linkStrength'
  | 'damping'
  | 'centerGravity'
  | 'alphaMin'
  | 'reheat';

/**
 * Return a transferred position buffer to the worker (ping-pong fallback only).
 * The main thread reads positions into instance attributes, then hands the
 * buffer straight back so the worker can write the next frame — zero copies.
 * Not used under SharedArrayBuffer (the buffer is never transferred there).
 */
export interface ReturnBuffer {
  type: 'returnBuffer';
  buffer: ArrayBuffer;
  /** Generation this buffer belongs to; ignored if stale. */
  generation: number;
}

export type MainToWorker = Init | LoadScope | Start | Stop | SetParam | ReturnBuffer;

/* ═══════════════════════ worker → main ═══════════════════════════════ */

/** WASM booted and ready to accept LoadScope. */
export interface Ready {
  type: 'ready';
  /** The transport the worker actually selected (diagnostics + watchdog). */
  transport?: 'shared' | 'pingpong';
}

/** Any uncaught failure inside the worker — surfaced instead of dying silent. */
export interface WorkerError {
  type: 'workerError';
  message: string;
}

/**
 * A settled/streamed frame of positions — TRANSFERABLE PING-PONG variant
 * (used when NOT crossOriginIsolated). The worker transfers `buffer` out; the
 * main thread reads it into instance attributes and returns it via
 * ReturnBuffer. While the buffer is on the main thread the worker computes into
 * a second buffer (double-buffered), so ticking never stalls.
 */
export interface Positions {
  type: 'positions';
  /** Float32Array-backed ArrayBuffer, [x,y]×nodeCount. Transferred. */
  buffer: ArrayBuffer;
  /** Scope generation; main thread drops frames whose generation is stale. */
  generation: number;
  /** Current alpha (annealing temperature) for HUD/telemetry. */
  alpha: number;
}

/**
 * SHARED-MEMORY variant (used when `crossOriginIsolated`, via coi-serviceworker,
 * ADR §3). Sent ONCE per scope after LoadScope: the worker publishes the SAB it
 * writes into every tick; the main thread reads it each frame with no messaging
 * and no transfer. No ReturnBuffer handshake in this mode — the worker never
 * relinquishes the buffer.
 */
export interface SharedPositions {
  type: 'sharedPositions';
  /** SharedArrayBuffer, [x,y]×nodeCount. Written in place by the worker. */
  sab: SharedArrayBuffer;
  generation: number;
}

/** Simulation reached the alpha floor (is_finished) → renderer may sleep. */
export interface Settled {
  type: 'settled';
  /** Final alpha at settle. */
  alpha: number;
  generation: number;
}

export type WorkerToMain = Ready | Positions | SharedPositions | Settled | WorkerError;

/* ═══════════════════════ transport selection ════════════════════════ */

/**
 * Which position-transport the pair negotiated. Decided on the main thread from
 * `crossOriginIsolated` and echoed for telemetry/tests.
 *   'shared'  → SharedPositions once, then in-place SAB reads (preferred).
 *   'pingpong'→ Positions/ReturnBuffer per frame (transferable fallback).
 */
export type PositionTransport = 'shared' | 'pingpong';

/** True when SharedArrayBuffer transport is available in this context. */
export function canUseSharedMemory(): boolean {
  // DISABLED 2026-07-23. The SharedArrayBuffer transport streams positions from
  // the worker into a buffer the main thread reads every frame with NO
  // synchronisation — an unsynchronised read/write race. Most reads are clean,
  // but a read that catches a half-written frame yields garbage magnitudes that
  // the force sim's feedback amplifies to ~1e20, collapsing the fit and blanking
  // the view. It only manifested in a secure context (production), because that
  // is the only place crossOriginIsolated is true. The transferable ping-pong
  // path transfers buffer OWNERSHIP (no concurrent access) and meets the perf
  // budget at ≤1500 nodes, so it is the sole transport. Re-enable only with a
  // double-buffered SAB + an Atomics-gated generation flip.
  return false;
}

/* ─────────────────────────── type guards ────────────────────────────── */

export function isWorkerToMain(m: unknown): m is WorkerToMain {
  return typeof m === 'object' && m !== null && typeof (m as { type?: unknown }).type === 'string';
}

export function isMainToWorker(m: unknown): m is MainToWorker {
  return typeof m === 'object' && m !== null && typeof (m as { type?: unknown }).type === 'string';
}

/* ─────────────────────── transfer-list helpers ──────────────────────── */

/**
 * Build the `postMessage` transfer list for a main→worker message. Only
 * LoadScope and ReturnBuffer carry transferables; everything else transfers
 * nothing. Under 'shared' transport nothing is ever transferred.
 */
export function transferablesFor(m: MainToWorker): Transferable[] {
  switch (m.type) {
    case 'loadScope':
      return [m.buffer];
    case 'returnBuffer':
      return [m.buffer];
    default:
      return [];
  }
}
