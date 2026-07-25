# Corpus Generation

How 7,874 OWL classes were produced: the multi-agent refactor that
converted a Logseq wiki into an ontology, the inference rules that gave every
class a parent, the passes that nearly tripled the class count, the repair pass
that closed most of what was left open, and the state the corpus is genuinely
in today.

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
no validator constrains it. 6,411 classes carry a provenance block; 6,410 of
those name a rule, across 38 distinct strings:

```
GapMaterialisation 1784   RelationEnrichment 1109   R5DomainRootFallback 983
R1Explicit          981   ManualEnrichment    853   GapFillTier5        528
```

Those six account for 6,238. The remaining 32 strings, including
`R2WikilinkParentInference`, `R5BodyWikilinksConvergence`,
`StubForDanglingParent-2026-07-24`, `DanglingRelationFix-batch6-2026-07-25` and
`ontology-augment-v2`, cover 172
classes between them, and one class has a provenance block with no rule in it.
Each wave of agents coined its own names, the repair pass of §9 included. A
further **1,463 classes carry no
provenance block at all**, so for those the rule is simply not recorded.

```bash
# 38 distinct rule strings across 6,410 classes (whitespace normalised —
# the corpus has both a pretty-printed and a compact JSON emission)
grep -ho '"inferenceRule": *"[^"]*"' ontology/pages/*.md \
  | tr -d ' ' | sort | uniq -c | sort -rn
grep -l '"provenance"' ontology/pages/*.md | wc -l      # 6411
```

The attribution DIDs do partition cleanly, and they are the honest signal:
`did:nostr:ontology-mesh` 3,541, `did:nostr:lcr-swarm` 1,565,
`did:nostr:jjohare` 1,079, `did:nostr:enrichment-swarm` 226. Three of those four
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
classes that existed at the time. The corpus then more than doubled and that
pass was never re-run, so for two months this document reported that 4,498 of
7,457 classes (60%) sat in no category, and called it the corpus's largest
quality gap.

**That figure was wrong, and it was wrong because of the pipeline, not the
corpus.** The category resolver looked one hop up: it scanned a class's direct
`subClassOf` parents (then `instanceOf`) and took the first whose slug was one
of the 34 category slugs; anything else was uncategorised. No transitive walk.
The intended shape is four levels, but the corpus is deeper than that in
practice — the longest real ancestry path needs seven hops — so a class sitting
two or more levels below a category root was reported as unattached even when
its ancestry named a category unambiguously. It mislabelled **4,033 classes,
89.7% of the number we published**.

The resolver now walks ancestry breadth-first, nearest category wins, parents
visited in declared order so the choice is deterministic across runs — CI
byte-compares the NGG1 golden fixture, so a set-ordered walk would break the
build. Cycles are guarded and the walk is bounded at 12 hops
(`pipeline/emit_graph_tiers.py`, `_build_category_resolver`). That alone took
uncategorised from 4,498 to 465. The repair pass described in §9 then took it
to **3**.

The three are `Electric Vehicle`, `Ethan Mollick` and `Urban Planning`, each
parented directly to a domain root, so there is no category anywhere in their
ancestry to inherit. The arithmetic closes: the 34 `memberCount` values in
`overview.json` sum to 7,831, and 7,831 + 34 category roots + 6 domain roots +
3 = 7,874. Category sizes are uneven, from Legal and Regulatory at 706 members
down to Workspace Tools at 35.

The correction is worth stating flatly because it cuts both ways. Transitive
inheritance is only as sound as the parent chain it walks, and per §3 and §5
most of those parents were chosen by an agent. A class now counts as
categorised if some ancestor two, three or seven hops up is a category root.
That is the right reading of the taxonomy — it is what `subClassOf` means — but
it is not the same claim as "an editor placed this class in this category", and
nothing here should be read as the stronger claim.

