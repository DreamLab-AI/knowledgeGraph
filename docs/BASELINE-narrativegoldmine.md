---
title: NarrativeGoldmine Baseline — Corpus, Pipeline, Explorer
doc_id: NGM-BASELINE
version: 0.1.0
status: draft-for-ratification
verified_commit: 4886fbb3d
sources:
  - pipeline/build.py
  - pipeline/emit_graph_tiers.py
  - pipeline/jsonld_to_turtle.py
  - pipeline/jsonld_parser.py
  - pipeline/validate.py
  - explorer/FORMAT-NGG1.md
  - explorer/rust-wasm/src/ngg1.rs
  - explorer/modern/src/types/scope.ts
  - explorer/modern/src/workers/protocol.ts
  - .github/workflows/build.yml
  - docs/architecture/pipeline.md
  - docs/architecture/explorer.md
  - docs/methodology/corpus-generation.md
  - ontology/pages/ADR-008.md
date: 2026-08-31
---

# NarrativeGoldmine Baseline — Corpus, Pipeline, Explorer

## Purpose

Single governing document for what NarrativeGoldmine **is** at this commit: a
Logseq corpus that is simultaneously an OWL 2 ontology, a deterministic Python
pipeline that compiles it into web artefacts, and a Rust/WASM + React explorer
that renders them. It states the load-bearing invariants and the current drift,
and routes to the detailed living references. Ground-truth order: **live code >
in-repo architecture docs > legacy prose**. The two Logseq pages named `ADR-008`
and `ADR-012` are **not** decision records for this repo — they are
auto-generated ontology *class* definitions about the generic concept of an ADR
(`ontology/pages/ADR-008.md`, provenance `did:nostr:lcr-swarm`,
`inferenceRule: GapFillTier5`); they are citable corpus evidence, never
authority.

Detailed references this baseline governs, not replaces:
- Pipeline internals — `docs/architecture/pipeline.md`
- Explorer internals — `docs/architecture/explorer.md`
- Corpus provenance & generation — `docs/methodology/corpus-generation.md`
- Binary tier contract — `explorer/FORMAT-NGG1.md`
- CI gates — `docs/ci-cd/build-and-gates.md`

## Current State

### The corpus

`ontology/pages/` holds **8,138** markdown pages at this commit (`ls | wc -l`;
pinned by CI as `EXPECTED_CLASSES: '8138'`, `.github/workflows/build.yml:64`).
Each page carries two-to-three fenced `json-ld` blocks: a **Page** block
(publication metadata in the `vc:` namespace) and a **Class** block (the OWL
entity under `@context: https://narrativegoldmine.com/ns/v2.jsonld`, IRI
`urn:ngm:class:<slug>`), optionally a `vc:LinkResolutionsAnnotation` block that
**no pipeline stage reads** (authoring provenance only). The corpus is **mostly
AI-generated synthetic content produced under human direction, by design** — an
ontology testbed, not an authoritative encyclopaedia. That framing is emitted
from data, not hardcoded in the SPA: `ATTRIBUTED_TO = "did:nostr:jjohare"` and
`CORPUS_NATURE = "synthetic-ai-generated-human-directed"`
(`pipeline/emit_graph_tiers.py:58`, `:67`).

### The pipeline

One command compiles the corpus into every served artefact:

```bash
python -m pipeline.build ontology/pages dist
```

`pipeline/build.py` runs seven stages in a fixed order — parse → validate →
Turtle → WebVOWL → Page API → search index → graph tiers (NGG1) — then writes
`api/schema/context.jsonld` and `api/validation-report.json`. Only `main()`
exits non-zero on validation errors; the build itself treats them as
non-blocking (`pipeline/build.py`). Dependency surface is `rdflib>=7.0.0`
(plus `pytest`). The run is **deterministic within a day** (the only wall-clock
input is `date.today()`, the only RNG a seeded force layout) — every binary and
JSON artefact reproduces byte-for-byte. The **one exception** is
`dist/data/ontology.ttl`: rdflib mints fresh blank-node ids for the existential
restrictions on every run, so it is isomorphic and equal-length but reorders.
Compare it by triple set, never by hash.

