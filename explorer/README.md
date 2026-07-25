# WasmVOWL

**WebVOWL rewritten in Rust with a modern React frontend.**

WasmVOWL is a modern web application for visualizing ontologies, based on the original [WebVOWL](http://vowl.visualdataweb.org/) project. This project is a complete rewrite, featuring a Rust-powered backend compiled to WebAssembly (Wasm) for high-performance graph layout and rendering, and a modern, responsive frontend built with React.

## Key Features

- **High-Performance Visualization**: Leveraging Rust and WebAssembly for efficient, client-side rendering of large and complex ontologies.
- **Modern, Responsive UI**: A completely redesigned user interface built with React, providing a seamless and intuitive user experience across all devices.
- **Interactive Graph Visualization**: Smooth, interactive controls for panning, zooming, and exploring ontology graphs.
- **Extensible and Modular**: A clean, modern architecture that is easy to extend and customize.
- **Based on a Proven Concept**: Built on the solid foundation of the original WebVOWL, a widely used and respected tool in the semantic web community.

## Phase 3 Features (v0.2.0) - Interactive & Metadata Support

### Ontology Metadata Capabilities
- **Full OWL/RDF metadata parsing**: Extracts ontology title, description, version, authors, license, and provenance information from TTL/RDF-XML files
- **Metadata display panel**: Dedicated UI component showing ontology header information with collapsible sections
- **Namespace resolution**: Automatic detection and resolution of standard ontology prefixes (owl, rdf, rdfs, dcterms, foaf, etc.)
- **API access**: Retrieve metadata programmatically via `wasmInstance.getMetadata()`

### Interactive Node Selection
- **Click detection**: Real-time node click detection with sub-millisecond response time
- **Selection highlighting**: Visual feedback for selected nodes with animated borders and focus effects
- **Multi-select support**: Select multiple nodes using Ctrl/Cmd + Click for comparison
- **Keyboard navigation**: Navigate between nodes using arrow keys when a node is focused

### Node Details Panel
- **Comprehensive node information**: View all properties, relationships, and annotations for any selected node
- **IRI and namespace display**: Full IRI with clickable namespace prefixes
- **Related nodes quick access**: Navigate to connected nodes directly from the details panel
- **Copy-to-clipboard**: One-click copying of IRIs, labels, and property values

### Semantic Relationship Visualization
- **Enhanced edge types**: Visual distinction between ObjectProperty, DatatypeProperty, subClassOf, subPropertyOf, and other OWL/RDFS relationships
- **Color-coded edges**: Each relationship type has a unique color for easy identification
- **Edge labels**: Property names and relationship types displayed on edges (toggleable)
- **Property characteristics**: Visual indicators for symmetric, transitive, functional, and inverse properties

### React Three Fiber Integration
- **Hardware-accelerated 3D rendering**: Smooth 60 FPS visualization using WebGL
- **Interactive camera controls**: Orbit controls for intuitive pan, zoom, and rotate
- **Visual effects**: Ambient occlusion, anti-aliasing, and optional bloom effects
- **LOD support**: Automatic level-of-detail adjustments for large graphs (500+ nodes)

### API Examples

```javascript
// Check if a node was clicked at given coordinates
const clickedNodeId = wasmInstance.checkNodeClick(mouseX, mouseY);

if (clickedNodeId) {
  console.log('Clicked node:', clickedNodeId);

  // Get full node details
  const nodeDetails = wasmInstance.getNodeDetails(clickedNodeId);
  console.log('Node label:', nodeDetails.label);
  console.log('Node IRI:', nodeDetails.iri);
  console.log('Properties:', nodeDetails.properties);
}

// Retrieve ontology metadata
const metadata = wasmInstance.getMetadata();
console.log('Ontology title:', metadata.title);
console.log('Version:', metadata.version);
console.log('Authors:', metadata.authors);
console.log('Description:', metadata.description);

// Get all nodes of a specific type
const classes = wasmInstance.getNodesByType('owl:Class');
console.log('Number of classes:', classes.length);
```

### Performance Metrics

| Metric | Value | Benchmark |
|--------|-------|-----------|
| Node click detection | <1ms | 500 nodes |
| Metadata parsing | <50ms | Complex ontology |
| Panel render time | <16ms | 60 FPS maintained |
| WASM binary size | 1.2MB | Gzip compressed |
| Max nodes at 60 FPS | 500+ | With LOD enabled |

For complete changelog and migration guide, see [CHANGELOG.md](CHANGELOG.md).

## Project Structure

- **/legacy**: The original WebVOWL codebase, preserved for reference and comparison.
- **/modern**: The new React-based frontend application.
- **/rust-wasm**: The Rust-powered WebAssembly backend for graph layout and rendering.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Rust](https://www.rust-lang.org/) (latest stable version)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/WasmVOWL.git
    cd WasmVOWL
    ```

2.  **Build the Wasm backend:**

    ```bash
    cd rust-wasm
    wasm-pack build --target web
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../modern
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss your ideas.

## Documentation

### Project Documentation

- **Main README** (this file) - Quick start and features
- **Rust WASM README** (`rust-wasm/README.md`) - WASM module details
- **Modern Frontend README** (`modern/README.md`) - React app details
- **Development Guide** (`CLAUDE.md`) - For development sessions

### Ontology Tooling Documentation

Complete tooling documentation is available in `/docs/`:

- **Tooling Overview** (`/docs/TOOLING-OVERVIEW.md`)
  - Complete map of all tools
  - Input/output formats for converters
  - Dependencies and architecture
  - How WasmVOWL fits into the ecosystem

- **Tool Workflows** (`/docs/TOOL-WORKFLOWS.md`)
  - Workflow #2: From Markdown to WebVOWL Visualization
  - Workflow #6: Creating a Search-Enabled Web Interface
  - Complete step-by-step guides

- **User Guide** (`/docs/USER-GUIDE.md`)
  - For non-developers using the visualization
  - How to view your ontology
  - Search and navigation
  - Troubleshooting

- **Developer Guide** (`/docs/DEVELOPER-GUIDE.md`)
  - Extending WasmVOWL
  - Adding Rust features
  - Testing and benchmarking

- **API Reference** (`/docs/API-REFERENCE.md`)
  - Complete Rust API documentation
  - JavaScript/WASM bindings
  - WebVowl struct methods
  - Graph and Layout APIs

## Data Pipeline

### Converting Your Ontology to WebVOWL Format

```bash
# Step 1: Convert Logseq markdown to Turtle
cd /home/user/logseq
python Ontology-Tools/tools/converters/convert-to-turtle.py \
  --input mainKnowledgeGraph/pages/ \
  --output ontology.ttl

# Step 2: Convert Turtle to WebVOWL JSON
python Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  ontology.ttl \
  webvowl.json

# Step 3: Copy to frontend
cp webvowl.json publishing-tools/WasmVOWL/modern/public/data/ontology.json
```

For detailed workflows, see `/docs/TOOL-WORKFLOWS.md`.

## Integration with Ontology Tools

WasmVOWL is part of a larger ontology tooling ecosystem:

- **Input**: Accepts WebVOWL JSON format (generated by `ttl_to_webvowl_json.py`)
- **Source Data**: Logseq markdown files from `mainKnowledgeGraph/pages/`
- **Converters**: Use tools in `Ontology-Tools/tools/converters/`
- **Validation**: Validate with tools in `scripts/ontology-migration/`

### Related Tools

- `Ontology-Tools/tools/converters/convert-to-turtle.py` - Convert markdown to RDF
- `Ontology-Tools/tools/converters/ttl_to_webvowl_json.py` - Convert RDF to WebVOWL
- `Ontology-Tools/tools/converters/webvowl_header_only_converter.py` - Simplified view
- `Ontology-Tools/tools/converters/generate_search_index.py` - Search functionality

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.