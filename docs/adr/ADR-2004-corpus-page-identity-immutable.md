---
id: ADR-2004
title: Treat corpus page identity as immutable — no file moves, no archive tree
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: d09a476124caa14aa0165c642d0950f6026c46fb
owner: jjohare
review_trigger: any git-mv/rename of an ontology/pages file, or a proposal to introduce docs/archive/
repo: narrativegoldmine
domain: BASELINE-narrativegoldmine.md
lineage: generalises the single-file tactic in ADR-2001 (ADR-008/ADR-012 kept in place with frozen banners rather than git-moved) into a standing repo-wide invariant; supersedes no record but records the no-archive stance the consolidation took in place of a tombstone tree
---

# ADR-2004 — Treat corpus page identity as immutable — no file moves, no archive tree

## Context

The consolidation (ADR-2001) declined to `git-mv` the `ADR-008`/`ADR-012` Logseq
pages into an archive tree and created no `docs/archive/` at all — a one-off
tactic, justified inline, but never elevated to a rule. Standard ADR/doc hygiene
would relocate legacy records into an archive and rename pages for clarity. This
ADR formalises why that hygiene is *forbidden for the corpus*: because ADR-2002
fused the wiki with the ontology, a page's name is its identity — its slug
derives the class IRI (`urn:ngm:class:<slug>`) and every inbound `[[wikilink]]`
resolves by that name (`urn:visionflow:linked:<slug>`). Moving or renaming a page
silently re-keys a class and dangles every reference to it.

## Decision

A corpus page's path and name are **immutable identifiers**. Do not `git-mv`,
rename, or relocate any file under `ontology/pages/`; retirement is done in place
(a frozen banner at the top of the page, ADR-2001 step 3), never by moving it.
The repo keeps **no `docs/archive/` tree** — superseded decisions and history
live in git and in each record's own Context, not a tombstone directory. Any
genuine rename is treated as a breaking ontology migration: it must re-mint the
class IRI and rewrite every inbound wikilink and backlink in the same change.

## Consequences

- You cannot tidy the corpus by moving files; structural cleanup that would
  rename pages is off the table without a full IRI + backlink migration.
- Legacy corpus pages (`ADR-008`, `ADR-012`) stay physically where they are,
  forever, carrying a banner that says they are corpus content not governance.
- The OWL class IRIs and the `[[wikilink]]` graph the pipeline compiles stay
  stable across the consolidation and every future edit — the whole point.
- Forecloses archive-tree hygiene and rename-for-clarity; accepting either would
  break slug-derived IRIs and the backlink index the pipeline builds over the
  full page list.

## Verification

At `verified_commit` 6be5871c4:
- `docs/adr/PREAMBLE.md` states "There is no `docs/archive/`"; `ls docs/archive`
  does not exist.
- Name-derived identity: `ontology/pages/ADR-008.md` yields class
  `@id: urn:ngm:class:adr-008` and inbound refs of the form
  `urn:visionflow:linked:<slug>`; `pipeline/jsonld_parser.py:204` keys the page
  on its `vc:slug`.
- The pages were **not** moved by the consolidation: `ontology/pages/ADR-008.md`
  and `ADR-012.md` remain in place, each now headed by the
  "Frozen 2026-08-31 — corpus content, not a decision record" banner.

## Closeout extension — 2026-09-04

Work packages: CP-01/02/06/08. Owner remains `jjohare`; corpus, publisher and explorer maintainers own the relevant downstream boundaries. Existing accepted decisions and historical verification fields are preserved.

Corpus ADR-named pages remain at their original paths with frozen non-governance banners. The current authoring corpus is separately identified in visionGraph; historical identity preservation must not imply this checkout is the active authoring source.

**Acceptance condition:** Map page IDs, class IRIs, namespace handling and redirects across producer/export/consumer generations; preserve inbound references while documenting current authoring authority.

Dependencies: current-vault lineage, versioned export manifest and an explicitly identified consumer build. Reopen on corpus identity, parser/publication rules, exporter or release-gate changes. Evidence revision: `7bbf0aae2b60a63c2714b750e3b381bce6be7ad8`; local source/build/test evidence does not re-certify deployment.

See the [knowledge-production review](../../../VisionFlow/docs/estate-review/knowledge-production.md), [current-vault trace](../../../VisionFlow/docs/estate-review/authored-vault-transition.md) and [pipeline receipt](../../../VisionFlow/docs/estate-review/evidence/knowledge-snapshot.json).

## Acceptance progress — 2026-09-05

