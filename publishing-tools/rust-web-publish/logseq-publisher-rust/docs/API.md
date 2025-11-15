# API Documentation

Complete API reference for the Logseq Publisher Rust library.

## Table of Contents

- [Rust API](#rust-api)
  - [Parser Module](#parser-module)
  - [Graph Module](#graph-module)
  - [Exporter Module](#exporter-module)
  - [Optimizer Module](#optimizer-module)
- [WASM API](#wasm-api)
- [JavaScript Integration](#javascript-integration)
- [CLI API](#cli-api)
- [Configuration API](#configuration-api)

---

## Rust API

### Parser Module

#### `parse_logseq_page`

Parses a Logseq markdown page into structured data.

```rust
pub fn parse_logseq_page(
    content: &str,
    path: &str
) -> Result<Page, String>
```

**Parameters**:
- `content: &str` - The raw markdown content to parse
- `path: &str` - The file path (used for error reporting and page identification)

**Returns**:
- `Ok(Page)` - Successfully parsed page
- `Err(String)` - Parse error with descriptive message

**Example**:
```rust
use logseq_publisher_rust::parser::parse_logseq_page;

let content = r#"
title:: AI Alignment
public:: true

- ## Definition
  - The process of making AI systems behave in accordance with human values.
"#;

let page = parse_logseq_page(content, "ai-alignment.md")?;
println!("Title: {}", page.title);
println!("Properties: {:?}", page.properties);
println!("Blocks: {}", page.blocks.len());
```

**Error Handling**:
```rust
match parse_logseq_page(content, path) {
    Ok(page) => process_page(page),
    Err(e) => {
        eprintln!("Failed to parse {}: {}", path, e);
        // Continue with other files
    }
}
```

#### `Page` Struct

Represents a parsed Logseq page.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Page {
    pub path: String,
    pub title: String,
    pub properties: HashMap<String, String>,
    pub blocks: Vec<Block>,
    pub tags: Vec<String>,
    pub links: Vec<String>,
}
```

**Fields**:
- `path` - File system path (e.g., `"pages/ai-alignment.md"`)
- `title` - Page title extracted from filename or `title::` property
- `properties` - Key-value properties from frontmatter or inline
- `blocks` - Hierarchical list of content blocks
- `tags` - All tags found in the page (`#tag`)
- `links` - All wiki-links found (`[[Page]]`)

**Methods**:

```rust
impl Page {
    /// Get a property value
    pub fn get_property(&self, key: &str) -> Option<&String> {
        self.properties.get(key)
    }

    /// Check if page has a specific tag
    pub fn has_tag(&self, tag: &str) -> bool {
        self.tags.contains(&tag.to_string())
    }

    /// Count total blocks (including nested)
    pub fn block_count(&self) -> usize {
        count_blocks_recursive(&self.blocks)
    }
}
```

**Example**:
```rust
if let Some(status) = page.get_property("status") {
    println!("Page status: {}", status);
}

if page.has_tag("AI") {
    println!("This is an AI-related page");
}

println!("Total blocks: {}", page.block_count());
```

#### `Block` Struct

Represents a single block of content.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Block {
    pub id: String,
    pub content: String,
    pub children: Vec<Block>,
    pub properties: HashMap<String, String>,
    pub level: usize,
}
```

**Fields**:
- `id` - Unique block identifier
- `content` - Block content (markdown text)
- `children` - Nested child blocks
- `properties` - Block-level properties (`id::`, `collapsed::`)
- `level` - Indentation level (0 = top-level)

**Example**:
```rust
for block in &page.blocks {
    println!("Level {}: {}", block.level, block.content);
    for child in &block.children {
        println!("  Child: {}", child.content);
    }
}
```

---

### Graph Module

#### `Graph` Struct

Main graph data structure.

```rust
#[derive(Debug, Serialize, Deserialize)]
pub struct Graph {
    pages: HashMap<String, Page>,
    backlinks: HashMap<String, Vec<String>>,
}
```

#### `Graph::new`

Creates a new empty graph.

```rust
pub fn new() -> Self
```

**Example**:
```rust
let mut graph = Graph::new();
```

#### `Graph::add_page`

Adds a page to the graph and updates backlinks.

```rust
pub fn add_page(&mut self, page: Page)
```

**Example**:
```rust
let page = parse_logseq_page(content, path)?;
graph.add_page(page);
```

**Side Effects**:
- Updates `backlinks` map for all pages referenced by this page
- Overwrites existing page with same path

#### `Graph::get_page`

Retrieves a page by path.

```rust
pub fn get_page(&self, path: &str) -> Option<&Page>
```

**Returns**:
- `Some(&Page)` if page exists
- `None` if page not found

**Example**:
```rust
if let Some(page) = graph.get_page("ai-alignment.md") {
    println!("Found page: {}", page.title);
}
```

#### `Graph::get_backlinks`

Gets all pages that link to the specified page.

```rust
pub fn get_backlinks(&self, path: &str) -> Vec<String>
```

**Returns**: Vector of page paths that link to this page.

**Example**:
```rust
let backlinks = graph.get_backlinks("ai-alignment.md");
println!("Pages linking to AI Alignment: {}", backlinks.len());
for link in backlinks {
    println!("  - {}", link);
}
```

#### `Graph::stats`

Calculates graph statistics.

```rust
pub fn stats(&self) -> GraphStats
```

**Returns**: `GraphStats` struct with:
- `page_count` - Total number of pages
- `total_blocks` - Total blocks across all pages
- `total_links` - Total wiki-links
- `orphan_pages` - Pages with no links or backlinks

**Example**:
```rust
let stats = graph.stats();
println!("Graph Statistics:");
println!("  Pages: {}", stats.page_count);
println!("  Blocks: {}", stats.total_blocks);
println!("  Links: {}", stats.total_links);
println!("  Orphans: {}", stats.orphan_pages);
```

#### `Graph::traverse_from`

Performs graph traversal starting from a page.

```rust
pub fn traverse_from(
    &self,
    start_path: &str,
    max_depth: usize
) -> Vec<String>
```

**Parameters**:
- `start_path` - Starting page path
- `max_depth` - Maximum traversal depth

**Returns**: List of visited page paths.

**Example**:
```rust
// Find all pages within 2 links of AI Alignment
let related = graph.traverse_from("ai-alignment.md", 2);
println!("Related pages: {:?}", related);
```

---

### Exporter Module

#### `export_to_html`

Exports entire graph to HTML.

```rust
pub fn export_to_html(
    graph: &Graph,
    config: &ExportConfig
) -> Result<String, String>
```

**Parameters**:
- `graph` - The graph to export
- `config` - Export configuration

**Returns**:
- `Ok(String)` - Generated HTML
- `Err(String)` - Export error

**Example**:
```rust
use logseq_publisher_rust::exporter::{export_to_html, ExportConfig};

let config = ExportConfig {
    theme: "default".to_string(),
    include_backlinks: true,
    include_graph_view: true,
    custom_css: None,
};

let html = export_to_html(&graph, &config)?;
std::fs::write("public/index.html", html)?;
```

#### `export_page_to_html`

Exports a single page to HTML.

```rust
pub fn export_page_to_html(
    page: &Page,
    backlinks: &[String],
    config: &ExportConfig
) -> String
```

**Parameters**:
- `page` - Page to export
- `backlinks` - List of backlink paths
- `config` - Export configuration

**Returns**: HTML string for the page.

**Example**:
```rust
let page = graph.get_page("ai-alignment.md").unwrap();
let backlinks = graph.get_backlinks("ai-alignment.md");
let html = export_page_to_html(page, &backlinks, &config);

std::fs::write("public/pages/ai-alignment.html", html)?;
```

#### `ExportConfig` Struct

Configuration for HTML export.

```rust
#[derive(Debug, Deserialize)]
pub struct ExportConfig {
    pub theme: String,
    pub include_backlinks: bool,
    pub include_graph_view: bool,
    pub custom_css: Option<String>,
}
```

**Example**:
```rust
let config = ExportConfig {
    theme: "dark".to_string(),
    include_backlinks: true,
    include_graph_view: false,
    custom_css: Some("body { font-family: 'Comic Sans'; }".to_string()),
};
```

---

### Optimizer Module

#### `optimize_assets`

Optimizes a list of asset files.

```rust
pub fn optimize_assets(
    asset_paths: &[String]
) -> Result<AssetManifest, String>
```

**Parameters**:
- `asset_paths` - List of asset file paths

**Returns**:
- `Ok(AssetManifest)` - Optimization results
- `Err(String)` - Optimization error

**Example**:
```rust
use logseq_publisher_rust::optimizer::optimize_assets;

let assets = vec![
    "assets/logo.png".to_string(),
    "assets/style.css".to_string(),
    "assets/app.js".to_string(),
];

let manifest = optimize_assets(&assets)?;
println!("Original: {} bytes", manifest.total_size);
println!("Optimized: {} bytes", manifest.optimized_size);
println!("Savings: {}%",
    (1.0 - manifest.optimized_size as f64 / manifest.total_size as f64) * 100.0
);
```

#### `minify_css`

Minifies CSS code.

```rust
pub fn minify_css(css: &str) -> String
```

**Example**:
```rust
let css = r#"
body {
    margin: 0;
    padding: 0;
}
"#;

let minified = minify_css(css);
// Output: "body{margin:0;padding:0;}"
```

#### `minify_js`

Minifies JavaScript code.

```rust
pub fn minify_js(js: &str) -> String
```

**Example**:
```rust
let js = r#"
function hello() {
    console.log("Hello");
}
"#;

let minified = minify_js(js);
```

---

## WASM API

### `LogseqPublisher` Class

Main WASM entry point for JavaScript.

#### Constructor

```javascript
import init, { LogseqPublisher } from './logseq_publisher_rust.js';

await init();
const publisher = new LogseqPublisher();
```

#### `parse_files`

Parses multiple files and builds graph.

```javascript
/**
 * @param {string} filesJson - JSON object mapping paths to content
 * @returns {Promise<string>} - JSON string with graph statistics
 */
parseFiles(filesJson: string): Promise<string>
```

**Example**:
```javascript
const files = {
    "ai-alignment.md": "title:: AI Alignment\n\n- Content here",
    "rlhf.md": "title:: RLHF\n\n- Links to [[AI Alignment]]"
};

const stats = await publisher.parseFiles(JSON.stringify(files));
console.log("Graph stats:", JSON.parse(stats));
```

#### `get_page`

Retrieves a page by path.

```javascript
/**
 * @param {string} path - Page path
 * @returns {Promise<string>} - JSON string with page data
 */
getPage(path: string): Promise<string>
```

**Example**:
```javascript
const pageJson = await publisher.getPage("ai-alignment.md");
const page = JSON.parse(pageJson);

console.log("Title:", page.title);
console.log("Blocks:", page.blocks.length);
```

#### `get_backlinks`

Gets backlinks for a page.

```javascript
/**
 * @param {string} path - Page path
 * @returns {Promise<string>} - JSON array of backlink paths
 */
getBacklinks(path: string): Promise<string>
```

**Example**:
```javascript
const backlinksJson = await publisher.getBacklinks("ai-alignment.md");
const backlinks = JSON.parse(backlinksJson);

console.log("Backlinks:", backlinks);
```

#### `export_html`

Exports graph to HTML.

```javascript
/**
 * @param {string} configJson - JSON export configuration
 * @returns {Promise<string>} - Generated HTML
 */
exportHtml(configJson: string): Promise<string>
```

**Example**:
```javascript
const config = {
    theme: "default",
    include_backlinks: true,
    include_graph_view: true,
    custom_css: null
};

const html = await publisher.exportHtml(JSON.stringify(config));
```

---

## JavaScript Integration

### Loading WASM Module

```javascript
import init, { LogseqPublisher } from './pkg/logseq_publisher_rust.js';

async function loadPublisher() {
    // Initialize WASM
    await init();

    // Create publisher instance
    const publisher = new LogseqPublisher();

    return publisher;
}
```

### Parsing Files

```javascript
async function parseLogseqGraph(pagesDir) {
    const publisher = await loadPublisher();

    // Read all markdown files
    const files = {};
    for (const file of await readdir(pagesDir)) {
        if (file.endsWith('.md')) {
            const content = await readFile(path.join(pagesDir, file), 'utf-8');
            files[file] = content;
        }
    }

    // Parse into graph
    const stats = await publisher.parseFiles(JSON.stringify(files));
    console.log("Parsed:", JSON.parse(stats));

    return publisher;
}
```

### Rendering Pages

```javascript
async function renderPage(publisher, pagePath) {
    const pageJson = await publisher.getPage(pagePath);
    const page = JSON.parse(pageJson);

    const backlinksJson = await publisher.getBacklinks(pagePath);
    const backlinks = JSON.parse(backlinksJson);

    return `
        <article>
            <h1>${page.title}</h1>
            ${renderBlocks(page.blocks)}
            ${renderBacklinks(backlinks)}
        </article>
    `;
}

function renderBlocks(blocks) {
    return blocks.map(block => `
        <div class="block level-${block.level}">
            ${block.content}
            ${block.children.length > 0 ? renderBlocks(block.children) : ''}
        </div>
    `).join('');
}
```

---

## CLI API

### Basic Commands

#### Build Command

```bash
logseq-publisher build \
  --input <INPUT_DIR> \
  --output <OUTPUT_DIR> \
  [OPTIONS]
```

**Options**:
- `--input, -i <DIR>` - Input directory with markdown files (required)
- `--output, -o <DIR>` - Output directory for generated site (required)
- `--filter <PROPERTY>` - Only include pages with this property
- `--theme <THEME>` - Theme name (default, dark, light)
- `--config <FILE>` - Configuration file path
- `--clean` - Clean output directory before build
- `--verbose, -v` - Verbose output

**Example**:
```bash
logseq-publisher build \
  --input ./mainKnowledgeGraph/pages \
  --output ./public \
  --filter "public-access:: true" \
  --theme dark \
  --verbose
```

#### Serve Command

```bash
logseq-publisher serve \
  --dir <DIR> \
  --port <PORT>
```

**Options**:
- `--dir, -d <DIR>` - Directory to serve (default: ./public)
- `--port, -p <PORT>` - Port number (default: 8000)
- `--watch, -w` - Watch for changes and rebuild

**Example**:
```bash
logseq-publisher serve --dir ./public --port 3000 --watch
```

#### Init Command

```bash
logseq-publisher init [--template <TEMPLATE>]
```

Creates a new Logseq publisher project.

**Example**:
```bash
logseq-publisher init --template default
```

---

## Configuration API

### Configuration File Format

`logseq-publisher.toml`:

```toml
[input]
pages_dir = "./mainKnowledgeGraph/pages"
assets_dir = "./mainKnowledgeGraph/assets"
journals_dir = "./mainKnowledgeGraph/journals"

[output]
dir = "./public"
base_url = "https://example.com"

[filter]
# Only publish pages with this property
property = "public-access"
value = "true"

# Or use multiple filters
[[filters]]
property = "status"
value = "published"

[[filters]]
property = "type"
value = "documentation"

[features]
graph_view = true
search = true
backlinks = true
journals = false
namespaces = true

[theme]
name = "default"  # default, dark, light, custom
custom_css = "./custom.css"
custom_js = "./custom.js"

[optimization]
minify_html = true
minify_css = true
minify_js = true
compress_images = true
generate_sitemap = true
generate_rss = true

[seo]
site_name = "My Knowledge Graph"
site_description = "A comprehensive knowledge base"
site_author = "Author Name"
twitter_handle = "@handle"
og_image = "/assets/og-image.png"

[performance]
parallel_parsing = true
cache_parsed_pages = true
lazy_load_images = true
preload_links = true
```

### Loading Configuration

```rust
use serde::Deserialize;
use std::fs;

#[derive(Deserialize)]
struct Config {
    input: InputConfig,
    output: OutputConfig,
    filter: FilterConfig,
    // ...
}

let config_str = fs::read_to_string("logseq-publisher.toml")?;
let config: Config = toml::from_str(&config_str)?;
```

---

## Error Types

### Rust Errors

```rust
#[derive(Debug, Error)]
pub enum PublisherError {
    #[error("Failed to parse {file}: {reason}")]
    ParseError { file: String, reason: String },

    #[error("Failed to build graph: {0}")]
    GraphError(String),

    #[error("Failed to export: {0}")]
    ExportError(String),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),

    #[error("Configuration error: {0}")]
    ConfigError(String),
}
```

### JavaScript Errors

```javascript
try {
    const publisher = new LogseqPublisher();
    await publisher.parseFiles(filesJson);
} catch (error) {
    if (error.message.includes("ParseError")) {
        console.error("Failed to parse files:", error);
    } else if (error.message.includes("GraphError")) {
        console.error("Failed to build graph:", error);
    }
}
```

---

## Type Definitions

### TypeScript Definitions

```typescript
// Types for WASM bindings
export class LogseqPublisher {
    constructor();
    parseFiles(filesJson: string): Promise<string>;
    getPage(path: string): Promise<string>;
    getBacklinks(path: string): Promise<string>;
    exportHtml(configJson: string): Promise<string>;
    optimizeAssets(assetsJson: string): Promise<string>;
}

export interface Page {
    path: string;
    title: string;
    properties: Record<string, string>;
    blocks: Block[];
    tags: string[];
    links: string[];
}

export interface Block {
    id: string;
    content: string;
    children: Block[];
    properties: Record<string, string>;
    level: number;
}

export interface GraphStats {
    page_count: number;
    total_blocks: number;
    total_links: number;
    orphan_pages: number;
}

export interface ExportConfig {
    theme: string;
    include_backlinks: boolean;
    include_graph_view: boolean;
    custom_css?: string;
}
```

---

## Examples

See [EXAMPLES.md](EXAMPLES.md) for comprehensive usage examples.

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [EXAMPLES.md](EXAMPLES.md) - Usage examples
- [CONTRIBUTING.md](CONTRIBUTING.md) - Development guide

---

**Last Updated**: 2025-11-12
**Version**: 1.0.0
