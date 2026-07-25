/**
 * GraphCanvas.tsx — the explorer's R3F surface (ADR-NG-001 §5). A 2D
 * orthographic camera with pan / zoom / fit (wheel + drag, NO orbit — depth
 * belongs to VisionClaw, this is the readable tier). Cream editorial canvas, a
 * drawing not a space-scene (PRD §6). DPR clamped; `frameloop='demand'` so the
 * page is idle when the simulation is settled — repaints are driven by the
 * store (interaction, scope swap) and self-perpetuate only while the sim phase
 * is `settling`. No lights, no grid, no stars: three instanced draw families
 * (nodes, edges, labels) on a flat canvas.
 *
 * Interaction contract lives in `scopeStore`: node click/double-click come from
 * NodesInstanced; background click clears selection via `onPointerMissed`.
 */

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import type { OrthographicCamera as ThreeOrthographicCamera } from 'three';
import { useScopeStore } from '../../stores/scopeStore';
import { useSimulation } from '../../hooks/useSimulation';
import { diag } from '../../lib/diag';
import { readPalette } from './palette';
import { NodesInstanced } from './NodesInstanced';
import { EdgesSegments } from './EdgesSegments';
import { LabelsTopN } from './LabelsTopN';

const ZOOM_MIN = 0.05;
const ZOOM_MAX = 30;
const FIT_PADDING = 1.15; // 15% breathing room around the scope bounds

/* ─────────────────── pan / zoom / fit (custom, no orbit) ──────────────────── */

function PanZoomControls() {
  const camera = useThree((s) => s.camera) as ThreeOrthographicCamera;
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);
  const invalidate = useThree((s) => s.invalidate);
  const generation = useScopeStore((s) => s.generation);
  const fitNonce = useScopeStore((s) => s.fitNonce);

  const drag = useRef<{ x: number; y: number } | null>(null);

  /** Screen (client) px → world coordinates under the current ortho camera. */
  const screenToWorld = (clientX: number, clientY: number) => {
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -(((clientY - rect.top) / rect.height) * 2 - 1);
    return {
      x: camera.position.x + (ndcX * (rect.width / 2)) / camera.zoom,
      y: camera.position.y + (ndcY * (rect.height / 2)) / camera.zoom,
    };
  };

  /** Frame the whole current scope (fit-to-content). */
  const fit = () => {
    const scope = useScopeStore.getState().scope;
    if (!scope || scope.nodeCount === 0) return;
    const pos = scope.positions;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < scope.nodeCount; i++) {
      const x = pos[i * 2];
      const y = pos[i * 2 + 1];
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    if (!isFinite(minX)) return;
    const w = Math.max(maxX - minX, 1e-3);
    const h = Math.max(maxY - minY, 1e-3);
    const zx = size.width / (w * FIT_PADDING);
    const zy = size.height / (h * FIT_PADDING);
    camera.position.set((minX + maxX) / 2, (minY + maxY) / 2, camera.position.z);
    camera.zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, Math.min(zx, zy)));
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    invalidate();
  };

  /** Auto-fit on every scope swap (INV-2) AND when a fit is requested — the
   *  latter re-frames a focus scope once its worker delivers the settled
   *  layout, which differs from the seed the swap framed (prod T2, 2026-07-23). */
  useEffect(() => {
    fit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation, fitNonce, size.width, size.height]);

  /** Wheel zoom (toward the cursor) + drag pan, on the GL canvas element. */
  useEffect(() => {
    const el = gl.domElement;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const before = screenToWorld(e.clientX, e.clientY);
      const factor = Math.exp(-e.deltaY * 0.0015);
      camera.zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, camera.zoom * factor));
      camera.updateProjectionMatrix();
      const after = screenToWorld(e.clientX, e.clientY);
      camera.position.x += before.x - after.x;
      camera.position.y += before.y - after.y;
      camera.updateMatrixWorld();
      invalidate();
    };

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      drag.current = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag.current) return;
      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;
      drag.current = { x: e.clientX, y: e.clientY };
      camera.position.x -= dx / camera.zoom;
      camera.position.y += dy / camera.zoom;
      camera.updateMatrixWorld();
      invalidate();
    };
    const onUp = (e: PointerEvent) => {
      drag.current = null;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') fit();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onUp);
    window.addEventListener('keydown', onKey);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onUp);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, invalidate]);

  return null;
}

/* ─────────────── repaint driver (demand frameloop bookkeeping) ────────────── */

function RepaintDriver() {
  const invalidate = useThree((s) => s.invalidate);

  /** Repaint on any store change that affects the picture (interaction, swap). */
  useEffect(() => {
    invalidate();
    const unsub = useScopeStore.subscribe(() => invalidate());
    return unsub;
  }, [invalidate]);

  /**
   * Keep the demand loop alive while the sim is `settling`: each rendered frame
   * requests the next, so worker position updates animate. The chain starts
   * when the store subscription above fires on the phase→settling transition,
   * and stops the moment phase leaves `settling` (idle at rest — PRD §9 budget).
   */
  useFrame(() => {
    if (useScopeStore.getState().phase === 'settling') invalidate();
  });

  return null;
}

