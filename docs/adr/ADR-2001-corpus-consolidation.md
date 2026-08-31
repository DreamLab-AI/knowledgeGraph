---
id: ADR-2001
title: Consolidate ADR corpus into a living baseline and thin ledger
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: 4886fbb3d
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
