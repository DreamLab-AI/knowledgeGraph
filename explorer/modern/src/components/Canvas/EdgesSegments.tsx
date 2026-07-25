/**
 * EdgesSegments.tsx — every edge of the current scope in ONE LineSegments
 * (ADR-NG-001 §4). No per-edge component (the other half of the freeze storm).
 * The single position buffer is rewritten from the scope's live positions each
 * frame (4k edges × 2 verts is trivial — VisionClaw edge-buffer-rewrite idiom).
 *
 * Two visual registers, one geometry: edges are sorted backbone-first so a
 * single geometry carries two draw groups — quiet charcoal `subClassOf`
 * backbone (DDD "Backbone") vs accented teal `objectProperty` relation (DDD
 * "Relation"), PRD §5.
 */

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  BufferAttribute,
  BufferGeometry,
  LineBasicMaterial,
  type LineSegments as ThreeLineSegments,
} from 'three';
import { useScopeStore } from '../../stores/scopeStore';
import { useUiStore } from '../../stores/uiStore';
import { readPalette, EDGE_ALPHA_BACKBONE, EDGE_ALPHA_RELATION } from './palette';
import { EDGE_SUBCLASS } from '../../lib/ngg1';

export function EdgesSegments() {
  const scope = useScopeStore((s) => s.scope);
  const generation = useScopeStore((s) => s.generation);
  // The two EDGES checkboxes (PRD-NG-001 §5). Backbone toggles draw group 0
  // (subClassOf, materials[0]); relations toggles group 1 (objectProperty,
  // materials[1]). Lives in useUiStore — NOT useScopeStore — so RepaintDriver's
  // scope-store subscription does not see it; we invalidate() ourselves below.
  const edgeToggles = useUiStore((s) => s.edgeToggles);
  const invalidate = useThree((s) => s.invalidate);
  const linesRef = useRef<ThreeLineSegments>(null);

  const palette = useMemo(() => readPalette(), []);

  /**
   * Build geometry + materials once per scope. `endpoints` holds the scope-local
   * instance indices [src,tgt,…] in backbone-then-relation order; the position
   * buffer is filled from it every frame.
   */
  const built = useMemo(() => {
    if (!scope || scope.edgeCount === 0) return null;
    const n = scope.edgeCount;

    // Stable partition: backbone edges first, relations after → two contiguous groups.
    const order = new Uint32Array(n);
    let backbone = 0;
    for (let e = 0; e < n; e++) if (scope.edgeTypes[e] === EDGE_SUBCLASS) backbone++;
    let bi = 0;
    let ri = backbone;
    for (let e = 0; e < n; e++) {
      if (scope.edgeTypes[e] === EDGE_SUBCLASS) order[bi++] = e;
      else order[ri++] = e;
    }

    const endpoints = new Uint32Array(n * 2);
    for (let k = 0; k < n; k++) {
      const e = order[k];
      endpoints[k * 2] = scope.edgePairs[e * 2];
      endpoints[k * 2 + 1] = scope.edgePairs[e * 2 + 1];
    }

    const geometry = new BufferGeometry();
    const positions = new Float32Array(n * 2 * 3);
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    // Two draw groups by vertex range: backbone [0, backbone*2), relation after.
    geometry.clearGroups();
    geometry.addGroup(0, backbone * 2, 0);
    geometry.addGroup(backbone * 2, (n - backbone) * 2, 1);

    const backboneMat = new LineBasicMaterial({
      color: palette.backbone,
      transparent: true,
      opacity: EDGE_ALPHA_BACKBONE,
      toneMapped: false,
    });
    const relationMat = new LineBasicMaterial({
      color: palette.relation,
      transparent: true,
      opacity: EDGE_ALPHA_RELATION,
      toneMapped: false,
    });

    return { geometry, materials: [backboneMat, relationMat], endpoints, positions };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, generation, palette]);

  /** Dispose GPU resources when the scope is swapped out. */
  useEffect(() => {
    if (!built) return;
    return () => {
      built.geometry.dispose();
      built.materials.forEach((m) => m.dispose());
    };
  }, [built]);

  /**
   * Apply the EDGES checkboxes to the two draw-group materials. `Material.visible
   * = false` skips that group's draw call, so unchecking Backbone hides all
   * subClassOf lines and unchecking Relations hides all objectProperty lines,
   * with no geometry rebuild. Under `frameloop='demand'` a toggle would not
   * otherwise repaint (edgeToggles is outside the scope store RepaintDriver
   * watches), so invalidate() forces exactly one frame.
   */
  useEffect(() => {
    if (!built) return;
    built.materials[0].visible = edgeToggles.backbone;
    built.materials[1].visible = edgeToggles.relations;
    invalidate();
  }, [built, edgeToggles, invalidate]);

  /** Per-frame: rewrite the position buffer from the live scope positions. */
  useFrame(() => {
    if (!built || !scope) return;
    const { endpoints, positions } = built;
    const pos = scope.positions;
    const n = scope.edgeCount;
    for (let k = 0; k < n; k++) {
      const src = endpoints[k * 2];
      const tgt = endpoints[k * 2 + 1];
      const o = k * 6;
      positions[o] = pos[src * 2];
      positions[o + 1] = pos[src * 2 + 1];
      positions[o + 2] = 0;
      positions[o + 3] = pos[tgt * 2];
      positions[o + 4] = pos[tgt * 2 + 1];
      positions[o + 5] = 0;
    }
    (built.geometry.getAttribute('position') as BufferAttribute).needsUpdate = true;
  });

  if (!built) return null;

  return (
    // Edges never receive pointer events — nodes own interaction.
    <lineSegments
      key={`edges-${generation}`}
      ref={linesRef}
      args={[built.geometry, built.materials as unknown as LineBasicMaterial]}
      frustumCulled={false}
      raycast={() => null}
      renderOrder={-1}
    />
  );
}
