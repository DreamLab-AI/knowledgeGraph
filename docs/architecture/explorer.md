# Explorer architecture: Rust/WASM + React

The explorer is the browser half of this repository: it turns the binary and JSON
artefacts under `dist/data/` into a navigable graph and a readable page view. It
lives in `explorer/`, 227 files (excluding `node_modules/`, `target/`, `pkg/`,
`dist/` and `.git/`) in two halves:

| Path | What it is |
|---|---|
| `explorer/rust-wasm/` | The crate `webvowl-wasm` 0.3.4 (NGG1 binary reader plus force-directed layout, compiled to WebAssembly) |
| `explorer/modern/` | A React 19 + Vite 6 + React Three Fiber single-page app |
| `explorer/tests/`, `explorer/package.json` | Un-migrated WebVOWL 1.1.7 lineage (d3 3.x, grunt, karma) |
| `explorer/FORMAT-NGG1.md` | The frozen binary contract shared with `pipeline/emit_graph_tiers.py` |
| `explorer/license.txt` | MIT, © 2014-2019 the WebVOWL authors |

There is no `legacy/` directory in this tree.

The graph and page data the explorer renders is the corpus this repository
publishes: mostly AI-generated synthetic content produced under human direction,
by design. It is an ontology testbed, not an authoritative encyclopaedia. The
provenance the explorer surfaces (`attributedTo`, the did:nostr chip on the
overview tier) attests traceable generation under human direction, not human
authorship.

## 1. What runs in Rust/WASM, and why

`rust-wasm/src/lib.rs` declares eight public modules: `ontology`, `graph`,
`layout`, `ngg1`, `render`, `bindings`, `interaction`, `debug`, plus a private
`error`. Two independent engines live under them, and only one is on the live
path.

**The live engine** is three files: `src/ngg1.rs` (499 lines, the NGG1 binary
reader), `src/layout/csr_sim.rs` (455 lines, `CsrSimulation`, an f32 force
simulation seeded from the positions baked into the tier), and
`src/bindings/explorer.rs` (113 lines, the `NggExplorer` `wasm_bindgen` class:
`loadCsr`, `tick`, `isFinished`, `getAlpha`, `nodeCount`, `edgeCount`,
`positionsPtr`, `positionsLen`, `writePositionsInto`, `setParam`, `reheat`).

`NggExplorer` is the entire surface the SPA drives. If the built package does not
export it, the worker throws
`physics.worker: wasm export NggExplorer not found` at init
(`modern/src/workers/physics.worker.ts`).

**The honest rationale.** The reason given in the source for putting this in Rust
is the removal of per-frame boundary serialisation, not arithmetic speed.
From the header of `bindings/explorer.rs`:

> This replaces the old `get_graph_data()` boundary-serialisation hot path
> (deleted from default builds, kept behind the `debug-serde` feature on the
> legacy `WebVowl` struct). Nothing here allocates across the boundary per frame;
> only the position pointer crosses.

`positions_ptr()` returns a `*const f32` into the crate's own `Vec<f32>`; the
worker builds `new Float32Array(memory.buffer, ptr, len)` over WASM linear memory
(`physics.worker.ts::wasmPositions`). `Cargo.toml` repeats the point where it
gates the old export off: `debug-serde` is the "legacy full-graph serde export
(WebVowl::get_graph_data). Off by default: ADR-NG-001 §3 deletes it from the
explorer hot path."

The physics itself is deliberately unsophisticated. `csr_sim.rs` uses naive
O(n²) Coulomb repulsion plus Hooke springs and a centre pull, integrated with
symplectic Euler, and says why: "Naive O(n²) repulsion, **scoped** — T1 caps at
1,500 nodes ⇒ ≤ 2.25M pair-ops/tick; well within WASM headroom. Barnes-Hut is a
follow-up slot." A Barnes-Hut quadtree does exist (`layout/quadtree.rs`, 585
lines, f64), but it is only reachable from the inherited `ForceSimulation`, never
from `CsrSimulation`.

The simulation is deterministic by construction: iteration is over `Vec` indices
in CSR local order, never `HashMap` order, and coincident nodes get an
index-derived perturbation. A unit test asserts two runs from the same tier
produce bit-identical position buffers.

