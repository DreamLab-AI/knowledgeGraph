/**
 * focus-from-collapsed.test.ts — regression guard for the T1→T2 index-space
 * handoff (PRD-NG-001 §5, the "collapsed metanode → focus a hub class" path).
 *
 * The T1 metanode-collapse rewrite (buildCollapsedDomainScope) renders a domain
 * as ≈300 collapsed instances whose index space (render model) is NOT the loaded
 * tier's NGG1 index space. A focus descent from that view must therefore:
 *   1. resolve the clicked hub's IRI via the loaded tier's STRING TABLE
 *      (findLocalByIri), never via the collapsed render model's instance index;
 *   2. derive the ego-graph over the FULL domain CSR (computeEgoGraph on the
 *      loaded tier), never over the collapsed working set — otherwise a hub with
 *      hundreds of real neighbours would resolve to a near-empty ego (it touches
 *      only a handful of category metanodes in the collapsed projection).
 *
 * A regression on either seam yields a populated breadcrumb over an EMPTY scene
 * (the "silent empty scope" defect). This test builds a synthetic domain tier
 * large enough to trigger collapse, then asserts the focus scope derived from a
 * collapsed hub's IRI carries the hub's real ego neighbourhood.
 */

import { describe, it, expect } from 'vitest';
import {
  FLAG_HAS_PAGE,
  FLAG_META,
  parseNgg1,
  pairsToEgoCsr,
  serializeNgg1,
  type Ngg1,
  type Ngg1NodeFields,
} from '../../lib/ngg1';
import { buildDomainScope, buildFocusScope, parseMetaIri } from '../scopeStore';
import { INVARIANTS } from '../../types/scope';

const HUB_IRI = 'https://narrativegoldmine.com/class/deep-learning';
const HUB_LABEL = 'Deep Learning';
const HUB_NEIGHBOURS = 200; // > any collapsed-projection degree, < FOCUS_MAX

/**
 * Mint a synthetic single-domain NGG1 tier of `n` classes across a few
 * categories, with node 0 a super-hub linked to the first HUB_NEIGHBOURS nodes.
 * `n` > T1_TARGET_VISIBLE (300) so buildDomainScope collapses it.
 */
function makeDomainTier(n = 420): Ngg1 {
  const ids = new Uint32Array(n);
  const domains = new Uint16Array(n); // all domain 0
  const categories = new Uint16Array(n);
  const flags = new Uint8Array(n);
  const degrees = new Uint32Array(n);
  const labels: string[] = new Array(n);
  const iris: string[] = new Array(n);

  for (let i = 0; i < n; i++) {
    ids[i] = i + 1;
    categories[i] = i % 6; // 6 categories → 6 metanodes when collapsed
    flags[i] = FLAG_HAS_PAGE;
    degrees[i] = 1;
    labels[i] = `Class ${i}`;
    iris[i] = `https://narrativegoldmine.com/class/class-${i}`;
  }
  // Node 0 is the hub under test.
  labels[0] = HUB_LABEL;
  iris[0] = HUB_IRI;
  categories[0] = 0;
  degrees[0] = HUB_NEIGHBOURS;

  // Edges: hub (0) → 1..HUB_NEIGHBOURS (backbone), so its full-tier ego is rich.
  const pairs: number[] = [];
  const types: number[] = [];
  for (let t = 1; t <= HUB_NEIGHBOURS; t++) {
    pairs.push(0, t);
    types.push(0);
  }
  const edgePairs = Uint32Array.from(pairs);
  const edgeTypes = Uint8Array.from(types);
  const csr = pairsToEgoCsr(n, edgePairs, edgeTypes);

  const seed = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    seed[i * 2] = Math.cos(i);
    seed[i * 2 + 1] = Math.sin(i);
  }

  const fields: Ngg1NodeFields = { ids, domains, categories, flags, degrees, labels, iris };
  return parseNgg1(serializeNgg1(seed, fields, csr));
}

