# JSON-LD Page Format: Schema Reference

Normative description of the on-page format used by every file in `ontology/pages/`.
This document is complete enough to author a valid page by hand or to write an
independent parser. All counts are from a scan of the 7874 public pages in this
repository on 2026-07-25.

The reference implementation is `pipeline/jsonld_parser.py`. Where this document and
that file disagree, the file wins. `sameAs` is parsed and round-tripped to
`owl:sameAs`; project-parameterised v3 `urn:` identities remain absolute in Turtle.

The corpus these pages make up is mostly AI-generated synthetic content produced under
human direction, by design: it is an ontology testbed, not an authoritative
encyclopaedia. The provenance fields described in §4.5 attest traceable generation
under human direction, not human authorship.

---

## 1. Page anatomy

A page is a Logseq markdown file. It carries, in this order:

1. Optional Logseq page properties (`public:: true`, `alias::`, `elevatedFrom::`).
2. An H1 title line (`# 1Hive`).
3. Two or three fenced <code>```json-ld</code> blocks.
4. A human-readable Logseq outline, which the pipeline never reads.

Blocks are extracted by `JSONLD_BLOCK_RE = re.compile(r'```json-ld\s*\n(.*?)```', re.DOTALL)`
(`pipeline/jsonld_parser.py:75`). Block identity is determined solely by the `@type`
key, not by position, though in practice the corpus is strictly ordered.

Observed block sequences across 7874 pages:

| Sequence | Pages |
|---|---|
| `Page`, `Class` | 4173 |
| `Page`, `Class`, `vc:LinkResolutionsAnnotation` | 3684 |
| `Page`, `Class`, `LinkResolutionsAnnotation` | 17 |

19449 blocks in total; all parse as valid JSON. The corpus holds 7874 `Class` blocks
and 0 `Individual` blocks, although the parser accepts `Individual` and the legacy v1
type `OntologyClass` (`ENTITY_TYPES = {"OntologyClass", "Class", "Individual"}`).

A page with no `Page` block is skipped entirely by `parse_page`.

---

## 2. Context document

`static/ns/v2.jsonld` (3371 bytes) is the only context document shipped. The source CI
in the private Logseq repository that produces this corpus copies `static/*` into the
site root, so it is served at `https://narrativegoldmine.com/ns/v2.jsonld`. The
workflow in *this* repository, `.github/workflows/build.yml`, builds and gates the
corpus and deploys nothing.

Prefixes it declares:

| Prefix | IRI |
|---|---|
| `owl` | `http://www.w3.org/2002/07/owl#` |
| `rdfs` | `http://www.w3.org/2000/01/rdf-schema#` |
| `rdf` | `http://www.w3.org/1999/02/22-rdf-syntax-ns#` |
| `xsd` | `http://www.w3.org/2001/XMLSchema#` |
| `skos` | `http://www.w3.org/2004/02/skos/core#` |
| `prov` | `http://www.w3.org/ns/prov#` |
| `vc` | `https://narrativegoldmine.com/ns/v1#` |
| `ngm` | `https://narrativegoldmine.com/class/` |
| `ngmi` | `https://narrativegoldmine.com/individual/` |

Term mappings: `Class` → `owl:Class`, `Individual` → `owl:NamedIndividual`,
`label` → `rdfs:label`, `definition` → `rdfs:comment`, `domain` → `vc:sourceDomain`,
`maturity` → `vc:maturity`, `qualityScore` → `vc:qualityScore` typed `xsd:float`,
`subClassOf` → `rdfs:subClassOf` (`@type: @id`, `@container: @set`),
`instanceOf` → `rdf:type`, `slug` → `vc:slug`, `title` → `rdfs:label`,
`public` → `vc:public`, `wikilinks` → `vc:wikilink`, `sameAs` → `owl:sameAs`.
`relations` and `provenance` carry nested `@context` scopes; `legacyProperties` maps
`key` → `vc:key`, `value` → `vc:value`.

`@context` values observed: `Class` blocks all cite
`https://narrativegoldmine.com/ns/v2.jsonld` (7874). `Page` blocks cite
`https://narrativegoldmine.com/context/v1.jsonld` (5886),
`https://narrativegoldmine.com/ns/v1` (1931) or `ns/v2.jsonld` (57). Annotations cite
`context/v1.jsonld` (3684) or `ns/v2.jsonld` (17).

Only `ns/v2.jsonld` is published. `/context/v1.jsonld` and `/ns/v1` do not exist in
`static/`. The `Class` block is therefore genuinely dereferenceable JSON-LD; the `Page`
and annotation blocks are JSON-LD-shaped internal-vocabulary JSON whose `vc:` prefix a
strict JSON-LD processor could not expand. The Python pipeline never runs JSON-LD
expansion. It reads raw JSON keys, so this does not affect the build.

**Authoring rule:** new `Page` and annotation blocks should cite
`https://narrativegoldmine.com/ns/v2.jsonld`, the one document that resolves.

---

## 3. `Page` block

Identity and publication state. Eleven distinct keys exist across the corpus.

| Key | Type | Required | Meaning | Example |
|---|---|---|---|---|
| `@context` | string (IRI) | yes (7874) | Context document URL. | `"https://narrativegoldmine.com/ns/v2.jsonld"` |
| `@id` | string (URN) | yes (7874) | Page IRI. See §6. | `"urn:visionflow:page:b82f7b72…51a5"` |
| `@type` | string | yes (7874) | Literally `"Page"`. | `"Page"` |
| `vc:slug` | string | yes (7874) | Lowercase hyphenated slug. | `"1-hive"` |
| `title` | string | yes (7874) | Display title; context-mapped to `rdfs:label`. Falls back to the filename stem if absent. | `"1Hive"` |
| `vc:public` | boolean | yes (7874) | Publication gate. `true` on every shipped page; 14 further pages in the source repo are withheld because this is not `true`. Parser default when absent is `false`. | `true` |
| `vc:schemaVersion` | integer | yes (7874) | Literally `2` on every page. Absent or `< 1` raises `MISSING_SCHEMA_VERSION` (warning). | `2` |
| `vc:outboundWikilinks` | array of ref objects | no (7782) | Surface links harvested from the body. Sole input to backlink derivation. | see below |
| `prov:wasAttributedTo` | object `{"@id": …}` | no (3923) | Agent DID for the page record: `did:nostr:jjohare` (3911), `did:nostr:enrichment-swarm` (12). | `{"@id": "did:nostr:jjohare"}` |
| `prov:generatedAtTime` | object `{"@value", "@type"}` | no (3923) | Typed `xsd:dateTime`. All values are 2026. | `{"@value": "2026-05-29T00:00:00Z", "@type": "xsd:dateTime"}` |
| `vc:legacyProperties` | array of `{"vc:key", "vc:value"}` | no (3594) | Pre-migration property carry-over. | `[{"vc:key": "legacy-term-id", "vc:value": "TC-0051"}]` |

Only two `vc:legacyProperties` keys exist corpus-wide: `preferred-term` (3594) and
`legacy-term-id` (2431). The latter preserves pre-migration term IDs such as `TC-0051`
and `MV-9698`.

### `vc:outboundWikilinks` item shape

```json
{ "@id": "urn:visionflow:linked:governance-token", "vc:label": "Governance Token" }
```

64521 items are objects carrying exactly `@id` and `vc:label`. 97 items across two
files (`Data Parallelism.md`, `Data Preprocessing.md`) are bare strings.
`_parse_refs` skips non-dict items (`pipeline/jsonld_parser.py:90-91`), so those 97
links produce no backlinks. Do not emit bare strings.

Note the label key: `vc:label` inside the `Page` block, `label` inside the `Class`
block. This is deliberate. `label` is context-mapped to `rdfs:label`; `vc:label`
expands to a bespoke property, correctly signalling that a wikilink's label is a
surface string rather than an asserted class label. The parser tolerates both via
`item.get("label", item.get("vc:label", ""))`.

Backlinks are derived solely from `vc:outboundWikilinks` IRI tails
(`pipeline/backlinks.py`), never from `[[wikilinks]]` in the body prose.

---

## 4. Entity block (`Class`)

The OWL payload. Sixteen distinct keys exist across the corpus.

| Key | Type | Required | Meaning | Example |
|---|---|---|---|---|
| `@context` | string (IRI) | yes (7874) | Always `https://narrativegoldmine.com/ns/v2.jsonld`. | n/a |
| `@id` | string (URN) | yes (7874) | Class IRI, `urn:ngm:class:<slug>`. Missing → `MISSING_CLASS_IRI` (error). | `"urn:ngm:class:1-hive"` |
| `@type` | string | yes (7874) | `"Class"`. `"Individual"` and legacy `"OntologyClass"` are accepted. | `"Class"` |
| `label` | string | yes (7874) | `rdfs:label`. Missing → `MISSING_LABEL` (error). | `"1Hive"` |
| `definition` | string | yes (7874) | `rdfs:comment`. Prose definition. | `"A decentralised community and DAO…"` |
| `domain` | string (enum) | yes (7874) | `vc:sourceDomain`. See §4.1. Missing → `MISSING_DOMAIN` (warning); unknown → `INVALID_DOMAIN` (warning). | `"governance"` |
| `maturity` | string (enum) | yes (7874) | `vc:maturity`. See §4.2. Parser default `"draft"`. | `"established"` |
| `subClassOf` | array of refs, or a single ref object | yes (7874) | `rdfs:subClassOf`. `_parse_refs` coerces a bare object to a one-element list. List on 7211 blocks, bare object on 663. More than one entry is a supported, intended pattern — see §4.6. | see below |
| `relations` | object of predicate → array of refs | no (7780) | Twelve canonical predicates. See §4.3. | see below |
| `quality` | float 0–1 | no (7085) | Score the parser reads. Not defined in `v2.jsonld`. | `0.6` |
| `qualityScore` | float 0–1 | no (2001) | Score the context defines (`xsd:float`). Not read by the parser. See §4.4. | `0.7` |
| `provenance` | object | no (6411) | Flat generation record. See §4.5. | see below |
| `sameAs` | array of refs | no (3579) | `owl:sameAs` alias set. | `[{"@id": "urn:ngm:class:3dgs", "label": "3DGS"}]` |
| `vc:termId` | string | no (8) | Residual v1 key. Do not use. | n/a |
| `vc:schemaVersion` | integer | no (8) | Residual v1 key on the class block. Do not use. | n/a |
| `vc:legacyProperties` | array | no (7) | Residual v1 key on the class block. Do not use. | n/a |

`instanceOf` is defined in the context and read by the parser but appears on no page
in this corpus (0 `Individual` blocks).

Every ref object in this block carries both `@id` and `label`, 115567 of them across
the corpus: 102503 inside `relations`, 9481 inside `subClassOf`, 3583 inside `sameAs`.

```json
{ "@id": "urn:ngm:class:governance-token", "label": "Governance Token" }
```

### 4.1 `domain` vocabulary

`pipeline/validate.py:24-31` accepts 16 slugs. Sixteen values are observed, all of
them accepted.

| Class | Values (count) |
|---|---|
| Six top-level roots | `blockchain` (1206), `infrastructure` (1118), `spatial-computing` (1064), `artificial-intelligence` (986), `robotics` (600), `distributed-collaboration` (142) |
| Ten accepted short forms | `ai` (504), `governance` (472), `security` (462), `machine-learning` (409), `finance` (226), `data` (209), `standards` (194), `metaverse` (152), `distributed-systems` (86), `supply-chain` (44) |
| Outside `VALID_DOMAINS` (`INVALID_DOMAIN` warning) | none |

The two strays that used to sit outside the vocabulary — `economics` (3) and
`ai-governance` (1) — were corrected in the corpus repair, so `INVALID_DOMAIN` and
`MISSING_DOMAIN` now fire on nothing. Prefer a top-level root for new pages.

### 4.2 `maturity` vocabulary

Intended: `established` (4550), `emerging` (1912), `mature` (808), `draft` (565).
Strays: `experimental` (27), `growing` (9), `active-research` (1), `stable` (1),
`developing` (1). `maturity` is not range-validated by `pipeline/validate.py`, so
strays pass silently. Use one of the four intended values.

### 4.3 `relations`

A nested object. Each key is a predicate; each value is an array of ref objects.
`static/ns/v2.jsonld` lines 47-111 define exactly twelve predicates, and
`_extract_relations` maps exactly those twelve.

| Predicate | RDF term | Blocks using it |
|---|---|---|
| `relatedTo` | `skos:related` | 6141 |
| `enables` | `vc:enables` | 5869 |
| `requires` | `vc:requires` | 5031 |
| `uses` | `vc:uses` | 4537 |
| `bridgesTo` | `vc:bridgesTo` | 3298 |
| `supports` | `vc:supports` | 3254 |
| `hasPart` | `vc:hasPart` | 3176 |
| `contrastsWith` | `vc:contrastsWith` | 2915 |
| `partOf` | `vc:isPartOf` | 2468 |
| `dependsOn` | `vc:dependsOn` | 2364 |
| `implements` | `vc:implements` | 2049 |
| `standardizedBy` | `vc:standardizedBy` | 1343 |

45 further predicate spellings appear inside `relations` across the corpus: 57
distinct keys in total. The largest are `subClassOf` (27), `produces` (10),
`depends-on` (6), `informs` (5), `relatedTo_2` (5), `contrasts-with` (4),
`isSubclassOf` (4), `governs` (4); the tail is singletons, including a literal
`bridges To` with an internal space. None are in the context, none are in the
parser's mapping, and all are **silently dropped**: 157 ref objects are lost this
way, against 102346 carried by the twelve canonical predicates. Do not invent
predicates.

The parser also accepts the flat v1 spelling at the top level of the class block
(`vc:hasPart`, `vc:requires`, `vc:enables`, `vc:depends-on`, `vc:implements`,
`vc:contrasts-with`, `vc:bridges-to`, `vc:uses`, `vc:relatedTo`, `vc:supports`,
`vc:standardizedBy`, `vc:isPartOf`). Nested-v2 refs are appended to any v1 refs
found. New pages must use the nested v2 form.

### 4.4 `quality` versus `qualityScore`: a known defect

The context defines `qualityScore` and not `quality`. The corpus is the mirror image:
7085 blocks carry `quality`, 2001 carry `qualityScore`, 1259 carry both, 742 carry
`qualityScore` alone and 47 carry neither. `pipeline/jsonld_parser.py:220-223` reads:

```python
quality = _extract_float(
    ontology_block.get("quality",
        ontology_block.get("vc:qualityScore", 0))
)
```

`vc:qualityScore` appears nowhere in the corpus, so the context-defined `qualityScore`
is never read. The 742 blocks that carry only `qualityScore` are emitted with a zero
score, as are the 47 that carry neither key:
`grep -c 'vc:qualityScore "0.0"' dist/data/ontology.ttl` returns 789, which is exactly
742 + 47. When authoring, write **both** keys with the same value until the parser is
fixed.

### 4.5 `provenance`

A flat object with three sub-fields, not a `prov:Generation` node:

| Sub-field | Type | Count | Meaning |
|---|---|---|---|
| `attributedTo` | string (DID) | 6411 | `prov:wasAttributedTo`, `@type: @id`. |
| `generatedAt` | string | 6411 | `prov:generatedAtTime`, `xsd:dateTime`. |
| `inferenceRule` | string | 6410 | `vc:inferenceRule`: names the generation or enrichment pass. |

`attributedTo` takes four values: `did:nostr:ontology-mesh` (3541),
`did:nostr:lcr-swarm` (1565), `did:nostr:jjohare` (1079),
`did:nostr:enrichment-swarm` (226). 1463 class blocks carry no `provenance` at all.

Top `inferenceRule` values: `GapMaterialisation` (1784), `RelationEnrichment` (1109),
`R5DomainRootFallback` (983), `R1Explicit` (981), `ManualEnrichment` (853),
`GapFillTier5` (528), down to dated one-offs such as
`DanglingRelationFix-batch6-2026-07-25` (24) and
`StubForDanglingParent-2026-07-24` (14).

These fields attest **traceable generation under human direction**, not human
authorship. The rule names are self-describing about machine origin.

The parser falls back to top-level `prov:wasAttributedTo` / `prov:generatedAtTime` /
`vc:inferenceRule` on the class block when `provenance` is absent.

### 4.6 More than one `subClassOf`: bridging

Multiple inheritance is legal in OWL 2 EL and in this corpus it is intended. A class
that genuinely sits under two branches asserts both parents; the taxonomy is a
directed acyclic graph, not a tree.

Parent counts across the 7874 class blocks:

| `subClassOf` entries | Classes |
|---|---|
| 0 | 1 (`Spatial Computing.md`, an empty list on a domain root) |
| 1 | 6472 |
| 2 | 1194 |
| 3 | 207 |

1401 classes therefore carry more than one parent (`stats.json` → `bridging.multiParent`).
Of those, 454 reach more than one taxonomy category and 153 span more than one of the
six domains; the union, 542 classes, is published in full as `dist/data/graph/bridges.json`.

A worked example — `ontology/pages/Sim-to-Real Transfer.md`, `domain: "robotics"`:

```json
"subClassOf": [
  { "@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning" },
  { "@id": "urn:ngm:class:robot-learning",    "label": "Robot Learning" }
]
```

`Transfer Learning` resolves to the **AI Technique** category in the
**Artificial Intelligence** domain; `Robot Learning` resolves to
**Actuation and Control** in **Robotics**. The class is a real member of both
branches, and both assertions ship in the OWL. Its `bridges.json` record:

```json
{
  "iri": "https://narrativegoldmine.com/class/sim-to-real-transfer",
  "label": "Sim-to-Real Transfer",
  "categories": [0, 19],
  "domains": [0, 3],
  "parents": ["Transfer Learning", "Robot Learning"]
}
```

**Constraint worth knowing before you rely on this.** The NGG1 node record carries a
single `u16` category (FORMAT-NGG1 §3), so the binary graph tiers keep only the
*nearest* category found by breadth-first ancestry walk. Here that is
**Actuation and Control** (id 19): `Robot Learning` is a direct child of that category
root, while `Transfer Learning` sits under `Machine Learning` and reaches AI Technique
a hop later. Declaration order does not decide it, depth does. The AI Technique
membership survives only in `bridges.json` and in the OWL itself. Bridge-derived
category-pair edges are also emitted into `overview.json`, which carries 124 edges:
34 category→domain backbone edges plus 90 weighted category↔category bridge edges.
A consumer reading only the `.bin` tiers sees one category per node and will
under-report overlap.

**`MULTI_PARENT` is reported at `info` severity, not `warning`**
(`pipeline/validate.py:154`). That is deliberate and it is not a lint to fix. The line
exists because it is the only place the discarded bridge memberships are enumerated
per file, so an author can see what the binary tiers dropped. Do not "resolve" a
`MULTI_PARENT` line by deleting a parent: deleting a true parent loses a real axiom.
Remove a parent only when it is wrong or redundant — for instance when one parent is
already an ancestor of the other, which asserts nothing new.

When to add a second parent: the class is genuinely subsumed by both, and a reader
looking under either branch would expect to find it. When not to: to express a
weaker association. Use `relatedTo`, `bridgesTo` or `uses` from §4.3 for that.

---

## 5. Annotation block (`vc:LinkResolutionsAnnotation`)

An audit trail of how each raw `[[wikilink]]` was mapped to an IRI. Present on 3701
pages. **No pipeline code reads this block**: `parse_page` binds only `Page` and
`ENTITY_TYPES` blocks. It exists so a lossy transform stays recoverable.

| Key | Type | Count | Meaning |
|---|---|---|---|
| `@context` | string | 3701 | Context URL. |
| `@id` | string (URN) | 3701 | Annotation IRI. See §6. |
| `@type` | string | 3701 | `"vc:LinkResolutionsAnnotation"` (3684) or unprefixed `"LinkResolutionsAnnotation"` (17). |
| `vc:appliesTo` | object `{"@id": …}` | 3684 | Points at the `Page` block's `urn:visionflow:page:` IRI. |
| `vc:resolutions` | array | 3686 | Resolution entries. |
| `prov:wasAttributedTo` | object `{"@id": …}` | 3672 | Resolver agent DID. |
| `prov:generatedAtTime` | object | 3672 | Typed `xsd:dateTime`. |

Each resolution is exactly:

```json
{ "raw": "[[Governance Token]]", "resolved": "urn:visionflow:linked:governance-token", "kind": "ResolvedLink" }
```

61724 entries corpus-wide. `kind` is two-valued where present: `StubLink` (40564, the
target has no page) or `ResolvedLink` (20992); 168 entries carry no `kind` at all.
`raw` preserves the literal Logseq syntax including the brackets. `resolved` carries
`urn:visionflow:linked:` on 46141 entries, the legacy `urn:visionflow:owl:class:` on
14871 and `urn:ngm:class:` on 712; the namespace does not track `kind`.

A residual variant exists on a handful of pages (`ontology/pages/Action Space.md`):
`forClass` (4 blocks, a bare `urn:ngm:class:` string pointing at the class rather than
an object pointing at the page) in place of `vc:appliesTo`, `resolutions` (13) in place of
`vc:resolutions`, `resolves` (2), and items shaped `{raw, @id, kind}` with `raw`
carrying an unbracketed title. Four files (`Computational Linguistics.md`,
`Computational Modelling.md`, `Content Creation.md`, `Content Discovery.md`) carry a
second variant: 168 items keyed `{wikilink, @id}` (88) or `{wikilink, @id, status}`
(80), with no `raw` and no `kind`. Do not emit either shape.

---

## 6. IRI schemes

Four namespaces, deliberately distinct.

```
page-iri       ::= "urn:visionflow:page:" ( sha256-hex | slug )
sha256-hex     ::= 64 * HEXDIG-lower
class-iri      ::= "urn:ngm:class:" slug
annotation-iri ::= "urn:visionflow:annotation:" kind ":" slug ":" short-digest
kind           ::= "link-resolutions"
short-digest   ::= 12 * HEXDIG-lower
link-iri       ::= "urn:visionflow:linked:" slug
slug           ::= lowercase-alnum *( "-" lowercase-alnum )
```

`slug` is produced by `validate.slugify`: `re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')`.

The 12-hex `short-digest` is the rule, not a universal: 3638 of the 3684 annotation
IRIs in that form use 12 hex digits, 13 use 8, 1 uses 10, 4 use 4, and 28 end in a
non-hex tail (`:enriched`, `:enriched-2026`). Emit 12 hex.

| Namespace | Form | Count | Role |
|---|---|---|---|
| `urn:visionflow:page:` | SHA-256 hex | 3877 | Page identity. |
| `urn:visionflow:page:` | slug | 3997 | Page identity, older emission. |
| `urn:ngm:class:` | slug | 7874 | Class identity. Sole target of all 102346 refs under the twelve canonical predicates, all 3583 `sameAs` refs, and 9476 of the 9481 `subClassOf` refs (the other 5 point at `owl:Thing`). |
| `urn:visionflow:annotation:link-resolutions:<slug>:<digest>` | n/a | 3684 | Annotation identity. Variants: `urn:ngm:annotation:` (8), `urn:ngm:link-resolution:` (5), `urn:visionflow:page:` (4). |
| `urn:visionflow:linked:` | slug | 48838 | Unresolved wikilink target. |
| `urn:visionflow:owl:class:` | slug | 15253 | Legacy wikilink target. |
| `urn:ngm:class:` in wikilinks | slug | 430 | Wikilink pointing at a known class. |

A `urn:ngm:class:` ref is well-formed whether or not the slug has a page, and nothing
validates the target: `pipeline/validate.py` checks IRI shape and slug agreement, never
existence. 6219 of the 102346 relation refs and 2885 of the 3583 `sameAs` refs name a
slug no `Class` block claims — 7015 distinct targets, 5342 of them referenced exactly
once. These dangling refs are a known, deliberately unfinished part of the corpus: a
later pass will either create the page or drop the ref. Every `subClassOf` ref does
resolve, so the taxonomy backbone has no dangling parents.

The graph tiers drop what does not resolve, which is why `stats.json` reports 111827
declared edges against 98776 resolvable. The rest of the gap is duplicate
source→target pairs, which collapse to one edge: 9481 `subClassOf` refs become 9357
backbone edges, 102346 relation refs become 89419 relation edges. Do not read a ref as
proof that the target exists, and do not read a declared count as an edge count.

`pipeline/jsonld_to_turtle.py:50-65` (`_iri_to_uriref`) maps each URN prefix to an
HTTPS IRI at build time:

| URN prefix | HTTPS IRI |
|---|---|
| `urn:ngm:class:` | `https://narrativegoldmine.com/class/` |
| `urn:ngm:individual:` | `https://narrativegoldmine.com/individual/` |
| `urn:visionflow:owl:class:` | `https://narrativegoldmine.com/class/` |
| `urn:visionflow:linked:` | `https://narrativegoldmine.com/linked/` |
| `urn:visionflow:page:` | `https://narrativegoldmine.com/page/` |
| `owl:Thing` | `http://www.w3.org/2002/07/owl#Thing` |

`urn:visionflow:linked:` keeps its own `/linked/` space so unresolved surface links
never masquerade as asserted classes. Any other string falls through to
`https://narrativegoldmine.com/class/<string>`, a silent coercion, so malformed IRIs
do not fail loudly. Get the prefix right.

### Validation codes touching IRIs

`pipeline/validate.py` emits: `MISSING_PAGE_IRI` (error), `MISSING_SLUG` (error),
`MISSING_CLASS_IRI` (error), `MISSING_LABEL` (error), `SELF_REFERENCE` (error, a
`subClassOf` pointing at the block's own `@id`), `DUPLICATE_IRI` (error, one class IRI
claimed by more than one file), `MISSING_SCHEMA_VERSION` (warning), `MISSING_DOMAIN`
(warning), `INVALID_DOMAIN` (warning), `SLUG_MISMATCH` (warning, a parent IRI slug
disagreeing with `slugify(parent.label)`), `MULTI_PARENT` (**info**, more than one
`subClassOf` entry — see §4.6).

The current corpus builds with 0 errors, 0 warnings and 1401 info lines, all of them
`MULTI_PARENT`. This was previously published as "961 validation warnings", of which
958 were `MULTI_PARENT` at `warning` severity. Reporting deliberate bridging as a
defect misrepresented the dataset, so the severity was corrected to `info`; the three
remaining warnings were genuine and were fixed in the corpus. A clean build is now 0
errors, 0 warnings, and an info count equal to the number of bridging classes.

---

## 7. Logseq native properties

Logseq's own `key:: value` syntax coexists with the JSON-LD and the pipeline reads
none of it. Grepping `pipeline/` for `owl-class`, `is-subclass-of`,
`belongs-to-domain` or `elevatedFrom` returns no matches.

| Property | Files | Meaning |
|---|---|---|
| `public:: true` | 7853 | Logseq's own publication flag. **Advisory only**: the pipeline gates on `vc:public` in the JSON. Keep the two in agreement. |
| `alias::` | 562 | Logseq alias, mostly legacy term IDs (`alias:: TELE-051-3d-gaussian-splatting`). |
| `elevatedFrom::` | 177 | Names the informal page a formal class was promoted from, e.g. `elevatedFrom:: [[AI as a step function]]` on `AI Capability Discontinuity Model.md`. Human provenance for the elevation, not machine-read. |

Below the fences the body re-states the same semantics in Logseq outline form under
headings `### Definition` (7871 occurrences), `### Relationships` (6798),
`### Provenance` (5966), `### Content` (5242), using properties `enables::` (7743),
`relatedTo::` (6624), `requires::` (5953), `owl-class::` (3568),
`is-subclass-of::` (2356), `belongs-to-domain::` (2196). These are line counts outside
the fenced blocks, not file counts; a page usually carries several.

**This mirror is for human editors and is not authoritative.** The only code that
touches it is `explorer/modern/src/api/pageService.ts:73`, which strips a fixed list of
property lines (`schema_version`, `legacy_iri`, `legacy_uri`, `public`,
`public-access`, `definition`, `owl-class`, `owl-role`, `belongs-to-domain`, `sources`,
`migration-date`) before display; `enables::`, `requires::`, `relatedTo::` and
`is-subclass-of::` survive into the rendered page. If the outline and the JSON
disagree, the JSON is what ships.

This separation is what makes the hybrid work: the page stays fully editable in
Logseq (outline, wikilinks, properties, aliases all behave normally) while the
fenced JSON-LD carries the OWL semantics the build consumes. Neither editing surface
can corrupt the other.

---

## 8. Two JSON emissions: parse, never text-match

1027 of the 19449 blocks are compact single-line JSON: 1004 `Page` blocks, one per
file across 1004 distinct files, plus 23 `Class` blocks, each in a file that already
carries a compact `Page` block. The other 18422 blocks are pretty-printed with
two-space indentation.

Pretty (`ontology/pages/1Hive.md`, key order verbatim, the four wikilink items and the
trailing `vc:legacyProperties` / `prov:` keys elided):

```json
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b82f7b72…51a5",
  "@type": "Page",
  "vc:slug": "1-hive",
  "title": "1Hive",
  "vc:public": true,
  "vc:outboundWikilinks": [ … ],
  "vc:schemaVersion": 2
}
```

Compact (`ontology/pages/AI Accelerator.md`, verbatim):

```json
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ai-accelerator", "@type":"Page", "title":"AI Accelerator", "vc:slug":"ai-accelerator", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

Both carry the same eight-key core. They differ in whitespace, in key order, and in
`@context`.

> **Consumers MUST parse the JSON. Never text-match it.**
>
> `grep -l '"vc:public": true' ontology/pages/*.md` returns 6984 of the 7874 files;
> it misses exactly 890, because their compact block writes `"vc:public":true` with no
> space. That grep in the source repository's `publish.yml` silently dropped those 890
> pages from the published `api/markdown/` mirror. The fix is
> `grep -qE '"vc:public":[[:space:]]*true'`, now backed by a contract gate that
> recomputes the public count through `pipeline.jsonld_parser.parse_corpus` and fails
> the build on any mismatch. That workflow lives in the private Logseq repository, not
> here; the equivalent gate in this repository is the class-count contract
> (`EXPECTED_CLASSES`, `.github/workflows/build.yml:64`), pinned at 7874 and re-pinned
> after the corpus repair took the count from 7457. Changing the class count without
> moving that pin fails the build.

The same hazard applies elsewhere in the format: `subClassOf` is a list on 7211 blocks
and a bare object on 663; ref labels are spelled `label` in one block and `vc:label`
in another; the annotation type appears both prefixed and unprefixed. Only a JSON
parser handles all of these.

---

## 9. Minimal valid page

Copy-pasteable. Verified to parse: `parse_page` returns `is_public=True`,
`schema_version=2`, and an `OntologyEntity` with one parent and one relation.

````markdown
public:: true

# Conviction Voting
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:conviction-voting",
  "@type": "Page",
  "vc:slug": "conviction-voting",
  "title": "Conviction Voting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conviction-voting",
  "@type": "Class",
  "label": "Conviction Voting",
  "definition": "A governance mechanism in which support for a proposal accrues over time in proportion to how long stake remains committed to it, replacing discrete ballots with a continuous signal.",
  "domain": "governance",
  "maturity": "emerging",
  "quality": 0.6,
  "qualityScore": 0.6,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-mechanism",
      "label": "Governance Mechanism"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A governance mechanism in which support for a proposal accrues over time in proportion to how long stake remains committed to it.

- ### Relationships
  - is-subclass-of:: [[Governance Mechanism]]
  - requires:: [[Governance Token]]
````

Minimum for a page to build at all: a `Page` block with `@id`, `@type`, `vc:slug`,
`vc:public`, and a `Class` block with `@id` and `label`. Everything else degrades to
warnings or parser defaults (`maturity` → `"draft"`, `quality` → `0.0`,
`vc:public` → `false`, `title` → the filename stem).

---

## 10. Richly populated example

`ontology/pages/3D Gaussian Splatting.md` exercises most of the format at once: ten of
the twelve relation predicates, a `sameAs` alias set, `alias::` and `legacy-term-id`
carry-over, and a `subClassOf` written as a bare object rather than a list. It is not
the maximum: 75 class blocks populate all twelve predicates, and the widest
(`Bias Mitigation Techniques.md`) carries 44 relation refs against this page's 22.

Structure, abridged (read the file for the full text). It opens
`public:: true` / `alias:: TELE-051-3d-gaussian-splatting` / `# 3D Gaussian Splatting`.

`Page` block: `@id` is the SHA-256 form
`urn:visionflow:page:f32f0472a5ee16559fe85eb785fa81ec86cd50b3fe51d1d813e71a88fc87fac7`,
`vc:slug` is `3-d-gaussian-splatting` (note `slugify` splitting `3D` into `3-d`),
seven `vc:outboundWikilinks`, two `vc:legacyProperties`
(`legacy-term-id: TC-0051`, `preferred-term: 3D Gaussian Splatting`),
`prov:wasAttributedTo` `did:nostr:jjohare`,
`prov:generatedAtTime` `2026-05-18T07:12:05Z`.

`Class` block: `@id` `urn:ngm:class:3-d-gaussian-splatting`,
`domain` `spatial-computing`, `maturity` `emerging`, `quality` `0.72`,
`provenance.attributedTo` `did:nostr:ontology-mesh`,
`provenance.inferenceRule` `RelationEnrichment`.

`subClassOf` as a **bare object**, the 663-block variant the parser coerces:

```json
"subClassOf": {
  "@id": "urn:ngm:class:neural-rendering",
  "label": "Neural Rendering"
}
```

Ten of the twelve predicates are populated, each holding full
`{"@id": "urn:ngm:class:<slug>", "label": "…"}` objects, target slugs abbreviated here:

- `hasPart`: gaussian-primitive, spherical-harmonics
- `partOf`: novel-view-synthesis
- `requires`: differentiable-rendering, structure-from-motion
- `enables`: photorealistic-telepresence, tele-053-volumetric-video-conferencing, novel-view-synthesis, avatar
- `dependsOn`: multi-view-photography, point-cloud, adam-optimiser
- `implements`: alpha-blending
- `uses`: stochastic-gradient-descent, ssim-loss
- `contrastsWith`: neural-radiance-fields, tele-060-instant-ngp
- `bridgesTo`: tele-050-neural-rendering-telepresence, extended-reality, web-xr
- `relatedTo`: virtual-reality-telepresence, 3-d-scene-reconstruction

`sameAs` carries two aliases:
`{"@id": "urn:ngm:class:3dgs", "label": "3DGS"}` and
`{"@id": "urn:ngm:class:gaussian-splatting", "label": "Gaussian Splatting"}`.

Note that `enables` includes a class whose `@id` slug
(`tele-053-volumetric-video-conferencing`) disagrees with its label
(`Volumetric Video Conferencing`). That is legal: `SLUG_MISMATCH` only fires on
`subClassOf` parents whose IRI contains `owl:class:`.

---

## 11. Authoring checklist

1. `public:: true` at the top, matching `"vc:public": true` in the `Page` block.
2. `# Title` H1 before the first fence (7820 of 7874 pages do this).
3. `Page` block: `@context` `ns/v2.jsonld`, `@id`, `@type: "Page"`, `vc:slug`,
   `title`, `vc:public`, `vc:schemaVersion: 2`.
4. `Class` block: `@context` `ns/v2.jsonld`, `@id` `urn:ngm:class:<slug>` matching the
   page slug, `@type: "Class"`, `label`, `definition`, `domain` from §4.1,
   `maturity` from the four intended values, both `quality` and `qualityScore`,
   at least one `subClassOf` parent, `relations` using only the twelve predicates,
   `provenance` with all three sub-fields.
5. One `subClassOf` parent is the common case. Assert a second (or third) when the
   class is genuinely subsumed by both branches — see §4.6. 1401 classes do.
6. Every ref object carries `@id` **and** `label` (`vc:label` inside the `Page` block).
7. Run `python -m pipeline.validate ontology/pages` and confirm 0 errors and 0
   warnings. `MULTI_PARENT` info lines are not defects; leave them.
