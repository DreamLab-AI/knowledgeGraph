# Force-Directed Graph Layout Algorithms Research
## Comprehensive Analysis for Large Ontology Visualization (1,155+ Nodes)

**Research Date**: November 13, 2025
**Context**: WasmVOWL modernization - optimizing force-directed layout for large ontologies
**Current Implementation**: Rust WASM with O(n²) repulsion, no spatial indexing

---

## Executive Summary

This research identifies optimal approaches for scaling force-directed graph layout from the current O(n²) implementation to handle 1,155+ nodes efficiently. Key findings:

1. **Barnes-Hut algorithm** reduces complexity from O(n²) to O(n log n) using quadtree spatial indexing
2. **Hierarchical clustering** can provide 4-10x performance improvement for domain-organized ontologies
3. **R3F force graph libraries** (vasturiano ecosystem) offer production-ready implementations
4. **Hybrid approaches** combining Barnes-Hut + hierarchical layout + semantic positioning show best results

**Recommended Path**: Implement Barnes-Hut with quadtree in Rust, integrate vasturiano/three-forcegraph for React layer, add hierarchical domain clustering.

---

## 1. Current Implementation Analysis

### WasmVOWL Force Layout (Rust/WASM)

**Location**: `/publishing-tools/WasmVOWL/rust-wasm/src/layout/`

**Current Algorithm**:
```rust
// From simulation.rs lines 88-101
// O(n²) all-pairs repulsion calculation
for i in 0..nodes.len() {
    for j in (i + 1)..nodes.len() {
        let force = calculate_repulsion(pos1, pos2, charge_strength);
        *forces.get_mut(&node1.id).unwrap() += force;
        *forces.get_mut(&node2.id).unwrap() -= force;
    }
}
```

**Physics Model**:
- **Repulsion**: Coulomb's law (lines 6-25 in force.rs)
- **Attraction**: Hooke's law for connected nodes (lines 28-41)
- **Centering**: Pull toward center (lines 44-50)
- **Damping**: Velocity decay (lines 53-55)

**Performance Characteristics**:
- **Complexity**: O(n²) per tick
- **Benchmark Results** (from layout_bench.rs):
  - 10 nodes: ~microseconds
  - 50 nodes: ~5-10ms per tick
  - 100 nodes: ~35-40ms per tick
  - 200 nodes: ~150ms+ per tick (estimated)
  - **1,155 nodes**: ~4-5 seconds per tick (extrapolated) ⚠️

**Bottleneck**: Lines 88-101 in simulation.rs - nested loop calculating repulsion between all node pairs.

---

## 2. Barnes-Hut Algorithm

### Overview

The Barnes-Hut simulation is an approximation algorithm that reduces N-body force calculation from O(n²) to **O(n log n)** using spatial data structures.

### How It Works

1. **Quadtree Construction** (2D) or Octree (3D):
   - Recursively subdivide space into quadrants
   - Each node contains center of mass and total mass
   - O(n log n) construction time

2. **Force Approximation**:
   - For distant node groups, treat as single body at center of mass
   - Use θ (theta) parameter to control accuracy vs speed
   - Typical θ values: 0.5-1.2 (higher = faster, less accurate)

3. **Tree Traversal**:
   - For each node, traverse quadtree
   - If cell is far enough (θ criterion), use aggregated force
   - Otherwise, recurse into children
   - O(log n) per node → O(n log n) total

### Complexity Analysis

| Operation | Naive | Barnes-Hut | Improvement |
|-----------|-------|------------|-------------|
| Single tick | O(n²) | O(n log n) | ~150x for 1,155 nodes |
| Full layout | O(n³) | O(n² log n) | ~150x |
| Memory | O(n) | O(n log n) | ~11x more |

**For 1,155 nodes**:
- Naive: 1,155² = 1,334,025 comparisons
- Barnes-Hut: 1,155 × log₂(1,155) ≈ 11,878 comparisons
- **Speedup**: ~112x theoretical, ~50-100x practical

### Implementation Considerations

**Accuracy Control**:
```rust
// θ parameter determines accuracy
// θ = 0.0: exact (no approximation)
// θ = 0.5: good accuracy, ~10x speedup
// θ = 1.0: moderate accuracy, ~100x speedup
// θ = 2.0: low accuracy, ~200x speedup
```

**D3.js Implementation**:
- D3-force uses Barnes-Hut by default
- θ = 0.9 (configurable)
- Dynamic quadtree rebuild each iteration

**Rust Implementation Options**:
1. **quadtree-f32** crate: Fast, dependency-free, 2D only
2. **spatialtree** crate: Generic quadtree/octree, realtime optimized
3. **rstar** crate: R*-tree (alternative to quadtree)
4. **Custom implementation**: Full control, optimized for force-directed graphs

### Code Example (Conceptual Rust)

```rust
use quadtree_f32::QuadTree;

pub struct BarnesHutSimulation {
    tree: QuadTree<NodeId>,
    theta: f64,  // Accuracy parameter (0.5-1.2)
}

impl BarnesHutSimulation {
    fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
        // 1. Build quadtree (O(n log n))
        let tree = self.build_quadtree(graph);

        // 2. Calculate forces using tree (O(n log n))
        let mut forces = HashMap::new();
        for node in graph.nodes() {
            let force = self.calculate_node_force(&tree, node, self.theta);
            forces.insert(node.id.clone(), force);
        }

        forces
    }

    fn calculate_node_force(&self, tree: &QuadTree, node: &Node, theta: f64) -> Vector2<f64> {
        // Traverse tree, applying theta criterion
        // If d/r > theta, use aggregated force
        // Otherwise, recurse into children
    }
}
```

### Resources
- **Paper**: Barnes & Hut (1986) "A hierarchical O(N log N) force-calculation algorithm"
- **D3 Implementation**: https://github.com/d3/d3-force (see many-body force)
- **Rust Crate**: `forceatlas2` (includes Barnes-Hut)
- **Interactive Demo**: https://jheer.github.io/barnes-hut/

---

## 3. Hierarchical Layout Algorithms

### Motivation

Ontologies have inherent hierarchical structure:
- **Domain clustering**: Classes naturally group by domain (e.g., all blockchain classes together)
- **Class hierarchies**: subClassOf relationships form trees
- **Modularity**: Related concepts cluster together

### Force-Directed Hierarchical Clustering

**Key Insight**: "Modularity clustering is force-directed layout" (Noack, 2009)

Energy models of attraction/repulsion inherently produce modularity-optimal clusterings. By constraining or biasing forces based on hierarchy, we get both good layout and semantic coherence.

### Implementation Approaches

#### 1. Two-Level Layout

```rust
pub struct HierarchicalLayout {
    // Phase 1: Cluster-level layout
    cluster_positions: HashMap<String, Vector2<f64>>,

    // Phase 2: Within-cluster layout
    node_positions: HashMap<String, Vector2<f64>>,
}

impl HierarchicalLayout {
    pub fn layout(&mut self, graph: &VowlGraph, clusters: &[NodeCluster]) {
        // 1. Layout clusters (coarse-grained)
        self.layout_clusters(clusters);

        // 2. Layout nodes within each cluster (fine-grained)
        for cluster in clusters {
            self.layout_cluster_nodes(cluster);
        }

        // 3. Optional: Global refinement
        self.refine_globally();
    }
}
```