/** Mirror of the store's `findLocalByIri` — the string-table lookup under test. */
function findLocalByIri(ngg1: Ngg1, iri: string): number {
  for (let i = 0; i < ngg1.nodeCount; i++) if (ngg1.iri(i) === iri) return i;
  return -1;
}

describe('T1 collapsed → T2 focus index-space handoff', () => {
  const ngg1 = makeDomainTier();

  it('collapses a >300-node domain into a metanode view that surfaces the hub', () => {
    const { scope, model } = buildDomainScope(
      { tier: 'domain', slug: 'artificial-intelligence' },
      ngg1,
      [],
    );
    // Collapsed to the design cap, not the full tier.
    expect(scope.nodeCount).toBeLessThanOrEqual(300);
    expect(scope.nodeCount).toBeLessThan(ngg1.nodeCount);

    // The view mixes synthetic category metanodes with real hub classes.
    const metaCount = [...model.flagsOf].filter((f) => (f & FLAG_META) !== 0).length;
    expect(metaCount).toBeGreaterThan(0);

    // The hub is surfaced as an individual real class (highest degree), and its
    // render-model IRI is the REAL tier IRI (string table), not a metanode urn.
    const hubInst = model.iris.indexOf(HUB_IRI);
    expect(hubInst).toBeGreaterThanOrEqual(0);
    expect(model.flagsOf[hubInst] & FLAG_META).toBe(0);
    expect(parseMetaIri(model.iris[hubInst])).toBeNull();
    // Its collapsed instance index is NOT its full-tier local index (different
    // index spaces — the whole point of the handoff).
    expect(hubInst).not.toBe(0);
  });

  it('resolves the hub IRI via the loaded tier string table (not the render model)', () => {
    const centerLocal = findLocalByIri(ngg1, HUB_IRI);
    expect(centerLocal).toBe(0); // the hub's true local index in the loaded tier
    expect(ngg1.iri(centerLocal)).toBe(HUB_IRI);
    expect(ngg1.label(centerLocal)).toBe(HUB_LABEL);
  });

  it('derives the focus ego-graph over the FULL domain CSR, yielding a populated scope', () => {
    const centerLocal = findLocalByIri(ngg1, HUB_IRI);
    const { scope, model } = buildFocusScope(
      { tier: 'focus', iri: HUB_IRI, radius: 1 },
      ngg1,
      centerLocal,
      1,
    );

    // The defect signature is nodeCount 0/1 (empty scene under a populated
    // breadcrumb). The full-tier ego must carry the hub + its real neighbours.
    expect(scope.nodeCount).toBeGreaterThan(HUB_NEIGHBOURS); // hub + ~200 neighbours
    expect(scope.nodeCount).toBeLessThanOrEqual(INVARIANTS.FOCUS_MAX);
    expect(scope.edgeCount).toBeGreaterThan(0);

    // Centre is first and is the hub itself (BFS emits the centre at index 0).
    expect(model.labels[0]).toBe(HUB_LABEL);
    expect(model.iris[0]).toBe(HUB_IRI);
    expect(scope.nodeIndices[0]).toBe(centerLocal);

    // Seed positions are all finite (a NaN seed would blank the scene).
    for (let i = 0; i < scope.positions.length; i++) {
      expect(Number.isFinite(scope.positions[i])).toBe(true);
    }
  });

  it('a real hub carries a page flag while metanodes are synthetic (double-click routing)', () => {
    // Double-click routing (GraphPage.descend) sends metanodes to expandCategory
    // and real classes to focus; this asserts the discriminator the router uses.
    const { model } = buildDomainScope(
      { tier: 'domain', slug: 'artificial-intelligence' },
      ngg1,
      [],
    );
    const hubInst = model.iris.indexOf(HUB_IRI);
    expect(model.flagsOf[hubInst] & FLAG_HAS_PAGE).toBe(FLAG_HAS_PAGE);

    const metaInst = [...model.flagsOf].findIndex((f) => (f & FLAG_META) !== 0);
    expect(metaInst).toBeGreaterThanOrEqual(0);
    expect(parseMetaIri(model.iris[metaInst])).not.toBeNull();
  });
});
