# API Specification: Unified Knowledge Graph Publisher

## Overview

This document specifies all module interfaces, API boundaries, and function signatures for the unified Rust library with napi-rs bindings.

## Module Architecture

```
logseq-publisher/
├── src/
│   ├── lib.rs              # napi-rs entry point
│   ├── parser/
│   │   ├── mod.rs          # Parser module exports
│   │   ├── markdown.rs     # Markdown parsing
│   │   ├── frontmatter.rs  # Property extraction
│   │   ├── blocks.rs       # Block hierarchy
│   │   └── ontology.rs     # OntologyBlock parsing
│   ├── extractor/
│   │   ├── mod.rs          # Extractor module exports
│   │   ├── owl.rs          # OWL axiom parsing
│   │   ├── relationships.rs # Relationship extraction
│   │   └── axioms.rs       # Axiom type parsing
│   ├── graph/
│   │   ├── mod.rs          # Graph module exports
│   │   ├── builder.rs      # Graph construction
│   │   ├── backlinks.rs    # Backlink computation
│   │   └── bridges.rs      # Cross-domain bridges
│   ├── exporter/
│   │   ├── mod.rs          # Exporter module exports
│   │   ├── json.rs         # Page JSON export
│   │   ├── webvowl.rs      # WebVOWL JSON export
│   │   └── stats.rs        # Statistics computation
│   └── types.rs            # Shared type definitions
```

## Module APIs

### 1. Parser Module

#### `parser::markdown`

Parse a single Logseq markdown file into a UnifiedPage.

```rust
pub fn parse_markdown_file(
    path: &Path,
    content: &str,
) -> Result<UnifiedPage, ParseError>;
```

**Parameters**:
- `path`: Relative file path (e.g., `pages/machine-learning.md`)
- `content`: Raw markdown content

**Returns**:
- `Ok(UnifiedPage)`: Successfully parsed page
- `Err(ParseError)`: Parsing failed

**Errors**:
```rust
#[derive(Debug, thiserror::Error)]
pub enum ParseError {
    #[error("Invalid frontmatter: {0}")]
    InvalidFrontmatter(String),

    #[error("Block parsing failed: {0}")]
    BlockParseError(String),

    #[error("OntologyBlock parsing failed: {0}")]
    OntologyParseError(String),

    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),
}
```

#### `parser::frontmatter`

Extract frontmatter properties from markdown content.

```rust
pub fn parse_frontmatter(
    content: &str,
) -> Result<(HashMap<String, String>, usize), ParseError>;
```

**Parameters**:
- `content`: Raw markdown with frontmatter

**Returns**:
- `Ok((properties, offset))`: Properties map and offset where content starts
- `Err(ParseError)`: Frontmatter invalid

**Example**:
```rust
let content = r#"---
title: Machine Learning
tags: AI, technology
---
Content here..."#;

let (props, offset) = parse_frontmatter(content)?;
assert_eq!(props.get("title"), Some(&"Machine Learning".to_string()));
assert_eq!(offset, 3); // Line number where content starts
```

#### `parser::blocks`

Parse hierarchical blocks from markdown lines.

```rust
pub fn parse_blocks(
    lines: &[&str],
    base_level: usize,
) -> Result<Vec<Block>, ParseError>;
```

**Parameters**:
- `lines`: Array of markdown lines (after frontmatter)
- `base_level`: Starting indentation level (usually 0)

**Returns**:
- `Ok(Vec<Block>)`: Hierarchical block tree
- `Err(ParseError)`: Block structure invalid

**Logic**:
1. Detect indentation (2 spaces = 1 level)
2. Parse bullet markers (`-` or `*`)
3. Extract properties from blocks
4. Recursively parse child blocks
5. Return flat list of top-level blocks (children nested)

#### `parser::ontology`

Extract OntologyBlock header and parse OWL data.

```rust
pub fn parse_ontology_block(
    content: &str,
) -> Result<Option<OWLClass>, ParseError>;
```

**Parameters**:
- `content`: Full markdown content

**Returns**:
- `Ok(Some(OWLClass))`: OntologyBlock found and parsed
- `Ok(None)`: No OntologyBlock present (regular page)
- `Err(ParseError)`: OntologyBlock invalid

**Parsing Steps**:
1. Detect `- ### OntologyBlock` marker
2. Extract section until first `## heading`
3. Parse metadata fields:
   - `term-id:: AI-0123`
   - `preferred-term:: Machine Learning`
   - `definition:: ...`
   - `source-domain:: artificial-intelligence`
   - `maturity:: proven`
   - `authority-score:: 0.95`
