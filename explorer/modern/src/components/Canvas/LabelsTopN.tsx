/**
 * LabelsTopN.tsx — top-N node labels via troika-three-text SDF (ADR-NG-001 §4).
 * "Labels are the product" (PRD §5): the top LABELS_VISIBLE_MAX nodes by
 * degree × zoom that fall inside the frustum are always legible; the rest are
 * reachable via search + the side panel. This is the VisionClaw InstancedLabels
 * discipline without the SAB coupling: a fixed pool of Text objects is reused —
 * the selection set is recomputed on a cadence, positions are patched every
 * frame, and nothing is allocated in the hot path.
 *
 * DEPENDENCY NOTE (integration): troika resolves a default web font over the
 * network. To keep the site self-contained and CSP-safe, integration should
 * self-host a font and set `LABEL_FONT_URL` below (e.g. `/fonts/Inter.woff`).
 * With it unset, troika falls back to its bundled default; labels never block
 * or crash the canvas.
 */

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, OrthographicCamera, Vector3 } from 'three';
import { Text } from 'troika-three-text';
import { useScopeStore } from '../../stores/scopeStore';
import { INVARIANTS } from '../../types/scope';
import { readPalette, LABEL_FONT_URL } from './palette';

/** Recompute the visible top-N set every N frames (positions patch every frame). */
const LABEL_REFRESH_FRAMES = 8;
/** On-screen label height, in pixels. Kept constant on screen via per-frame scale. */
const LABEL_PX = 13;
/** Approx on-screen glyph advance as a fraction of the label height (for overlap boxes). */
const GLYPH_ASPECT = 0.55;
/** Extra screen-space padding (px) around each label box before it counts as a clash. */
const LABEL_PAD_PX = 4;

const POOL_SIZE = INVARIANTS.LABELS_VISIBLE_MAX;

/** Axis-aligned screen-space box test (labels must not overlap — PRD §5). */
function overlaps(
  ax: number, ay: number, aw: number, ah: number,
  bx: number, by: number, bw: number, bh: number,
): boolean {
  return Math.abs(ax - bx) * 2 < aw + bw && Math.abs(ay - by) * 2 < ah + bh;
}

