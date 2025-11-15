# Migration Guide

Guide for migrating from the official Logseq publisher to the Rust-based externalized content publisher.

## Table of Contents

- [Why Migrate?](#why-migrate)
- [Key Differences](#key-differences)
- [Breaking Changes](#breaking-changes)
- [Migration Steps](#migration-steps)
- [Configuration Changes](#configuration-changes)
- [Compatibility Matrix](#compatibility-matrix)
- [Troubleshooting](#troubleshooting)

---

## Why Migrate?

### Problem with Official Publisher

The official Logseq publisher embeds all page content in `index.html`:

```
✗ index.html: 125.61 MB (1,041 pages embedded)
✗ Exceeds GitHub Pages 100 MB limit
✗ Slow initial page load
✗ Browser memory issues on mobile
✗ Not scalable beyond ~500 pages
```

### Benefits of Rust Publisher

```
✓ index.html: 8.5 MB (metadata only)
✓ pages/*.json: 52 MB (lazy loaded)
✓ Total: 60.5 MB (under GitHub limit)
✓ Fast initial load (8.5 MB vs 125 MB)
✓ Scales to unlimited pages
✓ Better performance and memory usage
```

## Key Differences

### Architecture

| Aspect | Official Publisher | Rust Publisher |
|--------|-------------------|----------------|
| **Content Storage** | Embedded in index.html | Externalized to JSON files |
| **Initial Load** | All content (125 MB) | Metadata only (8.5 MB) |
| **Navigation** | Instant (pre-loaded) | 0.3 sec (lazy load) |
| **Build Language** | JavaScript/ClojureScript | Rust + WASM |
| **Build Time** | ~2 minutes | ~5 minutes |
| **Memory Usage** | 2+ GB | 145 MB |
| **Max Pages** | ~500 | Unlimited |

### Features

| Feature | Official | Rust Publisher |
|---------|----------|----------------|
| **Page Navigation** | ✓ | ✓ |
| **Graph View** | ✓ | ✓ |
| **Backlinks** | ✓ | ✓ |
| **Search** | ✓ | ✓ |
| **Wiki-Links** | ✓ | ✓ |
| **Tags** | ✓ | ✓ |
| **Properties** | ✓ | ✓ |
| **Namespaces** | ✓ | ✓ |
| **Block References** | ✓ | ✓ (planned) |
| **Queries** | ✓ | ✗ (planned v2.0) |
| **Plugins** | ✓ | ✗ (planned v2.0) |

---

## Breaking Changes

### 1. Content Loading Model

**Before** (Official):
```javascript
// All content immediately available
const page = pages['ai-alignment'];
renderPage(page);
```

**After** (Rust):
```javascript
// Content loaded on demand
async function loadPage(slug) {
    const response = await fetch(`/pages/${slug}.json`);
    const page = await response.json();
    renderPage(page);
}
```

**Migration Strategy**: Implement client-side caching to minimize performance impact.

### 2. URL Format

**Before**:
```
https://example.com/#/page/ai-alignment
```

**After** (Same):
```
https://example.com/#/page/ai-alignment
```

**No Change**: URL format remains compatible.

### 3. Configuration Format

**Before** (`logseq.yaml`):
```yaml
publish:
  version: 2
  theme: default
  features:
    - graph
    - search
```

**After** (`logseq-publisher.toml`):
```toml
[features]
graph_view = true
search = true

[theme]
name = "default"
```

**Migration**: Convert YAML to TOML format.

### 4. Build Command

**Before**:
```bash
npm run publish-spa
```

**After**:
```bash
cargo run --release -- \
  --input ./pages \
  --output ./public
```

### 5. Filter Syntax

**Before** (JavaScript):
```javascript
filter: (page) => page.properties['public'] === true
```

**After** (CLI flag):
```bash
--filter "public:: true"
```

---

## Migration Steps

### Step 1: Backup Current Setup

```bash
# Backup your published site
cp -r public public-backup

# Backup workflow file
cp .github/workflows/publish.yml .github/workflows/publish.yml.backup
```

### Step 2: Install Rust Publisher

```bash
# Navigate to publishing tools
cd publishing-tools/rust-web-publish

# Clone Rust publisher (if not already present)
git clone https://github.com/logseq/logseq-publisher-rust.git
cd logseq-publisher-rust

# Build publisher
cargo build --release

# Build WASM module
wasm-pack build --target web --out-dir dist/pkg --release
```

### Step 3: Test Local Build

```bash
# Run publisher on small subset first
./target/release/logseq-publisher \
  --input ../../../mainKnowledgeGraph/pages \
  --output ./dist-test \
  --filter "public:: true"

# Verify output
ls -lh dist-test/
du -sh dist-test/

# Test locally
cd dist-test
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Step 4: Compare Results

```bash
# Compare file sizes
echo "Old publisher:"
du -h public-backup/index.html

echo "New publisher:"
du -h dist-test/index.html
du -sh dist-test/pages/

# Compare page count
echo "Old: $(grep -c 'data-page' public-backup/index.html) pages embedded"
echo "New: $(ls dist-test/pages/*.json | wc -l) pages externalized"
```

### Step 5: Update GitHub Workflow

Replace `.github/workflows/publish.yml`:

```yaml
name: Publish with Rust Publisher

on:
  push:
    branches: [main]
  workflow_dispatch:

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

      - name: Cache dependencies
        uses: Swatinem/rust-cache@v2
        with:
          workspaces: publishing-tools/rust-web-publish/logseq-publisher-rust

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
            --filter "public:: true"

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

### Step 6: Deploy to Staging

```bash
# Create staging branch
git checkout -b staging-rust-publisher

# Commit changes
git add .
git commit -m "Migrate to Rust publisher"

# Push to staging
git push -u origin staging-rust-publisher

# Test staging deployment
# Visit https://username.github.io/repo/staging-rust-publisher
```

### Step 7: Verify Functionality

Test all features on staging:

- [ ] Page navigation works
- [ ] Graph view renders
- [ ] Search returns results
- [ ] Backlinks display correctly
- [ ] Wiki-links resolve
- [ ] Tags are clickable
- [ ] Properties display
- [ ] Images load
- [ ] Mobile responsive
- [ ] No console errors

### Step 8: Deploy to Production

```bash
# Merge staging to main
git checkout main
git merge staging-rust-publisher

# Push to production
git push origin main

# Monitor deployment
# Visit https://username.github.io/repo
```

### Step 9: Cleanup

```bash
# Remove backup (after confirming success)
rm -rf public-backup
rm .github/workflows/publish.yml.backup

# Delete staging branch
git branch -d staging-rust-publisher
git push origin --delete staging-rust-publisher
```

---

## Configuration Changes

### Official Publisher Config

`logseq.yaml`:
```yaml
publish:
  version: 2
  theme: default
  features:
    - graph
    - search
    - backlinks
  exclude:
    - private-page
  include_tags:
    - public
```

### Rust Publisher Config

`logseq-publisher.toml`:
```toml
[input]
pages_dir = "./mainKnowledgeGraph/pages"
assets_dir = "./mainKnowledgeGraph/assets"

[output]
dir = "./public"
base_url = "https://example.com"

[filter]
property = "public-access"
value = "true"

[features]
graph_view = true
search = true
backlinks = true

[theme]
name = "default"
custom_css = "./custom.css"
```

### Property Mapping

| Official | Rust Publisher |
|----------|---------------|
| `public: true` | `public-access:: true` |
| `exclude: ["private"]` | Filter inverted (only include matching) |
| `theme: dark` | `[theme] name = "dark"` |

---

## Compatibility Matrix

### Logseq Syntax Support

| Syntax | Official | Rust Publisher |
|--------|----------|----------------|
| **Blocks** | ✓ | ✓ |
| **Nested Blocks** | ✓ | ✓ |
| **Wiki-Links** `[[Page]]` | ✓ | ✓ |
| **Tags** `#tag` | ✓ | ✓ |
| **Properties** `key:: value` | ✓ | ✓ |
| **Block Refs** `((id))` | ✓ | ✗ (planned v1.2) |
| **Queries** `{{query}}` | ✓ | ✗ (planned v2.0) |
| **Embeds** `{{embed}}` | ✓ | ✗ (planned v2.0) |
| **Code Blocks** | ✓ | ✓ |
| **Math** `$$...$$` | ✓ | ✓ |
| **Diagrams** (mermaid) | ✓ | ✗ (planned v1.1) |

### Browser Support

| Browser | Official | Rust Publisher |
|---------|----------|----------------|
| **Chrome 90+** | ✓ | ✓ |
| **Firefox 88+** | ✓ | ✓ |
| **Safari 14+** | ✓ | ✓ |
| **Edge 90+** | ✓ | ✓ |
| **Mobile** | ⚠ (slow) | ✓ (fast) |
| **IE 11** | ✗ | ✗ |

---

## Troubleshooting

### Issue: "Pages not loading"

**Symptoms**: Navigation works but pages show blank.

**Cause**: JSON files not generated or wrong path.

**Solution**:
```bash
# Verify JSON files exist
ls -l dist/pages/*.json

# Check browser console for 404 errors
# Fix base URL in config:
--base-url "https://your-site.com"
```

### Issue: "Graph view broken"

**Symptoms**: Graph shows nodes but no links.

**Cause**: Backlinks not calculated correctly.

**Solution**:
```bash
# Rebuild with verbose logging
./target/release/logseq-publisher \
  --input ./pages \
  --output ./dist \
  --verbose

# Check logs for link extraction errors
```

### Issue: "Build takes too long"

**Symptoms**: Builds take 10+ minutes.

**Cause**: Large number of pages or slow parsing.

**Solution**:
```bash
# Use parallel processing (enabled by default)
# Check system resources:
htop

# Reduce page count with filter:
--filter "status:: published"
```

### Issue: "Search not working"

**Symptoms**: Search bar appears but no results.

**Cause**: Search index not generated.

**Solution**:
```bash
# Verify search index exists
ls -l dist/search-index.json

# Rebuild with search enabled:
[features]
search = true
```

### Issue: "Missing images/assets"

**Symptoms**: Images show as broken.

**Cause**: Assets not copied.

**Solution**:
```bash
# Specify assets directory:
--assets ./mainKnowledgeGraph/assets

# Or copy manually:
cp -r mainKnowledgeGraph/assets dist/
```

---

## Rollback Plan

If migration fails, rollback to official publisher:

```bash
# Restore backup
rm -rf public
cp -r public-backup public

# Restore workflow
cp .github/workflows/publish.yml.backup .github/workflows/publish.yml

# Commit and push
git add .
git commit -m "Rollback to official publisher"
git push
```

---

## Feature Parity Roadmap

### v1.0 (Current)
- ✓ Basic page rendering
- ✓ Graph view
- ✓ Backlinks
- ✓ Search
- ✓ Wiki-links
- ✓ Tags
- ✓ Properties

### v1.1 (Q1 2025)
- [ ] Block references `((id))`
- [ ] Diagram support (mermaid)
- [ ] Enhanced search (fuzzy)
- [ ] Dark mode toggle

### v1.2 (Q2 2025)
- [ ] Queries `{{query}}`
- [ ] Page embeds `{{embed}}`
- [ ] Advanced filtering
- [ ] Export to PDF

### v2.0 (Q3 2025)
- [ ] Plugin system
- [ ] Full parity with official publisher
- [ ] Real-time collaboration
- [ ] AI-powered search

---

## Getting Help

### Resources

- **Documentation**: [README.md](README.md)
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share experiences

### Common Questions

**Q: Will my URLs break?**
A: No, URL format remains the same (`#/page/slug`).

**Q: Can I use both publishers?**
A: Yes, but not simultaneously. Choose one.

**Q: What about private pages?**
A: Use `--filter` to exclude them.

**Q: Will custom CSS work?**
A: Yes, specify in config: `custom_css = "./custom.css"`

---

## Related Documentation

- [README.md](README.md) - Project overview
- [ARCHITECTURE.md](ARCHITECTURE.md) - System design
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [PERFORMANCE.md](PERFORMANCE.md) - Performance benchmarks

---

**Last Updated**: 2025-11-12
**Version**: 1.0.0
