/**
 * scopeStore.ts — the `GraphScope` aggregate, hosted in zustand.
 *
 * This store is the choke point named in DDD-NG-001 §3: it is the ONLY place a
 * `GraphScope` is constructed, and every construction runs `assertScope()`
 * (INV-1 caps, INV-4 phase gate) before the scope is published. Scope change is
 * a whole-aggregate swap (INV-2) — the previous working set, its render model
 * and selection are dropped atomically; the renderer never mutates a live scope
 * into a larger one. The renderer consumes only the typed-array views a scope
 * publishes (INV-3); no per-entity objects cross into the scene graph.
 *
 * The store also owns the loaded NGG1 tier reader so a `focus` (T2) scope can be
 * derived client-side via `computeEgoGraph` (DDD FocusNeighbourhood), and a
 * parallel `RenderModel` of per-instance metadata (domain / degree / flags /
 * label / iri / id) so the instanced renderers get O(1) attribute lookups
 * without re-reading the DataView every frame. `RenderModel` is a rendering
 * concern, deliberately kept OUT of the frozen `GraphScope` contract.
 *
 * Interaction contract for the UX/router builder (PRD §5 reading round-trip):
 *   - `selectedInstance` / `hoveredInstance` live here.
 *   - `registerHandlers({ onNodeClick, onNodeDoubleClick, onBackgroundClick })`
 *     wires side-panel + tier descent + read-page without this store importing
 *     any router/page code.
 */

import { create } from 'zustand';
import type { Ngg1, Ngg1NodeFields } from '../lib/ngg1';
import {
  CATEGORY_NONE,
  FLAG_HAS_PAGE,
  FLAG_META,
  pairsToEgoCsr,
  radialEgoSeed,
  serializeEgoNgg1,
  serializeNgg1,
} from '../lib/ngg1';
import {
  INVARIANTS,
  assertScope,
  type GraphScope,
  type ScopeRef,
  type FocusRadius,
  type SimPhase,
} from '../types/scope';

/* ───────────────────────── render model (not the aggregate) ──────────────── */

/**
 * Per-instance metadata the instanced renderers need, indexed by *scope-local
 * instance index* (0..scope.nodeCount). Derived once at scope construction from
 * the NGG1 tier (or supplied directly for the ngg1-less overview tier). Never
 * touched per frame; positions are the only thing that changes each frame.
 */
export interface RenderModel {
  /** domain id per instance (index into DOMAIN_SLUGS / --ng-domain-N). */
  readonly domainOf: Uint16Array;
  /** category id per instance (taxonomy index; CATEGORY_NONE when uncategorised). */
  readonly categoryOf: Uint16Array;
  /** full-graph incident degree per instance — ranking key for labels + scale. */
  readonly degreeOf: Float32Array;
  /** node flags bitfield per instance (FORMAT-NGG1 §5). */
  readonly flagsOf: Uint8Array;
  /** label per instance (string table [i*2]). */
  readonly labels: readonly string[];
  /** IRI per instance (string table [i*2+1]). */
  readonly iris: readonly string[];
  /** external stable id per instance. */
  readonly ids: Uint32Array;
  /** highest degree in this scope — precomputed for scale/label normalisation. */
  readonly maxDegree: number;
}

/** Everything the UX layer needs about a clicked/hovered node. */
export interface NodeContext {
  instanceIndex: number;
  localIndex: number;
  id: number;
  iri: string;
  label: string;
  domain: number;
  degree: number;
  hasPage: boolean;
}

export interface InteractionHandlers {
  onNodeClick?(ctx: NodeContext): void;
  onNodeDoubleClick?(ctx: NodeContext): void;
  onBackgroundClick?(): void;
}

/** Explicit input for building the ngg1-less overview (T0) scope. */
export interface OverviewInput {
  /** seed positions [x0,y0,x1,y1,…], length nodeCount*2. */
  positions: Float32Array;
  domainOf: Uint16Array;
  /** category id per node (taxonomy index; CATEGORY_NONE when uncategorised). */
  categoryOf: Uint16Array;
  degreeOf: Float32Array;
  flagsOf: Uint8Array;
  ids: Uint32Array;
  labels: string[];
  iris: string[];
  /** flat endpoint pairs [src,tgt,…] as scope-local instance indices. */
  edgePairs: Uint32Array;
  edgeTypes: Uint8Array;
}

