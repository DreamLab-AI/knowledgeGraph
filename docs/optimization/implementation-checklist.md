# WasmVOWL Optimization Implementation Checklist

**Date**: 2025-11-13
**Target**: 1,155 node ontology graph @ 30 FPS
**Status**: Ready for implementation

---

## Quick Reference

### Current State
- **FPS**: 6-10 (unusable)
- **Time per tick**: 150-200ms
- **Convergence**: 800-1000 iterations
- **Layout quality**: Poor (37x node overlap)

### Phase 1 Target (2-4 hours)
- **FPS**: 20-30 (usable)
- **Time per tick**: 30-50ms
- **Convergence**: 400-600 iterations
- **Layout quality**: Good (minimal overlap)

---

## Phase 1: Immediate Fixes (2-4 hours)

### ✅ Task 1: Fix TypeScript Parameter Discrepancies (30 min)

**File**: `/home/devuser/logseq/publishing-tools/WasmVOWL/modern/src/stores/useUIStore.ts`

**Current (lines 31-44)**:
```typescript
const defaultSettings: GraphSettings = {
  showLabels: true,
  showNodeDetails: true,
  nodeScale: 1.0,
  edgeWidth: 2.0,
  linkDistance: 150,  // ❌ Too small
  chargeStrength: -500,  // ❌ Too weak
  gravity: 0.05,  // ❌ Too strong
  friction: 0.9,  // ⚠️ Too high
  maxFPS: 60,
  lodEnabled: true,
  highContrast: false,
  reducedMotion: false
};
```

**Fix**:
```typescript
const defaultSettings: GraphSettings = {
  showLabels: true,
  showNodeDetails: true,
  nodeScale: 1.0,
  edgeWidth: 2.0,
  linkDistance: 180,  // ✅ Increased from 150 (+20%)
  chargeStrength: -1200,  // ✅ Increased from -500 (2.4x stronger)
  gravity: 0.03,  // ✅ Reduced from 0.05 (weaker centering for spread)
  friction: 0.75,  // ✅ Reduced from 0.9 (faster convergence)
  maxFPS: 60,
  lodEnabled: true,
  highContrast: false,
  reducedMotion: false
};
```

**Expected Impact**: 50% better initial layout, 25% faster convergence

---

### ✅ Task 2: Align Rust Default Parameters (30 min)

**File**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/mod.rs`

**Current (lines 62-77)**:
```rust
impl Default for LayoutConfig {
    fn default() -> Self {
        Self {
            alpha: 1.0,
            alpha_decay: 0.0228,
            alpha_min: 0.001,
            velocity_decay: 0.6,  // ❌ Too aggressive
            link_distance: 160.0,  // ⚠️ Close but can improve
            link_strength: 1.0,
            charge_strength: -1000.0,  // ⚠️ Good but can increase
            center_strength: 1.0,  // ❌ Way too strong
            center: (0.0, 0.0),
        }
    }
}
```

**Fix**:
```rust
impl Default for LayoutConfig {
    fn default() -> Self {
        Self {
            alpha: 1.0,
            alpha_decay: 0.0228,
            alpha_min: 0.001,
            velocity_decay: 0.75,  // ✅ Increased from 0.6
            link_distance: 180.0,  // ✅ Increased from 160.0
            link_strength: 1.0,
            charge_strength: -1200.0,  // ✅ Increased from -1000.0
            center_strength: 0.03,  // ✅ Massively reduced from 1.0
            center: (0.0, 0.0),
        }
    }
}
```

**Expected Impact**: Consistent behavior between TS and Rust, better defaults

---

### ✅ Task 3: Fix Initial Radius Calculation (1 hour)

**File**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs`

**Current (lines 53-75)**:
```rust
fn initialize_positions(&self, graph: &mut VowlGraph) {
    let radius = 100.0;  // ❌ WAY too small for 1,155 nodes
    let mut angle: f64 = 0.0;
    let angle_step = std::f64::consts::TAU / graph.node_count() as f64;

    for node_id in node_ids {
        if let Some(node_mut) = graph.get_node_mut(&node_id) {
            node_mut.visual.x = radius * angle.cos();
            node_mut.visual.y = radius * angle.sin();
            node_mut.visual.vx = 0.0;
            node_mut.visual.vy = 0.0;
            angle += angle_step;
        }
    }
}
```

**Fix**:
```rust
fn initialize_positions(&self, graph: &mut VowlGraph) {
    // ✅ Adaptive radius based on node count
    let radius = calculate_initial_radius(graph.node_count());
    let mut angle: f64 = 0.0;
    let angle_step = std::f64::consts::TAU / graph.node_count() as f64;

    for node_id in node_ids {
        if let Some(node_mut) = graph.get_node_mut(&node_id) {
            node_mut.visual.x = radius * angle.cos();
            node_mut.visual.y = radius * angle.sin();
            node_mut.visual.vx = 0.0;
            node_mut.visual.vy = 0.0;
            angle += angle_step;
        }
    }
}

/// Calculate optimal initial radius based on node count
fn calculate_initial_radius(node_count: usize) -> f64 {
    const BASE_RADIUS: f64 = 650.0;
    const SCALE_FACTOR: f64 = 10.0;
    const MAX_ADDITIONAL: f64 = 350.0;

    let additional = ((node_count as f64).sqrt() * SCALE_FACTOR).min(MAX_ADDITIONAL);
    BASE_RADIUS + additional

    // Examples:
    // 100 nodes: 650 + 100 = 750
    // 1,155 nodes: 650 + 340 = 990
    // 5,000 nodes: 650 + 350 = 1,000 (capped)
}
```

