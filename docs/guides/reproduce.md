# Reproduction guide: clone to rendered graph

I ran every command below against this repository while writing the guide, on
Linux, from a clean `python -m venv`. I mark steps I could **not** execute in
this container **UNVERIFIED**, with the reason. Nothing here is aspirational.
The end state is a 258,200-triple OWL file, a 7,874-node binary graph, and a React
SPA rendering it, served from `localhost`.

---

## 1. Prerequisites

Versions used for the verified runs (`--version` output): Python **3.12.13**,
`rdflib` **7.6.0**, `pytest` **9.1.1**, cargo **1.97.0** / rustc **1.97.0**,
`wasm-pack` **0.15.0**, Node **22.23.1**, npm **10.9.8**, git **2.54.0**.

There is no Python manifest file; the dependency constraint lives in
`.github/workflows/build.yml:119` (`pip install "rdflib>=7.0.0" pytest`). The Node
version is pinned only for the explorer's WASM workflow —
`explorer/.github/workflows/wasm-publish.yml:20` sets `NODE_VERSION: '20'`.

The pipeline needs only Python + rdflib. Rust and Node are needed only for the
explorer; `wasm32-unknown-unknown` must be present and `wasm-pack` adds it if not.

```bash
git clone https://github.com/DreamLab-AI/knowledgeGraph.git
cd knowledgeGraph
```

---

## 2. Build the corpus (VERIFIED)

```bash
python -m venv .venv
.venv/bin/pip install "rdflib>=7.0.0" pytest
.venv/bin/python -m pipeline.build ontology/pages dist
```

Run it from the repository root: `pipeline` is a package using relative imports.
Actual output:

```
[1/7] Parsing ontology/pages...
       7874 pages (7874 OntologyClass, 7874 public)
[2/7] Validating...
       0 errors, 0 warnings
[3/7] Generating Turtle...
       258200 triples → dist/data/ontology.ttl
[4/7] Generating WebVOWL JSON...
       7874 classes → dist/data/ontology.json
[5/7] Generating Page API...
       7874 page files → dist/api/pages
[6/7] Generating Search Index...
       7874 entries → dist/api/search-index.json
[7/7] Emitting graph tiers (NGG1)...
       7874 nodes, 98776 edges → dist/data/graph

Pipeline complete in 18.4s
  Output: dist
  Classes: 7874
  Triples: 258200
  Pages: 7874
  Search: 7874
```

Wall clock: 18.4 s on each of the two runs recorded for this guide.

The corpus raises **0 errors and 0 warnings**. It does raise 1,401 *informational*
issues, all of them one code, `MULTI_PARENT`:

```python
from pathlib import Path
from collections import Counter
from pipeline.jsonld_parser import parse_corpus
from pipeline.validate import validate_corpus
report = validate_corpus(parse_corpus(Path("ontology/pages")))
print(Counter(i.code for i in report.issues))
# Counter({'MULTI_PARENT': 1401})
```

`MULTI_PARENT` used to be emitted as a warning, which read as a defect list. It
is not one. Multiple inheritance is legal in OWL 2 EL, and in this corpus it is
deliberate: classes are bridged across categories and domains by design.
`pipeline/validate.py:153` now records it at severity `info`, and the
bridging it describes is published rather than discarded; see `bridges.json`
below. The 4 `INVALID_DOMAIN` warnings the corpus used to raise are gone; every
`domain` string now falls inside the 16-entry `VALID_DOMAINS` set.

`pipeline/build.py:119` exits non-zero only on *errors*.

What lands where:

