# 03: Generation protocol

This document is written to be included in agent context verbatim. It is the
operating contract an orchestrator runs the corpus from: the wave order, the
per-wave declaration schema, the role boundaries, and the failure behaviour. It
assumes the page format of [02-schema.md](02-schema.md) and the authoring contract
of [templates/authoring-spec.md](templates/authoring-spec.md) are fixed;
generation fills that schema, it does not define it. MUST, MUST NOT, SHOULD, MAY
are RFC-2119. Evidence citations point at the reference record
([../methodology/corpus-generation.md](../methodology/corpus-generation.md)) and
justify a rule once; they are not open for relitigation here.

Running exemplar: an offshore wind farm O&M data lake (SCADA telemetry, CMMS
work orders, met-ocean series, energy-market prices, contracts, incident reports,
environmental surveys), project token `owf`, six domains: `asset-engineering`,
`marine-operations`, `energy-markets`, `environment-consenting`,
`commercial-finance`, `hse-workforce`. Under this protocol the exemplar's first
authored entities are Individuals (turbines, vessels, work orders), not concepts.

---

## 1. Terms

One term per concept, defined once, used identically below.

- **TBox / ABox**: the class vocabulary (`Class` entities) and the lake objects
  (`Individual` entities, `instanceOf` a class) per [02-schema.md](02-schema.md) §5.
- **Seed**: the human-reviewed upper structure authored in WAVE 0.
- **Wave / Round**: one budgeted run of one wave type (§3); one measure -> generate
  -> validate -> re-measure cycle inside it.
- **Frontier**: the ranked list of what a wave builds next; **dry** when it has
  been empty for K consecutive rounds (§8).
- **Whitelist**: the set of confirmed-existing class `@id`s a batch MAY parent onto.
- **Density tier**: `stub` | `standard` | `hub`, each with an authoring-time
  relation-count and body-depth floor (§5.4).

---

## 2. Roles and their boundaries

### Optional extraction engine: OntoCast

WAVE E MAY use OntoCast for document chunking, ontology-assisted fact extraction,
cross-chunk entity alignment, and upstream SHACL repair. OntoCast output MUST enter
through the private candidate adapter documented in
[`../integrations/ontocast.md`](../integrations/ontocast.md); it MUST NOT write
public pages or count as acceptance evidence. The adapter preserves the RDF input,
re-mints project identity, and leaves every candidate pending the same sampling,
grounding, and human-promotion gates as any other author.

Five roles run the mesh; distinct roles make parallel output mergeable. Each
role's MUST NOT list is normative.

**Operator** (human). Owns the seed, the authoring spec, the namespace decision,
and every gate threshold. Names and approves every promoted class (§5), sets each
wave's budget and abort threshold, and calls a wave type dry.

- MUST review every WAVE 0 page and every class promotion individually.
- MUST NOT hand-author leaf classes at scale; that is the mesh's work.
- MUST NOT relax a gate to pass a batch; a failing batch is re-run, not waved.

**Orchestrator** (one Opus-class agent, the queen). Holds the frontier, batches
work, spawns authors, invokes the verifier, and decides the next round.

- MUST declare a wave (§3) before spawning any author.
- MUST stop a wave at its abort threshold rather than grind past it (R6).
- MUST NOT write entity pages itself.
- MUST NOT merge a batch the verifier or validator rejected.

**Author** (many Sonnet-class agents, parallel). Each takes one batch and writes
one page per slug, strictly to [templates/authoring-spec.md](templates/authoring-spec.md).

- MUST reproduce the page template byte-for-byte and compute slugs by the slug law.
- MUST NOT invent a `subClassOf` parent outside the supplied whitelist (§7 F-1).
- MUST NOT process a slug outside its batch or edit another author's file (F-3).
- MUST NOT assert a `quality` value (INV-6).

**Researcher** (few, on demand, verification only). Confirms a fact the mesh would
otherwise guess: which standard governs a concept, what an acronym expands to,
whether an alignment target dereferences.

- MUST return a citation or a null.
- MUST NOT write to the corpus or decide that a class needs an alignment.

**Verifier** (independent of the author that produced the work). Re-parses the
artefact and asserts the round's claimed counts against measurement (F-2).

- MUST compute over the same parsed population the pipeline publishes, never a
  self-report and never a text grep.
- MUST NOT approve a round on the absence of an error message; under-production
  emits no error ([04-quality.md](04-quality.md) Law 3, Law 8).

---

