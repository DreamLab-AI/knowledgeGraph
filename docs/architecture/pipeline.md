# Pipeline architecture

`pipeline/` compiles a directory of Logseq markdown pages into every artefact the
site serves: an OWL 2 Turtle ontology, a WebVOWL JSON graph, a per-page JSON API, a
search index, and binary graph tiers in the NGG1 format. It is ten files under
`pipeline/` (nine modules plus a one-line `__init__.py`, 2,309 lines) and one
484-line test module, depending only on `rdflib>=7.0.0` (`pytest` for tests).

```bash
python -m pipeline.build ontology/pages dist
```

A full run over the 7,457-page corpus takes **18.0 seconds**. The only wall-clock
input is `date.today()` (`emit_graph_tiers.py:765`, `:832`, for `generatedAt` and
`datasetDate`), and the only RNG is the seeded force layout, so within one day a
re-run reproduces `full.bin`, the six domain tiers, `overview.json`,
`ontology.json`, `stats.json` and the page/search JSON byte for byte. **`ontology.ttl`
is the exception**: rdflib mints fresh blank-node identifiers for the 19,305
existential restrictions on every run, so the file is isomorphic and the same length
(252,974 triples, 12,301,363 bytes) but the restriction blocks come out in a
different order. A re-run diffs against the committed copy on ~20k lines.

```mermaid
flowchart LR
    MD["ontology/pages/*.md<br/>7,457 files"] --> P["1 · parse<br/>jsonld_parser.py<br/>→ PageData"]
    P --> V["2 · validate<br/>0 errors · 961 warnings<br/>→ api/validation-report.json"]
    P --> T["3 · Turtle · rdflib<br/>252,974 triples<br/>→ data/ontology.ttl 12.3 MB"]
    P --> W["4 · WebVOWL<br/>7,457 classes · 103,102 props<br/>→ data/ontology.json 39.3 MB"]
    P --> A["5 · Page API + backlinks<br/>→ api/pages ×7,457<br/>api/markdown ×7,428"]
    P --> X["6 · Search index<br/>→ api/search-index.json 6.7 MB"]
    P --> G["7 · Graph tiers · NGG1<br/>→ overview.json · full.bin<br/>domain-*.bin ×6 · stats.json"]
```

`build.py` runs the stages in that order, then writes `api/schema/context.jsonld` and
`api/validation-report.json`. It prints validation errors as "non-blocking for build"
and continues; only `main()` exits non-zero on errors (`build.py:39-43`, `:119`).

---

## Input: what a corpus page looks like

Each page is a Logseq markdown file carrying two or three fenced `json-ld` blocks
followed by the outline body. Full census of `ontology/pages/*.md`: 3,756 files are
`Page, Class`; 3,684 are `Page, Class, vc:LinkResolutionsAnnotation`; 17 are
`Page, Class, LinkResolutionsAnnotation`. Zero blocks fail `json.loads`.

The **Page** block carries publication metadata in the `vc:` namespace
(`https://narrativegoldmine.com/ns/v1#`): `vc:slug`, `vc:public`, `vc:schemaVersion`,
`vc:outboundWikilinks`, `vc:legacyProperties`. The **Class** block carries the
ontology entity under `@context: https://narrativegoldmine.com/ns/v2.jsonld` with
bare terms (`label`, `definition`, `domain`, `maturity`, `subClassOf`, `relations{}`)
at IRIs of the form `urn:ngm:class:<slug>`. The v2 context (`static/ns/v2.jsonld`,
`"@version": 1.1`) maps `label → rdfs:label`, `definition → rdfs:comment`,
`domain → vc:sourceDomain`, `maturity → vc:maturity`,
`subClassOf → rdfs:subClassOf` (`"@type": "@id"`, `"@container": "@set"`),
`qualityScore → vc:qualityScore` (`xsd:float`) and the `@type` token `Class →
owl:Class`, with a scoped sub-context under `relations` (`vc:relations`).

The third block records each raw `[[Wikilink]]` against its resolved URN and a
`ResolvedLink`/`StubLink` kind. **No pipeline stage reads it**: it is authoring
provenance only.

---

## Stage 1: parse

`pipeline/jsonld_parser.py` · in: `ontology/pages/*.md` · out: `list[PageData]`

