# 04: Quality gates and corpus honesty

This document is written to be included in agent context verbatim. It is the
quality contract for a grounded domain ontology: validator severities, the CI
gate set, grounding checks, the review protocol, and the honesty obligations an
authoring or verification agent MUST obey. Every rule was paid for by a named
incident in the reference corpus (7,874 classes, 0 individuals, built mostly by
AI under human direction); the incident stays beside its rule as evidence.
Reference figures are exact; offshore-wind counts are illustrative and marked so.
Deep reference detail: [../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md),
[../reference/jsonld-schema.md](../reference/jsonld-schema.md).

---

## 1. Terms and value sets

One term per concept, defined once, used identically throughout. Each value set
below is closed.

- **severity**: `error`, `warning`, `info`. Only `error` sets a non-zero exit code.
- **method**: `extracted`, `inferred`, `authored`. Sole declaration of an
  entity's evidence stance.
- **reviewStatus**: `unreviewed`, `agent-verified`, `human-sampled`,
  `human-audited`. Computed from audit records, never authored.
- **tier**: `stub`, `standard`, `hub`. Derived (§4), never authored.
- **corpusNature**: `synthetic-ai-generated-human-directed`,
  `mixed-evidenced-and-authored`, `evidenced`.
- **confidence band**: partitions `confidence` in `[0, 1]` as band C `[0, 0.6)`,
  band B `[0.6, 0.85)`, band A `[0.85, 1]`.
- **evidenced** means `method in {extracted, inferred}`; **synthetic** means
  `method == authored`.
- **wave**: one budgeted generation or extraction batch
  ([03-generation.md](03-generation.md)).

Reference figures cited below are exact: 7,874 classes, 258,200 triples, 98,776
resolvable edges, 6 domains, 34 categories, 0 individuals, 1,401 multi-parent,
454 cross-category, 153 cross-domain.

---

## 2. Nine operating laws

Each law is a MUST, an evidence note, and a mechanical check. An agent that
cannot satisfy a law's check MUST NOT report the affected stage as complete.

### LAW-1 parse, never text-match

A consumer that reads a serialised format MUST parse it with the build's parser;
it MUST NOT select, filter, or count records by matching surface text.
**Check:** no gate, tool, or script greps surface text to select pages; the
public filter is a parsed `vc:public == true`, evaluated in exactly one place.

> **Incident.** A publish step filtered public pages with
> `grep -l '"vc:public": true'`. The corpus carries both `"vc:public": true`
> (spaced) and `"vc:public":true` (compact); the grep matched the first and
> dropped 653 public pages silently. The build reported success, because copying
> fewer files raises no error.

### LAW-2 severity is a claim about intent

A validator rule encodes an assumption. When the data violates it deliberately,
the rule reports the design as a defect: the agent MUST reclassify the rule's
severity and MUST NOT alter the data to silence it. **Check:** before any rule
is set at `warning` or above, the answer to "who acts on a hit, and what do they
change" MUST NOT be "nobody, the corpus is meant to be like this".

> **Incident.** Multiple inheritance is legal in OWL 2 EL and, in this corpus,
> deliberate: classes bridge categories and domains on purpose, so the taxonomy
> is a lattice. A `MULTI_PARENT` rule fired at `warning` 958 times against a
> corpus doing exactly what it was built to do, and "0 errors, 958 warnings" was
> published. Reclassifying `MULTI_PARENT` to `info` (detection unchanged, claim
> changed) yielded a clean read of 0 errors, 0 warnings, 1,401 info.

### LAW-3 gates assert counts, not the absence of errors

A stage that under-produces raises no exception and writes no malformed file.
Every count gate MUST assert `expected == actual`, both sides read from build
artefacts, never from log output. **Check:** the expectation is computed over
the same population the stage writes (the reference mirror gates public
non-empty-body pages, 7,823, not 7,874).

> **Incident.** A count gate comparing the published mirror against a
> parser-recomputed count caught two defects it was never designed for: a
> double-writer race (LAW-4) and a stale cumulative deploy (LAW-5). The gate
> pins `EXPECTED_CLASSES: '7874'` against two artefacts, not stdout.

### LAW-4 one writer per artefact

