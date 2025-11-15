# WasmVOWL Parameter Comparison & Recommendations

**Quick Reference Guide**

---

## Current vs Recommended Parameters

### TypeScript Settings (`useUIStore.ts:31-44`)

| Parameter | Current Value | Recommended | Change | Rationale |
|-----------|--------------|-------------|--------|-----------|
| `linkDistance` | 150 | **180** | +30 (+20%) | Better spacing for 1,155 nodes |
| `chargeStrength` | -500 | **-1200** | -700 (2.4x stronger) | **CRITICAL** - Match Rust, prevent overlap |
| `gravity` | 0.05 | **0.03** | -0.02 (-40%) | Weaker centering for large graphs |
| `friction` | 0.9 | **0.75** | -0.15 (-16.7%) | Faster convergence |
| `nodeScale` | 1.0 | 1.0 | No change | Keep current |
| `edgeWidth` | 2.0 | 2.0 | No change | Keep current |

---

### Rust Defaults (`layout/mod.rs:62-77`)

| Parameter | Current Value | Recommended | Change | Rationale |
|-----------|--------------|-------------|--------|-----------|
| `alpha` | 1.0 | 1.0 | No change | Standard starting energy |
| `alpha_decay` | 0.0228 | 0.0228 | No change | Good convergence rate |
| `alpha_min` | 0.001 | 0.001 | No change | Appropriate stopping point |
| `velocity_decay` | 0.6 | **0.75** | +0.15 (+25%) | Match TypeScript friction |
| `link_distance` | 160.0 | **180.0** | +20.0 (+12.5%) | Better for large graphs |
| `link_strength` | 1.0 | 1.0 | No change | Standard spring constant |
| `charge_strength` | -1000.0 | **-1200.0** | -200.0 (20% stronger) | Better repulsion at scale |
| `center_strength` | 1.0 | **0.03** | -0.97 (-97%) | **CRITICAL** - Too strong for large graphs |
| `center` | (0.0, 0.0) | (0.0, 0.0) | No change | Keep centered |

---

### Initial Radius (`simulation.rs:55`)

| Metric | Current | Recommended | Formula |
|--------|---------|-------------|---------|
| Fixed radius | 100.0 | **Adaptive** | `650 + sqrt(n) × 10` |
| For 100 nodes | 100.0 | 750.0 | 7.5x larger |
| For 1,155 nodes | 100.0 | **990.0** | **9.9x larger** |
| For 5,000 nodes | 100.0 | 1,000.0 | 10x larger (capped) |

**Current Problem**:
- Circumference at r=100: 628 units
- Arc per node (1,155): 0.54 units
- Node diameter: ~20 units
- **Overlap: 37x** (completely unusable)

**After Fix**:
- Circumference at r=990: 6,220 units
- Arc per node (1,155): 5.4 units
- Node diameter: ~20 units
- **Overlap: 3.7x** (manageable, simulation will separate)

---

## Parameter Impact Analysis

### Link Distance

**Effect**: Controls desired distance between connected nodes

```
Value | Node Spacing | Graph Diameter | Best For
------|--------------|----------------|----------
100   | Tight        | Small          | <100 nodes
150   | Medium       | Medium         | 100-500 nodes (current TS)
160   | Medium+      | Medium         | 100-500 nodes (current Rust)
180   | Spacious     | Large          | 500-2000 nodes (RECOMMENDED)
200   | Very spacious| Very large     | 2000+ nodes
```

**Recommendation**: 180 for 1,155 nodes (balanced spacing)

---

### Charge Strength (Repulsion)

**Effect**: How strongly nodes push each other away

```
Value  | Repulsion | Typical Use | Graph Spread
-------|-----------|-------------|-------------
-300   | Weak      | Sparse graphs | Clustered
-500   | Medium    | Small graphs | Medium (current TS)
-1000  | Strong    | Medium graphs | Good (current Rust)
-1200  | Very strong| Large graphs | Excellent (RECOMMENDED)
-1500  | Maximum   | Dense graphs | Maximum spread
```

**Force at distance 100**:
- `-500`: Force = -0.05 (weak)
- `-1000`: Force = -0.10 (medium)
- `-1200`: Force = -0.12 (strong) ← **RECOMMENDED**
- `-1500`: Force = -0.15 (very strong)

**Recommendation**: -1200 for 1,155 nodes (prevents overlap)

---

### Gravity (Center Force)

**Effect**: Pulls nodes toward center