/* ─────────────────────────── scope builders (pure) ───────────────────────── */

/** instance-index lookup keyed by NGG1 local index; −1 when not in the scope. */
function buildLocalOf(indices: Uint32Array, nodeCount: number): Int32Array {
  const m = new Int32Array(nodeCount).fill(-1);
  for (let i = 0; i < indices.length; i++) m[indices[i]] = i;
  return m;
}

function deriveModel(ngg1: Ngg1, indices: Uint32Array): RenderModel {
  const n = indices.length;
  const domainOf = new Uint16Array(n);
  const categoryOf = new Uint16Array(n);
  const degreeOf = new Float32Array(n);
  const flagsOf = new Uint8Array(n);
  const ids = new Uint32Array(n);
  const labels: string[] = new Array(n);
  const iris: string[] = new Array(n);
  let maxDegree = 1;
  for (let i = 0; i < n; i++) {
    const g = indices[i];
    domainOf[i] = ngg1.getDomain(g);
    categoryOf[i] = ngg1.getCategory(g);
    const d = ngg1.getDegree(g);
    degreeOf[i] = d;
    if (d > maxDegree) maxDegree = d;
    flagsOf[i] = ngg1.getFlags(g);
    ids[i] = ngg1.getId(g);
    labels[i] = ngg1.label(g);
    iris[i] = ngg1.iri(g);
  }
  return { domainOf, categoryOf, degreeOf, flagsOf, ids, labels, iris, maxDegree };
}

/** seed positions for a set of NGG1 local indices, in instance order. */
function gatherSeedPositions(ngg1: Ngg1, indices: Uint32Array): Float32Array {
  const out = new Float32Array(indices.length * 2);
  for (let i = 0; i < indices.length; i++) {
    const g = indices[i];
    out[i * 2] = ngg1.getX(g);
    out[i * 2 + 1] = ngg1.getY(g);
  }
  return out;
}

/**
 * Induced-subgraph edges over `indices`, remapped to instance indices and
 * capped at MAX_EDGES (defensive — pipeline tiers ship within budget). Returns
 * flat instance pairs + aligned edge types.
 */
function deriveEdgesFromCsr(
  ngg1: Ngg1,
  indices: Uint32Array,
  localOf: Int32Array,
): { edgePairs: Uint32Array; edgeTypes: Uint8Array } {
  const pairs: number[] = [];
  const types: number[] = [];
  const { rowPtr, colIdx, edgeType } = ngg1;
  outer: for (let i = 0; i < indices.length; i++) {
    const src = indices[i];
    for (let e = rowPtr[src]; e < rowPtr[src + 1]; e++) {
      const tgtInstance = localOf[colIdx[e]];
      if (tgtInstance < 0) continue; // endpoint outside the scope
      if (pairs.length >= INVARIANTS.MAX_EDGES * 2) break outer;
      pairs.push(i, tgtInstance);
      types.push(edgeType[e]);
    }
  }
  return { edgePairs: Uint32Array.from(pairs), edgeTypes: Uint8Array.from(types) };
}

/**
 * T1 design target: the domain opens as a collapsed *category-metanode* view of
 * ≈300 visible nodes (PRD-NG-001 §9a delta #1), NOT the full ≤1,500-node tier
 * (which reads as a hairball with an illegible label storm). The 1,500/4,000
 * caps stay as technical ceilings (INV-1); this is the design cap.
 */
const T1_TARGET_VISIBLE = 300;

/** Synthetic IRI for a collapsed category metanode (parsed back on expand). */
function metaIri(domainId: number, catId: number): string {
  return `urn:ngg:meta:${domainId}:${catId}`;
}

/** Recover the category id from a metanode IRI, or null if it isn't one. */
export function parseMetaIri(iri: string): { domainId: number; catId: number } | null {
  const m = /^urn:ngg:meta:(\d+):(\d+)$/.exec(iri);
  return m ? { domainId: Number(m[1]), catId: Number(m[2]) } : null;
}

/** A fully-built scope + its render model, ready to swap into the store. */
export interface BuiltScope {
  scope: GraphScope;
  model: RenderModel;
  /**
   * Standalone NGG1 buffer (byteOffset 0) to hand the physics worker for tiers
   * that must settle client-side. Present for `focus` (a minted ego tier — ADR
   * §2 ships no focus artifact); absent for `domain` (the loaded tier buffer is
   * used directly) and `overview` (baked, no sim).
   */
  workerBuffer?: ArrayBuffer;
}