**Performance**: O(c² + Σnᵢ²) where c = cluster count, nᵢ = nodes in cluster i
- If clusters balanced: O(c² + k(n/c)²) where k = c
- For n=1155, c=20: ~20² + 20×58² ≈ 67,720 (vs 1,334,025 naive)
- **~20x speedup**

#### 2. Multi-Level Force-Directed Layout

1. **Coarsening**: Repeatedly merge nodes into supernodes
2. **Initial Layout**: Layout coarsest level
3. **Uncoarsening**: Refine layout at each level
4. **Local Refinement**: Apply force-directed at each level

**Performance**: O(n log n) with better layout quality than Barnes-Hut alone

#### 3. Domain-Aware Force Biasing

```rust
pub fn calculate_attraction_with_hierarchy(
    pos1: Vector2<f64>,
    pos2: Vector2<f64>,
    same_domain: bool,
    target_distance: f64,
    strength: f64,
) -> Vector2<f64> {
    let base_force = calculate_attraction(pos1, pos2, target_distance, strength);

    // Increase attraction for same-domain nodes
    if same_domain {
        base_force * 2.0
    } else {
        base_force
    }
}
```

### Ontology-Specific Clustering

**For WasmVOWL** with 1,155 nodes from 16 ontology files:

1. **File-based clustering**: Group by source ontology
2. **Domain clustering**: Group by namespace/IRI prefix
3. **Type-based clustering**: Classes, Properties, Datatypes, Literals
4. **Hierarchy-based**: Strongly connected components, subgraph communities

**Expected Cluster Sizes** (from docs/research/):
- BC (Blockchain): ~200 nodes
- DEFI (DeFi): ~150 nodes
- NFT: ~100 nodes
- DAO: ~80 nodes
- ORACLES: ~75 nodes
- etc.

**Recommended**: File-based with type sub-clustering

### Performance Benefits

| Nodes | Naive O(n²) | Hierarchical O(n log n) | Speedup |
|-------|-------------|-------------------------|---------|
| 100 | 10,000 | ~664 | 15x |
| 500 | 250,000 | ~4,483 | 56x |
| 1,155 | 1,334,025 | ~11,878 | 112x |
| 5,000 | 25,000,000 | ~61,439 | 407x |

### Research Papers

1. **"Force Directed Embedding of Hierarchical Cluster Graphs"** (Wallner et al.)
   - Dynamic cluster opening/closing
   - Handles very large semantic nets
   - Aesthetically pleasant layouts

2. **"Modularity clustering is force-directed layout"** (Noack, 2009)
   - Unifies clustering and layout quality
   - Energy models subsume modularity measures
   - Physical Review E publication

3. **"DeepFD: Deep learning for force-directed layout"** (2024)
   - Uses Louvain clustering
   - Graph-LSTM encoder
   - Handles millions of nodes

---

## 4. R3F Force Graph Libraries

### Vasturiano Ecosystem

**Author**: Vasco Asturiano
**Repository**: https://github.com/vasturiano
**License**: MIT

The vasturiano ecosystem provides **production-ready** force-directed graph libraries for React, Three.js, and vanilla JavaScript.

### Library Hierarchy

```
┌─────────────────────────────────────┐
│  r3f-forcegraph                    │  ← React Three Fiber bindings
│  (React component)                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  three-forcegraph                   │  ← Three.js 3D object
│  (ThreeJS 3D object)                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  d3-force-3d  OR  ngraph            │  ← Physics engines
│  (Physics simulation)               │
└─────────────────────────────────────┘
```

### r3f-forcegraph

**Package**: `r3f-forcegraph`
**Integration**: React Three Fiber component
**Use Case**: Declarative R3F applications (like WasmVOWL Modern)

**Features**:
- Drop-in React component for R3F Canvas
- Uses `useFrame` hook for animation
- Full TypeScript support
- Automatic camera controls
- Event handlers (click, hover)

**Basic Usage**:
```tsx
import { Canvas } from '@react-three/fiber';
import { R3fForceGraph } from 'r3f-forcegraph';

function App() {
  const graphData = {
    nodes: [{ id: '1' }, { id: '2' }],
    links: [{ source: '1', target: '2' }]
  };

  return (
    <Canvas>
      <R3fForceGraph
        graphData={graphData}
        nodeLabel="id"
        onNodeClick={(node) => console.log(node)}
      />
    </Canvas>
  );
}
```

**Performance**:
- Handles 1,000+ nodes at 60 FPS
- WebGL rendering (Three.js)
- Efficient force simulation
- LOD support for large graphs

### three-forcegraph

**Package**: `three-forcegraph`
**Integration**: Three.js 3D object
**Use Case**: Lower-level Three.js applications

**Features**:
- Returns Three.js Object3D
- Configurable physics engine (d3-force-3d or ngraph)
- Advanced rendering options
- Particle systems for edges
- Custom node geometries

**Physics Engine Selection**:
```javascript
import ForceGraph from 'three-forcegraph';

const graph = new ForceGraph()
  .forceEngine('d3')  // or 'ngraph'
  .graphData(data);
```

### d3-force-3d

**Package**: `d3-force-3d`
**Type**: Physics simulation engine
**Based on**: D3.js force simulation

