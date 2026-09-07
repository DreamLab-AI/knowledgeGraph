---
id: ADR-2002
title: Fuse corpus and ontology — a Logseq page IS an OWL class
date: 2026-08-31
decision_status: accepted
implementation_status: complete
activation_status: live
supersedes: []
superseded_by: []
verified_commit: d09a476124caa14aa0165c642d0950f6026c46fb
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

## Closeout extension — 2026-09-04

Work packages: CP-01/02/06/08. Owner remains `jjohare`; corpus, publisher and explorer maintainers own the relevant downstream boundaries. Existing accepted decisions and historical verification fields are preserved.

The earlier fresh build verified the page/class projection at this revision. The parser can omit malformed inputs before validation; non-boolean publication flags can be truthy. A single source file does not by itself ensure every derived projection preserves its semantics.

**Acceptance condition:** Require input census diagnostics, strict publication flags and cross-export identity/visibility fixtures. Distinguish compiler validation, formal entailment and reviewed factual content.

Dependencies: current-vault lineage, versioned export manifest and an explicitly identified consumer build. Reopen on corpus identity, parser/publication rules, exporter or release-gate changes. Evidence revision: `7bbf0aae2b60a63c2714b750e3b381bce6be7ad8`; local source/build/test evidence does not re-certify deployment.

See the [knowledge-production review](../../../VisionFlow/docs/estate-review/knowledge-production.md), [current-vault trace](../../../VisionFlow/docs/estate-review/authored-vault-transition.md) and [pipeline receipt](../../../VisionFlow/docs/estate-review/evidence/knowledge-snapshot.json).

## Acceptance progress — 2026-09-05

Addresses the CP-02 acceptance condition: *require input census diagnostics,
strict publication flags and cross-export identity/visibility fixtures;
distinguish compiler validation, formal entailment and reviewed factual content.*

ADR-2002 fuses page and class, which makes a dropped or malformed `Class` fence
delete a class from every artefact. Three defects made that deletion — and the
inverse, an unintended publication — silent. All three are now closed.

### Implemented

**Input census** (`pipeline/census.py`, `pipeline/jsonld_parser.py`). Every
early return the parser expressed as a bare `None` now carries a code:
`MALFORMED_JSONLD`, `NO_PAGE_BLOCK`, `NO_DECODABLE_BLOCK`, `NON_OBJECT_BLOCK`,
`UNREADABLE` (rejected) and `NO_JSONLD_FENCE` (excluded — a prose file was never
a corpus page). `parse_page_outcome` returns exactly one of page-or-reason;
`parse_page`/`parse_corpus` keep their old signatures. `input_files == parsed +
rejected + excluded` is asserted, and `assert_census_clean(strict=True)` stops
the build. The census is written to `api/census.json` even when the build is
blocked, so the operator gets the diagnostic rather than silence.

**Strict publication flags** (`pipeline/jsonld_parser.py`,
`pipeline/validate.py`). `is_public` is now `public_raw is True`. The authored
value is retained as `public_flag_raw`, and a non-boolean is
`PUBLIC_FLAG_NOT_BOOLEAN`, an absent flag `MISSING_PUBLIC_FLAG` — both errors,
both non-publishing. `True` being an `int` subclass is handled explicitly.

**Inference visibility** (`pipeline/visibility.py`). One policy consulted by
Turtle, WebVOWL, page API, search index and graph tiers: a reference is redacted
if and only if it resolves to a known private entity. A reference resolving to
nothing is dangling, not private, and is left alone — the corpus mints 4,383+
such SKOS stubs deliberately. Slug matching is guarded so a name a public entity
also claims can never redact published content. `build_backlink_index` now runs
over public pages only, and the published `validation-report.json` is restricted
to public pages (an issue names its page by filename; `MULTI_PARENT` quotes
parent labels).

### Semantic scope, stated plainly

What this pipeline does is **compiler validation**: field shape, identity
uniqueness, direct self-parenting, domain vocabulary, publication typing, and an
input census. It is **not formal entailment** — no Whelk or ELK invocation runs
in this path, and the emitted existential and disjointness axioms are not
checked for consistency or satisfiability here. It is **not reviewed factual
content** — the corpus is synthetic, AI-generated under human direction, and the
pipeline attests traceable generation, never accuracy. These are three different
guarantees and this record does not let them be read as one.

### Tests and results

`pipeline/tests/test_census.py` (8), `test_publication_flags.py` (23),
`test_visibility.py` (10). The visibility fixture is the reproduced failure:
public child ⊂ {private parent, public uncle}, private parent ⊂ private
grandparent, plus a private sibling linking in. Assertions run against **every**
export format — Turtle, WebVOWL, page API, search index, graph tiers, the NGG1
binaries' string tables, `bridges.json`, and the markdown mirror — not just the
page-file count. A companion test asserts `public_only=False` still emits the
full graph unredacted. Suite total: **85 passed**.

### Governed paths changed

`pipeline/jsonld_parser.py`, `validate.py`, `census.py`, `visibility.py`,
`build.py`, `jsonld_to_turtle.py`, `jsonld_to_page_api.py`,
`jsonld_to_search.py`, `emit_graph_tiers.py`, `pipeline/tests/`.
`verified_commit` unchanged.

### Remaining

- No reasoner invocation is wired into this repository's build; "EL-profile
  closure" remains a claim about the emitted axioms, not a checked property.
- Asserted and inferred RDF identity forms diverge in the *upstream* publisher
  (`urn:` vs HTTP); this extracted pipeline emits only the asserted projection,
  so the join risk is recorded, not resolved here.


## Publication baseline re-verification — 2026-09-07

Re-read against pipeline source at `d09a476124caa14aa0165c642d0950f6026c46fb`. The four-record ledger, class/individual distinction, immutable corpus identities and 8,138-class tripwire remain the scoped decisions. The canonical builder now projects known-private references before inference and public Markdown export, refuses malformed input in either mode, and preserves prior output through promotion rollback. The baseline/build guide now describe those current boundaries and distinguish fresh manifest UUID/time from deterministic graph ordering. `./.venv/bin/python -m pytest pipeline/tests -q` passes **96 tests**; the ADR generator validates all four records. Historical measurements, missing upstream documents and consumer limitations above remain dated evidence. No decision or activation axis was promoted by this re-verification.
