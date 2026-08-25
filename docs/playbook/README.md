# Playbook: build a grounded domain ontology from scratch

A knowledge corpus that is at once a human working notebook and a
machine-readable ontology is a different asset from either a wiki or a data
catalogue. A wiki gives you a link graph with no formal semantics. A data
catalogue gives you schemas with no prose and no reasoning. Put both surfaces in
one file and you get something neither can be alone: pages an analyst reads and
edits, that a reasoner can also classify, query and check for contradiction.

Building one at scale used to be a research-team job measured in years, because
every class needed a person to write its definition, place it in the hierarchy
and wire its relations. An LLM agent mesh changes that arithmetic. A fleet of
agents working to a written contract can type thousands of classes and tens of
thousands of edges in weeks, at a cost you pay in tokens rather than salaried
years. This playbook is the method, and it is denominated in that currency: the
reference corpus's single largest pass spent on the order of 37M subagent tokens
to enrich 959 hub pages, and knowing that number up front is the difference
between a managed budget and a surprise.

Read this README, then read `01`, then run the reproduce guide the same
afternoon.

---

## What we did, and what this playbook tells you to do instead

This playbook is a reflow, and the honesty is the point. An earlier version
generalised the historical process faithfully, mistakes and all. The historical
process had mistakes. What follows prescribes the process we would run now, with
the history demoted to evidence. Eight decisions carry that correction. Each one
exists because the operating record shows what its absence cost.

| Decision | What the record shows | What you do |
|---|---|---|
| **R1 Contracts before content** | The validator was written after generation, so a large share of ~37M+ tokens went on repair: 519 invalid domains, post-hoc parent inference (a fallback rule existed because parents were missing at scale), thousands of dangling references, alias and false-gap cleanup scripts. | Authoring spec, validator, slug law, alias policy, CI count gates and the namespace decision all exist and run before the first content page is written. |
| **R2 ABox-first for lake work** | The corpus was seeded from expert notes, is TBox-only to this day (0 individuals), and its hardest quality problems were placement disputes a grounded ABox would have settled. | The lake's rows are individuals. Extract Individuals with grounding blocks first, cluster them, propose Classes from the clusters, have the operator name and approve the class, then promote. TBox seeding still happens, informed by the clusters. |
| **R3 One axis plus bridging, day one** | A second Layer axis was seeded that never survived to publication, while the bridging nobody planned for fought the tooling for months: 958 deliberate bridges reported as warnings, categories silently flattened by a single-slot format. | A single domain and category axis, with multi-parent bridging legal, informational in severity, and published as data from the first build. Every component is written against multi-membership. A second orthogonal axis is added only when a competency question demands it. |
| **R4 Quality is computed, never asserted** | The authoring spec hardcoded a quality of 0.72 into the template. The number meant nothing and was propagated corpus-wide. | No author-asserted quality floats. If a quality signal is wanted, it is derived: relation density, grounding coverage, review status, inbound centrality. |
| **R5 Density targets at authoring time** | Pages were generated thin, then a 959-page, ~37M-token pass densified hubs that could have been specified up front. | The authoring contract states the relation-count and body-depth expected per page tier (stub, standard, hub) when the page is first written. |
| **R6 Budget-gated waves** | Cost was discovered afterwards, described only as "many many tokens", never managed against a plan. | Every wave declares a token budget and an expected yield before launch. If acceptance falls below threshold mid-wave, stop and re-seed rather than grind. |
| **R7 Risk-weighted human review** | Uniform review depth spent the scarce resource, the operator's attention, where the risk was lowest. | Concept pages are cheap to accept and cheap to fix: agent-verified, human-sampled. Grounding claims about the business are expensive to get wrong, so every extraction wave carries a human audit of a random sample sized by confidence. |
| **R8 Publish early behind gates** | Publication came late and large, and its worst defects (a double-writer mirror, stale cumulative deploys, a 653-page silent drop) accumulated invisibly until a count gate finally asserted reality. | First publication in week one, tiny and gated, then continuously. |

None of these is a preference. Each is the cheaper side of a cost already paid.
Structure enforced at authoring time costs a prompt line. Retrofitted, it costs
repair waves.

