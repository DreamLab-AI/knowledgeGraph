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

`pipeline/build.py` performs input census/preflight, public projection and validation before exporting Turtle, WebVOWL, Page API/Markdown, search and graph tiers, then a generation manifest. Malformed or ambiguous input and validation errors refuse publication in both strict and non-strict calls. Outputs are staged; promotion backs up the prior generated trees and rolls back on failure. An additional rollback failure retains the recovery directory for repair. This is not atomic activation across live readers or consumers.

Graph payloads use stable ordering where implemented, but the complete bundle is not byte-deterministic: `pipeline/manifest.py` records a fresh UUID and UTC timestamp, and Turtle blank-node identities can vary. Compare RDF by isomorphism/triple semantics, and verify each generation against its own manifest rather than claiming equal bytes across builds.

### The public projection boundary

`vc:public` must be a literal JSON boolean. `pipeline/public_projection.py` rejects malformed, missing or ambiguous declarations and conflicts with other public flags. The canonical builder projects only public pages before inference and export. It drops or redacts references to known private identities, including body text and title-form Markdown; unresolved concepts remain available as intentional dangling references. This is not a general secret detector.

Exporter-local visibility checks in `pipeline/visibility.py` remain defensive boundaries. The canonical public graph and Markdown are derived from the same protected projection; no workflow copies raw authored Markdown over it. Public census/validation diagnostics are aggregate-only. Authoring-directory exclusions and exact corpus identity/count gates remain separate from the privacy flag.

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

- **`ADR-NG-001` is classified `historical-absent`, not open** (resolved
  2026-09-05, ADR-2001). 33 files cite `ADR-NG-001 §2/§3/§4/§5/§7/§9`; the
  document itself never existed in this tree and lived in the upstream
  publishing repo. It is **not** reconstructed — writing a decision record for a
  decision this repo did not take would fabricate authority. Instead each cited
  section is mapped to the in-tree surface that carries its content today
  (ADR-2001 "ADR-NG-001 resolution"), so a reader following a citation reaches
  a real document. `explorer/FORMAT-NGG1.md:3` links the absent record by the
  path `../../docs/adr/ADR-NG-001-explorer-architecture.md`, which is **doubly
  broken**: from `explorer/` that normalises to *above* the repo root (the
  correct depth would be `../docs/adr/…`). Since the target is classified
  absent, the link is recorded as a dangling historical citation rather than
  repaired to point at nothing.
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
  in the same commit as any corpus change. That independence is deliberate
  (ADR-2003) and is preserved. Since 2026-09-05 it is no longer the only
  membership check: `pipeline/contracts/class-identity.txt` commits the sorted
  class-IRI **set**, so an equal-count identity substitution — delete one class,
  add another — fails the release gate as a diff even though the count agrees.
  Count and set must move in the same commit; the gate fails if they disagree.
- **Three classes resolve to no category** (`electric-vehicle`,
  `ethan-mollick`, `urban-planning`) — a corpus ancestry gap, not a resolver
  fault.
- **4,383+ object-property targets are referenced but never declared** as pages
  and ship as `skos:Concept` stubs with slug-derived labels. The visibility
  policy deliberately does **not** redact these: they resolve to no page, so they
  name no private entity, and redacting them would rewrite the published
  semantics of the whole corpus for no privacy benefit.
- **The explorer cannot consume `ontology.json` directly.** The classic WebVOWL
  split shape keeps `domain`/`range` in `propertyAttribute[]`, and the consumer's
  `StandardParser::parse_property` raises `Missing domain for property` without
  them on the `property[]` entry itself. `pipeline/explorer_compat.py` emits a
  merged `ontology-explorer.json` that satisfies it. **One divergence remains
  unresolvable from this side**: the Rust parser requires `domain`/`range` as
  strings while `modern/src/stores/useGraphStore.ts` indexes them with `[0]`, and
  a JSON value cannot be both. It is recorded, tested and owned by WasmVOWL
  (`EXPLORER_DIVERGENCES`, `pipeline/tests/test_explorer_compat.py`).

## Invariants (must not silently change)

1. Public input must have a strictly boolean `vc:public`. The canonical builder
   applies the protected public projection before inference/export; exporter-local
   checks must not be bypassed by raw Markdown copying or diagnostic disclosure.
2. The NGG1 node record is **24 bytes** with **one** `u16 category`. Writer and
   both readers stay pinned to the 183-byte golden fixture; changing the stride
   or the category cardinality breaks all six builders at once.
3. Bridged (multi-category / multi-domain) membership is recoverable **only**
   from `bridges.json`. The binary `category` field is the nearest category, not
   the membership set.
