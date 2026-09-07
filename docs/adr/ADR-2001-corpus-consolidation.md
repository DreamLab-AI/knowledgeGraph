---
id: ADR-2001
title: Consolidate ADR corpus into a living baseline and thin ledger
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: d09a476124caa14aa0165c642d0950f6026c46fb
owner: jjohare
review_trigger: next corpus size change, or reconstruction of ADR-NG-001 into docs/adr/
repo: narrativegoldmine
---

# ADR-2001 — Consolidate ADR corpus into a living baseline and thin ledger

## Context

This repo had no coherent decision-record surface. What existed was three
disconnected things: (1) two Logseq pages, `ontology/pages/ADR-008.md` and
`ADR-012.md`, which are **not** decision records at all but auto-generated
ontology *class* definitions of the generic concept "ADR" (provenance
`did:nostr:lcr-swarm`, `inferenceRule: GapFillTier5`); (2) a genuinely
load-bearing but **absent** document, `ADR-NG-001`, cited by 30+ code and doc
files (e.g. `explorer/FORMAT-NGG1.md:3` links
`docs/adr/ADR-NG-001-explorer-architecture.md`) that never existed in this tree;
and (3) a `ADR-LCR-01`/`PRD-LCR-01`/`DDD-LCR-01` corpus-generation trio that
lives only in the upstream source repo. The real architecture was already well
documented in `docs/architecture/pipeline.md` and `explorer.md`, but nothing
tied them together as ratifiable ground truth, and the code cited an authority
that a reader could not open.

## Decision

Adopt the DreamLab consolidation shape:
1. A single living governing doc, `docs/BASELINE-narrativegoldmine.md`, is the
   normative ground truth (present tense, `file:line` citations, three-axis
   invariants, change process). The detailed `docs/architecture/*.md` remain
   non-normative references it governs.
2. `docs/adr/` is the thin forward ledger: `TEMPLATE.md` (three-axis status,
   `repo: narrativegoldmine`), `PREAMBLE.md` (routing prose), a generated
   `README.md` index, and numbered records from ADR-2001 onward.
3. The two `ADR-008`/`ADR-012` Logseq pages are **not** git-moved — doing so
   would break `[[wikilinks]]` and the OWL corpus the pipeline compiles. Instead
   each gets a frozen banner at the top pointing to `docs/adr/` and clarifying it
   is corpus content, not a decision record.
4. `ADR-NG-001` and the `LCR` trio are recorded as absent-but-cited legacy in the
   baseline and PREAMBLE; reconstructing `ADR-NG-001` into `docs/adr/` is left as
   a tracked open item rather than fabricated.

## Consequences

- Engineering agents get one lookup order: baseline → its code citations →
  ledger → archive-for-history-only.
- The pervasive `ADR-NG-001 §N` citations now resolve to a real reconstruction
  surface (baseline + `docs/architecture/explorer.md`) even though the original
  document is still absent; closing that fully is an open item.
- Because `ADR-008`/`ADR-012` stay in place, the OWL corpus and its 8,138-class
  CI pin (`EXPECTED_CLASSES: '8138'`) are untouched — the consolidation adds only
  a banner line to each.
- The stale `7,874`-page figures across `docs/architecture/*.md` are now
  explicitly flagged in the baseline's divergences section rather than silently
  trusted.

## Verification

Two separate things are attested here; do not conflate them.

**Facts about the code tree as of `verified_commit` 4886fbb3d** (the parent commit —
what the drift analysis was validated against, none of it authored by this ADR):
- Corpus size and CI pin: `ls ontology/pages | wc -l` = 8,138,
  `.github/workflows/build.yml:64` `EXPECTED_CLASSES: '8138'`.
- `ontology/pages/ADR-008.md` and `ADR-012.md` are auto-generated ontology *class*
  pages (`did:nostr:lcr-swarm`, `inferenceRule: GapFillTier5`), not decision records.
- `ADR-NG-001` is absent from the tree yet cited by 30+ files
  (`explorer/FORMAT-NGG1.md:3`).