`lib.rs` sets `#![deny(unsafe_code)]`. Three files re-allow it, all inherited
layout code, none on the NGG1 path: `layout/simd.rs` (module-level
`#![allow(unsafe_code)]` for WASM SIMD128 intrinsics, behind the off-by-default
`simd` feature), two `#[allow(unsafe_code)]` items in `layout/force.rs` and one
in `layout/quadtree.rs`. `ngg1.rs`, `layout/csr_sim.rs` and
`bindings/explorer.rs` contain no `unsafe` code.

## 2. NGG1: the contract with the Python emitter

`pipeline/emit_graph_tiers.py` writes the binary tiers; `rust-wasm/src/ngg1.rs`
and `modern/src/lib/ngg1.ts` read them. All three implement
`explorer/FORMAT-NGG1.md`, though `ngg1.rs`'s own module doc still cites that
spec by its upstream path, `publishing-tools/WasmVOWL/FORMAT-NGG1.md`, the same
path drift recorded in §8.

Layout: a 32-byte header (magic `NGG1` = LE u32 `0x3147474E`, u16 version 1, u16
pad, u32 node_count, u32 edge_count, then four u32 section offsets), followed by
four 4-byte-aligned sections: node table, CSR adjacency (`row_ptr` then
`col_idx`), edge types (`u8` per edge, zero-padded to a 4-byte boundary), and a
string table where `strings[n*2]` is node *n*'s label and `strings[n*2+1]` its IRI.

The node record is **24 bytes, not 20**. FORMAT-NGG1 §0 records why: the sprint
brief's field list sums to 22 bytes and a `u32 degree` cannot be 4-aligned inside
a 20-byte record, so the pad was widened from 1 byte to 3. The Python writer packs
`struct.Struct("<IffHHB3xI")` and asserts its own size against
`NGG1_NODE_STRIDE`; the Rust reader declares `NGG1_NODE_STRIDE: usize = 24` with
the same note.

That record carries **one** `u16 category` (`0xFFFF` = uncategorised,
FORMAT-NGG1 §3), and that is a real limitation of the frozen format. Multiple
inheritance is legal in OWL 2 EL and is used deliberately here: 1,401 classes
carry more than one `subClassOf` parent, and 542 of those bridge more than one
taxonomy category or domain (454 cross-category, 153 cross-domain). The binary
tiers keep only the **nearest** category per node; the other memberships cannot
be expressed in NGG1 and are not recoverable from `full.bin`. They are published
alongside it instead, in `dist/data/graph/bridges.json` — 542 entries of
`{iri, label, categories[], domains[], parents[]}`, indices matching
`overview.json`. Any consumer that needs full category membership must read that
file; the binary alone will under-report it.

The Rust reader is **not** zero-copy in the C sense, on purpose: it "borrows the
input `&[u8]` and decodes fields on demand with `from_le_bytes` — no `unsafe`, no
alignment assumptions (the input slice from JS is not guaranteed 4-aligned, so we
never reinterpret it as `&[u32]`)". `Ngg1::parse` checks the buffer is at least
32 bytes, checks magic and version, checks all four section offsets are
4-aligned, computes every section end with `checked_add`/`checked_mul`, asserts
`str_count == node_count * 2`, and rejects a string blob that runs past the
buffer. Errors carry greppable text such as `section bounds exceed buffer length
(truncated artifact)`.

Agreement between writer and readers is pinned by a **183-byte golden fixture**:
`pipeline/tests/fixtures/ngg1-3n2e.bin`, byte-identical to
`modern/src/lib/__fixtures__/ngg1-3n2e.bin`, with a third hand-written copy in
`ngg1.rs::worked_example()` that asserts its own length is 183. The Python test
parses it with a `struct`-based reader written independently of the writer, so
the fixture checks layout rather than round-tripping shared code. The shipped
`dist/data/graph/full.bin` is 1,339,983 bytes: node_count 7874, edge_count 98776,
section offsets 32 / 189008 / 615612 / 714388.

One divergence worth knowing: `modern/src/lib/ngg1.ts` defines
`FLAG_META = 0x40` ("client-minted collapsed-category metanode"), with no Rust
or Python counterpart. It is set only on nodes the browser invents.

## 3. React SPA

`explorer/modern/` is React 19, Vite 6, React Three Fiber 9, zustand 5, TanStack
Query 5 and react-router-dom 6, with `fuse.js` for search and
`troika-three-text` for labels.

