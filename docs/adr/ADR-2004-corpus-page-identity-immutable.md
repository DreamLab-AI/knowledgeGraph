---
id: ADR-2004
title: Treat corpus page identity as immutable — no file moves, no archive tree
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: 6be5871c4
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
