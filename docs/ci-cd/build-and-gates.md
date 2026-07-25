# Build and quality gates

This repository ships a **build**, not a deployment.
`.github/workflows/build.yml` (207 lines) runs the seven-stage Python pipeline
behind four blocking gates and uploads the output as a run artefact;
`permissions: contents: read` is the whole permission set, so it cannot write
anywhere. It is not a strict subset of the private publishing CI. That CI runs
nine gates: two of the four here re-appear in it (pipeline unit tests, corpus
validation — which it runs twice, once inside the build and once standalone),
six more need a Rust or Node toolchain this workflow never installs, and then it
deploys. The other two gates here, the secret scan and the class-count contract,
are specific to this extracted corpus and have no counterpart in that CI, because
the corpus is the published artefact here and is not there. This document
describes each gate, what it catches, and, for three of them, the incident that
shaped it — two that were written because something broke, and one that was
already there and was reporting the wrong thing.

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

The whole pipeline is 2,471 lines of Python across nine modules plus one
496-line test module, and its only runtime dependency is `rdflib>=7.0.0`.

Measured on 2026-07-25 from this tree: **18.7 seconds**, 7,874 public pages in,
7,874 OWL classes and 0 individuals out, 258,200 Turtle triples, 98,776 graph
edges emitted from 111,827 declared, 0 validation errors, 0 warnings and 1,401
informational entries.

```bash
pip install "rdflib>=7.0.0" pytest
python -m pipeline.build ontology/pages dist
python -m pipeline.validate ontology/pages
```

`dist/data/` is committed (`ontology.ttl` 12.7 MB, `ontology.json` 40.4 MB,
`graph/*.bin`, plus the two JSON sidecars `overview.json` and `bridges.json`);
`dist/api/` is 15,701 files and is gitignored, rebuilt in seconds; see
`.gitignore` lines 1-8, where the `/dist/api/` rule sits under a comment
explaining why `/dist/data/` is not ignored.

---

## 2. Gates

### 2.1 What `.github/workflows/build.yml` runs

Four gates, cheapest first, so a leaked credential or a broken unit test fails in
seconds rather than after a 40 MB WebVOWL serialisation.

| # | Gate | Command | Catches |
|---|------|---------|---------|
| 1 | Secret scan | `grep -rInE '<8 anchored patterns>' ontology/` | credential-shaped strings in a corpus that ships verbatim |
| 2 | Pipeline unit tests | `python -m pytest pipeline/tests -q` | NGG1 byte layout, overview.json consumer contract, cap policy |
| 3 | Corpus contract | `EXPECTED_CLASSES: '7874'` read back from two build artefacts | silent parse regressions that move the class count |
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
| Typecheck | `npm run build:check` → `tsc -b && vite build` (in `explorer/modern`) | SPA type regressions across the whole project graph |
| Vitest | `npm run test` → `vitest run` | NGG1 deserialise, worker protocol, position transport, COI registration |
| Markdown-mirror contract | file-count comparison against the parser | under-publication of public pages |
| Explorer smoke | `node tests/smoke/graph-smoke.mjs <dir>` | blank canvas, zero-node T0, unreachable focus, perf budgets |

### Gate 1: the secret scan

`ontology/pages/*.md` ships verbatim, so a leaked key in a page is a leaked key on
the internet; this gate blocks rather than warns. Every pattern is anchored to a
token-shaped suffix on purpose. Measured on this corpus: a bare `sk-` substring
matches **1,107 of the 7,874 files** (risk-, task-, disk-, desk-assistant …) while
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
(rdflib 7.6.0, python 3.12): `9 passed in 0.19s`.

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
- the first 34 `edges` are the backbone, one per category, every target index
  `< 6`, every type `EDGE_SUBCLASS`, and they stay at indices 0-33 so a reader
  that assumed the old backbone-only file is unaffected;
- every edge after those 34 is a category↔category bridge: type
  `EDGE_RELATION`, both endpoints in 6-39, source ≠ target, `weight >= 1`. On
  this corpus `overview.json` carries **124 edges: 34 backbone plus 90
  weighted bridges**, aggregated from the 542 bridging classes in
  `bridges.json`, and the same bridge pairs feed the force layout, so the baked
  positions match the topology that is drawn;
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

`EXPECTED_CLASSES: '7874'` is checked against two artefacts the pipeline wrote,
not against stdout: `stats.json["classes"]` and the length of
`ontology.json["class"]`. Both read 7874 in `dist/` on this tree. A dropped JSON-LD
fence or a changed public filter surfaces here as a failing number rather than as a
warning nobody reads. The step also prints `nodes`, `pages`, `domains`,
`categories` and the declared/resolvable edge counts, so a run page carries the
corpus shape without anyone opening an artefact.