**Artifacts introduced by this commit** (they did *not* exist at 4886fbb3d — they
are what this change adds, verified against the working tree before committing):
- `docs/BASELINE-narrativegoldmine.md`, `docs/adr/{TEMPLATE,PREAMBLE}.md`, this
  record, and `scripts/adr-index-gen.js` (copied, `repo` enum set to
  `narrativegoldmine`) are created here.
- `node scripts/adr-index-gen.js docs/adr` exits 0 and writes `docs/adr/README.md`
  (re-running is idempotent — byte-identical output).
- Frozen banners added at the top of `ontology/pages/ADR-008.md` and `ADR-012.md`;
  neither file was moved (`git mv` deliberately avoided so `[[wikilinks]]` and the
  OWL corpus stay intact).

## Closeout extension — 2026-09-04

Work packages: CP-01/02/06/08. Owner remains `jjohare`; corpus, publisher and explorer maintainers own the relevant downstream boundaries. Existing accepted decisions and historical verification fields are preserved.

The operative pack has four decisions. ADR-008/012 are explicitly labelled ontology content, and ADR-NG-001 remains absent-but-cited. Repository metadata uses the historical narrativegoldmine name.

**Acceptance condition:** Keep ontology pages in place, map historical names to the canonical repository identity, and resolve missing decision lineage without fabricating the absent record.

Dependencies: current-vault lineage, versioned export manifest and an explicitly identified consumer build. Reopen on corpus identity, parser/publication rules, exporter or release-gate changes. Evidence revision: `7bbf0aae2b60a63c2714b750e3b381bce6be7ad8`; local source/build/test evidence does not re-certify deployment.

See the [knowledge-production review](../../../VisionFlow/docs/estate-review/knowledge-production.md), [current-vault trace](../../../VisionFlow/docs/estate-review/authored-vault-transition.md) and [pipeline receipt](../../../VisionFlow/docs/estate-review/evidence/knowledge-snapshot.json).

## Acceptance progress — 2026-09-05

Addresses the CP-01 acceptance condition: *keep ontology pages in place, map
historical names to the canonical repository identity, and resolve missing
decision lineage without fabricating the absent record.*

### ADR-NG-001 resolution — classified `historical-absent`

`ADR-NG-001` is **not** reconstructed. Writing a decision record for a decision
this repository did not take would fabricate the authority the citations already
lack. It is instead classified `historical-absent` and each cited section is
mapped to the in-tree surface that carries its content today, so a reader
following a citation reaches a real document:

| Citation | Subject as cited | Surface that carries it now |
|---|---|---|
| `§2` | NGG1 binary tiers replacing the 39 MB WebVOWL monolith | `explorer/FORMAT-NGG1.md`, `pipeline/emit_graph_tiers.py` |
| `§3` | Worker-owned WASM CSR simulation, cross-origin isolation | `docs/architecture/explorer.md`, `explorer/rust-wasm/src/bindings/explorer.rs`, `explorer/modern/src/workers/` |
| `§4` | Instanced rendering — no per-node React component | `explorer/modern/src/components/Canvas/{NodesInstanced,EdgesSegments,LabelsTopN}.tsx` |
| `§5` | 2D/3D canvas modes | `explorer/modern/src/components/Canvas/GraphCanvas.tsx`, `explorer/modern/src/pages/GraphPage.tsx` |
| `§7` | Capability honesty matrix (every row carries evidence) | `explorer/CAPABILITIES.md`, `explorer/rust-wasm/tests/phase3_integration.rs` |
| `§9` | NGG1 schema note | `explorer/modern/src/lib/ngg1.ts` |

Measured at this revision: 33 files cite `ADR-NG-001`, across `§2`–`§9`
(`grep -rIl "ADR-NG-001"`). The `explorer/FORMAT-NGG1.md:3` link is left as a
dangling historical citation: it is doubly broken (`../../docs/adr/…` from
`explorer/` normalises above the repo root), and repairing the depth would only
point it at a file that is classified absent by design. The baseline's
divergences section records the classification.

### Repository identity mapping