The only module that touches markdown; everything downstream consumes the
dataclasses. JSON-LD is located by exactly one regex:

```python
JSONLD_BLOCK_RE = re.compile(r'```json-ld\s*\n(.*?)```', re.DOTALL)
```

Every match is `json.loads`'d; a `JSONDecodeError` silently `continue`s. The parser
keeps **at most two** blocks: the first `@type == "Page"` and the first typed
`Class`, `Individual` or `OntologyClass`. A file with no Page block returns `None`
and vanishes from the corpus without a diagnostic (`jsonld_parser.py:195-196`).

The body is `text[blocks[-1].end():].strip()`: everything after the *last* fence.
29 of 7,457 pages have an empty body, which is why the markdown mirror ships 7,428
files rather than 7,457.

### PageData model

```
PageData        path, page_iri, slug, title, is_public, schema_version, body,
                wikilinks: list[WikilinkRef], ontology_class: OntologyEntity|None,
                raw_page_block: dict          # kept for vc:legacyProperties lookups
OntologyEntity  iri, label, entity_type, domain, definition, quality_score,
                maturity, inference_rule, sub_class_of / instance_of:
                list[WikilinkRef], relations: RelationSet, provenance, raw
RelationSet     12 × list[WikilinkRef] — has_part requires enables depends_on
                implements contrasts_with bridges_to uses related_to supports
                standardized_by part_of
WikilinkRef     iri, label
```

Two schema generations normalise into that one model. `_extract_relations` reads both
the v1 flat keys (`vc:hasPart`, `vc:depends-on`, `vc:contrasts-with`, …) and the v2
nested `relations{}` object (`hasPart`, `dependsOn`, `contrastsWith`, …), v1 by
`setattr` and v2 by `extend`, so a page carrying both gets the union. `quality` (v2
float) falls back to `vc:qualityScore` (v1 typed `{@value}`); `provenance{}` falls
back to synthesising from `prov:wasAttributedTo` / `prov:generatedAtTime` /
`vc:inferenceRule`. On the current corpus no v1 path fires: all 7,457 pages are
`vc:schemaVersion` 2, all 7,457 entities are `Class`, 0 are `Individual`.

---

## Stage 2: validate

`pipeline/validate.py` · out: `dist/api/validation-report.json`

Six error codes (`MISSING_PAGE_IRI`, `MISSING_SLUG`, `MISSING_CLASS_IRI`,
`MISSING_LABEL`, `SELF_REFERENCE`, `DUPLICATE_IRI`) and five warning codes
(`MISSING_SCHEMA_VERSION`, `MISSING_DOMAIN`, `INVALID_DOMAIN`, `SLUG_MISMATCH`,
`MULTI_PARENT`). Validation is advisory: the build proceeds regardless and the report
ships as an artefact, so the corpus's known deviations are public rather than hidden.

`validate_corpus` returns a `ValidationReport`; over this corpus
`Counter(i.code for i in report.issues)` is
`Counter({'MULTI_PARENT': 957, 'INVALID_DOMAIN': 4})`: 961 warnings, 0 errors.
Nothing else fires.

```bash
# prints "Issues: 0 errors, 961 warnings" and exits 0
python -m pipeline.validate ontology/pages
```

**957 × MULTI_PARENT**: more than one `subClassOf` entry. Parent-count distribution:
6,499 classes with one parent, 754 with two, 203 with three, one with none
(`Spatial Computing.md`, a domain root). Samples from the run:

```
[MULTI_PARENT] 3D Generation.md — Multiple parents (3): 3D Content Generation, Generative Model, Computer Vision
[MULTI_PARENT] 3D Graphics Standard.md — Multiple parents (2): Display and Rendering, Content and Assets
[MULTI_PARENT] A Star Algorithm.md — Multiple parents (3): Search Algorithm, Informed Search, Graph Search
[MULTI_PARENT] A2A Protocol.md — Multiple parents (2): Agent Communication Protocol, Agent-to-Agent Protocol
```

**4 × INVALID_DOMAIN**: a `domain` outside the 16-entry `VALID_DOMAINS` set:

```
[INVALID_DOMAIN] AI Investment.md — Domain 'economics' not in valid set
[INVALID_DOMAIN] Accountability (AI-0068).md — Domain 'ai-governance' not in valid set
[INVALID_DOMAIN] Creative Industries.md — Domain 'economics' not in valid set
[INVALID_DOMAIN] Knowledge Economy.md — Domain 'economics' not in valid set
```

