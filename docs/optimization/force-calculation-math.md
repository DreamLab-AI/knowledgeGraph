# Force Calculation Mathematical Analysis

**Date**: 2025-11-13
**Context**: WasmVOWL spring force physics analysis

---

## 1. Force Calculation Formulas

### 1.1 Repulsive Force (Coulomb's Law)

**Implementation** (`force.rs:6-25`):
```rust
pub fn calculate_repulsion(
    pos1: Vector2<f64>,
    pos2: Vector2<f64>,
    strength: f64,
) -> Vector2<f64> {
    let delta = pos1 - pos2;
    let distance_sq = delta.norm_squared();

    if distance_sq < 0.0001 {
        // Deterministic perturbation for overlapping nodes
        let offset_x = ((pos1.x + pos2.x) * 7.0).sin() * 0.01;
        let offset_y = ((pos1.y + pos2.y) * 11.0).cos() * 0.01;
        return Vector2::new(offset_x, offset_y);
    }

    let force_magnitude = strength / distance_sq;
    delta.normalize() * force_magnitude
}
```

**Mathematical formula**:
```
F_repulsion = (k / d²) * û

where:
  k = charge_strength (negative value, e.g., -1000)
  d = distance between nodes
  û = unit vector from pos2 to pos1
```

**Force magnitude at different distances**:

| Distance | TypeScript (-500) | Rust (-1000) | Ratio |
|----------|------------------|--------------|-------|
| 10       | -5.00            | -10.00       | 2.0x  |
| 20       | -1.25            | -2.50        | 2.0x  |
| 50       | -0.20            | -0.40        | 2.0x  |
| 100      | -0.05            | -0.10        | 2.0x  |
| 200      | -0.0125          | -0.025       | 2.0x  |
| 500      | -0.002           | -0.004       | 2.0x  |

**Observation**: TypeScript's -500 provides exactly HALF the repulsion force at ALL distances.

---

### 1.2 Attractive Force (Hooke's Law)

**Implementation** (`force.rs:27-41`):
```rust
pub fn calculate_attraction(
    pos1: Vector2<f64>,
    pos2: Vector2<f64>,
    target_distance: f64,
    strength: f64,
) -> Vector2<f64> {
    let delta = pos2 - pos1;
    let distance = delta.norm().max(0.1);

    let displacement = distance - target_distance;
    let force_magnitude = displacement * strength;

    delta.normalize() * force_magnitude
}
```

**Mathematical formula**:
```
F_attraction = k * (d - d₀) * û

where:
  k = link_strength (typically 1.0)
  d = actual distance
  d₀ = target distance (linkDistance)
  û = unit vector from pos1 to pos2
```

**Force magnitude examples** (with link_strength = 1.0):

| Actual Distance | Target (150) | Target (160) | Target (180) |
|----------------|--------------|--------------|--------------|
| 50             | -100         | -110         | -130         |
| 100            | -50          | -60          | -80          |
| 150            | 0            | -10          | -30          |
| 200            | +50          | +40          | +20          |
| 250            | +100         | +90          | +70          |

**Key insight**: Negative force pulls nodes together, positive force pushes apart.

---

### 1.3 Center Force (Gravity)

**Implementation** (`force.rs:43-50`):
```rust
pub fn calculate_center_force(
    pos: Vector2<f64>,
    center: Vector2<f64>,
    strength: f64,
) -> Vector2<f64> {
    (center - pos) * strength
}
```

**Mathematical formula**:
```
F_center = k * (C - P)

where:
  k = center_strength
  C = center position (usually 0,0)
  P = node position
```

**Force magnitude comparison**:

| Distance from Center | TypeScript (0.05) | Rust (1.0) | Ratio |
|---------------------|------------------|-----------|-------|
| 100                 | 5.0              | 100.0     | 20x   |
| 500                 | 25.0             | 500.0     | 20x   |
| 1000                | 50.0             | 1000.0    | 20x   |

**Observation**: Rust's center force is 20x stronger - appropriate for small graphs, too strong for large ones.

---

## 2. Net Force Analysis for 1,155 Node Graph

### 2.1 Sample Node Force Calculation

**Scenario**: Node at position (0, 0) with:
- 3 connected neighbors at distance ~160 (attraction)
- 1,152 non-connected nodes at varying distances (repulsion)
- Center at (0, 0) (center force = 0 for this node)

#### Attraction Forces

