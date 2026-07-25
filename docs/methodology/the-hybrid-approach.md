# One File, Two Readers

How 7,874 Logseq pages are simultaneously a human-editable wiki and an OWL
ontology, without either view being generated from the other.

This document explains the design and the reasoning behind it. Every number
below is checkable against a file in this repository; the commands that produce
them are given inline.

---

## 1. Two starting points

Knowledge graph projects generally pick one of two starting points.

**Human-friendly.** A wiki, a Logseq or Obsidian vault, a Notion database.
Editing is fast, the outline is legible, `[[wikilinks]]` are cheap, and the graph
accretes naturally as somebody thinks. What you get out is a link graph:
undirected, untyped, no formal semantics. `[[Bitcoin]]` on a page about consensus
tells you the two are *somehow* related and nothing more.

**Machine-friendly.** Turtle, OWL, a triple store, Protégé. The semantics are
exact: `rdfs:subClassOf`, typed object properties, existential restrictions, a
reasoner that tells you when your taxonomy is inconsistent. Editing is slow and
specialised, and nobody writes prose in it.

The usual fix is round-tripping: author in the friendly format, run an exporter,
maintain the exported artefact, occasionally re-import. This loses data in both
directions and does so quietly. The wiki has no slot for `owl:someValuesFrom`,
so restrictions added in Protégé vanish on the next export. The RDF has no slot
for three paragraphs of prose, so the prose is dropped on import. Because the
loss is structural rather than erroneous, nothing fails; the data just gets
thinner. Round-tripping also assumes one representation is canonical and the
other derived, so the two formats stay in a permanent argument about who owns
the truth.

## 2. Stop deriving

Put both representations in the same file and let them coexist.

A page in `ontology/pages/` is a Logseq markdown file. It opens with Logseq page
properties, carries an H1, then two or three fenced ` ```json-ld ` blocks, then
a Logseq outline of prose and `::` properties. Logseq renders the markdown and
ignores the fenced blocks as opaque code. The Python pipeline reads the fenced
blocks and ignores everything else.

````text
public:: true

# 1Hive
```json-ld
{ ... Page block ... }
```
```json-ld
{ ... Class block ... }
```
- ### Relationships
  - is-subclass-of:: [[Decentralized Autonomous Organization]]
  - requires:: [[Decentralized Autonomous Organization]], [[Governance Token]]
````

That is the whole trick. One file, two readers, no exporter between them.

Neither view is generated from the other, which is the property that makes it
work. No build step rewrites the prose from the JSON; no importer reconstructs
the JSON from the prose. A human editing the outline in Logseq cannot corrupt
the OWL semantics; a script rewriting a relation array cannot corrupt the prose.
The two layers are independent surfaces over the same subject, and the file is
the join. The cost (they can drift out of agreement and nothing detects it) is
discussed in §7 and §10.

Verify the layering: `grep -rnE "is-subclass-of|owl-class|belongs-to-domain|elevatedFrom" pipeline/`
returns nothing. The only code in the repository that touches the `::`
properties is `explorer/modern/src/api/pageService.ts:73`, which strips them for
display.

## 3. Two-block convention

Every page carries a **Page block** and an **entity block**, in that order,
optionally followed by a **link-resolutions annotation**. Across the corpus:

| Block sequence | Pages |
|---|---|
| `(Page, Class)` | 4,173 |
| `(Page, Class, vc:LinkResolutionsAnnotation)` | 3,684 |
| `(Page, Class, LinkResolutionsAnnotation)` | 17 |

19,449 blocks in total; all parse as valid JSON. There are 7,874 `Class` blocks
and zero `Individual` blocks.

They are separate blocks because they describe **different things**.

The **Page block** describes a document: where it lives, whether it may be
published, what it links to, when it was generated. Its `@id` is
`urn:visionflow:page:<sha256>` (3,877 pages) or `urn:visionflow:page:<slug>`
(3,997), one more permitted variance, harmless while nothing dereferences it,
and a trap the moment something does (§7). It has already sprung once: the slug
form is not unique, and four `@id` values are each carried by two files
(`urn:visionflow:page:bitcoin` on `Bitcoin.md` and `Bitcoin Proof-of-Work
Protocol.md`, and the same collision for `ethereum`, `comfy-ui` and
`foundation-models`). That is why `stats.json` reports `pages` 7,870 against
`classes` 7,874: the page count is deduplicated by page identity
(`emit_graph_tiers.py:547`) and the class count is not. The Page block uses the
`vc:` vocabulary throughout: `vc:slug`, `vc:public`, `vc:schemaVersion`,
`vc:outboundWikilinks`, `vc:legacyProperties`.

The **Class block** describes a concept: its label, definition, position in the
taxonomy, its typed relations. Its `@id` is `urn:ngm:class:<slug>` and its
`@context` is `https://narrativegoldmine.com/ns/v2.jsonld`, which maps the bare
terms onto `rdfs:label`, `rdfs:comment`, `rdfs:subClassOf`, `owl:sameAs`,
`vc:sourceDomain`, `vc:maturity` and the twelve relation terms, eleven `vc:`
object properties plus `relatedTo`, which expands to `skos:related`.

