# Usage Examples

Comprehensive examples for using the Logseq Publisher.

## Table of Contents

- [Basic Usage](#basic-usage)
- [Filtering Pages](#filtering-pages)
- [Custom Themes](#custom-themes)
- [GitHub Actions](#github-actions)
- [API Integration](#api-integration)
- [Advanced Workflows](#advanced-workflows)

---

## Basic Usage

### Example 1: Simple Build

Build and publish all pages:

```bash
cd publishing-tools/rust-web-publish/logseq-publisher-rust

cargo run --release -- \
  --input ../../../mainKnowledgeGraph/pages \
  --output ./dist
```

**Result**:
```
Parsing 1,041 pages...
Building graph...
Exporting to HTML...
✓ Generated index.html (8.5 MB)
✓ Generated 1,041 page JSON files (52 MB total)
✓ Total output: 60.5 MB
✓ Build completed in 5m 18s
```

**Output Structure**:
```
dist/
├── index.html (8.5 MB)
├── pages/
│   ├── ai-alignment.json
│   ├── blockchain.json
│   └── ... (1,041 files)
├── assets/
│   ├── style.css
│   └── app.js
└── search-index.json
```

---

### Example 2: Filter by Property

Publish only pages with `public-access:: true`:

```bash
cargo run --release -- \
  --input ../../../mainKnowledgeGraph/pages \
  --output ./dist \
  --filter "public-access:: true"
```

**Input** (`ai-alignment.md`):
```markdown
public-access:: true
status:: published

- ## Definition
  - The process of making AI systems behave...
```

**Result**: Only pages with `public-access:: true` are published.

---

### Example 3: Specify Base URL

For deployment to custom domain:

```bash
cargo run --release -- \
  --input ./pages \
  --output ./dist \
  --base-url "https://example.com"
```

**Effect**: All links use `https://example.com` as base.

---

## Filtering Pages

### Example 4: Multiple Filters

Filter by multiple properties:

```bash
cargo run --release -- \
  --input ./pages \
  --output ./dist \
  --filter "status:: published" \
  --filter "type:: documentation"
```

**Result**: Only pages matching ALL filters are published.

---

### Example 5: Exclude Private Pages

**Approach 1**: Use positive filter
```bash
--filter "public:: true"
```

**Approach 2**: Tag-based filtering
```bash
--filter "tags:: #public"
```

---

### Example 6: Namespace Filtering

Publish only specific namespaces:

```bash
cargo run --release -- \
  --input ./pages \
  --output ./dist \
  --namespace "documentation/"
```

**Result**: Only pages in `documentation/` namespace are published.

---

## Custom Themes

### Example 7: Custom CSS

Create custom theme:

**`custom-theme.css`**:
```css
:root {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --link-color: #4fc3f7;
    --accent-color: #ff6b6b;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: 'JetBrains Mono', monospace;
}

.block {
    border-left: 2px solid var(--accent-color);
    padding-left: 1rem;
}

.wiki-link {
    color: var(--link-color);
    border-bottom: 1px dotted var(--link-color);
}
```

**Build with custom theme**:
```bash
cargo run --release -- \
  --input ./pages \
  --output ./dist \
  --custom-css ./custom-theme.css
```

---

### Example 8: Theme Configuration

**`logseq-publisher.toml`**:
```toml
[theme]
name = "custom"
custom_css = "./themes/dark.css"
custom_js = "./themes/custom.js"

[theme.colors]
primary = "#4fc3f7"
secondary = "#ff6b6b"
background = "#1a1a1a"
text = "#e0e0e0"
```

---

## GitHub Actions

### Example 9: Basic GitHub Actions

**`.github/workflows/publish.yml`**:
```yaml
name: Publish Graph

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Rust
        uses: actions-rust-lang/setup-rust-toolchain@v1

      - name: Install wasm-pack
        run: cargo install wasm-pack

      - name: Build publisher
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          cargo build --release
          wasm-pack build --target web --out-dir dist/pkg --release

      - name: Publish graph
        working-directory: publishing-tools/rust-web-publish/logseq-publisher-rust
        run: |
          ./target/release/logseq-publisher \
            --input ../../../mainKnowledgeGraph/pages \
            --output ./dist \
            --filter "public-access:: true"

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: publishing-tools/rust-web-publish/logseq-publisher-rust/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

### Example 10: Conditional Publishing

Publish only when pages change:

```yaml
name: Publish (Conditional)

on:
  push:
    paths:
      - 'mainKnowledgeGraph/pages/**'

jobs:
  build:
    # ... same as Example 9
```

---

### Example 11: Multi-Environment Deploy

Deploy to staging and production:

```yaml
name: Multi-Environment Deploy

on:
  push:
    branches:
      - main      # → production
      - staging   # → staging

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Determine environment
        id: env
        run: |
          if [ "${{ github.ref }}" == "refs/heads/main" ]; then
            echo "env=production" >> $GITHUB_OUTPUT
            echo "url=https://example.com" >> $GITHUB_OUTPUT
          else
            echo "env=staging" >> $GITHUB_OUTPUT
            echo "url=https://staging.example.com" >> $GITHUB_OUTPUT
          fi

      - name: Build
        run: |
          cd publishing-tools/rust-web-publish/logseq-publisher-rust
          cargo build --release
          ./target/release/logseq-publisher \
            --input ../../../mainKnowledgeGraph/pages \
            --output ./dist \
            --base-url "${{ steps.env.outputs.url }}"

      - name: Deploy to ${{ steps.env.outputs.env }}
        # Deploy steps...
```

---

## API Integration

### Example 12: Rust API Usage

```rust
use logseq_publisher_rust::{
    parser::parse_logseq_page,
    graph::Graph,
    exporter::{export_to_html, ExportConfig},
};
use std::fs;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize graph
    let mut graph = Graph::new();

    // Parse all pages
    for entry in fs::read_dir("./pages")? {
        let entry = entry?;
        let path = entry.path();

        if path.extension().and_then(|s| s.to_str()) == Some("md") {
            let content = fs::read_to_string(&path)?;
            let page = parse_logseq_page(&content, path.to_str().unwrap())?;
            graph.add_page(page);
        }
    }

    // Get statistics
    let stats = graph.stats();
    println!("Parsed {} pages", stats.page_count);
    println!("Total blocks: {}", stats.total_blocks);
    println!("Total links: {}", stats.total_links);

    // Export to HTML
    let config = ExportConfig {
        theme: "default".to_string(),
        include_backlinks: true,
        include_graph_view: true,
        custom_css: None,
    };

    let html = export_to_html(&graph, &config)?;
    fs::write("./dist/index.html", html)?;

    println!("✓ Published successfully!");
    Ok(())
}
```

---

### Example 13: WASM Integration

```javascript
import init, { LogseqPublisher } from './pkg/logseq_publisher_rust.js';

async function publishGraph() {
    // Initialize WASM
    await init();

    // Create publisher instance
    const publisher = new LogseqPublisher();

    // Read files (in browser context)
    const files = {};
    for (const file of fileList) {
        const content = await file.text();
        files[file.name] = content;
    }

    // Parse files
    const stats = await publisher.parseFiles(JSON.stringify(files));
    console.log("Graph stats:", JSON.parse(stats));

    // Export to HTML
    const config = {
        theme: "default",
        include_backlinks: true,
        include_graph_view: true,
        custom_css: null
    };

    const html = await publisher.exportHtml(JSON.stringify(config));

    // Download or display
    downloadFile('index.html', html);
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
```

---

### Example 14: Node.js Script

```javascript
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function publishGraph(options) {
    const {
        inputDir,
        outputDir,
        filter,
        baseUrl,
        verbose = false
    } = options;

    // Build command
    const cmd = [
        'cargo', 'run', '--release', '--',
        '--input', inputDir,
        '--output', outputDir,
        filter && `--filter "${filter}"`,
        baseUrl && `--base-url ${baseUrl}`,
        verbose && '--verbose'
    ].filter(Boolean).join(' ');

    console.log(`Running: ${cmd}`);

    // Execute
    try {
        execSync(cmd, {
            cwd: './publishing-tools/rust-web-publish/logseq-publisher-rust',
            stdio: 'inherit'
        });

        console.log('✓ Published successfully!');

        // Get file sizes
        const indexSize = fs.statSync(path.join(outputDir, 'index.html')).size;
        const pagesDir = path.join(outputDir, 'pages');
        const pageFiles = fs.readdirSync(pagesDir);

        console.log(`\nResults:`);
        console.log(`- index.html: ${(indexSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`- Pages: ${pageFiles.length} files`);

    } catch (error) {
        console.error('✗ Publishing failed:', error.message);
        process.exit(1);
    }
}

// Usage
publishGraph({
    inputDir: './mainKnowledgeGraph/pages',
    outputDir: './dist',
    filter: 'public-access:: true',
    baseUrl: 'https://example.com',
    verbose: true
});
```

---

## Advanced Workflows

### Example 15: Incremental Builds

Only rebuild changed pages:

```bash
#!/bin/bash
# incremental-build.sh

set -e

INPUT_DIR="./mainKnowledgeGraph/pages"
OUTPUT_DIR="./dist"
CACHE_FILE=".build-cache"

# Get list of changed files since last build
if [ -f "$CACHE_FILE" ]; then
    CHANGED_FILES=$(find "$INPUT_DIR" -name "*.md" -newer "$CACHE_FILE")
else
    CHANGED_FILES=$(find "$INPUT_DIR" -name "*.md")
fi

if [ -z "$CHANGED_FILES" ]; then
    echo "No changes detected. Skipping build."
    exit 0
fi

echo "Changed files:"
echo "$CHANGED_FILES"

# Run publisher
cargo run --release -- \
  --input "$INPUT_DIR" \
  --output "$OUTPUT_DIR" \
  --filter "public-access:: true"

# Update cache
touch "$CACHE_FILE"

echo "✓ Incremental build complete"
```

---

### Example 16: Multi-Language Publishing

Publish in multiple languages:

```bash
#!/bin/bash
# multi-lang-publish.sh

LANGUAGES=("en" "zh" "ja" "es")

for lang in "${LANGUAGES[@]}"; do
    echo "Publishing $lang..."

    cargo run --release -- \
      --input "./pages/$lang" \
      --output "./dist/$lang" \
      --filter "public-access:: true" \
      --base-url "https://example.com/$lang"

    echo "✓ $lang published"
done

echo "✓ All languages published"
```

---

### Example 17: Scheduled Publishing

**`.github/workflows/scheduled-publish.yml`**:
```yaml
name: Scheduled Publish

on:
  schedule:
    # Run every day at 2:00 AM UTC
    - cron: '0 2 * * *'
  workflow_dispatch:  # Allow manual trigger

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Check for changes
        id: changes
        run: |
          if git diff --name-only HEAD~1 HEAD | grep -q "^mainKnowledgeGraph/pages/"; then
            echo "changes=true" >> $GITHUB_OUTPUT
          else
            echo "changes=false" >> $GITHUB_OUTPUT
          fi

      - name: Build and deploy
        if: steps.changes.outputs.changes == 'true'
        run: |
          # Build and deploy steps...
```

---

### Example 18: Pre-Publish Validation

Validate pages before publishing:

```bash
#!/bin/bash
# validate-and-publish.sh

set -e

INPUT_DIR="./mainKnowledgeGraph/pages"

echo "Validating pages..."

# Check for required properties
for file in "$INPUT_DIR"/*.md; do
    if ! grep -q "public-access::" "$file"; then
        echo "⚠ Warning: $file missing public-access property"
    fi

    if ! grep -q "status::" "$file"; then
        echo "⚠ Warning: $file missing status property"
    fi
done

# Check for broken links
echo "Checking for broken links..."
# ... link validation logic ...

# Run tests
echo "Running tests..."
cargo test

# If all checks pass, publish
echo "All checks passed. Publishing..."
cargo run --release -- \
  --input "$INPUT_DIR" \
  --output ./dist \
  --filter "public-access:: true"

echo "✓ Published successfully"
```

---

### Example 19: Analytics Integration

Add analytics tracking:

**`custom.js`**:
```javascript
// Analytics tracking
(function() {
    // Track page views
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.replace('#/page/', '');
        if (page) {
            gtag('config', 'G-XXXXXXXXXX', {
                'page_path': `/page/${page}`
            });
        }
    });

    // Track search queries
    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 3) {
            gtag('event', 'search', {
                'search_term': query
            });
        }
    });

    // Track link clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('wiki-link')) {
            const target = e.target.textContent;
            gtag('event', 'link_click', {
                'link_text': target
            });
        }
    });
})();
```

---

### Example 20: Performance Monitoring

Monitor build performance:

```bash
#!/bin/bash
# perf-monitor.sh

set -e

START_TIME=$(date +%s)

# Run publisher with timing
time cargo run --release -- \
  --input ./mainKnowledgeGraph/pages \
  --output ./dist \
  --filter "public-access:: true" \
  --verbose 2>&1 | tee build.log

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

# Calculate metrics
INDEX_SIZE=$(du -h dist/index.html | cut -f1)
TOTAL_SIZE=$(du -sh dist | cut -f1)
PAGE_COUNT=$(ls dist/pages/*.json | wc -l)

# Generate report
echo "=== Build Performance Report ===" | tee perf-report.txt
echo "Build Time: ${DURATION}s" | tee -a perf-report.txt
echo "Index Size: $INDEX_SIZE" | tee -a perf-report.txt
echo "Total Size: $TOTAL_SIZE" | tee -a perf-report.txt
echo "Page Count: $PAGE_COUNT" | tee -a perf-report.txt
echo "Avg Page Size: $(($(du -sb dist/pages | cut -f1) / PAGE_COUNT)) bytes" | tee -a perf-report.txt

# Store in memory (Claude Flow)
npx claude-flow@alpha hooks memory-store \
  --key "publisher/performance/$(date +%Y-%m-%d)" \
  --value "{\"duration\":$DURATION,\"index_size\":\"$INDEX_SIZE\",\"page_count\":$PAGE_COUNT}"

echo "✓ Performance report generated"
```

---

## Summary

These examples demonstrate:
- ✅ Basic CLI usage
- ✅ Filtering and configuration
- ✅ Theme customization
- ✅ CI/CD integration
- ✅ API usage (Rust, WASM, Node.js)
- ✅ Advanced workflows
- ✅ Performance monitoring

## Related Documentation

- [README.md](README.md) - Project overview
- [API.md](API.md) - API reference
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

---

**Last Updated**: 2025-11-12
**Version**: 1.0.0