The constant is a contract, not a measurement, so it moves only when the corpus
does. It was `'7457'` until the corpus repair pass added 417 pages for concepts
that two or more existing pages already referenced; the gate is meant to fail on
an unexplained change and to be updated deliberately alongside an explained one.

`stats.json` reports 7,870 pages against 7,874 classes: four pairs of files share
a page IRI (`bitcoin`, `comfy-ui`, `ethereum`, `foundation-models`), and the page
count is deduplicated by IRI rather than relabelled as the class count.

### Gate 4: pipeline validation

`pipeline/validate.py` defines six error codes (`MISSING_PAGE_IRI`,
`MISSING_SLUG`, `MISSING_CLASS_IRI`, `MISSING_LABEL`, `SELF_REFERENCE`,
`DUPLICATE_IRI`), four warning codes (`MISSING_SCHEMA_VERSION`,
`MISSING_DOMAIN`, `INVALID_DOMAIN`, `SLUG_MISMATCH`) and one informational code
(`MULTI_PARENT`). Three severities, one exit code: only errors set it.

Errors block. Both entry points end `sys.exit(1 if report.errors else 0)`:
`pipeline/build.py:119` and `pipeline/validate.py:244` alike, so the build step
and this gate check the same condition twice through different code paths. Adding
`--json` writes a machine-readable report (`total_pages`, `public_pages`,
`by_code`, `issues[]`) without changing the exit code. Note that `build()` prints
`ERRORS found (non-blocking for build)` before continuing through the remaining
stages; that string describes the *stage loop*, not the process exit. The build
still exits 1. Under a CI shell running with `-e`, the validation step aborts on
the first non-zero exit, which makes any "non-blocking" branch downstream of it
unreachable. Treat validation errors as fatal, because they are.

Warnings never affect the exit code, and there are currently none. The report on
this tree reads **0 errors, 0 warnings, 1,401 info**, and every one of the 1,401
is `MULTI_PARENT`:

```
Validation: 7874 pages, 7874 with ontology, 7874 public
Issues: 0 errors, 0 warnings, 1401 info
```

That count was 961 warnings before this pass: 957 `MULTI_PARENT` plus 4
`INVALID_DOMAIN`. Two separate things took it to zero, and they are not the same
kind of change. The four `INVALID_DOMAIN` pages (`AI Investment.md`, `Creative
Industries.md`, `Knowledge Economy.md`, which carried the domain `economics`, and
`Accountability (AI-0068).md`, which carried `ai-governance`) were repaired in
the corpus; all four now read `artificial-intelligence`, `stats.json` reports
`domainless: 0` to match, and the code fires 0 times. The remaining 957 were
`MULTI_PARENT`, and nothing in the corpus was changed for those: the code was
**reclassified from warning to info**. §3 sets out why, because it is the more
interesting of the two.

`MULTI_PARENT` fires whenever a class declares more than one `subClassOf`: `A
Star Algorithm.md` declares Search Algorithm, Informed Search and Graph Search.
It is not suppressed, because it is the only place the bridging is enumerated
per page, and the counts it produces are cross-checked by the emitter:
`stats.json` reports `bridging: {multiParent: 1401, crossCategory: 454,
crossDomain: 153}`, and the 1,401 matches the validator's info count exactly.
`bridges.json` lists the 542 of those classes that reach more than one category
(454) or more than one domain (153), 65 of them both.

That publication is load-bearing rather than decorative. The NGG1 node record
carries a single `u16` category (`FORMAT-NGG1` §3), so the binary tiers keep only
the **nearest** category per node and the rest of the membership is dropped at
pack time. The full membership exists only in the JSON sidecars. That is a real
limitation of the binary format, and `bridges.json` is where the discarded
memberships remain visible.

**What these gates do not check.** Validation is a schema and reference check
over each page; it is not a completeness or quality check on the corpus, and
nothing in §2 asserts one. Three properties hold on this tree that no gate here
would fail on. `stats.json` reports `uncategorised: 3` — three classes whose
ancestry reaches no category root, so the NGG1 writer packs them as `0xFFFF`.
13,051 of the 111,827 declared edges point at a target that is not a declared
class and are dropped before the tiers are packed, leaving the 98,776 resolvable
edges; both numbers are in `stats.json`, and a large share of those targets are
named exactly once across the whole corpus, which a later pass is meant to take.
`individuals: 0` — this is a class hierarchy with no instance data at all. None
of the three is an error under the six error codes and none is meant to be. They
are recorded here because a run page reading "0 errors, 0 warnings" is a
statement about six schema rules, not about the corpus being complete.

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
(`jsonld_to_search.py:18`) and graph tiers (`emit_graph_tiers.py:538`). Nothing
downstream trusts an upstream filter. The one deliberate exception is
`build_backlink_index`, which is called on the full page list so that a private
page linking to a public one still contributes a backlink; the extracted corpus
here contains only the 7,874 public pages, so it does not arise.

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