Those same four pages are the four `domainless` nodes in `stats.json`. The warning
and the graph consequence are one fact seen twice. `validate.py --fix` strips
self-referential `subClassOf` but matches only `@type == "OntologyClass"`, so on this
all-v2 corpus it is a no-op.

---

## Stage 3: Turtle

`pipeline/jsonld_to_turtle.py` · out: `dist/data/ontology.ttl`, 252,974 triples,
12,301,363 bytes

**IRI mapping.** Five URN prefixes rewrite to four HTTPS namespaces:
`urn:ngm:class:` and `urn:visionflow:owl:class:` → `.../class/`,
`urn:ngm:individual:` → `.../individual/`, `urn:visionflow:linked:` → `.../linked/`,
`urn:visionflow:page:` → `.../page/`. `owl:Thing` maps to `OWL.Thing`, `http*` passes
through, anything else is wrapped as `class/<iri>`. A census of every edge target in
the corpus finds 110,612 `urn:ngm:class:` and 5 `owl:Thing`. Nothing exercises the
fallthrough.

**Triple mapping.** Per class: `rdf:type owl:Class`, `rdfs:label`, `rdfs:comment`
(from `definition`), `vc:sourceDomain`, `vc:qualityScore` (`xsd:float`), `vc:slug`,
one `vc:hasMaturity` (7,458 occurrences in the shipped TTL: 7,457 assertions plus
the declaration), one `rdfs:subClassOf` per parent. The 12 `RelationSet` fields map
onto `vc:hasPart / requires / enables / dependsOn / implements / contrastsWith /
bridgesTo / uses / relatedTo / supports / standardizedBy / isPartOf`, all declared
`owl:ObjectProperty` with `owl:Thing` domain and range, plus `vc:enabledBy` and a
`vc:utilises` super-property (`uses`, `supports`, `implements` beneath it). <!-- slop-ignore: vc:utilises is a literal RDF property name in the ontology, not a prose word choice -->
`requires` and `dependsOn` are `owl:TransitiveProperty`; `requires
rdfs:subPropertyOf dependsOn`. `owl:inverseOf` and `owl:SymmetricProperty` are
deliberately omitted: neither is in OWL 2 EL (`jsonld_to_turtle.py:124`, `:186-187`).
Maturity is not a literal: five named individuals
`.../individual/maturity-{established,emerging,draft,stub,deprecated}` typed as a
`MaturityLevel` class, unrecognised values coerced to `draft`.

**Four structures with no JSON-LD source.**

1. *SKOS taxonomy marking*: `TAXONOMIC_SLUGS` (6 domain roots ∪ 34 category slugs):
   a class whose slug is in the set also gets `rdf:type skos:Concept`, and a
   `subClassOf` edge pointing at one emits **both** `skos:broader` and
   `rdfs:subClassOf`. 3,150 `skos:broader` triples ship.
2. *Existential restrictions*: every `requires`/`hasPart` edge whose target is a
   declared public class produces an `owl:Restriction` BNode (`owl:onProperty` +
   `owl:someValuesFrom`) added as an extra `rdfs:subClassOf` of the source. **19,305**
   ship; visible on `ngm:a-star-algorithm` at `dist/data/ontology.ttl:99065`.
3. *Domain-root disjointness*: one `owl:AllDisjointClasses` over the 6 roots. The
   code records that this axiom once made 5,881/5,951 classes (98.8%) unsatisfiable,
   EL's `∃R.⊥ ≡ ⊥` propagating the clash across the restrictions, and was re-enabled
   only after the taxonomy was single-domain-normalised (903 clashes across 370 pages
   remediated, 9 subClassOf cycles broken). `emit_domain_disjointness=False` gives a
   lenient build.
4. *Dangling-target stubs*: any `class/` IRI referenced by an object property but
   never declared as a page gets `rdf:type skos:Concept` and a label rebuilt from the
   slug (title-case per hyphen segment, except a 25-entry acronym table: `ai→AI`,
   `defi→DeFi`, `iot→IoT`, `zk→ZK`, …). **4,850** stubs ship; `subClassOf` targets are
   excluded, since those must be real classes. The 4,891 `skos:Concept` occurrences in
   the TTL are exactly 4,850 stubs + 40 taxonomic classes + 1 declaration.

