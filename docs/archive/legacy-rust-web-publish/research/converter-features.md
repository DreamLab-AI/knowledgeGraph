# Logseq Publish-SPA Converter - Feature Analysis

## Executive Summary

The original `publish-spa` converter is a ClojureScript/nbb-based CLI tool that converts Logseq markdown graphs into deployable Single Page Applications (SPA). It has been partially ported to Rust/WASM for performance improvements.

## Core Features

### 1. Graph Parsing and Processing

**Input Processing:**
- Parses Logseq graph directories with standard structure:
  - `pages/` - Regular pages
  - `journals/` - Journal entries
  - `logseq/config.edn` - Graph configuration
  - `logseq/custom.css` - Custom styling
- Validates directory structure before processing
- Reads EDN configuration files

**Supported File Formats:**
- Markdown (.md) files
- Org-mode support (via config)
- Frontmatter properties (YAML-style)
- Block-based hierarchical content

### 2. Graph Database Construction

**Page Structure:**
- Title extraction from file path
- Properties (key-value metadata)
- Blocks (hierarchical content units)
- Tags extraction (#tag syntax)
- Links extraction ([[wiki-link]] syntax)

**Graph Relations:**
- Bidirectional link tracking
- Backlinks computation
- Page interconnection mapping
- Orphan page detection

**Block Structure:**
- Unique IDs per block
- Hierarchical nesting (parent-child relationships)
- Indentation-based levels (2 spaces = 1 level)
- Property support at block level
- Recursive child block processing

### 3. Publishing Configuration

**CLI Options:**
```bash
logseq-publish-spa OUT-DIR [OPTIONS]
```

**Required Arguments:**
- `OUT-DIR` - Output directory for published SPA

**Optional Arguments:**
- `--directory, -d` - Graph directory (default: ".")
- `--static-directory, -s` - Logseq static directory (default: "../logseq/static")
- `--theme-mode` - "light" or "dark" (default: "light")
- `--accent-color` - Color from predefined palette (default: "blue")

**Valid Accent Colors:**
tomato, red, crimson, pink, plum, purple, violet, indigo, blue, cyan, teal, green, grass, orange, brown

### 4. Export and Rendering

**HTML Generation:**
- Single page application structure
- Responsive CSS layout
- Navigation system for wiki-links
- Block rendering with proper nesting
- Tag and link styling

**Markdown Rendering:**
- Wiki-links: `[[page]]` → clickable links
- Tags: `#tag` → styled tags
- Bold: `**text**` → `<strong>`
- Italic: `*text*` → `<em>`
- Block quotes: `#+BEGIN_QUOTE` support
- Embedded media: `{{video URL}}` support

**Asset Handling:**
- Static asset copying from Logseq installation
- CSS compilation
- JavaScript bundling
- Custom CSS injection
- Theme application

### 5. Graph Statistics and Analytics

**Computed Metrics:**
- Total page count
- Total block count (recursive)
- Total link count
- Orphan page count (no links in/out)
- Graph traversal capabilities

### 6. Publishing Controls

**Page Visibility:**
- `publishing/all-pages-public?` - Export all pages
- Page-level public/private controls
- Hidden directory/file filtering

**Content Configuration:**
- Custom CSS URL support
- Custom JavaScript injection
- Arweave gateway configuration
- Default home page settings
- Sidebar configuration

## Original Implementation Stack

### Dependencies

**ClojureScript Core:**
- `@logseq/nbb-logseq` v1.2.173 - nbb (node-babashka) runtime
- `babashka.cli` - Command-line parsing
- `clojure.edn` - EDN data reading

**Logseq Libraries (Git dependencies):**
- `logseq/graph-parser` (v0.10.6) - Graph parsing logic
- `logseq/publishing` (v0.10.6) - Publishing engine
- `logseq/db` (v0.10.6) - Database layer

**Node.js Dependencies:**
- `fs-extra` v9.1.0 - Enhanced file system operations
- `mldoc` v1.5.1 - Markdown/Org-mode parsing

### Entry Point

**Executable:** `publish_spa.mjs`
- Node.js shebang script
- Loads nbb-logseq runtime
- Adds classpath for ClojureScript sources
- Invokes `-main` function with CLI args

### Build and Development Tools

**Babashka Tasks:**
- `lint:large-vars` - Detect oversized variables
- `lint:carve` - Find unused code
- `lint:ns-docstrings` - Check namespace documentation
- `lint:minimize-public-vars` - Reduce public API surface

**clj-kondo:** Static analysis and linting

## Rust/WASM Port Status

### Implemented Features

**Parser Module (`parser.rs`):**
- ✅ Page parsing from markdown
- ✅ Block hierarchy extraction
- ✅ Frontmatter property parsing
- ✅ Tag extraction (#tag)
- ✅ Link extraction ([[link]])
- ✅ Indentation-based nesting
- ✅ Recursive child block parsing

**Graph Module (`graph.rs`):**
- ✅ Page storage (HashMap)
- ✅ Backlink tracking
- ✅ Graph statistics (pages, blocks, links, orphans)
- ✅ Graph traversal with depth limits
- ✅ Page retrieval by path

**Exporter Module (`exporter.rs`):**
- ✅ HTML generation
- ✅ CSS generation with theming
- ✅ Block rendering with nesting
- ✅ Markdown to HTML conversion
- ✅ Wiki-link rendering
- ✅ Tag rendering
- ✅ Backlink display
- ✅ Property display

**WASM Interface (`lib.rs`):**
- ✅ `parse_files()` - Parse JSON file map
- ✅ `get_page()` - Retrieve single page
- ✅ `get_backlinks()` - Get page backlinks
- ✅ `export_html()` - Export to HTML
- ✅ `optimize_assets()` - Asset optimization

**Build Configuration:**
- ✅ wasm32-unknown-unknown target
- ✅ wasm-bindgen bindings
- ✅ Release optimizations (LTO, opt-level 3)

### Missing Features (Gaps to Fill)

**Graph Parsing:**
- ❌ Org-mode file support
- ❌ Journal file special handling
- ❌ Configuration file (config.edn) parsing
- ❌ Custom CSS file integration
- ❌ File system traversal (currently expects JSON input)
- ❌ Asset discovery and copying

**Publishing Configuration:**
- ❌ Theme mode configuration (light/dark)
- ❌ Accent color application
- ❌ Public/private page filtering
- ❌ Hidden file/directory filtering
- ❌ Default home page setting
- ❌ Sidebar configuration

**Content Rendering:**
- ❌ Advanced markdown features:
  - Block quotes (#+BEGIN_QUOTE)
  - Code blocks (```language)
  - Embedded content ({{video}}, {{embed}})
  - Task markers (TODO, DOING, NOW, LATER)
  - Timestamps and scheduling
  - Queries and advanced features
- ❌ Logseq-specific syntax:
  - Block references ((id))
  - Block embeds {{embed ((id))}}
  - Properties rendering
  - Macros
- ❌ Full markdown spec compliance

**Static Asset Handling:**
- ❌ Logseq static directory integration
- ❌ Asset copying and optimization
- ❌ JavaScript bundling
- ❌ Font loading
- ❌ Image optimization

**Error Handling:**
- ❌ Graceful error messages
- ❌ Validation warnings
- ❌ Progress notification system
- ❌ Process exit codes

**Integration:**
- ❌ NPM package structure
- ❌ CLI wrapper (currently WASM only)
- ❌ CI environment detection
- ❌ Path resolution (relative vs absolute)

## Data Flow Architecture

### Original ClojureScript Flow:

```
CLI Entry (publish_spa.mjs)
  ↓
Parse CLI Arguments (babashka.cli)
  ↓
Validate Directories
  ↓
Read Graph Config (config.edn)
  ↓
Parse Graph (graph-parser)
  ↓
Build Database (Datascript)
  ↓
Export SPA (publishing namespace)
  ↓
Copy Static Assets
  ↓
Generate HTML/CSS/JS
  ↓
Write to Output Directory
```

### Current Rust/WASM Flow:

```
WASM Module Initialization
  ↓
parse_files(files_json) - Expects pre-loaded file map
  ↓
Parser: markdown → Page structs
  ↓
Graph: Build page map + backlinks
  ↓
export_html(config_json)
  ↓
Exporter: Generate HTML string
  ↓
Return HTML (caller handles file writing)
```

### Key Architectural Differences:

1. **File System:**
   - Original: Direct FS access via Node.js
   - Rust/WASM: Expects JSON input (FS handling delegated to caller)

2. **Dependencies:**
   - Original: Uses Logseq core libraries (graph-parser, publishing)
   - Rust/WASM: Reimplements core logic from scratch

3. **Configuration:**
   - Original: Reads config.edn directly
   - Rust/WASM: Expects JSON config object

4. **Assets:**
   - Original: Copies from Logseq static directory
   - Rust/WASM: Stubs only, no asset handling

## Test Coverage

### Original ClojureScript:
- Test graph in `test/publish-test-graph/`
- Example pages and journals
- Config.edn with publishing settings

### Rust Implementation:
- Unit tests in each module (parser, graph, exporter)
- Integration tests in `tests/` directory
- WASM-specific tests
- Property tests (proptest, quickcheck)
- Benchmark suite (criterion)

**Test Files:**
- `tests/unit_parser_tests.rs`
- `tests/integration_test.rs`
- `tests/integration_graph_tests.rs`
- `tests/e2e_publishing_tests.rs`
- `tests/wasm_tests.rs`

## Performance Considerations

### Rust Advantages:
- Zero-cost abstractions
- No garbage collection
- SIMD optimizations possible
- Predictable memory usage
- Fast regex engine

### Optimization Flags:
- LTO (Link-Time Optimization): Enabled
- Opt-level: 3 (max optimization)
- Codegen units: 1 (max cross-module optimization)

### Benchmarking:
- Parser performance
- Graph construction
- WASM export overhead

## Edge Cases and Special Handling

### File Path Handling:
- Triple underscore (___) for slash in page titles
- Percent-encoding for special characters
- Case sensitivity considerations

### Content Parsing:
- Empty lines handling
- Mixed indentation tolerance
- Malformed frontmatter recovery
- Unicode support
- Multi-line blocks

### Graph Construction:
- Circular references handling
- Self-references
- Missing link targets
- Duplicate page paths

### Export:
- Empty graphs
- Single page graphs
- Graphs with no links
- Pages with no blocks

## Known Limitations

### Original Implementation:
- Requires local Logseq installation for static assets
- Slow startup time (nbb overhead)
- Memory intensive for large graphs
- Platform-specific path handling

### Rust/WASM Port:
- No file system access (by design)
- Incomplete feature parity
- No Org-mode support yet
- Limited markdown features
- No configuration file parsing

## Integration Points

### GitHub Action:
- Runs as Docker container or direct CLI
- Triggered on push events
- Outputs to `www/` directory
- Deploys via GitHub Pages

### Required Inputs:
- Graph directory path
- Output directory path
- Logseq version/SHA
- Theme settings
- Accent color

### Environment Variables:
- `CI` - Detects CI environment
- Path adjustments for CI context

## Recommendations for Full Port

### High Priority:
1. Implement config.edn parsing (EDN format)
2. Add file system traversal (walkdir)
3. Complete markdown rendering (pulldown-cmark)
4. Implement theme/color configuration
5. Add public/private page filtering

### Medium Priority:
6. Org-mode support (separate parser)
7. Asset copying and optimization
8. JavaScript generation for SPA navigation
9. Advanced Logseq syntax (block refs, embeds)
10. Query and macro support

### Low Priority:
11. Build NPM package wrapper
12. CLI tool separate from WASM
13. Progress reporting and notifications
14. Performance benchmarking vs original
15. Migration tooling from original