4. Extract relationships from `#### Relationships` section
5. Parse OWL axioms from code blocks (```clojure or ```owl)

### 2. Extractor Module

#### `extractor::owl`

Parse OWL Functional Syntax axioms.

```rust
pub fn parse_owl_axioms(
    owl_code: &str,
    term_uri: &str,
) -> Result<Vec<OWLAxiom>, ParseError>;
```

**Parameters**:
- `owl_code`: OWL Functional Syntax code block
- `term_uri`: Current class URI for context

**Returns**:
- `Ok(Vec<OWLAxiom>)`: Parsed axioms
- `Err(ParseError)`: Invalid OWL syntax

**Supported Axioms**:
1. `Declaration(Class :ClassName)`
2. `SubClassOf(:Child :Parent)`
3. `SubClassOf(:Class ObjectSomeValuesFrom(:prop :Filler))`
4. `Declaration(ObjectProperty :propName)`
5. `Declaration(DataProperty :propName)`
6. `ObjectPropertyDomain(:prop :Domain)`
7. `ObjectPropertyRange(:prop :Range)`
8. `DisjointClasses(:Class1 :Class2 :Class3)`

**Example**:
```rust
let owl_code = r#"
Declaration(Class :MachineLearning)
SubClassOf(:MachineLearning :ArtificialIntelligence)
SubClassOf(
  :MachineLearning
  ObjectSomeValuesFrom(:enablesCapability :DeepLearning)
)
"#;

let axioms = parse_owl_axioms(owl_code, "AI-0123")?;
assert_eq!(axioms.len(), 3);
```

#### `extractor::relationships`

Extract relationships from markdown relationship section.

```rust
pub fn extract_relationships(
    block_content: &str,
) -> Result<Vec<OWLRelationship>, ParseError>;
```

**Parameters**:
- `block_content`: Content of `#### Relationships` section

**Returns**:
- `Ok(Vec<OWLRelationship>)`: Extracted relationships
- `Err(ParseError)`: Invalid format

**Format**:
```markdown
#### Relationships
- enables-capability:: [[Deep Learning]], [[Neural Networks]]
- uses-technology:: [[GPUs]], [[Tensor Processing]]
- related-to:: [[Artificial Intelligence]]
```

**Parsing**:
1. Match lines: `- property:: [[target1]], [[target2]]`
2. Extract property name
3. Extract all `[[wiki-link]]` targets
4. Create OWLRelationship for each (property, target) pair

### 3. Graph Module

#### `graph::builder`

Build complete knowledge graph from parsed pages.

```rust
pub fn build_graph(
    pages: Vec<UnifiedPage>,
) -> Result<UnifiedGraph, GraphError>;
```

**Parameters**:
- `pages`: All parsed pages

**Returns**:
- `Ok(UnifiedGraph)`: Complete graph with backlinks and bridges
- `Err(GraphError)`: Graph construction failed

**Construction Steps**:
1. Index all pages by path
2. Compute backlinks for each link
3. Index ontology classes by term-id
4. Detect cross-domain bridges
5. Validate graph consistency

#### `graph::backlinks`

Compute backlinks for all pages.

```rust
pub fn compute_backlinks(
    pages: &HashMap<String, UnifiedPage>,
) -> HashMap<String, Vec<String>>;
```

**Parameters**:
- `pages`: All pages indexed by path

**Returns**:
- Backlinks map: `target_page -> [source_page1, source_page2, ...]`

**Logic**:
```rust
for (path, page) in pages {
    for link in &page.links {
        backlinks.entry(link.clone())
            .or_insert_with(Vec::new)
            .push(path.clone());
    }
}
```

#### `graph::bridges`

Detect cross-domain ontology bridges.

```rust
pub fn detect_bridges(
    ontology_classes: &HashMap<String, OWLClass>,
) -> Vec<CrossDomainBridge>;
```

**Parameters**:
- `ontology_classes`: All ontology classes indexed by term-id

**Returns**:
- List of cross-domain relationships

**Detection Logic**:
```rust
for (term_id, class) in ontology_classes {
    for rel in &class.relationships {
        if let Some(target_class) = ontology_classes.get(&rel.target) {
            if class.domain != target_class.domain {
                bridges.push(CrossDomainBridge {
                    source_term: term_id.clone(),
                    source_domain: class.domain.clone().unwrap(),
                    target_term: rel.target.clone(),
                    target_domain: target_class.domain.clone().unwrap(),
                    property: rel.property.clone(),
                });
            }
        }
    }
}
```

