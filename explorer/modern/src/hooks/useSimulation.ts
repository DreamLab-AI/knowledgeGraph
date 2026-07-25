/**
 * useSimulation.ts — owns the physics-worker lifecycle for one GraphScope
 * (ADR-NG-001 §3, replaces useWasmSimulation). It boots the worker, swaps the
 * whole scope on demand (DDD INV-2), and exposes a stable positions buffer the
 * renderer reads once per frame.
 *
 * Transport is negotiated from `crossOriginIsolated`:
 *   • shared   → the worker publishes a SharedArrayBuffer once; `positions`
 *                mutates in place every tick, zero main-thread copies.
 *   • pingpong → the worker transfers a frame; this hook copies it into the
 *                stable `positions` buffer (ONE copy) and hands the transferred
 *                buffer straight back (ReturnBuffer). Never more than one swap
 *                per frame.
 *
 * Positions are NOT React state per-frame (that would re-render at 60 Hz). The
 * buffer identity is stable within a generation and only the `generation` /
 * `running` / `settled` flags trigger renders. Renderers read `positionsRef`
 * (or the `positions` snapshot) each `useFrame`.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { diag } from '../lib/diag';
import {
  type LoadScope,
  type MainToWorker,
  type ReturnBuffer,
  type WorkerToMain,
  isWorkerToMain,
  transferablesFor,
} from '../workers/protocol';

export interface UseSimulationOptions {
  /** NGG1 tier bytes for the active scope. A copy is transferred to the worker;
   *  the caller keeps this buffer (the main-thread NGG1 reader still needs it). */
  buffer?: ArrayBuffer | null;
  /** On-screen node count of the scope (post-cap, ≤ INVARIANTS.MAX_NODES). */
  nodeCount?: number;
  /** Monotonic scope id; bump to swap scope. Frames from stale gens are dropped. */
  generation?: number;
  /** prefers-reduced-motion: load + show the baked seed, never animate. */
  reducedMotion?: boolean;
  /** Auto-start settling once the scope is loaded (default true). */
  autoStart?: boolean;
  /** Optional wasm-glue URL override; empty ⇒ the worker imports the bundled pkg. */
  wasmUrl?: string;
  /** Warm-start positions for the scope (store seeds). Copied into the initial
   *  buffer so the renderer NEVER sees an all-zero frame even if the worker
   *  dies before its first publish (production T2 lesson, 2026-07-23). */
  initialPositions?: Float32Array | null;
}

export interface UseSimulationResult {
  /** Live positions [x0,y0,…], length nodeCount*2. Stable within a generation. */
  positions: Float32Array;
  /** Ref to the same buffer for per-frame reads without re-subscribing. */
  positionsRef: React.MutableRefObject<Float32Array>;
  /** Generation currently reflected by `positions`. */
  generation: number;
  /** True while the worker is ticking. */
  running: boolean;
  /** True once the sim reached the alpha floor (is_finished). */
  settled: boolean;
  /** Resume/begin ticking (no-op under reduced motion). */
  start: () => void;
  /** Pause ticking; state is retained. */
  stop: () => void;
}

const EMPTY = new Float32Array(0);

