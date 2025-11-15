# System Analysis: Unified Knowledge Graph Publishing

## Executive Summary

This document analyzes three existing systems that must be merged into a unified napi-rs architecture:

1. **Rust Publisher** - Logseq markdown parser with WASM bindings
2. **WasmVOWL** - React/R3F ontology visualization with WASM simulation
3. **Python Pipeline** - OWL extraction and WebVOWL JSON conversion

**Goal**: Create a single Rust library with napi-rs bindings that handles parsing, extraction, and export in one pass.

## System 1: Rust Publisher (Logseq Publisher Rust)

### Location
`publishing-tools/rust-web-publish/logseq-publisher-rust/src/`

### Architecture

```
lib.rs (WASM entry point)
  ├── parser.rs (Markdown parsing)
  ├── graph.rs (Graph building)
  ├── exporter.rs (HTML export)
  └── optimizer.rs (Asset optimization)
```

### Key Components

#### 1. Parser Module (`parser.rs`)

**Purpose**: Parse Logseq markdown into structured data

**Data Structures**:
```rust
pub struct Page {
    pub path: String,
    pub title: String,
    pub properties: HashMap<String, String>,
    pub blocks: Vec<Block>,
    pub tags: Vec<String>,
    pub links: Vec<String>,
}

pub struct Block {
    pub id: String,
    pub content: String,
    pub children: Vec<Block>,
    pub properties: HashMap<String, String>,
    pub level: usize,
}
```

**Parsing Strategy**:
1. Detects frontmatter with `---` delimiters
2. Parses properties as `key: value` pairs
3. Parses blocks by indentation level (2 spaces = 1 level)
4. Handles bullets starting with `-` or `*`
5. Recursively parses child blocks
6. Extracts tags with regex: `#(\w+)`
7. Extracts links with regex: `\[\[([^\]]+)\]\]`

**Limitations**:
- No OWL/ontology awareness
- Properties are flat HashMap (no structured ontology data)
- No domain-specific parsing (AI-, BC-, MV- prefixes)

#### 2. Graph Module (`graph.rs`)

**Purpose**: Build knowledge graph with backlinks

**Data Structures**:
```rust
pub struct Graph {
    pages: HashMap<String, Page>,
    backlinks: HashMap<String, Vec<String>>,
}

pub struct GraphStats {
    pub page_count: usize,
    pub total_blocks: usize,
    pub total_links: usize,
    pub orphan_pages: usize,
}
```

**Graph Building**:
1. Stores pages by path in HashMap
2. For each page link, creates backlink entry
3. Computes statistics (page count, blocks, links, orphans)
4. Supports graph traversal with max depth

**Limitations**:
- No ontology relationships (SubClassOf, domain, range)
- No OWL class/property distinction
- Backlinks are simple string arrays (no typed relationships)

#### 3. Exporter Module (`exporter.rs`)

**Purpose**: Export graph to HTML

**Export Formats**:
- `export_to_html(graph, config)` - Full site HTML
- `export_page_to_html(page, backlinks, config)` - Single page
- CSS generation with theme support
- JavaScript for wiki-link navigation

**HTML Structure**:
```html
<article data-path="...">
  <h1>Page Title</h1>
  <div class="properties">...</div>
  <div class="tags">...</div>
  <div class="blocks">...</div>
  <div class="backlinks">...</div>
</article>
```

**Limitations**:
- Only HTML output (no JSON, RDF, WebVOWL)
- No ontology-specific rendering
- No graph visualization export

#### 4. WASM Bindings (`lib.rs`)

**Purpose**: Expose Rust to JavaScript via WebAssembly

**API Surface**:
```rust
#[wasm_bindgen]
pub struct LogseqPublisher {
    graph: Graph,
}

#[wasm_bindgen]
impl LogseqPublisher {
    pub fn new() -> Self;
    pub fn parse_files(&mut self, files_json: &str) -> Result<String>;
    pub fn get_page(&self, path: &str) -> Result<String>;
    pub fn get_backlinks(&self, path: &str) -> Result<String>;
    pub fn export_html(&self, config_json: &str) -> Result<String>;
    pub fn optimize_assets(&self, assets_json: &str) -> Result<String>;
}
```

**Interface Pattern**:
- JSON in, JSON out (all data serialized with serde_json)
- Error handling with Result<String, JsValue>
- JavaScript calls from Node.js or browser