`narrativegoldmine` is retained as the historical publishing name rather than
rewritten, because ADR-2004 makes those identifiers immutable: it is minted into
every class IRI (`https://narrativegoldmine.com/class/<slug>`), the `CNAME`, and
the corpus's own inbound references. The mapping is made explicit and
machine-checked instead:

- `scripts/adr-index-gen.js` now carries `REPO_IDENTITY`
  (`narrativegoldmine` → `DreamLab-AI/knowledgeGraph`), accepts either value in
  the `repo` enum, and prints the canonical identity into the generated index.
- `pipeline/release_gate.py` carries `CANONICAL_REPOSITORY` and
  `REPOSITORY_ALIASES`; the committed contract states both, and
  `test_contract_names_the_canonical_repository_identity` asserts it.

Existing ADR frontmatter is unchanged — the mapping resolves the name, it does
not churn four records.

### Implemented

- `pipeline/census.py` — every input file parsed / rejected-with-reason /
  excluded; totals must balance.
- `pipeline/visibility.py` — one redaction procedure consulted by every exporter.
- `pipeline/manifest.py` — versioned generation manifest per export.
- `pipeline/release_gate.py` — identity set, schema and visibility contracts.
- `pipeline/explorer_compat.py` — consumer-shaped ontology projection.

### Tests and results

`python -m pytest pipeline/tests -q` → **85 passed** (13 pre-existing, 72 added).
Full CI gate sequence run locally: strict build, corpus contract (8138),
validation (0 errors), release gate, manifest verification — all pass. Receipt:
`docs/estate-closeout/2026-09-05/ci-gates.json`.

### Consumer build, verified in a browser

The identified consumer build (`explorer/modern/dist`, prebuilt 2026-07-25) was
served locally over this build's artefacts and loaded in a real GPU browser
(ANGLE/Vulkan, RTX A6000) via the sidecar. Receipt and screenshots:
`docs/estate-closeout/2026-09-05/browser-check.json`, `explorer-*.png`.

The producer contract holds: `stats.json`, `overview.json`, `search-index.json`
and the page API are fetched and consumed by the SPA; `full.bin` parses as NGG1
with 8,138 nodes; the merged explorer projection carries the singular `class`
key with string `domain`/`range`. Zero console errors.

**Finding EXP-01 (consumer-side, not this repository).** `/graph` renders its
chrome and the app reports "40 nodes on screen", but the WebGL surface is empty
and, across the page's twelve resource requests, **no `.wasm` and no `.bin`
request is made** — the render path stalls downstream of the data, without
raising an error. This is the open acceptance item in WasmVOWL's own
`docs/adr/ADR-001`; it is recorded here as evidence and left with its owner. No
claim is made about the deployed site.

### Governed paths changed

`docs/BASELINE-narrativegoldmine.md`, `scripts/adr-index-gen.js`,
`docs/adr/README.md` (regenerated), `pipeline/`, `.github/workflows/build.yml`.
`verified_commit` is unchanged: this record's historical verification stands.

### Remaining

- `ADR-LCR-01` / `PRD-LCR-01` / `DDD-LCR-01` still live only in the upstream
  source repository; unchanged by this work.
- The stale `7,874` figures in `docs/architecture/*.md` are still stale.
- This is the extracted publisher, not the active authoring corpus; the
  visionGraph lineage is out of scope here.


## Publication baseline re-verification — 2026-09-07

Re-read against pipeline source at `d09a476124caa14aa0165c642d0950f6026c46fb`. The four-record ledger, class/individual distinction, immutable corpus identities and 8,138-class tripwire remain the scoped decisions. The canonical builder now projects known-private references before inference and public Markdown export, refuses malformed input in either mode, and preserves prior output through promotion rollback. The baseline/build guide now describe those current boundaries and distinguish fresh manifest UUID/time from deterministic graph ordering. `./.venv/bin/python -m pytest pipeline/tests -q` passes **96 tests**; the ADR generator validates all four records. Historical measurements, missing upstream documents and consumer limitations above remain dated evidence. No decision or activation axis was promoted by this re-verification.