**Features**:
- 1D, 2D, or 3D force-directed layout
- Velocity Verlet integration
- Multiple force types:
  - many-body (Barnes-Hut repulsion)
  - link (Hooke's law attraction)
  - center (centering force)
  - collision (collision detection)
  - radial, x, y, z forces
- Fine-grained control
- D3-compatible API

**Configuration**:
```javascript
import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force-3d';

const simulation = forceSimulation(nodes)
  .force('charge', forceManyBody().strength(-300).theta(0.9))  // Barnes-Hut
  .force('link', forceLink(links).distance(100))
  .force('center', forceCenter(0, 0, 0));
```

**Performance**:
- Barnes-Hut with θ = 0.9 by default
- O(n log n) complexity
- Warm-start support
- Incremental updates

### ngraph

**Package**: `ngraph.forcelayout`, `ngraph.forcelayout3d`
**Type**: Alternative physics engine
**Author**: Andrei Kashcha

**Features**:
- Faster initial layout than D3
- Lower memory usage
- Simpler API
- Good for real-time applications
- Adaptive time steps

**Performance Comparison**:
| Metric | d3-force-3d | ngraph |
|--------|-------------|--------|
| Complexity | O(n log n) | O(n²) but optimized |
| Memory | Higher | Lower |
| Quality | Excellent | Very good |
| Speed | Good | Faster initial |
| Control | Fine-grained | Simpler |

**Recommendation**: Use d3-force-3d for WasmVOWL (better quality, Barnes-Hut acceleration)

### Integration Strategy for WasmVOWL

#### Option 1: Full Replacement (Fastest to Implement)

**Replace Rust/WASM** with three-forcegraph:

```tsx
// In GraphScene.tsx
import ForceGraph from 'three-forcegraph';

export function GraphScene() {
  const forceGraphRef = useRef<any>();

  useEffect(() => {
    const graph = new ForceGraph()
      .graphData({ nodes, links })
      .nodeColor(node => getNodeColor(node))
      .linkColor(() => 'rgba(255,255,255,0.2)')
      .forceEngine('d3')
      .d3Force('charge', d3.forceManyBody().strength(-300).theta(0.8))
      .d3Force('link', d3.forceLink().distance(100));

    forceGraphRef.current = graph;
    scene.add(graph);
  }, [nodes, links]);

  useFrame(() => {
    forceGraphRef.current?.tickFrame();
  });
}
```

**Pros**:
- Barnes-Hut built-in
- Battle-tested library
- No WASM complexity
- TypeScript support

**Cons**:
- Lose Rust performance for other operations
- Less control over algorithm
- Bundle size increase

#### Option 2: Hybrid Approach (Recommended)

**Keep Rust for graph operations**, use d3-force-3d physics:

```rust
// In Rust: Keep graph structure, queries, filtering
#[wasm_bindgen]
impl WebVowl {
    pub fn get_graph_data(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.graph).unwrap()
    }

    pub fn update_positions(&mut self, positions: JsValue) {
        // Update node positions from JS simulation
    }
}
```

```tsx
// In React: Use d3-force-3d for physics
import { forceSimulation, forceManyBody, forceLink } from 'd3-force-3d';

const simulation = forceSimulation(nodes)
  .force('charge', forceManyBody().strength(-300).theta(0.8))
  .force('link', forceLink(links).distance(100));

useFrame(() => {
  simulation.tick();
  wasm.update_positions(simulation.nodes());
});
```

**Pros**:
- Best of both worlds
- Rust for data operations
- JavaScript for physics (Barnes-Hut)
- Incremental migration

**Cons**:
- More complex integration
- WASM ↔ JS communication overhead

#### Option 3: Pure Rust Barnes-Hut (Long-term)

**Implement Barnes-Hut in Rust**:

```rust
// New module: src/layout/barnes_hut.rs
use quadtree_f32::QuadTree;

pub struct BarnesHutSimulation {
    quadtree: QuadTree<usize>,
    theta: f64,
}

impl LayoutAlgorithm for BarnesHutSimulation {
    fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
        // 1. Build quadtree
        let tree = self.build_quadtree(graph);

        // 2. Calculate forces using Barnes-Hut
        // ... (see section 2 for implementation)
    }
}
```

**Pros**:
- Maximum performance (Rust + WASM)
- No JS dependency for physics
- Full control over algorithm
- Smallest bundle size

**Cons**:
- Implementation time (~1-2 weeks)
- Need to maintain code
- Testing complexity

### Recommended Integration Path

**Phase 1** (Immediate - 1 day):
- Install `d3-force-3d` alongside existing WASM
- Run comparison benchmarks
- Validate layout quality

**Phase 2** (Short-term - 1 week):
- Implement hybrid approach (Option 2)
- Rust for graph, d3-force-3d for physics
- Add hierarchical clustering

**Phase 3** (Long-term - 2-4 weeks):
- Implement Barnes-Hut in Rust (Option 3)
- Optimize with spatial indexing crate
- Add custom ontology-specific optimizations

---

## 5. Semantic Layout Strategies

### Ontology-Specific Positioning

Beyond generic force-directed algorithms, ontology visualization benefits from **semantic layout strategies**.

### 1. Type-Based Radial Layout

**Concept**: Position node types in radial layers

```
        Literals (outer)
             |
        Datatypes
             |
        Properties
             |
    Classes (center)
```

**Implementation**:
```rust
pub fn calculate_radial_position(node: &Node, graph: &VowlGraph) -> Vector2<f64> {
    let radius = match node.node_type {
        NodeType::Class => 0.0,
        NodeType::ObjectProperty | NodeType::DatatypeProperty => 150.0,
        NodeType::Datatype => 300.0,
        NodeType::Literal => 450.0,
    };

    let angle = calculate_angle_in_layer(node, graph);
    Vector2::new(radius * angle.cos(), radius * angle.sin())
}
```

**Benefits**:
- Clear visual hierarchy
- Type identification at a glance
- Good for small-medium ontologies (~100-300 nodes)

**Limitations**:
- Doesn't scale to 1,155 nodes (crowding in outer layers)

### 2. Namespace/Domain Spatial Partitioning

**Concept**: Partition canvas by namespace/domain

```
┌─────────────┬─────────────┬─────────────┐
│  Blockchain │     DeFi    │     NFT     │
│   (BC-*)    │  (DEFI-*)   │   (NFT-*)   │
├─────────────┼─────────────┼─────────────┤
│     DAO     │   Oracles   │   Payments  │
│  (DAO-*)    │   (OR-*)    │   (PAY-*)   │
└─────────────┴─────────────┴─────────────┘
```

**Implementation**:
```rust
pub struct DomainPartitioning {
    domains: HashMap<String, Bounds>,  // Domain -> canvas region
}

impl DomainPartitioning {
    pub fn calculate_initial_position(&self, node: &Node) -> Vector2<f64> {
        let domain = self.extract_domain(&node.id);
        let bounds = self.domains.get(&domain).unwrap();

        // Random position within domain bounds
        bounds.random_point()
    }

    pub fn apply_boundary_forces(&self, node: &Node) -> Vector2<f64> {
        let domain = self.extract_domain(&node.id);
        let bounds = self.domains.get(&domain).unwrap();

        // Soft boundary force (keeps nodes in region without hard constraint)
        bounds.boundary_force(node.visual.position())
    }
}
```

**Benefits**:
- Domain coherence
- Easy navigation (domains spatially separated)
- Scales well with hierarchical zoom

**Implementation in WasmVOWL**:
```rust
// Add to ForceSimulation
pub struct ForceSimulation {
    config: LayoutConfig,
    domain_partitioning: Option<DomainPartitioning>,
}

impl ForceSimulation {
    fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
        let mut forces = HashMap::new();

        // ... existing forces ...

        // Add domain boundary forces
        if let Some(partitioning) = &self.domain_partitioning {
            for node in graph.nodes() {
                let boundary_force = partitioning.apply_boundary_forces(node);
                *forces.get_mut(&node.id).unwrap() += boundary_force;
            }
        }

        forces
    }
}
```

### 3. Hybrid: Semantic Initialization + Force Refinement

**Best of both worlds**:

```rust
pub fn initialize_semantic_layout(graph: &mut VowlGraph, domains: &DomainPartitioning) {
    // 1. Position nodes by domain
    for node in graph.nodes_mut() {
        let pos = domains.calculate_initial_position(node);
        node.visual.x = pos.x;
        node.visual.y = pos.y;
    }
}

pub fn refine_with_forces(graph: &mut VowlGraph, iterations: usize) {
    let mut simulation = ForceSimulation::new();

    // Don't re-initialize positions (keep semantic layout)
    simulation.alpha = 0.3;  // Lower alpha for gentle refinement

    for _ in 0..iterations {
        simulation.tick(graph).unwrap();
    }
}
```

**Workflow**:
1. **Semantic initialization**: Domain-based positioning
2. **Force refinement**: 50-100 iterations to untangle overlaps
3. **Final polish**: User interaction, manual adjustments

**Performance**: O(n) initialization + O(n log n) × k refinement iterations

---

## 6. WebVOWL Legacy Features

### Original Implementation

**Technology**: D3.js v3 (2014-2015)
**Repository**: https://github.com/VisualDataWeb/WebVOWL
**Paper**: "WebVOWL: Web-based Visualization of Ontologies" (Lohmann et al., 2015)

### Key Features from Legacy

#### 1. Force-Directed Layout (D3.js)

**Algorithm**: D3.js force-directed graph
- **Barnes-Hut**: Built-in with θ = 0.9
- **Link distance**: Dynamic based on node type
- **Charge strength**: Configurable (-500 default)
- **Gravity**: Centering force
- **Alpha cooling**: Automatic simulation stop

**Controls**:
- Pause/resume simulation
- Manual node dragging (pins position)
- Reset layout
- Adjust parameters in real-time

#### 2. Interactive Features

**Node Interaction**:
- Click to select (highlights connected nodes)
- Hover for tooltip (full label, IRI)
- Drag to reposition
- Pin/unpin (fixed position)

**Edge Interaction**:
- Hover to highlight
- Click to show property details
- Filter by edge type

**Navigation**:
- Pan (drag background)
- Zoom (mouse wheel)
- Fit to view (automatic bounds)
- Search/filter sidebar

#### 3. Visual Encoding (VOWL Specification)

**Node Types**:
- **Circle**: owl:Class
- **Rectangle**: owl:Datatype
- **Hexagon**: Deprecated class
- **Rounded rectangle**: External entity

**Node Colors**:
- Blue: Default class
- Yellow: Deprecated
- Green: External
- Orange: Datatype

**Edge Types**:
- **Solid line**: Object property
- **Dashed line**: Datatype property
- **Dotted line**: Subclass/subproperty
- **Arrow**: Direction (domain → range)

**Edge Labels**:
- Property name
- Cardinality (0..1, 1..*, etc.)
- Property characteristics (functional, transitive, etc.)

#### 4. Filtering and Exploration

**Filters**:
- By node type (class, datatype, literal)
- By edge type (object property, datatype property)
- By degree (hide low-degree nodes)
- By namespace

**Folding/Unfolding**:
- Collapse equivalent classes
- Hide disjoint class groups
- Fold property chains

**Search**:
- Text search (highlights matching nodes)
- IRI search
- Label search
- Namespace filter

#### 5. Export Options

**SVG Export**:
- Vector graphics (scalable)
- Preserves current layout
- Includes styling

**JSON Export**:
- VOWL JSON format
- Can be reloaded later
- Share visualizations

**Image Export**:
- PNG (raster)
- Includes background
- Configurable resolution

### Features Missing in WasmVOWL Modern

Comparing to current implementation in `/publishing-tools/WasmVOWL/modern/`:

| Feature | Legacy WebVOWL | WasmVOWL Modern | Priority |
|---------|----------------|-----------------|----------|
| Pause/resume simulation | ✅ | ✅ | - |
| Pin/unpin nodes | ✅ | ❌ | HIGH |
| Property characteristics display | ✅ | ❌ | MEDIUM |
| Cardinality visualization | ✅ | ❌ | MEDIUM |
| Folding/unfolding | ✅ | ❌ | LOW |
| Namespace filtering | ✅ | Partial | MEDIUM |
| Edge type filtering | ✅ | ✅ | - |
| Search highlighting | ✅ | ❌ | HIGH |
| JSON import/export | ✅ | ✅ | - |
| SVG export | ✅ | ✅ | - |
| PNG export | ✅ | ✅ | - |

### Recommended Legacy Features to Port

**Phase 1** (High Priority):
1. **Node pinning**: Right-click to pin/unpin nodes
2. **Search highlighting**: Visual feedback for search results
3. **Hover tooltips**: Show full node/edge details

**Phase 2** (Medium Priority):
4. **Property characteristics**: Icons for functional, transitive, etc.
5. **Cardinality labels**: Display min/max cardinality on edges
6. **Namespace filtering**: Filter by IRI prefix

**Phase 3** (Low Priority):
7. **Folding/unfolding**: Collapse equivalent classes, disjoint groups
8. **Advanced layout controls**: Per-force type strength adjustment

### Migration Guide

**D3.js → WasmVOWL Pattern**:

```javascript
// Legacy D3.js
force.nodes(nodes)
  .links(links)
  .charge(-500)
  .linkDistance(100)
  .gravity(0.1)
  .start();

force.on('tick', () => {
  // Update positions
});
```

```tsx
// WasmVOWL Modern
const wasm = useWasmSimulation({
  linkDistance: 100,
  chargeStrength: -500,
  centerStrength: 0.1,
  autoStart: true,
});

useFrame(() => {
  wasm.tick();  // Rust handles tick
  // React state updates automatically
});
```

**Key Differences**:
- D3: JavaScript simulation
- WASM: Rust simulation
- D3: Event-based updates
- WASM: Imperative tick calls
- D3: DOM manipulation
- WASM: React state + R3F rendering

---

## 7. Performance Comparison Matrix

### Algorithm Complexity

| Algorithm | Time (per tick) | Space | Accuracy | Scalability |
|-----------|----------------|-------|----------|-------------|
| **Naive (current)** | O(n²) | O(n) | Perfect | Poor (<500 nodes) |
| **Barnes-Hut** | O(n log n) | O(n log n) | ~99% (θ=0.8) | Excellent (10K+ nodes) |
| **Hierarchical** | O(c² + Σnᵢ²) | O(n) | Good | Very good (5K+ nodes) |
| **Multi-level** | O(n log n) | O(n log n) | Excellent | Excellent (10K+ nodes) |
| **Hybrid (BH + Hierarchical)** | O(n log n) | O(n log n) | Excellent | Excellent (20K+ nodes) |

### Benchmark Projections (1,155 nodes)

| Metric | Naive | Barnes-Hut | Hierarchical | Hybrid |
|--------|-------|------------|--------------|--------|
| **Tick time** | ~4,000ms | ~40ms | ~200ms | ~30ms |
| **Layout time** (300 ticks) | ~20 minutes | ~12s | ~60s | ~9s |
| **Memory** | 40 MB | 60 MB | 45 MB | 65 MB |
| **FPS** (during simulation) | <1 | 25 | 5 | 30 |
| **Final quality** | Excellent | Very good | Good | Excellent |

### Implementation Effort

| Approach | Effort | Risk | Timeline |
|----------|--------|------|----------|
| **Option 1: three-forcegraph** | Low | Low | 1-2 days |
| **Option 2: Hybrid (d3-force-3d)** | Medium | Medium | 1 week |
| **Option 3: Rust Barnes-Hut** | High | Medium | 2-4 weeks |
| **Option 4: Full rewrite (multi-level)** | Very high | High | 1-2 months |

### Recommended Approach: Hybrid Barnes-Hut + Hierarchical

**Architecture**:
1. **Phase 1**: Hierarchical clustering (file/domain-based)
2. **Phase 2**: Barnes-Hut within each cluster
3. **Phase 3**: Global refinement with reduced alpha

**Implementation** (Rust):

```rust
pub struct HybridSimulation {
    clusters: Vec<NodeCluster>,
    barnes_hut: BarnesHutSimulation,
    hierarchical: HierarchicalLayout,
}

impl LayoutAlgorithm for HybridSimulation {
    fn run(&mut self, graph: &mut VowlGraph, iterations: usize) -> Result<()> {
        // 1. Cluster nodes
        self.clusters = self.cluster_by_domain(graph);

        // 2. Position clusters
        self.hierarchical.layout_clusters(&self.clusters);

        // 3. Refine within clusters using Barnes-Hut
        for cluster in &self.clusters {
            self.barnes_hut.run_on_cluster(graph, cluster, iterations / 2)?;
        }

        // 4. Global refinement
        self.barnes_hut.run(graph, iterations / 2)?;

        Ok(())
    }
}
```

**Expected Performance** (1,155 nodes):
- **Tick time**: ~30ms
- **Total layout**: ~9 seconds (300 ticks)
- **FPS during simulation**: 30+
- **Memory**: ~65 MB
- **Quality**: Excellent (semantic coherence + good aesthetics)

---

## 8. Integration Roadmap

### Phase 1: Immediate Improvements (1-3 days)

**Goal**: 4-10x speedup with minimal risk

**Tasks**:
1. Install `d3-force-3d` package
2. Create hybrid hook `useD3ForceSimulation.ts`
3. Benchmark against current WASM
4. Enable/disable via feature flag

**Code**:
```tsx
// src/hooks/useD3ForceSimulation.ts
import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force-3d';

export function useD3ForceSimulation(nodes, links, settings) {
  const simulationRef = useRef<any>();

  useEffect(() => {
    const sim = forceSimulation(nodes)
      .force('charge', forceManyBody()
        .strength(settings.chargeStrength)
        .theta(0.8))  // Barnes-Hut parameter
      .force('link', forceLink(links)
        .distance(settings.linkDistance))
      .force('center', forceCenter(0, 0, 0));

    simulationRef.current = sim;
  }, [nodes, links, settings]);

  useFrame(() => {
    simulationRef.current?.tick();
    updateNodePositions(simulationRef.current.nodes());
  });
}
```

**Expected**: 50-100x speedup on 1,155 nodes

### Phase 2: Hierarchical Clustering (1 week)

**Goal**: Semantic coherence + performance

**Tasks**:
1. Implement domain extraction (namespace parsing)
2. Add domain-based spatial partitioning
3. Modify force calculation to respect boundaries
4. Add UI controls for cluster visibility

**Code**:
```rust
// rust-wasm/src/layout/hierarchical.rs
pub fn cluster_by_domain(graph: &VowlGraph) -> Vec<NodeCluster> {
    let mut clusters: HashMap<String, Vec<String>> = HashMap::new();

    for node in graph.nodes() {
        let domain = extract_domain_from_iri(&node.properties.iri);
        clusters.entry(domain).or_default().push(node.id.clone());
    }

    clusters.into_iter()
        .map(|(domain, node_ids)| NodeCluster { domain, node_ids })
        .collect()
}

fn extract_domain_from_iri(iri: &str) -> String {
    // BC-0101 → "BC"
    // http://ontology.org/defi/Class1 → "defi"
    // ... domain extraction logic
}
```

**Expected**: Better layout quality, domain separation

### Phase 3: Rust Barnes-Hut (2-4 weeks)

**Goal**: Maximum performance, full control

**Tasks**:
1. Add `quadtree-f32` or `spatialtree` dependency
2. Implement `BarnesHutSimulation` struct
3. Integrate with existing force calculation
4. Benchmark and tune θ parameter
5. Add WASM bindings

**Code**:
```rust
// rust-wasm/src/layout/barnes_hut.rs
use quadtree_f32::{QuadTree, Item};
use nalgebra::Vector2;

pub struct BarnesHutSimulation {
    theta: f64,
    config: LayoutConfig,
}

impl BarnesHutSimulation {
    fn build_quadtree(&self, graph: &VowlGraph) -> QuadTree<usize> {
        let mut tree = QuadTree::new(4);  // max 4 items per cell

        for (idx, node) in graph.nodes().iter().enumerate() {
            tree.insert(Item {
                x: node.visual.x as f32,
                y: node.visual.y as f32,
                data: idx,
            });
        }

        tree
    }

    fn calculate_node_force(
        &self,
        tree: &QuadTree<usize>,
        node: &Node,
        nodes: &[Node],
    ) -> Vector2<f64> {
        // Recursive tree traversal with theta criterion
        self.calculate_force_recursive(tree.root(), node, nodes)
    }

    fn calculate_force_recursive(
        &self,
        cell: &QuadTreeCell,
        node: &Node,
        nodes: &[Node],
    ) -> Vector2<f64> {
        if cell.is_leaf() {
            // Direct calculation for leaf
            let mut force = Vector2::zeros();
            for &idx in &cell.items {
                if idx != node_idx {
                    force += calculate_repulsion(node.pos(), nodes[idx].pos(), self.config.charge_strength);
                }
            }
            force
        } else {
            // Check theta criterion
            let d = distance(node.pos(), cell.center_of_mass());
            let r = cell.size();

            if r / d < self.theta {
                // Use approximation
                calculate_repulsion(node.pos(), cell.center_of_mass(), cell.total_charge())
            } else {
                // Recurse into children
                let mut force = Vector2::zeros();
                for child in &cell.children {
                    force += self.calculate_force_recursive(child, node, nodes);
                }
                force
            }
        }
    }
}
```

**Expected**: ~100x speedup, <50ms per tick for 1,155 nodes

### Phase 4: Advanced Features (Ongoing)

**Goal**: Feature parity with WebVOWL legacy + enhancements

**Tasks**:
1. Node pinning (fixed positions)
2. Search highlighting
3. Property characteristics visualization
4. Cardinality labels
5. Advanced filtering (namespace, degree, type)
6. Layout presets (radial, hierarchical, force-directed)
7. Cluster folding/unfolding
8. Animated transitions between layouts

**Timeline**: Incremental, 1-2 features per week

---

## 9. Rust Crate Recommendations

### Spatial Indexing

| Crate | Version | Use Case | Pros | Cons |
|-------|---------|----------|------|------|
| **quadtree-f32** | 0.1.4 | 2D force-directed | Fast, zero-deps, simple API | 2D only |
| **spatialtree** | 0.2.1 | 2D/3D adaptive | Generic, realtime optimized | Less mature |
| **rstar** | 0.12.0 | Alternative to quadtree | Production-ready, R*-tree | Overkill for force-directed |
| **kdtree** | 0.7.0 | kNN queries | Fast neighbor search | Not ideal for Barnes-Hut |

**Recommendation**: `quadtree-f32` for initial implementation (simple, fast)
**Alternative**: `spatialtree` if 3D needed in future

### Force-Directed Algorithms

| Crate | Version | Features | Status |
|-------|---------|----------|--------|
| **forceatlas2** | 0.5.0 | Barnes-Hut, ForceAtlas2 | Maintained, good docs |
| **petgraph** | 0.6.4 | Graph algorithms | No layout algorithms |
| **graphviz-rust** | 0.6.6 | Graphviz layouts | Not force-directed |

**Recommendation**: Study `forceatlas2` source code for Barnes-Hut implementation pattern

### Linear Algebra

| Crate | Current | Notes |
|-------|---------|-------|
| **nalgebra** | 0.33.0 | Already used ✅ |

Keep using nalgebra (already integrated, well-optimized)

---

## 10. Testing and Validation

### Performance Benchmarks

**Existing**: `/rust-wasm/benches/layout_bench.rs`

**Add new benchmarks**:
```rust
// benches/barnes_hut_bench.rs
fn bench_barnes_hut_vs_naive(c: &mut Criterion) {
    let mut group = c.benchmark_group("barnes_hut_comparison");

    for size in [100, 500, 1000, 2000].iter() {
        let ontology = create_test_ontology(*size, *size - 5);
        let mut graph = GraphBuilder::from_ontology(&ontology).unwrap();

        // Naive
        group.bench_with_input(
            BenchmarkId::new("naive", size),
            size,
            |b, _| {
                b.iter(|| {
                    let mut sim = ForceSimulation::new();
                    sim.tick(&mut graph.clone()).unwrap();
                });
            },
        );

        // Barnes-Hut
        group.bench_with_input(
            BenchmarkId::new("barnes_hut", size),
            size,
            |b, _| {
                b.iter(|| {
                    let mut sim = BarnesHutSimulation::new();
                    sim.tick(&mut graph.clone()).unwrap();
                });
            },
        );
    }

    group.finish();
}
```

### Layout Quality Metrics

**Metrics to track**:
1. **Edge crossing**: Count of edge intersections (lower = better)
2. **Node overlap**: Number of overlapping nodes (should be 0)
3. **Edge length variance**: Std dev of edge lengths (lower = better)
4. **Aspect ratio**: Bounding box width/height (close to 1 = better)
5. **Cluster cohesion**: Average distance within clusters (lower = better)
6. **Cluster separation**: Min distance between clusters (higher = better)

**Implementation**:
```rust
pub struct LayoutQualityMetrics {
    pub edge_crossings: usize,
    pub node_overlaps: usize,
    pub edge_length_variance: f64,
    pub aspect_ratio: f64,
    pub cluster_cohesion: f64,
    pub cluster_separation: f64,
}

impl LayoutQualityMetrics {
    pub fn calculate(graph: &VowlGraph) -> Self {
        // ... metric calculations
    }
}
```

### Validation Tests

```rust
#[test]
fn test_barnes_hut_accuracy() {
    let graph = create_test_graph(100);

    // Calculate forces with naive
    let naive_forces = naive_simulation.calculate_forces(&graph);

    // Calculate forces with Barnes-Hut
    let bh_forces = barnes_hut_simulation.calculate_forces(&graph);

    // Compare (should be within 5% for theta=0.8)
    for node_id in graph.node_ids() {
        let naive_force = naive_forces[node_id];
        let bh_force = bh_forces[node_id];
        let error = (naive_force - bh_force).norm() / naive_force.norm();
        assert!(error < 0.05, "Barnes-Hut error too high: {}", error);
    }
}

#[test]
fn test_hierarchical_clustering() {
    let graph = load_real_ontology("blockchain-ontology-merged.json");
    let clusters = cluster_by_domain(&graph);

    // Should have ~16 clusters (one per ontology file)
    assert!(clusters.len() >= 10 && clusters.len() <= 20);

    // Largest cluster should be BC (blockchain)
    let bc_cluster = clusters.iter().find(|c| c.domain == "BC").unwrap();
    assert!(bc_cluster.node_ids.len() > 150);
}
```

---

## 11. Recommendations Summary

### Immediate Action (Next 1-3 days)

**Primary Recommendation**: **Hybrid Approach (Option 2)**

**Implementation**:
1. Install `d3-force-3d` package
2. Create `useD3ForceSimulation.ts` hook
3. Keep Rust for graph operations
4. Use JavaScript Barnes-Hut for physics
5. Add performance comparison UI toggle

**Expected Results**:
- **50-100x speedup** on 1,155 nodes
- **~40ms per tick** (vs current ~4,000ms)
- **30+ FPS** during simulation
- **Layout time**: ~12s (vs ~20 minutes)

### Short-term (1-2 weeks)

**Add hierarchical clustering**:
1. Domain extraction from IRIs
2. Spatial partitioning by domain
3. Domain boundary forces
4. UI controls for cluster visibility

**Port legacy features**:
- Node pinning (right-click)
- Search highlighting
- Hover tooltips

### Long-term (1-3 months)

**Pure Rust Barnes-Hut**:
1. Implement using `quadtree-f32` or `spatialtree`
2. Benchmark and optimize
3. WASM bindings
4. Feature flag for JavaScript vs Rust physics

**Advanced features**:
- Multi-level layout
- Layout presets (radial, hierarchical)
- Cluster folding/unfolding
- Property characteristics display
- Cardinality visualization

### Architecture Decision

```
┌─────────────────────────────────────────────────┐
│  React Components (TypeScript)                   │
│  - UI, controls, rendering                       │
└──────────────┬──────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────┐
│  Physics Engine                                  │
│                                                  │
│  Short-term: d3-force-3d (JavaScript)           │
│  Long-term:  Barnes-Hut (Rust/WASM)             │
└──────────────┬──────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────┐
│  Graph Operations (Rust/WASM)                    │
│  - Queries, filtering, clustering                │
│  - Spatial indexing (quadtree)                   │
└─────────────────────────────────────────────────┘
```

---

## 12. References and Resources

### Academic Papers

1. **Barnes, J., & Hut, P. (1986)**. "A hierarchical O(N log N) force-calculation algorithm". *Nature*, 324(6096), 446-449.
   - Original Barnes-Hut algorithm paper

2. **Noack, A. (2009)**. "Modularity clustering is force-directed layout". *Physical Review E*, 79(2), 026102.
   - Connection between clustering and force-directed layout

3. **Wallner, G., & Kriglstein, S. (2013)**. "Force Directed Embedding of Hierarchical Cluster Graphs". *Proceedings of GRAPP*.
   - Hierarchical force-directed layout for large graphs

4. **Lohmann, S., Negru, S., Haag, F., & Ertl, T. (2016)**. "Visualizing Ontologies with VOWL". *Semantic Web Journal*, 7(4), 399-419.
   - VOWL specification and WebVOWL implementation

### Libraries and Tools

**JavaScript/TypeScript**:
- **d3-force**: https://github.com/d3/d3-force
- **d3-force-3d**: https://github.com/vasturiano/d3-force-3d
- **three-forcegraph**: https://github.com/vasturiano/three-forcegraph
- **r3f-forcegraph**: https://github.com/vasturiano/r3f-forcegraph
- **ngraph.forcelayout**: https://github.com/anvaka/ngraph.forcelayout

**Rust**:
- **quadtree-f32**: https://crates.io/crates/quadtree-f32
- **spatialtree**: https://crates.io/crates/spatialtree
- **rstar**: https://crates.io/crates/rstar
- **forceatlas2**: https://crates.io/crates/forceatlas2
- **nalgebra**: https://crates.io/crates/nalgebra

### Online Demos

- **Barnes-Hut Interactive**: https://jheer.github.io/barnes-hut/
- **3D Force Graph**: https://vasturiano.github.io/3d-force-graph/
- **WebVOWL**: http://vowl.visualdataweb.org/webvowl.html

### Documentation

- **D3 Force Documentation**: https://d3js.org/d3-force
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **WASM-bindgen Guide**: https://rustwasm.github.io/wasm-bindgen/

---

## 13. Appendix: Code Examples

### A. Complete Barnes-Hut Implementation (Conceptual)

```rust
// rust-wasm/src/layout/barnes_hut.rs

use nalgebra::Vector2;
use std::collections::HashMap;
use crate::graph::{VowlGraph, Node};
use crate::layout::{LayoutAlgorithm, LayoutConfig};

/// Quadtree cell for Barnes-Hut algorithm
struct QuadTreeCell {
    bounds: Bounds,
    center_of_mass: Vector2<f64>,
    total_mass: f64,
    children: Vec<QuadTreeCell>,
    node_indices: Vec<usize>,
}

impl QuadTreeCell {
    fn is_leaf(&self) -> bool {
        self.children.is_empty()
    }

    fn subdivide(&mut self) {
        // Split into 4 quadrants
        let Bounds { min, max } = self.bounds;
        let mid = (min + max) / 2.0;

        self.children = vec![
            QuadTreeCell::new(Bounds::new(min, mid)),                           // SW
            QuadTreeCell::new(Bounds::new(vec2(mid.x, min.y), vec2(max.x, mid.y))), // SE
            QuadTreeCell::new(Bounds::new(vec2(min.x, mid.y), vec2(mid.x, max.y))), // NW
            QuadTreeCell::new(Bounds::new(mid, max)),                            // NE
        ];
    }
}

/// Barnes-Hut force-directed layout
pub struct BarnesHutSimulation {
    config: LayoutConfig,
    theta: f64,
    alpha: f64,
}

impl BarnesHutSimulation {
    pub fn new(theta: f64) -> Self {
        Self {
            config: LayoutConfig::default(),
            theta,
            alpha: 1.0,
        }
    }

    fn build_quadtree(&self, nodes: &[Node]) -> QuadTreeCell {
        // 1. Calculate bounds
        let bounds = calculate_bounds(nodes);

        // 2. Create root cell
        let mut root = QuadTreeCell::new(bounds);

        // 3. Insert all nodes
        for (idx, node) in nodes.iter().enumerate() {
            self.insert_node(&mut root, idx, node);
        }

        root
    }

    fn insert_node(&self, cell: &mut QuadTreeCell, idx: usize, node: &Node) {
        if cell.node_indices.is_empty() && cell.is_leaf() {
            // Empty leaf - add node
            cell.node_indices.push(idx);
            cell.update_center_of_mass(node.visual.position(), node.mass());
        } else if cell.is_leaf() {
            // Leaf with existing node - subdivide
            cell.subdivide();

            // Re-insert existing nodes into children
            for &existing_idx in &cell.node_indices.clone() {
                let existing_node = &nodes[existing_idx];
                let child_idx = cell.find_quadrant(existing_node.visual.position());
                self.insert_node(&mut cell.children[child_idx], existing_idx, existing_node);
            }
            cell.node_indices.clear();

            // Insert new node
            let child_idx = cell.find_quadrant(node.visual.position());
            self.insert_node(&mut cell.children[child_idx], idx, node);
        } else {
            // Internal node - insert into appropriate child
            let child_idx = cell.find_quadrant(node.visual.position());
            self.insert_node(&mut cell.children[child_idx], idx, node);
        }

        // Update center of mass
        cell.update_center_of_mass(node.visual.position(), node.mass());
    }

    fn calculate_force(
        &self,
        cell: &QuadTreeCell,
        node: &Node,
        node_idx: usize,
        nodes: &[Node],
    ) -> Vector2<f64> {
        if cell.is_leaf() {
            // Leaf - calculate direct forces
            let mut force = Vector2::zeros();
            for &idx in &cell.node_indices {
                if idx != node_idx {
                    force += calculate_repulsion(
                        node.visual.position(),
                        nodes[idx].visual.position(),
                        self.config.charge_strength,
                    );
                }
            }
            force
        } else {
            // Internal node - check theta criterion
            let d = (node.visual.position() - cell.center_of_mass).norm();
            let r = cell.bounds.width().max(cell.bounds.height());

            if r / d < self.theta {
                // Use approximation (treat as single body)
                calculate_repulsion(
                    node.visual.position(),
                    cell.center_of_mass,
                    self.config.charge_strength * cell.total_mass,
                )
            } else {
                // Recurse into children
                let mut force = Vector2::zeros();
                for child in &cell.children {
                    force += self.calculate_force(child, node, node_idx, nodes);
                }
                force
            }
        }
    }
}

impl LayoutAlgorithm for BarnesHutSimulation {
    fn tick(&mut self, graph: &mut VowlGraph) -> Result<()> {
        let nodes = graph.nodes();

        // 1. Build quadtree
        let tree = self.build_quadtree(&nodes);

        // 2. Calculate forces
        let mut forces: HashMap<String, Vector2<f64>> = HashMap::new();
        for (idx, node) in nodes.iter().enumerate() {
            let repulsion_force = self.calculate_force(&tree, node, idx, &nodes);

            // Add attraction forces (unchanged)
            let attraction_force = self.calculate_attraction_forces(node, graph);

            // Add centering force
            let center_force = calculate_center_force(
                node.visual.position(),
                self.config.center,
                self.config.center_strength,
            );

            forces.insert(
                node.id.clone(),
                repulsion_force * self.alpha + attraction_force + center_force,
            );
        }

        // 3. Apply forces
        self.apply_forces(graph, &forces);

        // 4. Decay alpha
        self.alpha *= 1.0 - self.config.alpha_decay;

        Ok(())
    }
}
```

### B. D3-Force-3D Integration Example

```tsx
// src/hooks/useD3ForceSimulation.ts

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force-3d';
import { useGraphStore } from '@/stores/useGraphStore';
import { useUIStore } from '@/stores/useUIStore';

export function useD3ForceSimulation() {
  const simulationRef = useRef<any>();
  const nodes = useGraphStore((state) => Array.from(state.nodes.values()));
  const edges = useGraphStore((state) => Array.from(state.edges.values()));
  const settings = useUIStore((state) => state.settings.simulation);
  const updateNodePosition = useGraphStore((state) => state.updateNodePosition);

  // Initialize simulation
  useEffect(() => {
    if (nodes.length === 0) return;

    // Create D3 simulation
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody()
        .strength(settings.chargeStrength)
        .theta(0.8)  // Barnes-Hut parameter
        .distanceMin(1)
        .distanceMax(1000))
      .force('link', forceLink(edges)
        .id((d: any) => d.id)
        .distance(settings.linkDistance)
        .strength(settings.linkStrength))
      .force('center', forceCenter(0, 0, 0)
        .strength(settings.centerStrength))
      .alphaDecay(settings.alphaDecay)
      .velocityDecay(settings.velocityDecay);

    simulationRef.current = simulation;

    return () => {
      simulation.stop();
    };
  }, [nodes.length, edges.length]);

  // Update simulation parameters when settings change
  useEffect(() => {
    if (!simulationRef.current) return;

    simulationRef.current
      .force('charge').strength(settings.chargeStrength).theta(0.8);

    simulationRef.current
      .force('link').distance(settings.linkDistance).strength(settings.linkStrength);

    simulationRef.current
      .force('center').strength(settings.centerStrength);

    simulationRef.current
      .alphaDecay(settings.alphaDecay)
      .velocityDecay(settings.velocityDecay);

    // Reheat simulation
    simulationRef.current.alpha(0.3).restart();
  }, [settings]);

  // Run simulation on each frame
  useFrame(() => {
    if (!simulationRef.current) return;

    // Tick simulation
    simulationRef.current.tick();

    // Update React state with new positions
    const nodes = simulationRef.current.nodes();
    for (const node of nodes) {
      updateNodePosition(node.id, {
        x: node.x || 0,
        y: node.y || 0,
        z: node.z || 0,
      });
    }
  });

  return {
    simulation: simulationRef.current,
    isRunning: simulationRef.current?.alpha() > 0.01,
    alpha: simulationRef.current?.alpha() || 0,
    restart: () => simulationRef.current?.alpha(1).restart(),
    stop: () => simulationRef.current?.stop(),
  };
}
```

### C. Hierarchical Clustering Example

```rust
// rust-wasm/src/layout/hierarchical.rs

use std::collections::HashMap;
use crate::graph::{VowlGraph, Node};

#[derive(Debug, Clone)]
pub struct NodeCluster {
    pub id: String,
    pub domain: String,
    pub node_ids: Vec<String>,
    pub center: Vector2<f64>,
    pub bounds: Bounds,
}

pub struct HierarchicalLayout {
    clusters: Vec<NodeCluster>,
}

impl HierarchicalLayout {
    /// Cluster nodes by domain (extracted from IRI)
    pub fn cluster_by_domain(graph: &VowlGraph) -> Vec<NodeCluster> {
        let mut domain_map: HashMap<String, Vec<String>> = HashMap::new();

        for node in graph.nodes() {
            let domain = extract_domain(&node.properties.iri);
            domain_map
                .entry(domain)
                .or_insert_with(Vec::new)
                .push(node.id.clone());
        }

        domain_map
            .into_iter()
            .enumerate()
            .map(|(idx, (domain, node_ids))| NodeCluster {
                id: format!("cluster_{}", idx),
                domain,
                node_ids,
                center: Vector2::zeros(),
                bounds: Bounds::default(),
            })
            .collect()
    }

    /// Layout clusters in a grid
    pub fn layout_clusters(&mut self, clusters: &[NodeCluster]) {
        let grid_size = (clusters.len() as f64).sqrt().ceil() as usize;
        let spacing = 500.0;

        for (idx, cluster) in clusters.iter().enumerate() {
            let row = idx / grid_size;
            let col = idx % grid_size;

            let x = (col as f64 - grid_size as f64 / 2.0) * spacing;
            let y = (row as f64 - grid_size as f64 / 2.0) * spacing;

            self.clusters[idx].center = Vector2::new(x, y);
        }
    }

    /// Initialize node positions within clusters
    pub fn initialize_node_positions(&self, graph: &mut VowlGraph) {
        for cluster in &self.clusters {
            let radius = 100.0;
            let angle_step = std::f64::consts::TAU / cluster.node_ids.len() as f64;

            for (i, node_id) in cluster.node_ids.iter().enumerate() {
                if let Some(node) = graph.get_node_mut(node_id) {
                    let angle = i as f64 * angle_step;
                    node.visual.x = cluster.center.x + radius * angle.cos();
                    node.visual.y = cluster.center.y + radius * angle.sin();
                }
            }
        }
    }

    /// Calculate boundary force to keep nodes within cluster region
    pub fn calculate_boundary_force(&self, node: &Node, cluster: &NodeCluster) -> Vector2<f64> {
        let pos = Vector2::new(node.visual.x, node.visual.y);
        let to_center = cluster.center - pos;
        let distance = to_center.norm();

        let max_radius = 200.0;  // Cluster radius

        if distance > max_radius {
            // Soft boundary force (pulls back toward cluster)
            to_center.normalize() * (distance - max_radius) * 0.1
        } else {
            Vector2::zeros()
        }
    }
}

fn extract_domain(iri: &str) -> String {
    // Example IRI patterns:
    // "BC-0101" → "BC"
    // "http://ontology.org/blockchain/Class1" → "blockchain"
    // "http://example.com/defi#Token" → "defi"

    if let Some(prefix) = iri.split('-').next() {
        if prefix.len() <= 5 {
            return prefix.to_uppercase();
        }
    }

    if let Some(domain) = iri.split('/').rev().nth(1) {
        return domain.to_lowercase();
    }

    "default".to_string()
}
```

---

## 14. Conclusion

### Key Takeaways

1. **Current Bottleneck**: O(n²) all-pairs repulsion in `simulation.rs:88-101`
2. **Best Solution**: Barnes-Hut algorithm reduces to O(n log n) with ~100x speedup
3. **Fastest Path**: Use d3-force-3d (JavaScript) for immediate results
4. **Long-term Goal**: Rust Barnes-Hut implementation for maximum performance
5. **Quality Enhancement**: Add hierarchical clustering for semantic coherence

### Expected Outcomes

**After Phase 1** (d3-force-3d integration):
- Layout time: 20 minutes → **12 seconds** (100x)
- Tick time: 4,000ms → **40ms** (100x)
- FPS: <1 → **25-30**
- User experience: ⭐⭐ → **⭐⭐⭐⭐**

**After Phase 2** (hierarchical clustering):
- Semantic coherence: Poor → **Excellent**
- Domain separation: None → **Clear visual grouping**
- Navigation: Difficult → **Intuitive**
- User experience: ⭐⭐⭐⭐ → **⭐⭐⭐⭐⭐**

**After Phase 3** (Rust Barnes-Hut):
- Tick time: 40ms → **25-30ms**
- Memory: 60MB → **45MB**
- Bundle size: +200KB → **+50KB**
- Control: Limited → **Full customization**

### Next Steps

**Immediate** (Today):
1. Review this research document
2. Decide on implementation approach
3. Create implementation plan
4. Set up benchmarking infrastructure

**This Week**:
1. Install d3-force-3d
2. Create useD3ForceSimulation hook
3. Add performance comparison UI
4. Benchmark with 1,155-node ontology

**This Month**:
1. Implement hierarchical clustering
2. Port high-priority legacy features (node pinning, search)
3. Add layout quality metrics
4. User testing and feedback

**This Quarter**:
1. Rust Barnes-Hut implementation
2. Advanced features (folding, presets, etc.)
3. Performance optimization
4. Production deployment

---

**Research completed**: November 13, 2025
**Researcher**: Claude Code (Research Agent)
**Next Review**: After Phase 1 implementation
**Status**: ✅ **Ready for implementation**
