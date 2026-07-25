/**
 * components/UI/types.ts — explorer UI view-models.
 *
 * The chrome components (breadcrumb, side panel, legend, search, node-list)
 * depend ONLY on these plain view-models — never on scopeStore's internal
 * shape. GraphPage maps the renderer's scopeStore state into these, so the one
 * place that couples to the renderer contract is GraphPage, not every widget.
 *
 * Node metadata is read from the frozen NGG1 reader (lib/ngg1.ts) and the T0
 * overview data; the view-model normalises both tiers into one flat record.
 */

import type { ScopeRef, Tier, DomainSlug } from '../../types/scope';

/* ─────────────────────────── node view-model ────────────────────────── */

/**
 * A single node as the chrome needs it. `index` is the *scope-local instance
 * index* — the same integer GraphCanvas hands back in onNode* callbacks and the
 * position of this node within `GraphScope.nodeIndices`. All the rest is read
 * from the frozen NGG1 accessors (label/iri/getDomain/getCategory/getDegree/
 * getFlags) or the overview.json record for T0.
 */
export interface ScopeNode {
  /** scope-local instance index (GraphCanvas callback identity). */
  readonly index: number;
  /** external NGG1 `id` (page-API / stats identity). */
  readonly id: number;
  readonly label: string;
  readonly iri: string;
  /** domain id — index into DOMAIN_SLUGS. */
  readonly domain: number;
  /** category id — index into the 34-entry taxonomy, or CATEGORY_NONE. */
  readonly category: number;
  /** full-graph incident degree (the *declared* degree; ranking key). */
  readonly degree: number;
  /** FLAG_* bitfield (domain-root / category-root / has-page / bridge). */
  readonly flags: number;
}

/* ─────────────────────────── breadcrumb ─────────────────────────────── */

/** One breadcrumb step. `ref` null ⇒ the current (non-clickable) crumb. */
export interface Crumb {
  readonly label: string;
  readonly ref: ScopeRef | null;
  readonly kind: Tier;
}

/* ─────────────────────────── edge controls ──────────────────────────── */

/** Backbone (subClassOf) vs relation (objectProperty) visibility toggles. */
export interface EdgeToggles {
  readonly backbone: boolean;
  readonly relations: boolean;
}

/** Edge-label rendering mode (PRD §9a: the surviving edge-label control). */
export type EdgeLabelMode = 'off' | 'hover' | 'on';

/* ─────────────────────────── provenance ─────────────────────────────── */

/**
 * Dataset provenance for the side-panel provenance line + honest degree.
 * All fields pipeline-derived (stats.json); absent ⇒ the line self-hides.
 */
export interface ProvenanceInfo {
  /** e.g. "did:nostr:jjohare" (PRD §8 provenance chip). */
  readonly attributedTo?: string;
  /** ISO date the dataset was generated (prov:generatedAtTime). */
  readonly generatedAt?: string;
  /** pipeline version string (PRD §7). */
  readonly pipelineVersion?: string;
}

/* ─────────────────────────── re-exports ─────────────────────────────── */

export type { ScopeRef, Tier, DomainSlug };