Routes (`src/router.tsx`): `/`, `/page/:pageName`, `/graph`, `/search`, `/data`,
`/about`. `/ontology` and `/ontology/:nodeId` redirect to `/graph` preserving the
query string. Every route is `React.lazy` behind a `retryImport` wrapper that
force-reloads once on a chunk-load failure, a guard against GitHub Pages serving
a cached `index.html` that references deleted chunk hashes. `GraphPage` is the
only route whose import pulls the WASM, worker and renderer chunks.

Graph state lives entirely in the URL (`src/pages/GraphPage.tsx`):

| URL | Tier | Source |
|---|---|---|
| `/graph` | T0 overview | `/data/graph/overview.json` (40 nodes, 124 edges) |
| `/graph?scope=domain:<slug>` | T1 domain | `/data/graph/domain-<slug>.bin` |
| `/graph?focus=<iri>&r=1\|2` | T2 ego graph | derived client-side from the loaded T1 tier |

A single `useEffect` keyed on the decoded URL drives every load; navigation is by
`navigate('/graph' + encodeScopeQuery(target))`, so history is the state machine.

T0 is the one tier whose edges are not purely taxonomic. `overview.json` holds 40
nodes (6 domain roots + 34 category roots) and **124 edges**: 34 backbone
`subClassOf` category→domain edges at indices 0..33, then 90 category↔category
relation edges aggregated from the 542 bridging classes. Backbone edges stay
first so an index-sensitive reader sees them unmoved. Each bridge edge carries a
`weight` (1 to 73 — how many classes bridge that category pair) added to the
frozen `{source, target, type}` shape; the same aggregated pairs are also fed
into the pre-baked force layout in `emit_graph_tiers.py`, so the baked positions
match the edges drawn over them rather than the tree-shaped layout the
category→domain edges alone produced.

What the SPA does with the extra 90 edges, read from the source rather than
inferred: `buildOverviewInput` (`src/pages/GraphPage.tsx`) copies `source`,
`target` and `type` for every element of `json.edges` into `edgePairs` and
`edgeTypes`, and reads no other field. It therefore ingests all 124 without any
change, and discards `weight` — its `OverviewJsonEdge` interface does not declare
the field. 124 is well inside `MAX_EDGES` 4000, so `assertScope` passes. The 90
bridge edges carry `type` 1, which puts them in `EdgesSegments`'s second draw
group and paints them teal at the single constant `EDGE_ALPHA_RELATION`: nothing
in the renderer scales line opacity by bridge strength today, and a renderer that
wants to must read `weight` itself. How the result looks on screen is **not**
verified here — the SPA was not built in this environment (§9), so this is a
source reading, not an observation of the drawn frame.

`src/stores/scopeStore.ts` (739 lines) is documented as the only place a
`GraphScope` is constructed, and runs `assertScope()` on every construction.
The caps it enforces are named contract, not tuning, in `src/types/scope.ts`:
`MAX_NODES` 1500, `MAX_EDGES` 4000, `FOCUS_MAX` 300, `FOCUS_RADIUS_MAX` 2,
`LABELS_VISIBLE_MAX` 150.

Rendering is three instanced draw families and no per-entity components, all in
`src/components/Canvas/`. `NodesInstanced.tsx` puts every node in one
`InstancedMesh`: "No per-node React component ever exists — that per-entity
storm was the freeze cause". `EdgesSegments.tsx` puts every edge in one
`LineSegments`, sorted backbone-first so a single geometry carries two
`addGroup` draw groups (charcoal `subClassOf`, teal `objectProperty`).
`LabelsTopN.tsx` keeps a fixed pool of troika SDF `Text` objects sized to
`LABELS_VISIBLE_MAX`, reselected on a cadence and repositioned every frame.

`GraphCanvas.tsx` uses an orthographic camera with custom wheel/drag pan-zoom
(explicitly no orbit) and `frameloop='demand'`, so an idle settled graph does not
repaint.

## 4. Data flow: `dist/data/` to pixels

1. `GraphPage` fetches the tier for the current URL. T1 arrives as bytes and is
   parsed by `parseNgg1`; T0 arrives as `overview.json`.