/* ─────────────── physics worker bridge (ADR-NG-001 §3) ───────────────────── */

/** matchMedia(prefers-reduced-motion) as a reactive boolean (SSR-safe). */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/**
 * Drives the off-main-thread force worker for any SIMULATED scope — `domain`
 * (the loaded tier) and `focus` (a minted ego sub-tier, ADR §2) — and folds its
 * positions back into `scope.positions` IN PLACE every frame — exactly the
 * buffer NodesInstanced/EdgesSegments/LabelsTopN read (INV-3, zero entity
 * objects cross). Overview (baked, ~40 nodes) carries no worker buffer and stays
 * at its baked seed. Phase is mirrored baked → settling → settled so
 * RepaintDriver keeps the demand-loop alive only while settling.
 */
function SimulationBridge() {
  const invalidate = useThree((s) => s.invalidate);
  const scope = useScopeStore((s) => s.scope);
  const buffer = useScopeStore((s) => s.buffer);
  const generation = useScopeStore((s) => s.generation);
  const setPhase = useScopeStore((s) => s.setPhase);
  const requestFit = useScopeStore((s) => s.requestFit);
  const reducedMotion = usePrefersReducedMotion();
  // Generation whose first real frame we've already re-fitted for.
  const fittedGenRef = useRef<number>(-1);
  const badFrameLoggedRef = useRef(false);

  const isSimulated = (scope?.tier === 'domain' || scope?.tier === 'focus') && !!buffer;

  const sim = useSimulation({
    buffer: isSimulated ? buffer : null,
    nodeCount: isSimulated ? scope!.nodeCount : 0,
    generation,
    reducedMotion,
    autoStart: true,
    // Warm-start: the store's real seeds (baked layout / radial spiral) so the
    // hook's buffer is never all-zero even if the worker dies pre-publish.
    initialPositions: isSimulated ? scope!.positions : null,
  });

  // Reflect worker lifecycle into the scope phase machine (DDD INV-4).
  useEffect(() => {
    if (!isSimulated) return;
    if (sim.running) setPhase('settling');
    else if (sim.settled) setPhase('settled');
  }, [isSimulated, sim.running, sim.settled, setPhase]);

  useFrame(() => {
    if (!isSimulated) return;
    const live = useScopeStore.getState().scope;
    if (!live) return;
    const src = sim.positionsRef.current;
    const dst = live.positions;
    if (src.length === 0 || src.length !== dst.length) return;
    // Skip the one-frame all-zero seed useSimulation allocates before the
    // worker's first frame arrives: dst already holds a real warm-start (a
    // domain's baked layout, or a focus scope's radial spiral), so don't stomp
    // it with 0,0. Probe two nodes — a focus centre legitimately sits at (0,0),
    // so node 0 alone can't tell the zero-seed from a real frame.
    const zeroSeed = src[0] === 0 && src[1] === 0 && src[2] === 0 && src[3] === 0;
    const dstHasContent = dst[0] !== 0 || dst[1] !== 0 || dst[2] !== 0 || dst[3] !== 0;
    if (zeroSeed && dstHasContent) return;
    // A divergent sim frame (non-finite positions — seen only on the shared/SAB
    // transport in a secure context, i.e. production) must never blank the
    // view: drop it and keep the last finite layout, which is at worst the
    // readable radial seed (prod T2 root cause, 2026-07-23). Sample a few
    // spread points — a single (0,0) centre is legitimate.
    const LIM = 1e6; // world is ~±1e3; anything past this is a torn/diverged frame
    const insane = (v: number): boolean => !Number.isFinite(v) || Math.abs(v) > LIM;
    const bad =
      insane(src[0]) || insane(src[1]) || insane(src[2]) || insane(src[3]) ||
      insane(src[src.length - 2]) || insane(src[src.length - 1]);
    if (bad) {
      if (!badFrameLoggedRef.current) {
        badFrameLoggedRef.current = true;
        diag('sim.badFrame', { gen: generation, transport: 'kept last finite layout' });
      }
      return;
    }
    dst.set(src);
    invalidate();
    // First real frame for this generation: the settled layout is now in
    // `dst`, which may sit well outside the box the swap-time fit framed
    // (a focus ego-graph seeds tight, then spreads). Re-frame once.
    if (fittedGenRef.current !== generation) {
      fittedGenRef.current = generation;
      requestFit();
    }
  });

  return null;
}

/* ──────────────────────────────── canvas ─────────────────────────────────── */

export interface GraphCanvasProps {
  className?: string;
  style?: CSSProperties;
}

export function GraphCanvas({ className, style }: GraphCanvasProps) {
  const clickBackground = useScopeStore((s) => s.clickBackground);
  const cream = readPalette().canvas.getStyle();

  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', background: cream, ...style }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 100], zoom: 8, near: 0.1, far: 1000 }}
        dpr={[1, 2]}
        frameloop="demand"
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: cream }}
        onPointerMissed={() => clickBackground()}
      >
        <color attach="background" args={[cream]} />
        <PanZoomControls />
        <RepaintDriver />
        <SimulationBridge />
        <EdgesSegments />
        <NodesInstanced />
        <LabelsTopN />
      </Canvas>
    </div>
  );
}

export default GraphCanvas;