/**
 * Build the T1 domain scope. Small domains (≤ T1_TARGET_VISIBLE) render whole;
 * larger ones open as a collapsed category-metanode view (PRD §9a #1), with any
 * `expandedCats` shown as their member classes. Runs assertScope.
 */
export function buildDomainScope(
  ref: ScopeRef,
  ngg1: Ngg1,
  categoryLabels: readonly string[] = [],
  expandedCats: ReadonlySet<number> = EMPTY_CATS,
): BuiltScope {
  return ngg1.nodeCount <= T1_TARGET_VISIBLE
    ? buildFullDomainScope(ref, ngg1)
    : buildCollapsedDomainScope(ref, ngg1, categoryLabels, expandedCats);
}

const EMPTY_CATS: ReadonlySet<number> = new Set<number>();

/** Whole-tier domain scope (small domains): every class, baked seed, no metanodes. */
function buildFullDomainScope(ref: ScopeRef, ngg1: Ngg1): BuiltScope {
  const n = ngg1.nodeCount;
  const indices = new Uint32Array(n);
  for (let i = 0; i < n; i++) indices[i] = i;
  const localOf = buildLocalOf(indices, ngg1.nodeCount);
  const { edgePairs, edgeTypes } = deriveEdgesFromCsr(ngg1, indices, localOf);
  const model = deriveModel(ngg1, indices);
  const scope: GraphScope = {
    ref,
    tier: 'domain',
    nodeCount: indices.length,
    edgeCount: edgeTypes.length,
    nodeIndices: indices,
    edgePairs,
    edgeTypes,
    positions: gatherSeedPositions(ngg1, indices),
    phase: 'baked',
  };
  assertScope(scope);
  return { scope, model };
}

/**
 * Collapsed T1: one metanode per collapsed category + the globally highest-degree
 * hub classes + the member classes of any expanded categories, held to
 * ≈T1_TARGET_VISIBLE by centrality pruning. Every real edge is projected onto its
 * representative instance (hub→itself, else the category metanode) and de-duped,
 * so the collapsed graph keeps the domain's structure without the hairball. A
 * synthetic NGG1 buffer is minted so the worker settles it like any tier.
 */
