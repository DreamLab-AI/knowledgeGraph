# Gate config: Wind O&M corpus CI

This document is written to be included in agent context verbatim. It is the gate
set for a v3-profile corpus, project token `owf`, as a checklist with
expected-count placeholders. Wire these up before bulk generation, not after. Each
gate carries the incident that earned it; the placeholders in `{{DOUBLE_BRACES}}`
are constants set once the corpus shape is known and moved only deliberately.

Deep detail on the shipped gate implementation is in
[../../ci-cd/build-and-gates.md](../../ci-cd/build-and-gates.md); the pipeline
stages these gates read are in
[../../architecture/pipeline.md](../../architecture/pipeline.md).

Governing law for the whole set: **gate on expected == actual, not on absence of
errors.** Under-publication produces no error signal. A clean run that shipped
half the corpus is the failure a count gate catches and a "no errors" check does
not.

Publish early behind these gates. First publication is week one, tiny and gated,
then continuously. The reference corpus published late and large, and its worst
defects (a double-writer mirror, stale cumulative deploys, a 653-page silent drop)
accumulated invisibly until a count gate finally asserted reality.

---

## Wave budget declaration (before any wave)

Every generation or extraction wave declares a budget and an expected yield BEFORE
launch, and stops if acceptance falls below threshold mid-wave rather than
grinding. The reference corpus's cost was discovered afterwards, not managed.

```
waveBudget ::= {
  "wave":              string,        ; e.g. "abox-turbines-w3"
  "kind":              "seed" | "extraction" | "growth" | "enrichment",
  "tokenBudget":       integer,       ; hard ceiling for the wave
  "expectedYield":     integer,       ; pages or individuals expected accepted
  "acceptanceFloor":   float,         ; min accepted / attempted, 0..1
  "reseedTrigger":     "acceptance < acceptanceFloor over any 40-item batch",
  "sampleAuditPlan":   "per extraction-spec.md section 6 for extraction waves"
}
```

- [ ] Every wave has a `waveBudget` recorded before it starts.
- [ ] Mid-wave acceptance is measured per 40-item batch; a batch below
      `acceptanceFloor` stops the wave and forces a re-seed, not a grind.
- [ ] Actual token spend and actual yield are recorded against the declaration on
      wave close.

---

## Gate 1: Secret scan

- [ ] Repository history and working tree scanned for credentials before any build.
- [ ] Blocks on any hit.

## Gate 2: Pipeline unit tests

- [ ] Parser, validator, Turtle emitter and tier emitter unit tests pass.
- [ ] Determinism test: two builds of the same input are byte-identical.

## Gate 3: Corpus contract (expected == actual)

Assert counts against the artefacts the pipeline wrote (`stats.json`,
`ontology.json`), not against stdout. A dropped fence or a changed public filter
surfaces here as a failing number.

- [ ] `stats.json.classes` == `{{EXPECTED_CLASSES}}`
- [ ] `stats.json.individuals` == `{{EXPECTED_INDIVIDUALS}}`
- [ ] `stats.json.pages` == `{{EXPECTED_PAGES}}`
- [ ] `stats.json.domains` == `6`
- [ ] `stats.json.categories` == `{{EXPECTED_CATEGORIES}}`
- [ ] resolvable edges == `{{EXPECTED_RESOLVABLE_EDGES}}`

Incident: the reference contract constant caught two defects it was never designed
for, a double-writer producing orphan files, and cumulative stale deploys, because
each moved the actual count off the expected one. Move a constant only alongside an
explained corpus change.

## Gate 4: Validation (errors block, severity is a claim)

- [ ] `python -m pipeline.validate pages/` exits 0.
- [ ] Error codes (missing page IRI, missing slug, missing class IRI, missing
      label, self-reference, duplicate IRI) count == `0`.
- [ ] `MULTI_PARENT` is **info**, never a warning, and never blocks.