### The `is_public` gate

`vc:public` on the Page block is the **sole** publication gate, and it is
checked independently in every output stage rather than filtered once, so no
stage can inherit a stale list: `pipeline/jsonld_to_turtle.py:244` and `:331`,
`pipeline/jsonld_to_webvowl.py:48`, `pipeline/jsonld_to_page_api.py:21`,
`pipeline/jsonld_to_search.py:18`, `pipeline/emit_graph_tiers.py:538`. The one
place it is deliberately **not** applied is `build_backlink_index`, which runs
over the full page list (documented in `docs/architecture/pipeline.md`).

### The NGG1 binary tier contract

The graph tiers (`full.bin`, six `domain-*.bin`) use the frozen NGG1 format
(`explorer/FORMAT-NGG1.md`). Little-endian; 32-byte header; four 4-byte-aligned
sections (node table, CSR adjacency, edge types, string table). The node record
is **24 bytes, not 20** — the sprint brief's field widths summed to 22 and a
`u32 degree` cannot be 4-aligned inside 20 bytes, so the pad was widened to 3.
The Python writer packs `struct.Struct("<IffHHB3xI")` and asserts its own size
at import (`pipeline/emit_graph_tiers.py:235-238`); the Rust reader declares the
same `NGG1_NODE_STRIDE = 24` (`explorer/rust-wasm/src/ngg1.rs`). Writer and both
readers (Rust, TypeScript) are pinned to a **183-byte golden fixture**
(`pipeline/tests/fixtures/ngg1-3n2e.bin` ≡
`explorer/modern/src/lib/__fixtures__/ngg1-3n2e.bin`).

The record holds **one `u16 category`** (`0xFFFF` = uncategorised). Multiple
inheritance is legal in OWL 2 EL and used deliberately: ~1,400 classes carry
more than one `subClassOf` parent, and several hundred bridge more than one
category or domain. The binary keeps only the **nearest** category; full
membership lives **only** in `dist/data/graph/bridges.json`. A consumer that
treats the binary `category` field as complete membership is wrong about the
bridging classes.

### The explorer

`explorer/modern/` is a React 19 + Vite 6 + React Three Fiber SPA whose entire
graph state lives in the URL; `explorer/rust-wasm/` is the `webvowl-wasm` crate
whose only live-path surface is the `NggExplorer` `wasm_bindgen` class (NGG1
reader + `CsrSimulation` force layout). Scope caps are named contract, not
tuning: `MAX_NODES: 1500`, `MAX_EDGES: 4000`, `FOCUS_MAX: 300`
(`explorer/modern/src/types/scope.ts:32-36`), enforced by `assertScope()` which
throws `RangeError` on any over-budget scope. The SharedArrayBuffer transport is
present on both sides but **hard-disabled**: `canUseSharedMemory()` returns
`false` unconditionally (`explorer/modern/src/workers/protocol.ts:153-164`)
because an unsynchronised half-written frame amplified to ~1e20 and blanked the
view.

### Licence split

Three licences by directory, stated at `LICENSING.md` and `NOTICE`:
`explorer/` is **MIT** (WebVOWL derivative, `LICENSE-EXPLORER`); `pipeline/` and
CI glue are **AGPL-3.0-or-later** (`LICENSE`); the `ontology/` corpus is
**ODbL-1.0** (`LICENSE-DATA`, UK CDPA 1988 s.9(3) computer-generated works).

## Known divergences & open items

- **`ADR-NG-001` is cited pervasively but is absent from this tree.** Over
  thirty code and doc files cite `ADR-NG-001 §2/§3/§4/§5/§7/§9` as the authority
  for the explorer overhaul, and `explorer/FORMAT-NGG1.md:3` links it by the
  exact path `../../docs/adr/ADR-NG-001-explorer-architecture.md` — which does
  not exist here (it lived in the upstream publishing repo). The load-bearing
  design is real and implemented; only the cited document is missing. This
  baseline plus `docs/architecture/explorer.md` are its de-facto reconstruction.
  Reconstructing `ADR-NG-001` into `docs/adr/` is an open item. Note the
  `FORMAT-NGG1.md:3` link is **doubly broken**: `../../docs/adr/…` from
  `explorer/FORMAT-NGG1.md` normalises to *above* the repo root (one `../` too
  many — the correct depth is `../docs/adr/…`). Whoever reconstructs `ADR-NG-001`
  must fix the relative depth too, or the link still will not resolve once the
  target exists.
