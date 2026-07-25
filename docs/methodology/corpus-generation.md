# Corpus Generation

How 7,457 OWL classes were produced: the multi-agent refactor that
converted a Logseq wiki into an ontology, the inference rules that gave every
class a parent, the passes that tripled the class count, and the state the
corpus is genuinely in today.

The corpus is **mostly AI-generated synthetic content produced under human
direction, by design**. It is an ontology testbed (a medium-scale graph built
to exercise a pipeline, a reasoner and a renderer), not an authoritative
encyclopaedia. The provenance it carries (`did:nostr:*`, `generatedAtTime`,
URN identity) attests *traceable generation under human direction*, not human
authorship. Nothing in this document should be read as a claim of editorial
review. Where the corpus is thin, this document says so and gives the number.

Every figure below is checkable against a file in this repository or against
the process manifests in the source repository. Commands are given inline.

---

## 1. Where the corpus started

The pre-refactor corpus was an ordinary Logseq vault: 2,861 markdown pages, of
which 2,818 carried `public:: true`. Semantics lived in Logseq property syntax:
`is-subclass-of::`, `is-part-of::`, `domain::`, `owl-class::`,
`quality-score::`, scattered across page frontmatter. The literal
`### OntologyBlock` convention the target schema assumed appeared on exactly
one page. Body content ranged from 40-line stubs to an 871-line page whose
prose had been contaminated by an unrelated copy-paste.

Eight domain strings were in use, with an uneven distribution:
spatial-computing 962, artificial-intelligence 625, infrastructure 523,
blockchain 396, robotics 274, distributed-collaboration 70, security 4, data 2.

The refactor was specified before it ran, as three companion documents in the
source repository: `PRD-LCR-01` (what "done" means, ten acceptance criteria),
`ADR-LCR-01` (the swarm strategy, thirteen decisions D1–D13), and `DDD-LCR-01`
(the domain model: SourcePage, TargetPage, SlugIndex, Batch, and thirteen
invariants I1–I13). The plan/outcome gap is itself documented: ADR-LCR-01
carries an "Amendment-2" table scoring each of its own thirteen decisions as
Yes / Partial / Not used after the fact. That table is the honest record and
most of this section derives from it.

## 2. Plan versus outcome

The ADR specified a hierarchical mesh: one queen agent owning a manifest, five
worker agents each transforming 50 pages per batch, coordinating through a
shared memory namespace, one git branch per batch, a validator gate on every
merge. Estimated 24 hours of wall-clock for the bulk phase.

What ran instead, on 2026-05-18, was a single mechanical transform script over
all 2,833 pages in roughly fifteen minutes. The swarm topology was not used for
the structural pass. It *was* used, repeatedly and at larger scale than
planned, for everything that came after: parent inference, content enrichment,
categorisation, gap materialisation, relation densification and remediation.

The scored outcome against the ADR's own decisions:

| Decision | Planned | Realised |
|---|---|---|
| D1 hierarchical mesh swarm | queen + 5 workers | single agent for the structural pass; parallel workers for every later pass |
| D3 transformation contract | Page + Class + axiom blocks | Page + Class + link-resolutions blocks emitted; axiom blocks only on ~98 pre-enriched pages |
| D5 parent inference R1–R6 | applied at transform time | only `explicit` applied at transform time; R2–R6 deferred to a later dedicated pass |
| D6 three provenance layers | human vs agent DIDs | realised for the structural pass: all 2,833 transformed pages carry `prov:wasAttributedTo`, `prov:generatedAtTime` and `prov:wasDerivedFrom`. The v2 schema later renamed these to `provenance.attributedTo` / `provenance.generatedAt`, and pages authored after the transform frequently carry no provenance block at all (§3) |
| D8 idempotency token | `schema_version:: 1` | realised then later removed when the v2 schema landed |
| D11 validator on every batch | gate for phase 2 | **not run**: all 2,833 manifest entries record `validator_outcome: "not-run"` |
| D13 frozen slug index | built before bulk phase | never built; wikilinks resolved against the live filesystem instead |