Each output artefact MUST have exactly one writing process. **Check:** for every
published artefact, one process writes it, and its count gate (LAW-3) names that
process.

> **Incident.** Two stages wrote into one markdown mirror directory, producing
> about 7,900 files no count could be asserted against, because neither writer
> owned the total. A count gate can only assert a total one process produces.

### LAW-5 build clean

Every build MUST run against an empty output directory; committed artefacts are
products, never build state. **Check:** the build deletes and recreates its
output root before writing.

> **Incident.** A deploy built on top of a checked-in output directory. Pages
> deleted from source survived in the stale tree and were republished on every
> deploy, indefinitely.

### LAW-6 one slot cannot hold two memberships

A compact format with a single fixed field per record MUST NOT be treated as
authoritative for a field that legitimately holds several values. Full
membership MUST be published in a lossless sidecar, and the authoritative
artefact MUST be named. **Check:** any compact format ships that sidecar, and a
documented line names which artefact is authoritative for membership.

> **Incident.** The binary tier format (NGG1) carries one `u16` category per
> node. Bridging classes belong to several categories, so the packer kept the
> nearest by ancestry depth and dropped the rest with no warning. The dropped
> memberships survive only in `bridges.json` (542 classes) and 90 weighted
> category-to-category edges in `overview.json`.

### LAW-7 calibrate on samples before bulk operations

Any transform to be run over the corpus MUST first run on a stratified sample
whose output is inspected before the bulk run. **Check:** each bulk operation
names its calibration sample and the inspection that cleared it.

> **Incident.** Enrichment ran in batches of 40 under a queen, about 37M tokens
> for 959 hub pages across 24 commits, the validator held at 0 errors on every
> commit. A validator-breaking batch was caught at 40 pages, not 959.
> Calibration (CRF, quantisation) on samples preceded every bulk pass.

### LAW-8 verify agent self-reports independently

An agent's report of what it did is a claim; it MUST be confirmed against the
artefact before it is trusted. **Check:** every self-reported count or pass is
re-derived from the artefact by a separate code path before promotion.

> **Incident.** Self-reports were wrong three times in one session: a "done, all
> pages written" that had written fewer, a "0 errors" that had not run the
> validator, a count that did not match disk. Each was caught by re-running the
> measurement.

### LAW-9 adversarial verification over friendly review

Verification MUST attempt to prove the artefact wrong; a check that only confirms
the expected outcome is not a gate. **Check:** every stage carries at least one
check written to break it, not to approve it.

> **Incident.** Friendly review passed builds the count gate, the golden
> byte-fixture and the smoke test then failed: a blank canvas that passed every
> unit test, a well-formed zero-node data file, an unreachable keyboard route.
> Each was a property of the assembled artefact only an adversarial check saw.

---

## 3. Validator severity contract

Three severities, one firm rule for each. Assigning a rule to the wrong severity
publishes the design as a defect list (LAW-2).

**`error` blocks the build and sets the exit code.** Reserve for violations that
make an entity unusable or ambiguous under every possible design: missing
identity (`MISSING_CLASS_IRI`, `MISSING_PAGE_IRI`, `MISSING_SLUG`), missing
label, self-referential parent, duplicate IRI, and `QUALITY_ASSERTED` (§4). An
`error` states: no correct corpus contains this.

**`warning` surfaces, does not block, and names an actor.** A `warning` is debt:
probably wrong, fixed by changing the data. Unknown or missing domain, a schema
version below current, a parent slug disagreeing with its label, a page below
its tier density target. A warning count that never falls is either a backlog
nobody works or a severity nobody has questioned; in the reference corpus it was
the second, 958 times.

**`info` surfaces, is counted, and is never acted on. This is what the corpus
is.** `info` enumerates a design property so it is visible and auditable without
being mistaken for debt. `MULTI_PARENT` is canonical: the only per-class listing
of bridging, its count (1,401) cross-checked against the emitter's
`bridging.multiParent`. For a data-lake corpus add `SYNTHETIC_ENTITY` (authored,
no grounding) and `UNGROUNDED_INDIVIDUAL` (an Individual with no source
locator), so the synthetic/evidenced split is a validator output, not a manual
audit.

