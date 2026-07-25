# WebVOWL Hierarchy Folding - Status Report

**Date**: November 21, 2025
**Last Commit**: a2cd92c8 - Add diagnostic logging to hierarchy folding algorithm
**Deployed**: ✅ Production (narrativegoldmine.com) - deployed at 15:46 UTC

---

## 🎯 Current Issue

**Problem**: Too many nodes and edges visible on the ontology graph despite hierarchy folding being set to depth=2.

**User Report**: "we're seeing a LOT of nodes. I suspect that the folding / filtering isn't working"

---

## ✅ What's Been Implemented

### 1. WASM v0.3.3 - Hierarchy Folding
**Location**: `rust-wasm/src/graph/mod.rs:363-453`

The `apply_hierarchy_folding()` method uses BFS algorithm to:
- Mark all nodes as invisible initially
- Find "root" classes (classes with no outgoing `rdfs:subClassOf` edges)
- Traverse N levels deep from each root using BFS
- Mark visited nodes as visible

**Current Algorithm**:
```rust
// Find roots: classes with NO superclass
let has_super_class = self.graph.edges_directed(idx, Direction::Outgoing)
    .any(|e| matches!(e.weight().edge_type, EdgeType::SubClass));

if !has_super_class {
    roots.push(idx);  // ⚠️ POTENTIAL ISSUE: Could be hundreds of roots
}
```

### 2. Edge Filtering
**Location**: `rust-wasm/src/bindings/mod.rs:300`

Edges are filtered in `GraphData::from_graph()`:
```rust
.filter(|(_, source, target)| source.visual.visible && target.visual.visible)
```

This ensures only edges between visible nodes are returned to React.

### 3. React Integration
**Latest commit**: d793e8c7 - "Enable WASM to provide pre-filtered edges"

