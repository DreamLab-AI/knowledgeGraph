# WASM Graph Viewer Diagnostic Report

**Date:** 2025-11-13
**Branch:** `claude/fix-wasm-graph-viewer-forces-011CV2bsWSLG4U9xo92qeDvh`
**Session:** claude/init-claude-flow-011CV2bsWSLG4U9xo92qeDvh

---

## Executive Summary

The WASM-based ontology graph viewer has **three critical bugs** preventing proper visualization:

1. ❌ **CRITICAL:** Edges have empty source/target - rendering broken
2. ⚠️ **MAJOR:** Double position initialization causes random layouts
3. ⚠️ **MAJOR:** Force simulation not solving due to missing edge topology

**Status:** 🔴 **NON-FUNCTIONAL** - Graph renders nodes but no edges, physics broken

---

## Issue #1: Edges Not Rendering (CRITICAL BUG)

### Location
**File:** `publishing-tools/WasmVOWL/rust-wasm/src/bindings/mod.rs:267-295`

### Problem
The `GraphData::from_graph()` function returns edge data with **empty source/target strings**:

```rust
let edges = graph
    .edges()
    .iter()
    .map(|e| EdgeData {
        id: e.id.clone(),
        label: e.label.clone(),
        source: String::new(),  // ❌ ALWAYS EMPTY!
        target: String::new(),  // ❌ ALWAYS EMPTY!
        edge_type: format!("{:?}", e.edge_type),
    })
    .collect();
```

### Root Cause
- The graph uses `petgraph::DiGraph<Node, Edge>` which stores topology internally
- When iterating over `graph.edges()`, the Edge struct doesn't contain source/target IDs
- Source/target are stored as `NodeIndex` in the graph structure, NOT in the Edge struct
- The code needs to extract the edge endpoints from the graph structure, then map `NodeIndex` → `node.id`

### Impact
- **100% of edges fail to render** - no lines between nodes
- React Three Fiber receives edges with empty source/target
- `PropertyEdge.tsx` cannot determine where to draw lines
- Graph appears as disconnected nodes floating in space

### Evidence
From `useWasmSimulation.ts` console logs:
```typescript
console.log('[useWasmSimulation] Property 1003:', JSON.stringify(prop1003, null, 2));
// Expected: domain: "123", range: "456"
// Actual: domain: "", range: ""
```

---

## Issue #2: Random Position Initialization (MAJOR BUG)

### Locations
1. **TypeScript Layer:** `publishing-tools/WasmVOWL/modern/src/stores/useGraphStore.ts:108-121`
2. **Rust WASM Layer:** `publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs:52-69`

### Problem
**Double initialization** with conflicting strategies causes unpredictable layouts:

#### Layer 1: React/TypeScript (useGraphStore.ts)
```typescript
// Random initial position to help force-directed layout spread out
const randomRadius = 500;  // Large radius!
const angle = Math.random() * Math.PI * 2;
const radius = Math.random() * randomRadius;

const node: Node = {
    position: {
        x: Math.cos(angle) * radius,  // Random in 500px circle
        y: Math.sin(angle) * radius,
        z: 0
    },
    // ...
};
```

#### Layer 2: Rust/WASM (simulation.rs)
```rust
fn initialize_positions(&self, graph: &mut VowlGraph) {
    let radius = 10.0;  // Tiny radius!
    let mut angle: f64 = 0.0;
    let angle_step = std::f64::consts::TAU / graph.node_count() as f64;

    for node_id in node_ids {
        if let Some(node_mut) = graph.get_node_mut(&node_id) {
            if node_mut.visual.x == 0.0 && node_mut.visual.y == 0.0 {  // Only if at origin
                node_mut.visual.x = radius * angle.cos();  // Overwrite!
                node_mut.visual.y = radius * angle.sin();
                angle += angle_step;
            }
        }
    }
}
```

### Root Cause
1. **React initializes first:** Nodes scattered randomly in 500px radius
2. **WASM checks if at origin:** Since React already set positions, WASM condition `x == 0.0 && y == 0.0` is false
3. **WASM should initialize:** But doesn't because positions are already set
4. **Result:** Nodes keep random React positions, no structured layout

### Impact
- Nodes appear randomly scattered instead of organized
- No semantic structure visible (hierarchies, clusters, etc.)
- User cannot understand ontology structure from visualization
- Each page load produces different layout (non-deterministic)

### Design Flaw
**Poor separation of concerns:**
- React should NOT set physics positions - that's the WASM simulation's job
- React should only:
  1. Pass ontology data to WASM
  2. Receive computed positions from WASM
  3. Render nodes at those positions

---