Domain assignment never had the same problem. `pipeline/emit_graph_tiers.py`
collapses the 16 raw
domain strings in use onto the 6 canonical roots through a 10-entry alias table
(`DOMAIN_ALIASES`, lines 130–141): `ai` and `machine-learning` →
artificial-intelligence, `metaverse` → spatial-computing, `finance` →
blockchain, and six others (`distributed-systems`, `supply-chain`, `data`,
`governance`, `security`, `standards`) → infrastructure. Two strings used to
resolve to nothing, `economics` on 3 pages and `ai-governance` on 1, which were
the 4 domainless classes and the 4 `INVALID_DOMAIN` validation warnings; both
strings were repaired at source and **domainless is now 0**. Earlier passes did
the bulk of that work by hand: 391
invalid source domains remapped, then 124 ambiguous ones classified. Domain
membership across the 6 roots: infrastructure 2,585, artificial-intelligence
1,899, blockchain 1,432, spatial-computing 1,216, robotics 600,
distributed-collaboration 142.

## 5. Gap materialisation: how 2,833 became 7,874

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
| 2026-07-25 | `d74a6e90a` | 7,936 | repair pass: orphans re-parented, multiply-referenced dangling targets authored (§9) |

```bash
# in the source repository the corpus lives under mainKnowledgeGraph/pages
git ls-tree -r --name-only <commit> -- mainKnowledgeGraph/pages | grep -c '\.md$'
```

That is a recursive file count and runs ahead of the class count. At `d74a6e90a`
the 7,936 files include 28 under `.deleted/` and 19 under `_misc/`, neither of
which the pipeline reads; that leaves 7,889 top-level pages, of which 7,888
carry an ontology block, and 14 of those set `vc:public` false. 7,888 − 14 =
the 7,874 classes the build ships.

The transform handed over 2,833 class pages; the shipped corpus has 7,874, a net
+5,041. The great majority of that came from 22 gap-fill and materialisation
commits between 2026-05-29 and 2026-06-15, with a further 417 pages from the
repair pass of §9. Before each wave
the candidate list was triaged: one wave (`ce7268f81`) remapped 70 spelling and
pluralisation variants onto existing classes and dropped 22 as noise rather than
authoring pages for them. That triage is the only filter; there was no per-page
human sign-off on the thousands of pages this campaign produced. This is the most important
honesty point in this document: the majority of the corpus exists because
*something referenced it* at a reference count above a threshold, and its
content is agent-written prose under an agent-chosen parent. Those pages do
reach the taxonomy — per §4 the categorisation figure that said otherwise was a
pipeline defect — but reaching it through a chain of agent-chosen parents is a
weaker guarantee than a curated placement, and this document does not claim the
stronger one.

## 6. Enrichment loop

Two distinct enrichment tracks ran.

**Prose enrichment (Phase 6).** A worker brief pinned a quality bar:
600–850 lines, 8,500–12,000 words, 35–46 OWL axioms in five named axiom
families, 60–82 typed wikilink relationships across 11 relation types, 25–28
references, five mandatory `###` sections, and a shell validator that had to
pass before a manifest entry could be appended. The brief forbade fabrication
and required web research to be cached alongside the page. The manifest holds
313 entries; not every entry records every measurement, so the medians are over
294–297 entries depending on the field: 600 lines (n=297), 9,617 words (n=297),
51 axioms (n=294), 98 relationships (n=294), 28 references (n=294); axioms and
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
102,346 declared relation edges against 9,481 backbone edges
(`dist/data/graph/stats.json`, `edges.declaredRelations` and
`edges.declaredBackbone`), and why
`RelationEnrichment` is the second most common inference rule at 1,109 classes.

The relation vocabulary is the 12 terms defined in the nested `relations`
context of `static/ns/v2.jsonld`, led by relatedTo (6,141 classes), enables
(5,869) and requires (5,031). A further 45 non-canonical keys appear inside
`relations{}` objects across the corpus (`produces`, `depends-on`,
`isSubclassOf`, and a literal `bridges To` with a space); none are in the
context and none are in the parser's v2 mapping
(`pipeline/jsonld_parser.py` lines 137–149), so all are silently dropped.