**Changing a rule's severity is a schema decision, not a lint tweak.** A
severity change alters what every downstream count means and MUST be recorded
alongside the schema, reviewed by the operator, and reflected in the honesty
numbers (§8). An agent MUST NOT change a severity to make a build pass.

One exit code, three severities: only `error` sets it. Both the build entry
point and the standalone validator MUST end on
`sys.exit(1 if report.errors else 0)`, checking the same condition through two
code paths. A `--json` flag writes the full report (`total`, `public`,
`by_code`, `issues[]`) without touching the exit code.

---

## 4. Computed quality signals

No entity block carries an author-asserted quality float. Quality is derived
from the graph at build time and written to a quality artefact, never to a page.

> **Incident.** The reference authoring spec hardcoded `quality: 0.72` into the
> template. The number meant nothing and was propagated corpus-wide.

**INV-Q1.** An entity block MUST NOT contain a `quality`, `score`, or
`confidenceScore` field distinct from the grounding `confidence`. A validator
rule `QUALITY_ASSERTED` fires at `error` on any such field.

**INV-Q2.** Every quality signal below is computed from artefacts, reproducible
from the published graph alone:

| Signal | Formula | Domain |
|--------|---------|--------|
| `relationDensity(p)` | count of resolvable typed edges out of page `p` | integer >= 0 |
| `groundingCoverage(e)` | resolvable `sources` of `e` / total `sources` of `e` | `[0, 1]` |
| `reviewStatus(e)` | max audit level recorded for `e` | the enum in §1 |
| `inboundCentrality(p)` | count of distinct pages whose edges resolve to `p` | integer >= 0 |

**INV-Q3.** `tier(p)` is derived, not authored:
`tier = hub if inboundCentrality(p) >= H or relationDensity(p) >= D_hub;
stub if relationDensity(p) < D_stub; else standard`. The thresholds
`H`, `D_hub`, `D_stub` are pinned constants set once per corpus. A `standard` or
`hub` page whose `relationDensity` is below its tier target raises the
`warning`-level density signal (see the density contract in
[03-generation.md](03-generation.md)); the check is at authoring time, not after
a separate enrichment wave.

**INV-Q4.** Corpus-level quality is the aggregate of the above
(`meanRelationDensity`, `groundingCoverage`, the `reviewStatus` histogram,
centrality distribution), written to `stats.json`. It is a measurement, and it
MUST agree with the validator's info counts (§8) on any figure both report.

---

## 5. CI gate set and the wind expected-count contract

Gates run cheapest-first, so a leaked credential or a broken unit test fails in
seconds, not after a multi-megabyte serialisation. Six gate classes cover a
data-lake corpus; the authoritative per-gate checklist is
[templates/gate-config.md](templates/gate-config.md).

| # | Gate | Catches | Cost |
|---|------|---------|------|
| 1 | Secret scan | credential-shaped strings in a corpus shipped verbatim | ms |
| 2 | Pipeline unit tests | serialiser byte layout, consumer-contract shapes | ~1 s |
| 3 | Count contract | silent parse regression and under-publication (LAW-1, LAW-3) | s |
| 4 | Validation | schema and reference errors; exit code | s |
| 5 | Grounding checks | broken locators, out-of-range confidence, drift (§6) | s to min |
| 6 | Honesty assertion | published synthetic/evidenced split matches the validator (§8) | s |

**Secret scan.** Every pattern MUST anchor to a token-shaped suffix. Bare `sk-`
matches 1,107 innocent files in the reference corpus (risk-, task-, disk-);
anchored `sk-[A-Za-z0-9]{20,}` matches 0. Under `bash -e`, capture as
`hits=$(grep …) || rc=$?` so grep's exit 1 (clean) does not abort the step;
treat exit 2+ as a scan error, never a clean pass.

**Count contract, wind exemplar.** The LAW-3 gate needs a pinned number.
Illustrative seed sketch for the six offshore-wind domains, to show the shape,
not a measured corpus:

| Domain | Seed classes (illustrative) |
|--------|-----------------------------|
| asset-engineering | 60 |
| marine-operations | 45 |
| energy-markets | 40 |
| environment-consenting | 35 |
| commercial-finance | 40 |
| hse-workforce | 30 |
| **Total** | **250** |