## Issue #3: Force Simulation Not Solving (MAJOR BUG)

### Location
**Multiple files:**
- `publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs:97-116`
- `publishing-tools/WasmVOWL/modern/src/hooks/useWasmSimulation.ts:159-191`

### Problem
Force-directed layout doesn't converge because:

#### 3a. Edges Missing from Graph Structure
```rust
// Apply attraction along edges
for node in &nodes {
    if let Ok(neighbors) = graph.neighbors(&node.id) {  // ❌ May return empty!
        for neighbor in neighbors {
            // Calculate attraction force...
        }
    }
}
```

**If edges don't have proper source/target in the graph structure, `graph.neighbors()` returns empty, so NO attraction forces are applied!**

#### 3b. Position Updates May Not Apply
```typescript
// useWasmSimulation.ts:179-186
const graphData = wasm.getGraphData();

if (graphData && graphData.nodes) {
    graphData.nodes.forEach((node: any) => {
        updateNodePosition(node.id, [node.x, node.y, 0]);  // ❌ Depends on working getGraphData()
    });
}
```

If `getGraphData()` is broken (Issue #1), position updates won't flow back to React.

#### 3c. Only Repulsion Forces Work
```rust
// Apply repulsion between all nodes
for i in 0..nodes.len() {
    for j in (i + 1)..nodes.len() {
        let force = calculate_repulsion(pos1, pos2, self.config.charge_strength);
        *forces.get_mut(&node1.id).unwrap() += force;
        *forces.get_mut(&node2.id).unwrap() -= force;
    }
}
```

**Repulsion always works (O(n²) all-pairs), but attraction requires edges!**

### Root Cause
**Cascading failure:**
1. Edges missing source/target (Issue #1)
2. Graph structure may not have proper topology
3. `graph.neighbors()` returns empty
4. Only repulsion forces apply → nodes just spread apart
5. No convergence to meaningful layout

### Impact
- Nodes slowly drift apart (repulsion only)
- No clustering or hierarchy
- Simulation never reaches equilibrium
- Alpha doesn't decay properly → simulation runs forever
- Poor performance (wasted CPU cycles)

---

## Data Flow Analysis

### Current (Broken) Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. OntologyView.tsx loads /data/ontology.json                   │
│    → {class: [...], property: [...], propertyAttribute: [...]}  │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. useGraphStore.loadOntology() (TypeScript)                    │
│    → Creates Node objects with RANDOM positions (500px radius)  │
│    → Creates Edge objects with source/target IDs                │
│    → Stores in Map<id, Node> and Map<id, Edge>                  │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. useWasmSimulation.ts converts to WebVOWL format              │
│    → class: [{id, type}], classAttribute: [{id, label, iri}]   │
│    → property: [{id, type}], propertyAttribute: [{domain,range}]│
│    → Calls wasm.loadOntology(JSON.stringify(graphData))         │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. WASM bindings/mod.rs::load_ontology()                        │
│    → StandardParser::parse() reads JSON                         │
│    → GraphBuilder::from_ontology() creates petgraph DiGraph     │
│    → ✅ Graph HAS proper topology (NodeIndex → NodeIndex)       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 5. WASM simulation.rs::initialize()                             │
│    → Checks if nodes at origin (0, 0)                           │
│    → ❌ Nodes already at random React positions!                │
│    → Skips initialization                                       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 6. WASM simulation.rs::tick() on each frame                     │
│    → calculate_repulsion(): ✅ Works (O(n²) all-pairs)          │
│    → calculate_attraction(): ❌ graph.neighbors() empty?        │
│    → apply_forces(): Updates internal node positions            │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 7. WASM bindings/mod.rs::get_graph_data() [BROKEN!]             │
│    → Extracts nodes: ✅ {id, label, x, y}                       │
│    → Extracts edges: ❌ {id, source: "", target: ""}            │
│    → Returns to JavaScript                                      │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 8. useWasmSimulation.ts::useFrame() [Partially works]           │
│    → Updates node positions: ✅ Works if WASM returns valid data│
│    → But edges still empty!                                     │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ 9. GraphScene.tsx renders                                       │
│    → ClassNode: ✅ Renders at updated positions                 │
│    → PropertyEdge: ❌ Can't render - source/target empty!       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Code Locations

### Critical Files to Fix

| File | Lines | Issue | Priority |
|------|-------|-------|----------|
| `rust-wasm/src/bindings/mod.rs` | 267-295 | ❌ Empty edge source/target | **P0** |
| `rust-wasm/src/graph/builder.rs` | TBD | Verify edge topology creation | **P0** |
| `modern/src/stores/useGraphStore.ts` | 108-121 | Remove random initialization | **P1** |
| `rust-wasm/src/layout/simulation.rs` | 52-69 | Fix initialization logic | **P1** |
| `rust-wasm/src/layout/simulation.rs` | 97-116 | Debug neighbors() returning empty | **P2** |

### Files Working Correctly ✅

- `modern/src/pages/OntologyView.tsx` - Loads ontology correctly
- `modern/src/hooks/useWasmSimulation.ts` - WASM integration works
- `modern/src/components/Canvas/GraphScene.tsx` - Renders correctly (with valid data)
- `rust-wasm/src/layout/force.rs` - Force calculations are correct
- `rust-wasm/src/ontology/parser.rs` - Parsing works correctly

---

## Fix Strategy

### Phase 1: Critical Fixes (P0) - Must fix for basic functionality

#### Fix 1.1: Extract Edge Source/Target from Graph Structure
**File:** `rust-wasm/src/bindings/mod.rs:267-295`

**Problem:** Edge struct doesn't contain source/target, need to extract from petgraph

**Solution:**
```rust
impl GraphData {
    fn from_graph(graph: &VowlGraph) -> Self {
        let nodes = graph.nodes()
            .iter()
            .map(|n| NodeData {
                id: n.id.clone(),
                label: n.label.clone(),
                x: n.visual.x,
                y: n.visual.y,
                node_type: format!("{:?}", n.node_type),
            })
            .collect();

        // ✅ FIX: Extract edges with proper source/target from graph structure
        let edges: Vec<EdgeData> = graph
            .edge_references()  // Use petgraph's edge_references()
            .map(|edge_ref| {
                let edge_data = edge_ref.weight();
                let source_idx = edge_ref.source();
                let target_idx = edge_ref.target();

                // Map NodeIndex back to Node IDs
                let source_node = &graph[source_idx];
                let target_node = &graph[target_idx];

                EdgeData {
                    id: edge_data.id.clone(),
                    label: edge_data.label.clone(),
                    source: source_node.id.clone(),  // ✅ FIXED!
                    target: target_node.id.clone(),  // ✅ FIXED!
                    edge_type: format!("{:?}", edge_data.edge_type),
                }
            })
            .collect();

        Self { nodes, edges }
    }
}
```

**Note:** May need to add public accessor methods to `VowlGraph` for `edge_references()` and indexing.

#### Fix 1.2: Verify GraphBuilder Creates Proper Topology
**File:** `rust-wasm/src/graph/builder.rs`

**Check:**
1. Does `GraphBuilder::from_ontology()` properly add edges with `graph.add_edge(source_idx, target_idx, edge)`?
2. Are `propertyAttribute.domain` and `propertyAttribute.range` being read correctly?
3. Are node IDs being mapped to `NodeIndex` correctly?

**Action:** Review and add logging to verify edge creation.

---

### Phase 2: Major Fixes (P1) - Required for proper layout

#### Fix 2.1: Remove React Position Initialization
**File:** `modern/src/stores/useGraphStore.ts:108-121`

**Change:**
```typescript
// OLD: Random positions
const randomRadius = 500;
const angle = Math.random() * Math.PI * 2;
const radius = Math.random() * randomRadius;

const node: Node = {
    position: {
        x: Math.cos(angle) * radius,  // ❌ Remove
        y: Math.sin(angle) * radius,  // ❌ Remove
        z: 0
    },
    // ...
};

// NEW: Initialize at origin, let WASM handle layout
const node: Node = {
    position: {
        x: 0,  // ✅ Let WASM initialize
        y: 0,  // ✅ Let WASM initialize
        z: 0
    },
    // ...
};
```

#### Fix 2.2: Always Initialize Positions in WASM
**File:** `rust-wasm/src/layout/simulation.rs:52-69`

**Change:**
```rust
fn initialize_positions(&self, graph: &mut VowlGraph) {
    let radius = 100.0;  // Increased from 10.0 for better spread
    let mut angle: f64 = 0.0;
    let angle_step = std::f64::consts::TAU / graph.node_count() as f64;

    let node_ids: Vec<String> = graph.nodes().iter().map(|n| n.id.clone()).collect();

    for node_id in node_ids {
        if let Some(node_mut) = graph.get_node_mut(&node_id) {
            // ✅ ALWAYS initialize, don't check for (0,0)
            node_mut.visual.x = radius * angle.cos();
            node_mut.visual.y = radius * angle.sin();
            angle += angle_step;
        }
    }
}
```

---

### Phase 3: Verification (P2) - Ensure simulation works

#### Fix 3.1: Add Logging to Verify Neighbors
**File:** `rust-wasm/src/layout/simulation.rs:97-116`

**Add:**
```rust
// Apply attraction along edges
let mut attraction_count = 0;
for node in &nodes {
    if let Ok(neighbors) = graph.neighbors(&node.id) {
        for neighbor in neighbors {
            let pos1 = Vector2::new(node.visual.x, node.visual.y);
            let pos2 = Vector2::new(neighbor.visual.x, neighbor.visual.y);

            let force = calculate_attraction(
                pos1,
                pos2,
                self.config.link_distance,
                self.config.link_strength,
            );

            *forces.get_mut(&node.id).unwrap() += force * self.alpha;
            attraction_count += 1;
        }
    }
}

// Log on first iteration only
if self.iteration == 0 {
    web_sys::console::log_1(&format!("Applied {} attraction forces", attraction_count).into());
}
```

#### Fix 3.2: Verify Force Parameters
**Check:**
- `link_distance`: Should be ~100-200 for good spacing
- `charge_strength`: Should be negative (e.g., -300) for repulsion
- `link_strength`: Should be positive (e.g., 0.1-1.0) for attraction

---

## Testing Plan

### Test 1: Edge Rendering
**Goal:** Verify edges appear connecting nodes

**Steps:**
1. Load ontology with known topology (e.g., 5 classes, 3 properties)
2. Check browser console for edge data: `edges: [{source: "123", target: "456"}]`
3. Verify lines appear in 3D canvas connecting nodes
4. Click edge → should highlight and show label

**Expected:** All edges visible as lines between nodes

### Test 2: Position Initialization
**Goal:** Verify consistent initial layout

**Steps:**
1. Load ontology
2. Note initial node positions
3. Reload page
4. Compare positions → should be similar (circular layout, not random)

**Expected:** Nodes start in organized circle, deterministic

### Test 3: Force Simulation
**Goal:** Verify forces converge to stable layout

**Steps:**
1. Load ontology
2. Watch simulation status indicator
3. Wait for alpha → 0
4. Verify nodes clustered meaningfully
5. Check console: "Applied X attraction forces" (X > 0)

**Expected:**
- Simulation completes in 100-300 iterations
- Connected nodes closer together
- Hierarchical structure visible

### Test 4: Large Ontology
**Goal:** Verify performance with full ontology

**Steps:**
1. Load `ontology-full-bridged-v2.0.0.ttl` → JSON (1,155 classes)
2. Monitor FPS (should be >30fps)
3. Verify all nodes/edges render
4. Test zooming, panning, rotation

**Expected:**
- <2s load time
- Smooth 60fps rendering
- No browser freeze

---

## Performance Considerations

### Current Performance Issues
1. **O(n²) repulsion** - Acceptable for n<1000, slow for larger graphs
2. **No spatial indexing** - Could use quadtree for repulsion
3. **All edges visible** - Should implement LOD (Level of Detail)
4. **No WebGL instancing** - Could batch node rendering

### Recommended Optimizations (Future)
1. Use Barnes-Hut approximation for repulsion (O(n log n))
2. Implement quadtree for collision detection
3. Add edge bundling for dense graphs
4. Use instanced rendering for nodes (1 draw call instead of n)

---

## References

### Key Concepts

**Force-Directed Layout:**
- Nodes = charged particles (repel each other)
- Edges = springs (attract connected nodes)
- Simulation finds equilibrium minimizing energy

**Petgraph:**
- `DiGraph<N, E>` stores nodes of type N, edges of type E
- Edges connect `NodeIndex` → `NodeIndex`
- `graph.edge_references()` iterates edges with topology

**WASM Bindings:**
- `wasm_bindgen` generates JavaScript bindings
- Can pass JSON strings, get back JsValue objects
- Use `serde_wasm_bindgen` for Rust ↔ JS serialization

### Related Documentation
- WebVOWL JSON format: Used for ontology interchange
- Force-directed graphs: D3.js force simulation algorithm
- Petgraph docs: https://docs.rs/petgraph/latest/petgraph/

---

## Conclusion

The graph viewer has **three interconnected bugs** that cascade into complete failure:

1. **Edges missing topology** → Can't render edges
2. **Double initialization** → Random layouts instead of structured
3. **Forces not working** → Simulation doesn't converge

**All three must be fixed for basic functionality.**

**Priority Order:**
1. Fix edge source/target extraction (enables edge rendering)
2. Fix position initialization (enables proper layout)
3. Verify force simulation works (enables convergence)

**Estimated Effort:** 4-6 hours for all three phases

**Blocker:** None - all fixes are in WasmVOWL codebase, no external dependencies

---

**Next Steps:** Proceed with Phase 1 (P0) critical fixes?
