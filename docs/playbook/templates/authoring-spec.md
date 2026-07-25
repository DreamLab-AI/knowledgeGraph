# Authoring spec: Wind O&M corpus, Class pages (v3 profile)

This document is written to be included in agent context verbatim. It is the
operating contract for an agent, or a person, authoring **Class** (TBox) pages
for the offshore wind farm O&M ontology, project token `owf`. Individuals (ABox)
are authored under a separate contract, [extraction-spec.md](extraction-spec.md);
this spec owns the shared grammar both use (slug law, namespaces, grounding
block, relations, alignment, forbidden moves). Follow it exactly. Where it
forbids a move, the move broke something in the reference corpus and the incident
is named. Format detail this spec compresses is normative in
[../02-schema.md](../02-schema.md) and, for the shipped v2 it supersets, in
[../../reference/jsonld-schema.md](../../reference/jsonld-schema.md).

Contract, not vibes: this is why 40 parallel authors produce output that merges
without a human reconciling each file.

## 1. What you author

One page per assigned concept. A page is a Logseq markdown file that is also an
Obsidian note; the pipeline reads only the fenced `json-ld` blocks, never the
outline. It carries, in order:

1. `public:: true`
2. an H1 title line
3. a `Page` block (fenced `json-ld`)
4. an entity block (fenced `json-ld`) with `@type` `"Class"`
5. a Logseq outline of prose

Write each file to `pages/<Title Case Name>.md`. One file per slug.

INV-1. A page authored under this spec MUST carry `@type: "Class"` in its entity
block. A thing in the data lake (a turbine, a work order, a vessel, a contract)
is an Individual and MUST be authored under [extraction-spec.md](extraction-spec.md).

## 2. Slug law

- Slug grammar: `^[a-z0-9]+(-[a-z0-9]+)*$` (lowercase ASCII, digits, single hyphens).
- Derive the slug from the title: lowercase, spaces to hyphens, drop other punctuation.
  This is the v2 `slugify`: `re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')`.
- The human title preserves acronym casing (`SCADA`, `ROV`, `CfD`, `G99`); the
  slug does not (`scada`, `rov`, `cfd`, `g99`).
- INV-2. `vc:slug`, the `@id` tail, and the filename stem MUST agree. A mismatch
  raises `SLUG_MISMATCH`.

## 3. Identity and namespaces

Namespaces are parameterised on the project token `owf`. Slash-form separators,
per [../02-schema.md](../02-schema.md) §3:

| Slot | Pattern |
|---|---|
| Page `@id` | `urn:owf:page/<slug>` |
| Class `@id` | `urn:owf:class/<slug>` |
| Individual `@id` | `urn:owf:individual/<slug>` |
| Wikilink `@id` | `urn:owf:linked/<slug>` |
| `@context` | `https://owf.example/owf/ns/v3.jsonld` |

INV-3. Cite only a `@context` URL that resolves. The context document MUST be
published at that URL before the corpus is: a context that 404s breaks every
JSON-LD consumer that expands the page.

INV-4. Every Page `@id` MUST be unique. The reference corpus let four slug-form
page IRIs collide across two files each; page count and class count then
disagreed by exactly four ever after.

## 4. Domain enum (closed)

`domain` is exactly one of:

```
asset-engineering | marine-operations | energy-markets |
environment-consenting | commercial-finance | hse-workforce
```

INV-5. No other `domain` value is legal. A concept that seems to sit outside all
six belongs to whichever domain owns the decision about it; if it cannot be
placed, it is out of scope, not a seventh domain.

`maturity` (Class only) is one of `established | emerging | mature | draft`.

## 5. Parent requirement

INV-6. Every Class carries at least one `subClassOf` parent. Every parent `@id`
MUST resolve to a node in [taxonomy-seed.json](taxonomy-seed.json) or to a class
authored in the same wave. Do not invent a parent.

- The default is exactly one parent, the most specific category that fits.
- A concept that genuinely belongs under two or more parents in different
  categories or domains is a **bridge**: give it 2 or 3 `subClassOf` parents.
  Multi-parenting is legal and expected, reported at info severity, and published
  as data. See [example-bridge.md](example-bridge.md).
- INV-7. A bridge MUST NOT be flattened to one parent to silence a warning.
  Deleting a true parent loses a real axiom. Remove a parent only when it is
  wrong or is already an ancestor of the other. Info-severity multi-parent lines
  are not defects (severity is a claim about intent; 958 deliberate bridges were
  once mis-reported as warnings).

## 6. Grounding requirement (every entity)

INV-8. Every entity block carries a `grounding` object. Synthetic versus
evidenced MUST be machine-readable here, not a caveat in a README. The reference
corpus's whole limitation was that its synthetic status lived in prose.

```json
"grounding": {
  "sources": [
    { "dataset": "<lake dataset id>", "locator": "<row/tag/path>",
      "field": "<column>", "retrievedAt": "<ISO 8601>" }
  ],
  "method": "extracted | inferred | authored",
  "confidence": 0.0
}
```

- `method: extracted`: the value came directly from a named dataset. `sources`
  MUST be non-empty and each source MUST carry `dataset`, `locator`, one of
  `query` or `field`, and `retrievedAt`. Most Class pages are NOT extracted.
- `method: inferred`: the value is computed by joining or modelling over sources.
  `sources` MUST name the inputs; `confidence` reflects the model, not the
  inputs (a join over clean data is still an inference).
- `method: authored`: a concept defined editorially. `sources` MAY be empty or
  MAY cite a governing standard as corroboration. Most Class pages are authored.
- INV-9. `confidence` is a number in `[0, 1]`.

## 7. Relations (closed set)

`relations` is an object of predicate to array of `{@id, label}` refs. Use only
these twelve predicates:

```
relatedTo, enables, requires, uses, bridgesTo, supports,
hasPart, contrastsWith, partOf, dependsOn, implements, standardizedBy
```

INV-10. Any other predicate spelling is silently dropped by the parser and the
link is lost. A ref target need not have its own page yet; the demand-driven pass
creates it once two pages reference it. Every ref object carries `@id` AND `label`.

## 8. Density targets (declare the tier at authoring time)

A page declares its tier when first written; the tier sets the relation floor and
body depth. The reference corpus generated thin and then spent roughly 37M tokens
enriching 959 hub pages it could have specified up front. Do not repeat that:
author to tier the first time.

| Tier | When | `relations` refs (min) | Body | Lines |
|---|---|---|---|---|
| stub | demand-created, not yet enriched | 1 to 2 | `Definition` only | 15 to 25 |
| standard | a normal concept page | 3 to 6 | `Definition` + `Content` | 25 to 45 |
| hub | a category or high-centrality concept | 6 to 12 | `Definition` + `Content` + enumerated `Relationships` | 45 to 90 |

INV-11. A stub is transient. It MUST be flagged for enrichment (centrality x
sparsity ranking) and MUST NOT persist as the published form of a high-centrality
concept. Enrichment promotes stub to standard to hub by adding grounded,
competency-question-traversable relations, never by padding prose.

INV-12. Relation counts are met at authoring time, not retrofitted. Every
relation is purposeful: one a competency question in
[competency-questions.md](competency-questions.md) would traverse.

## 9. External alignment

Where a public ontology already names the thing, align rather than reinvent:

- `sameAs`: identity (`owl:sameAs`). Use only when the external term denotes the
  same class. Rarely correct between classes; propagates every axiom both ways.
- `exactMatch`: `skos:exactMatch`, interchangeable across applications without
  asserting logical identity.
- `closeMatch`: `skos:closeMatch`, the safe default for a near-equivalent.

INV-13. Point `sameAs`/`exactMatch`/`closeMatch` `@id` at a specific external
term IRI, not a bare namespace. Do not assert alignment you have not checked.

Verified namespaces worth aligning to for this domain:

| Prefix | Namespace | Use |
|---|---|---|
| `qudt` | `http://qudt.org/vocab/` | units and quantity kinds for measured signals |
| `sosa` | `http://www.w3.org/ns/sosa/` | sensors, observations, actuators |
| `ssn` | `http://www.w3.org/ns/ssn/` | system/sensor structure over SOSA |
| `time` | `http://www.w3.org/2006/time#` | intervals and instants (weather windows, campaigns) |
| `geo` | `http://www.opengis.net/ont/geosparql#` | positions and geometries |
| `saref` | `https://saref.etsi.org/core/` | energy devices and measurements |
| `schema` | `https://schema.org/` | organisations, places, documents |

Domain standards to reference in definitions and as `standardizedBy` targets
(each is a real standard; state its scope accurately):

- IEC 61400-1 / -3: wind turbine design requirements (general / offshore).
- IEC 61400-25: communications for monitoring and control of wind power plants (SCADA information model and services).
- IEC 61400-26: time-based availability definitions and reporting for wind turbines and plants.
- ISO 14224: reliability and maintenance data collection and taxonomy for equipment.
- ISO 13374: data processing, communication and presentation for machine condition monitoring.
- Engineering Recommendation G99: connection of generation to GB distribution networks.
- Contracts for Difference (CfD): two-way payment of the difference between a fixed strike price and a market reference price.

The IEC 61400 family and IEC CIM (`IEC 61970` / `IEC 61968`) are standard
families with no single stable public RDF class; point at them with
`standardizedBy`, not `sameAs`.

## 10. Quality is computed, never asserted

INV-14. Do NOT emit `quality`. Do NOT emit `qualityScore`. An author-asserted
quality float is forbidden. The reference authoring template hardcoded
`quality: 0.72`; the number meant nothing and propagated corpus-wide.

Quality, where wanted, is DERIVED by a pipeline pass from signals the corpus
already carries: relation density, grounding coverage and method mix, review
status, and inbound centrality. The v3 context reserves the `quality` key for
that derivation pass to write; an author never writes it. A validator asserts the
key's absence from authored input.

`provenance` is permitted and carries `attributedTo` (a DID), `generatedAt`
(ISO 8601), and `inferenceRule` (the pass name).

## 11. Forbidden moves

1. Do not invent a `subClassOf` parent. It MUST be in the seed or authored this wave (INV-6).
2. Do not assert a factual claim you cannot ground. If you cannot cite it, keep the
   definition to what the concept IS and set `method: authored` (INV-8).
3. Do not write lake-shaped values into `grounding.sources` as if extracted when
   they are not. Synthetic content is `authored`, full stop.
4. Do not emit `quality` or `qualityScore` (INV-14).
5. Never set, clear, or change `vc:public`. Publication is gated by the pipeline
   and a human; an author does not touch it.
6. Do not invent a `domain` outside the enum (§4) or a relation predicate outside
   the twelve (§7).
7. Do not text-match the corpus to find or edit pages. Parse the fenced blocks. A
   whitespace-sensitive grep once dropped 653 public pages silently.
8. Do not edit another author's file.

## 12. Definition of done, per page

- Both JSON blocks parse (double quotes, no trailing commas, no comments).
- `vc:slug`, `@id` tail, and filename agree (INV-2).
- `domain` in enum; `subClassOf` resolves; relations use only the twelve predicates.
- `grounding` present, method-consistent, `confidence` in `[0, 1]`.
- No `quality`/`qualityScore` field present (INV-14).
- Tier declared and its relation floor and body depth met (§8).
- Validates at 0 errors on its own: `python -m pipeline.validate pages/`.