**Limitations**:
- WASM only (not napi-rs for Node.js)
- JSON serialization overhead
- No streaming or incremental parsing

### Strengths
1. ✅ **Robust markdown parsing** - Handles frontmatter, blocks, nesting
2. ✅ **Graph building** - Backlinks and traversal
3. ✅ **WASM integration** - Works in browser
4. ✅ **Tests** - 2 tests for parsing simple/nested content

### Weaknesses
1. ❌ **No OWL awareness** - Doesn't parse OntologyBlock headers
2. ❌ **No WebVOWL output** - Only HTML export
3. ❌ **WASM not napi-rs** - Can't be used directly from Node.js
4. ❌ **No ontology relationships** - Just links, not typed properties

## System 2: WasmVOWL (Modern React Visualization)

### Location
`publishing-tools/WasmVOWL/modern/src/`

### Architecture

```
App.tsx (Main component)
  ├── stores/
  │   ├── useGraphStore.ts (Graph state with Zustand)
  │   └── useUIStore.ts (UI state)
  ├── hooks/
  │   └── useWasmSimulation.ts (WASM integration)
  ├── components/
  │   ├── Canvas/ (R3F rendering)
  │   │   ├── GraphCanvas.tsx
  │   │   ├── GraphScene.tsx
  │   │   ├── Nodes/ClassNode.tsx
  │   │   └── Edges/PropertyEdge.tsx
  │   └── UI/ (Interface)
  │       ├── FileDropZone.tsx
  │       ├── TopMenuBar.tsx
  │       └── Sidebar.tsx
  └── types/
      ├── vowl.ts (WebVOWL spec)
      ├── ontology.ts (OWL types)
      └── graph.ts (Graph types)
```

### Key Components

#### 1. Graph Store (`useGraphStore.ts`)

**Purpose**: Manage graph state with Zustand + Immer

**State Structure**:
```typescript
interface GraphState {
  nodes: Map<string, Node>;
  edges: Map<string, Edge>;
  filteredNodes: Set<string>;
  filteredEdges: Set<string>;
  selectedNode: string | null;
  selectedEdge: string | null;
  hoveredNode: string | null;
  hoveredEdge: string | null;
  activeFilters: GraphFilter[];
  statistics: GraphStatistics | null;
}
```

**Node Structure**:
```typescript
interface Node {
  id: string;
  type: 'class' | 'datatype' | 'literal';
  label: string;
  iri: string;
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  properties: {
    instances?: number;
    attributes?: string[];
  };
}
```

**Edge Structure**:
```typescript
interface Edge {
  id: string;
  source: string;
  target: string;
  type: 'objectProperty' | 'datatypeProperty';
  label: string;
  properties: {
    functional?: boolean;
    inverse?: string;
  };
}
```

**loadOntology Function**:
1. Parses OntologyData (WebVOWL JSON format)
2. Builds classAttribute and propertyAttribute maps
3. Creates Node for each class (with random initial position)
4. Creates Edge for each property (with domain/range)
5. Updates statistics

**Key Operations**:
- `loadOntology(data: OntologyData)` - Parse WebVOWL JSON
- `addNode/updateNode/removeNode` - Node CRUD
- `addEdge/updateEdge/removeEdge` - Edge CRUD
- `applyFilters()` - Filter by type/degree
- `updateStatistics()` - Compute graph metrics

#### 2. WASM Simulation Hook (`useWasmSimulation.ts`)

**Purpose**: Bridge React and Rust WASM for force-directed layout

**WASM API**:
```typescript
type WebVowl = {
  loadOntology(json: string): void;
  setCenter(x: number, y: number): void;
  setLinkDistance(distance: number): void;
  setChargeStrength(strength: number): void;
  initSimulation(): void;
  tick(): void;
  runSimulation(iterations: number): void;
  isFinished(): boolean;
  getAlpha(): number;
  getGraphData(): any;
  getNodeCount(): number;
  getEdgeCount(): number;
  getStatistics(): any;
}
```

**Integration Flow**:
1. Dynamic import: `await import('narrativegoldmine-webvowl-wasm')`
2. Initialize WASM: `await wasmModule.default()`
3. Create instance: `new wasmModule.WebVowl()`
4. Configure: `setLinkDistance`, `setChargeStrength`
5. Load data: `loadOntology(JSON.stringify(graphData))`
6. Run: `initSimulation()` then `tick()` on each frame

