/**
 * scope.ts — the Exploration-context contract (DDD-NG-001 §3, PRD-NG-001 §5).
 *
 * A `GraphScope` is the aggregate root of the explorer: it holds exactly one
 * tier's working set and is swapped whole on every scope change (INV-2). The
 * renderer only ever sees typed-array views published by a scope (INV-3), and
 * the caps below are enforced HERE, at scope construction — never in the
 * renderer (INV-1). This is the file that makes the old freeze impossible.
 *
 * No runtime dependencies. Pure types + frozen constants + codec signatures.
 */

/* ────────────────────────────── Tier ────────────────────────────────── */

/**
 * The three cardinalities the renderer ever sees (DDD "Tier T0/T1/T2").
 *   overview  → T0: 6 domains + 34 categories, pre-baked, no simulation.
 *   domain    → T1: one domain's classes + subClassOf backbone.
 *   focus     → T2: an ego-graph (radius 1–2) around one class.
 */
export type Tier = 'overview' | 'domain' | 'focus';

/* ───────────────────────────── Invariants ───────────────────────────── */

/**
 * Hard caps. These are contract, not tuning knobs. A scope that would exceed
 * MAX_NODES / MAX_EDGES must be rejected or truncated at construction — the
 * renderer trusts that whatever reaches it is already within budget (INV-1).
 */
export const INVARIANTS = {
  /** On-screen nodes ceiling across all tiers (PRD §5, DDD INV-1). */
  MAX_NODES: 1500,
  /** On-screen edges ceiling across all tiers (PRD §5, DDD INV-1). */
  MAX_EDGES: 4000,
  /** T2 ego-graph breadth cap (DDD §3 FocusNeighbourhood). */
  FOCUS_MAX: 300,
  /** T2 ego-graph maximum radius (PRD §4, DDD §3). */
  FOCUS_RADIUS_MAX: 2,
  /** Top-N labels rendered at once (ADR §4; the rest reachable via search). */
  LABELS_VISIBLE_MAX: 150,
} as const;

export type Invariants = typeof INVARIANTS;

/* ─────────────────────────── Scope reference ────────────────────────── */

/**
 * The URL-serialisable identity of a scope — everything needed to reconstruct
 * it from a deep link (PRD §4: deep links are contracts). This is the *ref*;
 * `GraphScope` is the hydrated aggregate.
 */
export type ScopeRef =
  | { tier: 'overview' }
  | { tier: 'domain'; slug: DomainSlug }
  | { tier: 'focus'; iri: string; radius: FocusRadius };

/** Radius is 1 or 2 only (INVARIANTS.FOCUS_RADIUS_MAX). */
export type FocusRadius = 1 | 2;

/**
 * Canonical domain slugs, fixed order = domain id (FORMAT-NGG1 §6, DDD §2).
 * A `domain:<slug>` scope loads `www/data/graph/domain-<slug>.bin`.
 */
export type DomainSlug =
  | 'artificial-intelligence'
  | 'blockchain'
  | 'spatial-computing'
  | 'robotics'
  | 'distributed-collaboration'
  | 'infrastructure';

/** id (u16 in NGG1) → slug, index === domain id. Frozen. */
export const DOMAIN_SLUGS: readonly DomainSlug[] = [
  'artificial-intelligence',
  'blockchain',
  'spatial-computing',
  'robotics',
  'distributed-collaboration',
  'infrastructure',
] as const;

export const DOMAIN_LABELS: Readonly<Record<DomainSlug, string>> = {
  'artificial-intelligence': 'Artificial Intelligence',
  'blockchain': 'Blockchain',
  'spatial-computing': 'Spatial Computing',
  'robotics': 'Robotics',
  'distributed-collaboration': 'Distributed Collaboration',
  'infrastructure': 'Infrastructure',
} as const;

/* ─────────────────────────── GraphScope ─────────────────────────────── */

/** Simulation lifecycle (DDD INV-4): baked → settling → settled → asleep. */
export type SimPhase = 'baked' | 'settling' | 'settled' | 'asleep';

/**
 * A live, hydrated scope. Owns the working set + the typed-array views the
 * renderer consumes. Construction MUST assert the caps (see assertScope).
 *
 * The `nodeCount`/`edgeCount` here are the *on-screen* counts (post-cap), not
 * the tier's full-graph counts.
 */
export interface GraphScope {
  /** The ref that produced this scope; also its URL identity. */
  readonly ref: ScopeRef;
  readonly tier: Tier;

  /** On-screen counts (≤ INVARIANTS caps — asserted at construction). */
  readonly nodeCount: number;
  readonly edgeCount: number;

  /**
   * Local indices (into the loaded NGG1 tier) that this scope renders.
   * For `overview`/`domain` this is typically all nodes of the artifact; for
   * `focus` it is the ego set. The renderer maps these to instance slots.
   */
  readonly nodeIndices: Uint32Array;

  /**
   * Flat edge endpoint pairs as *scope-local instance indices*
   * [src0, tgt0, src1, tgt1, …], length = edgeCount * 2. Renderer rewrites the
   * LineSegments position buffer from these each frame (ADR §4).
   */
  readonly edgePairs: Uint32Array;
  /** edge_type per edge, length = edgeCount (0 backbone, 1 relation). */
  readonly edgeTypes: Uint8Array;

