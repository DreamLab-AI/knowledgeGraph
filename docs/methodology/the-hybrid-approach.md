# One File, Two Readers

How 7,457 Logseq pages are simultaneously a human-editable wiki and an OWL
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
discussed in §7 and §9.

Verify the layering: `grep -rnE "is-subclass-of|owl-class|belongs-to-domain|elevatedFrom" pipeline/`
returns nothing. The only code in the repository that touches the `::`
properties is `explorer/modern/src/api/pageService.ts:73`, which strips them for
display.

## 3. Two-block convention

Every page carries a **Page block** and an **entity block**, in that order,
optionally followed by a **link-resolutions annotation**. Across the corpus:

| Block sequence | Pages |
|---|---|
| `(Page, Class)` | 3,756 |
| `(Page, Class, vc:LinkResolutionsAnnotation)` | 3,684 |
| `(Page, Class, LinkResolutionsAnnotation)` | 17 |

18,615 blocks in total; all parse as valid JSON. There are 7,457 `Class` blocks
and zero `Individual` blocks.

They are separate blocks because they describe **different things**.

The **Page block** describes a document: where it lives, whether it may be
published, what it links to, when it was generated. Its `@id` is
`urn:visionflow:page:<sha256>` (3,877 pages) or `urn:visionflow:page:<slug>`
(3,580), one more permitted variance, harmless while nothing dereferences it,
and a trap the moment something does (§7). It uses the
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
`requires` edge is an assertion. Conflating them would let 64,620 casual
mentions masquerade as ontological commitments.
`pipeline/jsonld_to_turtle.py:53-62` keeps the separation all the way to RDF,
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
blocks make that separable (see §8).

The third block, when present, is an audit trail of how each raw `[[wikilink]]`
was resolved: `{"raw": "[[Governance Token]]", "resolved":
"urn:visionflow:linked:governance-token", "kind": "ResolvedLink"}`. 61,725 such
entries exist across the corpus: 40,565 `StubLink`, 20,992 `ResolvedLink`, and
168 that carry no `kind` at all. Those 168 sit in four files (`Computational
Linguistics.md`, `Computational Modelling.md`, `Content Creation.md`, `Content
Discovery.md`) and use a different shape entirely: `{"wikilink": "Machine
Learning", "@id": "urn:ngm:class:machine-learning"}`, pointing at the *class*
namespace rather than the linked one. That is §7's variance problem appearing
inside the audit trail meant to guard against it. Nothing in the pipeline reads
these blocks. They exist so that a lossy transform, free text to IRI, remains
reversible by inspection.

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
| `relatedTo` | 6,081 | 18,777 | `hasPart` | 3,174 | 9,852 |
| `enables` | 5,783 | 16,178 | `contrastsWith` | 2,893 | 4,778 |
| `requires` | 4,920 | 11,767 | `dependsOn` | 2,343 | 4,096 |
| `uses` | 4,455 | 12,585 | `partOf` | 2,303 | 3,135 |
| `bridgesTo` | 3,277 | 6,065 | `implements` | 2,029 | 4,177 |
| `supports` | 3,233 | 7,645 | `standardizedBy` | 1,343 | 2,946 |

The edge column sums to 102,001, which is exactly `edges.declaredRelations` in
`dist/data/graph/stats.json`. Add the 8,616 `subClassOf` backbone edges and you
get the 110,617 declared edges the build reports; 96,377 of those survive the
declared-target filter and ship.

## 5. Pipeline reads the blocks, and nothing else

`pipeline/jsonld_parser.py` is the only module the build path uses to open a
`.md` file. One regex finds the fences (`jsonld_parser.py:75-80`):

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

One other module can read pages: `validate.py:149` defines `fix_self_references`,
a repair utility that rewrites `subClassOf` in place. It is reached only via
`python -m pipeline.validate --fix`; `pipeline/build.py` never calls it, and
neither does CI.

The build is seven stages over the parsed dataclasses: parse, validate, Turtle,
WebVOWL JSON, page API, search index, NGG1 binary graph tiers. Over 7,457 pages
it takes 18.0 seconds and emits 252,974 triples.

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
| NGG1 graph tiers | `emit_graph_tiers.py:481` |