function buildCollapsedDomainScope(
  ref: ScopeRef,
  ngg1: Ngg1,
  categoryLabels: readonly string[],
  expandedCats: ReadonlySet<number>,
): BuiltScope {
  const n = ngg1.nodeCount;
  const domainId = n > 0 ? ngg1.getDomain(0) : 0;

  // Per-node category + degree (one pass).
  const catOf = new Uint16Array(n);
  const degOf = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    catOf[i] = ngg1.getCategory(i);
    degOf[i] = ngg1.getDegree(i);
  }

  // Categories present, ascending; split collapsed vs expanded.
  const catMembers = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const c = catOf[i];
    const arr = catMembers.get(c);
    if (arr) arr.push(i);
    else catMembers.set(c, [i]);
  }
  const cats = [...catMembers.keys()].sort((a, b) => a - b);
  const collapsedCats = cats.filter((c) => !expandedCats.has(c));

  const metaCount = collapsedCats.length;
  const realBudget = Math.max(0, T1_TARGET_VISIBLE - metaCount);

  // Real classes surfaced individually: expanded members first, then global hubs
  // by degree, capped to the budget (LOD by centrality — ADR §9a).
  const realSet = new Set<number>();
  for (const c of cats) {
    if (!expandedCats.has(c)) continue;
    for (const m of catMembers.get(c)!) realSet.add(m);
  }
  const byDegree = new Uint32Array(n);
  for (let i = 0; i < n; i++) byDegree[i] = i;
  byDegree.sort((a, b) => degOf[b] - degOf[a]);
  for (let k = 0; k < n && realSet.size < realBudget; k++) realSet.add(byDegree[k]);
  let realNodes = [...realSet].sort((a, b) => degOf[b] - degOf[a]);
  if (realNodes.length > realBudget) realNodes = realNodes.slice(0, realBudget);

  const V = metaCount + realNodes.length;

  // Instance maps.
  const metaInstOf = new Map<number, number>();
  collapsedCats.forEach((c, idx) => metaInstOf.set(c, idx));
  const realInstOf = new Map<number, number>();
  realNodes.forEach((local, idx) => realInstOf.set(local, metaCount + idx));

  const repOf = (local: number): number => {
    const ri = realInstOf.get(local);
    if (ri !== undefined) return ri;
    const mi = metaInstOf.get(catOf[local]);
    return mi !== undefined ? mi : -1; // pruned expanded member: dropped
  };

  // Node fields.
  const ids = new Uint32Array(V);
  const domains = new Uint16Array(V);
  const categories = new Uint16Array(V);
  const flags = new Uint8Array(V);
  const degrees = new Uint32Array(V);
  const labels: string[] = new Array(V);
  const iris: string[] = new Array(V);
  const nodeIndices = new Uint32Array(V);

  collapsedCats.forEach((c, idx) => {
    const members = catMembers.get(c)!;
    const catName =
      c === CATEGORY_NONE ? 'Uncategorised' : categoryLabels[c] ?? `Category ${c}`;
    ids[idx] = (0xf0000000 | (c & 0x00ffffff)) >>> 0;
    domains[idx] = domainId;
    categories[idx] = c;
    flags[idx] = FLAG_META;
    degrees[idx] = members.length; // size + label-rank signal (category weight)
    labels[idx] = `${catName} · ${members.length}`;
    iris[idx] = metaIri(domainId, c);
    nodeIndices[idx] = members[0]; // in-range sentinel (no real meaning)
  });
  realNodes.forEach((local, j) => {
    const inst = metaCount + j;
    ids[inst] = ngg1.getId(local);
    domains[inst] = ngg1.getDomain(local);
    categories[inst] = catOf[local];
    flags[inst] = ngg1.getFlags(local);
    degrees[inst] = degOf[local];
    labels[inst] = ngg1.label(local);
    iris[inst] = ngg1.iri(local);
    nodeIndices[inst] = local;
  });

  // Collapsed edges: project every real edge onto its representative instance and
  // undirected-dedupe (keeping the strongest register — backbone wins over
  // relation for a pair). A raw projection of a 1,500-node domain yields a
  // 4,000-edge spiderweb even at 300 nodes (the "Uncategorised" metanode alone
  // touches everything), so we then prune to a readable skeleton: backbone edges
  // first, then a per-node degree cap (K_COLLAPSE) so no metanode radiates a fan.
  // This keeps the structural taxonomy visible without the hairball (PRD §5).
  const { rowPtr, colIdx, edgeType } = ngg1;
  const seenType = new Map<number, number>(); // pair-key → best (min) edge type
  for (let src = 0; src < n; src++) {
    const rs = repOf(src);
    if (rs < 0) continue;
    for (let e = rowPtr[src]; e < rowPtr[src + 1]; e++) {
      const rt = repOf(colIdx[e]);
      if (rt < 0 || rt === rs) continue;
      const a = rs < rt ? rs : rt;
      const b = rs < rt ? rt : rs;
      const key = a * V + b;
      const prev = seenType.get(key);
      const t = edgeType[e];
      if (prev === undefined || t < prev) seenType.set(key, t);
    }
  }
  // Materialise deduped edges, backbone (type 0) first for the pruning pass.
  const ea: number[] = [];
  const eb: number[] = [];
  const et: number[] = [];
  const backboneKeys: number[] = [];
  const relationKeys: number[] = [];
  for (const [key, t] of seenType) (t === 0 ? backboneKeys : relationKeys).push(key);
  const K_COLLAPSE = 6; // max incident collapsed edges per node
  const deg = new Uint16Array(V);
  const takeKey = (key: number, t: number): void => {
    const a = Math.floor(key / V);
    const b = key % V;
    if (deg[a] >= K_COLLAPSE || deg[b] >= K_COLLAPSE) return;
    if (eb.length >= INVARIANTS.MAX_EDGES) return;
    ea.push(a);
    eb.push(b);
    et.push(t);
    deg[a]++;
    deg[b]++;
  };
  for (const key of backboneKeys) takeKey(key, 0);
  for (const key of relationKeys) takeKey(key, 1);
  const edgePairs = new Uint32Array(eb.length * 2);
  for (let k = 0; k < eb.length; k++) {
    edgePairs[k * 2] = ea[k];
    edgePairs[k * 2 + 1] = eb[k];
  }
  const edgeTypes = Uint8Array.from(et);

  // Seed layout: metanodes on an outer ring, hubs on an inner golden spiral near
  // their category. The worker settles from here; fit() frames the result.
  const positions = new Float32Array(V * 2);
  const RING = 300;
  collapsedCats.forEach((_, idx) => {
    const ang = (2 * Math.PI * idx) / Math.max(1, metaCount);
    positions[idx * 2] = RING * Math.cos(ang);
    positions[idx * 2 + 1] = RING * Math.sin(ang);
  });
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let j = 0; j < realNodes.length; j++) {
    const inst = metaCount + j;
    const mi = metaInstOf.get(categories[inst]);
    const r = 24 * Math.sqrt(j + 1);
    const ang = (j + 1) * golden;
    const bx = mi !== undefined ? positions[mi * 2] * 0.55 : 0;
    const by = mi !== undefined ? positions[mi * 2 + 1] * 0.55 : 0;
    positions[inst * 2] = bx + r * Math.cos(ang) * 0.35;
    positions[inst * 2 + 1] = by + r * Math.sin(ang) * 0.35;
  }

  let maxDegree = 1;
  for (let i = 0; i < V; i++) if (degrees[i] > maxDegree) maxDegree = degrees[i];
  const model: RenderModel = {
    domainOf: domains,
    categoryOf: categories,
    degreeOf: Float32Array.from(degrees),
    flagsOf: flags,
    ids,
    labels,
    iris,
    maxDegree,
  };

  const csr = pairsToEgoCsr(V, edgePairs, edgeTypes);
  const fields: Ngg1NodeFields = { ids, domains, categories, flags, degrees, labels, iris };
  const workerBuffer = serializeNgg1(positions, fields, csr);

  const scope: GraphScope = {
    ref,
    tier: 'domain',
    nodeCount: V,
    edgeCount: edgeTypes.length,
    nodeIndices,
    edgePairs,
    edgeTypes,
    positions,
    phase: 'baked',
  };
  assertScope(scope);
  return { scope, model, workerBuffer };
}