2. `scopeStore` builds the `GraphScope` and a `RenderModel` (domain, category,
   degree, flags, labels, IRIs as typed arrays), and mints an NGG1 buffer for the
   worker. T1 already has one; T0 is serialised in-browser with `serializeNgg1`,
   and T2 with `serializeEgoNgg1` over `computeEgoGraph` output plus
   `radialEgoSeed` warm-start positions. The worker therefore sees one uniform
   input format for all three tiers.
3. `physics.worker.ts` instantiates the wasm glue, constructs `NggExplorer`,
   calls `loadCsr(buffer)` and runs a 16 ms tick loop, auto-sleeping at the alpha
   floor.
4. Positions cross back by transferable ping-pong: the worker copies the WASM
   view into a free `ArrayBuffer` and transfers ownership out; the main thread
   reads it and hands it back, while the worker keeps ticking into the other
   buffer (`workers/positionTransport.ts`). The renderer reads that live buffer
   each frame and writes instance matrices; nothing allocates in `useFrame`.

The SharedArrayBuffer transport exists on both sides and is **hard-disabled**.
`canUseSharedMemory()` in `modern/src/workers/protocol.ts` unconditionally
returns `false`, and the comment is the reason:

> The SharedArrayBuffer transport streams positions from the worker into a buffer
> the main thread reads every frame with NO synchronisation … a read that catches
> a half-written frame yields garbage magnitudes that the force sim's feedback
> amplifies to ~1e20, collapsing the fit and blanking the view. It only
> manifested in a secure context (production) … Re-enable only with a
> double-buffered SAB + an Atomics-gated generation flip.

A vitest case asserts it stays false even under `crossOriginIsolated`. As a
consequence, the COI service worker (`workers/coi-register.ts`, still copied to
the site root by CI) currently buys the explorer nothing at runtime; its own
header already called it "an optimisation, never a launch gate".

Two defensive habits in this path are worth preserving in any rewrite, both
recorded in-source as production lessons: `physics.worker.ts` binds
`NggExplorer`'s methods off the *constructed instance* tolerating either casing
(an earlier binding looked them up on the module namespace and always threw, so
the graph sat on its baked seed), and `useSimulation` accepts `initialPositions`
so the renderer never sees an all-zero frame even if the worker dies before its
first publish.

## 5. Page content: fetched by slug and by title

`modern/src/api/pageService.ts` resolves a page name against
`/api/search-index.json` through six strategies in order: exact id,
case-insensitive title, `labels[]` entry, IRI or IRI suffix, camelCase→spaced,
hyphen→space. It then fetches two things with **two different keys**: structured
data by **slug** from `/api/pages/<id>.json`, and prose by **title** from
`/api/markdown/<Title>.md`, falling back to
`https://raw.githubusercontent.com/DreamLab-AI/knowledgeGraph/gh-pages/api/markdown/<Title>.md`.

That title-form dependency is load-bearing. The source CI carries a
markdown-mirror gate whose comment records what happened when the shell filter
feeding it drifted: a space-bearing grep "silently dropped 653 compact pages,
which the frontend then 404'd on (pageService.ts fetches
`/api/markdown/<Title>.md` — the slug-form mirror written by
`jsonld_to_page_api.py` is never requested)".

Fetched markdown is sanity-checked before use: `isValidMarkdown` rejects a
response whose content-type contains `html`, whose body contains
`sessionStorage.setItem`, or which starts with `<!DOCTYPE`/`<html>`: it
detects a static host serving `index.html` for a missing `.md`.
`cleanLogseqMarkdown` then strips Logseq property lines, unwraps outliner
bullets, rewrites `[[wikilinks]]` to `/page/<name>` and replaces `assets/` images
with an italic placeholder. Fenced JSON-LD blocks are extracted first and
surfaced separately as `jsonldBlocks`.

## 6. WebVOWL lineage, and what was rewritten

Inherited, unchanged: `explorer/package.json` (still `webvowl` 1.1.7 with
`d3 ^3.5.6`, grunt, webpack 1, karma/jasmine/phantomjs, never migrated, builds
nothing that ships); `explorer/tests/` (the original karma + jasmine suites); and
the crate's `ontology/`, `graph/`, `render/`, `interaction/` and
`layout/{force,simulation,quadtree,simd}` modules, a Rust reimplementation of
VOWL semantics where `ontology/model.rs` enumerates `OwlClassType`/
`OwlPropertyType`/`SetOperator`, `ontology/parser.rs` reads the VOWL
`class`/`property` JSON arrays and `render/mod.rs` emits SVG, all reached through
the `WebVowl` class in `bindings/mod.rs` (792 lines). Both `Cargo.toml` and
`rust-wasm/package.json` still declare
`repository = https://github.com/VisualDataWeb/WebVOWL` and
`authors = ["WebVOWL Contributors"]`.

