# Logseq Publisher Rust - Test Suite

Comprehensive testing strategy for the Rust-based Logseq graph publisher.

## Test Structure

### Unit Tests (`tests/unit_parser_tests.rs`)
Tests individual components in isolation:
- Markdown parsing
- Frontmatter extraction
- Property parsing
- Link extraction
- Block nesting
- Task markers
- Unicode support
- Property-based testing with QuickCheck

**Run**: `cargo test --lib`

### Integration Tests (`tests/integration_graph_tests.rs`)
Tests the complete graph system:
- Graph construction from filesystem
- BFS/DFS traversal
- Cycle detection
- Orphan page finding
- PageRank calculation
- Shortest path algorithms
- Backlink computation
- Namespace hierarchies
- Incremental updates
- Graph serialization

**Run**: `cargo test --test integration_graph_tests`

### WASM Tests (`tests/wasm_tests.rs`)
Browser-specific functionality:
- WASM module initialization
- DOM rendering
- Navigation handling
- Search functionality
- Performance measurement
- Memory efficiency
- Event handlers
- Asset loading
- Local storage integration

**Run**: `wasm-pack test --headless --chrome`

### End-to-End Tests (`tests/e2e_publishing_tests.rs`)
Complete publishing workflows:
- Full graph publishing
- Asset optimization
- Link resolution
- Public page filtering
- Namespace handling
- Sitemap generation
- Graph JSON export
- Code highlighting
- Incremental publishing
- Bundle size validation

**Run**: `cargo test --test e2e_publishing_tests`

## Benchmarks

### Parser Benchmarks (`benches/parser_bench.rs`)
Measures parsing performance:
- Simple markdown (10-10,000 lines)
- Complex structures (nested, links, code)
- Link extraction speed
- Property extraction
- Real-world page simulation

**Run**: `cargo bench parser_bench`

### Graph Benchmarks (`benches/graph_bench.rs`)
Measures graph operations:
- Graph construction (10-1,000 pages)
- Traversal algorithms (BFS/DFS)
- PageRank calculation
- Shortest path finding
- Backlink computation
- Incremental updates
- Serialization performance

**Run**: `cargo bench graph_bench`

### WASM Benchmarks (`benches/wasm_bench.rs`)
WASM-specific performance:
- Module initialization
- Parsing in browser
- DOM rendering speed
- Search performance
- Memory allocation

**Run**: `wasm-pack test --headless --chrome -- --bench`

## Coverage

Generate coverage report:
```bash
cargo install cargo-tarpaulin
cargo tarpaulin --out Html --output-dir coverage
```

**Target Coverage**: >80% for all components

View report: `open coverage/index.html`

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/test.yml`):

1. **Test Suite**: Unit + Integration tests on multiple platforms
2. **WASM Tests**: Browser compatibility testing
3. **Benchmarks**: Performance regression detection
4. **Coverage**: Code coverage with threshold enforcement (>80%)
5. **Linting**: rustfmt + clippy
6. **Security**: cargo-audit for vulnerability scanning
7. **E2E**: Complete publishing workflow validation

## Running Tests

### All tests
```bash
cargo test
```

### Specific test file
```bash
cargo test --test unit_parser_tests
```

### Specific test function
```bash
cargo test test_parse_simple_markdown
```

### With output
```bash
cargo test -- --nocapture
```

### WASM tests (requires wasm-pack)
```bash
wasm-pack test --headless --chrome
wasm-pack test --headless --firefox
```

### Benchmarks
```bash
cargo bench
```

### Watch mode (requires cargo-watch)
```bash
cargo watch -x test
```

## Test Data

Test graphs are created in temporary directories using:
- `tempfile::TempDir` for isolation
- `assert_fs` for filesystem assertions
- Sample Logseq pages with realistic content

## Performance Targets

| Operation | Target |
|-----------|--------|
| Parse 1,000 lines | < 10ms |
| Build 1,000-node graph | < 100ms |
| WASM bundle size | < 512KB |
| Page publish time | < 50ms |
| Search 1,000 pages | < 20ms |

## Property-Based Testing

Uses QuickCheck for generative testing:
- Parsing always returns valid result
- Block count never exceeds input lines
- Link extraction is consistent
- Graph invariants maintained

## Continuous Integration

Tests run on:
- Ubuntu (latest)
- macOS (latest)
- Windows (latest)

Rust versions:
- Stable
- Beta
- Nightly

## Debugging Tests

Enable logging:
```bash
RUST_LOG=debug cargo test -- --nocapture
```

Run single threaded:
```bash
cargo test -- --test-threads=1
```

## Contributing

When adding new features:
1. Write tests first (TDD)
2. Ensure >80% coverage
3. Add benchmarks for performance-critical code
4. Update this README

## Test Results Storage

Results are stored in hive memory:
```bash
npx claude-flow@alpha hooks memory-store \
  --key "hive/testing/results" \
  --value "{\"passed\":145,\"failed\":0,\"coverage\":\"87%\"}"
```

## Related Documentation

- [Cargo.toml](../Cargo.toml) - Test dependencies
- [CI Workflow](../.github/workflows/test.yml) - Automated testing
- [Main README](../README.md) - Project overview