### 4. Exporter Module

#### `exporter::json`

Export individual page JSON files.

```rust
pub fn export_page_json(
    page: &UnifiedPage,
    output_dir: &Path,
) -> Result<(), ExportError>;
```

**Parameters**:
- `page`: Page to export
- `output_dir`: Directory for output (e.g., `dist/pages/`)

**Returns**:
- `Ok(())`: File written successfully
- `Err(ExportError)`: Export failed

**Output Format**:
```json
{
  "path": "pages/machine-learning.md",
  "title": "Machine Learning",
  "properties": {
    "tags": "AI, technology"
  },
  "blocks": [...],
  "tags": ["AI", "technology"],
  "links": ["Neural Networks", "Deep Learning"],
  "backlinks": ["Artificial Intelligence", "Data Science"],
  "ontology": {
    "term_id": "AI-0123",
    "preferred_term": "Machine Learning",
    "definition": "...",
    "domain": "artificial-intelligence",
    "relationships": [...]
  }
}
```

#### `exporter::webvowl`

Export complete ontology to WebVOWL JSON format.

```rust
pub fn export_webvowl(
    graph: &UnifiedGraph,
    output_path: &Path,
) -> Result<(), ExportError>;
```

**Parameters**:
- `graph`: Complete unified graph
- `output_path`: Output file path (e.g., `dist/ontology.json`)

**Returns**:
- `Ok(())`: File written successfully
- `Err(ExportError)`: Export failed

**Output Format**: See DATA-MODELS.md `WebVOWLOutput` structure

**Conversion Logic**:
1. Create header with metadata
2. Add namespaces (AI, BC, MV, RB, DT)
3. Convert ontology classes to WebVOWL classes
4. Generate numeric IDs for classes (1, 2, 3, ...)
5. Convert relationships to WebVOWL properties
6. Generate numeric IDs for properties (starting after class IDs)
7. Add SubClassOf relationships as special properties
8. Write JSON with pretty printing

#### `exporter::stats`

Compute graph statistics.

```rust
pub fn compute_stats(
    graph: &UnifiedGraph,
) -> GraphStats;
```

**Parameters**:
- `graph`: Complete unified graph

**Returns**:
- Statistics about the graph

**Computed Metrics**:
```rust
GraphStats {
    page_count: graph.pages.len(),
    total_blocks: count_all_blocks(&graph.pages),
    total_links: count_all_links(&graph.pages),
    ontology_count: graph.ontology_classes.len(),
    bridge_count: graph.bridges.len(),
}
```

## napi-rs API (Node.js)

### Entry Point (`lib.rs`)

Main API exposed to Node.js via napi-rs.

```rust
use napi::bindgen_prelude::*;
use napi_derive::napi;

/// Parse and export Logseq knowledge graph
#[napi]
pub async fn parse_and_export(
    pages_dir: String,
    output_dir: String,
) -> Result<String> {
    // Implementation
}

/// Parse single file
#[napi]
pub fn parse_file(
    path: String,
    content: String,
) -> Result<String> {
    // Implementation
}

/// Export WebVOWL from parsed pages
#[napi]
pub fn export_ontology(
    pages_json: String,
    output_path: String,
) -> Result<()> {
    // Implementation
}
```

### Function Signatures

#### `parse_and_export`

Main function for complete pipeline.

```typescript
// TypeScript signature (generated by napi-rs)
export function parseAndExport(
  pagesDir: string,
  outputDir: string
): Promise<string>;
```

**Parameters**:
- `pagesDir`: Path to Logseq pages directory (e.g., `pages/`)
- `outputDir`: Path to output directory (e.g., `dist/`)

**Returns**:
- `Promise<string>`: JSON statistics about processed files

**Behavior**:
1. Find all `.md` files in `pagesDir`
2. Parse files in parallel (using rayon)
3. Build unified graph
4. Export page JSON files to `outputDir/pages/`
5. Export ontology JSON to `outputDir/ontology.json`
6. Return statistics as JSON string

**Example** (Node.js):
```javascript
const { parseAndExport } = require('./logseq-publisher');

const stats = await parseAndExport(
  './mainKnowledgeGraph/pages',
  './dist'
);

console.log(JSON.parse(stats));
// {
//   "page_count": 1213,
//   "total_blocks": 45231,
//   "total_links": 8932,
//   "ontology_count": 1028,
//   "bridge_count": 342
// }
```

#### `parse_file`

Parse a single markdown file.

```typescript
export function parseFile(
  path: string,
  content: string
): string;
```