## 3. Wave declaration (required before any spawn)

Every wave MUST be declared as the object below before an author is spawned; a
wave without a budget and an abort threshold MUST NOT run. Reference cost was
discovered afterwards, not managed; the declaration makes cost a pre-commitment (R6).

```
wave ::= {
  "id":              string,                     ; unique, e.g. "G-07"
  "type":            "seed" | "extraction" | "growth" | "enrichment",
  "budget_tokens":   integer,                    ; hard ceiling for the wave
  "expected_yield":  { "unit": "individuals" | "classes" | "pages"
                                | "enriched_pages",
                       "count": integer },       ; the pre-declared target
  "abort_threshold": { "min_acceptance_rate": float 0..1,
                       "checkpoint_every":    integer },  ; batches per check
  "review_policy":   "full" | "sampled",         ; §6 (R7)
  "sample_size_fn":  string,                      ; when sampled: n as f(confidence)
  "whitelist_ref":   string,                      ; path to the parent whitelist
  "spec_ref":        string                       ; path to the authoring spec
}
```

Protocol at each checkpoint:

1. The orchestrator computes acceptance rate (accepted over produced pages) over
   the batches since the last checkpoint.
2. If acceptance rate < `min_acceptance_rate`, the wave MUST stop; the orchestrator
   MUST re-seed the frontier or the spec rather than produce on at a low yield.
   Grinding a failing wave to its budget is forbidden.
3. If cumulative tokens reach `budget_tokens`, the wave MUST stop and report yield
   against `expected_yield`; the operator decides on a successor.

`review_policy` is `full` for WAVE 0 and extraction promotion, `sampled` for
growth and enrichment authoring (§6).

---

## 4. Global invariants

Gates, not convergence signals; they hold in every round of every wave.

- **INV-1** The validator MUST exit 0 errors on every batch before commit; a
  failing batch is requeued, never merged ([04-quality.md](04-quality.md) Law 3).
- **INV-2** Every consumer parses the fenced `json-ld` blocks. No wave step MAY
  select, count, or edit pages by grepping surface text (§7 F-4;
  [04-quality.md](04-quality.md) Law 1).
- **INV-3** Exactly one process writes any one artefact (§7 F-3;
  [04-quality.md](04-quality.md) Law 4).
- **INV-4** The classification axis is single: `owl:Thing -> domain -> category ->
  leaf`. Multi-parent bridging is legal on this one axis, reported at **info**
  severity, and published as data ([02-schema.md](02-schema.md) §7). A second
  orthogonal axis MUST NOT be seeded until a competency question demands it
  ([templates/competency-questions.md](templates/competency-questions.md)); a Layer
  axis on the reference build never reached publication, while unplanned bridging
  fought the tooling for months (R3).
- **INV-5** Every entity carries a `grounding` block. Any Class claim derived from
  the lake, and every Individual, MUST carry `method` in `{extracted, inferred}`
  with resolvable `sources`; a concept with no lake row is `authored`
  ([02-schema.md](02-schema.md) §6).
- **INV-6** No author writes a `quality` value. A quality signal, if published, is
  computed by the pipeline from relation density, grounding coverage, review
  status, and inbound centrality. The reference authoring spec hard-coded
  `quality: 0.72`; the number meant nothing and propagated corpus-wide (R4).
- **INV-7** Every self-report is verified against the parsed artefact (F-2).
- **INV-8** Any new operation is calibrated on a sample of ten pages and verified
  by hand before it runs over the corpus ([04-quality.md](04-quality.md) Law 7).

---

## 5. Wave order

Waves run in the order below. Extraction precedes growth and enrichment because
the lake's rows are the ground truth the TBox is answerable to (R2).

```
WAVE 0  seed          upper structure, human-reviewed page by page
WAVE E  extraction    Individuals from lake rows -> clusters -> class proposals
WAVE G  growth        refs>=2 demand fill of the class vocabulary
WAVE N  enrichment    centrality x sparsity densification of hubs
        convergence   each wave type stops independently at K dry rounds (§8)
```

WAVE 0 runs once; WAVE E, WAVE G, and WAVE N interleave and repeat (extraction
creates growth demand, growth creates enrichment targets, enrichment creates
nothing). Publish behind gates from week one, tiny at first, and continuously
after ([05-publication.md](05-publication.md); R8).

---

### 5.1 WAVE 0: seed

The only wave where every page is authored under `review_policy: full` and read by
the operator first, because an error here propagates through thousands of pages.
Three strata, authored in order.