---

## Stage 4: WebVOWL JSON

`pipeline/jsonld_to_webvowl.py` · out: `dist/data/ontology.json`, 39,337,821 bytes,
7,457 classes, 103,102 properties

Four parallel arrays (`class`/`classAttribute`, `property`/`propertyAttribute`)
with property ids `prop-sub-N`, `prop-type-N`, `prop-rel-N` from one counter. An edge
is dropped unless its remapped target is itself a declared public class. Node colour
comes from a 6-entry domain table (`#607D8B` default, `#FF5722` individuals),
`comment` is the definition truncated to 200 characters, `term_id` is lifted from the
`legacy-term-id` legacy property.

Two divergences worth knowing: `related_to` is emitted as `skos:related`, not
`vc:relatedTo`, the only point where the relation vocabulary differs from Turtle;
and the header reads *"7457 nodes across 18 domains"* because it counts
`set(ca['domain'])`, the distinct **raw** domain strings, before the alias collapse
stage 7 applies. The 103,102 properties exceed the 96,377 NGG1 edges because WebVOWL
neither deduplicates `(source, target)` pairs nor excludes self-loops.

---

## Stage 5: Page API and backlinks

`pipeline/jsonld_to_page_api.py`, `pipeline/backlinks.py` · out: 7,457 ×
`api/pages/<slug>.json`, 7,428 × `api/markdown/<slug>.md`, `_domain-index.json`

Each page JSON carries `id` (page IRI), `title`, `slug`, `public: true`, and where an
entity block exists `classIri`, `domain`, `definition`, `subClassOf`, `entityType`,
`qualityScore`, `maturity`, a `relationships` object with all 12 relation arrays as
`{id, label}` pairs, plus `wikilinks` and `backlinks`.

`_domain-index.json` maps raw domain string → `[{slug, title, qualityScore}]`. It has
**18 keys**, not 6, because it indexes the unnormalised value: `ai`, `ai-governance`,
`artificial-intelligence`, `blockchain`, `data`, `distributed-collaboration`,
`distributed-systems`, `economics`, `finance`, `governance`, `infrastructure`,
`machine-learning`, `metaverse`, `robotics`, `security`, `spatial-computing`,
`standards`, `supply-chain`.

**Backlink derivation** is 12 lines (`backlinks.py:13-24`):

```python
target_slug = wl.iri.split(':')[-1] if ':' in wl.iri else slugify(wl.label)
if target_slug in slug_set and target_slug != page.slug:
    backlinks[target_slug].append(page.slug)
```

Naive slug-suffix matching against the set of page `vc:slug` values: no reverse-alias
resolution, no IRI dereferencing, so a wikilink whose linked-slug differs from the
target page's `vc:slug` silently produces nothing. Measured: 64,523 declared
wikilinks resolve to **36,963 backlink edges** (a 57.3% resolution rate), landing on
6,024 of the 7,457 pages (80.8%); the other 1,433 pages end up with no backlinks at
all.

One structural wart: `build_backlink_index(pages)` is called on the **full** page list
while `public_pages` is filtered, so a private page linking to a public one lands in
the public page's `backlinks[]` with the raw slug as its label. The extracted corpus
is 100% public so this cannot manifest here; on the source repo (7,471 parsed, 14
private) it produced 50 leaking edges.

---

## Stage 6: search index

`pipeline/jsonld_to_search.py` · out: `dist/api/search-index.json`, 7,457 entries,
6,700,607 bytes

A flat list, one entry per public page: `id` (slug), `title`, and where an entity
block exists `domain`, `domain_name` (hyphens → spaces, title-cased), `definition`,
`entityType`, `qualityScore`, `maturity`, `iri`, `labels`, `is_subclass_of` (parent
**labels**, not IRIs) and `wikilinks` truncated to the first 20 labels. `labels`
starts as `[oc.label]` and appends the `preferred-term` value from
`vc:legacyProperties` when it differs, the index's only alias channel.

---

## Stage 7: graph tiers (NGG1)

`pipeline/emit_graph_tiers.py` (872 lines) · out:
`dist/data/graph/{overview.json, full.bin, domain-<slug>.bin ×6, stats.json}`