| Path | Size | Contents |
|------|------|----------|
| `dist/data/ontology.ttl` | 12,710,991 B | OWL 2 EL Turtle, 258,200 triples |
| `dist/data/ontology.json` | 40,382,315 B | WebVOWL JSON, 7,874 classes / 105,603 properties |
| `dist/data/graph/full.bin` | 1,339,983 B | NGG1 binary, 7,874 nodes / 98,776 edges |
| `dist/data/graph/domain-*.bin` | 6 files | per-domain tiers, capped at 1,500 nodes |
| `dist/data/graph/overview.json` | 20,729 B | 40-node T0 tier; 124 edges = 34 backbone + 90 weighted bridge edges |
| `dist/data/graph/stats.json` | 2,560 B | counts + `bridging` block + provenance + corpus nature |
| `dist/data/graph/bridges.json` | 167,379 B | the 542 classes that reach more than one category or domain |
| `dist/api/pages/*.json` | 7,875 files | per-slug page API + `_domain-index.json` |
| `dist/api/markdown/*.md` | 7,823 files | body mirrors (51 pages have empty bodies) |
| `dist/api/search-index.json` | 7,080,482 B | flat search index, 7,874 entries |
| `dist/api/validation-report.json` | — | the stage-2 report, machine-readable |
| `dist/api/schema/context.jsonld` | — | the published JSON-LD context |

`.gitignore` line 7 excludes `dist/api/` (rebuilt in seconds) and keeps `dist/data/`,
the published dataset artefacts.

### A note on checksums

`ontology.json` and the NGG1 tiers are byte-stable: rebuild them and the hashes
match. `ontology.ttl` is not, and this is expected rather than a fault. rdflib
assigns blank-node labels per run, so the OWL restriction blocks
(`owl:someValuesFrom`, `owl:onProperty`) serialise in a different order each
time. Two builds of this corpus produced files of identical length (12,710,991
bytes, 250,733 lines) that differed on 20,676 lines.

The graphs are the same graph. Verified by parsing both and comparing
blank-node-normalised triple sets: 258,200 triples each, sets identical. If you
need to compare two Turtle builds, compare parsed graphs rather than bytes:

```python
from rdflib import Graph, BNode
def norm(path):
    g = Graph(); g.parse(path, format="turtle")
    return {(("_:b" if isinstance(s, BNode) else str(s)), str(p),
             ("_:b" if isinstance(o, BNode) else str(o))) for s, p, o in g}
assert norm("a/ontology.ttl") == norm("b/ontology.ttl")
```

---

## 3. Inspect the outputs

### SPARQL against the Turtle (VERIFIED)

```python
import rdflib
g = rdflib.Graph()
g.parse("dist/data/ontology.ttl", format="turtle")   # 258200 triples, 8.6 s
for r in g.query("""
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX vc:   <https://narrativegoldmine.com/ns/v1#>
    SELECT ?label ?score WHERE {
      ?c vc:sourceDomain "robotics" ; rdfs:label ?label ; vc:qualityScore ?score .
    } ORDER BY DESC(?score) ?label LIMIT 5"""):
    print(r.label, float(r.score))
```

Output: `Proportional Valve 0.85`, `Robotic Grasping 0.85`, `2D LiDAR 0.8`,
`3D LiDAR 0.8`, `Actuation and Control 0.8`.

Prefixes emitted in the file header: `ngm:` = `https://narrativegoldmine.com/class/`,
`ngmi:` = `.../individual/`, `vc:` = `https://narrativegoldmine.com/ns/v1#`, plus
`owl` `rdf` `rdfs` `skos` `xsd` `dc1` (nine `@prefix` lines in total). Domain,
maturity and quality live under `vc:`
(`vc:sourceDomain`, `vc:hasMaturity`, `vc:qualityScore`), not under `rdfs:`.

### WebVOWL JSON (VERIFIED)

`json.load("dist/data/ontology.json")` gives five keys: `header`, `class`,
`classAttribute`, `property`, `propertyAttribute`, with `len(d["class"]) == 7874`
and `len(d["property"]) == 105603`. `d["header"]["description"]` reads
*"Knowledge graph ontology with 7874 nodes across 16 domains"*: that 16 counts
distinct **raw** `domain` strings, not the 6 canonical domains the graph tiers
collapse them onto. The file is 40 MB on a single line with no trailing newline
(`wc -l` reports 0), so it cannot be streamed line by line. Loading it whole takes
0.5 s and peaks at 203 MB RSS (`resource.getrusage(RUSAGE_SELF).ru_maxrss`), about
five times the file size.

