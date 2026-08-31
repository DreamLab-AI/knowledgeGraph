---
id: ADR-2003
title: Gate corpus integrity with a hand-typed EXPECTED_CLASSES tripwire
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: 6be5871c4
owner: jjohare
review_trigger: any proposal to auto-derive the class count, or to wire this gate into a corpus-editing workflow
repo: narrativegoldmine
domain: BASELINE-narrativegoldmine.md
lineage: distils the ADR-LCR-01 §D11 validator-gate lineage (whose gate never ran — all 2,833 manifest entries record validator_outcome "not-run", per docs/methodology/corpus-generation.md); this record replaces that dormant gate with a live count contract
---

# ADR-2003 — Gate corpus integrity with a hand-typed EXPECTED_CLASSES tripwire

## Context

The pipeline already computes the class count, so a CI gate could simply emit it
and pass. The baseline lists the hand-typed `EXPECTED_CLASSES` pin under
divergences as a "wart" that "duplicates a figure the pipeline already computes"
— framing that invites a well-meaning engineer to replace it with an auto-count.
This ADR records why the duplication is deliberate, and what auto-computing would
quietly destroy: an auto-derived expectation moves *with* any parse regression,
so it can never detect one. The tripwire property requires an
independently-authored number.

## Decision

Corpus integrity is gated by a **hand-typed exact-count constant**,
`EXPECTED_CLASSES` in `.github/workflows/build.yml`, asserted in CI against the
counts the pipeline *wrote to disk* (`stats.json` classes and `ontology.json`
`class[]` length), not against its stdout. The expected number is authored by a
human and must move in the **same commit** as any corpus size change (baseline
Invariant 6). Auto-deriving, fuzzing to a range, or dropping the gate are all
rejected: only a fixed, externally-authored figure catches a silent drop of a
`json-ld` fence or a changed `is_public` filter as a hard failure.

## Consequences

- Every corpus change is a deliberate two-file edit (the pages **and**
  `build.yml`); forgetting the second half fails CI — which is the point, not a
  bug.
- A silent parse regression (dropped fence, broken public filter, class-count
  drift from ADR-2002's fusion) surfaces as a red build with a number, not a
  warning nobody reads.
- Costs: the pin is a standing maintenance tax and *will* go stale the instant a
  corpus edit forgets it; it is redundant with a computed value by design.
- Forecloses "just compute it" refactors — accepting them would trade the
  regression tripwire for a number that always agrees with the bug.

## Verification

At `verified_commit` 6be5871c4:
- `.github/workflows/build.yml:64` — `EXPECTED_CLASSES: '8138'`; read back at
  `:156` (`expected = int(os.environ["EXPECTED_CLASSES"])`).
- GATE 3 (`build.yml`, "Assert corpus contract") loads
  `dist-ci/data/graph/stats.json` and `dist-ci/data/ontology.json` and
  `sys.exit(1)`s unless `stats["classes"]` **and** `len(vowl["class"])` both
  equal `expected` — asserting against written artefacts, not stdout.
- `ls ontology/pages | wc -l` = 8138 confirms the pin currently matches truth.
