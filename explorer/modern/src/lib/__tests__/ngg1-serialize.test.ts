/**
 * ngg1-serialize.test.ts — round-trips the focus-tier ego serialiser
 * (serializeEgoNgg1) through the reader (parseNgg1). If the minted buffer is
 * malformed the physics worker's `load_csr` fails silently and T2 focus never
 * settles, so this guards the byte layout: header, node fields, CSR, and the
 * label/iri string pairing (FORMAT-NGG1).
 */

import { describe, it, expect } from 'vitest';
import {
  EDGE_RELATION,
  EDGE_SUBCLASS,
  pairsToEgoCsr,
  parseNgg1,
  radialEgoSeed,
  serializeEgoNgg1,
  type EgoCsr,
} from '../ngg1';

/** Minimal 3-node source tier built directly via the serialiser, then re-read. */
function makeSource() {
  // Identity ego over 3 nodes, edges n1→n0 (subclass) and n1→n2 (relation).
  const nodes = Uint32Array.from([0, 1, 2]);
  const seed = Float32Array.from([0, 0, 1, 0, 0, 1]);
  const csr: EgoCsr = {
    rowPtr: Uint32Array.from([0, 0, 2, 2]),
    colIdx: Uint32Array.from([0, 2]),
    edgeType: Uint8Array.from([EDGE_SUBCLASS, EDGE_RELATION]),
  };
  const src = {
    label: (i: number) => ['AI', 'ML', 'NLP'][i],
    iri: (i: number) => `ng:${i}`,
    getId: (i: number) => i + 10,
    getDomain: () => 0,
    getCategory: () => 1,
    getFlags: (i: number) => (i === 0 ? 0x01 : 0x00),
    getDegree: (i: number) => [1, 2, 1][i],
  } as unknown as Parameters<typeof serializeEgoNgg1>[0];
  return { src, nodes, seed, csr };
}

describe('serializeEgoNgg1', () => {
  it('round-trips through parseNgg1 with correct header, nodes, CSR and strings', () => {
    const { src, nodes, seed, csr } = makeSource();
    const buf = serializeEgoNgg1(src, nodes, seed, csr);
    const r = parseNgg1(buf);

    expect(r.nodeCount).toBe(3);
    expect(r.edgeCount).toBe(2);

    // Node fields (seed x,y override; metadata from src).
    expect(r.getId(0)).toBe(10);
    expect(r.getX(1)).toBeCloseTo(1);
    expect(r.getY(2)).toBeCloseTo(1);
    expect(r.getDomain(0)).toBe(0);
    expect(r.getDegree(1)).toBe(2);
    expect(r.getFlags(0)).toBe(0x01);

    // CSR — n1 owns both out-edges.
    expect(Array.from(r.rowPtr)).toEqual([0, 0, 2, 2]);
    expect(Array.from(r.neighbours(1))).toEqual([0, 2]);
    expect(Array.from(r.neighbourTypes(1))).toEqual([EDGE_SUBCLASS, EDGE_RELATION]);

    // String pairing: strings[n*2] = label, [n*2+1] = iri.
    expect(r.label(0)).toBe('AI');
    expect(r.iri(0)).toBe('ng:0');
    expect(r.label(2)).toBe('NLP');
    expect(r.iri(2)).toBe('ng:2');
  });

  it('pairsToEgoCsr groups flat instance-space pairs by source', () => {
    // Pairs (unsorted by source): 2→0, 0→1, 2→1.
    const pairs = Uint32Array.from([2, 0, 0, 1, 2, 1]);
    const types = Uint8Array.from([EDGE_SUBCLASS, EDGE_RELATION, EDGE_RELATION]);
    const csr = pairsToEgoCsr(3, pairs, types);
    expect(Array.from(csr.rowPtr)).toEqual([0, 1, 1, 3]);
    // node 0 → [1], node 2 → [0,1]
    expect(Array.from(csr.colIdx.slice(csr.rowPtr[0], csr.rowPtr[1]))).toEqual([1]);
    expect(Array.from(csr.colIdx.slice(csr.rowPtr[2], csr.rowPtr[3])).sort()).toEqual([0, 1]);
  });

  it('radialEgoSeed puts the focus centre at the origin and spreads the rest', () => {
    const seed = radialEgoSeed(50);
    expect(seed[0]).toBe(0);
    expect(seed[1]).toBe(0);
    // node 1 is off-origin (distinguishes the real seed from the zero-seed).
    expect(Math.hypot(seed[2], seed[3])).toBeGreaterThan(0);
    // deterministic
    expect(Array.from(radialEgoSeed(50))).toEqual(Array.from(seed));
  });
});
