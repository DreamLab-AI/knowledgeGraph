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

## Closeout extension — 2026-09-04

Work packages: CP-01/02/06/08. Owner remains `jjohare`; corpus, publisher and explorer maintainers own the relevant downstream boundaries. Existing accepted decisions and historical verification fields are preserved.

CI compares two written class counts against EXPECTED_CLASSES and separately invokes validation. The build function itself logs validation errors without blocking. A count can remain unchanged despite substituted identities or altered publication visibility.

**Acceptance condition:** Preserve the independent count tripwire and add identity-set/schema/publication checks. Inject equal-count substitution and malformed input; demonstrate the actual release path rejects invalid artefacts.

Dependencies: current-vault lineage, versioned export manifest and an explicitly identified consumer build. Reopen on corpus identity, parser/publication rules, exporter or release-gate changes. Evidence revision: `7bbf0aae2b60a63c2714b750e3b381bce6be7ad8`; local source/build/test evidence does not re-certify deployment.

See the [knowledge-production review](../../../VisionFlow/docs/estate-review/knowledge-production.md), [current-vault trace](../../../VisionFlow/docs/estate-review/authored-vault-transition.md) and [pipeline receipt](../../../VisionFlow/docs/estate-review/evidence/knowledge-snapshot.json).

## Acceptance progress — 2026-09-05

Addresses the CP-06 acceptance condition: *preserve the independent count
tripwire and add identity-set/schema/publication checks; inject equal-count
substitution and malformed input; demonstrate the actual release path rejects
invalid artefacts.*

### The count tripwire is preserved exactly

`EXPECTED_CLASSES` remains a hand-typed constant in
`.github/workflows/build.yml`, asserted against `stats.json` and
`ontology.json` — the artefacts the pipeline wrote, not its stdout. Nothing here
auto-derives it; the property this ADR ratifies (an independently-authored
number cannot move with the regression it is meant to catch) is intact. The
workflow comment now says so at the definition site.

### What was added on top

`pipeline/release_gate.py`, with `pipeline/contracts/class-identity.txt`
(8,138 sorted class IRIs) and `class-identity.json` (count, SHA-256 of the set,
canonical repository identity). Four checks:

1. **Counts** — both written figures against the hand-typed pin, *and* the pin
   against the committed set size. A disagreement between them is itself a
   failure, so the two cannot drift apart.
2. **Identity** — exact set comparison, reporting missing and added IRIs. This
   is what a count cannot see.
3. **Schema** — the singular `class` key the explorer requires, string ids, and
   the merged consumer projection (see ADR-2001 / `explorer_compat`).
4. **Publication visibility** — census balanced with zero rejections, public
   page count against the contract, and a leak scan that **re-derives the
   private identifiers from source** and searches every public artefact for
   them. Private identifiers are never written into `dist` to be checked.

### Injections, and what the release path did

`pipeline/tests/test_release_gate.py` (12 tests):

| Injection | Count gate | Identity/visibility gate |
|---|---|---|
| Equal-count substitution (delete `gamma`, add `delta`) | **passes** — 3 = 3 | **fails** — `missing: …/gamma`, `added: …/delta` |
| Artefact-level id tamper, no rebuild | passes | fails — `impostor` reported |
| Malformed input page | n/a | strict build raises `BuildBlocked`; non-strict build still fails the gate on `rejected input file` |
| Dropped class fence | fails | fails |
| Altered publication visibility | — | fails — `publication visibility changed` |
| Private identifier injected into `search-index.json` | passes | fails — `private identifier` |
| Plural `classes` key | — | fails — `singular 'class'` |
| `EXPECTED_CLASSES` disagreeing with the set | fails — `both must move in one commit` | — |

The equal-count row is the headline: the count gate is asserted to **pass** in
that test, because demonstrating what the tripwire cannot see is the point of
adding the set beside it.

### CI wiring

`.github/workflows/build.yml`: the build now runs `--strict` (GATE 3 onward is
unchanged), plus **GATE 5** (`pipeline.release_gate … --expected-classes
"$EXPECTED_CLASSES"`) and **GATE 6** (`pipeline.manifest`, re-hashing the tree
against the recorded manifest). The strict build prints the input census.

### Tests and results

Full local run of the CI sequence at this revision: 85 tests passed; strict
build 8,138 classes / 265,796 triples / 101,321 resolvable edges; corpus
contract OK; validation 0 errors, 0 warnings, 1,403 info; release gate PASSED
(identity digest `f943cf6b8b6f…`); manifest OK. Receipt:
`docs/estate-closeout/2026-09-05/ci-gates.json`.

### Governed paths changed

`.github/workflows/build.yml`, `pipeline/release_gate.py`,
`pipeline/contracts/`, `pipeline/manifest.py`, `pipeline/tests/`.
`verified_commit` unchanged.

### Remaining

The identity set is regenerated deliberately
(`python -m pipeline.release_gate <dist> --pages ontology/pages --regenerate`)
and, like `EXPECTED_CLASSES`, is a standing maintenance cost by design: a corpus
edit that forgets it fails CI, which is the intended behaviour, not a bug.

## Execution qualification — 2026-09-07

The existing identity/count/schema gates now run over a shared public projection and fresh output staging. Every build mode rejects malformed/ambiguous publication input and validation errors before promotion; detailed rejected-file diagnostics are local authoring data, while published census/validation fields are aggregate-only. Title-form Markdown joins the existing slug aliases under the same privacy policy. Failed promotion rolls back generated trees; a second filesystem failure retains an explicit recovery directory. The full corpus still produces 8,138 classes and passes the committed identity set, schema, visibility and manifest checks locally. No deployment is inferred.

Evidence: [federation execution receipt](../../../VisionFlow/docs/estate-review/closeout/2026-09-07-execution-federation.md).
