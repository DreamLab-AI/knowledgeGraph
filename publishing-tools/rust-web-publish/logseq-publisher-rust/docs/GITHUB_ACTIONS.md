# GitHub Actions Integration

This document describes how to use the Rust-based Logseq Publisher in GitHub Actions workflows.

## Overview

The Logseq Publisher is a high-performance Rust implementation that publishes your Logseq graph with externalized page content. It's designed to be fast, efficient, and work seamlessly in CI/CD pipelines.

## Features

- ✨ **Fast**: Rust performance with parallel processing
- 📦 **Size-optimized**: Automatically checks output size limits
- 🎨 **Themable**: Light/dark themes with custom CSS support
- 🔍 **Filterable**: Publish only pages matching specific properties
- 🔗 **Backlinks**: Optional backlink inclusion
- 📊 **Statistics**: Detailed build and output metrics

## Basic Usage

### In Your Workflow

```yaml
name: Publish Logseq Graph

on:
  push:
    branches:
      - main

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Rust
        uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: stable
          cache: true

      - name: Publish Logseq graph
        uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
        with:
          graph-directory: 'mainKnowledgeGraph/pages'
          output-directory: 'www'
          theme-mode: 'light'
          filter-property: 'public-access:: true'
```

## Configuration Options

### Required Inputs

| Input | Description | Example |
|-------|-------------|---------|
| `graph-directory` | Directory containing Logseq markdown files | `mainKnowledgeGraph/pages` |
| `output-directory` | Where to write published content | `www` or `public` |

### Optional Inputs

| Input | Description | Default | Example |
|-------|-------------|---------|---------|
| `theme-mode` | Theme (light/dark) | `light` | `dark` |
| `filter-property` | Only publish pages with this property | (none) | `public-access:: true` |
| `include-backlinks` | Include backlinks in pages | `false` | `true` |
| `include-graph-view` | Include graph visualization | `false` | `true` |
| `custom-css` | Path to custom CSS file | (none) | `styles/custom.css` |
| `max-size-mb` | Max output size (fails if exceeded) | `100` | `150` |
| `verbose` | Enable verbose logging | `false` | `true` |

### Outputs

The action provides these outputs you can use in subsequent steps:

| Output | Description | Example |
|--------|-------------|---------|
| `pages-count` | Number of pages published | `42` |
| `output-size` | Output size in MB | `12` |
| `build-time` | Build time in seconds | `8` |

## Advanced Examples

### Example 1: Publish with Custom Theme

```yaml
- name: Publish with custom CSS
  uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
  with:
    graph-directory: 'pages'
    output-directory: 'www'
    theme-mode: 'dark'
    custom-css: 'assets/custom-theme.css'
    include-backlinks: 'true'
    include-graph-view: 'true'
```

### Example 2: Filter by Multiple Properties

```yaml
- name: Publish public pages only
  uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
  with:
    graph-directory: 'mainKnowledgeGraph/pages'
    output-directory: 'www'
    filter-property: 'public-access:: true'
    max-size-mb: '50'
```

### Example 3: Use Outputs for Deployment Decision

```yaml
- name: Publish graph
  id: publish
  uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
  with:
    graph-directory: 'pages'
    output-directory: 'www'

- name: Show statistics
  run: |
    echo "Published ${{ steps.publish.outputs.pages-count }} pages"
    echo "Output size: ${{ steps.publish.outputs.output-size }}MB"
    echo "Build time: ${{ steps.publish.outputs.build-time }}s"

- name: Deploy to GitHub Pages
  if: steps.publish.outputs.pages-count > 0
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./www
```

### Example 4: Multi-Environment Publishing

```yaml
jobs:
  publish-staging:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Publish staging (all pages)
        uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
        with:
          graph-directory: 'pages'
          output-directory: 'www-staging'
          theme-mode: 'light'
          verbose: 'true'

  publish-production:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3

      - name: Publish production (filtered)
        uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
        with:
          graph-directory: 'pages'
          output-directory: 'www-prod'
          theme-mode: 'light'
          filter-property: 'public-access:: true'
          max-size-mb: '100'
```

## Build Caching

The action automatically caches Rust builds to speed up subsequent runs. The cache key is based on:

- Runner OS
- Cargo.lock hash

To disable caching or customize it, modify the action definition.

## Local Testing

Before committing, test locally:

```bash
# Build the publisher
cd publishing-tools/rust-web-publish/logseq-publisher-rust
./build.sh

# Test on your graph
./target/release/logseq-publisher \
  --input ../../mainKnowledgeGraph/pages \
  --output ./test-output \
  --filter "public-access:: true" \
  --verbose

# Check output
du -sh test-output
ls -la test-output/pages
```

## Size Optimization Tips

If your output exceeds the size limit:

1. **Filter more aggressively**: Use specific properties
2. **Optimize assets**: Compress images before publishing
3. **Limit backlinks**: Set `include-backlinks: false`
4. **Skip graph view**: Set `include-graph-view: false`
5. **Increase limit**: Adjust `max-size-mb` if appropriate

Example filtered publishing:

```yaml
- name: Publish essentials only
  uses: ./publishing-tools/rust-web-publish/logseq-publisher-rust
  with:
    graph-directory: 'pages'
    output-directory: 'www'
    filter-property: 'published:: true'
    include-backlinks: 'false'
    include-graph-view: 'false'
    max-size-mb: '50'
```

## Troubleshooting

### Build Fails

**Problem**: Rust build fails with compilation errors

**Solution**:
- Check Rust version (1.70+ required)
- Clear cache and rebuild:
  ```yaml
  - name: Clear Rust cache
    run: cargo clean
  ```

### Output Too Large

**Problem**: "Output size exceeds maximum"

**Solution**:
- Apply stricter filters
- Check for large assets in pages
- Reduce max-size-mb if intentional

### Missing Pages

**Problem**: Expected pages not in output

**Solution**:
- Check filter property matches page metadata
- Enable verbose mode to see which pages are filtered
- Verify page files are in correct directory

### Permission Errors

**Problem**: "Permission denied" when running scripts

**Solution**:
- Scripts are auto-chmod'd in action
- If running locally, run: `chmod +x build.sh`

## Performance

Typical build times (on GitHub Actions runners):

| Pages | Size | Build Time |
|-------|------|------------|
| 10    | 2MB  | ~5s        |
| 50    | 10MB | ~8s        |
| 100   | 20MB | ~12s       |
| 500   | 80MB | ~25s       |

Build times include:
- Rust compilation (cached after first run)
- Page parsing
- HTML generation
- JSON export

## Security

The publisher:
- ✅ Runs in isolated build environment
- ✅ Only accesses specified directories
- ✅ Does not require elevated permissions
- ✅ Does not send data externally
- ✅ Validates all inputs

## Integration with Claude Flow

After publishing, run coordination hooks:

```bash
npx claude-flow@alpha hooks post-edit \
  --file ".github/workflows/publish.yml" \
  --memory-key "swarm/publisher/workflow"

npx claude-flow@alpha hooks notify \
  --message "Published graph with Rust publisher"
```

## Support

- **Repository**: https://github.com/jjohare/logseq
- **Issues**: https://github.com/jjohare/logseq/issues
- **Rust Docs**: Run `cargo doc --open` in publisher directory

## License

MIT License - See LICENSE file in repository root