/**
 * Build a T2 focus scope: an ego-graph of `centerLocal` at `radius`, breadth
 * capped at FOCUS_MAX (DDD FocusNeighbourhood). Derived purely from the loaded
 * domain CSR (ADR §2 — no focus artifact is shipped). Runs assertScope.
 */
export function buildFocusScope(
  ref: ScopeRef,
  ngg1: Ngg1,
  centerLocal: number,
  radius: FocusRadius,
): BuiltScope {
  const ego = ngg1.computeEgoGraph(centerLocal, radius, INVARIANTS.FOCUS_MAX);
  const indices = ego.nodes;
  const localOf = buildLocalOf(indices, ngg1.nodeCount);

  // Remap ego edge pairs (source-local) → instance indices, cap defensively.
  const maxPairs = INVARIANTS.MAX_EDGES;
  const pairCount = Math.min(ego.edgeTypes.length, maxPairs);
  const edgePairs = new Uint32Array(pairCount * 2);
  const edgeTypes = new Uint8Array(pairCount);
  for (let k = 0; k < pairCount; k++) {
    edgePairs[k * 2] = localOf[ego.edgePairs[k * 2]];
    edgePairs[k * 2 + 1] = localOf[ego.edgePairs[k * 2 + 1]];
    edgeTypes[k] = ego.edgeTypes[k];
  }

  const model = deriveModel(ngg1, indices);

  // A focus tier settles client-side (ADR §2 ships no focus artifact). Warm-start
  // from a radial spiral — NOT the scattered source positions — and mint a
  // compact standalone NGG1 sub-tier so the worker drives it like any tier
  // (≤ FOCUS_MAX nodes ⇒ settles well under a second).
  const positions = radialEgoSeed(indices.length);
  const csr = pairsToEgoCsr(indices.length, edgePairs, edgeTypes);
  const workerBuffer = serializeEgoNgg1(ngg1, indices, positions, csr);

  const scope: GraphScope = {
    ref,
    tier: 'focus',
    nodeCount: indices.length,
    edgeCount: pairCount,
    nodeIndices: indices,
    edgePairs,
    edgeTypes,
    positions,
    phase: 'baked',
  };
  assertScope(scope);
  return { scope, model, workerBuffer };
}