`build_graph_model` resolves the corpus into nodes and typed edges. One node per
public page with an entity block, keyed by remapped IRI; `gid` is the index in
canonical-IRI sort order, stable across tiers, and in `full.bin` the local index
equals the gid. Backbone edges (`edge_type` 0) come from `subClassOf`, or
`instanceOf` for an Individual, falling back to `subClassOf`; relation edges
(`edge_type` 1) from the 12 `RelationSet` attributes. `add_edge` drops an edge when
the target is not a declared node or is the source itself, and deduplicates on
`(src, tgt, type)`, so a pair related by two properties counts once. Degree is the
full-graph incident (in+out) degree over resolvable edges, computed once and written
into every node record in every tier.

**Declared vs resolvable:** 110,617 declared (8,616 backbone + 102,001 relations)
become 96,377 resolvable (8,492 + 87,885). The 110,617 is exactly the corpus census:
110,612 `urn:ngm:class:` targets plus 5 `owl:Thing`.

**Domain resolution.** `_resolve_domain` lowercases, applies a 10-entry alias table
(`ai`, `machine-learning` → `artificial-intelligence`; `metaverse` →
`spatial-computing`; `finance` → `blockchain`; `distributed-systems`, `supply-chain`,
`data`, `governance`, `security`, `standards` → `infrastructure`), then indexes the 6
canonical slugs or returns `DOMAIN_NONE` (`0xFFFF`). The corpus carries 18 distinct
raw domain values; 16 resolve, `economics` (3 pages) and `ai-governance` (1) do not.
The arithmetic closes against each tier's node count:

| Domain | Raw sources | Nodes |
|---|---|---|
| artificial-intelligence | 918 + `ai` 486 + `machine-learning` 348 | 1,752 |
| blockchain | 1,162 + `finance` 212 | 1,374 |
| spatial-computing | 1,023 + `metaverse` 152 | 1,175 |
| robotics | 572 | 572 |
| distributed-collaboration | 137 | 137 |
| infrastructure | 1,062 + `governance` 450 + `security` 429 + `data` 192 + `standards` 188 + `distributed-systems` 79 + `supply-chain` 43 | 2,443 |

**Category** is inherited **one hop**: the category of the first
`subClassOf`/`instanceOf` parent whose slug is one of the 34 category slugs. No
transitive walk. That single-hop rule is the whole mechanism behind the 4,498
uncategorised nodes. Category ids are contiguous per domain because `CATEGORY_ORDER`
iterates the taxonomy in `DOMAIN_SLUGS` order (AI 0-5, blockchain 6-11, spatial
12-17, robotics 18-23, distributed-collaboration 24-27, infrastructure 28-33).

**T0: overview.json**, 15,986 bytes. A fixed 40-node graph: 6 domains at indices
0-5, then 34 categories at 6-39. Node order is frozen because the 34 edge records
index into `nodes[]`. Positions come from a pure-Python Fruchterman-Reingold layout
(200 iterations, seed 42, area 1e6, temperature ×0.95, rounded to 3 d.p.), O(n²),
affordable only at this size. Domain and category nodes borrow the real authored root
page's IRI, label and `FLAG_HAS_PAGE` when one exists, else fall back to a synthetic
`.../ns/{domain,category}/<slug>` IRI. On this corpus the fallback never fires: all
40 shipped nodes carry a `.../class/` IRI and the `HAS_PAGE` bit (flags `5` ×6, `6`
×34). `degree` carries member count so hubs render larger: node 0 is
`Artificial Intelligence`, degree 1,752, flags `5` (`DOMAIN_ROOT|HAS_PAGE`).

**T1 tiers.** `domain-<slug>.bin` holds only nodes of that domain; above
`MAX_NODES = 1500`, domain and category roots are kept unconditionally and the rest
filled by descending degree with a `(-degree, gid)` tie-break. `full.bin` is uncapped
and is the only tier containing domainless nodes. Per-node relations are capped at
`RELATION_TOPK = 8` for domain tiers, ranked by descending target degree; the
backbone is never capped, and drops are counted rather than hidden.

