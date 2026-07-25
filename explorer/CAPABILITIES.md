# WasmVOWL / Narrative Goldmine Explorer — Capabilities

_Honest capability register (ADR-NG-001 §7). Every row carries evidence: a test
name, a build log line, or a measured artifact. No "production ready" claim
appears without a checkable link. Verified on **2026-07-23** on this machine
(rustc 1.97.0, wasm-pack 0.15.0, node 22.23.1, vite 6.4.3, python 3.12)._

## Build & test evidence

| Capability | State | Evidence (2026-07-23) |
|---|---|---|
| Rust crate compiles to wasm | Working | `wasm-pack build --target web` → `Finished release` + `pkg/webvowl_wasm_bg.wasm` = 1,449,279 bytes; exports `NggExplorer`, `loadCsr`, `positionsPtr`. |
| Rust test suite | Working | `cargo test`: 202 passed, 0 failed, 3 ignored across 7 integration binaries + 154 lib unit tests. Ignored = 2 wasm-only-seam tests (`test_error_handling`, `test_wasm_api_integration`) + 1 illustrative doctest (`ontology/loader.rs`). |
| NGG1 zero-copy reader (Rust) | Working | `tests/ngg1_explorer_test.rs`: 4/4 pass, incl. `ngg1_reader_round_trips_spec_assertions` (FORMAT-NGG1 §7 worked example, stride 24). |
| NGG1 explorer sim (load/tick/settle/reheat) | Working | `explorer_loads_ticks_and_settles`, `explorer_setparam_reheat`, `explorer_is_deterministic` — all pass. |
| Legacy force-sim NaN on self-loops | Fixed | `src/layout/force.rs` `calculate_attraction` guarded coincident nodes (self-loop object properties); `test_click_detection_with_metadata` now passes (previously produced NaN positions). |
| NGG1 emitter (Python pipeline) | Working | `pipeline/tests/` pytest: 9/9 pass incl. `test_golden_183_bytes_byte_exact`, `test_golden_roundtrip_assertions`, `test_relation_topk_cap_by_target_degree`. |
| Writer↔reader golden parity | Working | `pipeline/tests/fixtures/ngg1-3n2e.bin` and `modern/src/lib/__fixtures__/ngg1-3n2e.bin` are byte-identical (183 bytes, verified). |
| TypeScript typecheck (modern SPA) | Working | `tsc -b` exit 0 (whole project, `strict`). |
| Vitest suite (worker/transport/protocol) | Working | `vitest run`: 4 files, 40 tests passed (positionTransport, protocol, coiRegister + performance). |
| Vite production build | Working | `vite build` exit 0; emits `physics.worker-*.js` (3.35 kB), `webvowl_wasm-*.js` (10.7 kB), `webvowl_wasm_bg-*.wasm` (1.45 MB), `GraphPage-*.js` 1.02 MB / gzip 283 kB (lazy, `/graph` only). |
| Physics worker wired to renderer | Working | `GraphCanvas.tsx` `SimulationBridge` drives `useSimulation` for domain scopes, folds live positions into `scope.positions` in place (INV-3), mirrors phase baked→settling→settled. Bundled worker chunk present in build log above. |
| Editorial site shell (SiteChrome) | Working | `router.tsx` mounts `App` (SiteChrome), replacing the orphaned dark `AppLayout`; 6 routes lazy-load; `vite build` transforms all page chunks. |
| Full pipeline over real corpus | Working | `python -m pipeline.build mainKnowledgeGraph/pages www`: 7444 pages → 7444 nodes / 96,336 resolvable edges / 6 domains / 34 categories in 17.6 s. |
| Tiered graph artifacts | Working | `www/data/graph/`: `overview.json` (5.7 kB), 6× `domain-*.bin` (≤ 221 kB, all < 2 MB), `full.bin` (1.28 MB), `stats.json`. |
| WebVOWL transition artifact | Kept | `www/data/ontology.json` (7444 classes) still emitted (ADR-NG-001 §2 transition); `www/data/ontology.ttl` = 252,889 triples. |
| Static serving of built site | Working | `http.server` on :8902 over `www/`: `GET /` 200, `/data/graph/stats.json` 200, `/data/graph/domain-*.bin` 200, `/assets/*.wasm` 200 (1.45 MB), `/assets/physics.worker-*.js` 200, `/coi-serviceworker.js` 200. |
| Cross-origin isolation (SAB transport) | Partial / fail-open | `coi-serviceworker.js` + `_headers` shipped to `www/` root; SharedArrayBuffer path used only when `crossOriginIsolated`, else ping-pong transferable fallback (`useSimulation`). Not exercised in a real browser here — see Not-yet-verified. |

## Headline numbers (stats.json, 2026-07-23)

- nodes 7444 · domains 6 · categories 34 · uncategorised 4487
- edges: declared 110,618 · resolvable 96,336 · backbone 8458 · relations 87,878
- AI domain tier: 1500 nodes (239 truncated by degree), 7185 relations capped by top-k=8
- pipeline version `ng-1.0.0`, datasetDate 2026-07-23

## Not yet verified / compromises

- **In-browser render of `/graph`** not executed: the browser sidecar
  (`browsercontainer`) cannot reach this container's `localhost:8902` (separate
  network namespace). All assets are proven served by `curl` (HTTP 200) and the
  worker/wasm bundle is proven emitted, but the live WebGL frame + worker
  handshake were not screenshotted. The renderer reads baked NGG1 positions even
  with the worker idle, so the graph is not blank without it.
- **ESLint** reports 15 pre-existing errors (whole-repo) in files outside this
  overhaul: legacy test infra (`tests/setup.ts`, `tests/__mocks__/`,
  `tests/performance.test.ts` `any`s), `WikiLink.tsx` unused param, and the
  `router.tsx` react-refresh mixed-export pattern (inherent to router files).
  `tsc`, `vitest`, `vite build` are all clean. Not chased — out of overhaul scope.
- **Focus (T2) scopes do not drive the worker**: the whole-tier worker
  simulates a tier's own node order; a derived ego-graph has a different instance
  space, so focus scopes render at baked/derived seed positions (static),
  documented in `scopeStore.buffer`. Domain (T1) tiers get live settling.
- **CI Python** installs `rdflib` via `pip`; this box had no `pip`, so the
  pipeline ran under a bootstrapped venv (`rdflib 7.6.0`) — CI path unchanged.