4. Verify every bundle against its own generation manifest. Manifest UUID/time
   and Turtle blank-node identities prevent a blanket byte-determinism claim.
5. The corpus is synthetic-AI-generated-under-human-direction and must be
   surfaced as such from data (`ATTRIBUTED_TO`, `CORPUS_NATURE`,
   `corpusNature`), never rebranded as human-authored or authoritative.
6. `EXPECTED_CLASSES` in `build.yml` must equal the true class count and move in
   lockstep with any corpus change.
7. The SharedArrayBuffer transport stays disabled until re-enabled behind a
   double-buffered SAB with an Atomics-gated generation flip.
8. **Every input file is accounted for.** `input_files == parsed + rejected +
   excluded`, and a release contains zero `rejected` entries. A file that
   produces no page must produce a coded reason, never silence.
9. **No public artefact contains a private identifier.** Whole-page filtering is
   the floor, not the ceiling: derived references are filtered through
   `pipeline/visibility.py` at every output, and the release gate re-derives the
   private set from source and scans the built tree for it.
10. **Count and identity move together.** `EXPECTED_CLASSES` and
    `pipeline/contracts/class-identity.txt` must agree and change in the same
    commit; the count keeps its independent-tripwire property, the set adds
    membership the count cannot see.
11. **Every export carries a generation manifest** naming the source revision,
    the generation id, the counts and a SHA-256 for each artefact. An artefact
    without a matching manifest entry is not a release.

## Change process

Any change to a fact in this baseline requires: (1) updating the affected
section with the new `file:line`; (2) confirming the relevant invariant still
holds (especially the `is_public` re-check and the NGG1 stride); (3) if the
corpus size changes, updating `EXPECTED_CLASSES`, regenerating the identity set
(`python -m pipeline.release_gate <dist> --pages ontology/pages --regenerate`)
and the stale `7,874` figures in `docs/architecture/*.md` **in the same
commit**; (4) bumping `version` and
re-recording `verified_commit` from `git rev-parse --short HEAD`. New decisions
are recorded in `docs/adr/` from `docs/adr/TEMPLATE.md` and the index
regenerated (`node scripts/adr-index-gen.js docs/adr`). Legacy prose — including
the absent `ADR-NG-001` and the `ADR-008`/`ADR-012` corpus pages — is evidence,
not authority: cite it, do not defer to it.

## Estate closeout qualification — 2026-09-04

The [knowledge-production review](../../VisionFlow/docs/estate-review/knowledge-production.md) and [current-vault trace](../../VisionFlow/docs/estate-review/authored-vault-transition.md) distinguish this extracted publisher from the active visionGraph corpus. ADR-2001–2004 now carry explicit identity, publication and consumer acceptance conditions. The count tripwire and separate CI validator remain implemented safeguards; pipeline/build.py itself only logs validation errors. Equal counts cannot prove equal identities or intended visibility. Parser input census, strict publication flags, immutable export generations and actual explorer-schema compatibility remain open. ADR-008/012 under ontology/pages are corpus content, not operative decisions.

## Estate closeout progress — 2026-09-05

The four qualifications recorded on 2026-09-04 are closed against this working
tree, with the count tripwire preserved rather than replaced.

- **Parser input census** — `pipeline/census.py`. Every `*.md` is parsed,
  rejected with a code, or excluded; the totals must balance and a strict build
  refuses a corpus containing a rejected file. Real corpus: 8,138 / 8,138,
  balanced, 0 rejected.
- **Strict publication flags** — only a literal JSON `true` publishes; a
  non-boolean or absent flag is a validation error and publishes nothing.
- **Inference visibility** — `pipeline/visibility.py`, consulted by every
  exporter, with per-format tests over a public-child / private-parent /
  private-grandparent fixture.
- **Immutable export generations** — `pipeline/manifest.py` writes a versioned
  manifest (generation id, source revision + dirty flag, counts, SHA-256 per
  artefact) with every export; CI re-verifies it.
- **Explorer-schema compatibility** — `pipeline/explorer_compat.py` emits the
  merged shape the WasmVOWL consumer actually parses, pinned to a fixture.
- **Validation blocks** — `pipeline/build.py --strict` stops before writing any
  artefact; the non-strict build still exits non-zero.
- **Identity beside the count** — `pipeline/contracts/class-identity.txt`; an
  equal-count substitution fails the release gate while the count still passes.

Local verification at this revision: 85 pipeline tests pass; the full CI gate
sequence (strict build, corpus contract 8138, validation 0 errors, release gate,
manifest verification) passes; the built site was served and loaded in a real
browser against this build's artefacts. Receipts:
`docs/estate-closeout/2026-09-05/`. This is local source, build, test and
browser evidence; it does not re-certify any deployment.
