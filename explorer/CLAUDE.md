# Development Guide - WebVOWL Platform

**For**: Claude Code development sessions
**Last Updated**: November 17, 2025

## 🎯 Project Overview

High-performance 3D ontology visualization using Rust/WASM physics and React Three Fiber.

**Current State**: Feature-complete — see [CAPABILITIES.md](CAPABILITIES.md) for evidence-linked capability claims.
**Performance**: 15-30 FPS with 1,700+ nodes (was 1 FPS with JavaScript physics)

## 🏗️ Architecture

```
modern/                     # React Three Fiber app
├── src/
│   ├── components/Canvas/  # 3D rendering (GraphScene, ClassNode, etc.)
│   ├── components/UI/      # Interface components
│   ├── hooks/              # useWasmSimulation, useGraphStore
│   ├── stores/             # Zustand state management
│   ├── types/              # TypeScript definitions
│   └── utils/              # Helpers

rust-wasm/                  # Physics engine
├── src/
│   ├── ontology/           # OWL parsing
│   ├── graph/              # Graph structures
│   ├── layout/             # Force simulation (Barnes-Hut)
│   └── bindings/           # WASM API
└── pkg/                    # Built WASM (215KB)
```

## 🚀 Development Commands

### WASM Development

```bash
cd rust-wasm
export PATH="$HOME/.cargo/bin:$PATH"

# Build WASM
wasm-pack build --target web --release

# Test
cargo test

# Benchmark
cargo bench
```

### React Development

```bash
cd modern

# Dev server
npm run dev  # http://localhost:5173

# Production build
npm run build

# Type check
npm run typecheck
```

## 🔑 Key Files

### Simulation Hook
`modern/src/hooks/useWasmSimulation.ts`
- Initializes WASM module
- Runs physics simulation in useFrame loop
- Has 10-second timeout to force-hide "Simulating..." overlay
- Updates node positions from WASM to React state

### Graph Scene
`modern/src/components/Canvas/GraphScene.tsx`
- Uses useWasmSimulation hook
- Renders nodes and edges
- Shows simulation overlay when isRunning=true

### WASM Bindings
`rust-wasm/src/bindings/mod.rs`
- WebVowl class with 15 methods
- JavaScript API for simulation control

## 🐛 Common Issues

### Issue: Overlay Never Disappears
**Cause**: Low FPS from large graphs (1,700+ nodes)
**Fix**: 10-second setTimeout in useWasmSimulation (commit 5d50a09c)

### Issue: WASM Not Found
**Solution**:
```bash
cd rust-wasm && wasm-pack build --target web --release
```

### Issue: Build Fails in GitHub Actions
**Cause**: WASM not copied to node_modules
**Fix**: See `.github/workflows/publish.yml` line 129-134

## 📊 Performance Optimization

### Current Settings (for 1,700 nodes)

```rust
// rust-wasm/src/layout/simulation.rs
link_distance: 250.0,      // Wide spacing
charge_strength: -2000.0,  // Strong repulsion
center_strength: 0.001,    // Minimal centering
barnes_hut_theta: 0.9,     // Speed/accuracy balance
```

### Benchmarks

| Operation | Time |
|-----------|------|
| Parse 100 nodes | 0.5ms |
| Layout tick (100 nodes) | 0.15ms |
| Full simulation (50 iter) | 8ms |

## 🔧 Making Changes

### Adding WASM Features

1. Implement in Rust: `rust-wasm/src/`
2. Export via bindings: `rust-wasm/src/bindings/mod.rs`
3. Rebuild WASM: `wasm-pack build`
4. Use in React: Import from `../../../rust-wasm/pkg/`

### Modifying Physics

1. Edit: `rust-wasm/src/layout/force.rs`
2. Test: `cargo test`
3. Rebuild and test in browser

### UI Changes

1. Edit components: `modern/src/components/`
2. Hot reload sees changes immediately
3. Build for production: `npm run build`

## 📦 Deployment

### Local Test

```bash
cd modern
npm run build
npm run preview  # Test production build
```

### GitHub Actions

Commits to `main` trigger:
1. Build WASM (rust-wasm/)
2. Build React (modern/)
3. Deploy to DreamLab-AI/knowledgeGraph gh-pages

**Live Site**: https://narrativegoldmine.com

## 🧪 Testing

### Rust Tests
```bash
cd rust-wasm
cargo test --all-features
# 47 tests should pass
```

### React Tests
```bash
cd modern
npm test
```

### Manual Testing Checklist
- [ ] Load ontology (drag & drop or auto-load)
- [ ] Verify "Simulating..." appears
- [ ] Confirm overlay disappears after <10s
- [ ] Check FPS in DevTools (should be 15-30)
- [ ] Test node interactions (hover, click)
- [ ] Verify dark theme

## 📝 Code Style

### TypeScript
- Explicit types for props and state
- Avoid `any` except for R3F event handlers

### Rust
- `#![deny(unsafe_code)]` - no unsafe
- `#![deny(missing_docs)]` - document public APIs
- Use `Result` for errors, not panics

## 🗂️ Project History

- **Nov 2025**: Restored WASM physics (13x speedup)
- **Nov 2025**: Fixed overlay timeout issue
- **Nov 2025**: Migrated UI to shadcn/ui
- **Oct 2025**: Replaced WASM with d3-force-3d (later reverted)

## 🔗 References

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [wasm-pack Guide](https://rustwasm.github.io/wasm-pack/)
- [Zustand Docs](https://docs.pmnd.rs/zustand)

## ⚠️ Important Notes

- WASM must be built BEFORE React build
- PATH must include `$HOME/.cargo/bin` for Rust tools
- Large graphs (>5,000 nodes) may need chunked rendering
- GitHub Actions requires wasm-pack installation step
