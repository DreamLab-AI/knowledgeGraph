/**
 * useStats.ts — the ONLY reader of pipeline-derived counts (PRD-NG-001 §7).
 *
 * Every number on the site traces to one PublishRun's `stats.json` (DDD INV-5).
 * Nothing here hard-codes a count: if the artifact is absent, callers render a
 * quiet placeholder — never a fabricated figure. Fetched from the published
 * artifact contract `www/data/graph/stats.json` (ADR-NG-001 §2).
 */

import { useEffect, useState } from 'react';

/**
 * The corpus's own honest self-description (PRD-NG-001 §1 corpus-honesty
 * directive). When the pipeline emits a `corpus` block into stats.json it is
 * preferred; otherwise callers fall back to CORPUS_FALLBACK below. This corpus
 * is a mostly AI-generated synthetic testbed, produced under human direction —
 * never framed as human-authored encyclopedic authority.
 */
export interface CorpusInfo {
  /** Nature of the dataset, e.g. "synthetic". */
  nature?: string;
  /** How it was produced, e.g. "ai-generated, human-directed". */
  generation?: string;
  /** Short display label for the dataset, e.g. "synthetic corpus". */
  label?: string;
  /** The full one-line honesty statement rendered under the hero copy. */
  statement?: string;
  /** Whether the corpus claims encyclopedic authority (it does not). */
  authoritative?: boolean;
}

/** The published stats contract. All fields optional — read defensively. */
export interface SiteStats {
  /** Honest corpus self-description (synthetic, AI-generated, human-directed). */
  corpus?: CorpusInfo;
  /** Public Logseq pages (the reading units). */
  pages?: number;
  /** OWL classes minted from JSON-LD blocks. */
  classes?: number;
  /** OWL individuals. */
  individuals?: number;
  /** Relation (owl:objectProperty) counts. */
  relations?: { declared?: number; resolvable?: number; shipped?: number };
  /** Backbone (rdfs:subClassOf) edge count. */
  backbone?: number;
  /** The 6 domains / 34 categories cardinalities. */
  domains?: number;
  categories?: number;
  /** Provenance of the run. */
  datasetDate?: string;
  generatedAt?: string;
  pipelineVersion?: string;
  reasoner?: string;
  /** Tolerate unknown/extra keys without losing type-safety at call sites. */
  [k: string]: unknown;
}

/** Coerce a possibly-nested numeric field, returning undefined when absent. */
function num(v: unknown): number | undefined {
  return typeof v === 'number' && Number.isFinite(v) ? v : undefined;
}

/** Coerce a non-empty trimmed string, else undefined. */
function str(v: unknown): string | undefined {
  return typeof v === 'string' && v.trim() ? v.trim() : undefined;
}

/**
 * The honest fallback corpus description (PRD-NG-001 §1). Rendered verbatim when
 * the pipeline has not yet emitted a `corpus` block into stats.json. The exact
 * one-liner is the operator-directed house line.
 */
export const CORPUS_FALLBACK: Required<Pick<CorpusInfo, 'nature' | 'generation' | 'label' | 'statement' | 'authoritative'>> = {
  nature: 'synthetic',
  generation: 'AI-generated, human-directed',
  label: 'synthetic corpus',
  statement:
    'A mostly AI-generated synthetic corpus, built under human direction to exercise the VisionFlow toolchain at medium ontology scale. Every page says so.',
  authoritative: false,
};

/** Normalise an optional `corpus` block, tolerating a few field spellings. */
function normaliseCorpus(raw: unknown): CorpusInfo | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const c = raw as Record<string, unknown>;
  const out: CorpusInfo = {
    nature: str(c.nature) ?? str(c.type),
    generation: str(c.generation) ?? str(c.generatedBy) ?? str(c.production),
    label: str(c.label) ?? str(c.datasetLabel),
    statement: str(c.statement) ?? str(c.honesty) ?? str(c.note),
    authoritative: typeof c.authoritative === 'boolean' ? c.authoritative : undefined,
  };
  return out;
}