Here are both blocks of `ontology/pages/1Hive.md`. The nested ref objects are
collapsed onto single lines for width; nothing else is changed, and the file
carries a third block (the link-resolutions annotation) not shown here:

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b82f7b7212d41b4decc443e2c3dd1e81f069ea37fd51a1122cc706b17dde51a5",
  "@type": "Page",
  "vc:slug": "1-hive",
  "title": "1Hive",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:decentralized-autonomous-organization",
      "vc:label": "Decentralized Autonomous Organization" },
    { "@id": "urn:visionflow:linked:governance-token", "vc:label": "Governance Token" },
    { "@id": "urn:visionflow:linked:quadratic-funding", "vc:label": "Quadratic Funding" },
    { "@id": "urn:visionflow:linked:liquid-democracy", "vc:label": "Liquid Democracy" }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [ { "vc:key": "preferred-term", "vc:value": "1Hive" } ],
  "prov:wasAttributedTo": { "@id": "did:nostr:jjohare" },
  "prov:generatedAtTime": { "@value": "2026-05-29T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:1-hive",
  "@type": "Class",
  "label": "1Hive",
  "definition": "A decentralised community and DAO that issues the Honey community currency and develops governance tooling such as the Gardens framework for conviction voting.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    { "@id": "urn:ngm:class:decentralized-autonomous-organization",
      "label": "Decentralized Autonomous Organization" }
  ],
  "relations": {
    "requires": [
      { "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization" },
      { "@id": "urn:ngm:class:governance-token", "label": "Governance Token" }
    ],
    "enables": [ { "@id": "urn:ngm:class:quadratic-funding", "label": "Quadratic Funding" } ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

Three details in that pair repay attention.

**The wikilinks are in a weaker namespace than the relations.** The Page block's
links point at `urn:visionflow:linked:governance-token`; the Class block's
`requires` points at `urn:ngm:class:governance-token`: deliberately different
IRIs for the same surface string. A `[[wikilink]]` is an unresolved gesture; a
`requires` edge is an assertion. Conflating them would let 64,618 casual
mentions masquerade as ontological commitments.
`pipeline/jsonld_to_turtle.py:53-60` keeps the separation all the way to RDF,
mapping `urn:ngm:class:` to `https://narrativegoldmine.com/class/` and
`urn:visionflow:linked:` to `https://narrativegoldmine.com/linked/`.

**The label key differs by block.** Refs in the Page block use `vc:label`; refs
in the Class block use `label`, which the v2 context maps to `rdfs:label`. Same
distinction, expressed in the vocabulary: a wikilink's label is a surface
string, a class ref's label is an asserted label. The parser tolerates both
(`jsonld_parser.py:93`).

**The provenance differs by block too.** The page is attributed to
`did:nostr:jjohare`; the class assertions to `did:nostr:lcr-swarm` under rule
`GapFillTier5`. A human made the page; a swarm filled in the taxonomy. Separate
blocks make that separable (see §9).

The third block, when present, is an audit trail of how each raw `[[wikilink]]`
was resolved: `{"raw": "[[Governance Token]]", "resolved":
"urn:visionflow:linked:governance-token", "kind": "ResolvedLink"}`. 61,804 such
entries exist across the corpus: 40,564 `StubLink`, 20,992 `ResolvedLink`, and
248 that carry no `kind` at all. Those 248 sit in six files (`Combinatorial
Optimisation.md`, `Comfy Ui.md`, `Computational Linguistics.md`, `Computational
Modelling.md`, `Content Creation.md`, `Content Discovery.md`) and use a
different shape entirely: `{"wikilink": "Machine Learning", "@id":
"urn:ngm:class:machine-learning"}`, pointing at the *class* namespace rather
than the linked one. The container key varies with it: 61,160 entries sit under
`vc:resolutions`, 564 under `resolutions` and 80 under `resolves`. That is §7's
variance problem appearing inside the audit trail meant to guard against it.
Nothing in the pipeline reads these blocks. They exist so that a lossy
transform, free text to IRI, remains reversible by inspection.

## 4. Why JSON-LD, and not the alternatives

**Not YAML frontmatter.** Frontmatter is one flat block at the top of the file
and admits one namespace. The corpus needs two identities per page (document
and concept), each with its own `@context`, plus an optional third for the
annotation. YAML has no `@id`, no `@type`, no typed literal, no way to say that
`subClassOf` is an IRI reference rather than a string. Encoding all that in YAML
means inventing a private convention only your tooling understands, which is the
position JSON-LD exists to avoid. Logseq also parses frontmatter itself, so the
two consumers would contend for the same block.

**Not a Turtle sidecar.** `Page.md` plus `Page.ttl` splits the atom. The files
can be moved, renamed, copied or deleted independently, and Logseq shows no sign
the sidecar exists. Every editing operation becomes a two-file operation and the
failure mode is silent divergence. Putting the RDF *inside* the markdown makes
the pairing structural rather than conventional.

**Not Turtle inline.** Turtle in a fenced block works mechanically, but it needs
a Turtle parser in every consumer, and the browser front end is a consumer. JSON
is `json.loads` in Python and `JSON.parse` in TypeScript.

**JSON-LD gives three things at once:** it is plain JSON to anything that only
wants JSON; it is RDF to anything that runs it through a JSON-LD processor; and
`@context` makes the vocabulary explicit and dereferenceable:
`static/ns/v2.jsonld` is a real published document that the Class block's
`@context` resolves to.

The context is where the semantics live. It declares twelve relation terms in a
scoped sub-context, so `relations.relatedTo` expands to `skos:related` while
`relations.requires` expands to `vc:requires`, and it types `subClassOf`,
`instanceOf` and `sameAs` as `@id` sets so their values are references rather
than strings. Relation usage across the corpus (*classes* is the number of Class
blocks that declare the term at all, *edges* the number of targets those
declarations name):

| Relation | Classes | Edges | Relation | Classes | Edges |
|---|---|---|---|---|---|
| `relatedTo` | 6,141 | 18,859 | `hasPart` | 3,176 | 9,856 |
| `enables` | 5,869 | 16,220 | `contrastsWith` | 2,915 | 4,779 |
| `requires` | 5,031 | 11,831 | `dependsOn` | 2,364 | 4,096 |
| `uses` | 4,537 | 12,608 | `partOf` | 2,468 | 3,266 |
| `bridgesTo` | 3,298 | 6,065 | `implements` | 2,049 | 4,176 |
| `supports` | 3,254 | 7,644 | `standardizedBy` | 1,343 | 2,946 |

The edge column sums to 102,346, which is exactly `edges.declaredRelations` in
`dist/data/graph/stats.json`. Add the 9,481 `subClassOf` backbone edges and you
get the 111,827 declared edges the build reports; 98,776 of those survive the
declared-target filter and ship.

Corpus keys outside those twelve exist and are ignored: a long tail of one-off
spellings (`produces`, `depends-on`, `settledOn`, `bridges To`) that no term in
the context defines. `_extract_relations` reads a fixed v1 and v2 mapping
(`jsonld_parser.py:110-158`) and drops everything else, which is why the table
reconciles exactly with the build. The tail is small — 157 edges across 45 keys,
the largest being 27 uses of `subClassOf` inside `relations` — and it is §7's
variance problem in the relation vocabulary rather than in the whitespace.

## 5. Pipeline reads the blocks, and nothing else

`pipeline/jsonld_parser.py` is the only module the build path uses to open a
`.md` file. One regex finds the fences (`jsonld_parser.py:75-81`):

```python
JSONLD_BLOCK_RE = re.compile(
    r'```json-ld\s*\n(.*?)```',
    re.DOTALL,
)

ENTITY_TYPES = {"OntologyClass", "Class", "Individual"}
```

Each match is `json.loads`'d, then the parser keeps the first `@type: "Page"`
block and the first block whose `@type` is in `ENTITY_TYPES`; a page with no
Page block is dropped entirely. Everything after the last fence becomes `body`:
the human prose, passed through verbatim to the markdown mirror and never
interpreted.

One other module can read pages: `validate.py:167` defines `fix_self_references`,
a repair utility that rewrites `subClassOf` in place. It is reached only via
`python -m pipeline.validate --fix`; `pipeline/build.py` never calls it, and
neither does CI.

The build is seven stages over the parsed dataclasses: parse, validate, Turtle,
WebVOWL JSON, page API, search index, NGG1 binary graph tiers. Over 7,874 files
it takes 18.3 seconds and emits 258,200 triples.

Because the parser is the only reader, the format has exactly one authoritative
interpretation. None of the Logseq outline, the `::` properties, or the
`[[wikilinks]]` in the prose reach the build. Backlinks are derived solely from
`vc:outboundWikilinks` in the Page block, not from the brackets in the body
(`pipeline/backlinks.py`, 24 lines).

## 6. Public flag

`vc:public` on the Page block is the single publication gate: a JSON boolean,
evaluated by a real JSON parser exactly once, at `jsonld_parser.py:205`:

```python
is_public=page_block.get("vc:public", False),
```

Note the default: a page that omits the key is private. Publication is opt-in.
The resulting `PageData.is_public` then gates every output surface
independently:

| Surface | Gate |
|---|---|
| Turtle | `jsonld_to_turtle.py:240` |
| WebVOWL JSON | `jsonld_to_webvowl.py:48` |
| Page API | `jsonld_to_page_api.py:21` |
| Search index | `jsonld_to_search.py:18` |
| NGG1 graph tiers | `emit_graph_tiers.py:538` |

Five independent checks rather than one filtered list is deliberate: a new
output surface that forgets the check is a visible omission in a known pattern,
not an inherited default. All 7,874 pages in this repository carry
`vc:public: true`; 14 further pages in the source graph do not and are withheld
from the published corpus entirely.

## 7. Cost, stated honestly

The hybrid has one real weakness and it bit us.

**Formatting variance is invisible to the author.** JSON permits any whitespace
between tokens. Two emissions exist in the corpus. 18,422 blocks are
pretty-printed with two-space indentation. 1,027 blocks are compact single-line
JSON: 1,004 Page blocks, one per file across 1,004 files, plus 23 Class blocks.
`ontology/pages/AI Accelerator.md` is the compact shape:

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ai-accelerator", "@type":"Page", "title":"AI Accelerator", "vc:slug":"ai-accelerator", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

Semantically identical to `1Hive.md`, textually different in a way no author
would ever notice: both render the same in Logseq and both parse the same in
Python.

**Any consumer that text-matches instead of parsing will silently diverge.** The
publishing CI step that copies public pages into the site's `api/markdown/`
directory grepped for the literal string `"vc:public": true` (with a space).
The compact pages write `"vc:public":true` with none. 653 pages were dropped
from the published markdown mirror at the time and the front end 404'd on them.
The corpus has grown since; the same broken pattern would miss 890 files today:

```bash
grep -L '"vc:public": true' ontology/pages/*.md | wc -l
# 890
```

Nothing failed. The build was green. The pipeline's own public count was correct
throughout, because the pipeline parses. Only the shell filter was wrong, and
the shell filter was the thing writing the files.

The fix is two-part, and the second part is the one that matters. The mirror step
now uses a whitespace-tolerant pattern, `grep -qE '"vc:public":[[:space:]]*true'`,
and then refuses to trust it:

```bash
python -m pipeline.build ontology/pages dist
md_count=$(ls -1 dist/api/markdown/*.md | wc -l)
expected=$(python -c "from pathlib import Path
from pipeline.jsonld_parser import parse_corpus
print(sum(1 for p in parse_corpus(Path('ontology/pages')) if p.is_public and p.body))")
[ "$md_count" -eq "$expected" ] || exit 1
```

Both sides read 7,823 on this tree. The `and p.body` term is load-bearing:
`jsonld_to_page_api.py` writes a `.md` only when the page body is non-empty, and
51 of the 7,874 public pages have none. Drop the term and the gate compares
7,823 against 7,874 and fails on a corpus property rather than a regression,
which is the exact failure a contract gate exists to avoid.

The gate re-derives the count through the real parser and hard-fails on any
drift. The regex could still be wrong tomorrow; the gate makes wrong loud.

Both the broken grep and the fixed shell filter live in the deploy workflow of
the private source repository (`jjohare/logseq`), not in this one; the workflow
here, `.github/workflows/build.yml`, builds and gates the corpus and deploys
nothing, so it has no mirror step to guard. `docs/ci-cd/build-and-gates.md` §3,
"Markdown-mirror count contract", records the gate in its runnable form, along
with the path remapping (`mainKnowledgeGraph/pages` → `ontology/pages`, `www` →
`dist`) that the snippet above already applies.

**This lesson generalises.** If a format permits variance, every consumer must
parse it, or be cross-checked against something that does. This corpus permits
compact and pretty emissions, list and bare-object ref containers (`subClassOf`
is a list on 7,211 Class blocks and a bare object on 663), and both prefixed and
unprefixed key spellings (`label` / `vc:label`,
`vc:LinkResolutionsAnnotation` / `LinkResolutionsAnnotation`). Each is a trap
for a text matcher and a non-event for a parser. The same shape recurs one level
up, in the taxonomy itself, where the permitted variance is multiple parents and
the consumers that narrowed it were a validator and a binary record (§8). The
corollary is a design rule:
**do not permit variance you do not need.** A canonicalising formatter run as a
pre-commit step would have removed this failure class at source. We did not have
one: a genuine omission, not a trade-off.

**A second, smaller cost.** The two layers can disagree and nothing catches it.
1,259 Class blocks carry both `quality` and `qualityScore`, and on 1,013 of them
the values differ. The parser reads `quality` first and falls back to
`vc:qualityScore` (a key that appears nowhere in the corpus), so it never reads
the context-defined `qualityScore` at all. The 742 classes carrying only
`qualityScore` are therefore emitted with a zero score, alongside the 47 that
carry no score field at all:

```bash
grep -c 'vc:qualityScore "0.0"' dist/data/ontology.ttl
# 789
```

A live defect, documented here rather than hidden. It exists precisely because
the format tolerated two spellings of one field and no gate compared them.

## 8. Overlap is a property of the subject, not a defect in the data

A class in this corpus may have more than one parent, and 1,401 of the 7,874 do
(`bridging.multiParent` in `dist/data/graph/stats.json`). That is not damage.
OWL 2 EL permits multiple superclasses, and here the multiplicity is the point.

**Why this kind of graph wants overlap.** The six domains and 34 categories are
a publishing convenience: they give the explorer a backbone to lay out and a
reader a place to start. The subject matter does not partition that way.
`A Star Algorithm` is a Search Algorithm, an Informed Search and a Graph Search
at once; all three are true and none subsumes the others. Forcing one parent
means either duplicating the class under each plausible home or picking one
arbitrarily and destroying the edge a reader would most want to follow. Both are
worse than admitting the class belongs in several places.

Most multi-parenting stays inside one branch: A Star Algorithm's three parents
all resolve to the same category, so it counts in the 1,401 and nowhere else.
The interesting cases are the ones that cross. `AI Documentation Standards`
declares AI Governance and Ethics and Documentation Standards as parents, which
lands it in two categories (AI Governance and Ethics, Standards and
Interoperability) and two domains (Artificial Intelligence, Infrastructure). 454
classes cross a category boundary that way and 153 cross a domain boundary; 542
do one or the other and are enumerated in `dist/data/graph/bridges.json`. 439 of
those 542 span two categories, 15 span three, and 153 span two domains.

That overlap cost the project twice, and both failures have the same shape as
the 653 dropped pages in §7: the format permitted something, a consumer quietly
encoded the assumption that it would not happen, and nothing raised an error.

**A validator written for trees reports a lattice as a fault.** Validation
emitted `MULTI_PARENT` at severity `warning`, so the published headline was
"0 errors, 961 warnings" on the 2026-07-23 build, of which 957 were that one
code. Re-measured on the 2026-07-25 corpus the split was 958 `MULTI_PARENT`
plus 4 `INVALID_DOMAIN`, 962 in total. The corpus was clean; the pipeline was
describing its own design as a defect list, and anybody reading the build output
would have concluded the taxonomy was around a thousand repairs from being
finished. `MULTI_PARENT` is now `info`. The current build reports 0 errors, 0
warnings and 1,401 info, and the 1,401 is the same number as
`bridging.multiParent`, because it is the same fact stated twice.

**A binary record with one slot cannot carry a set.** The NGG1 node record is 24
bytes and carries one `u16 domain` and one `u16 category` (`0xFFFF` = none,
FORMAT-NGG1 §3). The format is frozen and byte-compared in CI, so the tiers keep
the *nearest* category per node and the rest of the membership does not survive
the encode. This is a real limitation, not a rounding: a reader of `full.bin`
alone sees a single home for the 454 classes that sit in more than one category
and the 153 that sit in more than one domain.

Compounding it, the category resolver used to read direct parents only, so a
class two or more hops below a category root fell to `CATEGORY_NONE` even when
its ancestry named a category unambiguously. On the 7,457-class corpus that
mislabelled 4,033 classes — 89.7% of the 4,498 then published as uncategorised.
The resolver now walks `subClassOf`/`instanceOf` ancestry breadth-first so the
nearest category wins, visiting parents in declared order because a set-ordered
walk would be non-deterministic and CI byte-compares the golden fixture
(`emit_graph_tiers.py:482-496`). Uncategorised is now 3.

**What the pipeline does about the slot it cannot widen.** It publishes the
information beside the binary rather than pretending the binary is complete:

| Artefact | What it carries |
|---|---|
| `stats.json` | `bridging`: `multiParent` 1,401, `crossCategory` 454, `crossDomain` 153 |
| `bridges.json` | 542 entries: per-class category ids, domain ids and parent labels |
| `overview.json` | 124 edges — 34 category→domain backbone, plus 90 weighted category↔category bridge edges (heaviest: AI Technique ↔ AI Research Area, weight 73) |

The bridge edges also feed the force layout, so the baked `x`/`y` in
`overview.json` are settled against all 124 edges the explorer draws, not
against the 34 backbone edges alone.

**The lesson, stated once.** A grep for `"vc:public": true` and a `u16` category
field are the same mistake at different altitudes: a consumer narrowing a format
that was deliberately wider, silently. The two remedies differ, and the
difference is the useful part. The grep was fixable at the consumer — parse
properly, then gate the result against the parser. The NGG1 slot is not fixable
without breaking a frozen contract, so the honest move is to emit the discarded
information alongside it and say plainly in the format documentation what the
binary drops. Where you cannot widen the consumer, publish the loss.

## 9. Provenance: attesting generation, not authorship

The corpus is mostly AI-generated synthetic content produced under human
direction, **by design**. It is an ontology testbed at realistic scale, not an
authoritative encyclopaedia. The provenance model says that plainly rather than
obscuring it.

Every Class block may carry a flat `provenance` object of `attributedTo`,
`generatedAt` and `inferenceRule`. 6,411 of 7,874 do; 1,463 carry none.
`attributedTo` takes four DID values across the whole corpus:

| DID | Classes |
|---|---|
| `did:nostr:ontology-mesh` | 3,541 |
| `did:nostr:lcr-swarm` | 1,565 |
| `did:nostr:jjohare` | 1,079 |
| `did:nostr:enrichment-swarm` | 226 |

Three of those four are machine agents, and they are named as such. A `did:nostr`
identifier is a public key: it identifies the agent that ran and is verifiable,
but it asserts nothing about who wrote the sentences.

`inferenceRule` names the specific pass that produced the assertion:
`GapMaterialisation` (1,784), `RelationEnrichment` (1,109),
`R5DomainRootFallback` (983), `R1Explicit` (981), `ManualEnrichment` (853),
`GapFillTier5` (528). The names are self-describing about machine origin: a
class whose parent came from `R5DomainRootFallback` got that parent because no
better one was found and the domain root was used as a fallback. Repair passes
name themselves the same way and carry their date:
`DanglingRelationFix-batch6-2026-07-25` (24) and
`StubForDanglingParent-2026-07-24` (14) mark classes whose parents were added by
a later corpus repair rather than by the original generation run. `generatedAt`
is an `xsd:dateTime`; all 6,411 values in the corpus are in 2026.

This is what the provenance attests: **traceable generation under human
direction**. It does not attest human authorship, and nothing in the corpus
claims it does. `dist/data/graph/stats.json` carries the same framing
machine-readably as `corpusNature: "synthetic-ai-generated-human-directed"`,
emitted by the pipeline rather than written into the front end.

## 10. What we would do differently, and what is still open

**Canonicalise on write.** The 653-page incident is entirely attributable to
uncontrolled formatting variance. A formatter that rewrites every block to one
canonical emission, enforced in CI, would cost an afternoon and close the class.

**One field name per concept.** `quality` versus `qualityScore` is the same
mistake in miniature: a v1/v2 migration that left both spellings live. The
parser should read the context-defined name, and a validator should fail on the
undefined one. Today it does neither, and 789 classes ship a zero score.

**Make the page `@id` unique, or stop deriving it from the slug.** Four
`urn:visionflow:page:<slug>` values are carried by two files each (§3). Nothing
dereferences a page IRI today, so the only visible symptom is `stats.json`
reporting `pages` 7,870 against `classes` 7,874. `validate.py` already raises
`DUPLICATE_IRI` as an error, but its `iri_owners` map is fed only from the Class
block's `@id` (`validate.py:110`); the Page block's `@id` goes unchecked.

**Publish every context you reference.** Page blocks cite three `@context`
values: `https://narrativegoldmine.com/context/v1.jsonld` (5,886 pages),
`https://narrativegoldmine.com/ns/v1` (1,931) and `ns/v2.jsonld` (57). `static/`
holds exactly one document, `ns/v2.jsonld`, so the first two resolve to nothing
and 7,817 of 7,874 Page blocks are JSON-LD-shaped JSON rather than JSON-LD a
strict processor could expand. Only the Class block's context is genuinely
dereferenceable. The pipeline never notices, because it reads raw JSON keys,
which is exactly how such a gap survives. It is also §7's lesson again: three
spellings of the page vocabulary where one was intended.

**Bind the vocabularies.** `maturity` takes nine observed values where four were
intended: `established` (4,550), `emerging` (1,912), `mature` (808), `draft`
(565), plus `experimental` (27), `growing` (9), and one each of
`active-research`, `stable` and `developing`. `domain` is now inside its
vocabulary — sixteen observed values, all of them in `VALID_DOMAINS`
(`pipeline/validate.py:24-31`): the six top-level roots plus ten short forms.
The two strays, `economics` and `ai-governance`, were repaired at source, and
`domainless` is 0. `maturity` was not repaired, because nothing looks at it:
`INVALID_DOMAIN` is a warning and never an error, and `validate.py` has no
maturity check at all. A controlled vocabulary nothing enforces is a suggestion,
and the five stray `maturity` values across 39 classes are what a suggestion is
worth.

**Handle ref-shape variance rather than skipping it.** 97
`vc:outboundWikilinks` items across two files (`Data Parallelism.md`,
`Data Preprocessing.md`) are bare strings rather than `{@id, vc:label}` objects.
`_parse_refs` skips non-dict items outright, so those links produce no backlinks
and no diagnostic.

**Reconcile the two layers, or stop writing both.** The Logseq outline restates
the same relations in `::` syntax and nothing checks that the two agree. Either
a validator should compare them, or the outline should be understood as
commentary and stop mirroring machine facts. Two unreconciled statements of the
same claim is the weakest of the three positions.

**Settled: multi-parent classes are a supported shape.** §8 covers this. What
remains worth recording is the cost of getting there. Multiple parents are what
made a naive domain-disjointness axiom explode: `jsonld_to_turtle.py` records
that the `owl:AllDisjointClasses` axiom over the six domain roots once rendered
5,881 of 5,951 classes unsatisfiable, because EL's `∃R.⊥ ≡ ⊥` propagated through
8,842 restrictions (`jsonld_to_turtle.py:368-382`). The axiom is on by default
again only because the source taxonomy was single-domain-normalised first: 903
clashes across 370 pages remediated, cross-domain links moved to `vc:bridgesTo`,
9 `subClassOf` cycles broken. Disjointness at the domain roots and bridging
below them coexist only because the bridges are relations rather than
subsumptions. Pass `emit_domain_disjointness=False` for a build that tolerates
the overlap in the subsumption hierarchy too.

**Still open: the single-category slot.** The NGG1 record holds one `u16`
category and one `u16` domain, so `full.bin` alone under-describes 542 classes.
Widening the record breaks a frozen, byte-compared contract; the current answer
is to publish `bridges.json` beside it. A sidecar the front end has to remember
to load is weaker than a format that carries the truth, and that trade is not
resolved.

**Still open: dangling relation targets.** 6,219 relation edges name a target
that is not a declared class in this corpus, across 4,383 distinct IRIs; 2,886
of those IRIs are named exactly once. They ship as `skos:Concept` stubs in the
Turtle and are dropped by the graph tiers' declared-target filter, which is why
declared edges (111,827) exceed resolvable ones (98,776). The multiply-referenced
targets were materialised into real pages by an earlier repair pass — that is
where 417 of the 7,874 classes came from — and the singletons were deliberately
left. The `subClassOf` backbone has no dangling targets at all.

```bash
python - <<'PY'
from pathlib import Path
from pipeline.jsonld_parser import parse_corpus
pages = parse_corpus(Path('ontology/pages'))
declared = {p.ontology_class.iri for p in pages if p.ontology_class}
attrs = ('related_to','enables','requires','uses','bridges_to','supports',
         'has_part','contrasts_with','depends_on','part_of','implements',
         'standardized_by')
miss = [r.iri for p in pages if p.ontology_class
        for a in attrs for r in getattr(p.ontology_class.relations, a, [])
        if r.iri not in declared]
print(len(miss), len(set(miss)))   # 6219 4383
PY
```

**Still open: no individuals.** `individuals` is 0 in `stats.json`. The parser,
the Turtle writer and the NGG1 emitter all handle `Individual` blocks
(`instanceOf` is the backbone edge for them), and nothing in the corpus
exercises that path. A taxonomy with no instances is a vocabulary, not a
knowledge base, and the code supporting instances is therefore untested against
real data.

---

## Summary

One file. Two readers. No exporter.

The markdown page is authored and read by humans in Logseq. The fenced JSON-LD
blocks are read by a 2,472-line Python pipeline that emits 258,200 triples, a
WebVOWL graph, a per-page JSON API, a search index and a binary graph format,
in 18.3 seconds, from 7,874 files, with no intermediate database. The Page block
owns the document; the Class block owns the concept; they are separate because
they are different things with different identities and different provenance.
`vc:public` gates publication: parsed once as a JSON boolean, then enforced at
five independent output gates.

The design's sharp edge is that the format is deliberately wider than any one
consumer wants, and a consumer that narrows it without saying so diverges
silently. JSON tolerates whitespace the author cannot see, and a grep dropped
653 pages. The taxonomy tolerates multiple parents, and a tree-shaped validator
called 958 instances of the design a defect on the corpus of the day (1,401
today, reported as info) while single-slot binary fields keep one home each for
the 542 classes that have several. None of the three failed
loudly. Two of them were fixable at the consumer — parse, then gate the result
against the parser. The third was not, so the pipeline publishes what the binary
drops: `bridging` in `stats.json`, 542 entries in `bridges.json`, and 90
weighted bridge edges in `overview.json`.
