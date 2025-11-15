# Testing Guide

This guide covers all aspects of testing the Logseq Publish SPA WASM implementation.

## Table of Contents

- [Test Types](#test-types)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Performance Benchmarks](#performance-benchmarks)
- [Troubleshooting](#troubleshooting)
- [CI/CD Integration](#cicd-integration)

## Test Types

### 1. Unit Tests

Unit tests are embedded in source files using Rust's `#[cfg(test)]` attribute:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_feature() {
        // Test code
    }
}
```

### 2. Integration Tests (Browser)

Tests that run in a browser environment using `wasm-bindgen-test`:

```rust
#![cfg(target_arch = "wasm32")]
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_in_browser() {
    // Browser-specific test
}
```

### 3. Integration Tests (Node.js)

Tests that run in Node.js and can access file system:

```rust
#![cfg(all(target_arch = "wasm32", not(target_os = "unknown")))]
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_node);

#[wasm_bindgen_test]
async fn test_with_filesystem() {
    // Node.js test with file I/O
}
```

## Running Tests

### Prerequisites

```bash
cargo install wasm-pack
```

### Basic Test Commands

```bash
# Run all tests
./build.sh test

# Run Node.js tests only (faster)
./build.sh test-node

# Run browser tests only
./build.sh test-browser

# Run benchmarks
./build.sh bench
```

### Manual Test Execution

```bash
# Node.js tests
wasm-pack test --node

# Browser tests
wasm-pack test --headless --chrome

# Specific test
wasm-pack test --node --test integration_test
```

## Troubleshooting

### "Cannot execute .wasm file"

Use `wasm-pack test` instead of `cargo test`:

```bash
# ❌ Wrong
cargo test

# ✅ Correct
wasm-pack test --node
```

## Resources

- [wasm-bindgen-test docs](https://rustwasm.github.io/wasm-bindgen/wasm-bindgen-test/index.html)
- [wasm-pack docs](https://rustwasm.github.io/wasm-pack/)