```
Value | Pull Strength | Best For | Effect
------|---------------|----------|--------
0.01  | Very weak     | Large graphs | Minimal centering
0.03  | Weak          | Large graphs | Gentle centering (RECOMMENDED)
0.05  | Medium        | Medium graphs | Current TS
0.1   | Strong        | Small graphs | Tight centering
1.0   | Very strong   | Tiny graphs | Current Rust (TOO STRONG)
```

**Force at distance 500**:
- `0.03`: Force = 15 (gentle) ← **RECOMMENDED**
- `0.05`: Force = 25 (medium, current TS)
- `1.0`: Force = 500 (very strong, current Rust - problematic)

**Recommendation**: 0.03 for 1,155 nodes (prevents over-centering)

---

### Friction (Velocity Decay)

**Effect**: How quickly nodes slow down

```
Value | Momentum | Convergence | Visual Effect
------|----------|-------------|---------------
0.5   | Low      | Fast (200 iter) | Snappy, jittery
0.6   | Medium   | Medium (300 iter) | Current Rust
0.75  | Medium-high | Medium (400 iter) | Smooth (RECOMMENDED)
0.9   | High     | Slow (600 iter) | Very smooth (current TS)
0.95  | Very high | Very slow (800 iter) | Silky but slow
```

**Recommendation**: 0.75 for 1,155 nodes (balanced smooth + speed)

---

## Force Balance Analysis

### Current TypeScript (-500)

```
Sample node with 3 neighbors:

Attraction forces (from connected neighbors):
  Neighbor 1: 10 units
  Neighbor 2: 19.7 units
  Neighbor 3: 30 units
  Total: ~60 units magnitude

Repulsion forces (from 1,152 non-neighbors):
  Nearby nodes (10 @ dist 100): ~0.5 units
  Medium distance (50 @ dist 200): ~0.4 units
  Far nodes (500 @ dist 500): ~0.5 units
  Total: ~1.5 units magnitude

Force Ratio: 60 / 1.5 = 40:1 (attraction dominates)
Result: SEVERE CLUSTERING
```

### Recommended (-1200)

```
Sample node with 3 neighbors:

Attraction forces (same as above):
  Total: ~60 units magnitude

Repulsion forces (with -1200):
  Nearby nodes: ~1.2 units
  Medium distance: ~1.0 units
  Far nodes: ~1.2 units
  Total: ~3.4 units magnitude

Force Ratio: 60 / 3.4 = 17.6:1 (still attraction-heavy but manageable)
Result: GOOD SPACING
```

### Optimal Target

```
For well-spaced layouts:
  Attraction : Repulsion ≈ 1.5-2.0 : 1

Current TS: 40:1 (too clustered)
Recommended: 17.6:1 (acceptable for connected graphs)
Ideal: 10:1 to 15:1 (requires -1500 charge or lower link_strength)
```

---

## Distance Culling Thresholds

### Repulsion Force Falloff

| Distance | Force (-1200) | Effective? | Action |
|----------|---------------|-----------|--------|
| 50       | -0.48         | Yes       | Calculate |
| 100      | -0.12         | Yes       | Calculate |
| 200      | -0.03         | Weak      | Calculate |
| 300      | -0.013        | Weak      | Calculate |
| 400      | -0.0075       | Very weak | Calculate |
| 500      | -0.0048       | Negligible| **CULL** |
| 1000     | -0.0012       | Negligible| **CULL** |

**Recommended culling distance**: 500 units (250,000 squared)

---

## Implementation Quick Reference

### File 1: TypeScript Settings

**Path**: `/home/devuser/logseq/publishing-tools/WasmVOWL/modern/src/stores/useUIStore.ts`

**Lines to change**: 36-39

```typescript
// BEFORE
linkDistance: 150,
chargeStrength: -500,
gravity: 0.05,
friction: 0.9,

// AFTER
linkDistance: 180,
chargeStrength: -1200,
gravity: 0.03,
friction: 0.75,
```

---

### File 2: Rust Defaults

**Path**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/mod.rs`

**Lines to change**: 68, 70, 72, 74

```rust
// BEFORE
velocity_decay: 0.6,
link_distance: 160.0,
charge_strength: -1000.0,
center_strength: 1.0,

// AFTER
velocity_decay: 0.75,
link_distance: 180.0,
charge_strength: -1200.0,
center_strength: 0.03,
```

---

### File 3: Initial Radius

**Path**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs`

**Add new function** (before line 53):