| Scope | Nodes | Backbone | Relations | Shipped | relationsCapped | nodesTruncated | Bytes |
|---|---|---|---|---|---|---|---|
| full | 7,457 | 8,492 | 87,885 | 96,377 | 0 | — | 1,282,989 |
| artificial-intelligence | 1,500 | 1,554 | 10,360 | 11,914 | 7,185 | 252 | 221,490 |
| blockchain | 1,374 | 1,336 | 7,983 | 9,319 | 5,185 | 0 | 190,615 |
| spatial-computing | 1,175 | 1,254 | 4,596 | 5,850 | 1,415 | 0 | 157,614 |
| robotics | 572 | 641 | 3,039 | 3,680 | 1,120 | 0 | 79,331 |
| distributed-collaboration | 137 | 130 | 411 | 541 | 14 | 0 | 17,946 |
| infrastructure | 1,500 | 1,239 | 10,412 | 11,651 | 5,180 | 943 | 217,020 |

`MAX_EDGES = 4000` mirrors the client constant in `explorer/modern/src/types/scope.ts`
but is never read by the writer: the in-code comment at `emit_graph_tiers.py:99-102`
says so explicitly ("artifacts may legitimately exceed MAX_EDGES (the client
sub-selects). Only MAX_NODES bounds a domain tier's node table"), and two tiers ship
~11.7k edges. The cap is real on the other side of the wire: `assertScope`
(`scope.ts:144-150`) throws `RangeError` on any scope built above it, so the client
sub-selects from the tier rather than rendering it whole.

Seed positions are a deterministic three-ring radial layout: domain centres on a ring
of radius 900 (or the origin for a single-domain tier), categories at 240 around their
domain, leaves at 95 around their category, ordered by gid. No RNG. `bake_positions`
mutates `GNode.x/y` **in place**, so `emit_graph_tiers` packs `full.bin` first and
rebakes per domain tier; a reimplementation must preserve that ordering.

**stats.json counts pages and classes separately.** `pages` is
`len({(p.page_iri or str(p.path)) for p in pages if p.is_public})` (distinct public
page identities) and reports **7,454** against **7,457** classes because three file
pairs share a page IRI: `Bitcoin Proof-of-Work Protocol.md`/`Bitcoin.md`,
`Comfy Ui.md`/`Node-Based Diffusion Pipeline Interface.md`,
`Ethereum Smart Contract Platform.md`/`Ethereum.md`. A Page is a reading unit, not an
OWL entity; conflating the two was the bug this deduplication fixes.

Provenance and the corpus-honesty framing are emitted from the pipeline, not
hardcoded in the SPA. `ATTRIBUTED_TO = "did:nostr:jjohare"` ships twice: as a bare
string (the frozen SPA types `attributedTo?: string`) and inside a structured
`provenance` object with `corpusNature: "synthetic-ai-generated-human-directed"`,
alongside a `corpus` block stating the corpus is *"Mostly AI-generated synthetic
content, produced under human direction, by design"* and that provenance attests
*"traceable generation under human direction, not human authorship"*.

---

## NGG1 binary format

Contract: `explorer/FORMAT-NGG1.md`. Writer: `emit_graph_tiers.py:232-343`. Readers:
`explorer/modern/src/lib/ngg1.ts` and the `explorer/rust-wasm/` crate. Little-endian
throughout; every section starts on a 4-byte boundary and readers must use the
declared offsets rather than assume back-to-back packing.

### Header: 32 bytes at offset 0

| Off | Size | Field | Value in `full.bin` |
|---|---|---|---|
| 0 | 4 | `magic` `u8[4]` | `4E 47 47 31` = `NGG1`, LE u32 `0x3147474E` |
| 4 | 2 | `version` `u16` | 1 |
| 6 | 2 | `pad` `u16` | 0 |
| 8 | 4 | `node_count` `u32` | 7457 |
| 12 | 4 | `edge_count` `u32` | 96377 |
| 16 | 4 | `off_nodes` `u32` | 32 (always) |
| 20 | 4 | `off_adjacency` `u32` | 179000 |
| 24 | 4 | `off_edge_types` `u32` | 594340 |
| 28 | 4 | `off_strings` `u32` | 690720 |

All four offset identities check out against the shipped file: `32 + 7457·24 = 179000`;
`179000 + 7458·4 + 96377·4 = 594340`; `594340 + 96377 + 3 = 690720`;
`690720 + 8 + 14914·4 + 532605 = 1282989`.

### Section 1: node table, 24 bytes per record, `struct('<IffHHB3xI')`