**Data Format Conversion**:
```typescript
const graphData = {
  header: { title: { en: "Ontology Graph" } },
  namespace: [],
  class: Array.from(nodes.values()).map((n) => ({
    id: n.id,
    type: n.type
  })),
  classAttribute: Array.from(nodes.values()).map((n) => ({
    id: n.id,
    label: { en: n.label },
    iri: n.iri
  })),
  property: Array.from(edges.values()).map((e) => ({
    id: e.id,
    type: e.type === 'objectProperty' ? 'owl:ObjectProperty' : 'owl:DatatypeProperty'
  })),
  propertyAttribute: Array.from(edges.values()).map((e) => ({
    id: e.id,
    domain: e.source,
    range: e.target,
    label: { en: e.label || e.id },
    iri: `http://example.org/${e.id}`
  }))
};
```

**useFrame Integration**:
```typescript
useFrame(() => {
  if (!wasm || !isRunning) return;

  if (wasm.isFinished()) {
    setIsRunning(false);
    return;
  }

  wasm.tick();
  const graphData = wasm.getGraphData();

  graphData.nodes.forEach((node: any) => {
    updateNodePosition(node.id, [node.x, node.y, 0]);
  });
});
```

#### 3. WebVOWL Types (`types/vowl.ts`)

**Purpose**: Type definitions for WebVOWL v2 specification

**Core Types**:
```typescript
interface VOWLData {
  info?: VOWLMetadata[];
  nodes: VOWLNode[];
  properties?: VOWLProperty[];
  namespace?: Record<string, string>;
}

interface VOWLNode {
  id: string;
  name?: string;
  type: VOWLNodeType;
  uri?: string;
  iri?: string;
  instances?: number;
  subClassOf?: string | string[];
  comment?: string | Record<string, string>;
  label?: string | Record<string, string>;
}

interface VOWLProperty {
  id: string;
  type: VOWLPropertyType;
  name?: string;
  uri?: string;
  domain: string | string[];
  range: string | string[];
  functional?: boolean;
  transitive?: boolean;
  symmetric?: boolean;
  label?: string | Record<string, string>;
}
```

**Key Insight**: WebVOWL expects a FLAT structure (no nested hierarchies, no complex OWL restrictions)

#### 4. Ontology Types (`types/ontology.ts`)

**Purpose**: Extended types for OWL ontologies

```typescript
interface OntologyData {
  header: {
    title?: { en: string };
    description?: { en: string };
  };
  namespace: Array<{ prefix: string; iri: string }>;
  class: Array<{ id: string; type: string }>;
  classAttribute: Array<{
    id: string;
    label?: { en: string };
    iri?: string;
  }>;
  property: Array<{ id: string; type: string }>;
  propertyAttribute: Array<{
    id: string;
    domain: string;
    range: string;
    label?: { en: string };
    iri?: string;
  }>;
}
```

**Key Split**: Separation between structural data (class/property arrays) and attributes (classAttribute/propertyAttribute)

### Strengths
1. ✅ **WebVOWL JSON format** - Standard ontology visualization format
2. ✅ **WASM force-directed layout** - High-performance simulation
3. ✅ **React Three Fiber** - Smooth 3D rendering
4. ✅ **Dynamic WASM import** - No build-time bundling required
5. ✅ **State management** - Zustand with Immer for Map/Set support
6. ✅ **TypeScript types** - Full type safety

### Weaknesses
1. ❌ **Requires pre-converted JSON** - Can't parse markdown directly
2. ❌ **No markdown parsing** - Depends on external conversion
3. ❌ **Browser-only WASM** - Not Node.js compatible
4. ❌ **No export to pages/*.json** - Only visualization, no static output

## System 3: Python Pipeline (OWL Extraction)

### Location
`Ontology-Tools/tools/converters/`

### Architecture

```
extract_owl_from_markdown.py
  └── Extract OWL Functional Syntax from markdown

webvowl_header_only_converter.py
  └── Extract OntologyBlock headers → Turtle RDF

ttl_to_webvowl_json.py
  └── Convert Turtle RDF → WebVOWL JSON