Five independent checks rather than one filtered list is deliberate: a new
output surface that forgets the check is a visible omission in a known pattern,
not an inherited default. All 7,457 pages in this repository carry
`vc:public: true`; 14 further pages in the source graph do not and are withheld
from the published corpus entirely.

## 7. Cost, stated honestly

The hybrid has one real weakness and it bit us.

**Formatting variance is invisible to the author.** JSON permits any whitespace
between tokens. Two emissions exist in the corpus. 17,899 blocks are
pretty-printed with two-space indentation. 716 blocks are compact single-line
JSON, and every one of the 716 is a Page block, one per file across 716 files.
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
653 of the 716 compact pages write `"vc:public":true` with none. Those 653 were
dropped from the published markdown mirror and the front end 404'd on them.

```bash
grep -L '"vc:public": true' ontology/pages/*.md | wc -l
# 653
```

Nothing failed. The build was green. The pipeline's own public count was correct
throughout, because the pipeline parses. Only the shell filter was wrong, and
the shell filter was the thing writing the files.

The fix is two-part, and the second part is the one that matters. The mirror step
now uses a whitespace-tolerant pattern, `grep -qE '"vc:public":[[:space:]]*true'`,
and then refuses to trust it:

```bash
md_count=$(ls -1 <out>/api/markdown/*.md | wc -l)
expected=$(python -c "from pathlib import Path; from pipeline.jsonld_parser import parse_corpus; \
  print(sum(1 for p in parse_corpus(Path('ontology/pages')) if p.is_public))")
[ "$md_count" -eq "$expected" ] || exit 1
```

The gate re-derives the public count through the real parser and hard-fails on
any drift. The regex could still be wrong tomorrow; the gate makes wrong loud.

Both the broken grep and the gate live in the deploy workflow of the private
source repository (`jjohare/logseq`), not in this one; the workflow here,
`.github/workflows/build.yml`, builds and gates the corpus and deploys nothing,
so it has no mirror step to guard. `docs/ci-cd/build-and-gates.md` §3 records
that gate as gate 8, along with the path remapping (`mainKnowledgeGraph/pages` →
`ontology/pages`, `www` → `dist`) that the snippet above already applies.

**This lesson generalises.** If a format permits variance, every consumer must
parse it, or be cross-checked against something that does. This corpus permits
compact and pretty emissions, list and bare-object ref containers (`subClassOf`
is a list on 6,749 Class blocks and a bare object on 708), and both prefixed and
unprefixed key spellings (`label` / `vc:label`,
`vc:LinkResolutionsAnnotation` / `LinkResolutionsAnnotation`). Each is a trap
for a text matcher and a non-event for a parser. The corollary is a design rule:
**do not permit variance you do not need.** A canonicalising formatter run as a
pre-commit step would have removed this failure class at source. We did not have
one: a genuine omission, not a trade-off.

**A second, smaller cost.** The two layers can disagree and nothing catches it.
1,259 Class blocks carry both `quality` and `qualityScore`, and on 1,013 of them
the values differ. The parser reads `quality` first and falls back to
`vc:qualityScore` (a key that appears nowhere in the corpus), so it never reads
the context-defined `qualityScore` at all. The 718 classes carrying only
`qualityScore` are therefore emitted with a zero score:

```bash
grep -c 'vc:qualityScore "0.0"' dist/data/ontology.ttl
# 718
```

A live defect, documented here rather than hidden. It exists precisely because
the format tolerated two spellings of one field and no gate compared them.

## 8. Provenance: attesting generation, not authorship

The corpus is mostly AI-generated synthetic content produced under human
direction, **by design**. It is an ontology testbed at realistic scale, not an
authoritative encyclopaedia. The provenance model says that plainly rather than
obscuring it.

Every Class block may carry a flat `provenance` object of `attributedTo`,
`generatedAt` and `inferenceRule`. 6,070 of 7,457 do; 1,387 carry none.
`attributedTo` takes four DID values across the whole corpus:

| DID | Classes |
|---|---|
| `did:nostr:ontology-mesh` | 3,224 |
| `did:nostr:lcr-swarm` | 1,565 |
| `did:nostr:jjohare` | 1,055 |
| `did:nostr:enrichment-swarm` | 226 |

Three of those four are machine agents, and they are named as such. A `did:nostr`
identifier is a public key: it identifies the agent that ran and is verifiable,
but it asserts nothing about who wrote the sentences.