### NGG1 binary header (VERIFIED)

The format is documented in `explorer/FORMAT-NGG1.md`. Little-endian, 32-byte
header, 24-byte node records:

```python
import struct
b = open("dist/data/graph/full.bin", "rb").read()
magic, ver, pad, n, e, o_n, o_a, o_t, o_s = struct.unpack_from("<4sHHIIIIII", b, 0)
# b'NGG1' 1 nodes 7874 edges 98776 offsets (32, 189008, 615612, 714388) bytes 1339983

NODE = struct.Struct("<IffHHB3xI")   # id, x, y, domain, category, flags, pad, degree
assert NODE.size == 24
nid, x, y, dom, cat, flags, deg = NODE.unpack_from(b, o_n)
# node0: id 0, (411.66, -579.87), domain 5, category 11, flags 0x4, degree 5

cnt, blob_len = struct.unpack_from("<II", b, o_s)   # cnt == 2 * node_count
offs = struct.unpack_from("<%dI" % cnt, b, o_s + 8)
blob = b[o_s + 8 + 4 * cnt : o_s + 8 + 4 * cnt + blob_len]
# strings[0] = '1Hive', strings[1] = 'https://narrativegoldmine.com/class/1-hive'
```

String `n*2` is node `n`'s label and `n*2+1` its IRI. `category == 65535` means
uncategorised and `domain == 65535` domainless; no node carries the latter. 9
nodes carry the former, of which only 3 are the `uncategorised: 3` that
`stats.json` reports. The other 6 are the domain roots (Artificial Intelligence,
Blockchain, Distributed Collaboration, Infrastructure, Robotics, Spatial
Computing), which sit above the taxonomy rather than outside it and are not
defects. Five of the six declare `owl:Thing` as their parent — those are the 5
`owl:…` parents counted in §6; Spatial Computing declares none at all. The 3
genuinely uncategorised classes are Electric Vehicle, Ethan Mollick and Urban
Planning.

Flags: `0x01` domain root, `0x02` category root, `0x04` has page, `0x08` bridge.
The writer also emits `0x10` for an Individual (`pipeline/emit_graph_tiers.py:221`,
`FLAG_INDIVIDUAL`); `explorer/FORMAT-NGG1.md` §5 still lists bits 4–7 as reserved,
so the file is the newer of the two. The extracted corpus has 0 individuals, so no
node in `full.bin` carries that bit.

Note that `0x08` is **not** the taxonomy bridging described below. The writer sets
it only when a class declares a `bridgesTo` relation
(`pipeline/emit_graph_tiers.py:633-636`); multi-category membership is carried in
`bridges.json`, not in the flags byte.

### Bridging classes (VERIFIED)

1,401 classes declare more than one parent. That is a design property of this
corpus, not a defect, so the pipeline publishes what the overlap amounts to
instead of discarding it. `stats.json` carries the headline counts:

```json
"bridging": { "multiParent": 1401, "crossCategory": 454, "crossDomain": 153 }
```

454 of those 1,401 reach more than one of the 34 taxonomy categories and 153 span
more than one of the 6 domains; the union, 542 classes, is enumerated in
`bridges.json`. Category and domain ids in that file index the arrays in
`overview.json`, so read the two together:

```python
import json
bridges  = json.load(open("dist/data/graph/bridges.json"))
overview = json.load(open("dist/data/graph/overview.json"))
cat = {c["id"]: c["label"] for c in overview["categories"]}
dom = {d["id"]: d["label"] for d in overview["domains"]}

print(bridges["count"])                                       # 542
print(sum(1 for b in bridges["bridges"] if len(b["categories"]) > 1))   # 454
print(sum(1 for b in bridges["bridges"] if len(b["domains"]) > 1))      # 153

b = next(x for x in bridges["bridges"] if x["label"] == "AI Documentation Standards")
print(b["categories"], [cat[c] for c in b["categories"]])
print(b["domains"],    [dom[d] for d in b["domains"]])
print(b["parents"])
```

