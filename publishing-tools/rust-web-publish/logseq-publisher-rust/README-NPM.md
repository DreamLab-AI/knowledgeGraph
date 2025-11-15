# @logseq/publisher-rust

High-performance Rust implementation of Logseq graph publisher with Node.js bindings via napi-rs.

## Features

- 🚀 **Fast**: Written in Rust for maximum performance
- 📊 **OWL/RDF Support**: Extract and export ontology data from Logseq pages
- 🔗 **Graph Building**: Build complete knowledge graphs with bidirectional links
- 📦 **WebVOWL Export**: Generate WebVOWL JSON for 3D visualization
- 🌐 **Cross-platform**: Native bindings for Linux, macOS, and Windows

## Installation

```bash
npm install @logseq/publisher-rust
# or
yarn add @logseq/publisher-rust
# or
pnpm add @logseq/publisher-rust
```

## Usage

```javascript
const { exportUnifiedGraph, getOntologyStatistics, getVersion } = require('@logseq/publisher-rust');

// Export unified graph with pages and ontology
const result = exportUnifiedGraph('./pages', './output');
console.log(`Exported ${result.pages_count} pages and ${result.ontology_count} ontology classes`);

// Get ontology statistics
const stats = getOntologyStatistics('./output/ontology.json');
console.log(`Ontology contains ${stats.class_count} classes and ${stats.property_count} properties`);

// Get version
console.log(`Using version ${getVersion()}`);
```

## API

### `exportUnifiedGraph(pagesDir: string, outputDir: string): ExportResult`

Parses all Logseq markdown files in `pagesDir`, builds a unified graph, and exports:
- Individual page JSON files to `{outputDir}/pages/`
- Unified ontology JSON to `{outputDir}/ontology.json`

**Returns:**
```typescript
interface ExportResult {
  pages_count: number;
  ontology_count: number;
  output_dir: string;
}
```

### `getOntologyStatistics(ontologyPath: string): OntologyStats`

Analyzes an exported ontology JSON file and returns statistics.

**Returns:**
```typescript
interface OntologyStats {
  class_count: number;
  property_count: number;
  namespace_count: number;
  title: string;
  version: string;
}
```

### `getVersion(): string`

Returns the version of the publisher library.

## Performance

Typical performance on a knowledge graph with 1,213 pages:
- **Parsing**: < 500ms
- **Graph Building**: < 100ms
- **JSON Export**: < 200ms
- **Total**: < 1 second

Memory usage: < 100MB

## Building from Source

```bash
# Install dependencies
npm install

# Build release version
npm run build

# Build debug version
npm run build:debug

# Run tests
npm test
```

## Supported Platforms

Pre-built binaries are available for:
- Linux x64 (glibc and musl)
- Linux ARM64 (glibc and musl)
- macOS x64
- macOS ARM64 (Apple Silicon)
- Windows x64
- Windows ARM64

## License

MIT

## Repository

https://github.com/logseq/logseq-publisher-rust