Measured on this corpus, the two patterns still diverge, and the gap has grown
with the corpus rather than closed:

| Pattern | Files matched |
|---------|---------------|
| `"vc:public":[[:space:]]*true` (tolerant) | 7,874 |
| `"vc:public": true` (space-bearing literal) | 6,984 |
| **Silently dropped** | **890** |

Two things were fixed. The regex was made whitespace-tolerant. More importantly,
a **contract gate** was added: the mirror's file count is compared against a
count recomputed through `pipeline.jsonld_parser.parse_corpus`, and any mismatch
fails the build.

Ported to this repository the expectation has to be stated exactly, because the
slug-form mirror is not a one-to-one image of the public corpus:
`jsonld_to_page_api.py` writes a `.md` only when `page.body` is non-empty, and 51
of the 7,874 public pages have an empty body. The runnable form is therefore:

```bash
python -m pipeline.build ontology/pages dist
md_count=$(ls -1 dist/api/markdown/*.md | wc -l)
expected=$(python -c "from pathlib import Path
from pipeline.jsonld_parser import parse_corpus
print(sum(1 for p in parse_corpus(Path('ontology/pages')) if p.is_public and p.body))")
[ "$md_count" -eq "$expected" ] || exit 1
```

Both sides read **7,823** on this tree (7,874 public pages minus the 51 with no
body). Dropping the `and p.body` term would compare 7,823 against 7,874 and fail
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

### MULTI_PARENT, and the 961 warnings that were the design

The two cases above are gates that were added after a regression shipped. This
one is different and worth separating: the gate was already there, it never
failed, and it reported the wrong thing for as long as it ran. That is the
harder failure to notice, because it produces a number, the number is stable,
and a stable number reads as a measurement.

`MULTI_PARENT` fired at severity `warning` whenever a class declared more than
one `subClassOf`. The rule encodes an assumption: one parent per class. Multiple
inheritance is legal in OWL 2 EL, and in this corpus it is deliberate — classes
are bridged across categories and domains on purpose, which makes the taxonomy a
lattice rather than a tree. The rule therefore fired 957 times against a corpus
that was doing exactly what it was built to do, and the validator reported 961
warnings of which 957 were the design.

That number did not stay in a terminal. "0 validation errors and 961 warnings"
was published in this document, in `build.yml`'s Gate 4 comment, and downstream
of both. Anyone counting defects in the dataset would have counted 961 and found
4.

Three things changed, and only one of them was a corpus fix:

- `MULTI_PARENT` is now severity `info`. The detection is identical; the claim
  is not. Errors block the build, warnings are debt someone is expected to pay
  down, info is what the corpus is.
- the 4 `INVALID_DOMAIN` pages were repaired in the corpus, which is what a
  warning is for; that code now fires 0 times.
- the bridging is no longer computed and thrown away. It is published:
  `stats.json.bridging`, `bridges.json` with 542 entries, and 90 weighted
  category↔category edges in `overview.json` alongside the 34 backbone edges.

The same detector now reports 1,401 rather than 957, because the corpus repair
added 417 classes and reattached orphaned ones, so more classes declare a second
parent. A count that rises is fine when the count is not a defect count.

The lesson generalises in the opposite direction to the mirror-count one. There,
a filter emitted no signal, and the absence of a signal looked like success.
Here, a rule emitted a signal, and the presence of one looked like failure.
**A rule's severity is a claim about intent, not just about structure.** The
structural fact — this class declares three parents — was detected correctly
every time; the wrong part was the attached assertion that nobody meant it. A
validator can only compare data against an assumption someone once wrote down,
and when the data deliberately violates that assumption, the validator will
report the design as a defect list. That output is worse than none, because it
is precise, reproducible and quotable, so it propagates: 961 reached published
documentation and stayed there.

The practical form is a question to answer before adding any rule at `warning`
or above: who is expected to act on a hit, and what would they change? If the
answer is "nobody, the corpus is meant to be like this", the rule belongs at
`info` — surfaced and counted, but not counted as debt. And a warning count that
never falls is one of two things: a backlog nobody is working, or a severity
nobody has questioned. This one was the second, 957 times out of 961.

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
258,200 published triples. Rewriting them would invalidate every emitted artefact
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