- **The `7,874` figure is stale corpus-wide.** `docs/architecture/pipeline.md`
  and `docs/architecture/explorer.md` are written against a 7,874-page corpus,
  but the corpus is now **8,138** pages (`EXPECTED_CLASSES: '8138'`,
  `build.yml:64`). Every derived count in those two docs (triples, classes,
  edges, bytes, per-domain tallies) predates ~264 added classes and must be
  re-verified before either doc is re-ratified.
- **Turtle stage line numbers have shifted.** `pipeline/architecture` prose
  cites the `is_public` guards at `jsonld_to_turtle.py:240/316`; at this commit
  they are `:244/:331`. Minor, but a signal the arch docs lag the code.
- **`ADR-LCR-01` / `PRD-LCR-01` / `DDD-LCR-01` live only in the source repo.**
  The corpus-generation governing trio is summarised (with its post-hoc
  Amendment-2 scoring) in `docs/methodology/corpus-generation.md` but not
  checked in here. `ADR-LCR-01 §D11`'s validator gate **never ran**: all 2,833
  manifest entries record `validator_outcome: "not-run"`.
- **`ontology.ttl` is not byte-reproducible** (blank-node reshuffle, above).
- **`EXPECTED_CLASSES` is a hand-typed pin** that duplicates a figure the
  pipeline already computes and drifts the moment the corpus does; it must move
  in the same commit as any corpus change.
- **Three classes resolve to no category** (`electric-vehicle`,
  `ethan-mollick`, `urban-planning`) — a corpus ancestry gap, not a resolver
  fault.
- **4,383+ object-property targets are referenced but never declared** as pages
  and ship as `skos:Concept` stubs with slug-derived labels.

## Invariants (must not silently change)

1. `vc:public` is the only publication gate, and it is re-checked in every
   output stage. No stage may filter once and let another inherit the list.
2. The NGG1 node record is **24 bytes** with **one** `u16 category`. Writer and
   both readers stay pinned to the 183-byte golden fixture; changing the stride
   or the category cardinality breaks all six builders at once.
3. Bridged (multi-category / multi-domain) membership is recoverable **only**
   from `bridges.json`. The binary `category` field is the nearest category, not
   the membership set.
4. The pipeline is deterministic within a day for every artefact **except**
   `ontology.ttl`; that exception is compared by triple set, not by hash.
5. The corpus is synthetic-AI-generated-under-human-direction and must be
   surfaced as such from data (`ATTRIBUTED_TO`, `CORPUS_NATURE`,
   `corpusNature`), never rebranded as human-authored or authoritative.
6. `EXPECTED_CLASSES` in `build.yml` must equal the true class count and move in
   lockstep with any corpus change.
7. The SharedArrayBuffer transport stays disabled until re-enabled behind a
   double-buffered SAB with an Atomics-gated generation flip.

## Change process

Any change to a fact in this baseline requires: (1) updating the affected
section with the new `file:line`; (2) confirming the relevant invariant still
holds (especially the `is_public` re-check and the NGG1 stride); (3) if the
corpus size changes, updating `EXPECTED_CLASSES` and the stale `7,874` figures
in `docs/architecture/*.md` **in the same commit**; (4) bumping `version` and
re-recording `verified_commit` from `git rev-parse --short HEAD`. New decisions
are recorded in `docs/adr/` from `docs/adr/TEMPLATE.md` and the index
regenerated (`node scripts/adr-index-gen.js docs/adr`). Legacy prose — including
the absent `ADR-NG-001` and the `ADR-008`/`ADR-012` corpus pages — is evidence,
not authority: cite it, do not defer to it.
