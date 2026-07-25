# Build and quality gates

This repository ships a **build**, not a deployment.
`.github/workflows/build.yml` (204 lines) runs the seven-stage Python pipeline
behind four blocking gates and uploads the output as a run artefact;
`permissions: contents: read` is the whole permission set, so it cannot write
anywhere. The private publishing CI is a superset of it: the same four gates, six
more that need a Rust or Node toolchain this workflow never installs, and then a
deploy. This document describes each gate, what it catches, and, for two of them,
the incident that caused it to be written.

---

## 1. Build

`python -m pipeline.build <pages-dir> <output-dir>` runs seven stages in a fixed
order, defined in `pipeline/build.py`:

| # | Stage | Module | Output |
|---|-------|--------|--------|
| 1 | Parse | `pipeline/jsonld_parser.py` | `PageData` / `OntologyEntity` in memory |
| 2 | Validate | `pipeline/validate.py` | error/warning report |
| 3 | Turtle | `pipeline/jsonld_to_turtle.py` | `data/ontology.ttl` |
| 4 | WebVOWL JSON | `pipeline/jsonld_to_webvowl.py` | `data/ontology.json` |
| 5 | Page API | `pipeline/jsonld_to_page_api.py` | `api/pages/*.json`, `api/markdown/*.md` |
| 6 | Search index | `pipeline/jsonld_to_search.py` | `api/search-index.json` |
| 7 | Graph tiers | `pipeline/emit_graph_tiers.py` | `data/graph/*.bin`, `overview.json`, `stats.json` |

The whole pipeline is 2,309 lines of Python across nine modules plus one test
module, and its only runtime dependency is `rdflib>=7.0.0`.

Measured on 2026-07-25 from this tree: **18.0 seconds**, 7,457 public pages in,
7,457 OWL classes and 0 individuals out, 252,974 Turtle triples, 96,377 graph
edges emitted from 110,617 declared, 0 validation errors and 961 warnings.

```bash
pip install "rdflib>=7.0.0" pytest
python -m pipeline.build ontology/pages dist
python -m pipeline.validate ontology/pages
```

`dist/data/` is committed (`ontology.ttl` 12.3 MB, `ontology.json` 39.3 MB,
`graph/*.bin`); `dist/api/` is 14,889 files and is gitignored, rebuilt in seconds;
see `.gitignore` lines 1-4.

---

## 2. Gates

### 2.1 What `.github/workflows/build.yml` runs

Four gates, cheapest first, so a leaked credential or a broken unit test fails in
seconds rather than after a 39 MB WebVOWL serialisation.

| # | Gate | Command | Catches |
|---|------|---------|---------|
| 1 | Secret scan | `grep -rInE '<8 anchored patterns>' ontology/` | credential-shaped strings in a corpus that ships verbatim |
| 2 | Pipeline unit tests | `python -m pytest pipeline/tests -q` | NGG1 byte layout, overview.json consumer contract, cap policy |
| 3 | Corpus contract | `EXPECTED_CLASSES: '7457'` read back from two build artefacts | silent parse regressions that move the class count |
| 4 | Validation | `python -m pipeline.validate ontology/pages` exit code | corpus errors (missing IRI/slug/label, self-reference, duplicate IRI) |

The build itself sits between gates 2 and 3 (`python -m pipeline.build
ontology/pages dist-ci`), and the output is uploaded as a 14-day run artefact. No
step reads a secret and there is no deploy step.

### 2.2 Gates in this tree that `build.yml` does not run

The workflow installs Python and nothing else. These six need a Rust or Node
toolchain; they run in the private publishing CI, and locally from a clone with
those toolchains present.

