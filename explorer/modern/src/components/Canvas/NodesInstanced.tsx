/**
 * NodesInstanced.tsx — every node of the current scope in ONE InstancedMesh
 * (ADR-NG-001 §4). No per-node React component ever exists — that per-entity
 * storm was the freeze cause (ADR §1). Geometry is a flat disc (2D editorial
 * canvas, not a space-scene); per-instance colour is the domain tint; per-
 * instance scale is sqrt(degree). Hover/selection are instance-colour writes
 * plus a single ring overlay mesh. Raycast resolves instanceId → instance
 * index → the store's interaction contract.
 *
 * Per-frame work is matrix-only: positions are read from the scope's live
 * buffer (the worker mutates it in place) and written to instanceMatrix. No
 * allocation in useFrame (VisionClaw useFrame discipline).
 */

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { Color, DoubleSide, InstancedMesh, Object3D, type OrthographicCamera } from 'three';
import { useScopeStore } from '../../stores/scopeStore';
import {
  readPalette,
  domainColor,
  nodeCategoryColor,
  nodeRadiusPx,
  CATEGORY_NONE,
} from './palette';

/** Reused across every frame — never allocate inside useFrame. */
const dummy = new Object3D();
const tmpColor = new Color();

export function NodesInstanced() {
  const scope = useScopeStore((s) => s.scope);
  const model = useScopeStore((s) => s.model);
  const generation = useScopeStore((s) => s.generation);
  const selected = useScopeStore((s) => s.selectedInstance);
  const hovered = useScopeStore((s) => s.hoveredInstance);
  const setHovered = useScopeStore((s) => s.setHovered);
  const clickNode = useScopeStore((s) => s.clickNode);
  const doubleClickNode = useScopeStore((s) => s.doubleClickNode);

  const camera = useThree((s) => s.camera) as OrthographicCamera;
  const invalidate = useThree((s) => s.invalidate);

  const meshRef = useRef<InstancedMesh>(null);
  const ringRef = useRef<InstancedMesh>(null); // 1-instance overlay ring

  const palette = useMemo(() => readPalette(), []);
  const count = scope ? scope.nodeCount : 0;

  /**
   * Per-instance base colour + on-screen disc radius (px), precomputed on scope
   * swap. The px radius is converted to a world-unit scale each frame by
   * dividing by the live camera zoom, so discs stay legible at any fit/zoom
   * regardless of the scope's coordinate range (fixes T0's sub-pixel discs).
   */
  const derived = useMemo(() => {
    if (!scope || !model) return { baseColors: [] as Color[], radiiPx: new Float32Array(0) };
    const n = model.domainOf.length;
    // T0 (overview) keeps flat domain tints; within a single-domain scope
    // (T1 domain / T2 focus) we vary tint by CATEGORY off the domain's base hue
    // (PRD-NG-001 §6). Rank the categories present so the ladder is dense and
    // stable regardless of which global category ids the scope happens to hold.
    const byCategory = scope.tier === 'domain' || scope.tier === 'focus';
    let rankOf = new Map<number, number>();
    let total = 0;
    if (byCategory) {
      const present = new Set<number>();
      for (let i = 0; i < n; i++) {
        const c = model.categoryOf[i];
        if (c !== CATEGORY_NONE) present.add(c);
      }
      const sorted = [...present].sort((a, b) => a - b);
      total = sorted.length;
      rankOf = new Map(sorted.map((c, r) => [c, r]));
    }
    const baseColors = new Array<Color>(n);
    const radiiPx = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      baseColors[i] = byCategory
        ? nodeCategoryColor(palette, model.domainOf[i], model.categoryOf[i], model.flagsOf[i], rankOf, total)
        : domainColor(palette, model.domainOf[i]).clone();
      radiiPx[i] = nodeRadiusPx(model.degreeOf[i], model.maxDegree);
    }
    return { baseColors, radiiPx };
  }, [scope, model, palette]);

  /** Initial fill on scope swap: base colours + seeded matrices (screen-space scale). */
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh || !scope) return;
    const { baseColors, radiiPx } = derived;
    const zoom = camera.zoom || 1;
    for (let i = 0; i < scope.nodeCount; i++) {
      dummy.position.set(scope.positions[i * 2], scope.positions[i * 2 + 1], 0);
      dummy.scale.setScalar(radiiPx[i] / zoom);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, baseColors[i]);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    // frameloop='demand': without this, a scope whose worker never publishes a
    // frame (and therefore never invalidates) would never draw its seeded
    // state at all — the canvas keeps the pre-fill blank frame (prod T2
    // lesson, 2026-07-23).
    invalidate();
  }, [derived, scope, generation, camera]);

  /** Hover/selection: override two instances' colours; restore the rest. */
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh || !scope) return;
    const { baseColors } = derived;
    // Restore all (cheap: only two ever change, but a fresh scope resets anyway).
    for (let i = 0; i < scope.nodeCount; i++) mesh.setColorAt(i, baseColors[i]);
    if (hovered != null && hovered < scope.nodeCount) mesh.setColorAt(hovered, palette.nodeHover);
    if (selected != null && selected < scope.nodeCount) mesh.setColorAt(selected, palette.nodeSelected);
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [hovered, selected, derived, scope, palette]);

  /** Per-frame: patch positions + screen-space scale from the live buffer; place the ring. */
  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh || !scope) return;
    const pos = scope.positions;
    const radiiPx = derived.radiiPx;
    const zoom = camera.zoom || 1;
    for (let i = 0; i < scope.nodeCount; i++) {
      dummy.position.set(pos[i * 2], pos[i * 2 + 1], 0);
      dummy.scale.setScalar(radiiPx[i] / zoom);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    // Overlay ring follows the selected node (falls back to hovered).
    const ring = ringRef.current;
    if (ring) {
      const target = selected != null ? selected : hovered;
      if (target != null && target < scope.nodeCount) {
        const s = (radiiPx[target] / zoom) * 1.35;
        dummy.position.set(pos[target * 2], pos[target * 2 + 1], 0.01);
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        ring.setMatrixAt(0, dummy.matrix);
        ring.instanceMatrix.needsUpdate = true;
        tmpColor.copy(selected != null ? palette.nodeSelected : palette.nodeHover);
        ring.setColorAt(0, tmpColor);
        if (ring.instanceColor) ring.instanceColor.needsUpdate = true;
        ring.visible = true;
      } else {
        ring.visible = false;
      }
    }
  });

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.instanceId != null) setHovered(e.instanceId);
  };
  const onOut = () => setHovered(null);
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.instanceId != null) clickNode(e.instanceId);
  };
  const onDouble = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.instanceId != null) doubleClickNode(e.instanceId);
  };

  if (!scope || count === 0) return null;

  return (
    <group>
      {/* One draw call for every node. Keyed on generation → clean realloc on swap. */}
      <instancedMesh
        key={`nodes-${generation}`}
        ref={meshRef}
        args={[undefined, undefined, count]}
        frustumCulled={false}
        onPointerMove={onMove}
        onPointerOut={onOut}
        onClick={onClick}
        onDoubleClick={onDouble}
      >
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* Single ring overlay for hover/selection (no per-node overlays). */}
      <instancedMesh
        key={`ring-${generation}`}
        ref={ringRef}
        args={[undefined, undefined, 1]}
        frustumCulled={false}
        visible={false}
        raycast={() => null}
      >
        <ringGeometry args={[0.82, 1, 40]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={0.9} side={DoubleSide} />
      </instancedMesh>
    </group>
  );
}