Written fresh for this project: `ngg1.rs`, `layout/csr_sim.rs`,
`bindings/explorer.rs`, and the entirety of `modern/src`: the React SPA, the
NGG1 tier protocol, the worker transport and the instanced renderer.

Nothing in the SPA's runtime path touches the inherited stack. It remains in the
tree because `dist/data/ontology.json` (40,382,315 bytes of WebVOWL JSON, 7,874
entries in `class[]`) is still published as a transition artefact.

## 7. Licence

`explorer/` is **MIT**. `explorer/license.txt` and the repository-root
`LICENSE-EXPLORER` carry the same text: "The MIT License (MIT) — Copyright (c)
2014-2019 Vincent Link, Steffen Lohmann, Eduard Marbach, Stefan Negru, Vitalis
Wiens".

This is not incidental. The explorer is a derivative of
[WebVOWL](https://github.com/VisualDataWeb/WebVOWL) by those authors; the same
code is also published as [DreamLab-AI/WasmVOWL](https://github.com/DreamLab-AI/WasmVOWL),
an MIT fork of VisualDataWeb/WebVOWL. It is kept MIT deliberately: AGPL-ing it
would be hollow while identical code sits under MIT one repository away. The
crate manifest, the npm manifest and `license.txt` all say MIT and all name the
upstream authors.

The rest of the repository is licensed differently: `pipeline/` and the CI glue
are AGPL-3.0-or-later (wholly original work, root `LICENSE`); the `ontology/`
corpus is ODbL-1.0 (root `LICENSE-DATA`), on the rights basis of UK CDPA 1988
s.9(3) (computer-generated works vest in the arranger). `LICENSING.md` and
`NOTICE` at the repository root state the same three-way split.

## 8. Build toolchain

`wasm-pack build --release --target web --out-dir pkg` produces `rust-wasm/pkg/`,
which `modern/package.json` consumes as the file dependency
`"webvowl-wasm": "file:../rust-wasm/pkg"`, which `vite build` bundles into
`modern/dist/`.

`vite.config.ts` loads the package with `vite-plugin-wasm` and
`vite-plugin-top-level-await`, and sets `worker.format: 'es'` because "the
physics worker dynamically imports the wasm glue, so it is a code-splitting build
— that requires ES module workers, not the default IIFE (which forbids
splitting)".

`wasm-opt` is disabled in `Cargo.toml` under
`[package.metadata.wasm-pack.profile.release]`.
`explorer/.github/workflows/wasm-publish.yml` sets `WASM_SIZE_LIMIT_MB: 1.5` and
fails if the built binary exceeds it.

The checked-in `rust-wasm/webvowl_wasm.d.ts` (314 lines) is **stale**: it declares
only `version()` and `class WebVowl`, with no `NggExplorer`. It is superseded at
build time: `pkg/` is gitignored, and `rust-wasm/package.json`'s `types` field
points at `pkg/webvowl_wasm.d.ts`, which wasm-pack regenerates.

The source CI (`.github/workflows/publish.yml` in the upstream Logseq repository;
not reproduced here) runs, in order: an honesty grep gate for unevidenced
"production ready" status claims → `pytest pipeline/tests` → `cargo test
--all-features` → the JSON-LD pipeline build → output validation → a private-
content filter → `wasm-pack build --target web` → `npm install` +
`npm install ../rust-wasm/pkg` → `npx tsc -b` → `npm run test` (vitest) →
`npm run build` → copy `dist/` assets into `www/` (`index.html`, `404.html`,
`assets/`, and best-effort `vite.svg`, `coi-serviceworker.js`, `_headers`,
`llms.txt`, `.well-known/`, `img/`, never `api/` or `data/`, which the pipeline
owns) → a Playwright smoke run against the built `www/` → the Pages deploy. That
workflow's paths point at `publishing-tools/WasmVOWL/`; the same tree is
`explorer/` here, so the paths need rewriting before it can be reused.

The workflow in *this* repository, `.github/workflows/build.yml`, is the
reproducible half only: secret scan, `pytest pipeline/tests`,
`python -m pipeline.build ontology/pages dist-ci`, a class-count contract gate and
`python -m pipeline.validate`. It builds no WASM, no SPA, and deploys nothing.

`build.yml` sets `EXPECTED_CLASSES: '7874'` and fails unless both `stats.json`'s
`classes` and `ontology.json`'s `class[]` length equal it. The value is meant to
be changed alongside the corpus, and is: a build that silently gains or loses
classes fails rather than publishing the drift.

## 9. Build and run: what is verified here, and what is not

**Verified in this environment on 2026-07-25.**

`cargo test --all-features` in `explorer/rust-wasm/` exits 0: 205 tests over
seven test binaries plus doc-tests: 202 passed, 3 ignored, 0 failed. 154 unit
tests in `src/lib.rs`, then `integration_test.rs` 5, `markdown_parser_test.rs`
10, `ngg1_explorer_test.rs` 4, `ontology_metadata_test.rs` 11,
`owl2_validation_test.rs` 10, `phase3_integration.rs` 9 (2 ignored), doc-tests 2
(1 ignored).

The release build for `wasm32-unknown-unknown` also succeeds, leaving
`target/wasm32-unknown-unknown/release/webvowl_wasm.wasm` at 2,280,829 bytes.
That is the raw module, before `wasm-bindgen` processing.

**Not verified here.**

- `wasm-pack build --release --target web` does **not** complete in this
  container. It compiles, then fails at `[INFO]: Installing wasm-bindgen...` with
  `Error: Permission denied (os error 13)`: it cannot write its tool cache. A
  `wasm-bindgen` 0.2.121 CLI is on `PATH`, but the crate depends on
  `wasm-bindgen` 0.2.126, and the two must match. So `pkg/` was not produced and
  the generated `NggExplorer` bindings were not inspected.
- Because `pkg/` does not exist, `npm install`, `npx tsc -b`, `npm run test`
  (vitest) and `npm run build` were not run. `modern/vitest.config.ts` declares
  no `include`, so the default glob picks up six test files:
  `src/lib/__tests__/ngg1-serialize.test.ts`,
  `src/workers/__tests__/{positionTransport,protocol,coiRegister}.test.ts`,
  `src/stores/__tests__/focus-from-collapsed.test.ts` and
  `tests/performance.test.ts`. Coverage thresholds are 80% lines/functions/
  statements and 75% branches.
- The Playwright smoke (`modern/tests/smoke/graph-smoke.mjs`) was not run. It is
  the load-bearing gate: it serves the built `www/` over http and asserts the
  canvas paints a non-zero box, `overview.json` carries `nodes[] > 0` plus edges,
  taxonomy and `attributedTo`, the node-list fallback is clickable, no
  settle-window long task exceeds 250 ms (warning at 50 ms), JS heap stays under
  512 MB, and the canvas is interactive within 5000 ms. First contentful paint
  over 1500 ms only prints a warning; it does not fail the run.
- Whether the wasm-pack output clears the 1.5 MB CI limit is unknown here, since
  the output was never produced; `wasm-opt` being disabled means that gate rests
  entirely on `wasm-bindgen`'s stripping. Separately,
  `modern/tests/performance.test.ts` (350 lines) exercises a `mockWebVowl` object
  rather than the real module, so it measures nothing about the shipped build.

To reproduce the full sequence on a machine with a writable cargo/wasm-pack
cache:

```bash
# from the repository root
cd explorer/rust-wasm
cargo test --all-features
wasm-pack build --release --target web --out-dir pkg

cd ../modern
npm install
npm install ../rust-wasm/pkg
npx tsc -b
npm run test
npm run build          # → explorer/modern/dist/

# Assemble the site root the smoke test serves. The SPA fetches
# /data/graph/*.{json,bin} and /api/{search-index.json,pages/*.json,markdown/*.md},
# so those must be reachable at the same origin; they come from the pipeline,
# not from the vite build.
cd ../..
python -m pipeline.build ontology/pages site   # writes site/api/ and site/data/
cp -r explorer/modern/dist/. site/             # index.html, 404.html, assets/

# graph-smoke.mjs takes the site root as argv[2] (default: ./www).
node explorer/modern/tests/smoke/graph-smoke.mjs "$PWD/site"
```