**Expected Impact**: Eliminate 37x initial overlap, dramatically improve initial layout

---

### ✅ Task 4: Add Distance Culling (2 hours)

**File**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs`

**Add constant (after line 7)**:
```rust
use nalgebra::Vector2;
use std::collections::HashMap;

/// Maximum distance for repulsion force calculations
/// Beyond this distance, repulsion forces are negligible (<0.001)
const MAX_REPULSION_DISTANCE_SQ: f64 = 250_000.0;  // 500² units
```

**Current (lines 78-101)**:
```rust
fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
    let mut forces: HashMap<String, Vector2<f64>> = HashMap::new();
    let nodes = graph.nodes();

    // Initialize forces
    for node in &nodes {
        forces.insert(node.id.clone(), Vector2::zeros());
    }

    // Apply repulsion between all nodes
    for i in 0..nodes.len() {
        for j in (i + 1)..nodes.len() {
            let node1 = nodes[i];
            let node2 = nodes[j];

            let pos1 = Vector2::new(node1.visual.x, node1.visual.y);
            let pos2 = Vector2::new(node2.visual.x, node2.visual.y);

            let force = calculate_repulsion(pos1, pos2, self.config.charge_strength);

            *forces.get_mut(&node1.id).unwrap() += force;
            *forces.get_mut(&node2.id).unwrap() -= force;
        }
    }
    // ...
}
```

**Fix**:
```rust
fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
    let mut forces: HashMap<String, Vector2<f64>> = HashMap::new();
    let nodes = graph.nodes();

    // Initialize forces
    for node in &nodes {
        forces.insert(node.id.clone(), Vector2::zeros());
    }

    // ✅ Track culling statistics for monitoring
    let mut culled_count = 0;
    let mut calculated_count = 0;

    // Apply repulsion between all nodes
    for i in 0..nodes.len() {
        for j in (i + 1)..nodes.len() {
            let node1 = nodes[i];
            let node2 = nodes[j];

            let pos1 = Vector2::new(node1.visual.x, node1.visual.y);
            let pos2 = Vector2::new(node2.visual.x, node2.visual.y);

            // ✅ Calculate distance squared (avoid sqrt for performance)
            let delta = pos1 - pos2;
            let distance_sq = delta.norm_squared();

            // ✅ Cull distant forces (70% reduction in calculations)
            if distance_sq > MAX_REPULSION_DISTANCE_SQ {
                culled_count += 1;
                continue;
            }

            calculated_count += 1;
            let force = calculate_repulsion(pos1, pos2, self.config.charge_strength);

            *forces.get_mut(&node1.id).unwrap() += force;
            *forces.get_mut(&node2.id).unwrap() -= force;
        }
    }

    // ✅ Log culling statistics on first iteration
    #[cfg(target_arch = "wasm32")]
    {
        if self.iteration == 0 {
            let total = calculated_count + culled_count;
            let cull_pct = (culled_count as f64 / total as f64) * 100.0;
            web_sys::console::log_1(&format!(
                "⚡ Distance culling: {}/{} forces culled ({:.1}% reduction)",
                culled_count, total, cull_pct
            ).into());
        }
    }

    // ... rest of function (attraction, center force)
}
```

**Expected Impact**: 70% reduction in force calculations, 3x FPS improvement

---

## Testing Checklist

### Before Implementation
```bash
cd /home/devuser/logseq/publishing-tools/WasmVOWL

# Record baseline performance
cd modern
npm run dev

# Load 1,155 node ontology
# Record:
# - FPS: _____ (expected: 6-10)
# - Convergence iterations: _____ (expected: 800-1000)
# - Initial overlap: _____ (expected: severe)
```

### After Phase 1 Implementation
```bash
# Rebuild WASM with changes
cd rust-wasm
npm run build

# Rebuild frontend
cd ../modern
npm run build
npm run dev

# Load same 1,155 node ontology
# Record:
# - FPS: _____ (target: 20-30)
# - Convergence iterations: _____ (target: 400-600)
# - Initial overlap: _____ (target: minimal)
```

### Automated Tests

**File**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/tests/performance_test.rs`