Addresses the CP-08 acceptance condition: *map page IDs, class IRIs, namespace
handling and redirects across producer/export/consumer generations; preserve
inbound references while documenting current authoring authority.*

### Identity map across the three generations

Nothing was moved or renamed; the invariant holds. What was missing was a
written, machine-checked map from an authored identifier to the form each
downstream generation serves.

| Generation | Page identity | Class identity | Inbound reference |
|---|---|---|---|
| **Producer** (`ontology/pages/*.md`) | file name; `vc:slug`; `urn:visionflow:page:<hash>` | `urn:ngm:class:<slug>` | `urn:visionflow:linked:<slug>` |
| **Export** (`dist/`) | `api/pages/<slug>.json`, `api/markdown/<slug>.md` | `https://narrativegoldmine.com/class/<slug>` | remapped to the same HTTP form |
| **Consumer** (WasmVOWL) | — | `class[].id` / `class[].iri`, the HTTP form | `property[].domain` / `.range`, the HTTP form |

The remapping is `pipeline/jsonld_to_webvowl.py::_remap_iri`;
`pipeline/visibility.py::terminal_slug` recognises **both** the authored URN
prefixes and the remapped HTTP prefixes, so a policy built from source pages
still resolves an identifier that has already crossed a generation boundary.
That symmetry is what lets the release gate scan post-remap artefacts for
pre-remap private identifiers.

**Redirects:** none exist and none are introduced. Because page identity is
immutable there is nothing to redirect *from*; a genuine rename remains the
breaking migration this record describes.

### Inbound references are preserved and now proven so

- `pipeline/contracts/class-identity.txt` commits the sorted set of all 8,138
  class IRIs. Any rename or re-key shows up as a paired
  `missing:`/`added:` diff in the release gate, which is exactly the failure
  mode this ADR forbids — previously invisible to a count that stayed at 8,138.
- `test_equal_count_substitution_passes_the_count_but_fails_the_identity_set`
  is the direct regression test for a re-keyed class.
- The two corpus `ADR-008`/`ADR-012` pages remain at their original paths with
  their frozen banners; the census confirms 8,138 input files → 8,138 parsed
  pages, balanced, zero rejected.

### Current authoring authority

Recorded so that preserved identity is not misread as active authorship: **this
checkout is the extracted publisher, not the active authoring corpus.** The
current producer is the separately identified visionGraph vault
([current-vault trace](../../../VisionFlow/docs/estate-review/authored-vault-transition.md)).
Historical identity preservation here governs what this repository publishes; it
makes no claim about where pages are authored today. The generation manifest
(`api/generation-manifest.json`) records the source revision, branch, remote and
dirty flag with every export, so an artefact can be traced to the tree that
produced it rather than assumed to come from the authoring source.

### Tests and results

`test_release_gate.py::test_a_dropped_class_fence_moves_both_count_and_identity`,
`::test_equal_count_substitution_…`, `::test_artefact_level_substitution_…`;
`test_visibility.py::test_policy_classifies_private_and_public_entities` covers
identifier resolution across both namespace forms. Suite: **85 passed**. Census
on the real corpus: 8,138 / 8,138, balanced, 0 rejected, 0 excluded.

### Governed paths changed

`pipeline/visibility.py`, `pipeline/release_gate.py`, `pipeline/contracts/`,
`pipeline/manifest.py`, `docs/BASELINE-narrativegoldmine.md`.
No file under `ontology/pages/` was moved, renamed or relocated.
`verified_commit` unchanged.

### Remaining

- The upstream publisher's inferred-RDF export writes the `urn:` form where the
  asserted export writes HTTP; that divergence lives outside this repository and
  is recorded, not resolved, here.
- Explorer consumer identity is verified for the `class`/`property` shape; one
  producer-side-unresolvable typing divergence is owned by WasmVOWL (ADR-2001).


## Publication baseline re-verification — 2026-09-07

Re-read against pipeline source at `d09a476124caa14aa0165c642d0950f6026c46fb`. The four-record ledger, class/individual distinction, immutable corpus identities and 8,138-class tripwire remain the scoped decisions. The canonical builder now projects known-private references before inference and public Markdown export, refuses malformed input in either mode, and preserves prior output through promotion rollback. The baseline/build guide now describe those current boundaries and distinguish fresh manifest UUID/time from deterministic graph ordering. `./.venv/bin/python -m pytest pipeline/tests -q` passes **96 tests**; the ADR generator validates all four records. Historical measurements, missing upstream documents and consumer limitations above remain dated evidence. No decision or activation axis was promoted by this re-verification.