```

### Key Components

#### 1. Markdown OWL Extractor (`extract_owl_from_markdown.py`)

**Purpose**: Extract OWL code blocks from markdown

**Extraction Pattern**:
```python
pattern = r'```(?:clojure|owl)\s*\n(.*?)\n```'
matches = re.finditer(pattern, content, re.DOTALL)
```

**Output Format**: OWL Functional Syntax (.ofn file)

**Capabilities**:
- Extracts all code blocks marked with ```clojure or ```owl
- Separates declarations from axioms
- Generates prefixes and ontology header
- Outputs complete OWL Functional Syntax file

**Limitations**:
- Only extracts code blocks (doesn't parse frontmatter)
- No validation of OWL syntax
- Output is intermediate format (not WebVOWL JSON)

#### 2. Header-Only Converter (`webvowl_header_only_converter.py`)

**Purpose**: Extract OntologyBlock headers and convert to Turtle RDF

**Key Features**:

**1. OntologyBlock Extraction**:
```python
def extract_ontology_block(content: str) -> str:
    match = re.search(
        r'-\s*###\s*OntologyBlock\s*\n(.*?)(?=\n-\s*##|\Z)',
        content,
        re.DOTALL
    )
    return match.group(1) if match else ""
```

**Key Insight**: Stops at first `## heading` - only parses header, ignores markdown content

**2. Metadata Extraction**:
```python
def extract_metadata(block: str):
    metadata = {}

    # term-id:: DT-0123
    # preferred-term:: Machine Learning
    # definition:: A technique for...
    # source-domain:: artificial-intelligence
    # maturity:: proven
    # authority-score:: 0.95
```

**3. Relationships Extraction**:
```python
def extract_relationships(block: str) -> dict:
    # From #### Relationships section
    # - enables-capability:: [[Deep Learning]]
    # - uses-technology:: [[Neural Networks]]
```

**4. OWL Axiom Parsing**:
```python
def parse_owl_block(owl_code, term_uri, term_id):
    # Class declarations
    if re.search(r'Declaration\s*\(\s*Class', owl_code):
        self.graph.add((term_uri, RDF.type, OWL.Class))

    # SubClassOf
    for match in re.finditer(r'SubClassOf\s+:(\w+)\s+:(\w+)\s*\)', owl_code):
        child = self.resolve_term_uri(match.group(1))
        parent = self.resolve_term_uri(match.group(2))
        self.graph.add((child, RDFS.subClassOf, parent))

    # ObjectSomeValuesFrom restrictions
    pattern = r'SubClassOf\s+:(\w+)\s+\(\s*ObjectSomeValuesFrom\s+:(\w+)\s+:(\w+)\s*\)'
    for match in re.finditer(pattern, owl_code):
        subject = self.resolve_term_uri(match.group(1))
        prop = self.resolve_term_uri(match.group(2))
        obj = self.resolve_term_uri(match.group(3))

        restriction = BNode()
        self.graph.add((subject, RDFS.subClassOf, restriction))
        self.graph.add((restriction, RDF.type, OWL.Restriction))
        self.graph.add((restriction, OWL.onProperty, prop))
        self.graph.add((restriction, OWL.someValuesFrom, obj))
```

**5. Namespace Resolution**:
```python
def term_to_uri(term_id, preferred_term):
    if term_id.startswith('AI-'):
        ns = AI  # https://narrativegoldmine.com/ontology/artificial-intelligence#
    elif term_id.startswith('BC-'):
        ns = BC  # blockchain#
    elif term_id.startswith('MV-'):
        ns = MV  # metaverse#
    elif term_id.startswith('RB-'):
        ns = RB  # robotics#
    else:
        ns = DT  # disruptive-technologies#

    fragment = self.to_camel_case(preferred_term)
    return ns[fragment]
```

**6. Cross-Domain Bridge Tracking**:
```python
def _track_bridge(subject_uri, object_uri, property_uri, term_id):
    subject_ns = str(subject_uri).split('#')[0]
    object_ns = str(object_uri).split('#')[0]

    if subject_ns != object_ns:
        self.bridges.append({
            'source': subject_uri,
            'target': object_uri,
            'property': property_uri,
            'term_id': term_id
        })
```

**Output**: Turtle RDF with:
- OWL classes
- rdfs:label and rdfs:comment
- rdfs:subClassOf relationships
- OWL restrictions (ObjectSomeValuesFrom)
- Object properties and datatype properties
- Cross-domain bridges as explicit nodes

#### 3. Turtle to WebVOWL Converter (`ttl_to_webvowl_json.py`)

**Purpose**: Convert Turtle RDF to WebVOWL JSON format

**Conversion Flow**:

**1. Load Turtle**:
```python
g = Graph()
g.parse(ttl_file, format='turtle')
```

**2. Extract Classes**:
```python
for cls in g.subjects(RDF.type, OWL.Class):
    class_id += 1
    label = g.value(cls, RDFS.label)
    comment = g.value(cls, RDFS.comment)

    classes[str(cls)] = class_id

    vowl["class"].append({
        "id": str(class_id),
        "type": "owl:Class"
    })

    vowl["classAttribute"].append({
        "id": str(class_id),
        "iri": str(cls),
        "label": {"en": str(label)},
        "comment": {"en": str(comment)[:200]}
    })
```

**3. Extract Properties**:
```python
# Start property IDs AFTER all class IDs to avoid overlap
prop_id = class_id

for prop in g.subjects(RDF.type, OWL.ObjectProperty):
    prop_id += 1
    domain = g.value(prop, RDFS.domain)
    range_val = g.value(prop, RDFS.range)

    vowl["property"].append({
        "id": str(prop_id),
        "type": "owl:objectProperty"
    })

    vowl["propertyAttribute"].append({
        "id": str(prop_id),
        "domain": str(classes[str(domain)]),
        "range": str(classes[str(range_val)]),
        "label": {"en": str(label)}
    })
```

**Key Insight**: Property IDs MUST start after class IDs to avoid WebVOWL confusion

**4. Extract SubClassOf**:
```python
for subj, obj in g.subject_objects(RDFS.subClassOf):
    if str(subj) in classes and str(obj) in classes:
        prop_id += 1

        vowl["property"].append({
            "id": str(prop_id),
            "type": "rdfs:SubClassOf"
        })

        vowl["propertyAttribute"].append({
            "id": str(prop_id),
            "domain": str(classes[str(subj)]),
            "range": str(classes[str(obj)]),
            "attributes": ["anonymous", "object"]
        })
```

**Output**: WebVOWL JSON with:
```json
{
  "header": { "title": { "en": "..." }, "version": "1.0" },
  "namespace": [{ "prefix": "dt", "iri": "..." }],
  "class": [{ "id": "1", "type": "owl:Class" }],
  "classAttribute": [{ "id": "1", "iri": "...", "label": { "en": "..." } }],
  "property": [{ "id": "101", "type": "owl:objectProperty" }],
  "propertyAttribute": [{ "id": "101", "domain": "1", "range": "2", "label": { "en": "..." } }]
}
```

### Strengths
1. ✅ **OntologyBlock parsing** - Extracts structured metadata
2. ✅ **OWL axiom parsing** - Handles SubClassOf, restrictions, properties
3. ✅ **Multi-domain namespaces** - AI, BC, MV, RB, DT
4. ✅ **Cross-domain bridges** - Tracks relationships between domains
5. ✅ **WebVOWL output** - Standard format for visualization
6. ✅ **RDFLib integration** - Robust RDF handling

### Weaknesses
1. ❌ **Python dependency** - Can't run in browser or from Rust
2. ❌ **Multi-step pipeline** - Markdown → Turtle → WebVOWL JSON (3 steps)
3. ❌ **No page JSON output** - Only single ontology.json
4. ❌ **Regex-based parsing** - Fragile to markdown variations

## Comparison Matrix

| Feature | Rust Publisher | WasmVOWL | Python Pipeline |
|---------|---------------|----------|-----------------|
| **Input Format** | Logseq markdown | WebVOWL JSON | Logseq markdown |
| **Parsing** | ✅ Blocks, links, tags | ❌ No parsing | ✅ OntologyBlock headers |
| **OWL Awareness** | ❌ No | ✅ Yes | ✅ Yes |
| **Output Formats** | HTML | Visualization | Turtle, WebVOWL JSON |
| **Graph Building** | ✅ Backlinks | ✅ Full graph | ✅ RDF graph |
| **Runtime** | WASM (browser) | WASM (browser) | Python |
| **Node.js** | ❌ No | ❌ No | ❌ No |
| **napi-rs** | ❌ No | ❌ No | ❌ No |
| **Performance** | Fast | Fast | Slow (Python) |
| **Type Safety** | ✅ Rust | ✅ TypeScript | ❌ Python |
| **Tests** | ✅ 2 tests | ✅ 85+ tests | ❌ No tests |

## Gap Analysis

### Missing Capabilities

