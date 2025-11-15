# Contributing Guide

Thank you for your interest in contributing to the Logseq Publisher Rust project!

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

---

## Getting Started

### Prerequisites

- **Rust 1.70+** - [Install Rust](https://rustup.rs/)
- **Node.js 20+** - [Install Node](https://nodejs.org/)
- **wasm-pack** - `cargo install wasm-pack`
- **Git** - Version control
- **Code Editor** - VSCode with rust-analyzer recommended

### Verify Installation

```bash
rustc --version  # 1.70.0 or higher
cargo --version  # 1.70.0 or higher
wasm-pack --version  # 0.12.0 or higher
node --version  # v20.0.0 or higher
```

---

## Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork:
git clone https://github.com/YOUR_USERNAME/logseq-publisher-rust.git
cd logseq-publisher-rust
```

### 2. Install Dependencies

```bash
# Rust dependencies (via Cargo.toml)
cargo build

# Install development tools
cargo install cargo-watch  # Auto-rebuild on changes
cargo install cargo-tarpaulin  # Code coverage
cargo install cargo-audit  # Security audits
rustup component add rustfmt clippy  # Formatting and linting
```

### 3. Build Project

```bash
# Development build (faster, unoptimized)
cargo build

# Release build (slower, optimized)
cargo build --release

# WASM build
wasm-pack build --target web --out-dir dist/pkg
```

### 4. Run Tests

```bash
# Run all tests
cargo test

# Run with output
cargo test -- --nocapture

# Run specific test file
cargo test --test unit_parser_tests

# Run benchmarks
cargo bench

# WASM tests (requires browser)
wasm-pack test --headless --chrome
```

### 5. Development Workflow

```bash
# Watch mode (auto-rebuild and test on changes)
cargo watch -x test

# Or with specific command
cargo watch -x 'test --lib'
```

---

## Project Structure

```
logseq-publisher-rust/
├── src/
│   ├── lib.rs          # Main library entry, WASM bindings
│   ├── parser.rs       # Markdown parser
│   ├── graph.rs        # Graph data structure
│   ├── exporter.rs     # HTML/JSON export
│   └── optimizer.rs    # Asset optimization
├── tests/
│   ├── unit_parser_tests.rs       # Unit tests for parser
│   ├── integration_graph_tests.rs # Integration tests
│   ├── wasm_tests.rs              # Browser tests
│   ├── e2e_publishing_tests.rs    # End-to-end tests
│   └── fixtures/                  # Test data
├── benches/
│   ├── parser_bench.rs   # Parser benchmarks
│   ├── graph_bench.rs    # Graph benchmarks
│   └── wasm_bench.rs     # WASM benchmarks
├── docs/
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── MIGRATION.md
│   ├── EXAMPLES.md
│   └── PERFORMANCE.md
├── Cargo.toml          # Rust dependencies
└── README.md           # Project README
```

### Module Responsibilities

**`lib.rs`**:
- WASM entry point
- Public API bindings
- JavaScript interop

**`parser.rs`**:
- Parse Logseq markdown
- Extract properties, blocks, links
- Error handling

**`graph.rs`**:
- Graph data structure
- Backlink calculation
- Graph traversal
- Statistics

**`exporter.rs`**:
- HTML generation
- JSON export
- Metadata extraction
- Template rendering

**`optimizer.rs`**:
- Asset optimization
- Image compression
- CSS/JS minification
- Cache busting

---

## Coding Standards

### Rust Style Guide

Follow [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/) and official [Rust Style Guide](https://doc.rust-lang.org/1.0.0/style/).

#### Formatting

```bash
# Format all code
cargo fmt

# Check formatting without making changes
cargo fmt -- --check
```

**Configuration** (`.rustfmt.toml`):
```toml
edition = "2021"
max_width = 100
tab_spaces = 4
newline_style = "Unix"
use_small_heuristics = "Max"
```

#### Linting

```bash
# Run Clippy linter
cargo clippy

# Fail on warnings
cargo clippy -- -D warnings

# Fix automatically (when possible)
cargo clippy --fix
```

#### Naming Conventions

```rust
// ✓ Good
pub struct Page { }
pub fn parse_logseq_page() { }
const MAX_DEPTH: usize = 10;

// ✗ Bad
pub struct page { }
pub fn ParseLogseqPage() { }
const maxDepth: usize = 10;
```

#### Documentation

All public APIs must have rustdoc comments:

```rust
/// Parses a Logseq markdown page into structured data.
///
/// # Arguments
///
/// * `content` - The raw markdown content
/// * `path` - The file path for error reporting
///
/// # Returns
///
/// Returns a `Page` struct or `ParseError`.
///
/// # Examples
///
/// ```
/// let page = parse_logseq_page(content, "test.md")?;
/// assert_eq!(page.title, "test");
/// ```
///
/// # Errors
///
/// Returns an error if:
/// - Markdown syntax is invalid
/// - Frontmatter is malformed
pub fn parse_logseq_page(content: &str, path: &str) -> Result<Page, String> {
    // Implementation
}
```

#### Error Handling

```rust
// ✓ Use Result for recoverable errors
pub fn parse_file(path: &str) -> Result<Page, ParseError> {
    // ...
}

// ✓ Use thiserror for custom errors
#[derive(Debug, Error)]
pub enum ParseError {
    #[error("Failed to parse {file}: {reason}")]
    InvalidSyntax { file: String, reason: String },

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),
}

// ✗ Don't use panic in library code
pub fn parse_file(path: &str) -> Page {
    let content = std::fs::read_to_string(path)
        .expect("Failed to read file");  // ✗ Bad
    // ...
}
```

#### Unsafe Code

**Avoid `unsafe` code unless absolutely necessary.**

If you must use `unsafe`:
1. Document why it's needed
2. Document invariants that must be upheld
3. Minimize unsafe scope
4. Add comprehensive tests

```rust
/// SAFETY: This is safe because we verify the pointer is valid
/// and the lifetime is correct.
unsafe fn from_raw(ptr: *const u8, len: usize) -> &[u8] {
    // Minimal unsafe block
    std::slice::from_raw_parts(ptr, len)
}
```

---

## Testing Requirements

### Test Coverage Target

**Minimum**: 80% overall coverage
**Goal**: 90%+ for core modules

```bash
# Generate coverage report
cargo tarpaulin --out Html --output-dir coverage

# View report
open coverage/index.html
```

### Writing Tests

#### Unit Tests

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_simple_page() {
        let content = "- Simple block";
        let page = parse_logseq_page(content, "test.md").unwrap();
        assert_eq!(page.blocks.len(), 1);
    }

    #[test]
    #[should_panic(expected = "Invalid syntax")]
    fn test_parse_invalid_markdown() {
        parse_logseq_page("{{invalid}}", "test.md").unwrap();
    }
}
```

#### Integration Tests

```rust
// tests/integration_test.rs
use logseq_publisher_rust::*;

#[test]
fn test_full_publishing_workflow() {
    let mut graph = Graph::new();

    // Add pages
    let page1 = parse_logseq_page("- Content", "page1.md").unwrap();
    graph.add_page(page1);

    // Export
    let config = ExportConfig {
        theme: "default".to_string(),
        include_backlinks: true,
        include_graph_view: true,
        custom_css: None,
    };

    let html = export_to_html(&graph, &config).unwrap();
    assert!(html.contains("<!DOCTYPE html>"));
}
```

#### Property-Based Tests

```rust
use quickcheck::quickcheck;

quickcheck! {
    fn prop_parse_never_panics(content: String) -> bool {
        parse_logseq_page(&content, "test.md").is_ok() || true
    }

    fn prop_block_count_bounded(content: String) -> bool {
        if let Ok(page) = parse_logseq_page(&content, "test.md") {
            page.blocks.len() <= content.lines().count()
        } else {
            true
        }
    }
}
```

#### Benchmarks

```rust
// benches/parser_bench.rs
use criterion::{black_box, criterion_group, criterion_main, Criterion};
use logseq_publisher_rust::parser::parse_logseq_page;

fn benchmark_parse(c: &mut Criterion) {
    let content = "- Block 1\n- Block 2\n- Block 3";

    c.bench_function("parse simple page", |b| {
        b.iter(|| parse_logseq_page(black_box(content), "test.md"))
    });
}

criterion_group!(benches, benchmark_parse);
criterion_main!(benches);
```

---

## Pull Request Process

### 1. Create Feature Branch

```bash
# Create branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# Or for bugs:
git checkout -b fix/issue-123
```

### 2. Make Changes

- Write code following style guidelines
- Add/update tests (maintain 80%+ coverage)
- Add/update documentation
- Run tests locally

```bash
# Before committing:
cargo fmt
cargo clippy
cargo test
cargo tarpaulin --out Html
```

### 3. Commit Changes

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <description>

git commit -m "feat(parser): add support for block references"
git commit -m "fix(exporter): escape HTML in page titles"
git commit -m "docs: update API documentation"
git commit -m "test: add tests for nested blocks"
git commit -m "perf: optimize link extraction regex"
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

### 4. Push and Create PR

```bash
# Push to your fork
git push -u origin feature/your-feature-name
```

On GitHub:
1. Click "Create Pull Request"
2. Fill out PR template
3. Link related issues
4. Request review

### PR Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All tests pass (`cargo test`)
- [ ] Added new tests (if applicable)
- [ ] Coverage maintained >80%
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex logic
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tested on multiple platforms (if applicable)

## Related Issues
Fixes #123
```

### 5. Code Review

Address review feedback:

```bash
# Make changes
git add .
git commit -m "Address review feedback"
git push
```

### 6. Merge

Once approved:
- Squash and merge (preferred)
- Or rebase and merge
- Delete branch after merge

---

## Continuous Integration

### GitHub Actions Workflow

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        rust: [stable, beta]

    steps:
      - uses: actions/checkout@v4
      - uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: ${{ matrix.rust }}

      - name: Run tests
        run: cargo test --verbose

      - name: Run clippy
        run: cargo clippy -- -D warnings

      - name: Check formatting
        run: cargo fmt -- --check

  coverage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions-rust-lang/setup-rust-toolchain@v1

      - name: Install tarpaulin
        run: cargo install cargo-tarpaulin

      - name: Generate coverage
        run: cargo tarpaulin --out Xml

      - name: Upload to codecov
        uses: codecov/codecov-action@v3
```

---

## Release Process

### Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes (v1.0.0 → v2.0.0)
- **MINOR**: New features (v1.0.0 → v1.1.0)
- **PATCH**: Bug fixes (v1.0.0 → v1.0.1)

### Release Checklist

1. **Update Version**

```toml
# Cargo.toml
[package]
version = "1.1.0"
```

2. **Update CHANGELOG.md**

```markdown
## [1.1.0] - 2025-11-15

### Added
- Support for block references
- Dark mode toggle

### Fixed
- HTML escaping in titles

### Changed
- Improved parsing performance by 20%
```

3. **Create Git Tag**

```bash
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0
```

4. **Publish to crates.io**

```bash
cargo publish
```

5. **Create GitHub Release**

- Go to GitHub Releases
- Create new release from tag
- Copy CHANGELOG entry
- Attach binaries (if applicable)

---

## Development Tips

### Debugging

```bash
# Enable debug logging
RUST_LOG=debug cargo run

# Use rust-gdb/rust-lldb
rust-gdb target/debug/logseq-publisher

# Print debug info
dbg!(&page);
```

### Profiling

```bash
# Install flamegraph
cargo install flamegraph

# Generate flamegraph
cargo flamegraph --bench parser_bench

# View flamegraph.svg
```

### Memory Profiling

```bash
# Install valgrind
sudo apt install valgrind

# Run with valgrind
valgrind --leak-check=full \
  target/release/logseq-publisher \
  --input ./pages \
  --output ./dist
```

---

## Getting Help

### Resources

- **Documentation**: [docs/](../docs/)
- **GitHub Issues**: Report bugs
- **Discussions**: Ask questions
- **Rust Discord**: Get help from community

### Good First Issues

Look for issues labeled:
- `good first issue`
- `help wanted`
- `documentation`

---

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone.

### Our Standards

**Positive behavior**:
- Using welcoming language
- Being respectful of differing viewpoints
- Accepting constructive criticism
- Focusing on what's best for the community

**Unacceptable behavior**:
- Trolling, insulting, or derogatory comments
- Public or private harassment
- Publishing others' private information
- Unprofessional conduct

### Enforcement

Report violations to project maintainers.

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Thank You!

Your contributions make this project better. Thank you for your time and effort!

---

**Last Updated**: 2025-11-12
**Version**: 1.0.0