/** Build the ngg1-less T0 overview scope from explicit arrays. Runs assertScope. */
export function buildOverviewScope(input: OverviewInput): BuiltScope {
  const n = input.ids.length;
  const nodeIndices = new Uint32Array(n);
  for (let i = 0; i < n; i++) nodeIndices[i] = i; // overview is its own index space
  let maxDegree = 1;
  for (let i = 0; i < n; i++) if (input.degreeOf[i] > maxDegree) maxDegree = input.degreeOf[i];
  const scope: GraphScope = {
    ref: { tier: 'overview' },
    tier: 'overview',
    nodeCount: n,
    edgeCount: input.edgeTypes.length,
    nodeIndices,
    edgePairs: input.edgePairs,
    edgeTypes: input.edgeTypes,
    positions: input.positions,
    phase: 'baked',
  };
  assertScope(scope);
  const model: RenderModel = {
    domainOf: input.domainOf,
    categoryOf: input.categoryOf,
    degreeOf: input.degreeOf,
    flagsOf: input.flagsOf,
    ids: input.ids,
    labels: input.labels,
    iris: input.iris,
    maxDegree,
  };
  return { scope, model };
}

/** Build the NodeContext for an instance (null if out of range). */
export function contextFor(
  scope: GraphScope | null,
  model: RenderModel | null,
  instance: number,
): NodeContext | null {
  if (!scope || !model || instance < 0 || instance >= scope.nodeCount) return null;
  return {
    instanceIndex: instance,
    localIndex: scope.nodeIndices[instance],
    id: model.ids[instance],
    iri: model.iris[instance],
    label: model.labels[instance],
    domain: model.domainOf[instance],
    degree: model.degreeOf[instance],
    hasPage: (model.flagsOf[instance] & FLAG_HAS_PAGE) !== 0,
  };
}

/* ────────────────────────────────── store ────────────────────────────────── */

export interface ScopeStore {
  /** The live hydrated aggregate (INV-2: swapped whole, never mutated bigger). */
  scope: GraphScope | null;
  /** Per-instance render metadata for the current scope. */
  model: RenderModel | null;
  /** The loaded domain-tier reader, kept for T2 focus derivation. Null on overview. */
  ngg1: Ngg1 | null;
  /**
   * Standalone NGG1 bytes (byteOffset 0) handed to the physics worker's
   * `loadScope` (SimulationBridge): the whole loaded tier for `domain`, a minted
   * ego sub-tier for `focus` (both have identity instance↔local order). Null on
   * overview (baked, no sim).
   */
  buffer: ArrayBuffer | null;
  /** Monotonic scope generation — echoed to the worker to drop stale frames. */
  generation: number;
  /** Simulation phase mirror (drives the renderer's frameloop). */
  phase: SimPhase;
  /** Bumped to ask the camera to re-fit — e.g. when a focus scope's first
   *  worker frame lands and the settled layout differs from the seed the swap
   *  framed (production T2 blank, 2026-07-23). */
  fitNonce: number;

  /** Selected / hovered instance index (scope-local), null when none. */
  selectedInstance: number | null;
  hoveredInstance: number | null;

  handlers: InteractionHandlers;

  /** T1 collapsed-view state: the domain ref, category labels, expanded cats. */
  domainRef: ScopeRef | null;
  categoryLabels: readonly string[];
  expandedCats: ReadonlySet<number>;

  /* ── scope lifecycle ── */
  /** Load a T1 domain tier: build the collapsed view, assert, swap; retains ngg1. */
  loadDomain(ref: ScopeRef, ngg1: Ngg1, categoryLabels?: readonly string[]): void;
  /** Expand a collapsed category metanode in place (rebuilds the T1 scope). */
  expandCategory(catId: number): void;
  /** Descend to a T2 focus ego-graph around a scope-local instance index. */
  focusByInstance(instance: number, radius?: FocusRadius): void;
  /** Descend to a T2 focus ego-graph around a class IRI (scans the loaded tier). */
  focusByIri(iri: string, radius?: FocusRadius): boolean;
  /** Swap in the ngg1-less overview scope. */
  setOverview(input: OverviewInput): void;
  /** Low-level whole-aggregate swap (builder already asserted). */
  swap(built: BuiltScope, ngg1: Ngg1 | null): void;
  /** Worker/integration flips the sim phase (baked→settling→settled→asleep). */
  setPhase(phase: SimPhase): void;
  /** Ask the camera to re-frame the current scope on the next effect tick. */
  requestFit(): void;

  /* ── interaction contract (UX/router builder wires these) ── */
  registerHandlers(handlers: InteractionHandlers): void;
  setHovered(instance: number | null): void;
  clickNode(instance: number): void;
  doubleClickNode(instance: number): void;
  clickBackground(): void;
}