---

## What you end up with

The reference implementation in this repository is the existence proof, and it
is the evidence the eight decisions above are drawn from. Every figure is
checkable; the command that produces it is in
[`guides/reproduce.md`](../guides/reproduce.md).

| Property | Reference corpus |
|---|---|
| OWL classes | 7,874 |
| RDF triples | 258,200 |
| Resolvable graph edges | 98,776 |
| Subject domains | 6 |
| Categories | 34 |
| Individuals (ABox) | 0 |
| Multi-parent (bridging) classes | 1,401 |
| Cross-category bridges | 454 |
| Cross-domain bridges | 153 |
| Full build time, Python + rdflib | ~18 s |

A page is a Logseq markdown file carrying two fenced `json-ld` blocks: a Page
block and an entity block. Logseq renders the markdown and ignores the fenced
blocks; the pipeline reads the fenced blocks and ignores the prose. Neither view
is generated from the other, which is the property that keeps both honest. The
full argument for that design is in
[`methodology/the-hybrid-approach.md`](../methodology/the-hybrid-approach.md).

Two properties of that corpus are limits, not features, and the playbook
corrects both. It is **mostly AI-generated synthetic content produced under
human direction, by design**, an ontology testbed rather than an encyclopaedia.
And it holds **0 individuals**: it models concepts (TBox) but none of the specific
turbines, contracts and vessels a real data lake carries (ABox). Grounding
blocks (R2, R4) make the first limit a machine-readable field rather than a
buried caveat, and ABox-first generation (R2) removes the second.

---

## Generalised target: the v3 profile

This playbook does not teach you to clone the reference corpus. It teaches a
superset schema, namespace-parameterised, with the gaps closed. Document `02`
defines it normatively; the summary here is orientation. Five differences from
the shipped v2 format, each a rule in that document:

1. **Parameterised namespaces.** `urn:<project>:class/<slug>` instead of a
   hard-coded prefix. Your project owns its IRI space from line one.
2. **TBox and ABox both first-class.** Classes for concepts, Individuals for the
   things in your lake. This is what lets the corpus answer questions about real
   assets rather than only about categories.
3. **A grounding block on every Individual and every lake-derived Class claim.**
   Each carries `grounding: { sources: [{dataset, locator, query|field,
   retrievedAt}], method: extracted|inferred|authored, confidence: 0-1 }`.
   Synthetic-versus-evidenced becomes a field, not a footnote.
4. **Bridging first-class from day one.** Multi-parent membership is legal,
   carries informational severity, and is published as data. The reference
   corpus had to reclassify it after the fact (R3); you start with it.
5. **External alignment.** `sameAs` and `closeMatch` to public ontologies where
   they exist, rather than reinventing standardised terms.

Portability holds across editors. The two-block pattern works verbatim in both
Logseq and Obsidian, because fenced code blocks are portable; only the wikilink
and asset conventions differ, and document `02` says how. The full field
reference for the shipped format is
[`reference/jsonld-schema.md`](../reference/jsonld-schema.md).