**Changes**:
- `useWasmSimulation.ts:306` - Now passes both nodes AND edges from WASM
- `useGraphStore.ts:237-244` - Uses WASM-provided filtered edges directly
- Styling updated: Red edges (#ff0000), white outlined text

### 4. Diagnostic Logging (CURRENT)
**Commit**: a2cd92c8

Added console logging to diagnose the issue:
```rust
#[cfg(target_arch = "wasm32")]
{
    web_sys::console::log_1(&format!(
        "[WASM] Hierarchy folding: depth={}, total_classes={}, roots={}",
        max_depth, total_classes, roots.len()
    ).into());
}

// ... after BFS ...

web_sys::console::log_1(&format!(
    "[WASM] After folding: {} visible nodes out of {} total",
    visible_count, self.graph.node_count()
).into());
```

---

## 🔍 How to Check Production Logs

1. Open: https://narrativegoldmine.com/ontology
2. Open browser DevTools (F12)
3. Go to Console tab
4. Look for these messages:
   ```
   [WASM] Hierarchy folding: depth=2, total_classes=XXX, roots=YYY
   [WASM] After folding: ZZZ visible nodes out of WWW total
   ```

---

## 🐛 Suspected Root Cause

**Hypothesis**: The algorithm treats ANY class without a superclass as a "root". In a large ontology with 1,700+ nodes:
- Many classes may have no explicit `rdfs:subClassOf` relationship
- Each becomes a "root" and spawns 2 levels of descendants
- Result: Hundreds of roots × 2 levels = way too many visible nodes

**Example**:
```
Total classes: 1,500
Roots found: 1,200 ⚠️ (80% of classes have no superclass!)
Depth: 2
Visible after folding: ~1,400 nodes (almost everything!)
```

---

## 🛠️ Proposed Solutions

### Option 1: Limit Number of Roots (Quick Fix)
Add a cap on how many roots are processed:
```rust
// Only show top N most-connected roots
roots.sort_by_key(|idx| {
    Reverse(self.graph.edges_directed(*idx, Direction::Incoming).count())
});
roots.truncate(20);  // Show only top 20 most-connected roots
```

### Option 2: owl:Thing Descendants Only (Proper Fix)
Only start from classes that are direct or indirect subclasses of `owl:Thing`:
```rust
// Find owl:Thing node
let owl_thing = self.graph.node_indices()
    .find(|idx| self.graph[*idx].id == "owl:Thing" ||
                self.graph[*idx].iri.ends_with("Thing"));

if let Some(thing_idx) = owl_thing {
    roots = vec![thing_idx];  // Start only from owl:Thing
}
```

### Option 3: Most Connected First (Smart Strategy)
Prioritize nodes with most connections:
```rust
// Sort by connectivity (degree centrality)
let mut node_scores: Vec<_> = self.graph.node_indices()
    .map(|idx| {
        let degree = self.graph.edges(idx).count();
        (idx, degree)
    })
    .collect();
node_scores.sort_by_key(|(_, degree)| Reverse(*degree));

// Take top N
roots = node_scores.iter()
    .take(50)
    .map(|(idx, _)| *idx)
    .collect();
```

---

## 📋 Next Steps

1. **Check Production Console** - Get the actual numbers from the logs
2. **Analyze Root Count** - Confirm if `roots ≈ total_classes` (the suspected issue)
3. **Implement Fix** - Based on the numbers, choose Option 1, 2, or 3
4. **Test Locally** - Rebuild WASM, test with modern/npm run dev
5. **Deploy** - Push to GitHub, wait for Actions to build
6. **Verify** - Check production console shows reasonable numbers

---

## 🔧 Development Commands

### Build WASM
```bash
cd publishing-tools/WasmVOWL/rust-wasm
export PATH="$HOME/.cargo/bin:$PATH"
wasm-pack build --target web --release
```

### Test Locally
```bash
cd publishing-tools/WasmVOWL/modern
npm install ../rust-wasm/pkg  # Install local WASM
npm run dev  # Start dev server on port 5173
```

### Deploy
```bash
git add -A
git commit -m "Your message"
git push origin main
# GitHub Actions automatically builds and deploys
```

### Check Deployment Status
```bash
gh run list --limit 3
gh run view <run-id> --log  # View logs
```

---

## 📁 Key Files

### Rust/WASM
- `rust-wasm/src/graph/mod.rs:363-453` - Hierarchy folding algorithm
- `rust-wasm/src/bindings/mod.rs:281-311` - GraphData edge filtering
- `rust-wasm/Cargo.toml` - Version: 0.3.3
- `rust-wasm/pkg/package.json` - Built WASM package

### React/TypeScript
- `modern/src/hooks/useWasmSimulation.ts:212-217` - Calls filterHierarchy
- `modern/src/stores/useGraphStore.ts:237-244` - Edge filtering logic
- `modern/src/stores/useUIStore.ts:38` - Default hierarchyDepth: 2

### Configuration
- `.github/workflows/publish.yml` - GitHub Actions deployment
- `modern/package.json:31` - WASM dependency: @dreamlab-ai/webvowl-wasm@^0.3.2

---

## 🎨 Recent UI Changes (d793e8c7)

- Edges: Changed to red (#ff0000) at 50% opacity
- Edge labels: White text with black outline
- Node labels: White text with black outline
- Edge width: Reduced to 0.5 (thinner lines)

---

## 📊 Performance Metrics

- **Before WASM**: 1 FPS with 1,700+ nodes (JavaScript physics)
- **After WASM**: 15-30 FPS (13x improvement)
- **Current**: Needs hierarchy folding fix to reduce visible nodes
- **Target**: Show only ~50-100 nodes for depth=2

---

## 💡 Additional Context

### Settings Available to User
```typescript
hierarchyDepth: 2,          // Depth of hierarchy to show
linkDistance: 300,          // Node spacing
chargeStrength: -5000,      // Repulsion force
gravity: 0.005,            // Center pull
friction: 0.4,             // Movement smoothness
```

### Edge Types in Ontology
- `subclass` - rdfs:subClassOf relationships
- `objectProperty` - owl:ObjectProperty
- `datatypeProperty` - owl:DatatypeProperty
- `disjoint` - owl:disjointWith

---

## 🚀 GitHub Actions Status

**Latest Successful Deployment**:
- **Commit**: a2cd92c8
- **Time**: 2025-11-21 15:46:32 UTC
- **Status**: ✅ Success
- **Live**: https://narrativegoldmine.com

**Previous Deployments**:
- d793e8c7 - 15:02:07 UTC - Edge filtering UI updates
- e049eab4 - 13:32:56 UTC - WASM v0.3.3 bump
- 3915a886 - 13:18:31 UTC - Package lock update

---

## 📞 Contact & Handoff

**Current State**:
- ✅ Diagnostic logging deployed to production
- ⏳ Waiting for console log analysis
- 🔜 Algorithm fix ready to implement once numbers confirmed

**To Continue**:
1. Check console logs at https://narrativegoldmine.com/ontology
2. Note the `roots=` and `total_classes=` values
3. If `roots` is >50% of `total_classes`, implement Option 1, 2, or 3
4. Test locally, then push

**Questions?**
- Check commit history: `git log --oneline -10`
- View file changes: `git show a2cd92c8`
- Compare branches: `git diff e049eab4 a2cd92c8`

---

*Generated with Claude Code - November 21, 2025*