  /**
   * Live positions, [x0,y0,x1,y1,…] length = nodeCount * 2. This is the buffer
   * the worker owns and hands back each frame (transferable or SAB). Seeded
   * from NGG1 node x,y (warm start); mutated only by the worker.
   */
  readonly positions: Float32Array;

  /** Simulation phase (DDD INV-4). `settling` requires nodeCount ≤ MAX_NODES. */
  phase: SimPhase;
}

/**
 * Construction guard. Throws if a scope violates INV-1 / INV-4. Builders MUST
 * call this before publishing a scope to the store — it is the single choke
 * point that replaces the old "render everything and pray" path.
 */
export function assertScope(s: Pick<GraphScope, 'nodeCount' | 'edgeCount' | 'tier' | 'phase'>): void {
  if (s.nodeCount > INVARIANTS.MAX_NODES) {
    throw new RangeError(`GraphScope INV-1: nodeCount ${s.nodeCount} > MAX_NODES ${INVARIANTS.MAX_NODES}`);
  }
  if (s.edgeCount > INVARIANTS.MAX_EDGES) {
    throw new RangeError(`GraphScope INV-1: edgeCount ${s.edgeCount} > MAX_EDGES ${INVARIANTS.MAX_EDGES}`);
  }
  if (s.tier === 'focus' && s.nodeCount > INVARIANTS.FOCUS_MAX) {
    throw new RangeError(`GraphScope INV-1: focus nodeCount ${s.nodeCount} > FOCUS_MAX ${INVARIANTS.FOCUS_MAX}`);
  }
  if (s.phase === 'settling' && s.nodeCount > INVARIANTS.MAX_NODES) {
    throw new RangeError('GraphScope INV-4: entered "settling" above MAX_NODES');
  }
}

/* ──────────────────────── scope ⇄ URL codec ─────────────────────────── */

/**
 * URL contract (PRD §4 — deep links are contracts):
 *   /graph                              → { tier: 'overview' }
 *   /graph?scope=domain:<slug>          → { tier: 'domain', slug }
 *   /graph?focus=<class-iri>&r=1|2      → { tier: 'focus', iri, radius }
 *
 * The codec is the *only* place these strings are produced/parsed. History-API
 * back/forward restores scope by round-tripping through here (ADR §5).
 */

/** Query-string shape the router reads/writes. Both keys optional. */
export interface ScopeQuery {
  /** e.g. "domain:blockchain" — absent ⇒ overview. */
  scope?: string;
  /** class IRI for focus tier. */
  focus?: string;
  /** "1" | "2" — focus radius. */
  r?: string;
}

/** Serialise a ScopeRef into `?scope=`/`?focus=`/`&r=` params. */
export function encodeScope(ref: ScopeRef): ScopeQuery {
  if (ref.tier === 'domain') return { scope: `domain:${ref.slug}` };
  if (ref.tier === 'focus') return { focus: ref.iri, r: String(ref.radius) };
  return {};
}

/** As a `?…` query string (empty for overview). Pairs with `encodeScope`. */
export function encodeScopeQuery(ref: ScopeRef): string {
  const q = encodeScope(ref);
  const p = new URLSearchParams();
  if (q.scope) p.set('scope', q.scope);
  if (q.focus) {
    p.set('focus', q.focus);
    if (q.r) p.set('r', q.r);
  }
  const s = p.toString();
  return s ? `?${s}` : '';
}

/**
 * Parse router params back into a ScopeRef. Invalid/absent → overview (never
 * throws — a bad deep link degrades to T0, PRD §5 "search-first, starts at T0").
 * `radius` is clamped to [1, FOCUS_RADIUS_MAX].
 */
export function decodeScope(q: ScopeQuery): ScopeRef {
  if (q.focus) {
    const raw = Number.parseInt(q.r ?? '1', 10);
    const clamped = Math.min(INVARIANTS.FOCUS_RADIUS_MAX, Math.max(1, Number.isFinite(raw) ? raw : 1));
    return { tier: 'focus', iri: q.focus, radius: clamped as FocusRadius };
  }
  if (q.scope && q.scope.startsWith('domain:')) {
    const slug = q.scope.slice('domain:'.length);
    if ((DOMAIN_SLUGS as readonly string[]).includes(slug)) {
      return { tier: 'domain', slug: slug as DomainSlug };
    }
  }
  return { tier: 'overview' };
}

/** Parse a router `URLSearchParams` directly. Convenience over `decodeScope`. */
export function decodeScopeParams(params: URLSearchParams): ScopeRef {
  return decodeScope({
    scope: params.get('scope') ?? undefined,
    focus: params.get('focus') ?? undefined,
    r: params.get('r') ?? undefined,
  });
}

/** Stable string key for a scope (cache keys, store selectors, telemetry). */
export function scopeKey(ref: ScopeRef): string {
  if (ref.tier === 'domain') return `domain:${ref.slug}`;
  if (ref.tier === 'focus') return `focus:${ref.iri}:${ref.radius}`;
  return 'overview';
}

/** True when two refs denote the same scope (skip reload/reheat when equal). */
export function scopeRefEquals(a: ScopeRef, b: ScopeRef): boolean {
  return scopeKey(a) === scopeKey(b);
}