```yaml
env:
  EXPECTED_CLASSES: '250'      # a contract, not a measurement; move it deliberately
  EXPECTED_INDIVIDUALS: '0'    # rises as ABox extraction lands (see R2, 02-schema.md)
```

The gate reads `stats.json["classes"]` and the emitted class-array length and
asserts both equal `EXPECTED_CLASSES`. When a demand-driven wave adds bridging
concepts (Weather Window, Curtailment, Cable Failure), the count moves and the
constant is re-pinned in the same commit that explains the move, as the
reference constant went `'7457'` to `'7874'` when a repair pass added 417 pages.
An agent MUST NOT move the constant without a corpus change in the same commit.

**Validation gate.** Runs the §3 validator; `error` blocks. With 40 parallel
authors from one `AUTHORING_SPEC`, `SELF_REFERENCE` and `DUPLICATE_IRI` matter
more than in a single-author graph; [01-discovery.md](01-discovery.md) has the
spec that prevents most slug collisions before validation catches the rest.

**Smoke, if the corpus renders.** A visual explorer needs an end-to-end smoke
that serves the built directory and drives it headless (LAW-9): hard-fail on a
zero-height canvas, empty `nodes[]`, an unreachable focus route, a long task
over 250 ms, or a heap over 512 MB. A gate that flakes is worse than no gate.

---

## 6. Grounding checks

The reference corpus has 0 individuals and no grounding block, so none of this
ran there; it is stated design, not solved fact. A data-lake corpus carries an
ABox of real things (turbines, work orders, vessels) and, on every entity
claiming to be evidenced, the grounding block defined normatively in
[02-schema.md](02-schema.md): `sources[]` (each with `dataset`, `locator`,
`query`/`field`, `retrievedAt`), a `method`, and a `confidence`. Three checks
run in gate 5 on every build.

**GC-1 locator resolves.** Every `sources[].locator` MUST resolve against a
manifest of the lake's addressable objects. CI does not read the lake; it
asserts the locator is well-formed and names a dataset and key the manifest
knows. A locator pointing at a renamed dataset or a purged key is a dangling
grounding reference, the ABox analogue of a dangling `subClassOf`. Violators
count MUST be 0; an evidenced claim whose evidence cannot be found is worse than
an honestly authored one.

**GC-2 confidence bounded and method honest.** `confidence` MUST be in `[0, 1]`.
`method: extracted` MUST carry at least one source pointing at a lake record.
`method: inferred` MUST name at least one lake source as its input.
`method: authored` MUST NOT carry lake-shaped `sources` (INV-7,
[02-schema.md](02-schema.md)); its `sources` MAY be empty or MAY cite a non-lake
standard, and its `confidence` expresses editorial confidence, not evidential
weight. A mismatch (an `authored` entity carrying a lake source, an `extracted`
or `inferred` entity carrying none, a `confidence` outside `[0, 1]`) is an
`error`: the entity is misdeclaring its own provenance, and the §8 honesty
framing depends on `method` being trustworthy.

**GC-3 extracted claims spot-checked against the lake.** CI cannot re-derive
every extracted field, so it samples per the §7 protocol, resolves each sampled
locator against the live lake, and compares stored value to current value. Drift
above the §7 threshold fails the build; below it, the sample and rate are logged.
This is LAW-7 as a standing gate: it catches an extractor that changed behaviour
or a lake that moved before either propagates. For a Cable Failure record
grounded in an incident report, GC-3 confirms the cited work-order still carries
the cited failure mode.

---

## 7. Risk-weighted review protocol

Concept pages are cheap to accept and cheap to fix: an agent verifies every one,
a human samples. Grounding claims about the business are expensive to get wrong:
every extraction wave carries a human audit sized larger the lower the
confidence. Uniform review depth wastes the human where risk is lowest.

**Class pages (no grounding).** Agent-verified at 100% against the §3 validator.
Human-sampled at `n = ceil(sqrt(N))` pages per wave, minimum 10, where `N` is
the wave's page count. Accept the wave when the sample carries 0 structural
errors and 0 conceptual-placement disputes; a single dispute escalates to
operator review of the disputed subtree only.