Output:

```
542
454
153
[3, 16] ['AI Governance and Ethics', 'Standards and Interoperability']
[0, 5] ['Artificial Intelligence', 'Infrastructure']
['AI Governance and Ethics', 'Documentation Standards']
```

*AI Documentation Standards* is a single class sitting under two parents that
resolve to two categories in two different domains. Read the same node out of
`full.bin` and it reports `category 3` and nothing else — the NGG1 node record
holds a **single** `u16` category (`explorer/FORMAT-NGG1.md` §3, byte offset 14),
so the tiers keep only the nearest category ancestor and drop the rest. The full
membership exists only in `bridges.json`. If you are computing anything over
category overlap, read the JSON; the binary cannot answer the question.

The same bridging feeds the T0 tier. `overview.json` carries 124 edges over its
40 nodes (6 domain roots, ids 0–5; 34 categories, ids 6–39): 34 of `type 0`, the
category→domain backbone, and 90 of `type 1`, each a weighted category↔category
edge whose `weight` is the number of classes bridging that pair. Weights run 1 to
73, the heaviest being AI Technique ↔ AI Research Area. Those edges also feed the
force layout, so the baked positions in `overview.json` and the tiers match the
topology the renderer draws.

### What the tiers drop (VERIFIED)

`stats.json` reports 111,827 declared edges against 98,776 resolvable. The gap is
13,051 references, and it decomposes exactly:

```python
from pathlib import Path
from collections import defaultdict
from pipeline.jsonld_parser import parse_corpus
from pipeline.jsonld_to_webvowl import _remap_iri
from pipeline.emit_graph_tiers import RELATION_ATTRS

pub = [p for p in parse_corpus(Path("ontology/pages")) if p.ontology_class and p.is_public]
declared = {_remap_iri(p.ontology_class.iri) for p in pub}
undeclared = dup = kept = 0
seen, targets = set(), defaultdict(set)
for p in pub:
    oc = p.ontology_class
    src = _remap_iri(oc.iri)
    refs = [(r.iri, 0) for r in oc.sub_class_of]
    refs += [(r.iri, 1) for a in RELATION_ATTRS for r in (getattr(oc.relations, a, []) or [])]
    for iri, etype in refs:
        tgt = _remap_iri(iri)
        if tgt not in declared:
            undeclared += 1; targets[tgt].add(src)
        elif (src, tgt, etype) in seen:
            dup += 1
        else:
            seen.add((src, tgt, etype)); kept += 1
print(undeclared, dup, kept)                                  # 6224 6827 98776
print(len(targets), sum(1 for v in targets.values() if len(v) == 1))   # 4384 2946
```

6,224 references name a target no page declares. 6,827 are duplicate
`(source, target, type)` triples, which collapse to one edge. No class references
itself — `SELF_REFERENCE` is an error code and the corpus raises none.

Those 6,224 are the corpus's remaining dangling references and they are a real,
acknowledged gap. 5 of them are `subClassOf` (one target, named by five pages);
the other 6,219 are relation refs across 4,383 distinct targets. They are not
silently discarded: in the Turtle, a relation target with no page becomes a
`skos:Concept` stub with a label rebuilt from the slug, so `ontology.ttl` carries
4,383 such stubs and the triple survives with a weaker type. In the NGG1 tiers
there is no stub node, so the edge is simply absent.

2,946 of those 4,384 targets are named by exactly one page. Those are deliberately
left: the corpus's in-degree rule only authors a class for a concept two or more
pages already reference, on the grounds that a single unsupported mention is not
evidence a concept exists. `docs/methodology/corpus-generation.md` §9 records that
policy and publishes its own count for it; the detector there is narrower than the
one above, so the two figures are not interchangeable.