| Off | Size | Field | Meaning |
|---|---|---|---|
| 0 | 4 | `id` `u32` | stable gid; not necessarily the row index |
| 4 | 4 | `x` `f32` | seed layout x |
| 8 | 4 | `y` `f32` | seed layout y |
| 12 | 2 | `domain` `u16` | index into the 6 canonical domains, `0xFFFF` = none |
| 14 | 2 | `category` `u16` | index into the 34 categories, `0xFFFF` = uncategorised |
| 16 | 1 | `flags` `u8` | bitfield, below |
| 17 | 3 | `pad` `u8[3]` | `0x00`, aligns `degree` |
| 20 | 4 | `degree` `u32` | full-graph incident degree, preserved in capped tiers |

The stride is a documented correction, not drift. `FORMAT-NGG1.md` §0 records that
the sprint brief specified a 20-byte record, but the named field widths sum to 22 and
a `u32 degree` cannot be 4-aligned inside 20 bytes; the pad was widened from 1 to 3
and 24 frozen for all six builders. `emit_graph_tiers.py:238` asserts
`_NODE_STRUCT.size == 24` at import time.

Flags: `0x01` domain root, `0x02` category root, `0x04` has page, `0x08` bridge,
`0x10` individual. The last is listed "reserved, 0" in §5; the writer sets it anyway,
justified in-code on the grounds that all six builders mask specific bits, so a spare
bit is byte-compatible with every existing reader. The client mirrors it in
`explorer/modern/src/components/Canvas/palette.ts`. `FLAG_BRIDGE` is set only when a
`bridges_to` edge **resolved**, not merely when one was declared.

### Sections 2-4

**CSR adjacency**: `row_ptr: u32[node_count + 1]` then `col_idx: u32[edge_count]`
holding **local** indices. `row_ptr[i]..row_ptr[i+1]` is node `i`'s half-open edge
range; `row_ptr[0] == 0`, `row_ptr[node_count] == edge_count`. Within a source the
writer emits backbone first (sorted by target local index), then relations sorted by
descending target degree, so a reader that truncates a row keeps the structural
skeleton and the strongest relations.

**Edge types** (`u8[edge_count]`): `0` = subClassOf backbone, `1` = objectProperty
relation, ≥ 2 reserved. Zero-padded to the next 4-byte boundary via
`_pad4(n) = (4 - (n & 3)) & 3` so section 4 stays aligned.

**String table**: `u32 count` (= 2 × node_count), `u32 blob_len`,
`u32 offset[count]`, then the UTF-8 blob. Pairing is binding: `strings[n*2]` is node
`n`'s label, `strings[n*2+1]` its IRI. In `full.bin`: count 14,914 = 2 × 7,457, blob
532,605 bytes.

### Why binary rather than JSON

Decode `full.bin` and re-serialise it as minified JSON: one object per node with
`id/label/iri/domain/category/flags/degree/x/y` (coordinates at the 3 d.p. the writer
bakes), one per edge with `source/target/type`, `json.dumps(separators=(',',':'))`,
and 7,457 nodes plus 96,377 edges measure **5,045,378 bytes** against `full.bin`'s
**1,282,989**, a 3.93× raw gap. Gzipped (`gzip.compress(…, 9)`) it narrows to
591,195 vs 400,213, so transfer size alone is a 1.5× argument, not a 4× one.

The decisive cost is on the client. JSON forces the browser to materialise 103,834
JavaScript objects before the first frame; NGG1 is read as `Uint32Array` /
`Float32Array` views directly over the fetched `ArrayBuffer` with zero per-element
allocation: `neighbours(i)` is `colIdx.subarray(rowPtr[i], rowPtr[i+1])` and node
fields are read through a `DataView` on demand (`ngg1.ts:161-201`). The same buffer
goes to the Rust WASM layout worker without a copy. The 39.3 MB WebVOWL monolith NGG1
replaces is retained only as a VOWL-format export for external viewers
(`https://narrativegoldmine.com/data/ontology.json`); the standards artefact is
`ontology.ttl`. `overview.json` deliberately
stays JSON: 40 nodes and 34 edges at 15,986 bytes do not justify a binary tier.

---

## `is_public`: one gate, eight checks

`vc:public` on the Page block is the sole publication gate, checked independently in
every output stage rather than filtered once, so no stage can inherit a stale list:

| Surface | Check | Location |
|---|---|---|
| Turtle, class pass | `if public_only and not page.is_public: continue` | `jsonld_to_turtle.py:240` |
| Turtle, restriction targets | `if page.ontology_class and (not public_only or page.is_public)` | `jsonld_to_turtle.py:316` |
| Turtle, restriction sources | `if public_only and not page.is_public: continue` | `jsonld_to_turtle.py:324` |
| WebVOWL | `[p for p in pages if p.is_public and p.ontology_class]` | `jsonld_to_webvowl.py:48` |
| Page API | `[p for p in pages if p.is_public]` | `jsonld_to_page_api.py:21` |
| Search | `if not page.is_public: continue` | `jsonld_to_search.py:18` |
| Graph tiers | `[p for p in pages if p.is_public and p.ontology_class]` | `emit_graph_tiers.py:481` |
| stats `pages` | `{… for p in pages if p.is_public}` | `emit_graph_tiers.py:490` |

The one place the gate is *not* applied is `build_backlink_index`, documented under
stage 5.

The complementary check (comparing the file count of the shell-copied markdown mirror
against `sum(1 for p in parse_corpus(...) if p.is_public)`, so that drift between a
`"vc:public":\s*true` grep and the parser's notion of public reads as a publication
bug rather than a warning) is not in this tree. It runs in the private publishing CI
and is listed as "Markdown-mirror contract" in `docs/ci-cd/build-and-gates.md` §2.2,
alongside the five other gates that need a Rust or Node toolchain. What
`.github/workflows/build.yml` does gate here is the class-count contract
(`EXPECTED_CLASSES: '7457'` against both `stats.json["classes"]` and
`len(ontology.json["class"])`, `build.yml:149-177`) and a secret scan over
`ontology/` (`build.yml:90-111`), because the 7,457 corpus pages ship verbatim.

---

## Tests and determinism

`pipeline/tests/test_emit_graph_tiers.py` is 484 lines, 9 tests, ~0.2 s. It carries
its own `parse_ngg1` written independently of the writer, so the golden checks the
byte layout rather than round-tripping shared logic. The 183-byte worked example from
`FORMAT-NGG1.md` §7 is asserted byte-exact and written to
`pipeline/tests/fixtures/ngg1-3n2e.bin`, byte-identical to the reader's copy at
`explorer/modern/src/lib/__fixtures__/ngg1-3n2e.bin` (both 183 bytes, verified equal).
Other tests pin the top-k cap by target degree, CSR grouping, the pages-vs-classes
count distinction (a synthetic corpus asserting pages=9, classes=7, nodes=8), the
overview contract, and `bake_positions` determinism.

`.github/workflows/build.yml` runs `python -m pytest pipeline/tests -q` as a blocking
gate before the pipeline runs at all (`build.yml:128-129`). It installs Python and
nothing else, so the Rust side of the same contract (`cargo test --all-features` in
`explorer/rust-wasm`, where `tests/ngg1_explorer_test.rs` reads the same 183-byte
fixture) is not run by this workflow; it runs in the private publishing CI and from a
clone with a Rust toolchain (`docs/ci-cd/build-and-gates.md` §2.2).

## Known sharp edges

- `build.py` writes `dist/api/schema/context.jsonld` with a five-entry `@context` (vc,
  owl, rdfs, xsd, prov). That is **not** the context the corpus resolves against:
  pages reference `https://narrativegoldmine.com/ns/v2.jsonld`, served from
  `static/ns/v2.jsonld`, a JSON-LD 1.1 document with a scoped `relations` sub-context.
- The `vc:LinkResolutionsAnnotation` block on 3,701 pages is authored, shipped in the
  markdown, and read by nothing.
- A page whose JSON-LD fails to parse, or which lacks a Page block, is dropped
  silently. Currently zero pages hit either path.
- `validate.py --fix` targets v1 `OntologyClass` blocks and does nothing here.
- `MAX_EDGES` is unread by the writer: it is duplicated from the client contract as
  documentation, and only `assertScope` in `explorer/modern/src/types/scope.ts`
  enforces it.
- `ontology.ttl` is the one artefact that is not byte-reproducible: rdflib's blank-node
  identifiers reshuffle the restriction blocks on every run. Compare it by triple set,
  not by hash.