The two decisions that were dropped rather than adapted, the pinned validator
and the frozen slug index, are the ones whose absence is still visible in the
corpus. Without a slug index, wikilink resolution was order-dependent; without
a validator gate, structural defects accumulated and had to be found later by
separate remediation passes (§8).

The source repo's `mainKnowledgeGraph/_lcr/transform-manifest.json` holds 2,833 entries: every one
records `validator_outcome: "not-run"` and `needs_human: false`, and
`parent_class_source` splits 1,497 `domain-root-fallback` / 1,335 `explicit` /
1 `none`.

## 3. Parent inference

Every class needs a parent, or it floats free of the taxonomy and the reasoner
has nothing to work with. Roughly 30% of source pages carried no
`is-subclass-of::`. ADR-LCR-01 §D5 defined six ordered rules, first match wins:

| Rule | Condition | Parent |
|---|---|---|
| R1 | `is-subclass-of::` explicit in source | resolved target |
| R2 | label or `owl-class::` slug matches an existing class | that class |
| R3 | body section names a parent, or wikilinks converge on one | that class |
| R4 | `is-part-of::` present and the concept is a component | the mereological parent |
| R5 | only `domain::` known | the synthetic domain root |
| R6 | no signal at all | universal root, or defer |

R5 and R6 were designed to be *conservative-correct rather than good*. The ADR
states the failure mode plainly in its own risk register: a page titled "Random
Forest" with `domain:: artificial-intelligence` falls to R5 and is parented
directly under the AI root, which is defensible and not what a careful
ontologist would write. R5/R6 were supposed to set a `needs_human` flag. In
practice the structural pass wrote `needs_human: false` on all 2,833 entries.
The flag was never assessed, so the review queue it was meant to populate never
existed.

A dedicated inference pass then ran over the domain-root fallbacks, one page
per agent invocation, restricted to a single surgical edit of the `subClassOf`
array with an explicit abort if the edit would make a page its own parent. Its
manifest holds 1,778 entries. The outcome was **480 updated, 1,268 deferred**:
on roughly seven pages in ten the agent could not find a better parent
than the domain root and declined to guess. Rule histogram: R6 752, explicit
DEFER 413, R5 290, R3 94, R2 52, R4 47, plus 83 entries recording repairs
(slug-mismatch reverts, self-reference repairs). The gate report that closed
the pass recorded 1,155 classes with a specific parent, 1,214 still sitting at
a domain root, 0 self-references, 0 slug mismatches, and 84 pages flagged
`domain_suspect`.

**What the corpus records today is messier than that design.** The shipped
`provenance.inferenceRule` field is a free-text string, not an enumeration, and
no validator constrains it. 6,070 classes carry a provenance block; 6,069 of
those name a rule, across 37 distinct strings:

```
GapMaterialisation 1467   RelationEnrichment 1109   R5DomainRootFallback 983
R1Explicit          981   ManualEnrichment    853   GapFillTier5        528
```

Those six account for 5,921. The remaining 31 strings, including
`R2WikilinkParentInference`, `R5BodyWikilinksConvergence`,
`StubForDanglingParent-2026-07-24` and `ontology-augment-v2`, cover 148
classes between them, and one class has a provenance block with no rule in it.
Each wave of agents coined its own names. A further **1,387 classes carry no
provenance block at all**, so for those the rule is simply not recorded.

```bash
# 37 distinct rule strings across 6,069 classes (whitespace normalised —
# the corpus has both a pretty-printed and a compact JSON emission)
grep -ho '"inferenceRule": *"[^"]*"' ontology/pages/*.md \
  | tr -d ' ' | sort | uniq -c | sort -rn
grep -l '"provenance"' ontology/pages/*.md | wc -l      # 6070
```