**Grounding extraction waves.** Sample per confidence band (§1), because a
band-A claim is cheap to trust and a band-C claim is not:

| Band | confidence | Sampled fraction | Minimum n |
|------|-----------|------------------|-----------|
| C | `[0, 0.6)` | 100% | all |
| B | `[0.6, 0.85)` | 20% | 15 |
| A | `[0.85, 1]` | 5% | 8 |

**Acceptance thresholds, per band.**

1. GC-1 locator-resolution failures in the sample MUST be 0. Any failure is a
   hard reject of the wave.
2. GC-3 value-drift within a band MUST be at or below 5%. Above 5%, escalate
   that band.

**Escalation ladder.**

1. A band over its drift threshold escalates to a full audit of that band.
2. If the full-band drift exceeds 10%, reject the wave, re-seed the extractor,
   and calibrate on samples (LAW-7) before any re-run.
3. Any GC-2 provenance mismatch found in review blocks promotion of the whole
   wave until zero, because it corrupts the honesty numbers.

**Recording.** Every audit writes the sampled locators, the observed drift, and
the resulting `reviewStatus` (§1) to the wave record. `reviewStatus` is set from
that record, never asserted by the authoring agent (LAW-8).

---

## 8. Corpus-honesty obligations

A corpus that overstates its curation is worth less than one that states its
limits: the first cannot be trusted on anything, the second can be trusted
exactly as far as it claims. Credibility is not divisible; a grounding field
right 95% of the time is treated as wrong, because the reader cannot tell which
5% to distrust. The honesty numbers are therefore machine-readable and gated.

**HON-1 `corpusNature` travels with the data.** The banner a site renders MUST
be driven from the data, not from hardcoded copy. The reference corpus pins
`provenance.corpusNature == "synthetic-ai-generated-human-directed"` and
`stats.json["corpus"]["nature"] == "synthetic"` by unit test (gate 2), so the
framing cannot silently become "authoritative encyclopaedia". A `did:nostr`
attribution, a `generatedAtTime` and URN identifiers attest traceable generation
under human direction, not human authorship.

**HON-2 the synthetic/evidenced split is published in stats.** A data-lake
corpus is mixed. The split MUST be published as numbers in `stats.json`,
computed from the grounding blocks GC-1 through GC-3 validate:

```json
"provenance": {
  "corpusNature": "mixed-evidenced-and-authored",
  "grounding": { "extracted": 1840, "inferred": 610, "authored": 430,
                 "individuals": 2880, "meanConfidence": 0.79 }
}
```

**HON-3 two code paths MUST agree.** The published split MUST equal the
validator's info counts (`SYNTHETIC_ENTITY`, `UNGROUNDED_INDIVIDUAL`) computed
on a separate path, the same cross-check that ties `MULTI_PARENT` (1,401) to
`bridging.multiParent` in the reference build. Divergence fails the build for the
reason a missing IRI does: the artefact is making a claim that is not true.

A reader wanting only evidenced entities filters
`method in {extracted, inferred}` and `confidence >= 0.7`; a reader building a
demo takes everything. Neither is misled, because the field is queryable. Gate 6
is the cheapest of the six and the most expensive to skip.

---

## Cross-references

- Per-gate authoring checklist: [templates/gate-config.md](templates/gate-config.md)
- Reference gates, incidents and commands: [../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md)
- Validation codes and the format they check: [../reference/jsonld-schema.md](../reference/jsonld-schema.md)
- Pipeline stages and the NGG1 format that drops memberships: [../architecture/pipeline.md](../architecture/pipeline.md)
- Clone-to-render reproduction: [../guides/reproduce.md](../guides/reproduce.md)
- How the corpus was generated: [../methodology/corpus-generation.md](../methodology/corpus-generation.md)
- Why one file carries two readers: [../methodology/the-hybrid-approach.md](../methodology/the-hybrid-approach.md)
- Playbook: [01-discovery.md](01-discovery.md) · [02-schema.md](02-schema.md) · [03-generation.md](03-generation.md) · [05-publication.md](05-publication.md)