---

## 4. Build the explorer

### 4a. WASM (VERIFIED)

```bash
cd explorer/rust-wasm
wasm-pack build --release --target web --out-dir pkg
```

25.1 s here. Produces `pkg/webvowl_wasm_bg.wasm` at **1,474,790 bytes**, under the
1.5 MB ceiling `explorer/.github/workflows/wasm-publish.yml` enforces
(`WASM_SIZE_LIMIT_MB: 1.5`, line 21). `--target web` is not optional: the physics
worker imports the wasm-bindgen ES glue and calls `mod.default()` for `{ memory }`.
Ignore the crate-root `webvowl_wasm.d.ts`: it is hand-written and stale — it
declares `WebVowl` and no `NggExplorer` at all, while the exported type is
`NggExplorer` (`explorer/rust-wasm/src/bindings/explorer.rs:17`). The regenerated
`pkg/webvowl_wasm.d.ts` is the authoritative one and does declare it.

If `wasm-pack` aborts with `Permission denied (os error 13)` immediately after
installing wasm-bindgen, see §7: the cache directory has to be executable, not
merely writable.

### 4b. SPA (VERIFIED)

```bash
cd ../modern
mkdir -p public/data/graph public/api
cp ../../dist/data/ontology.json public/data/ontology.json
cp ../../dist/data/ontology.ttl  public/data/ontology.ttl
cp -r ../../dist/data/graph/.    public/data/graph/
cp ../../dist/api/search-index.json public/api/search-index.json

npm install --no-audit --no-fund
npm install ../rust-wasm/pkg
npx tsc -b
npm run test
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

The staging copy is what lets a local `vite preview` resolve `/data/graph/*.bin` and
`/api/search-index.json`. Note that `vite build` empties `explorer/modern/dist/`
first, so anything you copied straight into that directory rather than into
`public/` is destroyed by the next build.

`vite build` took 15.5 s and emitted `dist/assets/GraphPage-*.js` at 1,030.53 kB
(286.21 kB gzipped), `PageView-*.js` at 393.92 kB, `index-*.js` at 247.91 kB, plus
the hashed `webvowl_wasm_bg-*.wasm` (the same 1,474,790 bytes as `pkg/`). The
>500 kB chunk warning is expected: GraphPage is the only route pulling Three.js,
the worker and the WASM.

### 4c. Serve locally (VERIFIED)

`npx vite preview --port 8913` → `GET /` 200 and `GET /data/graph/overview.json`
200. A plain `python3 -m http.server` over `explorer/modern/dist` also serves
`index.html`, `overview.json`, `full.bin` and the `.wasm` correctly (all 200).
`npm run dev` is **UNVERIFIED**: I only exercised the production build path.

---

## 5. Running the tests

| Suite | Command (cwd) | Result | Status |
|-------|---------------|--------|--------|
| Pipeline | `.venv/bin/python -m pytest pipeline/tests -q` (root) | 9 passed in 0.19 s | VERIFIED |
| Rust | `cargo test --all-features` (`explorer/rust-wasm`) | 201 passed, 2 ignored; doc-tests 1 passed, 1 ignored | VERIFIED |
| SPA unit | `npm run test` (`explorer/modern`) | 6 files, 47 tests passed in 1.08 s | VERIFIED |
| Type check | `npx tsc -b` (`explorer/modern`) | exit 0, no diagnostics | VERIFIED |
| Honesty grep | see below (`explorer`) | 11 raw matches, 0 flagged | VERIFIED |
| Explorer smoke | `node tests/smoke/graph-smoke.mjs <www-dir>` (`explorer/modern`) | n/a | **UNVERIFIED** |

Only the first row is a gate in this repository's own CI.
`.github/workflows/build.yml` installs Python and nothing else: it runs the secret
scan, `pytest pipeline/tests`, the 7,874-class corpus contract and
`pipeline.validate`. The other five rows need a Rust or Node toolchain and run in
the private publishing CI. The split is tabulated in
`docs/ci-cd/build-and-gates.md` §2.1 and §2.2.

Rust breakdown: 154 lib unit tests, then `integration_test` 5, `markdown_parser_test`
10, `ngg1_explorer_test` 4, `ontology_metadata_test` 11, `owl2_validation_test` 10,
`phase3_integration` 7 (+2 ignored: `JsValue`/`get_statistics` are wasm32-only,
`#[cfg_attr(not(target_arch = "wasm32"), ignore = …)]` at
`tests/phase3_integration.rs:311` and `:419`).

The honesty grep, as `docs/ci-cd/build-and-gates.md` §2.2 records it: empty output
is a pass. It bans the phrase only as an unevidenced *status* claim, not in prose:

```bash
cd explorer
grep -rInE 'production[ -]ready' --include='*.md' \
    --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=pkg -i . \
  | sed -E 's/^[^:]+:[0-9]+://' \
  | grep -iE 'status|current state|✅|:heavy_check_mark:' \
  | grep -viE 'http|CAPABILITIES\.md'
```

**Why the smoke test is unverified:** `npx playwright install chromium` downloads
fine, but the bundled `headless_shell` fails with `error while loading shared
libraries: libglib-2.0.so.0` here. The fix is `--with-deps`, which apt-installs
those libraries and needs root. What the test would assert is in
`explorer/modern/tests/smoke/graph-smoke.mjs`: canvas paints a box of at least
200×200, `overview.json` carries non-empty `nodes[]`/`taxonomy[]` and
`attributedTo`, the node-list fallback is clickable, no settle-window task over
250 ms, heap under 512 MB.

---

## 6. Author a page that survives validation (VERIFIED)

A page is Logseq markdown carrying two fenced ` ```json-ld ` blocks: a **Page**
block (publication metadata, `vc:` vocabulary) and a **Class** block (the ontology
entity, v2 context). The body is everything after the last fence. The parser
ignores anything after the first block of each type.

Save this as `ontology/pages/Ring Signature.md`:

````markdown
public:: true

# Ring Signature

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ring-signature",
  "@type": "Page",
  "title": "Ring Signature",
  "vc:slug": "ring-signature",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [{"@id": "urn:visionflow:linked:digital-signature", "vc:label": "Digital Signature"}]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ring-signature",
  "@type": "Class",
  "label": "Ring Signature",
  "definition": "A signature scheme in which any member of a defined set of possible signers can produce a signature that verifies against the set as a whole, without revealing which member signed.",
  "domain": "blockchain",
  "maturity": "established",
  "quality": 0.7,
  "subClassOf": [{"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}],
  "relations": {
    "requires":  [{"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"}],
    "enables":   [{"@id": "urn:ngm:class:transaction-privacy", "label": "Transaction Privacy"}],
    "relatedTo": [{"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero Knowledge Proof"}]
  },
  "sameAs": [],
  "provenance": {"attributedTo": "did:nostr:example", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "ManualAuthoring"}
}
```

- Ring signatures give **signer ambiguity** within a chosen anonymity set.
	- The verifier learns only that *someone* in the ring signed. [[Zero Knowledge Proof]]
````

Validate it on its own before touching the corpus:

```bash
.venv/bin/python -m pipeline.validate /path/to/dir-with-just-that-page
# Validation: 1 pages, 1 with ontology, 1 public
# Issues: 0 errors, 0 warnings, 0 info
```

Building that one-page directory yields 124 triples, the quickest way to see how
each JSON-LD key maps:

```turtle
ngm:ring-signature a owl:Class ;
    rdfs:label "Ring Signature"@en ;
    rdfs:comment "A signature scheme in which any member ..."@en ;
    rdfs:subClassOf ngm:digital-signature ;
    vc:enables ngm:transaction-privacy ;
    vc:hasMaturity ngmi:maturity-established ;
    vc:qualityScore "0.7"^^xsd:float ;
    vc:relatedTo ngm:zero-knowledge-proof ;
    vc:requires ngm:public-key-cryptography ;
    vc:slug "ring-signature" ;
    vc:sourceDomain "blockchain" .
```

Rules `pipeline/validate.py` enforces. **Errors** (any one fails the build):
`MISSING_PAGE_IRI`, `MISSING_SLUG`, `MISSING_CLASS_IRI`, `MISSING_LABEL`,
`SELF_REFERENCE` (a `subClassOf` naming the class's own IRI) and `DUPLICATE_IRI`
(one entity `@id` claimed by two files). **Warnings** (never fail the build):
`MISSING_SCHEMA_VERSION`; `MISSING_DOMAIN`; `INVALID_DOMAIN` for a `domain` outside
the 16-entry `VALID_DOMAINS` set (`validate.py:24` — the 6 roots plus `ai`,
`supply-chain`, `metaverse`, `data`, `governance`, `security`, `standards`,
`finance`, `distributed-systems`, `machine-learning`); and `SLUG_MISMATCH` for a
parent IRI slug that disagrees with the parent label — which only fires when the
parent IRI contains the literal `owl:class:` and does not start with
`urn:visionflow:linked:`. The corpus raises 0 of all four today — `by_code` in
`dist/api/validation-report.json` holds one key. `SLUG_MISMATCH` in particular
cannot fire on this corpus at all: 9,476 of its 9,481 declared parents are
`urn:ngm:class:…` and the remaining 5 `owl:…`, so no parent IRI carries the
literal the check looks for.
**Info** (surfaced, never a warning): `MULTI_PARENT` for more than one
`subClassOf` entry, which 1,401 corpus pages carry.

Four behaviours to know before authoring at scale: `vc:public` defaults to **false**,
so omitting it silently drops the page from every output; the pipeline drops a page
with no `@type: "Page"` block entirely, with no diagnostic; a relation target that
is not itself a declared page becomes a `skos:Concept` stub rather than a dangling
`owl:Class` (above, all four declared edges are unresolvable, so `stats.json` reports
`resolvable: 0`); and a node's category is inherited by a breadth-first walk of
`subClassOf`/`instanceOf` ancestry, nearest category ancestor winning, bounded at
12 hops (`pipeline/emit_graph_tiers.py:482-531`). Parents are visited in declared
order so the choice is deterministic: the NGG1 tiers are byte-compared against a
golden fixture in CI, and a set-ordered walk would break it. The walk used to read
direct parents only, which pushed anything two or more hops below a category root
into the uncategorised bucket: 4,033 classes, 89.7% of the 4,498 then reported.
Fixing the resolver took that count to 465; a subsequent repair of the corpus took
it to the 3 that stand today.

---

## 7. Troubleshooting

- **`ModuleNotFoundError: No module named 'pipeline'`**: you are not in the
  repository root. `python -m pipeline.build` resolves the package from the cwd.
- **`wasm-pack` fails with `Error: Permission denied (os error 13)` right after
  "Installing wasm-bindgen"**, or **`npm error enoent … mkdir '/home/<user>/.npm'`**,
  both hit here: the tools want caches under a `$HOME` they cannot write. Redirect
  them with `XDG_CACHE_HOME=<cache> WASM_PACK_CACHE=<cache> wasm-pack build …` and
  `npm_config_cache=<cache> npm install …`. **`<cache>` must be on a filesystem
  mounted without `noexec`.** Pointing `WASM_PACK_CACHE` at `/tmp` here reproduces
  the identical `Permission denied (os error 13)` one step later, because
  `wasm-pack` downloads the `wasm-bindgen` binary into the cache and then executes
  it (`Running "<cache>/wasm-bindgen-…/wasm-bindgen" "--version"`), and this
  container's `/tmp` is `tmpfs … noexec` (`grep ' /tmp ' /proc/mounts`). A cache
  under the workspace succeeded in 25.1 s.
- **`npx tsc -b` prints "This is not the tsc command you are looking for"**: `npx`
  fetched the unrelated `tsc` package because TypeScript was not installed locally.
  That happens when `NODE_ENV=production` is exported: npm then skips
  devDependencies, so `typescript`, `vite` and `vitest` never reach `node_modules`.
  Fix with `npm install --include=dev`, then `./node_modules/.bin/tsc -b`.
- **`headless_shell: error while loading shared libraries: libglib-2.0.so.0`**: the
  Playwright browser downloaded but its system libraries are absent. Use
  `npx playwright install --with-deps chromium` (needs root). This blocked the smoke
  test here.
- **The graph renders but never settles, or nodes fly apart**: check
  `explorer/modern/src/workers/protocol.ts::canUseSharedMemory`. It returns `false`
  unconditionally on purpose: the SharedArrayBuffer transport had an unsynchronised
  read/write race whose half-written frames the force sim amplified to ~1e20.
  Re-enable only behind a double-buffered SAB with an `Atomics`-gated generation flip.
- **`ontology.json` will not stream**: it is 40 MB on a single line with no trailing
  newline, so any line-oriented reader gets the whole file in one string. `json.load`
  handles it in 0.5 s at a 203 MB RSS peak here; if that is too much, use `ijson`, or
  work from `ontology.ttl` (12.7 MB) or `full.bin` (1.34 MB) instead.
- **A page you added does not appear.** In order of likelihood: `vc:public` missing
  or false; the Page block is malformed JSON (the parser `json.loads` each fence and
  silently skips decode failures); or the body is empty, in which case
  `dist/api/pages/<slug>.json` exists but `dist/api/markdown/<slug>.md` is never
  written. 51 corpus pages are in that last state.
- **The SPA renders HTML source instead of a page**:
  `explorer/modern/src/api/pageService.ts:133` fetches prose by **title**
  (`/api/markdown/<Title>.md`) while structured data comes by **slug**
  (`/api/pages/<slug>.json`). `pipeline/jsonld_to_page_api.py:88-91` writes only the
  **slug-form** mirror; the title-form one is produced by a shell step in the
  publishing CI, not by anything in `pipeline/`. If it is missing, a static host
  serves `index.html` rather than a 404, and `isValidMarkdown` catches and rejects
  that. The publishing CI guards the drift with a count contract — the mirror's file
  count against a count recomputed through `pipeline.jsonld_parser.parse_corpus`,
  over public pages **with a non-empty body** (7,823 here, not 7,874). The runnable
  form and the incident that caused it are in `docs/ci-cd/build-and-gates.md` §3.

---

## 8. Out of scope

**Deployment**: `.github/workflows/build.yml` has no GitHub Pages step, no
publishing action and no reference to any secret; `permissions: contents: read` is
its whole permission set. This repo builds artefacts; it does not ship them. The
repository root *does* carry a `CNAME` (`narrativegoldmine.com`) for the published
site, but no workflow step here reads, writes or acts on it — the Pages push lives
in the private publishing CI (`docs/ci-cd/build-and-gates.md` §1).

**The corpus itself.** The 7,874 pages are mostly AI-generated synthetic content
produced under human direction, by design: an ontology testbed, not an authoritative
encyclopaedia. `stats.json` says so in `corpus.description`, and provenance
(`did:nostr`, `generatedAtTime`, URNs) attests traceable generation under human
direction, not human authorship. Say the same about your own corpus.

**Licensing**: `pipeline/` and the CI glue are AGPL-3.0-or-later; `explorer/` is MIT
(a derivative of WebVOWL, © 2014–2019 Vincent Link, Steffen Lohmann, Eduard Marbach,
Stefan Negru, Vitalis Wiens); the `ontology/` corpus is ODbL-1.0.