/**
 * Normalise the raw artifact into SiteStats, tolerating a few plausible field
 * spellings the pipeline might emit (relations.declared vs edges.declared …).
 * We never invent values; missing stays missing.
 */
export function normaliseStats(raw: Record<string, unknown>): SiteStats {
  const rel = (raw.relations ?? raw.edges) as Record<string, unknown> | undefined;
  return {
    pages: num(raw.pages) ?? num(raw.publicPages) ?? num(raw.totalPages),
    classes: num(raw.classes) ?? num(raw.owlClasses) ?? num(raw.totalClasses),
    individuals: num(raw.individuals) ?? num(raw.owlIndividuals),
    relations: rel
      ? {
          declared: num(rel.declared) ?? num(rel.total),
          resolvable: num(rel.resolvable),
          shipped: num(rel.shipped),
        }
      : undefined,
    backbone: num(raw.backbone) ?? num(raw.subClassOf),
    domains: num(raw.domains) ?? num(raw.domainCount),
    categories: num(raw.categories) ?? num(raw.categoryCount),
    datasetDate:
      typeof raw.datasetDate === 'string'
        ? raw.datasetDate
        : typeof raw.date === 'string'
          ? raw.date
          : undefined,
    generatedAt:
      typeof raw.generatedAt === 'string'
        ? raw.generatedAt
        : typeof raw.generatedAtTime === 'string'
          ? raw.generatedAtTime
          : undefined,
    pipelineVersion:
      typeof raw.pipelineVersion === 'string'
        ? raw.pipelineVersion
        : typeof raw.version === 'string'
          ? raw.version
          : undefined,
    reasoner: typeof raw.reasoner === 'string' ? raw.reasoner : undefined,
    ...raw,
    // Placed after `...raw` so the normalised block wins over the raw shape.
    corpus: normaliseCorpus(raw.corpus),
  };
}

export type StatsState =
  | { status: 'loading'; data: null }
  | { status: 'ready'; data: SiteStats }
  | { status: 'absent'; data: null };

/** The published-artifact path (ADR-NG-001 §2). Root-served by Vite `base: '/'`. */
export const STATS_URL = '/data/graph/stats.json';

/**
 * Fetch the stats artifact once. `absent` (not an error) when the pipeline has
 * not yet emitted it — callers show a placeholder, never a made-up number.
 */
export function useStats(): StatsState {
  const [state, setState] = useState<StatsState>({ status: 'loading', data: null });

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const res = await fetch(STATS_URL, { headers: { accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        const raw = (await res.json()) as Record<string, unknown>;
        if (live) setState({ status: 'ready', data: normaliseStats(raw) });
      } catch {
        if (live) setState({ status: 'absent', data: null });
      }
    })();
    return () => {
      live = false;
    };
  }, []);

  return state;
}

/** Locale-grouped integer for display (UK English thousands separators). */
export function fmt(n: number | undefined): string {
  return typeof n === 'number' ? n.toLocaleString('en-GB') : '—';
}

/**
 * The honest corpus description for a given stats state — the pipeline's
 * `corpus` block merged over the CORPUS_FALLBACK, so `label` and `statement`
 * are always present. This is the single source the honesty copy reads from.
 */
export function corpusOf(state: StatsState): Required<CorpusInfo> {
  const c = state.status === 'ready' ? state.data.corpus : undefined;
  return {
    nature: c?.nature ?? CORPUS_FALLBACK.nature,
    generation: c?.generation ?? CORPUS_FALLBACK.generation,
    label: c?.label ?? CORPUS_FALLBACK.label,
    statement: c?.statement ?? CORPUS_FALLBACK.statement,
    authoritative: c?.authoritative ?? CORPUS_FALLBACK.authoritative,
  };
}
