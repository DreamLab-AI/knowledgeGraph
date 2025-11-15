# Phase 2: Core Parser Migration - Detailed Task Breakdown

**Phase Duration:** 2-3 weeks (80-120 hours)
**Primary Agents:** backend-dev, code-analyzer
**Dependencies:** Phase 1 (Planning) complete

---

## Overview

Migrate OWL/ontology extraction logic from Python to Rust, integrate with existing Logseq parser, and expose via CLI and napi-rs bindings for Node.js consumption.

**Success Criteria:**
- [ ] Rust parses OntologyBlock headers with 100% accuracy vs Python baseline
- [ ] CLI binary generates identical TTL output to Python script
- [ ] napi-rs bindings expose Rust functions to Node.js
- [ ] Build time remains <5 minutes
- [ ] All existing tests pass

---

## Task 2.1: OWL Extraction Module (16-24 hours)

### Subtask 2.1.1: Create `owl_extractor.rs` Module
**Duration:** 4-6 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** None

**Implementation Steps:**
1. Create new file: `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs`
2. Define `OntologyBlock` struct matching Python parser:
   ```rust
   pub struct OntologyBlock {
       pub term_id: String,
       pub preferred_term: Option<String>,
       pub owl_class: Option<String>,
       pub subclass_of: Vec<String>,
       pub domain: Option<String>,
       pub range: Option<String>,
       pub owl_axioms: Option<String>,
   }
   ```
3. Implement `extract_ontology_block(content: &str) -> Option<OntologyBlock>`
4. Parse markdown structure:
   - Find `### OntologyBlock` header
   - Extract properties until next `##` heading
   - Handle nested list structures

**Success Criteria:**
- [ ] Parses OntologyBlock from markdown string
- [ ] Handles missing optional fields gracefully
- [ ] Extracts multi-line OWL axioms in clojure code blocks
- [ ] Unit tests for 10+ sample pages (AI-0001, BC-0001, etc.)

**Testing:**
```bash
cargo test owl_extractor::tests --features test-utils
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs` (new)
- `rust-web-publish/logseq-publisher-rust/src/lib.rs` (add module declaration)

---

### Subtask 2.1.2: Namespace Management
**Duration:** 3-4 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 2.1.1

**Implementation Steps:**
1. Create `Namespace` enum in `owl_extractor.rs`:
   ```rust
   pub enum Namespace {
       AI,  // artificial-intelligence
       BC,  // blockchain
       MV,  // metaverse
       RB,  // robotics
       DT,  // disruptive-technologies
   }
   ```