1. **Root and the single axis.** One `owl:Thing` root. One subject axis hanging off
   it: the six `owf` domains. No second axis (INV-4).
2. **Domain roots with scope and boundary.** Each domain page states what it covers
   and, explicitly, what it excludes and where that material goes, e.g.
   `marine-operations` "excludes turbine mechanical faults (`asset-engineering`) and
   vessel charter commercials (`commercial-finance`)". Boundaries stop two domains
   later claiming the same concept.
3. **Category roots.** A frozen intermediate layer beneath each domain, roughly six
   per domain; the reference seed froze 34. Freeze the list in code (the reference
   pipeline freezes `_TAXONOMY` in `pipeline/emit_graph_tiers.py`); a category set
   that shifts breaks every downstream count.

Protocol:

1. Author the strata from [templates/taxonomy-seed.json](templates/taxonomy-seed.json);
   the operator reviews every page and every boundary statement.
2. On approval, the seed classes become the initial parent whitelist for WAVE E/G.
3. Category membership downstream MUST be resolved by walking ancestry, not by
   reading direct parents; the longest real ancestry runs to seven hops, and a
   direct-parent read mislabelled 4,033 classes until it was fixed to transitive
   resolution ([../architecture/pipeline.md](../architecture/pipeline.md)).

---

### 5.2 WAVE E: extraction (ABox-first)

The lake's rows are Individuals. Extraction proposes them first, clusters them, and
lets the clusters propose classes the operator names and promotes; WAVE 0 supplies
upper structure, WAVE E makes the leaf vocabulary answerable to real data. The
reference corpus has 0 individuals and its hardest defects were placement disputes
a grounded ABox would have settled (R2); this wave has no precedent, so its
safeguards are stated in full.

Protocol:

1. **Declare** the wave (§3) against one lake dataset or slice, with
   `review_policy: sampled` for extraction and `full` for promotion, and a
   `sample_size_fn` that grows the audit sample as agent confidence falls (R7).
2. **Extract.** Authors read rows and emit one candidate `Individual` per row, each
   with a `grounding` block (`method: extracted`; `sources` with `dataset`,
   `locator`, one of `field`/`query`, `retrievedAt`; a `confidence`) and a
   provisional `instanceOf` naming a seed class or placeholder ([02-schema.md](02-schema.md) §6).
3. **Audit.** The operator checks a random sample sized by `sample_size_fn`,
   confirming per sampled Individual: the `instanceOf` class exists and is correct;
   the `locator` resolves in the lake on a live spot-check, not by assumption; and
   `method: extracted` is a genuine extraction, not an inference in disguise. A
   batch whose sample fails is rejected wholesale ([04-quality.md](04-quality.md) Law 7).
4. **Cluster.** Group accepted Individuals by shared attributes, relations, and
   provisional class into candidate clusters. A cluster is a class the data asks for.
5. **Propose.** Emit one class proposal per cluster as data, not a page: a label, a
   definition drawn from the shared attributes, a candidate parent from the
   whitelist, the member Individuals, and the cluster size.
6. **Name and approve** (operator, `full`). The operator names the class, accepts,
   merges, or rejects it. The mesh proposes; the operator names (R2).
7. **Promote.** On approval:
   a. Mint the `Class` page by the slug law, parent onto the approved whitelist
      class, `grounding.method: inferred` with `sources` set to the cluster inputs.
   b. Repoint the member Individuals' `instanceOf` at the promoted class `@id`.
   c. Add the promoted `@id` to the parent whitelist; category or seed changes are
      operator-only. A class under two branches keeps both parents as a bridge
      (INV-4), e.g. `Cable Failure` spanning engineering, finance, and marine-ops.

---

### 5.3 WAVE G: growth (demand-driven)

Growth authors a class only for a concept two independent existing pages already
reference (in-degree >= 2). A concept mentioned once is one page's opinion. The
reference build applied this threshold on every gap-fill wave, left singletons
dangling, and two independent efforts converged on it.

Protocol:

1. Parse the corpus and count every relation, `subClassOf`, and wikilink target
   with no page of its own, recording each target's referrers and predicates.
2. Build the frontier: in-degree >= 2, ranked descending. In-degree 1 are
   singletons; publish their count, do not author them.
3. Chunk the top `WAVE_SIZE` into batches of ~30 slugs per author (each slug with
   its referring context); authors write to spec, parenting only onto the
   whitelist; the validator gates at 0 errors (INV-1); commit, re-measure, repeat
   until the frontier is empty for K rounds (§8). The loop, precisely:

```
K_dry = 3
empty_rounds = 0
while empty_rounds < K_dry:
    dataset   = parse_corpus(pages_dir)            # INV-2: parse, never grep
    declared  = { e.iri for e in dataset.entities }
    dangling  = Counter(); referrers = defaultdict(list)
    for page in dataset:
        for edge in page.all_targets():            # subClassOf + relations + wikilinks
            if edge.target not in declared:
                dangling[edge.target] += 1
                referrers[edge.target].append((page.slug, edge.predicate))
    frontier = sorted(
        ((t, n, referrers[t]) for t, n in dangling.items() if n >= 2),
        key=lambda x: x[1], reverse=True)          # demand rule: n >= 2
    if not frontier:
        empty_rounds += 1; continue
    empty_rounds = 0
    for batch in chunk(frontier[:WAVE_SIZE], size=30):
        pages = spawn_author(batch, spec, whitelist)
        if validate(pages).errors == 0:            # INV-1
            commit(pages)
        else:
            requeue(batch)                          # never merge on error
```

Growth converges: authoring a dangling target resolves it but MAY introduce new
lower-ranked danglers, so the frontier shrinks in ranked order. Each page's
`referenced_by` context is preserved, so a class traces back to its demand.

---

### 5.4 WAVE N: enrichment (centrality x sparsity)

Enrichment deepens the pages that matter. It never adds a class and never touches
`subClassOf`; the backbone settled in WAVE 0/E/G MUST NOT drift under it.

Under R5 every tier's density floor is stated in the authoring spec and met when a
page is **first** written, so most pages are born at target depth and WAVE N stays
small. The reference build instead generated thin, then spent a 959-page,
~37M-token pass densifying hubs it could have specified up front.

Density tiers (authoring-time floors, stated in [templates/authoring-spec.md](templates/authoring-spec.md)):

| Tier | When | Relation floor | Body floor |
|---|---|---|---|
| `stub` | leaf nothing points at yet | >= 2 typed relations | definition + one section |
| `standard` | normal concept | >= 6 typed relations | definition + 3 sections |
| `hub` | referenced by many pages | >= 20 typed relations | definition + 5 sections |

Protocol:

1. Rank thin pages by inbound-wikilink centrality x relation sparsity. A page many
   others point at that itself declares few relations is a starved hub; enriching
   it repays the most edges per token (`Weather Window` ranks high).
2. Enrich in batches of ~40, one page per author, spine-preserving: add typed
   relations, axioms, prose, and references; never touch `subClassOf`.
3. Hold the validator at 0 errors per commit (INV-1); a failing batch is re-run.
4. Stop when the top-ranked page is above its tier floor for K rounds (§8). The
   reference densification ran this shape, validator green on every batch commit
   across the 959-page hub campaign.

---

## 6. Review policy (risk-weighted)

Review depth follows risk; the human is scarce and uniform depth wastes it where
risk is lowest (R7).

- Concept pages (WAVE G, WAVE N) are cheap to accept and fix: the verifier checks
  every batch against measurement (INV-7), the operator human-samples.
  `review_policy: sampled`.
- Grounding claims (WAVE E) are expensive to get wrong, since a wrong Individual is
  a wrong fact about the real business. Every extraction batch carries a human
  audit of a sample sized by confidence, every promotion a full review (§5.2).
  `review_policy: sampled` for extraction, `full` for promotion.

---

## 7. Failure modes and required behaviour

Each failure happened on the reference build; each lists its countermeasure and
the required behaviour on detection.

**F-1 Invented parents.** An author writes a plausible `subClassOf` slug with no
page, closing one dangling target while opening another.

- Countermeasure: the parent whitelist. An author MUST choose a parent from the
  supplied whitelist or from a class authored in the same wave.
- On detection: the author MUST abort the edit rather than emit an unwhitelisted
  parent, and the orchestrator requeues the slug. The reference build needed a
  fallback rule (`R5DomainRootFallback`) only because parents went missing at
  scale; a whitelist makes invention impossible (R1).

**F-2 Self-report drift.** An author reports success on work it did not complete;
under-production emits no error signal. Reference agent self-reports were wrong
three times in one day.

- Countermeasure: the verifier re-parses the artefact and gates on
  `expected == actual`, never on the absence of an error message
  ([04-quality.md](04-quality.md) Law 3, Law 8).