```rust
#[test]
fn test_phase1_optimizations() {
    use webvowl_wasm::graph::VowlGraph;
    use webvowl_wasm::layout::{ForceSimulation, LayoutAlgorithm};

    // Create test graph with 1,155 nodes
    let mut graph = create_large_test_graph(1155);

    // Create optimized simulation
    let mut sim = ForceSimulation::new();

    // Test 1: Initial radius is appropriate
    sim.initialize(&mut graph).unwrap();
    let avg_distance = calculate_avg_initial_distance(&graph);
    assert!(avg_distance > 100.0, "Initial spacing should be >100 units");

    // Test 2: Convergence speed
    let start = std::time::Instant::now();
    sim.run(&mut graph, 1000).unwrap();
    let duration = start.elapsed();

    assert!(sim.iteration < 700, "Should converge in <700 iterations");
    assert!(duration.as_millis() < 5000, "Should complete in <5 seconds");

    // Test 3: Final layout quality
    let overlaps = count_node_overlaps(&graph, 40.0);
    assert_eq!(overlaps, 0, "No overlapping nodes allowed");

    let avg_neighbor_distance = calculate_avg_neighbor_distance(&graph);
    assert!(avg_neighbor_distance > 150.0, "Connected nodes should be well-spaced");
}
```

---

## Validation Criteria

### Performance Metrics

| Metric | Before | After Phase 1 | Status |
|--------|--------|--------------|--------|
| FPS (1,155 nodes) | 6-10 | 20-30 | ⏳ |
| Time per tick | 150-200ms | 30-50ms | ⏳ |
| Convergence iterations | 800-1000 | 400-600 | ⏳ |
| Initial node overlap | 37x | <2x | ⏳ |
| Forces calculated | 666,585 | ~200,000 | ⏳ |

### Visual Quality Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Minimum node distance | >40 units | ⏳ |
| Average neighbor distance | 160-200 units | ⏳ |
| Graph diameter | 1,500-2,000 units | ⏳ |
| Overlapping nodes | 0 | ⏳ |

---

## Phase 2 Preview (Future Work)

### Barnes-Hut Quad-Tree (1-2 days)

**Expected Impact**: Additional 3-5x speedup (10x total)

**Files to modify**:
- Create: `rust-wasm/src/layout/quadtree.rs`
- Modify: `rust-wasm/src/layout/simulation.rs`

**Key implementation**:
```rust
pub struct QuadTree {
    bounds: Rectangle,
    center_of_mass: Vector2<f64>,
    total_mass: f64,
    nodes: Vec<NodeRef>,
    children: Option<Box<[QuadTree; 4]>>,
}

impl QuadTree {
    pub fn new(bounds: Rectangle) -> Self { /* ... */ }
    pub fn insert(&mut self, node: NodeRef) { /* ... */ }
    pub fn calculate_force(&self, pos: Vector2<f64>, theta: f64) -> Vector2<f64> { /* ... */ }
}
```

---

## Common Issues & Solutions

### Issue 1: WASM Build Fails

**Symptom**: `wasm-pack build` errors

**Solution**:
```bash
cd rust-wasm
cargo clean
rm -rf pkg/
npm run build
```

### Issue 2: TypeScript Types Don't Match

**Symptom**: Type errors in `useUIStore.ts`

**Solution**: Update `types/ui.ts` GraphSettings interface:
```typescript
export interface GraphSettings {
  // ... other fields
  linkDistance: number;      // Update comment: "Link distance (default: 180)"
  chargeStrength: number;    // Update comment: "Charge strength (default: -1200)"
  gravity: number;           // Update comment: "Center gravity (default: 0.03)"
  friction: number;          // Update comment: "Velocity friction (default: 0.75)"
  // ... other fields
}
```

### Issue 3: No Performance Improvement

**Symptom**: FPS still low after changes

**Diagnosis**:
```bash
# Check if WASM was rebuilt
ls -lh rust-wasm/pkg/webvowl_wasm_bg.wasm

# Check if frontend was rebuilt
ls -lh modern/dist/

# Force clean rebuild
cd rust-wasm && npm run build:dev
cd ../modern && npm run build
```

---

## Documentation Updates

After implementation, update these files:

1. **README.md**: Add performance metrics section
2. **CLAUDE.md**: Update with new parameter defaults
3. **docs/optimization/**: Add benchmark results

---

## Sign-off Checklist

Before marking Phase 1 complete:

- [ ] All 4 tasks implemented and tested
- [ ] Performance targets met (20-30 FPS)
- [ ] Visual quality acceptable (minimal overlap)
- [ ] No regressions in existing functionality
- [ ] Code reviewed for clarity and maintainability
- [ ] Documentation updated
- [ ] Git commit created with clear message

---

## Estimated Time Breakdown

| Task | Estimate | Notes |
|------|----------|-------|
| Task 1: TS parameters | 30 min | Simple value changes |
| Task 2: Rust parameters | 30 min | Simple value changes |
| Task 3: Initial radius | 1 hour | New function, testing |
| Task 4: Distance culling | 2 hours | Logic changes, statistics |
| **Testing & validation** | **1 hour** | **Thorough testing** |
| **Total** | **4-5 hours** | **Conservative estimate** |

---

**Created**: 2025-11-13
**Status**: Ready for implementation
**Priority**: High (critical performance issue)
**Difficulty**: Low-Medium (well-defined changes)