**Parameters**:
- `path`: Relative file path
- `content`: Markdown content

**Returns**:
- JSON string of `UnifiedPage`

**Example**:
```javascript
const { parseFile } = require('./logseq-publisher');

const content = `---
title: Machine Learning
---
- This is a block`;

const pageJson = parseFile('pages/machine-learning.md', content);
const page = JSON.parse(pageJson);

console.log(page.title); // "Machine Learning"
console.log(page.blocks.length); // 1
```

#### `export_ontology`

Export ontology from parsed pages JSON.

```typescript
export function exportOntology(
  pagesJson: string,
  outputPath: string
): void;
```

**Parameters**:
- `pagesJson`: JSON array of `UnifiedPage[]`
- `outputPath`: Output file path for `ontology.json`

**Returns**:
- `void` (writes file)

**Example**:
```javascript
const { exportOntology } = require('./logseq-publisher');

const pages = [
  { path: '...', title: '...', ontology: { ... } },
  // ...
];

exportOntology(JSON.stringify(pages), './dist/ontology.json');
```

## Error Handling

### Error Types

```rust
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("Parse error: {0}")]
    Parse(#[from] ParseError),

    #[error("Graph error: {0}")]
    Graph(#[from] GraphError),

    #[error("Export error: {0}")]
    Export(#[from] ExportError),

    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error("JSON error: {0}")]
    Json(#[from] serde_json::Error),
}
```

### napi-rs Error Conversion

```rust
impl From<Error> for napi::Error {
    fn from(err: Error) -> Self {
        napi::Error::from_reason(err.to_string())
    }
}
```

**JavaScript Error Handling**:
```javascript
try {
  await parseAndExport('./pages', './dist');
} catch (error) {
  console.error('Parse failed:', error.message);
}
```

## JSON Output Schemas

### Page JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "path": { "type": "string" },
    "title": { "type": "string" },
    "properties": {
      "type": "object",
      "additionalProperties": { "type": "string" }
    },
    "blocks": {
      "type": "array",
      "items": { "$ref": "#/definitions/Block" }
    },
    "tags": {
      "type": "array",
      "items": { "type": "string" }
    },
    "links": {
      "type": "array",
      "items": { "type": "string" }
    },
    "backlinks": {
      "type": "array",
      "items": { "type": "string" }
    },
    "ontology": {
      "oneOf": [
        { "type": "null" },
        { "$ref": "#/definitions/OWLClass" }
      ]
    }
  },
  "required": ["path", "title", "properties", "blocks", "tags", "links", "backlinks"],
  "definitions": {
    "Block": {
      "type": "object",
      "properties": {
        "id": { "type": "string" },
        "content": { "type": "string" },
        "children": {
          "type": "array",
          "items": { "$ref": "#/definitions/Block" }
        },
        "properties": {
          "type": "object",
          "additionalProperties": { "type": "string" }
        },
        "level": { "type": "integer" }
      },
      "required": ["id", "content", "children", "properties", "level"]
    },
    "OWLClass": {
      "type": "object",
      "properties": {
        "term_id": { "type": "string" },
        "preferred_term": { "type": "string" },
        "definition": { "type": "string" },
        "domain": { "type": ["string", "null"] },
        "maturity": { "type": ["string", "null"] },
        "authority_score": { "type": ["number", "null"] },
        "source": { "type": ["string", "null"] },
        "relationships": {
          "type": "array",
          "items": { "$ref": "#/definitions/OWLRelationship" }
        },
        "parent_classes": {
          "type": "array",
          "items": { "type": "string" }
        },
        "axioms": {
          "type": "array",
          "items": { "$ref": "#/definitions/OWLAxiom" }
        }
      },
      "required": ["term_id", "preferred_term", "definition"]
    }
  }
}
```

### WebVOWL JSON Schema

See WebVOWL specification: https://github.com/VisualDataWeb/WebVOWL/wiki/JSON-Format

**Key Requirements**:
1. Class IDs are numeric strings starting at "1"
2. Property IDs are numeric strings starting AFTER last class ID
3. `property` and `propertyAttribute` arrays must have matching IDs
4. `class` and `classAttribute` arrays must have matching IDs
5. Domain and range in `propertyAttribute` must reference class IDs

## React SPA Integration

### Build Script

```javascript
// build.js
const { parseAndExport } = require('./logseq-publisher');

async function build() {
  console.log('Parsing Logseq knowledge graph...');

  const stats = await parseAndExport(
    './mainKnowledgeGraph/pages',
    './dist'
  );

  console.log('✅ Build complete:', JSON.parse(stats));
}

