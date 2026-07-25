/**
 * pageMeta.ts — reads the raw Page API artifact for the fields the reading
 * surface needs that the rendered PageData does not expose: the class IRI (for
 * the "View in graph →" focus link) and the provenance triple.
 *
 * The Page API JSON shape (verified against output/build-tmp/api/pages/*.json,
 * 2026-07-23) carries:
 *   id        — the page URN            e.g. "urn:visionflow:page:climate-modelling"
 *   classIri  — the OWL class IRI       e.g. "urn:ngm:class:climate-modelling"
 *   domain    — DomainSlug              e.g. "infrastructure"
 *   title, slug, definition, subClassOf[], relationships{}, wikilinks[], backlinks[]
 *
 * Provenance note: as of 2026-07-23 the page files do NOT yet carry explicit
 * prov:* fields (no `generatedAtTime` / `wasAttributedTo` keys — the earlier
 * grep hits were the words appearing inside definition prose). So provenance is
 * assembled here: URN from `id`, author from the run constant (did:nostr:jjohare,
 * PRD §1/§8 — the PublishRun attribution), generated-at from the page's own
 * field when the pipeline starts emitting it, else the stats.json run date.
 * This reader is forward-compatible: if the pipeline adds `generatedAtTime` /
 * `prov` to the page JSON, it is preferred automatically.
 */

import { useEffect, useState } from 'react';

/** The authoring identity for the whole corpus (PRD-NG-001 §1, §8). */
export const AUTHOR_DID = 'did:nostr:jjohare';

/** Focus links target the /graph explorer's URL contract (types/scope.ts). */
export function focusHref(classIri: string, radius: 1 | 2 = 1): string {
  return `/graph?focus=${encodeURIComponent(classIri)}&r=${radius}`;
}

/** A concept reference resolvable to a reading page and/or a graph focus. */
export interface ConceptRef {
  /** Reading-page slug (derived from the class IRI when not explicit). */
  slug: string;
  label: string;
  /** Class IRI when known — enables a graph focus link. */
  classIri?: string;
}

export interface PageMeta {
  /** Page URN (the `id` field). */
  urn?: string;
  /** OWL class IRI — the identity used by the graph focus link. */
  classIri?: string;
  /** DomainSlug. */
  domain?: string;
  /** ISO instant when this page's data was generated, when the pipeline emits it. */
  generatedAtTime?: string;
  /** did:nostr author, when the pipeline emits per-page attribution. */
  attributedTo?: string;
  /** Pages that link here. */
  backlinks: ConceptRef[];
  /** Broader classes (rdfs:subClassOf). */
  broader: ConceptRef[];
  /** Notable object-property relations, flattened + de-duplicated. */
  related: ConceptRef[];
}

type Rel = { id?: string; label?: string; slug?: string };
type Raw = {
  id?: string;
  classIri?: string;
  domain?: string;
  generatedAtTime?: string;
  prov?: { generatedAtTime?: string; wasAttributedTo?: string };
  provenance?: { generatedAtTime?: string; wasAttributedTo?: string };
  subClassOf?: Rel[];
  relationships?: Record<string, Rel[]>;
  backlinks?: { slug?: string; label?: string }[];
};

/** urn:ngm:class:high-performance-computing → high-performance-computing */
export function slugFromClassIri(iri: string | undefined): string {
  if (!iri) return '';
  const idx = iri.lastIndexOf(':');
  return idx >= 0 ? iri.slice(idx + 1) : iri;
}

function toRef(r: Rel): ConceptRef | null {
  const label = r.label ?? r.slug ?? '';
  const slug = r.slug ?? slugFromClassIri(r.id);
  if (!label || !slug) return null;
  return { slug, label, classIri: r.id };
}

/** Relationship buckets worth surfacing on a reading page, in priority order. */
const RELATED_KEYS = [
  'enables',
  'uses',
  'requires',
  'hasPart',
  'partOf',
  'dependsOn',
  'implements',
  'supports',
  'standardizedBy',
  'relatedTo',
  'bridgesTo',
  'contrastsWith',
] as const;

function toMeta(raw: Raw): PageMeta {
  const prov = raw.prov ?? raw.provenance;
  const broader = (raw.subClassOf ?? []).map(toRef).filter((r): r is ConceptRef => r !== null);
  const backlinks = (raw.backlinks ?? [])
    .map((b) => (b.slug && b.label ? { slug: b.slug, label: b.label } : null))
    .filter((r): r is ConceptRef => r !== null);

  const seen = new Set<string>();
  const related: ConceptRef[] = [];
  for (const key of RELATED_KEYS) {
    for (const rel of raw.relationships?.[key] ?? []) {
      const ref = toRef(rel);
      if (ref && !seen.has(ref.slug)) {
        seen.add(ref.slug);
        related.push(ref);
      }
    }
  }

  return {
    urn: raw.id,
    classIri: raw.classIri,
    domain: raw.domain,
    generatedAtTime: raw.generatedAtTime ?? prov?.generatedAtTime,
    attributedTo: prov?.wasAttributedTo,
    backlinks,
    broader,
    related,
  };
}

const cache = new Map<string, PageMeta | null>();

/** Fetch the raw page JSON meta for `slug`; null when the artifact is missing. */
export function usePageMeta(slug: string | undefined): PageMeta | null {
  const [meta, setMeta] = useState<PageMeta | null>(slug ? cache.get(slug) ?? null : null);

  useEffect(() => {
    if (!slug) return;
    if (cache.has(slug)) {
      setMeta(cache.get(slug) ?? null);
      return;
    }
    let live = true;
    (async () => {
      try {
        const res = await fetch(`/api/pages/${encodeURIComponent(slug)}.json`, {
          headers: { accept: 'application/json' },
        });
        if (!res.ok) throw new Error(String(res.status));
        const raw = (await res.json()) as Raw;
        const m = toMeta(raw);
        cache.set(slug, m);
        if (live) setMeta(m);
      } catch {
        cache.set(slug, null);
        if (live) setMeta(null);
      }
    })();
    return () => {
      live = false;
    };
  }, [slug]);

  return meta;
}

/** Format an ISO instant as a readable UK date; passthrough when unparseable. */
export function fmtDate(iso: string | undefined): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
