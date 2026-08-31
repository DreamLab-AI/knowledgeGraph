---
id: ADR-2002
title: Fuse corpus and ontology — a Logseq page IS an OWL class
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: 6be5871c4
owner: jjohare
review_trigger: any move to a separate ontology store, or a class authored outside ontology/pages
repo: narrativegoldmine
domain: BASELINE-narrativegoldmine.md
lineage: distils the ADR-NG-001 explorer-architecture reconstruction and the ADR-LCR-01/PRD-LCR-01/DDD-LCR-01 corpus-generation trio (summarised in docs/methodology/corpus-generation.md); the ADR-008/ADR-012 Logseq pages are the corpus specimens of this fusion, not authority
---

# ADR-2002 — Fuse corpus and ontology — a Logseq page IS an OWL class

## Context

The baseline records *that* every page in `ontology/pages/` carries a `Page`
block and a `Class` block; it does not ratify the *choice* to fuse the two, nor
what that choice forecloses. The obvious alternative was to keep the ontology in
its own store — a hand-maintained `.ttl`, a triple store, or a separate
`ontology/classes/` tree — and treat the wiki as mere prose over it. This ADR
pins the fusion as a deliberate, load-bearing decision so a future engineer does
not "clean it up" by splitting them.

## Decision

One markdown file in `ontology/pages/` is *simultaneously and inseparably* one
publication unit and one OWL 2 EL class. The class entity is co-located in the
same file as fenced `json-ld` (`@id: urn:ngm:class:<slug>`, `@type: Class`),
parsed into `PageData.ontology_class` by the single parser pass. There is **no**
second source of ontology truth: to add, retire, or re-parent a class you edit
its page, and the wiki's `subClassOf`/relation links **are** the ontology's
edges. The corpus is therefore an ontology testbed, not an encyclopaedia, and is
surfaced as synthetic-under-human-direction from data.

## Consequences

- Authoring an OWL class and authoring a wiki page are the same act; there is no
  drift between "the ontology" and "the content" because there is only one file.
- Forecloses a decoupled ontology store, non-Logseq class authoring, and any
  DB-backed class registry — all would reintroduce the two-source-of-truth
  problem this avoids.
- The wiki's shape *is* the ontology's shape: you cannot restructure the corpus
  without restructuring the ontology (see ADR-2004 on why that makes page
  identity immutable).
- A dropped or malformed `Class` fence silently deletes a class from every
  artefact; that failure mode is what ADR-2003's count tripwire exists to catch.

## Verification

At `verified_commit` 6be5871c4:
- `pipeline/jsonld_parser.py:241` builds the class entity from the same file's
  `json-ld`; `PageData.ontology_class` (`:71`) hangs the class off the page;
  `ENTITY_TYPES = {"OntologyClass", "Class", "Individual"}` (`:81`) is the fence
  discriminator.
- A specimen: `ontology/pages/ADR-008.md` carries a `Page` block
  (`@id: urn:visionflow:page:508b…`, `vc:public: true`) and a `Class` block
  (`@id: urn:ngm:class:adr-008`, `subClassOf urn:ngm:class:software-architecture`)
  in one file.
- `ls ontology/pages | wc -l` = 8138, i.e. 8,138 pages = 8,138 candidate classes,
  one file each.