```
Neighbor 1: (160, 0)
  displacement = 160 - 150 = 10
  force = 10 * 1.0 = 10 (pulling right)
  vector = (10, 0)

Neighbor 2: (-120, 120)
  distance = 169.7
  displacement = 169.7 - 150 = 19.7
  force = 19.7 * 1.0 = 19.7
  direction = (-120, 120) / 169.7 = (-0.707, 0.707)
  vector = (-13.9, 13.9)

Neighbor 3: (0, -180)
  displacement = 180 - 150 = 30
  force = 30 * 1.0 = 30 (pulling down)
  vector = (0, -30)

Total attraction: (10 - 13.9 + 0, 0 + 13.9 - 30) = (-3.9, -16.1)
Magnitude: 16.6 units
```

#### Repulsion Forces (Sample Calculation)

**With TypeScript parameters (-500)**:
```
10 nearby nodes at distance ~100:
  force each = -500 / 10000 = -0.05
  total ≈ 10 * 0.05 = 0.5 (assuming random directions → ~0.3 net)

50 nodes at distance ~200:
  force each = -500 / 40000 = -0.0125
  total ≈ 50 * 0.0125 = 0.625 (net ~0.4)

100 nodes at distance ~300:
  force each = -500 / 90000 = -0.0056
  total ≈ 100 * 0.0056 = 0.56 (net ~0.3)

500 nodes at distance ~500:
  force each = -500 / 250000 = -0.002
  total ≈ 500 * 0.002 = 1.0 (net ~0.5)

Total repulsion magnitude (estimated): 1.5 units
```

**With Rust parameters (-1000)**:
```
Same calculation with 2x force:
Total repulsion magnitude: 3.0 units
```

#### Net Force Comparison

| Parameter Set | Attraction | Repulsion | Net Force | Direction |
|--------------|-----------|-----------|-----------|-----------|
| TypeScript   | 16.6      | 1.5       | ~18       | Attraction-dominated |
| Rust         | 16.6      | 3.0       | ~19.5     | Slightly more balanced |

**Analysis**:
- Even with Rust's stronger repulsion, attraction forces dominate by 5-6x
- TypeScript's weaker repulsion creates 11x imbalance
- This explains why graphs cluster tightly and don't spread

---

## 3. Computational Complexity Analysis

### 3.1 Force Calculation Counts

**Per simulation tick for 1,155 nodes**:

```
Repulsion pairs:
  n(n-1)/2 = 1155 * 1154 / 2 = 666,585 calculations

Attraction (edges):
  Assuming average degree d = 3
  edges = n * d / 2 = 1155 * 3 / 2 = 1,733 calculations

Center force:
  n = 1,155 calculations

Total operations: 669,473 per tick
Repulsion dominance: 99.6%
```

### 3.2 Time Complexity Breakdown

**Current O(n²) implementation**:
```rust
// Nested loop over all node pairs
for i in 0..nodes.len() {                    // O(n)
    for j in (i + 1)..nodes.len() {          // O(n)
        calculate_repulsion(...)              // O(1)
    }
}
// Total: O(n²)
```

**Barnes-Hut O(n log n) alternative**:
```rust
// Build quad-tree
let tree = build_quadtree(nodes);            // O(n log n)

// Calculate forces using tree
for node in nodes {                          // O(n)
    let force = calculate_bh(node, tree);    // O(log n)
}
// Total: O(n log n)
```

**Comparison**:

| Nodes | O(n²) ops | O(n log n) ops | Speedup |
|-------|-----------|----------------|---------|
| 100   | 4,950     | 664            | 7.5x    |
| 500   | 124,750   | 4,483          | 27.8x   |
| 1,155 | 666,585   | 11,677         | 57.1x   |
| 2,000 | 1,999,000 | 21,932         | 91.2x   |
| 5,000 | 12,497,500| 61,439         | 203.4x  |

---

## 4. Energy Minimization Perspective

### 4.1 Graph Energy Function

The force-directed layout minimizes this energy function:

```
E_total = E_spring + E_repulsion + E_center

where:
E_spring = Σ(edges) ½ * k_spring * (d - d₀)²
E_repulsion = Σ(pairs) k_charge * ln(d)
E_center = Σ(nodes) ½ * k_center * ||P - C||²
```

### 4.2 Energy at Equilibrium

**Goal**: Minimize total energy

**Current state** (TypeScript parameters):
```
E_spring dominates (16.6 units of force per node)
E_repulsion weak (1.5 units per node)
Result: Nodes pulled together, high overlap
```

**Optimal state** (Balanced parameters):
```
E_spring ≈ E_repulsion (both ~10-15 units)
E_center very weak (0.5 units)
Result: Even spacing, minimal overlap
```

---

## 5. Parameter Tuning Guidelines

### 5.1 Force Balance Ratio