The attribution DIDs do partition cleanly, and they are the honest signal:
`did:nostr:ontology-mesh` 3,224, `did:nostr:lcr-swarm` 1,565,
`did:nostr:jjohare` 1,055, `did:nostr:enrichment-swarm` 226. Three of those four
are agent identities. Roughly one class in seven is attributed to the human, and
even that attribution means "asserted during a human-directed pass", not
"written by hand".

## 4. Six domains and thirty-four categories

The eight source domains were reduced to six canonical roots
(artificial-intelligence, blockchain, spatial-computing, robotics,
distributed-collaboration, infrastructure), and a 34-category intermediate
layer was authored beneath them, six categories per domain except
distributed-collaboration, which has four. The intended shape is
`owl:Thing → domain root → category → leaf class`. The category list is frozen
in `pipeline/emit_graph_tiers.py` (`_TAXONOMY`, lines 151–198), ordered so that
category ids are contiguous per domain.

The categorisation pass assigned 2,733 classes to categories by parallel agent
review, correcting 42% of a heuristic baseline. That was 2,733 out of the ~2,900
classes that existed at the time.

**Then the corpus more than doubled, and the categorisation was never re-run.**
That single fact explains the corpus's largest quality gap. The pipeline
assigns a category by looking one hop up: it scans a class's `subClassOf`
parents (then `instanceOf`) and takes the first whose slug is one of the 34
category slugs; if none is, the class is uncategorised. One hop only, no
transitive walk: `pipeline/emit_graph_tiers.py` lines 504–517. Cross-tabulating category
assignment against the month stamped in each class's provenance:

| Provenance month | Categorised | Uncategorised |
|---|---:|---:|
| 2026-05 (refactor + taxonomy era) | 2,001 | 592 |
| 2026-06 (gap-fill era) | 532 | 2,931 |
| 2026-07 | 1 | 13 |
| no provenance | 419 | 968 |

Classes stamped with `GapMaterialisation` are 1,459 uncategorised against 8
categorised. The column sums to 4,504; `stats.json` excludes the 6 domain roots
themselves, which by construction have no category, and reports **4,498 of
7,457 classes (60%) in no category**. They still have a domain and a parent, so
they render and reason; they just hang off the domain root or off another leaf
rather than under the intended backbone.

Domain assignment fared better. `pipeline/emit_graph_tiers.py` collapses 18 raw
domain strings onto the 6 canonical roots through a 10-entry alias table
(`DOMAIN_ALIASES`, lines 130–141): `ai` and `machine-learning` →
artificial-intelligence, `metaverse` → spatial-computing, `finance` →
blockchain, and six others (`distributed-systems`, `supply-chain`, `data`,
`governance`, `security`, `standards`) → infrastructure. Exactly
two strings resolve to nothing, `economics` on 3 pages and `ai-governance` on
1, leaving **4 domainless classes**, which are also the 4 `INVALID_DOMAIN`
validation warnings. Earlier passes did the bulk of that work by hand: 391
invalid source domains remapped, then 124 ambiguous ones classified.

## 5. Gap materialisation: how 2,833 became 7,457

The largest single contributor to the corpus is not the original wiki. It is a
sustained campaign to close dangling references: wikilinks and relation targets
pointing at concepts that had no page. Rather than dropping those edges, each
frequently-referenced target was authored as a real class page, ranked by
in-degree so the most-referenced gaps were filled first.

Measured by counting `.md` files under `mainKnowledgeGraph/pages` in the source
repository at the named commits:

| Date | Commit | Files | Milestone |
|---|---|---:|---|
| 2026-05-19 | `14e3570af` | 2,861 | v2 schema migration lands |
| 2026-05-19 | `0baa85172` | 2,898 | 34-category taxonomic backbone added |
| 2026-05-19 | `f6f2e8034` | 3,146 | 266 stub pages for dangling edges, 571 IRI merges |
| 2026-05-31 | `962ba60ea` | 5,048 | ontology surgery: uniform class model, alias resolution, in-degree ≥3 gap pages |
| 2026-05-31 | `127749994` | 6,013 | 965 in-degree ≥2 class pages authored, 363 dangling parents remapped |
| 2026-06-15 | `ffc13d045` | 6,393 | 424 high-reference true-gap concepts |
| 2026-06-15 | `4ae936046` | 7,384 | 909 in-degree 3–4 genuine-gap concepts |
| 2026-06-21 | `e4dce4168` | 7,492 | structural cleanup of 398 files + Phase 6 enrichment wave 1 |
| 2026-07-23 | `0f1a43bfe` | 7,519 | 21 dangling parents resolved (14 of them as new stubs), 7 duplicate labels |

```bash
# in the source repository the corpus lives under mainKnowledgeGraph/pages
git ls-tree -r --name-only <commit> -- mainKnowledgeGraph/pages | grep -c '\.md$'
```

That is a recursive file count and runs ahead of the class count. At `0f1a43bfe`
the 7,519 files include 28 under `.deleted/` and 19 under `_misc/`, neither of
which the pipeline reads; that leaves 7,472 top-level pages, of which 7,471
carry an ontology block, and 14 of those set `vc:public` false. 7,471 − 14 =
the 7,457 classes the build ships.

The transform handed over 2,833 class pages; the shipped corpus has 7,457, a net
+4,624. The great majority of that came from 22 gap-fill and materialisation
commits between 2026-05-29 and 2026-06-15. Before each wave
the candidate list was triaged: one wave (`ce7268f81`) remapped 70 spelling and
pluralisation variants onto existing classes and dropped 22 as noise rather than
authoring pages for them. That triage is the only filter; there was no per-page
human sign-off on the thousands of pages this campaign produced. This is the most important
honesty point in this document: the majority of the corpus exists because
*something referenced it* at a reference count above a threshold, its content is
agent-written prose under an agent-chosen parent, and, per §4, it is
overwhelmingly uncategorised.

## 6. Enrichment loop

Two distinct enrichment tracks ran.

**Prose enrichment (Phase 6).** A worker brief pinned a quality bar:
600–850 lines, 8,500–12,000 words, 35–46 OWL axioms in five named axiom
families, 60–82 typed wikilink relationships across 11 relation types, 25–28
references, five mandatory `###` sections, and a shell validator that had to
pass before a manifest entry could be appended. The brief forbade fabrication
and required web research to be cached alongside the page. The manifest holds
313 entries; not every entry records every measurement, so the medians are over
290–297 entries depending on the field: 600 lines (n=297), 9,618 words (n=295),
51 axioms (n=292), 98 relationships (n=292), 28 references (n=290); axioms and
relationships both above the range the brief asked for. Worker models recorded: Sonnet 183,
Opus 113, Haiku 17. Outcomes: 295 pass, 2 deferred, 16 unrecorded. Deferral was
mandatory rather than optional: if the target turned out to be a Logseq tag or
a contaminated page, the worker was instructed to quarantine the source and
report, not to enrich it.

313 pages is 4% of the corpus. A wave report from the AI domain
(`mainKnowledgeGraph/reports/enrichment-ai-wave1-report.md` in the source repo)
states the arithmetic without flinching: "8 of 1,023 AI-domain stubs enriched
(0.8%). Approximately 127 waves remain at current batch size."

**Relation densification.** A separate campaign added typed relations to hub
classes in batches of 40, spine-preserving (`subClassOf` untouched, only object
properties added): 31 `relation-densify` commits plus 15 earlier `densify`
commits, plus 8 `enrich: wave`/`enrich: draft` commits that nested flat v1
relations into the v2 `relations{}` object. This is why the graph is dense:
102,001 declared relation edges against 8,616 backbone edges
(`dist/data/graph/stats.json`, `edges.declaredRelations` and
`edges.declaredBackbone`), and why
`RelationEnrichment` is the second most common inference rule at 1,109 classes.