A bridging class in the exemplar, entity block only, namespace parameterised to
project token `owf`. This is document `02`'s canonical Weather Window (§5.1),
reproduced here so the two never drift:

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/weather-window",
  "@type": "Class",
  "label": "Weather Window",
  "definition": "A period during which met-ocean conditions (wind speed, significant wave height, visibility) stay within the operating limits required to carry out an offshore task safely, such as turbine access, a heavy lift, or subsea cable work.",
  "domain": "marine-operations",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/operational-constraint", "label": "Operational Constraint" },
    { "@id": "urn:owf:class/maintenance-opportunity", "label": "Maintenance Opportunity" }
  ],
  "relations": {
    "dependsOn": [{ "@id": "urn:owf:class/met-ocean-forecast", "label": "Met-Ocean Forecast" }],
    "enables":   [{ "@id": "urn:owf:class/jack-up-campaign",   "label": "Jack-up Campaign" }],
    "bridgesTo": [{ "@id": "urn:owf:class/curtailment",        "label": "Curtailment" }]
  },
  "grounding": {
    "method": "authored",
    "confidence": 0.9,
    "sources": [
      { "dataset": "standards-library", "locator": "bvg-om-guide#weather-window", "field": "definition", "retrievedAt": "2026-07-25T00:00:00Z" }
    ]
  }
}
```

Two subclass parents, both legal, neither a defect: a Weather Window is an
operational constraint and a maintenance opportunity at once, and it pulls on a
third axis through the `bridgesTo` relation to Curtailment, the generation you
forgo by taking a turbine offline to use the window. That marine-ops, maintenance
and markets pull is what makes it a bridge. The `grounding.method` reads
`authored` because the definition comes from a domain expert and an O&M standard,
not a single lake row; a definition pulled from a lake field would read
`extracted`, and one a reasoner derived would read `inferred`. A reader, or a
downstream query, filters on exactly that.

---

## Exemplar: offshore wind O&M

Every document in this playbook works one scenario, so the method stays concrete.

An offshore wind operator runs a data lake: SCADA telemetry from the turbines,
CMMS work orders, met-ocean time series, energy-market prices, contracts,
incident reports and environmental surveys. The business problem is operations
and maintenance: when to send a vessel, which failures a warranty covers, what a
weather delay costs against the day's market price.

Six candidate domains fall out of the lake:

- `asset-engineering`: turbines, blades, gearboxes, cables, foundations
- `marine-operations`: vessels, crew transfer, jack-up campaigns, weather
- `energy-markets`: prices, curtailment, balancing, Contracts for Difference
- `environment-consenting`: surveys, consent conditions, protected species
- `commercial-finance`: warranties, insurance, availability guarantees
- `hse-workforce`: safety cases, competency, permits to work

Under R2 the first entities you write are not any of those concepts. They are
**Individuals**: turbine A07, the crew transfer vessel Wind of Change, work
order 48213, each extracted from a lake row with a grounding block. The Classes
come from clustering those individuals and asking the operator to name the
cluster. Concepts follow evidence, not the reverse.

The value is not in the domains; it is in the concepts that refuse to sit in
one. These bridges run throughout:

- **Weather Window** (marine-ops, maintenance, markets): a sea state that
  permits a transfer, scheduled against a maintenance backlog, priced against
  the generation you forgo by taking the turbine offline.
- **Curtailment** (markets, finance): being paid, or not, to stop generating.
- **Cable Failure** (engineering, insurance, marine-ops): a fault that is at
  once an electrical event, an insurance claim and a subsea repair campaign.
- **Jack-up Campaign** and **Warranty Claim** complete the set.

The scenario is data-rich, naturally bridging, and deliberately not one of the
reference corpus's domains. If the method works here, it is not a property of
the reference subject matter.

---

## Phase map

Six phases, one document each, in the order you run them. Two registers run
through the set. Documents `README`, `01` and `06` are written for a person
deciding and steering, in prose. Documents `02`, `03`, `04`, `05` and every file
under `templates/` are written in contract register, because they are pasted
into agent contexts verbatim as the operating contract: RFC-2119 keywords,
numbered invariants, closed value sets. Read the contract documents as
specifications, not essays.

One asymmetry follows from that, and it is deliberate: the contract documents
are not descriptions of artefacts you must now go and build. They are the
artefacts. Paste `02-schema.md` and `templates/authoring-spec.md` into your
mesh's context, swap the `owf` project token for your own, and you have a
working authoring contract on day one. Phase 0 is R1 made self-demonstrating:
the playbook does not tell you to write contracts before content; it hands you
the contracts, so the first page your corpus ever contains is already governed
by them.

**Phase 0 — Contracts (`01` §7, `02`, `templates/`).** Before a single content
page exists, write the contract the whole mesh obeys (R1). The page format,
slug law, domain enum, parent requirement, grounding requirement and density
targets live in [`02-schema.md`](02-schema.md) and
[`templates/authoring-spec.md`](templates/authoring-spec.md); the CI count gates
live in [`templates/gate-config.md`](templates/gate-config.md). This is why
forty parallel authors produced mergeable output on the reference build, and why
the repair waves it did not have contracts for are the ones this playbook
removes.

**Phase 1 — Discovery (`01`).** Point the lake at the method. Frame the business
problem as competency questions, inventory the datasets, extract the first
Individuals and cluster them (R2), and cut the candidate domains from what the
data contains rather than from expert priors. Human register. Output: a domain
list with scope and explicit exclusions, an authoring spec, and a ranked concept
frontier. Detail in [`01-discovery.md`](01-discovery.md).

**Phase 2 — Schema (`02`).** Fix the v3 profile: single root, one Domain and
category axis with bridging first-class (R3), namespace parameters, grounding
block, and the density-per-tier contract (R5). Contract register.
[`02-schema.md`](02-schema.md).

**Phase 3 — Generation, ABox-first (`03`).** Grow the corpus from the ground up.
Extract and ground Individuals, propose Classes from their clusters, then grow
concepts demand-driven: create a page only for a concept two or more independent
existing pages already reference (the `refs>=2` rule). Themed waves, each with a
declared token budget and expected yield (R6), the dangling-reference ranking
choosing the frontier, centrality-times-sparsity ranking choosing what to
enrich. Contract register. [`03-generation.md`](03-generation.md); reference
history in
[`methodology/corpus-generation.md`](../methodology/corpus-generation.md).

**Phase 4 — Quality (`04`).** Measure, generate, repair, re-measure, until dry.
Gate on counts, not on absence of errors. Compute quality signals, never assert
them (R4). Verify agent self-reports independently, and weight human review by
risk: sample concept pages, audit every grounding wave (R7). Contract register.
[`04-quality.md`](04-quality.md); reference gate catalogue in
[`ci-cd/build-and-gates.md`](../ci-cd/build-and-gates.md).

**Phase 5 — Publication (`05`).** Publish in week one behind a count gate, then
continuously (R8). Build clean from a fresh tree, single writer per artefact,
publish full membership in JSON alongside any compact format that cannot carry
it. Contract register. [`05-publication.md`](05-publication.md); reference
pipeline in [`architecture/pipeline.md`](../architecture/pipeline.md).

**Phase 6 — Continuous enrichment (`07`).** The day after publication: keep the
corpus absorbing a stream source (news, podcasts, logs) without rotting its
curated pages or fossilising. Three tiers — append-only evidence ledger,
two-instrument promotion gate, and a fork into governed proposals (survivors)
versus working-graph news pages (rejects). Human register, with the August 2026
operating record as evidence: direct-to-curated ingest fails *measurably* — the
blind judge scores news digests on mature pages at −2, and only thin pages
gain. [`07-continuous-enrichment.md`](07-continuous-enrichment.md).

A full worked walk of the first month, seed to first publication, is
[`06-worked-example.md`](06-worked-example.md). Read it if you learn better from
one concrete run than from six abstract phases.

---

## Laws paid for in incidents

Beneath the eight design decisions sit the individual incidents that taught
them. Document `04` names each as a rule with its date and defect; the short
form is here so a first-time builder who reads only this section still avoids the
expensive mistakes.

- **Parse, never text-match.** A whitespace-sensitive grep silently dropped 653
  public pages. If a format permits variance, every consumer parses it, never
  pattern-matches it.
- **Severity is a claim about intent.** The validator reported 958 deliberate
  bridges as warnings, so a clean corpus published itself as defective. When
  data deliberately breaks a rule, reclassify the rule; do not edit the data.
- **Contract gates assert counts.** Under-publication produces no error signal.
  Gate on `expected == actual`. The count gate went on to catch two further
  defects it was never designed for.
- **Single writer per artefact.** Two writers into one markdown mirror produced
  7,900 orphan files nobody could assert against.
- **Build clean.** An incremental deploy over a stale checkout republished
  deleted pages indefinitely.
- **One slot cannot hold two memberships.** A binary tier format carried a
  single `u16` category, so bridging classes were flattened. Publish full
  membership in JSON alongside whatever a compact format drops.
- **Calibrate on samples before bulk.** Verify agent self-reports independently;
  three separate self-reports were wrong in one day. Adversarial verification
  finds what friendly review approves.

The full incidents, each with its command and its fix, are in
[`04-quality.md`](04-quality.md) and
[`ci-cd/build-and-gates.md`](../ci-cd/build-and-gates.md).

---

## What this is not for

Honest limits, so nobody adopts the method for a job it loses at.

- **Small vocabularies.** If your ontology is under a few hundred terms, a
  person and an afternoon in Protégé beats an agent mesh. The overhead of
  contracts, gates and grounding blocks only pays back at scale.
- **Hard real-time data.** This is a batch method. The reference corpus rebuilds
  in ~18 s from static files. Live SCADA at second resolution belongs in a time
  series store; the ontology models the concepts the readings are about, and the
  grounding block points at the live source rather than mirroring it.
- **Corpora needing per-fact legal sign-off.** The method generates fast and
  verifies statistically. If every assertion needs a named human to accept legal
  liability, the mesh builds that review queue but does not replace it. The
  `grounding.method` field marks authored versus inferred versus extracted,
  which is where such a review starts, not where it ends.

---

## Prerequisites

Four things. Missing any one and the method stalls.

1. **A data lake you can query.** Grounding blocks are only as real as the
   sources they cite. You need datasets with stable locators and read access to
   run the queries that populate `grounding.sources`.
2. **An operator who knows the business.** Someone who can say Curtailment is a
   markets-and-finance concept and not an engineering one, and can spot a
   generated definition that is subtly wrong. The method scales that person's
   judgement (R7); it does not remove the need for it.
3. **An LLM budget measured in tokens.** Real figures from the reference build:
   prose enrichment to a pinned bar (medians of 600 lines, ~9,600 words, 51
   axioms, 98 relations per page) covered 313 pages, about 4% of the corpus,
   using Sonnet workers under an Opus coordinator; the centrality-ranked hub pass
   spent on the order of 37M subagent tokens across 959 pages. Budget for waves,
   not one pass (R6): one wave report records 8 of 1,023 stubs enriched with
   "approximately 127 waves remain".
4. **The toolchain.** Python 3.12 and `rdflib>=7.0.0` build the corpus; that is
   the whole hard dependency. Rust and Node are needed only for the explorer.
   Exact versions are in [`guides/reproduce.md`](../guides/reproduce.md).

---

## Start this afternoon

```bash
git clone https://github.com/DreamLab-AI/knowledgeGraph.git
cd knowledgeGraph
python -m venv .venv
.venv/bin/pip install "rdflib>=7.0.0" pytest
.venv/bin/python -m pipeline.build ontology/pages dist
```

That runs the reference corpus end to end in about 18 seconds and prints the
figures above: 7,874 classes, 258,200 triples, 98,776 edges, 0 errors, and 1,401
informational `MULTI_PARENT` notes that are the bridging design, not defects.
Seeing those numbers come out of your own checkout is the fastest way to trust
the rest of the playbook.

Then, in order:

1. Read [`01-discovery.md`](01-discovery.md) and run its inventory against a lake
   you have, even a small one.
2. Stand up the contracts before writing content (R1) — by lifting, not
   writing: paste [`02-schema.md`](02-schema.md) and
   [`templates/authoring-spec.md`](templates/authoring-spec.md) into your
   mesh's context with your own project token, and copy the gate set from
   [`templates/gate-config.md`](templates/gate-config.md) into CI.
3. Walk the full build in [`guides/reproduce.md`](../guides/reproduce.md), past
   the corpus to the SPARQL queries, the WebVOWL JSON and the binary graph tiers.
4. When you are ready to write your first page, follow the worked first month in
   [`06-worked-example.md`](06-worked-example.md).

Next: **[01 Discovery](01-discovery.md)**. Then
**[02 Schema](02-schema.md)** · **[03 Generation](03-generation.md)** ·
**[04 Quality](04-quality.md)** · **[05 Publication](05-publication.md)** ·
**[06 Worked example](06-worked-example.md)** ·
**[07 Continuous enrichment](07-continuous-enrichment.md)**.