export function LabelsTopN() {
  const scope = useScopeStore((s) => s.scope);
  const model = useScopeStore((s) => s.model);
  const generation = useScopeStore((s) => s.generation);
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);

  const palette = useMemo(() => readPalette(), []);

  /** Persistent group + Text pool, created once and reused across every scope. */
  const group = useMemo(() => new Group(), []);
  const pool = useMemo<Text[]>(() => {
    const arr: Text[] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const t = new Text();
      t.anchorX = 'center';
      t.anchorY = 'middle';
      t.outlineWidth = '9%';
      // Constant world-unit fontSize: on-screen size is held via a per-frame
      // scale (1/zoom) so wheel-zoom never triggers a troika resync storm (that
      // was the > 250 ms long task during pan/zoom — PRD §9). sync() runs only
      // when the label TEXT changes.
      t.fontSize = LABEL_PX;
      t.material.depthTest = false;
      t.material.depthWrite = false;
      t.renderOrder = 10;
      t.visible = false;
      if (LABEL_FONT_URL) t.font = LABEL_FONT_URL;
      arr.push(t);
    }
    return arr;
  }, []);

  /** Which instance index currently occupies each pool slot (−1 = empty). */
  const slotOf = useRef<Int32Array>(new Int32Array(POOL_SIZE).fill(-1));
  const frameCount = useRef(0);
  const tmp = useRef(new Vector3());

  /** Mount the pool into the scene; tear down on unmount. */
  useEffect(() => {
    for (const t of pool) group.add(t);
    return () => {
      for (const t of pool) {
        group.remove(t);
        t.dispose();
      }
    };
  }, [group, pool]);

  /** Apply palette colours to the pool (once, and on token change). */
  useEffect(() => {
    for (const t of pool) {
      t.color = `#${palette.labelInk.getHexString()}`;
      t.outlineColor = `#${palette.labelHalo.getHexString()}`;
    }
  }, [pool, palette]);

  /** Reset the assignment when the scope swaps so stale labels don't linger. */
  useEffect(() => {
    slotOf.current.fill(-1);
    for (const t of pool) {
      t.visible = false;
      t.text = '';
    }
    frameCount.current = 0;
  }, [generation, pool]);

  /** Accepted-label screen boxes, reused across refreshes (no per-frame alloc). */
  const boxX = useRef(new Float32Array(POOL_SIZE));
  const boxY = useRef(new Float32Array(POOL_SIZE));
  const boxW = useRef(new Float32Array(POOL_SIZE));
  const boxH = useRef(new Float32Array(POOL_SIZE));

  useFrame(() => {
    if (!scope || !model) return;
    const pos = scope.positions;
    const zoom = (camera as OrthographicCamera).zoom || 1;
    const halfW = size.width / 2;
    const halfH = size.height / 2;
    const labelH = LABEL_PX * 1.2 + LABEL_PAD_PX; // on-screen box height (px)

    // ── Selection pass (cadence): frustum-visible, ranked by degree, then a
    //    greedy screen-space overlap cull so labels never pile up (PRD §5:
    //    "no overlap storms"). Fewer, always-legible labels. ──
    if (frameCount.current % LABEL_REFRESH_FRAMES === 0) {
      const cand: number[] = [];
      const v = tmp.current;
      for (let i = 0; i < scope.nodeCount; i++) {
        v.set(pos[i * 2], pos[i * 2 + 1], 0).project(camera);
        if (v.x < -1.05 || v.x > 1.05 || v.y < -1.05 || v.y > 1.05) continue;
        cand.push(i);
      }
      cand.sort((a, b) => model.degreeOf[b] - model.degreeOf[a]);

      let placed = 0;
      for (let c = 0; c < cand.length && placed < POOL_SIZE; c++) {
        const inst = cand[c];
        const label = model.labels[inst] || '';
        if (!label) continue;
        v.set(pos[inst * 2], pos[inst * 2 + 1], 0).project(camera);
        const sx = v.x * halfW; // screen px, origin-centred (only deltas matter)
        const sy = v.y * halfH;
        const w = label.length * LABEL_PX * GLYPH_ASPECT + LABEL_PAD_PX;
        let clash = false;
        for (let p = 0; p < placed; p++) {
          if (overlaps(sx, sy, w, labelH, boxX.current[p], boxY.current[p], boxW.current[p], boxH.current[p])) {
            clash = true;
            break;
          }
        }
        if (clash) continue;
        boxX.current[placed] = sx;
        boxY.current[placed] = sy;
        boxW.current[placed] = w;
        boxH.current[placed] = labelH;

        const t = pool[placed];
        if (inst !== slotOf.current[placed]) {
          slotOf.current[placed] = inst;
          t.text = label;
          t.visible = true;
          t.sync(); // text changed — the only place troika resyncs
        } else if (!t.visible) {
          t.visible = true;
        }
        placed++;
      }
      // Retire any pool slots beyond the placed set.
      for (let s = placed; s < POOL_SIZE; s++) {
        if (slotOf.current[s] !== -1) {
          slotOf.current[s] = -1;
          const t = pool[s];
          t.visible = false;
          t.text = '';
        }
      }
    }

    // ── Per-frame: patch position + hold constant on-screen size via scale
    //    (1/zoom). No sync, no allocation. ──
    const worldScale = 1 / zoom;
    for (let s = 0; s < POOL_SIZE; s++) {
      const inst = slotOf.current[s];
      if (inst < 0) continue;
      const t = pool[s];
      t.position.set(pos[inst * 2], pos[inst * 2 + 1], 0.02);
      t.scale.setScalar(worldScale);
    }
    frameCount.current++;
  });

  return <primitive object={group} />;
}