The relation vocabulary is the 12 terms defined in the nested `relations`
context of `static/ns/v2.jsonld`, led by relatedTo (6,081 classes), enables
(5,783) and requires (4,920). A further 45 non-canonical keys appear inside
`relations{}` objects across the corpus (`produces`, `depends-on`,
`isSubclassOf`, and a literal `bridges To` with a space); none are in the
context and none are in the parser's v2 mapping
(`pipeline/jsonld_parser.py` lines 137–149), so all are silently dropped.

## 7. Quality scoring: what it is, and what it is not

Two numeric fields survive from the Logseq era. `quality` appears on 6,739
classes, `qualityScore` on 1,977, both on 1,259, **and on 1,013 of those the
two values disagree**. 718 classes carry only `qualityScore`.

Neither is a measurement. They originate as `quality-score::` and
`authority-score::` frontmatter, and the enrichment brief instructed workers to
*set* them on completion: `quality-score:: 0.35` → `0.50+`, `authority-score::
0.00` → `0.86–0.88`. The number is a marker that a pass ran, written by the
agent that ran it. The clustering shows this directly: 1,811 classes at exactly
0.72, 1,462 at 0.62, 1,439 `qualityScore` values at exactly 0.70. These are
batch signatures, not a distribution.

There is a mechanical consequence. `static/ns/v2.jsonld` defines `qualityScore`
but not `quality`; `pipeline/jsonld_parser.py` reads `quality` and falls back to
`vc:qualityScore`, a key that appears nowhere in the corpus. It therefore never
reads the context-defined `qualityScore`, and the 718 classes that carry only
that field are emitted as zero:

```bash
grep -c 'vc:qualityScore "0.0"' dist/data/ontology.ttl   # 718
```

Treat both fields as provenance breadcrumbs. Do not rank on them.

## 8. Validation and remediation

The validator gate specified in the ADR never ran during the refactor, so
defect discovery happened afterwards, in cycles: build, reason, find the
breakage, remediate at source, rebuild.

**Domain disjointness.** Declaring the 6 domain roots mutually disjoint made
5,881 of 5,951 classes unsatisfiable: in OWL 2 EL, `∃R.⊥ ≡ ⊥` propagated
through 8,842 existential restrictions. The axiom was gated off, the source was
repaired (903 direct clashes traced to 370 root-cause source pages and cleared,
9 `subClassOf` cycles broken, cross-domain parent links demoted to `bridgesTo`,
taking bridges from 93 to 474), then the axiom was restored with 0 unsatisfiable
classes. The fix was in the corpus, not in the converter. The history is
recorded in the converter itself, above the axiom it explains:
`pipeline/jsonld_to_turtle.py` lines 368–382.

**Structural corruption.** A triage script scanned every page for corruption
markers and emitted one JSON record per affected file. 6,014 records, carrying
6,414 markers because 228 files scored more than one: thin-prose
5,209, owl-syntax-in-prose 420, stray-code-blocks 284, original-content-dump
266, raw-iris-in-prose 117, misplaced-metadata 80, sparql-turtle-blocks 37,
duplicate-definition 1. The taxonomy explicitly separates corruption from thin
prose: a stub is a content gap, not a defect. A cleanup pass fixed 398 of 455
pages across six domains; robotics and spatial-computing needed repair on every
page reviewed. The playbook governing that work opens by naming its own cause:
bulk mechanical regex transforms "caused the corruption in the first place",
so remediation was done page by page with agent judgement.

**External validation.** On 2026-07-23 the full public ontology was loaded into
an independent triple store and checked with exact SPARQL by a third party.
Their class count matched `stats.json` to within 2; zero unlabelled classes,
zero cycles, two uncommented classes. Their OWL 2 RL materialiser exhausted
512MB at 2.1M partial triples against the corpus's 38.6k `someValuesFrom`
shapes, external evidence for the EL/Whelk pathway the pipeline had chosen.
They found two real data defects: 21 `subClassOf` parents referenced but never
declared, and 6 duplicate label pairs. Both were fixed at source: 7 of the
danglers aliased onto canonical classes, 14 authored as minimal stub classes;
6 labels disambiguated, 1 pair merged. Verified back to 0 dangling and 0
duplicates. Their receipt is in the source repository at
`docs/validation/external-validation-rdf-studio-2026-07-23.md`.