export function useSimulation(opts: UseSimulationOptions = {}): UseSimulationResult {
  const { buffer, nodeCount = 0, generation = 0, reducedMotion = false, autoStart = true, wasmUrl = '', initialPositions = null } = opts;

  const workerRef = useRef<Worker | null>(null);
  const readyRef = useRef(false);
  const genRef = useRef<number>(-1);
  const positionsRef = useRef<Float32Array>(EMPTY);
  /** Whether the user/last-intent wants the sim running (for visibility resume). */
  const wantRunningRef = useRef(false);

  /** Transport the worker reported at ready (diagnostics + watchdog). */
  const transportRef = useRef<'shared' | 'pingpong' | null>(null);
  /** Generation of the last frame actually received (watchdog input). */
  const frameGenRef = useRef<number>(-1);
  /** Whether we already fell back to pingpong (never loop the reboot). */
  const rebootedRef = useRef(false);
  const initialPositionsRef = useRef<Float32Array | null>(initialPositions);
  initialPositionsRef.current = initialPositions;

  const [positions, setPositions] = useState<Float32Array>(EMPTY);
  const [reflectedGen, setReflectedGen] = useState<number>(-1);
  const [running, setRunning] = useState(false);
  const [settled, setSettled] = useState(false);

  const post = useCallback((msg: MainToWorker): void => {
    const w = workerRef.current;
    if (!w) return;
    w.postMessage(msg, transferablesFor(msg));
  }, []);

  /* ── worker boot ────────────────────────────────────────────────────── */
  const bootWorker = useCallback((forceTransport?: 'pingpong'): void => {
    if (typeof Worker === 'undefined') return; // SSR / non-DOM test context.
    workerRef.current?.terminate();
    readyRef.current = false;
    const worker = new Worker(new URL('../workers/physics.worker.ts', import.meta.url), { type: 'module' });
    workerRef.current = worker;
    const bootT0 = performance.now();
     
    diag('sim.boot', { coi: typeof crossOriginIsolated !== 'undefined' ? crossOriginIsolated : 'n/a', forceTransport: forceTransport ?? 'auto' });

    const onMsg = (ev: MessageEvent): void => {
      const m = ev.data as unknown;
      if (!isWorkerToMain(m)) return;
      const msg = m as WorkerToMain;

      switch (msg.type) {
        case 'ready': {
          readyRef.current = true;
          transportRef.current = (msg as { transport?: 'shared' | 'pingpong' }).transport ?? null;
           
          diag('sim.ready', { transport: transportRef.current, ms: Math.round(performance.now() - bootT0) });
          break;
        }
        case 'workerError' as never: {
           
          diag('sim.workerError', (msg as unknown as { message: string }).message);
          break;
        }
        case 'sharedPositions': {
          if (msg.generation !== genRef.current) break;
          const view = new Float32Array(msg.sab);
          if (frameGenRef.current !== msg.generation) {
            frameGenRef.current = msg.generation;
             
            diag('sim.firstFrame', { gen: msg.generation, transport: 'shared' });
          }
          positionsRef.current = view;
          setPositions(view);
          setReflectedGen(msg.generation);
          break;
        }
        case 'positions': {
          if (msg.generation !== genRef.current) break; // stale: drop (worker won't reclaim it either).
          if (frameGenRef.current !== msg.generation) {
            frameGenRef.current = msg.generation;
             
            diag('sim.firstFrame', { gen: msg.generation, transport: 'pingpong' });
          }
          const incoming = new Float32Array(msg.buffer);
          const dst = positionsRef.current;
          if (dst.length === incoming.length) dst.set(incoming);
          else {
            const n = Math.min(dst.length, incoming.length);
            dst.set(incoming.subarray(0, n));
          }
          if (reflectedGen !== msg.generation) setReflectedGen(msg.generation);
          // Hand the transferred buffer straight back — zero-copy ping-pong.
          const back: ReturnBuffer = { type: 'returnBuffer', buffer: msg.buffer, generation: msg.generation };
          worker.postMessage(back, [msg.buffer]);
          break;
        }
        case 'settled': {
          if (msg.generation !== genRef.current) break;
          setRunning(false);
          setSettled(true);
          wantRunningRef.current = false;
          break;
        }
      }
    };

    worker.addEventListener('message', onMsg);
    worker.postMessage({ type: 'init', wasmUrl, ...(forceTransport ? { forceTransport } : {}) } satisfies MainToWorker);
    // wasmUrl is boot-time only; intentionally not a re-boot trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bootWorker();
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
      readyRef.current = false;
    };
  }, [bootWorker]);

  /* ── scope swap on {buffer, generation} change (INV-2 whole-aggregate) ── */
  useEffect(() => {
    if (!buffer || nodeCount <= 0) return;
    let cancelled = false;

    const load = (): void => {
      if (cancelled) return;
      if (!readyRef.current) {
        // Init not acknowledged yet; retry on the next macrotask.
        setTimeout(load, 8);
        return;
      }
      genRef.current = generation;
      setSettled(false);

      // Stable positions buffer for this generation (pingpong writes into it;
      // shared replaces it when SharedPositions arrives).
      const seed = new Float32Array(nodeCount * 2);
      const warm = initialPositionsRef.current;
      if (warm && warm.length >= seed.length) seed.set(warm.subarray(0, seed.length));
      positionsRef.current = seed;
      setPositions(seed);
      setReflectedGen(generation);

      // Watchdog: if the shared transport produces NO frame for this scope
      // within 3s, reboot once into pingpong (self-heal for host runtimes
      // where SAB under the COI service worker misbehaves — prod T2 lesson).
      const genAtLoad = generation;
      setTimeout(() => {
        if (cancelled || rebootedRef.current) return;
        if (transportRef.current !== 'shared') return;
        if (frameGenRef.current === genAtLoad) return; // frame arrived — healthy.
         
        diag('sim.watchdog', 'no SAB frame within 3s — rebooting worker in pingpong mode');
        rebootedRef.current = true;
        bootWorker('pingpong');
        setTimeout(load, 16); // re-run the scope load against the fresh worker.
      }, 3000);

      // Transfer a COPY so the caller keeps the original for the NGG1 reader.
      const copy = buffer.slice(0);
      const msg: LoadScope = { type: 'loadScope', buffer: copy, nodeCount, generation };
      diag('sim.loadScope', { generation, nodeCount, transport: transportRef.current });
      post(msg);

      if (autoStart && !reducedMotion) {
        wantRunningRef.current = true;
        setRunning(true);
        post({ type: 'start' });
      } else {
        wantRunningRef.current = false;
        setRunning(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buffer, generation, nodeCount, reducedMotion, autoStart]);

  /* ── pause/resume on tab visibility (worker has no DOM access) ────────── */
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onVisibility = (): void => {
      if (document.hidden) {
        post({ type: 'stop' });
        setRunning(false);
      } else if (wantRunningRef.current && !settled && !reducedMotion) {
        post({ type: 'start' });
        setRunning(true);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [post, settled, reducedMotion]);

  const start = useCallback((): void => {
    if (reducedMotion) return;
    wantRunningRef.current = true;
    setSettled(false);
    setRunning(true);
    post({ type: 'start' });
  }, [post, reducedMotion]);

  const stop = useCallback((): void => {
    wantRunningRef.current = false;
    setRunning(false);
    post({ type: 'stop' });
  }, [post]);

  return {
    positions,
    positionsRef,
    generation: reflectedGen,
    running,
    settled,
    start,
    stop,
  };
}

export default useSimulation;