Incident: the reference validator reported deliberate multi-parent bridging as 958
warnings, so a clean corpus published itself as defective. When data deliberately
violates a rule's assumption, reclassify the rule; do not fix the data.

## Gate 5: Grounding coverage (v3 addition)

Every entity must be honest about its evidence.

- [ ] Entities with a `grounding` block == total entities (100%).
- [ ] Every `method: extracted` entity has non-empty `sources`, each with
      `dataset`, `locator`, one of `query`/`field`, and `retrievedAt`. Count of
      violators == `0`.
- [ ] Every `method: inferred` entity names at least one source. Violators == `0`.
- [ ] `confidence` on every entity is a number in `[0, 1]`. Violators == `0`.
- [ ] No entity carries `quality` or `qualityScore` in authored input; quality is
      computed downstream, never asserted. Violators == `0`.
- [ ] Extracted + inferred share of entities >= `{{MIN_EVIDENCED_FRACTION}}`
      (a target, not a hard fail, tracked over time).
- [ ] Authored-only count reported (not failed) so synthetic proportion is visible.

## Gate 6: Extraction audit (ABox, risk-weighted)

Grounding claims about the business are expensive to get wrong, so every
extraction wave is human-sampled before acceptance
([extraction-spec.md](extraction-spec.md) §6).

- [ ] Each extraction wave carries a human audit of a random sample sized by median
      confidence (5% / 10% / 20% bands; floors 20 / 30 / 50).
- [ ] Sampled `locator` values re-resolve against the live lake; `field`/`query`
      returns the asserted value; `method` is honest. Sampled failure rate
      <= `5%`, else the wave is rejected and re-run.
- [ ] Every proposed class from a cluster is named and approved by a human before
      promotion; no class ships at `status: pending-human-approval`.

## Gate 7: Bridge publication (bridging as data)

- [ ] `bridges.json` entry count == count of classes with >1 `subClassOf` parent.
- [ ] Every bridge crosses at least one category boundary; cross-domain bridges
      flagged separately.
- [ ] Expected bridge count == `{{EXPECTED_BRIDGES}}`; cross-domain == `{{EXPECTED_CROSS_DOMAIN}}`.

Law: publish full membership in JSON alongside any compact format. A binary tier
that carries a single category per node silently flattens a bridge; the JSON is
where the second and third memberships survive.

## Gate 8: Markdown-mirror count (single writer per artefact)

- [ ] Exactly one process writes the markdown mirror.
- [ ] Mirror file count == published page count == `{{EXPECTED_PAGES}}`.

Incident: two writers into one mirror produced 7.9k orphan files nobody could
assert against. One artefact, one writer.

## Gate 9: Build clean

- [ ] Build runs against an empty output directory, never over a prior checkout.

Incident: an incremental deploy over a stale checkout republished deleted pages
indefinitely. A stale output tree is a source of pages that no longer exist.

## Gate 10: Parse, never text-match

- [ ] Every consumer that reads pages parses the fenced `json-ld` blocks; no gate
      or tool selects pages by grepping surface text.
- [ ] The public filter is a parsed `vc:public == true`, checked in exactly one place.

Incident: a whitespace-sensitive grep dropped 653 public pages silently. If a
format permits variance, every consumer must parse it.

## Gate 11: External-alignment sanity (v3 addition)

- [ ] Every `sameAs` / `closeMatch` / `exactMatch` `@id` is a well-formed absolute IRI.
- [ ] External `@id` values resolve to a known namespace prefix (qudt, sosa, ssn,
      time, geo, saref, schema, or a declared IEC/ISO scheme); unknowns reported.
- [ ] No alignment `@id` is a bare namespace; each points at a specific term.

---

## Verification discipline (applies to all gates)

- Calibrate any bulk operation on a sample before running it over the corpus.
- Verify agent self-reports independently; on the reference operating record they
  were wrong three times in one day.
- Adversarial verification finds what friendly review approves. A gate that only
  confirms what you expected is not a gate.