1. **No unified parser**
   - Current: Rust parses blocks, Python parses OntologyBlock
   - Need: Single Rust parser that handles both

2. **No napi-rs bindings**
   - Current: WASM only (browser-focused)
   - Need: napi-rs for Node.js direct calling

3. **No single-pass processing**
   - Current: Python pipeline requires 3 steps
   - Need: Parse markdown → Export JSON in one Rust function

4. **No pages/*.json output**
   - Current: Rust exports HTML, Python exports single ontology.json
   - Need: Export individual page JSON files + ontology.json

5. **No OWL restriction handling in Rust**
   - Current: Python handles ObjectSomeValuesFrom, SubClassOf
   - Need: Rust OWL axiom parser

6. **No cross-domain bridge tracking in Rust**
   - Current: Python tracks bridges
   - Need: Rust domain detection and bridge creation

### Overlapping Code

1. **Markdown parsing**
   - Rust: `parser.rs` (blocks, frontmatter)
   - Python: `extract_ontology_block()` (OntologyBlock)
   - Solution: Merge into unified Rust parser

2. **Graph building**
   - Rust: `graph.rs` (pages + backlinks)
   - Python: RDFLib (OWL graph)
   - Solution: Unified Rust graph with OWL relationships

3. **WebVOWL format**
   - WasmVOWL: TypeScript types
   - Python: Dictionary generation
   - Solution: Rust structs with serde for WebVOWL JSON

## Unified Architecture Requirements

### Input Processing
1. Parse all 1,213 markdown files (1,028 ontology + 185 regular)
2. Detect ontology pages by presence of OntologyBlock
3. Extract frontmatter, blocks, OntologyBlock, OWL axioms
4. Build unified graph with pages + ontology relationships

### Data Model
1. Unified Page struct (extends current Page with ontology field)
2. OWLClass struct (term-id, preferred-term, definition, domain, relationships)
3. OWLRelationship struct (property, target)
4. WebVOWLOutput struct (matches WebVOWL JSON schema)

### Processing Flow
1. Single Rust function: `parse_and_export(pages_dir, output_dir)`
2. Parse all markdown files (parallel with rayon)
3. Build graph with backlinks + OWL relationships
4. Export pages/*.json (one per file)
5. Export ontology.json (WebVOWL format)

### Node.js Integration
1. napi-rs bindings (not WASM)
2. Direct function calls from Node.js
3. Async support for file I/O
4. Error handling with Result types

### Performance Targets
1. Parse 1,213 files in <500ms
2. Export JSON in <200ms
3. Total processing time: <1 second
4. Memory usage: <100MB

## Migration Strategy

### Phase 1: Rust Library Core
1. Create unified `parser.rs` that combines block + OntologyBlock parsing
2. Create `owl.rs` for OWL axiom parsing and RDF graph building
3. Create `exporter_json.rs` for WebVOWL JSON export
4. Update `graph.rs` to handle OWL relationships

### Phase 2: napi-rs Bindings
1. Replace wasm-bindgen with napi-rs
2. Create Node.js-compatible API
3. Async file operations
4. Error handling

### Phase 3: React Integration
1. Keep WasmVOWL React app unchanged
2. Replace Python pipeline with Rust CLI
3. Call Rust via napi-rs from build script
4. Load generated pages/*.json and ontology.json

### Phase 4: Deprecation
1. Remove Python converters
2. Remove old WASM bindings
3. Update documentation
4. Archive legacy code

## Success Metrics

1. ✅ Single Rust codebase replaces 3 systems
2. ✅ All 1,213 files parsed successfully
3. ✅ pages/*.json output matches current format
4. ✅ ontology.json matches WebVOWL spec
5. ✅ React app works without changes
6. ✅ Processing time <1 second
7. ✅ Zero Python dependencies
8. ✅ Tests coverage >80%

## Conclusion

The three existing systems have complementary strengths:
- **Rust Publisher**: Robust markdown parsing, graph building
- **WasmVOWL**: High-performance visualization, WebVOWL format
- **Python Pipeline**: OWL extraction, multi-domain support

By merging them into a unified Rust library with napi-rs, we can achieve:
- **Single language** (Rust throughout)
- **Single pass** (parse → export in one function)
- **Native performance** (no Python, no WASM overhead)
- **Type safety** (Rust + TypeScript)
- **Better maintainability** (one codebase)

The architecture design in the following documents will detail exactly how to implement this unified system.