| Gate | Command | Catches |
|------|---------|---------|
| Honesty grep | `grep` over `explorer/**/*.md` | unevidenced "production ready" status claims |
| Rust tests | `cargo test --all-features` (in `explorer/rust-wasm`) | NGG1 reader, explorer sim determinism |
| Typecheck | `npm run build:check` → `tsc -b` (in `explorer/modern`) | SPA type regressions across the whole project graph |
| Vitest | `npm run test` → `vitest run` | NGG1 deserialise, worker protocol, position transport, COI registration |
| Markdown-mirror contract | file-count comparison against the parser | under-publication of public pages |
| Explorer smoke | `node tests/smoke/graph-smoke.mjs <dir>` | blank canvas, zero-node T0, unreachable focus, perf budgets |

### Gate 1: the secret scan

`ontology/pages/*.md` ships verbatim, so a leaked key in a page is a leaked key on
the internet; this gate blocks rather than warns. Every pattern is anchored to a
token-shaped suffix on purpose. Measured on this corpus: a bare `sk-` substring
matches **1,097 of the 7,457 files** (risk-, task-, disk-, desk-assistant …) while
the anchored `sk-[A-Za-z0-9]{20,}` matches **0**; the bare prefix `[Bb]earer `
appears in **64** files as HTTP prose while `[Bb]earer [A-Za-z0-9._~+/-]{20,}`
matches **0**. The full eight-pattern alternation returns 0 hits over `ontology/`.

Two shell details are load-bearing. Actions runs `run:` blocks under `bash -e`, so
a plain `hits=$(grep …)` would abort the step on grep's exit 1, the *clean* case;
the assignment is therefore written `|| rc=$?`. And only exit 1 counts as a pass:
exit 2 or above prints `Secret scan ERRORED` and fails, so a broken scan is never
mistaken for a clean corpus.

### Gate 2: pipeline unit tests

`pipeline/tests/test_emit_graph_tiers.py` holds nine tests. Measured on this tree
(rdflib 7, python 3.12): `9 passed in 0.16s`.

**NGG1 golden fixture.** `test_golden_183_bytes_byte_exact` builds a 3-node /
2-edge graph and asserts the packed output is byte-identical to the hex dump in
`explorer/FORMAT-NGG1.md` §7 (exactly 183 bytes), then writes
`pipeline/tests/fixtures/ngg1-3n2e.bin`. That file is byte-identical to its twin
at `explorer/modern/src/lib/__fixtures__/ngg1-3n2e.bin`, which the TypeScript
reader test consumes. One worked example, two independent sides, one contract.

`test_golden_roundtrip_assertions` parses the bytes with a **struct reader written
independently of the writer** (its own offsets: 32 / 104 / 128 / 132, stride 24).
A round-trip through shared code would prove only self-consistency; this proves
layout. The 24-byte node stride is itself a documented correction: the original
brief specified 20 bytes, but the named fields sum to 22 and a `u32 degree`
cannot be 4-aligned inside 20, so the pad was widened from 1 byte to 3 and frozen
across all builders. `pipeline/emit_graph_tiers.py:238` asserts
`_NODE_STRUCT.size == NGG1_NODE_STRIDE` at import time.

**overview.json consumer contract.** `test_emit_end_to_end` pins the exact shape
the frozen SPA reads:

- `nodes` has 6 + 34 entries, domains at indices 0-5, categories at 6-39, order
  frozen because the edge records index into `nodes[]`;
- `edges` has 34 entries, every target index `< 6`, every type `EDGE_SUBCLASS`;
- `taxonomy` has 34 entries; without it the side panel falls back to
  "Category N";
- `attributedTo == "did:nostr:jjohare"` **and** `isinstance(..., str)`, because
  `OverviewJson.attributedTo?: string` is rendered verbatim and an object would
  print `[object Object]`;
- `provenance` is the structured `{did, label: "DreamLab AI", corpusNature:
  "synthetic-ai-generated-human-directed"}` object.