`inferenceRule` names the specific pass that produced the assertion:
`GapMaterialisation` (1,467), `RelationEnrichment` (1,109),
`R5DomainRootFallback` (983), `R1Explicit` (981), `ManualEnrichment` (853),
`GapFillTier5` (528). The names are self-describing about machine origin: a
class whose parent came from `R5DomainRootFallback` got that parent because no
better one was found and the domain root was used as a fallback. `generatedAt`
is an `xsd:dateTime`; every value in the corpus is in 2026.

This is what the provenance attests: **traceable generation under human
direction**. It does not attest human authorship, and nothing in the corpus
claims it does. `dist/data/graph/stats.json` carries the same framing
machine-readably as `corpusNature: "synthetic-ai-generated-human-directed"`,
emitted by the pipeline rather than written into the front end.

## 9. What we would do differently, and what is still open

**Canonicalise on write.** The 653-page incident is entirely attributable to
uncontrolled formatting variance. A formatter that rewrites every block to one
canonical emission, enforced in CI, would cost an afternoon and close the class.

**One field name per concept.** `quality` versus `qualityScore` is the same
mistake in miniature: a v1/v2 migration that left both spellings live. The
parser should read the context-defined name, and a validator should fail on the
undefined one. Today it does neither, and 718 classes ship a zero score.

**Publish every context you reference.** Page blocks cite three `@context`
values: `https://narrativegoldmine.com/context/v1.jsonld` (5,862 pages),
`https://narrativegoldmine.com/ns/v1` (1,538) and `ns/v2.jsonld` (57). `static/`
holds exactly one document, `ns/v2.jsonld`, so the first two resolve to nothing
and 7,400 of 7,457 Page blocks are JSON-LD-shaped JSON rather than JSON-LD a
strict processor could expand. Only the Class block's context is genuinely
dereferenceable. The pipeline never notices, because it reads raw JSON keys,
which is exactly how such a gap survives. It is also §7's lesson again: three
spellings of the page vocabulary where one was intended.

**Bind the vocabularies.** `maturity` takes nine observed values where four were
intended: `established` (4,363), `emerging` (1,816), `mature` (781), `draft`
(458), plus `experimental` (27), `growing` (9), and one each of
`active-research`, `stable` and `developing`. `domain` takes eighteen values
against the sixteen in `VALID_DOMAINS` (`pipeline/validate.py:24-31`): the six
top-level roots plus ten short forms; `economics` and `ai-governance` are the two
that fall outside it. Validation reports these as warnings, never errors. The
build ships 0 errors and 961 warnings. A controlled vocabulary that is only
advisory is a suggestion.

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

**Open question: multi-parent classes.** 957 of the 961 validation warnings are
`MULTI_PARENT`. `A Star Algorithm.md` declares three parents: Search Algorithm,
Informed Search, Graph Search. That is defensible modelling, and it is also what
made a naive domain-disjointness axiom explode: `jsonld_to_turtle.py` records
that the `owl:AllDisjointClasses` axiom over the six domain roots once rendered
5,881 of 5,951 classes unsatisfiable, because EL's `∃R.⊥ ≡ ⊥` propagated through
8,842 restrictions (`jsonld_to_turtle.py:368-382`). The axiom is on by default
again only because the source taxonomy was single-domain-normalised first: 903
clashes across 370 pages remediated, cross-domain links moved to `vc:bridgesTo`,
9 `subClassOf` cycles broken. Whether multi-parent should be an error or a
supported shape is genuinely undecided here.

---

## Summary

One file. Two readers. No exporter.

The markdown page is authored and read by humans in Logseq. The fenced JSON-LD
blocks are read by a 2,309-line Python pipeline that emits 252,974 triples, a
WebVOWL graph, a per-page JSON API, a search index and a binary graph format,
in 18 seconds, from 7,457 files, with no intermediate database. The Page block
owns the document; the Class block owns the concept; they are separate because
they are different things with different identities and different provenance.
`vc:public` gates publication: parsed once as a JSON boolean, then enforced at
five independent output gates.

The design's one sharp edge is that JSON tolerates formatting variance the
author cannot see, and any consumer that greps instead of parsing will diverge
silently. It did, for 653 pages. The fix that mattered was a CI gate that
re-derives the answer through the real parser and fails the build when the two
disagree, not a better regex.