build().catch(console.error);
```

### React Data Loading

```typescript
// App.tsx
import { useEffect, useState } from 'react';

interface Page {
  path: string;
  title: string;
  // ... (matches UnifiedPage)
}

function App() {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    // Load all page JSON files
    async function loadPages() {
      const response = await fetch('/pages/index.json');
      const paths = await response.json();

      const loadedPages = await Promise.all(
        paths.map(async (path: string) => {
          const res = await fetch(`/pages/${path}`);
          return res.json();
        })
      );

      setPages(loadedPages);
    }

    loadPages();
  }, []);

  return (
    <div>
      {pages.map(page => (
        <PageView key={page.path} page={page} />
      ))}
    </div>
  );
}
```

### Ontology Visualization

```typescript
// OntologyView.tsx
import { useGraphStore } from './stores/useGraphStore';

function OntologyView() {
  const loadOntology = useGraphStore(state => state.loadOntology);

  useEffect(() => {
    fetch('/ontology.json')
      .then(res => res.json())
      .then(data => {
        loadOntology(data);
      });
  }, [loadOntology]);

  return <GraphCanvas />;
}
```

## Performance Considerations

### Parallel Processing

Use `rayon` for parallel file parsing:

```rust
use rayon::prelude::*;

pub async fn parse_all_files(pages_dir: &Path) -> Result<Vec<UnifiedPage>> {
    let md_files: Vec<PathBuf> = walkdir::WalkDir::new(pages_dir)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().extension() == Some(OsStr::new("md")))
        .map(|e| e.path().to_path_buf())
        .collect();

    // Parse in parallel
    let pages: Vec<UnifiedPage> = md_files
        .par_iter()
        .filter_map(|path| {
            let content = std::fs::read_to_string(path).ok()?;
            parse_markdown_file(path, &content).ok()
        })
        .collect();

    Ok(pages)
}
```

### Memory Management

1. **Streaming exports**: Write page JSON files as they're parsed (don't buffer all in memory)
2. **Arc/Rc for shared data**: Use reference counting for ontology classes referenced by multiple pages
3. **String interning**: Use `string-interner` crate for deduplicated strings (tags, properties)

### Target Performance

- **Parse 1,213 files**: <500ms
- **Build graph**: <100ms
- **Export JSON**: <200ms
- **Total time**: <1 second
- **Memory usage**: <100MB peak

## Testing Strategy

### Unit Tests

Each module should have comprehensive tests:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_frontmatter() {
        let content = "---\ntitle: Test\n---\nContent";
        let (props, offset) = parse_frontmatter(content).unwrap();
        assert_eq!(props.get("title"), Some(&"Test".to_string()));
        assert_eq!(offset, 2);
    }

    #[test]
    fn test_parse_ontology_block() {
        let content = r#"- ### OntologyBlock
- term-id:: AI-0123
- preferred-term:: Machine Learning"#;

        let ontology = parse_ontology_block(content).unwrap();
        assert!(ontology.is_some());
        assert_eq!(ontology.unwrap().term_id, "AI-0123");
    }
}
```

### Integration Tests

Test complete pipeline:

```rust
#[tokio::test]
async fn test_full_pipeline() {
    let temp_dir = tempdir::TempDir::new("test").unwrap();
    let pages_dir = temp_dir.path().join("pages");
    let output_dir = temp_dir.path().join("dist");

    std::fs::create_dir_all(&pages_dir).unwrap();

    // Create test file
    std::fs::write(
        pages_dir.join("test.md"),
        "---\ntitle: Test\n---\n- Block"
    ).unwrap();

    // Run pipeline
    let stats = parse_and_export(
        pages_dir.to_str().unwrap().to_string(),
        output_dir.to_str().unwrap().to_string(),
    ).await.unwrap();

    // Verify output
    assert!(output_dir.join("pages/test.json").exists());
    let page_json = std::fs::read_to_string(output_dir.join("pages/test.json")).unwrap();
    let page: UnifiedPage = serde_json::from_str(&page_json).unwrap();
    assert_eq!(page.title, "Test");
}
```

## Conclusion

This API specification provides:
1. ✅ **Complete module boundaries** for Rust library
2. ✅ **Clear function signatures** for all operations
3. ✅ **napi-rs API** for Node.js integration
4. ✅ **JSON schemas** for output formats
5. ✅ **Error handling** strategy
6. ✅ **Performance targets** and optimization approaches
7. ✅ **Testing strategy** for quality assurance
8. ✅ **React integration** examples

All APIs are ready for implementation.