The same test pins `stats.json["corpus"]["nature"] == "synthetic"` and a non-empty
`corpus.description`. That is deliberate: the corpus is mostly AI-generated
synthetic content produced under human direction, by design. It is an ontology
testbed, not an authoritative encyclopaedia, and the banner the site renders is
driven from that data rather than from hardcoded copy, so the framing cannot drift
out of the artefacts. `did:nostr`, `generatedAtTime` and the URN identifiers attest
traceable generation under human direction, not human authorship.

`test_relation_topk_cap_by_target_degree` pins the tier policy: object-property
edges capped at `RELATION_TOPK = 8` per source node ranked by descending target
degree, the subClassOf backbone never capped (`_order_source_edges` keeps backbone
whole and slices only the relation list).

### Gate 3: the corpus contract

`EXPECTED_CLASSES: '7457'` is checked against two artefacts the pipeline wrote,
not against stdout: `stats.json["classes"]` and the length of
`ontology.json["class"]`. Both read 7457 in `dist/` on this tree. A dropped JSON-LD
fence or a changed public filter surfaces here as a failing number rather than as a
warning nobody reads. The step also prints `nodes`, `pages`, `domains`,
`categories` and the declared/resolvable edge counts, so a run page carries the
corpus shape without anyone opening an artefact.

`stats.json` reports 7,454 pages against 7,457 classes: three pairs of files share
a page IRI, and the page count is deduplicated by IRI rather than relabelled as the
class count.

### Gate 4: pipeline validation

`pipeline/validate.py` defines six error codes (`MISSING_PAGE_IRI`,
`MISSING_SLUG`, `MISSING_CLASS_IRI`, `MISSING_LABEL`, `SELF_REFERENCE`,
`DUPLICATE_IRI`) and five warning codes (`MISSING_SCHEMA_VERSION`,
`MISSING_DOMAIN`, `INVALID_DOMAIN`, `SLUG_MISMATCH`, `MULTI_PARENT`).

Errors block. Both entry points end `sys.exit(1 if report.errors else 0)`:
`pipeline/build.py:119` and `pipeline/validate.py:226` alike, so the build step
and this gate check the same condition twice through different code paths. Adding
`--json` writes a machine-readable report (`total_pages`, `public_pages`,
`by_code`, `issues[]`) without changing the exit code. Note that `build()` prints
`ERRORS found (non-blocking for build)` before continuing through the remaining
stages; that string describes the *stage loop*, not the process exit. The build
still exits 1. Under a CI shell running with `-e`, the validation step aborts on
the first non-zero exit, which makes any "non-blocking" branch downstream of it
unreachable. Treat validation errors as fatal, because they are.

Warnings never affect the exit code. The current 961 are **957 `MULTI_PARENT`
plus 4 `INVALID_DOMAIN`** and nothing else. `MULTI_PARENT` fires whenever a class
declares more than one `subClassOf`: `A Star Algorithm.md` declares Search
Algorithm, Informed Search and Graph Search. The four `INVALID_DOMAIN` pages
(`AI Investment.md`, `Creative Industries.md`, `Knowledge Economy.md` with domain
`economics`; `Accountability (AI-0068).md` with `ai-governance`) are exactly the
4 domainless nodes reported in `dist/data/graph/stats.json`. Both are known
corpus properties, deliberately left as warnings rather than suppressed.

### Rust tests

`cargo test --all-features` in `explorer/rust-wasm` (crate `webvowl-wasm` 0.3.4).
The extracted tree carries 49 `#[test]` functions across 6 integration files in
`tests/` and 154 in `src/`. Two tests in `phase3_integration.rs` are conditionally
skipped on native targets via
`#[cfg_attr(not(target_arch = "wasm32"), ignore = "…")]`: the `JsValue` error path
and `get_statistics` are wasm32-only seams and are exercised under `wasm-pack
test` instead of aborting a native run.

`tests/ngg1_explorer_test.rs` holds the four that matter for the binary contract,
all over the same 183-byte worked example:

- `ngg1_reader_round_trips_spec_assertions`: the reader agrees with the writer's
  golden;