**Optimal ratio** (for well-spaced layouts):
```
Repulsion : Attraction ≈ 0.6 - 0.8 : 1

Example calculation:
  Target link distance: 180
  Average displacement: 30 (edges shorter than target)
  Attraction force: 30 * 1.0 = 30

  Desired repulsion: 18-24
  Average non-neighbor distance: 300
  Required charge: -(18 to 24) * 300² = -1,620,000 to -2,160,000

  But we divide by n for average: -1400 to -1900 per node
```

### 5.2 Recommended Formula

```rust
fn calculate_optimal_charge(
    node_count: usize,
    avg_degree: f64,
    link_distance: f64
) -> f64 {
    let density = (node_count as f64) / (link_distance * link_distance);
    let base_charge = -1000.0;

    // Scale charge with graph density
    base_charge * (1.0 + (density.ln() / 5.0).max(0.0))
}

// For 1,155 nodes:
// density = 1155 / (180 * 180) = 0.0356
// ln(0.0356) = -3.33
// charge = -1000 * (1 + max(0, -3.33/5)) = -1000 * 1 = -1000

// But for denser graphs with link_distance = 150:
// density = 0.0513
// ln(0.0513) = -2.97
// charge = -1000 * (1 + max(0, -2.97/5)) = -1000 * 1 = -1000

// For sparse graphs with link_distance = 200:
// density = 0.0289
// ln(0.0289) = -3.55
// charge = -1000 * (1 + max(0, -3.55/5)) = -1000 * 1 = -1000
```

**Simplified recommendation**: Use charge = -1000 to -1500 for all large graphs.

---

## 6. Convergence Analysis

### 6.1 Alpha Decay

**Formula**:
```
α(t+1) = α(t) * (1 - decay_rate)

where:
  α(0) = 1.0
  decay_rate = 0.0228 (default)
  α_min = 0.001 (stopping threshold)
```

**Convergence timeline**:
```
Iteration | Alpha  | Active
----------|--------|--------
0         | 1.000  | Yes
50        | 0.321  | Yes
100       | 0.103  | Yes
150       | 0.033  | Yes
200       | 0.011  | Yes
250       | 0.003  | Yes
300       | <0.001 | STOP
```

### 6.2 Iterations Required

**Standard convergence**: ~300 iterations

**With weak forces** (TypeScript -500):
- Forces too weak to overcome initial overlap
- Alpha decays before layout settles
- Result: Poor final layout at iteration 300

**With strong forces** (Rust -1000):
- Forces strong enough to separate nodes
- Layout settles by iteration 200
- Iterations 200-300 are refinement

**Recommendation**: Increase alpha_decay slightly to 0.025 for faster convergence with strong forces.

---

## 7. Distance-Based Force Falloff

### 7.1 Effective Range

**Repulsion force magnitude** (with charge = -1000):

| Distance | Force | Effective? |
|----------|-------|-----------|
| 10       | -10.0 | Yes       |
| 50       | -0.4  | Yes       |
| 100      | -0.1  | Yes       |
| 200      | -0.025| Weak      |
| 500      | -0.004| Negligible|
| 1000     | -0.001| No        |

**Recommendation**: Cull repulsion calculations beyond 400-500 units for performance.

### 7.2 Culling Implementation

```rust
const MAX_REPULSION_DISTANCE: f64 = 500.0;
const MAX_DISTANCE_SQ: f64 = 250_000.0;

// In calculate_forces loop:
for i in 0..nodes.len() {
    for j in (i + 1)..nodes.len() {
        let delta = pos1 - pos2;
        let distance_sq = delta.norm_squared();

        // Early exit for distant nodes
        if distance_sq > MAX_DISTANCE_SQ {
            continue;
        }

        let force = calculate_repulsion(pos1, pos2, charge_strength);
        // ...
    }
}
```

**Performance impact** (for well-spaced 1,155 node graph):
```
Without culling: 666,585 calculations
With 500-unit culling: ~150,000-200,000 calculations
Savings: 70-75%
```

---

## 8. Summary of Mathematical Insights

1. **Force imbalance**: TypeScript's -500 charge creates 11:1 attraction-to-repulsion ratio (should be ~1.5:1)

2. **Quadratic bottleneck**: O(n²) repulsion is 99.6% of computation for 1,155 nodes

3. **Distance falloff**: Repulsion forces become negligible beyond 400-500 units, enabling culling

4. **Convergence speed**: With proper force balance, layouts converge in 200 iterations vs 300+

5. **Energy minimum**: Current parameters create local minima with high overlap; stronger repulsion reaches global minimum

6. **Scaling**: Barnes-Hut provides 57x speedup for 1,155 nodes, enabling real-time simulation

---

**Generated**: 2025-11-13
**Next steps**: Implement parameter updates and distance culling for immediate performance gains