## 7. Quality scoring: what it is, and what it is not

Two numeric fields survive from the Logseq era. `quality` appears on 7,085
classes, `qualityScore` on 2,001, both on 1,259, **and on 1,013 of those the
two values disagree**. 742 classes carry only `qualityScore`, and 47 carry
neither.

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
reads the context-defined `qualityScore`, and the 742 classes that carry only
that field are emitted as zero, alongside the 47 that carry no score at all:

```bash
grep -c 'vc:qualityScore "0.0"' dist/data/ontology.ttl   # 789 = 742 + 47
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

## 9. The repair pass, and the figure we published wrong

On 2026-07-25 a 33-agent swarm ran a repair pass over the corpus, and the same
day two pipeline defects were fixed. The trigger was reading this document's own
limitations list back and checking it against the artefacts. Two of the numbers
published there as corpus defects turned out to be pipeline defects.

**Overlap was being reported as a defect.** Almost all of the validation
warnings this document used to report were a single code, `MULTI_PARENT`, fired
whenever a class declares more than one `subClassOf`; the rest were the
`INVALID_DOMAIN` records of §4. Re-running today's validator over the corpus
exactly as it was published — commit `0f1a43bfe`, 7,457 public classes — gives
958 `MULTI_PARENT` and 4 `INVALID_DOMAIN`. The total published at the time was
961, one short of that 962; the gap is an older validator revision counting a
slightly different page set, and it does not change the point.

Multiple inheritance is legal in OWL 2 EL, and in this corpus it is
deliberate: classes are bridged across
categories and domains on purpose, and the bridging campaign of §8 built that
structure explicitly. Publishing it as a defect list misrepresented the dataset.
The corpus was clean on that axis; the pipeline was mislabelling its own design.

`MULTI_PARENT` is now emitted at `info` severity, and the bridging — which the
tier emitter had been computing and discarding — is published as data:

| Artefact | What it now carries |
|---|---|
| `stats.json` | `bridging`: multiParent 1,401, crossCategory 454, crossDomain 153 |
| `bridges.json` | 542 classes with their full category and domain membership, and the parent labels that produce it |
| `overview.json` | 124 edges: 34 category→domain backbone edges plus 90 weighted category↔category bridge edges |

Bridges also feed the force layout, so the baked positions match the topology
the renderer draws rather than a tree the data never was.

**One constraint has to be stated plainly.** The NGG1 node record carries a
single u16 category field (FORMAT-NGG1 §3), so the binary tiers keep only the
*nearest* category per node. A class in three categories ships in the tiers as a
member of one. The full membership exists only in `bridges.json`. That is a real
limitation of the binary format and it is not going away without a format
change.

**Category inheritance was one level deep**, the defect described in §4. It
mislabelled 4,033 classes and produced the 60%-uncategorised figure this
document reported for two months. Fixed by walking ancestry.

**The corpus repair itself.** The swarm re-parented orphaned classes and
resolved dangling targets that more than one page referenced. Every change was
verified independently afterwards, and no regression was introduced:

| Measure | Before | After |
|---|---:|---:|
| Orphaned classes | 471 | 9 |
| Dangling references | 2,637 | 1,568 |
| Dangling `subClassOf` | 5 | 5 |
| Resolvable edges | 96,377 | 98,776 |
| Classes | 7,457 | 7,874 |

**68% of the added parents point at a specific semantic class; 32% fall back to
a category anchor.** That second group is the weaker work: parenting a class to
the category it plainly belongs in is defensible and is not what a careful
ontologist would write, exactly the R5 failure mode §3 describes. It is recorded
here rather than averaged away.

The 417 new classes came from concepts that two or more existing pages already
referenced — the same in-degree rule the gap-fill campaign of §5 used, applied
to what that campaign left behind.

Of the 9 remaining orphans, 6 are the domain roots. Those are correctly
parented to `owl:Thing` and are not defects; the detector counts them because it
looks for classes that reach a *category* root, which by construction the domain
roots never will.

**What was deliberately left.** The remaining 1,568 dangling references are
singletons: targets referenced by exactly one page. Authoring a class for a
concept one page mentions once would inflate the corpus with material nothing
corroborates, which is the failure mode the in-degree threshold exists to
prevent. They stay dangling, and the number is published. Likewise the 5 dangling
`subClassOf` references, unchanged before and after, and the 3 uncategorised
classes of §4.

## 10. Where the corpus stands today

Run the build and read the numbers:

```bash
python -m pipeline.build ontology/pages dist    # 7 stages, ~18 seconds
python -m pipeline.validate ontology/pages
```

| Measure | Value |
|---|---:|
| Public classes | 7,874 |
| Distinct public pages | 7,870 |
| Pages withheld (`vc:public` not true) | 14 |
| Individuals | 0 |
| Turtle triples | 258,200 |
| Declared edges / resolvable | 111,827 / 98,776 |
| Domains / categories | 6 / 34 |
| Bridging: multiParent / crossCategory / crossDomain | 1,401 / 454 / 153 |
| **Uncategorised classes** | **3** |
| Domainless classes | 0 |
| Validation errors | 0 |
| Validation warnings | 0 |
| Validation info (`MULTI_PARENT`) | 1,401 |

7,874 classes across 7,870 distinct public page identities: four page IRIs
(`bitcoin`, `comfy-ui`, `ethereum`, `foundation-models`) are each carried by two
files. `stats.json` reports the two counts separately rather than conflating
them.

The 1,401 `MULTI_PARENT` records are informational, not warnings: for example
`A Star Algorithm.md` declares Search Algorithm, Informed Search and Graph
Search. §9 gives the reasoning for the severity change. They are still emitted
on every run and still countable, because multiple parents are worth seeing —
some of them are successive agent waves each adding a parent without checking
what was already there, and the two cases are not distinguishable from the
declaration alone. What is now published alongside them is the bridging
structure they produce.

Summarising the honest state:

- **3 classes are uncategorised**, down from a published 4,498. Of that 4,498,
  4,033 were a pipeline defect and 465 a corpus gap; the repair pass closed 462
  of the 465. The figure was wrong for two months; §4 and §9 record how.
- **A net +5,041 classes (64% of the shipped corpus) were added after the
  structural transform**, overwhelmingly by the gap-fill campaign, authored
  because something referenced them, with no per-page human sign-off.
- **4% of pages received the full prose enrichment treatment.** The rest range
  from a definition and a handful of relations to near-stub.
- **The `inferenceRule` field is not a controlled vocabulary.** 38 distinct
  strings, 1,463 classes with no provenance at all.
- **Quality scores are batch markers, not measurements**, and 1,013 classes
  disagree with themselves.
- **1,568 dangling references remain**, each a singleton target, plus 5 dangling
  `subClassOf` references.
- **0 individuals.** The corpus is TBox only; nothing has been instantiated.
- **The binary tiers carry one category per node.** 542 classes reach more than
  one category or domain, 454 of them more than one category; the tiers keep the
  nearest and `bridges.json` carries the rest.

None of this makes the corpus unfit for its purpose. It is a coherent,
reasoner-clean, densely-connected graph of the right size to exercise a
JSON-LD → OWL → binary-tier pipeline end to end, and its defects are measured
and stated rather than hidden. It is not a curated reference work, and no part
of this repository claims otherwise.

## 11. Auditing any single class

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
recording every `[[wikilink]]` and how it resolved: 61,160 entries, all of them
now carrying the full `{raw, resolved, kind}` shape, kind being `StubLink`
(40,414) or `ResolvedLink` (20,746). No pipeline stage reads any of it:
`grep -rn 'resolutions' pipeline/*.py` returns nothing. It exists so a lossy transform can be
audited after the fact. That is the principle this whole document describes:
the corpus records what was done to it, including where that was not enough.