- `explorer_loads_ticks_and_settles`: 1000 ticks reach the alpha floor with all
  positions finite;
- `explorer_is_deterministic`: two instances produce identical position arrays
  after 300 ticks;
- `explorer_setparam_reheat`: `set_param("reheat")` clears `is_finished`.

Determinism is gated rather than assumed because the layout seeds ship in the
binary and a non-deterministic layout would make every artefact diff noisy.

### Honesty grep

```bash
cd explorer
grep -rInE 'production[ -]ready' --include='*.md' \
    --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=pkg -i . \
  | sed -E 's/^[^:]+:[0-9]+://' \
  | grep -iE 'status|current state|✅|:heavy_check_mark:' \
  | grep -viE 'http|CAPABILITIES\.md'
```

It is a three-stage filter, not a blanket ban on a phrase. Stage one finds every
case-insensitive `production ready` / `production-ready` in shipped markdown.
Stage two keeps only lines that also read as a **status claim**: they contain
`status`, `current state`, or a green tick. Stage three discards any surviving
line that carries an evidence anchor: an `http` URL, or a reference to
`CAPABILITIES.md`. Anything left prints and exits 1.

The intent is narrow and worth stating plainly: prose may discuss production
readiness, and a completion report may use the words. What may not ship is a
bare status assertion with nothing checkable behind it.

The `cd explorer` is not decoration: the gate is scoped to the explorer's own
documentation. Run from the repository root it would sweep `ontology/pages/*.md`
too, where hundreds of corpus pages legitimately describe third-party software
reaching production-ready status, and the gate would fail on prose it was never
meant to police. Scoped as written it finds **11 raw matches across 8 markdown
files and flags 0**; it passes unmodified on this tree.

`explorer/CAPABILITIES.md` is the whitelisted evidence anchor precisely because it
is a table where every row carries a test name, a build log line, or a measured
byte count.

### Private-content filtering is not a gate

The private-content filter is not a CI step and there is no "remove private
pages" pass. `vc:public` on the Page block is the sole publication predicate, read
once at `pipeline/jsonld_parser.py:205` as
`page_block.get("vc:public", False)`, **fail-closed**: a page missing the key is
private.

Five emitters then re-derive publication independently from `PageData.is_public`:
Turtle (`build_graph(..., public_only=True)`), WebVOWL
(`jsonld_to_webvowl.py:48`), page API (`jsonld_to_page_api.py:21`), search index
(`jsonld_to_search.py:18`) and graph tiers (`emit_graph_tiers.py:481`). Nothing
downstream trusts an upstream filter. The one deliberate exception is
`build_backlink_index`, which is called on the full page list so that a private
page linking to a public one still contributes a backlink; the extracted corpus
here contains only the 7,457 public pages, so it does not arise.

The gate that protects publication is the markdown-mirror count contract
below.

---

## 3. Gates that were added because something broke

### Markdown-mirror count contract

Two markdown mirrors exist and they are not the same thing.
`pipeline/jsonld_to_page_api.py:88-91` writes a **slug-form** mirror,
`api/markdown/<slug>.md`, which `pageService.ts` never requests. The mirror the
front end fetches is **title-form**, `/api/markdown/<Title>.md`
(`explorer/modern/src/api/pageService.ts:133`), and it is produced by a shell step
in the source CI, not by anything in `pipeline/`. That title-form dependency is
what made the bug load-bearing.

The shell step filtered with a grep for the literal string `"vc:public": true`,
with a space. The corpus carries both pretty-printed and compact JSON-LD, and
compact blocks read `"vc:public":true`. The filter did not match them, so those
pages were never copied, and every affected page 404'd in the front end, while
the build reported success, because copying fewer files is not an error.

Measured on this corpus, the two patterns still diverge by exactly the historic
amount:

| Pattern | Files matched |
|---------|---------------|
| `"vc:public":[[:space:]]*true` (tolerant) | 7,457 |
| `"vc:public": true` (space-bearing literal) | 6,804 |
| **Silently dropped** | **653** |

Two things were fixed. The regex was made whitespace-tolerant. More importantly,
a **contract gate** was added: the mirror's file count is compared against a
count recomputed through `pipeline.jsonld_parser.parse_corpus`, and any mismatch
fails the build.

Ported to this repository the expectation has to be stated exactly, because the
slug-form mirror is not a one-to-one image of the public corpus:
`jsonld_to_page_api.py` writes a `.md` only when `page.body` is non-empty, and 29
of the 7,457 public pages have an empty body. The runnable form is therefore:

```bash
python -m pipeline.build ontology/pages dist
md_count=$(ls -1 dist/api/markdown/*.md | wc -l)
expected=$(python -c "from pathlib import Path
from pipeline.jsonld_parser import parse_corpus
print(sum(1 for p in parse_corpus(Path('ontology/pages')) if p.is_public and p.body))")
[ "$md_count" -eq "$expected" ] || exit 1
```

Both sides read **7,428** on this tree (7,457 public pages minus the 29 with no
body). Dropping the `and p.body` term would compare 7,428 against 7,457 and fail
on a corpus property rather than on a regression: the exact failure mode a
contract gate exists to avoid.

The lesson generalises past this one bug: **a filter that under-publishes emits no
error signal.** No exception is raised, no file is malformed, no log line is red;
the output is simply smaller than it should be, and smaller output looks exactly
like a smaller corpus. Absence of errors is not evidence of completeness. A
contract gate must therefore assert a **count against an independently computed
expectation**, and the expectation must be computed over the same population the
emitter writes, or the gate measures the wrong thing. Two implementations of
"public" must agree on a number, or the build stops.

### Explorer smoke, and the zero-node T0

`explorer/modern/tests/smoke/graph-smoke.mjs` (201 lines) exists for the same
reason: three regressions shipped that no unit test could see, because each was a
property of the assembled artefact rather than of any module.

1. **Layout**: `.ng-graph-page` collapsed to zero height, so `/graph` rendered a
   canvas of 0px and the explorer was blank. Everything still passed.
2. **Data**: an earlier `overview.json` emitted only `domains`/`categories` and
   no `nodes[]`, so T0 rendered zero nodes against a well-formed file.
3. **Interaction**: the `.ng-sr-only` node-list fallback stayed clipped on focus,
   so the keyboard route into node focus was unreachable.

The smoke serves the built directory itself over HTTP on port 8911 (`SMOKE_PORT`
overrides), with
`Cross-Origin-Opener-Policy: same-origin` and
`Cross-Origin-Embedder-Policy: require-corp` on every response plus a
path-traversal guard (`if (!path.startsWith(root)) 403`), then drives it with
headless Chromium via `playwright` (`^1.56.1`, a devDependency of
`explorer/modern`). Those headers mean the smoke exercises the
cross-origin-isolated `SharedArrayBuffer` transport, not the ping-pong fallback.

**Hard failures** (`process.exit(1)`):

- `/graph` returns a non-OK response;
- `overview.json` unreadable, or `nodes[]` empty, or `taxonomy[]` empty, or
  `attributedTo` missing;
- no `<canvas>` in the page;
- canvas box smaller than 200×200 px;
- interactive surface later than `INTERACTIVE_BUDGET_MS = 5000`;
- zero node-list fallback buttons, or all of them still 0px after `.focus()`;
- any long task over **250 ms** in the settle window;
- JS heap over `HEAP_BUDGET_BYTES = 512 MB`.

**Warnings only**, and this is a deliberate, documented split:

- `LONGTASK_BUDGET_MS = 50`: the PRD budget, reported but not enforced;
- `FIRST_PAINT_BUDGET_MS = 1500`: informational, read from the Paint Timing API.