/** Find the NGG1 local index of a class IRI in the loaded tier (O(n)). */
function findLocalByIri(ngg1: Ngg1, iri: string): number {
  for (let i = 0; i < ngg1.nodeCount; i++) if (ngg1.iri(i) === iri) return i;
  return -1;
}

export const useScopeStore = create<ScopeStore>((set, get) => ({
  scope: null,
  model: null,
  ngg1: null,
  buffer: null,
  generation: 0,
  phase: 'baked',
  fitNonce: 0,
  selectedInstance: null,
  hoveredInstance: null,
  handlers: {},
  domainRef: null,
  categoryLabels: [],
  expandedCats: new Set<number>(),

  swap: (built, ngg1) =>
    set((s) => ({
      scope: built.scope,
      model: built.model,
      ngg1,
      // Which buffer drives the worker for this scope:
      //   focus  → the minted ego sub-tier (built.workerBuffer), instance order
      //            == its own node order, so it settles into a coherent ego layout.
      //   domain → the loaded whole tier (identity instance↔local mapping).
      //   overview → none (baked, no sim).
      buffer:
        built.workerBuffer ??
        (ngg1 && built.scope.tier === 'domain' ? (ngg1.rowPtr.buffer as ArrayBuffer) : null),
      phase: built.scope.phase,
      generation: s.generation + 1,
      selectedInstance: null,
      hoveredInstance: null,
    })),

  loadDomain: (ref, ngg1, categoryLabels = []) => {
    const expandedCats = new Set<number>();
    set({ domainRef: ref, categoryLabels, expandedCats });
    get().swap(buildDomainScope(ref, ngg1, categoryLabels, expandedCats), ngg1);
  },

  expandCategory: (catId) => {
    const { domainRef, ngg1, categoryLabels, expandedCats } = get();
    if (!domainRef || !ngg1) return;
    if (expandedCats.has(catId)) return;
    const next = new Set(expandedCats);
    next.add(catId);
    set({ expandedCats: next });
    get().swap(buildDomainScope(domainRef, ngg1, categoryLabels, next), ngg1);
  },

  setOverview: (input) => get().swap(buildOverviewScope(input), null),

  focusByInstance: (instance, radius = 1) => {
    const { scope, ngg1 } = get();
    if (!scope || !ngg1) return;
    if (instance < 0 || instance >= scope.nodeCount) return;
    const centerLocal = scope.nodeIndices[instance];
    const iri = ngg1.iri(centerLocal);
    const ref: ScopeRef = { tier: 'focus', iri, radius };
    get().swap(buildFocusScope(ref, ngg1, centerLocal, radius), ngg1);
  },

  focusByIri: (iri, radius = 1) => {
    const { ngg1 } = get();
    if (!ngg1) return false;
    const centerLocal = findLocalByIri(ngg1, iri);
    if (centerLocal < 0) return false;
    const ref: ScopeRef = { tier: 'focus', iri, radius };
    get().swap(buildFocusScope(ref, ngg1, centerLocal, radius), ngg1);
    return true;
  },

  setPhase: (phase) =>
    set((s) => {
      if (s.scope) s.scope.phase = phase; // keep the aggregate consistent
      return { phase };
    }),

  requestFit: () => set((s) => ({ fitNonce: s.fitNonce + 1 })),

  registerHandlers: (handlers) => set({ handlers }),

  setHovered: (instance) =>
    set((s) => (s.hoveredInstance === instance ? s : { hoveredInstance: instance })),

  clickNode: (instance) => {
    const { scope, model, handlers } = get();
    set({ selectedInstance: instance });
    const ctx = contextFor(scope, model, instance);
    if (ctx) handlers.onNodeClick?.(ctx);
  },

  doubleClickNode: (instance) => {
    const { scope, model, handlers } = get();
    const ctx = contextFor(scope, model, instance);
    set({ selectedInstance: instance });
    if (ctx && handlers.onNodeDoubleClick) {
      // Router owns tier descent (it also updates the URL) — defer to it.
      handlers.onNodeDoubleClick(ctx);
    } else {
      // No router wired: derive the focus scope in place (PRD §5 default).
      get().focusByInstance(instance, 1);
    }
  },

  clickBackground: () => {
    set({ selectedInstance: null });
    get().handlers.onBackgroundClick?.();
  },
}));