```rust
/// Calculate optimal initial radius based on node count
fn calculate_initial_radius(node_count: usize) -> f64 {
    const BASE_RADIUS: f64 = 650.0;
    const SCALE_FACTOR: f64 = 10.0;
    const MAX_ADDITIONAL: f64 = 350.0;

    let additional = ((node_count as f64).sqrt() * SCALE_FACTOR).min(MAX_ADDITIONAL);
    BASE_RADIUS + additional
}
```

**Change line 55**:

```rust
// BEFORE
let radius = 100.0;

// AFTER
let radius = calculate_initial_radius(graph.node_count());
```

---

### File 4: Distance Culling

**Path**: `/home/devuser/logseq/publishing-tools/WasmVOWL/rust-wasm/src/layout/simulation.rs`

**Add constant** (after line 7):

```rust
const MAX_REPULSION_DISTANCE_SQ: f64 = 250_000.0;  // 500² units
```

**Add culling check** (inside repulsion loop, after line 93):

```rust
// Calculate distance squared
let delta = pos1 - pos2;
let distance_sq = delta.norm_squared();

// Cull distant forces
if distance_sq > MAX_REPULSION_DISTANCE_SQ {
    continue;
}
```

---

## Performance Expectations

### Before Optimizations

```
Test case: 1,155 nodes, ~3,500 edges

Metrics:
  FPS: 6-10
  Time per tick: 150-200ms
  Forces calculated: 666,585
  Convergence: 800-1000 iterations
  Total time: 120-200 seconds
  Layout quality: Poor (severe overlap)
```

### After Parameter Fixes Only

```
Test case: 1,155 nodes, ~3,500 edges

Metrics:
  FPS: 10-15
  Time per tick: 60-100ms
  Forces calculated: 666,585 (same)
  Convergence: 500-700 iterations
  Total time: 30-70 seconds
  Layout quality: Fair (some overlap)

Improvement: 1.5-2x faster, better layout
```

### After Parameter Fixes + Distance Culling

```
Test case: 1,155 nodes, ~3,500 edges

Metrics:
  FPS: 20-30
  Time per tick: 30-50ms
  Forces calculated: ~200,000 (70% reduction)
  Convergence: 400-600 iterations
  Total time: 12-30 seconds
  Layout quality: Good (minimal overlap)

Improvement: 3-4x faster than baseline
```

---

## Testing Checklist

### Visual Inspection

- [ ] Nodes start in large circle (radius ~990, not 100)
- [ ] Minimal initial overlap (<5% of nodes)
- [ ] Graph expands to fill viewport
- [ ] Connected nodes settle at ~180 units apart
- [ ] No severe clustering in final layout
- [ ] Smooth motion (not jittery)

### Performance Metrics

- [ ] FPS > 20 during simulation
- [ ] Convergence < 600 iterations
- [ ] Total layout time < 30 seconds
- [ ] Console shows ~70% force culling
- [ ] No browser freezing

### Quality Metrics

- [ ] Zero overlapping nodes in final layout
- [ ] Average neighbor distance: 160-200 units
- [ ] Minimum node distance: >40 units
- [ ] Graph diameter: 1,500-2,000 units
- [ ] Viewport fits entire graph

---

## Troubleshooting

### Issue: Still seeing overlap

**Diagnosis**: Charge strength may need increase
**Fix**: Try `-1500` instead of `-1200`

### Issue: Graph too spread out

**Diagnosis**: Charge strength too high
**Fix**: Try `-1000` or `-900`

### Issue: Poor FPS even with culling

**Diagnosis**: Need Barnes-Hut quad-tree
**Action**: Proceed to Phase 2 optimizations

### Issue: Nodes drift off-screen

**Diagnosis**: Center force too weak
**Fix**: Increase `gravity` to `0.05` or `0.08`

---

**Quick Reference Card**

| Parameter | Old | New | Why |
|-----------|-----|-----|-----|
| TS linkDistance | 150 | 180 | More space |
| TS chargeStrength | -500 | -1200 | 2.4x stronger repulsion |
| TS gravity | 0.05 | 0.03 | Less centering |
| TS friction | 0.9 | 0.75 | Faster convergence |
| Rust velocity_decay | 0.6 | 0.75 | Match TS |
| Rust link_distance | 160 | 180 | Match TS |
| Rust charge_strength | -1000 | -1200 | Stronger repulsion |
| Rust center_strength | 1.0 | 0.03 | 97% weaker |
| Initial radius | 100 | 990 | 9.9x larger |
| Distance culling | None | 500 | 70% reduction |

**Expected Result**: 3-4x performance improvement, good layout quality

---

**Created**: 2025-11-13
**Version**: 1.0
**Status**: Ready for implementation