The observer is reset *after* the surface is up and then watches a 2,500 ms settle
window. Boot-time WASM instantiation legitimately spikes past 50 ms on a two-core
runner; failing on that would produce a flaky gate that teams learn to re-run,
which is worse than no gate. The enforced 250 ms threshold is the "tab never
becomes unresponsive" line. The canvas check similarly polls until the box grows
past R3F's 300×150 default rather than reading immediately, because a genuine CSS
collapse never grows and the guard still bites.

---

## 4. What this repository omits, and why

The private publishing CI is a single `build-and-deploy` job. This repository
carries the build half of it. Three steps and one line make up the difference:

| Removed | What it did |
|---------|-------------|
| gh-pages `/notes` preservation | shallow-cloned the `gh-pages` branch of a private deployment target to salvage a sibling SPA before overwriting it |
| `peaceiris/actions-gh-pages@v3` | pushed the built directory to `gh-pages` on an `external_repository`, authenticated with `secrets.ACCESS_TOKEN` |
| Deployment summary | echoed five live `narrativegoldmine.com` URLs |
| `echo 'narrativegoldmine.com' > <out>/CNAME` | claimed the custom domain for GitHub Pages |

Nothing else in the workflow reads a secret. There is no deploy path here because
there is nothing to deploy *to*: the destination repository, the access token and
the domain are all private infrastructure, and a workflow that references them
would fail for anyone who forks this. Publication targets are the operator's
concern; the build and its gates are the shareable part.

One clarification, because the removal is narrower than it looks: what is gone is
the *CI step* that wrote a `CNAME` into the build output. The repository root does
carry a tracked `CNAME` containing `narrativegoldmine.com`, read by GitHub Pages
branch publishing. No workflow in this tree writes it, reads it or copies it into
`dist/`.

**`narrativegoldmine.com` is not stripped from the pipeline, and must not be.** It
is the IRI namespace: `urn:ngm:class:<slug>` is rewritten to
`https://narrativegoldmine.com/class/<slug>` at `pipeline/jsonld_to_turtle.py:54`
and by `_remap_iri` in `pipeline/jsonld_to_webvowl.py` (which
`emit_graph_tiers.py` imports rather than reimplements), and
`test_emit_graph_tiers.py` asserts every IRI in `full.bin` starts with
`https://narrativegoldmine.com/`. These are the stable identifiers for
252,974 published triples. Rewriting them would invalidate every emitted artefact
and break the golden tests. The domain is removed from *deployment*, not from
*identity*.

### Path remapping

The private workflow's paths refer to the source layout. Anything ported here
must remap:

| Private CI | This repository |
|------------|-----------------|
| `mainKnowledgeGraph/pages` | `ontology/pages` |
| `publishing-tools/WasmVOWL` | `explorer` |
| `www` (output) | `dist` (`dist/data` committed, `dist/api` gitignored) |

A separate PR-scoped workflow in the source repository gates changed corpus pages
against enrichment manifests. It depends on process directories that are not part
of this extraction and is not reproduced.

### Reproducibility caveats

`build.yml` pins one input, `python-version: '3.12'`, and installs nothing else;
every Python number in this document is reproducible from a clone with
`rdflib>=7.0.0` and `pytest`.

The Rust and Node numbers are not, and the gap is worth naming.
`explorer/CAPABILITIES.md` records its evidence under a specific combination:
rustc 1.97.0, wasm-pack 0.15.0, node 22.23.1, vite 6.4.3, python 3.12, measured
2026-07-23. Nothing in this repository pins any of them. Two of the counts
recorded there already predate this tree: `cargo test` 202 passed / 3 ignored, and
vitest 4 files / 40 tests, where the tree now carries 6 vitest files with 47 cases
and 49 `#[test]` functions in `tests/` plus 154 in `src/`. Pin a toolchain before
treating any recorded Rust or Node number as a regression baseline.