## 9. Where the corpus stands today

Run the build and read the numbers:

```bash
python -m pipeline.build ontology/pages dist    # 7 stages, 18.0 seconds
python -m pipeline.validate ontology/pages
```

| Measure | Value |
|---|---:|
| Public class pages | 7,457 |
| Pages withheld (`vc:public` not true) | 14 |
| Individuals | 0 |
| Turtle triples | 252,974 |
| Declared edges / resolvable | 110,617 / 96,377 |
| Domains / categories | 6 / 34 |
| **Uncategorised classes** | **4,498** |
| **Domainless classes** | **4** |
| Validation errors | 0 |
| **Validation warnings** | **961** |

The 961 warnings are 957 `MULTI_PARENT` and 4 `INVALID_DOMAIN`, and nothing
else. `MULTI_PARENT` fires whenever a class declares more than one
`subClassOf`: for example `A Star Algorithm.md` declares Search Algorithm,
Informed Search and Graph Search. Multiple inheritance is legal OWL and often
correct; the warning exists because in this corpus it is frequently an artefact
of successive agent waves each adding a parent without checking what was
already there. They are warnings, not errors, and they are not being
suppressed; they stand, uncleared, at 12.8% of classes.

Summarising the honest state:

- **60% of classes are uncategorised.** The taxonomy backbone exists and is
  correct; most of the corpus was authored after it and never attached to it.
- **A net +4,624 classes (62% of the shipped corpus) were added after the
  structural transform**, overwhelmingly by the gap-fill campaign, authored
  because something referenced them, with no per-page human sign-off.
- **4% of pages received the full prose enrichment treatment.** The rest range
  from a definition and a handful of relations to near-stub.
- **The `inferenceRule` field is not a controlled vocabulary.** 37 distinct
  strings, 1,387 classes with no provenance at all.
- **Quality scores are batch markers, not measurements**, and 1,013 classes
  disagree with themselves.
- **961 validation warnings stand**, along with 4 classes outside the domain
  vocabulary.

None of this makes the corpus unfit for its purpose. It is a coherent,
reasoner-clean, densely-connected graph of the right size to exercise a
JSON-LD → OWL → binary-tier pipeline end to end, and its defects are measured
and stated rather than hidden. It is not a curated reference work, and no part
of this repository claims otherwise.

## 10. Auditing any single class

Provenance is per-class and per-page, so any assertion can be traced without
reading this document:

````bash
# what produced this class, and when
python3 - 'ontology/pages/3D Gaussian Splatting.md' <<'EOF'
import json,re,sys
b=re.findall(r'```json-ld\s*\n(.*?)```', open(sys.argv[1]).read(), re.S)
c=[json.loads(x) for x in b]
k=[x for x in c if x.get('@type') in ('Class','OntologyClass')][0]
print(k['@id'], k.get('domain'), k.get('maturity'), k.get('provenance'))
EOF
````

The third JSON-LD block on 3,701 pages is a `vc:LinkResolutionsAnnotation`
recording every `[[wikilink]]` and how it resolved: 61,805 entries, of which
61,161 carry the full `{raw, resolved, kind}` shape, kind being `StubLink`
(40,415) or `ResolvedLink` (20,746); the remaining 644 are earlier partial
shapes from before the field set settled. No pipeline stage reads any of it:
`grep -rn 'resolutions' pipeline/*.py` returns nothing. It exists so a lossy transform can be
audited after the fact. That is the principle this whole document describes:
the corpus records what was done to it, including where that was not enough.
