# Logseq Publisher

Fast Logseq graph parser and static site generator powered by Rust and WebAssembly.

## Features

- ⚡ **Blazingly Fast**: Rust + WASM for optimal performance
- 📊 **Graph Analysis**: Full graph traversal and backlink detection
- 🎨 **Beautiful Output**: Clean, responsive HTML with customizable themes
- 🔍 **Smart Parsing**: Handles Logseq markdown, EDN properties, and wiki-links
- 📦 **Zero Config**: Works out of the box with sensible defaults
- 🚀 **Production Ready**: Optimized assets and minimal bundle size

## Installation

```bash
npm install -g @thedreamlab/logseq-publisher
```

## Usage

### CLI

```bash
# Build your graph
logseq-publish build -i ./my-graph -o ./public

# Show statistics
logseq-publish stats -i ./my-graph

# Find backlinks
logseq-publish backlinks "my-page.md" -i ./my-graph
```

### Programmatic API

```typescript
import { publish, parseGraph, getBacklinks } from '@thedreamlab/logseq-publisher';

// Publish graph
const stats = await publish({
  inputDir: './graph',
  outputDir: './public',
  theme: 'default',
  includeBacklinks: true,
  includeGraphView: false,
});

console.log(`Published ${stats.page_count} pages`);

// Analyze graph
const graphStats = await parseGraph('./graph');

// Get backlinks
const backlinks = await getBacklinks('./graph', 'my-page.md');
```

## Building from Source

### Prerequisites

- Rust 1.70+
- Node.js 18+
- wasm-pack

### Build Steps

```bash
# Clone repository
git clone <repo-url>
cd logseq-publisher-npm

# Build WASM module
npm run build:wasm

# Build npm package
npm run build

# Test
npm test
```

## Architecture

```
┌─────────────────────────────────────┐
│  CLI / JavaScript API               │
├─────────────────────────────────────┤
│  WASM Bindings (wasm-bindgen)       │
├─────────────────────────────────────┤
│  Rust Core                          │
│  ├── Parser (markdown + EDN)        │
│  ├── Graph (traversal + backlinks)  │
│  ├── Optimizer (assets)             │
│  └── Exporter (HTML generation)     │
└─────────────────────────────────────┘
```

## Performance

- **Parser**: ~10,000 pages/second
- **WASM Size**: ~150KB gzipped
- **Memory**: O(n) where n = total blocks

## License

MIT

## Contributing

Contributions welcome! Please read CONTRIBUTING.md first.