2. Implement namespace detection from term-id prefix (AI-####, BC-####, etc.)
3. Generate full IRIs: `http://disruption.org/ontology/{domain}#{term-id}`
4. Add namespace prefixes to TTL output

**Success Criteria:**
- [ ] Correctly maps term-id to namespace
- [ ] Generates valid IRI strings
- [ ] Supports all 5 namespaces (AI, BC, MV, RB, DT)
- [ ] Unit tests for namespace resolution

**Testing:**
```bash
cargo test namespace::tests
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs`

---

### Subtask 2.1.3: RDF Triple Generation
**Duration:** 6-8 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** 2.1.2

**Implementation Steps:**
1. Add dependency: `sophia = "0.8"` (RDF library) to Cargo.toml
2. Implement `to_rdf_triples(block: &OntologyBlock) -> Vec<Triple>`:
   - Generate `rdf:type owl:Class` triple
   - Generate `rdfs:subClassOf` triples
   - Generate `rdfs:domain` and `rdfs:range` for properties
   - Parse OWL axioms from clojure code blocks
3. Create `TTLSerializer` struct for Turtle output
4. Implement bridge relationship triples (dt:enables, dt:requires, etc.)

**Success Criteria:**
- [ ] Generates valid RDF triples for each OntologyBlock
- [ ] Outputs syntactically correct Turtle/OWL
- [ ] Matches Python converter output (35,952 triples baseline)
- [ ] Integration test comparing Rust vs Python on 100 sample pages

**Testing:**
```bash
cargo test rdf_triple_generation --features integration-tests
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/Cargo.toml` (add sophia dependency)
- `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs`

---

### Subtask 2.1.4: Multi-Page Processing Pipeline
**Duration:** 3-4 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 2.1.3

**Implementation Steps:**
1. Implement `process_directory(pages_dir: &Path) -> Result<Graph, Error>`:
   - Walk directory recursively
   - Filter for `*.md` files
   - Parse each file with `owl_extractor`
   - Aggregate RDF triples
2. Add progress reporting (log every 100 pages)
3. Handle errors gracefully (skip invalid pages, log warnings)

**Success Criteria:**
- [ ] Processes 2,519+ markdown files
- [ ] Completes in <30 seconds (match Python performance)
- [ ] Logs progress and error statistics
- [ ] Benchmark test comparing Rust vs Python speed

**Testing:**
```bash
cargo bench owl_processing_benchmark
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs`

---

## Task 2.2: Parser.rs Integration (12-16 hours)

### Subtask 2.2.1: Extend Existing Parser
**Duration:** 4-6 hours
**Agent:** code-analyzer
**Priority:** High
**Dependencies:** 2.1.4

**Implementation Steps:**
1. Open `rust-web-publish/logseq-publisher-rust/src/parser.rs`
2. Add `ontology: Option<OntologyBlock>` field to `Page` struct
3. Modify `parse_logseq_page()` to call `extract_ontology_block()`
4. Store ontology data alongside page properties

**Success Criteria:**
- [ ] Page struct contains ontology metadata
- [ ] Parser extracts ontology without breaking existing functionality
- [ ] All existing parser tests pass
- [ ] New tests for ontology extraction in pages

**Testing:**
```bash
cargo test parser::tests::test_ontology_extraction
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/parser.rs`

---

### Subtask 2.2.2: Graph Database Ontology Index
**Duration:** 5-7 hours
**Agent:** backend-dev
**Priority:** Medium
**Dependencies:** 2.2.1

**Implementation Steps:**
1. Open `rust-web-publish/logseq-publisher-rust/src/graph.rs`
2. Add `ontology_index: HashMap<String, OntologyBlock>` to `Graph` struct
3. Index pages by term-id (e.g., AI-0001, BC-0097)
4. Implement `get_ontology_by_term_id(&self, term_id: &str) -> Option<&OntologyBlock>`
5. Implement `get_subclasses(&self, term_id: &str) -> Vec<&OntologyBlock>`

**Success Criteria:**
- [ ] Fast O(1) lookup by term-id
- [ ] Supports hierarchy traversal (subclass queries)
- [ ] Integration test with 1,155 ontology pages

**Testing:**
```bash
cargo test graph::ontology_index_tests
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/graph.rs`

---

### Subtask 2.2.3: Backward Compatibility Layer
**Duration:** 3-4 hours
**Agent:** code-analyzer
**Priority:** Medium
**Dependencies:** 2.2.2

**Implementation Steps:**
1. Ensure existing `parse_files()` API unchanged
2. Add optional `include_ontology: bool` parameter to export functions
3. Make ontology extraction opt-in (default: false) for non-breaking change

**Success Criteria:**
- [ ] Existing tests pass without modification
- [ ] API remains backward compatible
- [ ] Ontology features accessible via opt-in flag

**Testing:**
```bash
cargo test --all-features
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/lib.rs`

---

## Task 2.3: CLI Binary Enhancement (8-12 hours)

### Subtask 2.3.1: Add `ontology` Subcommand
**Duration:** 4-6 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 2.2.3

**Implementation Steps:**
1. Open `rust-web-publish/logseq-publisher-rust/src/main.rs` (or create if not exists)
2. Add `clap` dependency to Cargo.toml for CLI parsing
3. Implement subcommands:
   ```bash
   logseq-publisher ontology extract --pages-dir <DIR> --output <FILE.ttl>
   logseq-publisher ontology stats --pages-dir <DIR>
   logseq-publisher ontology validate --pages-dir <DIR>
   ```
4. Wire up to `owl_extractor` module

**Success Criteria:**
- [ ] CLI binary compiles and runs
- [ ] `extract` subcommand generates TTL file
- [ ] `stats` subcommand reports class/property counts
- [ ] `validate` subcommand checks for errors in OntologyBlocks
- [ ] CLI help documentation is clear

**Testing:**
```bash
cargo build --release
./target/release/logseq-publisher ontology extract --pages-dir mainKnowledgeGraph/pages --output /tmp/test.ttl
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/main.rs` (new or modified)
- `rust-web-publish/logseq-publisher-rust/Cargo.toml` (add clap dependency)

---

### Subtask 2.3.2: Output Format Options
**Duration:** 2-3 hours
**Agent:** backend-dev
**Priority:** Medium
**Dependencies:** 2.3.1

**Implementation Steps:**
1. Add `--format` flag to `extract` subcommand:
   - `ttl` (Turtle/OWL) - default
   - `json` (WebVOWL JSON)
   - `csv` (simple table export)
2. Implement serializers for each format
3. Validate output against Python converters

**Success Criteria:**
- [ ] Supports 3 output formats
- [ ] TTL output matches Python script
- [ ] JSON output compatible with WebVOWL frontend
- [ ] CSV export useful for spreadsheet analysis

**Testing:**
```bash
logseq-publisher ontology extract --format json --output /tmp/test.json
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-rust/src/main.rs`
- `rust-web-publish/logseq-publisher-rust/src/owl_extractor.rs`

---

### Subtask 2.3.3: GitHub Actions Integration
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** High
**Dependencies:** 2.3.2

**Implementation Steps:**
1. Open `.github/workflows/publish.yml`
2. Replace Python ontology extraction with Rust CLI:
   ```yaml
   - name: Extract Ontology (Rust)
     run: |
       cargo build --release --manifest-path rust-web-publish/logseq-publisher-rust/Cargo.toml
       ./rust-web-publish/logseq-publisher-rust/target/release/logseq-publisher \
         ontology extract \
         --pages-dir mainKnowledgeGraph/pages \
         --output /tmp/narrativegoldmine-ontology.ttl

       ./rust-web-publish/logseq-publisher-rust/target/release/logseq-publisher \
         ontology extract \
         --pages-dir mainKnowledgeGraph/pages \
         --format json \
         --output /tmp/narrativegoldmine-ontology.json
   ```
3. Remove Python dependency steps
4. Test in staging branch

**Success Criteria:**
- [ ] GitHub Actions workflow uses Rust CLI
- [ ] Build time improves (Python setup overhead eliminated)
- [ ] Output files identical to Python version
- [ ] Staging deployment succeeds

**Testing:**
Push to staging branch and verify workflow passes.

**Files Modified:**
- `.github/workflows/publish.yml`

---

## Task 2.4: napi-rs Bindings (12-16 hours)

### Subtask 2.4.1: Setup napi-rs Project
**Duration:** 3-4 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 2.3.3

**Implementation Steps:**
1. Create new directory: `rust-web-publish/logseq-publisher-napi/`
2. Initialize napi-rs project:
   ```bash
   npm init napi --name @narrativegoldmine/logseq-publisher
   ```
3. Configure `Cargo.toml`:
   ```toml
   [dependencies]
   napi = "2.0"
   napi-derive = "2.0"
   logseq-publisher-rust = { path = "../logseq-publisher-rust" }
   ```
4. Configure `package.json` with build scripts

**Success Criteria:**
- [ ] napi-rs project initialized
- [ ] Dependencies configured correctly
- [ ] Sample binding compiles

**Testing:**
```bash
npm run build
npm test
```

**Files Created:**
- `rust-web-publish/logseq-publisher-napi/` (entire directory structure)

---

### Subtask 2.4.2: Expose Rust Functions to Node.js
**Duration:** 5-7 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** 2.4.1

**Implementation Steps:**
1. Create `rust-web-publish/logseq-publisher-napi/src/lib.rs`:
   ```rust
   #[napi]
   pub fn extract_ontology(pages_dir: String, output_path: String) -> Result<String> {
       // Call logseq_publisher_rust::owl_extractor
   }

   #[napi]
   pub fn parse_ontology_block(markdown: String) -> Result<OntologyBlockJS> {
       // Parse single page
   }

   #[napi(object)]
   pub struct OntologyBlockJS {
       pub term_id: String,
       pub preferred_term: Option<String>,
       pub owl_class: Option<String>,
       // ... other fields
   }
   ```
2. Handle type conversions (Rust -> JS)
3. Implement error handling for Node.js

**Success Criteria:**
- [ ] Node.js can call Rust ontology functions
- [ ] Type conversions work correctly
- [ ] Errors propagate properly to JS
- [ ] TypeScript definitions generated

**Testing:**
```javascript
const { extractOntology } = require('@narrativegoldmine/logseq-publisher');
const result = extractOntology('./pages', '/tmp/output.ttl');
console.log(result);
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-napi/src/lib.rs`
- `rust-web-publish/logseq-publisher-napi/index.d.ts` (auto-generated)

---

### Subtask 2.4.3: npm Package Publishing
**Duration:** 2-3 hours
**Agent:** backend-dev
**Priority:** Medium
**Dependencies:** 2.4.2

**Implementation Steps:**
1. Configure `package.json`:
   - Set version: `0.1.0`
   - Add npm scripts: `build`, `test`, `prepublishOnly`
   - Set repository, license, keywords
2. Create README with usage examples
3. Test installation in separate project
4. Publish to npm as `@narrativegoldmine/logseq-publisher`

**Success Criteria:**
- [ ] Package published to npm
- [ ] Installable with `npm install @narrativegoldmine/logseq-publisher`
- [ ] Works on Linux, macOS, Windows (via CI matrix)
- [ ] TypeScript types included

**Testing:**
```bash
npm pack
npm install ./narrativegoldmine-logseq-publisher-0.1.0.tgz
```

**Files Modified:**
- `rust-web-publish/logseq-publisher-napi/package.json`
- `rust-web-publish/logseq-publisher-napi/README.md`

---

### Subtask 2.4.4: Integration with WebVOWL Build
**Duration:** 2-3 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 2.4.3

**Implementation Steps:**
1. Open `publishing-tools/WasmVOWL/modern/package.json`
2. Add dependency:
   ```json
   "dependencies": {
     "@narrativegoldmine/logseq-publisher": "^0.1.0"
   }
   ```
3. Create build script that calls napi-rs binding to generate ontology JSON
4. Store output in `public/data/ontology.json`

**Success Criteria:**
- [ ] WebVOWL build uses Rust parser via napi-rs
- [ ] Python dependency eliminated
- [ ] Build process fully Node.js-based

**Testing:**
```bash
cd publishing-tools/WasmVOWL/modern
npm run build:ontology
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/package.json`
- `publishing-tools/WasmVOWL/modern/scripts/build-ontology.js` (new)

---

## Coordination Protocol

### Pre-Phase Coordination
```bash
npx claude-flow@alpha hooks pre-task --description "Phase 2 Core Parser Migration" --agent-id "backend-dev-001"
npx claude-flow@alpha hooks session-restore --session-id "swarm-phase2"
```

### During Task Execution
After each task completion:
```bash
npx claude-flow@alpha hooks post-edit --file "src/owl_extractor.rs" --memory-key "swarm/backend-dev/task-2.1"
npx claude-flow@alpha hooks notify --message "Task 2.1 complete: OWL extraction module implemented" --to "code-analyzer,planner"
```

### Post-Phase Coordination
```bash
npx claude-flow@alpha hooks post-task --task-id "phase2-core-parser-migration"
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

## Risk Mitigation

### Risk: Rust parser doesn't match Python output exactly
**Mitigation:** Create comprehensive diff test comparing 100 sample pages
**Contingency:** Keep Python script as validation baseline until Rust is proven

### Risk: napi-rs binary compatibility issues across platforms
**Mitigation:** Use GitHub Actions matrix to test Linux, macOS, Windows
**Contingency:** Provide fallback to Python script if napi-rs fails

### Risk: Performance regression vs Python
**Mitigation:** Benchmark Rust vs Python on full 2,519-page corpus
**Contingency:** Optimize hot paths with profiling (flamegraph)

---

## Handoff to Phase 3

**Deliverables:**
- [ ] `owl_extractor.rs` module fully implemented and tested
- [ ] CLI binary with `ontology` subcommand
- [ ] napi-rs package published to npm
- [ ] GitHub Actions workflow updated
- [ ] All tests passing (unit, integration, benchmark)

**Memory Keys for Phase 3:**
- `swarm/phase2/owl-extractor-api` - Public API of owl_extractor module
- `swarm/phase2/napi-package-name` - npm package name and version
- `swarm/phase2/performance-metrics` - Benchmark results (Rust vs Python)

**Next Phase Dependencies:**
Phase 3 (WASM Enhancement) requires:
- Access to ontology JSON via napi-rs binding
- Understanding of OntologyBlock data structure
- Performance baseline from Phase 2 benchmarks

---

**Phase 2 Estimated Completion:** Week 3-4 of project
**Total Hours:** 48-68 hours (2-3 weeks with 1 full-time engineer)