- On detection: the round is rejected and re-run. A friendly review approves what
  an adversarial one catches; use the adversarial one.

**F-3 Parallel races on shared hubs.** Two authors in one wave both reach for the
same concept and mint two pages, or two IRIs, for it.

- Countermeasure, two parts: the deterministic slug law makes both authors compute
  the same `@id`, so a collision is detectable rather than silent; and one writer
  per artefact (INV-3) assigns each slug to exactly one batch.
- On detection: the orchestrator MUST reject the second writer and reassign, never
  merge two files for one slug (7,900 orphan files taught this rule).

**F-4 Format variance.** Two blocks that differ only in whitespace or key order
carry the same fact, but a text-matching consumer sees two different things.

- Countermeasure: authors reproduce the template verbatim, and every consumer
  parses (INV-2). `"vc:public": true` and `"vc:public":true` are one fact.
- On detection: fix the consumer to parse, never the data to match the grep (a
  whitespace-sensitive grep dropped 653 public pages, [04-quality.md](04-quality.md) Law 1).

---

## 8. Convergence

A wave type is **dry** after K consecutive rounds that produce nothing new (K = 3
by default). Each wave type stops independently on its own signal.

| Signal | WAVE E | WAVE G | WAVE N |
|---|---|---|---|
| new Individuals accepted | -> 0 | n/a | n/a |
| refs >= 2 frontier size | n/a | -> 0 | n/a |
| pages below tier floor | n/a | n/a | -> 0 |
| validation errors | 0 every round | 0 every round | 0 every round |
| dangling singletons | n/a | published, not chased | n/a |

Validation errors are 0 every round: that is INV-1, a gate, not a signal. The
convergence signals are the frontier sizes. A wave type is done when its frontier
has been empty for K rounds and the gate is still green.

---

## 9. Economics as calibration datapoints

Cost scales with page count x relation density x verification depth; the three
multiply. Reference datapoints, to extrapolate a budget rather than guess it:

| Wave | Reference datapoint | Cost driver |
|---|---|---|
| Seed | tens of pages, fully reviewed | operator time, not tokens |
| Extraction | scales with lake rows x audit-sample size | human review, not model tokens |
| Growth | seed grown to 7,874 classes | page count; short pages, cheap each |
| Enrichment | 959 hub pages, ~37M subagent tokens | ~39k tokens/page at hub depth |

Bulk growth authored thousands of short, lightly verified pages cheaply; hub
enrichment spent ~37M tokens on 959 pages, ~39,000 each, on research, axioms, and
long prose. Two regimes an order of magnitude apart on one corpus; the difference
is verification depth, so budget it per density tier and match the worker model to
depth (Sonnet for the bulk, Opus for hard synthesis, Haiku for the shallowest).
Under R5, authoring to the tier floor moves this cost forward into cheaper growth.

The reference corpus at rest: 7,874 classes, 258,200 triples, 98,776 resolvable
edges, 6 domains, 34 categories, 0 individuals, 1,401 multi-parent classes, 454
cross-category and 153 cross-domain bridges, ~18s build, mostly AI-generated under
human direction by design. The 0 individuals is the gap WAVE E exists to close.

---

## 10. Pre-spawn checklist

Contracts before content: every item below runs before the first content page is
authored (R1). Retrofitted, each costs a repair wave; stated up front, a line.

- [ ] Seed reviewed page by page: root, single domain axis, domain roots with
      boundary statements, frozen category list (§5.1).
- [ ] Authoring spec given to every author verbatim ([templates/authoring-spec.md](templates/authoring-spec.md)).
- [ ] Slug law deterministic and shared; one writer per file (INV-3).
- [ ] Parent whitelist generated from declared classes, shipped per batch.
- [ ] Namespace fixed; density tiers and their floors stated in the spec (R5).
- [ ] Validator gates every batch at 0 errors, plus a count gate on
      `expected == actual` ([templates/gate-config.md](templates/gate-config.md)).
- [ ] Grounding audit and promotion review staffed before WAVE E ([04-quality.md](04-quality.md) §4).
- [ ] Every wave declared with budget, expected yield, and abort threshold (§3).
- [ ] Convergence criterion (K dry rounds) set per wave type (§8).

With those in place the mesh runs itself: declare, extract, grow, enrich, verify,
re-measure, until each wave type is dry and the gate is still green. The result is
the corpus [../guides/reproduce.md](../guides/reproduce.md) builds: reasoner-clean,
densely connected, every assertion traceable to a lake row or a demand.
