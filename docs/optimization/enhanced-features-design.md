# WasmVOWL Enhanced Features Design

**Version:** 1.0
**Date:** 2025-11-13
**Status:** Design Proposal
**Author:** System Architect

---

## Executive Summary

This document outlines 10 enhanced UI features for the WasmVOWL ontology visualizer, transforming it from a basic visualization tool into a comprehensive ontology exploration platform. The proposed features address critical gaps in semantic search, filtering, navigation, and analysis capabilities while maintaining the high-performance WASM-powered architecture.

**Key Metrics:**
- **Current Features:** 6 basic capabilities
- **Proposed Features:** 10 advanced capabilities
- **Estimated Development:** 120-160 hours (3-4 weeks)
- **Performance Target:** Maintain 60 FPS with 500+ nodes
- **Priority Distribution:** 5 Must-Have, 3 Nice-to-Have, 2 Advanced

---

## Table of Contents

1. [Feature Overview](#feature-overview)
2. [Detailed Feature Specifications](#detailed-feature-specifications)
3. [Technical Architecture](#technical-architecture)
4. [Implementation Roadmap](#implementation-roadmap)
5. [Performance Considerations](#performance-considerations)
6. [Dependencies & Risks](#dependencies--risks)

---

## Feature Overview

### Current Features (Baseline)

| Feature | Status | Performance |
|---------|--------|-------------|
| File loading (drag & drop) | ✅ Complete | <50ms parse time |
| 2D/3D view toggle | ✅ Complete | 60 FPS maintained |
| Basic pan/zoom/rotate | ✅ Complete | Hardware accelerated |
| Node/edge selection | ✅ Complete | <1ms click detection |
| Export (SVG/PNG) | ✅ Complete | 1920x1080 @ 2s |
| Basic statistics | ✅ Complete | Real-time updates |

### Missing Features (Requirements Gap)

| Feature | Priority | Complexity | Est. Hours |
|---------|----------|------------|------------|
| 1. Semantic Search | Must-Have | Medium | 12-16 |
| 2. Relationship Filtering | Must-Have | Easy | 8-12 |
| 3. Domain Clustering | Must-Have | Medium | 16-20 |
| 4. Hierarchy View | Must-Have | Hard | 20-24 |
| 5. Enhanced Node Details Panel | Must-Have | Easy | 8-12 |
| 6. Layout Algorithms | Nice-to-Have | Medium | 16-20 |
| 7. Statistics Dashboard | Nice-to-Have | Easy | 8-12 |
| 8. Save/Load Sessions | Nice-to-Have | Medium | 12-16 |
| 9. Export Enhancements | Advanced | Medium | 12-16 |
| 10. Performance Controls | Advanced | Easy | 8-12 |

**Total Estimated Development Time:** 120-160 hours

---

## Detailed Feature Specifications

### Feature 1: Semantic Search with Highlighting

**Priority:** Must-Have
**Complexity:** Medium (16 hours)
**Dependencies:** None

#### Description
Real-time text search across node labels, IRIs, properties, and annotations with visual highlighting and result navigation.

#### User Stories
- As a user, I want to search for "Payment" and see all matching nodes highlighted
- As a user, I want to navigate between search results using Next/Previous buttons
- As a user, I want to see search results ranked by relevance

#### UI Mockup (Text Description)
```
┌─────────────────────────────────────┐
│ 🔍 Search Ontology                 │
│ ┌─────────────────────────────────┐ │
│ │ Payment                      [x]│ │ ← Search input with clear button
│ └─────────────────────────────────┘ │
│                                     │
│ Results: 12 matches                 │
│ ┌─────────────────────────────────┐ │
│ │ ✓ PaymentMethod (class)         │ │ ← Matched nodes
│ │ ✓ processPayment (property)     │ │
│ │ ✓ PaymentGateway (class)        │ │
│ │   ...9 more                      │ │
│ └─────────────────────────────────┘ │
│ [< Prev] [3/12] [Next >]           │ ← Navigation
└─────────────────────────────────────┘
```

#### Technical Implementation

**State Extension (useUIStore.ts):**
```typescript
interface UIStore {
  // Search state
  searchQuery: string;
  searchResults: string[]; // Node IDs
  currentSearchIndex: number;
  searchHighlightEnabled: boolean;

  // Actions
  setSearchQuery: (query: string) => void;
  nextSearchResult: () => void;
  previousSearchResult: () => void;
  clearSearch: () => void;
}
```

**Search Algorithm:**
```typescript
function performSearch(query: string, nodes: Map<string, Node>): string[] {
  const lowerQuery = query.toLowerCase();
  const results: Array<{ id: string; score: number }> = [];

  nodes.forEach((node, id) => {
    let score = 0;

    // Label exact match (highest priority)
    if (node.label?.toLowerCase() === lowerQuery) score += 100;
    else if (node.label?.toLowerCase().includes(lowerQuery)) score += 50;

    // IRI match
    if (node.iri?.toLowerCase().includes(lowerQuery)) score += 25;

    // Properties match
    if (node.properties) {
      Object.values(node.properties).forEach(val => {
        if (String(val).toLowerCase().includes(lowerQuery)) score += 10;
      });
    }

    if (score > 0) results.push({ id, score });
  });

  // Sort by relevance
  return results
    .sort((a, b) => b.score - a.score)
    .map(r => r.id);
}
```

**Visual Highlighting (ClassNode.tsx):**
```typescript
const isSearchMatch = useUIStore(state =>
  state.searchResults.includes(node.id)
);
const isCurrentMatch = useUIStore(state =>
  state.searchResults[state.currentSearchIndex] === node.id
);

return (
  <Circle
    scale={isCurrentMatch ? 1.2 : isSearchMatch ? 1.1 : 1.0}
    outline={isCurrentMatch ? 3 : isSearchMatch ? 2 : 0}
    outlineColor={isCurrentMatch ? '#FFD700' : '#FFA500'}
  />
);
```

**Component Structure:**
- `SearchBar.tsx` - Input field with autocomplete
- `SearchResults.tsx` - Results list panel
- `SearchHighlight.ts` - Highlighting logic

---

### Feature 2: Relationship Filtering by Edge Type

**Priority:** Must-Have
**Complexity:** Easy (10 hours)
**Dependencies:** Existing filter system

#### Description
Filter graph by specific OWL/RDFS relationship types with visual toggles and edge type legend.

#### User Stories
- As a user, I want to show only `SubClassOf` relationships to understand class hierarchy
- As a user, I want to hide `DatatypeProperty` edges to reduce visual clutter
- As a user, I want to see a legend of all edge types with color coding

#### UI Mockup
```
┌─────────────────────────────────────┐
│ Edge Type Filters                   │
│                                     │
│ ☑ SubClassOf          (23) 🟦      │ ← Toggle + count + color
│ ☑ ObjectProperty      (45) 🟩      │
│ ☐ DatatypeProperty    (67) 🟨      │ ← Unchecked = hidden
│ ☑ dt:enables          (12) 🟪      │
│ ☑ dt:requires         (8)  🟧      │
│                                     │
│ [Select All] [Deselect All]        │
└─────────────────────────────────────┘
```

#### Technical Implementation

**State Extension (useGraphStore.ts):**
```typescript
interface GraphState {
  // Edge type visibility
  visibleEdgeTypes: Set<string>;

  // Actions
  toggleEdgeType: (type: string) => void;
  showAllEdgeTypes: () => void;
  hideAllEdgeTypes: () => void;
}
```

**Filter Logic:**
```typescript
applyEdgeTypeFilter: () => set((state) => {
  const { edges, visibleEdgeTypes } = state;

  state.filteredEdges.clear();
  edges.forEach((edge, id) => {
    if (visibleEdgeTypes.has(edge.type)) {
      state.filteredEdges.add(id);
    }
  });
})
```

**Edge Color Mapping:**
```typescript
const EDGE_TYPE_COLORS: Record<string, string> = {
  'subClassOf': '#3B82F6',        // Blue
  'objectProperty': '#10B981',    // Green
  'datatypeProperty': '#F59E0B',  // Yellow
  'dt:enables': '#8B5CF6',        // Purple
  'dt:requires': '#F97316',       // Orange
  'dt:implements': '#EC4899',     // Pink
};
```

**Component Structure:**
- `EdgeTypeFilter.tsx` - Toggle controls
- `EdgeTypeLegend.tsx` - Color legend
- Update `PropertyEdge.tsx` for conditional rendering

---

### Feature 3: Domain Clustering Toggle

**Priority:** Must-Have
**Complexity:** Medium (18 hours)
**Dependencies:** WASM layout engine modification

#### Description
Automatically group and visually cluster nodes by ontology domain (AI, BC, MV, RB, DT) with spatial separation and color coding.

#### User Stories
- As a user, I want to see AI-related concepts grouped together visually
- As a user, I want to toggle clustering on/off to compare layouts
- As a user, I want each domain to have a distinct color scheme

#### UI Mockup
```
┌─────────────────────────────────────┐
│ Domain Clustering                   │
│                                     │
│ ☑ Enable Clustering                │
│                                     │
│ Domain Groups:                      │
│ ☑ AI (23 nodes)    🔴              │
│ ☑ BC (45 nodes)    🔵              │
│ ☑ MV (67 nodes)    🟢              │
│ ☑ RB (12 nodes)    🟡              │
│ ☑ DT (8 nodes)     🟣              │
│                                     │
│ Layout Strength: [====|   ] 0.6    │ ← Clustering strength
│                                     │
│ [Auto-Arrange Domains]              │
└─────────────────────────────────────┘
```

#### Technical Implementation

**Domain Detection:**
```typescript
function detectDomain(nodeId: string): string {
  const prefix = nodeId.split(':')[0] || nodeId.substring(0, 2).toUpperCase();

  const domainMap: Record<string, string> = {
    'AI': 'AI', 'ai': 'AI',
    'BC': 'BC', 'bc': 'BC',
    'MV': 'MV', 'mv': 'MV',
    'RB': 'RB', 'rb': 'RB',
    'DT': 'DT', 'dt': 'DT',
  };

  return domainMap[prefix] || 'Other';
}
```

**WASM Modification (rust-wasm/src/layout/force.rs):**
```rust
pub struct ClusterConfig {
    pub enabled: bool,
    pub strength: f32,  // 0.0 - 1.0
    pub separation: f32, // Distance between clusters
}

pub fn apply_cluster_forces(
    nodes: &mut Vec<Node>,
    cluster_map: &HashMap<String, String>,
    config: &ClusterConfig,
) {
    if !config.enabled {
        return;
    }

    // Calculate cluster centers
    let centers = calculate_cluster_centers(nodes, cluster_map);

    // Apply attraction to cluster center
    for node in nodes.iter_mut() {
        let domain = cluster_map.get(&node.id).unwrap_or(&"Other".to_string());
        if let Some(center) = centers.get(domain) {
            let dx = center.x - node.position.x;
            let dy = center.y - node.position.y;

            node.velocity.x += dx * config.strength * 0.01;
            node.velocity.y += dy * config.strength * 0.01;
        }
    }
}
```

**State Extension:**
```typescript
interface GraphSettings {
  // Clustering
  clusteringEnabled: boolean;
  clusterStrength: number; // 0.0 - 1.0
  visibleDomains: Set<string>;
}
```

**Component Structure:**
- `DomainClusterPanel.tsx` - Clustering controls
- Update `useWasmSimulation.ts` to pass cluster config
- Update `ClassNode.tsx` for domain-based coloring

---

### Feature 4: Hierarchy View (Class Tree)

**Priority:** Must-Have
**Complexity:** Hard (22 hours)
**Dependencies:** New tree layout algorithm

#### Description
Dedicated hierarchical tree view showing SubClassOf relationships with collapsible branches and breadcrumb navigation.

#### User Stories
- As a user, I want to see the complete class hierarchy from root to leaves
- As a user, I want to collapse/expand branches to focus on specific areas
- As a user, I want to switch between force-directed and tree layouts

#### UI Mockup
```
┌─────────────────────────────────────┐
│ [Force Layout] [Tree Layout]       │ ← Layout toggle
│                                     │
│ 📊 Class Hierarchy                  │
│                                     │
│ ▼ Thing                             │ ← Expandable root
│   ▼ Concept                         │
│     ▶ AI:NeuralNetwork              │ ← Collapsed branch
│     ▼ AI:Agent                      │ ← Expanded branch
│       • AI:AutonomousAgent          │ ← Leaf node
│       • AI:ReactiveAgent            │
│   ▼ Process                         │
│     • DT:Workflow                   │
│     • DT:Task                       │
│                                     │
│ Depth: [===|     ] 3 levels         │
│ [Expand All] [Collapse All]         │
└─────────────────────────────────────┘
```

#### Technical Implementation

**Tree Data Structure:**
```typescript
interface HierarchyNode {
  id: string;
  label: string;
  children: HierarchyNode[];
  parent: string | null;
  depth: number;
  collapsed: boolean;
}

function buildHierarchy(
  nodes: Map<string, Node>,
  edges: Map<string, Edge>
): HierarchyNode[] {
  // Find SubClassOf relationships
  const subClassEdges = Array.from(edges.values())
    .filter(e => e.type === 'subClassOf');

  // Build parent-child map
  const childrenMap = new Map<string, string[]>();
  subClassEdges.forEach(edge => {
    if (!childrenMap.has(edge.target)) {
      childrenMap.set(edge.target, []);
    }
    childrenMap.get(edge.target)!.push(edge.source);
  });

  // Find root nodes (no parents)
  const roots = Array.from(nodes.keys()).filter(id =>
    !subClassEdges.some(e => e.source === id)
  );

  // Recursive tree builder
  function buildNode(id: string, depth = 0): HierarchyNode {
    const node = nodes.get(id)!;
    const children = childrenMap.get(id) || [];

    return {
      id,
      label: node.label,
      children: children.map(childId => buildNode(childId, depth + 1)),
      parent: subClassEdges.find(e => e.source === id)?.target || null,
      depth,
      collapsed: depth > 2, // Auto-collapse after level 2
    };
  }

  return roots.map(id => buildNode(id));
}
```

**Tree Layout Algorithm (WASM):**
```rust
pub struct TreeLayout {
    pub horizontal_spacing: f32,
    pub vertical_spacing: f32,
    pub orientation: TreeOrientation,
}

pub enum TreeOrientation {
    TopDown,
    LeftRight,
    Radial,
}

pub fn calculate_tree_positions(
    hierarchy: &[HierarchyNode],
    layout: &TreeLayout,
) -> HashMap<String, Position> {
    let mut positions = HashMap::new();
    let mut current_y = 0.0;

    fn layout_node(
        node: &HierarchyNode,
        x: f32,
        y: &mut f32,
        spacing: &TreeLayout,
        positions: &mut HashMap<String, Position>,
    ) {
        positions.insert(node.id.clone(), Position { x, y: *y });
        *y += spacing.vertical_spacing;

        let child_x = x + spacing.horizontal_spacing;
        for child in &node.children {
            layout_node(child, child_x, y, spacing, positions);
        }
    }

    for root in hierarchy {
        layout_node(root, 0.0, &mut current_y, layout, &mut positions);
    }

    positions
}
```

**Component Structure:**
- `HierarchyView.tsx` - Tree view panel
- `TreeNode.tsx` - Collapsible tree node
- `TreeLayout.ts` - Layout calculation logic
- Update `GraphCanvas.tsx` for layout switching

---

### Feature 5: Enhanced Node Details Panel

**Priority:** Must-Have
**Complexity:** Easy (10 hours)
**Dependencies:** OWL metadata parsing

#### Description
Comprehensive node details panel showing OWL axioms, annotations, relationships, and provenance with copy-to-clipboard functionality.

#### Current vs. Enhanced Comparison

**Current:**
- Basic: ID, Type, Label, IRI
- Connections: Incoming/Outgoing count
- Attributes: Simple list

**Enhanced:**
- **Complete OWL Properties:** All axioms (equivalentClass, disjointWith, etc.)
- **Annotations:** rdfs:comment, dcterms:description, foaf:depiction
- **Relationships:** Navigable list of connected nodes
- **Provenance:** Created by, modified date, version
- **Copy Actions:** One-click copy for IRI, label, JSON export

#### UI Mockup
```
┌─────────────────────────────────────┐
│ Node Details                        │
│                                     │
│ AI:NeuralNetwork                    │ ← Large heading
│ owl:Class                           │ ← Type badge
│                                     │
│ ── Identifiers ────────────────     │
│ IRI: http://ai.org#NeuralNetwork    │
│     [Copy] [Open in Browser]       │
│ Label: Neural Network               │
│ Prefix: AI                          │
│                                     │
│ ── Description ─────────────────    │
│ "A computational model inspired by   │
│  biological neural networks..."     │
│                                     │
│ ── OWL Axioms ──────────────────    │
│ SubClassOf: AI:Agent                │ ← Clickable
│ DisjointWith: BC:Blockchain         │ ← Clickable
│ EquivalentClass: ml:DeepLearning    │
│                                     │
│ ── Properties ──────────────────    │
│ hasLayer: DT:Layer (Range)          │
│ trainedOn: DT:Dataset (Range)       │
│                                     │
│ ── Annotations ─────────────────    │
│ Created: 2024-01-15                 │
│ Author: John Doe                    │
│ Version: 1.2.0                      │
│ Source: ai-ontology.ttl             │
│                                     │
│ ── Relationships (23) ───────────   │
│ Incoming (12):                      │
│   • AI:ConvolutionalNN              │
│   • AI:RecurrentNN                  │
│   • AI:TransformerNet               │
│   [Show all...]                     │
│                                     │
│ Outgoing (11):                      │
│   • DT:Process                      │
│   • DT:Workflow                     │
│   [Show all...]                     │
│                                     │
│ [Export as JSON] [Copy All]         │
└─────────────────────────────────────┘
```

#### Technical Implementation

**Extended Node Type:**
```typescript
interface Node {
  // Existing fields
  id: string;
  type: string;
  label: string;
  iri?: string;
  position: Vector3;
  velocity: Vector3;
  properties: Record<string, any>;

  // New fields
  axioms?: {
    subClassOf?: string[];
    equivalentClass?: string[];
    disjointWith?: string[];
    superClassOf?: string[];
  };
  annotations?: {
    comment?: string;
    description?: string;
    created?: string;
    modified?: string;
    creator?: string;
    version?: string;
    depiction?: string;
  };
  relationships?: {
    incoming: Array<{ id: string; type: string; label: string }>;
    outgoing: Array<{ id: string; type: string; label: string }>;
  };
}
```

**Metadata Parsing (WASM):**
```rust
pub struct OWLAxioms {
    pub sub_class_of: Vec<String>,
    pub equivalent_class: Vec<String>,
    pub disjoint_with: Vec<String>,
    pub union_of: Option<Vec<String>>,
    pub intersection_of: Option<Vec<String>>,
}

pub fn parse_axioms(rdf_node: &Node) -> OWLAxioms {
    // Parse OWL axioms from RDF triples
    // Extract rdfs:subClassOf, owl:equivalentClass, etc.
}
```

**Component Structure:**
- Update `NodeDetailsPanel.tsx` with new sections
- `AxiomsList.tsx` - Display OWL axioms
- `AnnotationsList.tsx` - Display annotations
- `RelationshipsList.tsx` - Navigable relationships
- `CopyButton.tsx` - Copy-to-clipboard component

---

### Feature 6: Multiple Layout Algorithms

**Priority:** Nice-to-Have
**Complexity:** Medium (18 hours)
**Dependencies:** WASM layout engine expansion

#### Description
Multiple graph layout algorithms (force-directed, hierarchical, circular, tree, grid) with live switching and parameter tuning.

#### User Stories
- As a user, I want to switch to circular layout to see domain separation
- As a user, I want hierarchical layout for taxonomies
- As a user, I want to adjust layout parameters in real-time

#### UI Mockup
```
┌─────────────────────────────────────┐
│ Layout Algorithm                    │
│                                     │
│ ● Force-Directed (Default)          │
│ ○ Hierarchical (Top-Down)           │
│ ○ Circular (Concentric)             │
│ ○ Tree (Dendrogram)                 │
│ ○ Grid (Ordered)                    │
│ ○ Radial (Sunburst)                 │
│                                     │
│ ── Parameters ──────────────────    │
│ Link Distance: [====|   ] 150       │
│ Node Spacing:  [===|    ] 100       │
│ Iterations:    [======| ] 300       │
│                                     │
│ [Apply] [Reset] [Animate Transition]│
└─────────────────────────────────────┘
```

#### Layout Algorithm Specifications

**1. Force-Directed (Default)**
- Algorithm: Fruchterman-Reingold
- Best for: General graphs
- Parameters: linkDistance, chargeStrength, gravity

**2. Hierarchical**
- Algorithm: Sugiyama (layered)
- Best for: DAGs, taxonomies
- Parameters: layerSpacing, nodeSpacing, direction

**3. Circular**
- Algorithm: Concentric circles by degree
- Best for: Small-world networks
- Parameters: radius, startAngle, sortBy

**4. Tree**
- Algorithm: Reingold-Tilford
- Best for: Hierarchies, SubClassOf relationships
- Parameters: horizontalSpacing, verticalSpacing

**5. Grid**
- Algorithm: Ordered placement
- Best for: Uniform comparison
- Parameters: columns, rowSpacing, columnSpacing

**6. Radial**
- Algorithm: Sunburst (polar coordinates)
- Best for: Hierarchical data with root
- Parameters: innerRadius, outerRadius

#### Technical Implementation

**WASM Layout Trait:**
```rust
pub trait LayoutAlgorithm {
    fn calculate_positions(
        &self,
        nodes: &[Node],
        edges: &[Edge],
        params: &LayoutParams,
    ) -> HashMap<String, Position>;

    fn supports_animation(&self) -> bool;
    fn get_default_params(&self) -> LayoutParams;
}

pub struct ForceDirectedLayout;
pub struct HierarchicalLayout;
pub struct CircularLayout;
pub struct TreeLayout;
pub struct GridLayout;
pub struct RadialLayout;

impl LayoutAlgorithm for ForceDirectedLayout {
    fn calculate_positions(/* ... */) -> HashMap<String, Position> {
        // Existing force-directed algorithm
    }
}

impl LayoutAlgorithm for CircularLayout {
    fn calculate_positions(
        &self,
        nodes: &[Node],
        edges: &[Edge],
        params: &LayoutParams,
    ) -> HashMap<String, Position> {
        let radius = params.get("radius").unwrap_or(200.0);
        let start_angle = params.get("startAngle").unwrap_or(0.0);

        // Sort nodes by degree
        let mut sorted_nodes: Vec<_> = nodes
            .iter()
            .map(|n| {
                let degree = edges.iter()
                    .filter(|e| e.source == n.id || e.target == n.id)
                    .count();
                (n, degree)
            })
            .collect();
        sorted_nodes.sort_by_key(|(_, degree)| *degree);

        // Place on concentric circles
        let mut positions = HashMap::new();
        let angle_step = 2.0 * PI / nodes.len() as f32;

        for (i, (node, _)) in sorted_nodes.iter().enumerate() {
            let angle = start_angle + (i as f32) * angle_step;
            positions.insert(
                node.id.clone(),
                Position {
                    x: radius * angle.cos(),
                    y: radius * angle.sin(),
                },
            );
        }

        positions
    }
}
```

**State Extension:**
```typescript
interface GraphSettings {
  layoutAlgorithm: 'force' | 'hierarchical' | 'circular' | 'tree' | 'grid' | 'radial';
  layoutParams: Record<string, number>;
  animateLayoutTransition: boolean;
}
```

**Component Structure:**
- `LayoutSelector.tsx` - Algorithm picker
- `LayoutParams.tsx` - Parameter controls
- Update `useWasmSimulation.ts` for algorithm switching
- `LayoutAnimation.ts` - Smooth transitions

---

### Feature 7: Advanced Statistics Dashboard

**Priority:** Nice-to-Have
**Complexity:** Easy (10 hours)
**Dependencies:** Graph analysis algorithms

#### Description
Comprehensive graph metrics dashboard with network analysis statistics, degree distribution, centrality measures, and community detection.

#### UI Mockup
```
┌─────────────────────────────────────┐
│ 📊 Advanced Statistics              │
│                                     │
│ ── Basic Metrics ───────────────    │
│ Nodes:          142                 │
│ Edges:          287                 │
│ Density:        0.034               │
│ Avg Degree:     4.04                │
│ Max Degree:     23 (AI:Agent)       │
│                                     │
│ ── Centrality ──────────────────    │
│ Highest Betweenness:                │
│   1. AI:Agent (0.42)                │
│   2. DT:Workflow (0.38)             │
│   3. BC:SmartContract (0.31)        │
│                                     │
│ Highest PageRank:                   │
│   1. AI:NeuralNetwork (0.12)        │
│   2. DT:Process (0.09)              │
│   3. MV:Player (0.07)               │
│                                     │
│ ── Distribution ─────────────────   │
│ Degree Distribution:                │
│ [====    ] 0-5: 78 nodes            │
│ [==      ] 6-10: 42 nodes           │
│ [=       ] 11-15: 18 nodes          │
│ [        ] 16+: 4 nodes             │
│                                     │
│ ── Connectivity ─────────────────   │
│ Components: 1 (fully connected)     │
│ Diameter: 6                         │
│ Avg Path Length: 3.2                │
│ Clustering Coefficient: 0.34        │
│                                     │
│ ── Communities ──────────────────   │
│ Detected: 5 communities (Louvain)   │
│   • AI cluster: 32 nodes            │
│   • BC cluster: 28 nodes            │
│   • DT cluster: 45 nodes            │
│   • MV cluster: 23 nodes            │
│   • RB cluster: 14 nodes            │
│                                     │
│ [Export Report] [Refresh Stats]     │
└─────────────────────────────────────┘
```

#### Technical Implementation

**Graph Analysis Algorithms (WASM):**
```rust
pub struct GraphStatistics {
    pub basic: BasicMetrics,
    pub centrality: CentralityMetrics,
    pub distribution: DegreeDistribution,
    pub connectivity: ConnectivityMetrics,
    pub communities: CommunityStructure,
}

pub struct BasicMetrics {
    pub node_count: usize,
    pub edge_count: usize,
    pub density: f32,
    pub avg_degree: f32,
    pub max_degree: (String, usize), // (node_id, degree)
}

pub struct CentralityMetrics {
    pub betweenness: Vec<(String, f32)>, // Top 10
    pub closeness: Vec<(String, f32)>,
    pub pagerank: Vec<(String, f32)>,
    pub eigenvector: Vec<(String, f32)>,
}

pub fn calculate_betweenness_centrality(
    nodes: &[Node],
    edges: &[Edge],
) -> HashMap<String, f32> {
    // Brandes' algorithm for betweenness centrality
    let mut betweenness = HashMap::new();

    for node in nodes {
        // BFS from each node
        let paths = bfs_shortest_paths(node, nodes, edges);

        for (target, path_count) in paths {
            for intermediate in path_count.intermediates {
                *betweenness.entry(intermediate).or_insert(0.0) +=
                    path_count.count as f32;
            }
        }
    }

    // Normalize
    let n = nodes.len() as f32;
    betweenness.values_mut().for_each(|v| *v /= (n - 1.0) * (n - 2.0));

    betweenness
}

pub fn detect_communities(
    nodes: &[Node],
    edges: &[Edge],
) -> Vec<Community> {
    // Louvain algorithm for community detection
    louvain_clustering(nodes, edges)
}
```

**Component Structure:**
- `StatisticsDashboard.tsx` - Main dashboard
- `MetricsCard.tsx` - Metric display card
- `DegreeChart.tsx` - Histogram chart
- `CommunityViz.tsx` - Community visualization
- Update `useGraphStore.ts` with advanced statistics

---

### Feature 8: Save/Load Session State

**Priority:** Nice-to-Have
**Complexity:** Medium (14 hours)
**Dependencies:** Browser storage API

#### Description
Save and restore complete visualization state including viewport position, filters, layout, selected nodes, and annotations with session management UI.

#### User Stories
- As a user, I want to save my current view when I pause work
- As a user, I want to share a specific view with colleagues via export file
- As a user, I want to restore yesterday's session automatically

#### UI Mockup
```
┌─────────────────────────────────────┐
│ 💾 Session Management               │
│                                     │
│ Current Session:                    │
│ • Ontology: ai-ontology.ttl         │
│ • Modified: 2025-11-13 14:23        │
│ • Filters: 3 active                 │
│ • Layout: Force-directed            │
│                                     │
│ [Save Current Session]              │
│                                     │
│ ── Saved Sessions ──────────────    │
│ 📁 AI Exploration (Nov 12)          │
│    142 nodes, 287 edges             │
│    [Load] [Delete] [Export]         │
│                                     │
│ 📁 Blockchain Focus (Nov 10)        │
│    67 nodes, 134 edges              │
│    [Load] [Delete] [Export]         │
│                                     │
│ 📁 Auto-save (Nov 13 14:00)         │
│    142 nodes, 287 edges             │
│    [Load] [Delete]                  │
│                                     │
│ ── Options ─────────────────────    │
│ ☑ Auto-save every 5 minutes         │
│ ☑ Restore last session on load      │
│                                     │
│ [Import Session File]               │
└─────────────────────────────────────┘
```

#### Session Data Structure

```typescript
interface SessionState {
  version: string; // Schema version
  metadata: {
    name: string;
    created: string;
    modified: string;
    description?: string;
  };

  ontology: {
    filename: string;
    nodeCount: number;
    edgeCount: number;
    checksum: string; // Verify data integrity
  };

  viewport: {
    zoom: number;
    rotation: [number, number, number];
    target: [number, number, number];
    mode: '2d' | '3d';
  };

  filters: {
    activeFilters: GraphFilter[];
    searchQuery: string;
    visibleEdgeTypes: string[];
    visibleDomains: string[];
  };

  layout: {
    algorithm: string;
    params: Record<string, number>;
    nodePositions?: Record<string, [number, number, number]>; // Optional: save positions
  };

  selection: {
    selectedNode: string | null;
    selectedEdge: string | null;
    bookmarkedNodes: string[];
  };

  settings: GraphSettings;

  annotations?: {
    notes: Record<string, string>; // Node ID -> Note
    highlights: string[]; // Highlighted node IDs
    customColors: Record<string, string>; // Node ID -> Color
  };
}
```

#### Technical Implementation

**Storage Manager:**
```typescript
class SessionStorageManager {
  private storageKey = 'wasmvowl-sessions';

  async saveSession(name: string, state: SessionState): Promise<void> {
    const sessions = await this.getAllSessions();
    sessions[name] = {
      ...state,
      metadata: {
        ...state.metadata,
        modified: new Date().toISOString(),
      },
    };

    // Save to IndexedDB for large sessions
    await this.saveToIndexedDB(this.storageKey, sessions);

    // Also save to localStorage as backup (size permitting)
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(sessions));
    } catch (e) {
      console.warn('localStorage full, using IndexedDB only');
    }
  }

  async loadSession(name: string): Promise<SessionState | null> {
    const sessions = await this.getAllSessions();
    return sessions[name] || null;
  }

  async getAllSessions(): Promise<Record<string, SessionState>> {
    // Try IndexedDB first
    const idbSessions = await this.loadFromIndexedDB(this.storageKey);
    if (idbSessions) return idbSessions;

    // Fallback to localStorage
    const lsSessions = localStorage.getItem(this.storageKey);
    return lsSessions ? JSON.parse(lsSessions) : {};
  }

  async deleteSession(name: string): Promise<void> {
    const sessions = await this.getAllSessions();
    delete sessions[name];
    await this.saveToIndexedDB(this.storageKey, sessions);
  }

  exportSession(session: SessionState): Blob {
    const json = JSON.stringify(session, null, 2);
    return new Blob([json], { type: 'application/json' });
  }

  async importSession(file: File): Promise<SessionState> {
    const text = await file.text();
    const session = JSON.parse(text);

    // Validate schema version
    if (!this.validateSession(session)) {
      throw new Error('Invalid session file');
    }

    return session;
  }

  private validateSession(session: any): boolean {
    return (
      session.version &&
      session.metadata &&
      session.ontology &&
      session.viewport
    );
  }
}
```

**Auto-save Hook:**
```typescript
function useAutoSave(interval = 300000) { // 5 minutes
  const graphState = useGraphStore();
  const uiState = useUIStore();

  useEffect(() => {
    const timer = setInterval(() => {
      const sessionState = captureSessionState(graphState, uiState);
      sessionStorage.saveSession('auto-save', sessionState);
      console.log('Auto-saved session');
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);
}
```

**Component Structure:**
- `SessionManager.tsx` - Session list and controls
- `SessionSaveDialog.tsx` - Save session modal
- `SessionLoadDialog.tsx` - Load session modal
- `SessionImportExport.tsx` - Import/export UI
- `useAutoSave.ts` - Auto-save hook

---

### Feature 9: Export Enhancements (Filtered Subgraphs)

**Priority:** Advanced
**Complexity:** Medium (14 hours)
**Dependencies:** Export utilities, graph filtering

#### Description
Export specific subgraphs, filtered views, or selected nodes with multiple format support (GraphML, Cytoscape JSON, GEXF, D3 JSON).

#### User Stories
- As a user, I want to export only AI-related nodes for external analysis
- As a user, I want to export to GraphML for use in Gephi
- As a user, I want to export selected nodes with their 2-hop neighborhood

#### UI Mockup
```
┌─────────────────────────────────────┐
│ 📤 Advanced Export                  │
│                                     │
│ ── Export Scope ────────────────    │
│ ● Full Graph (142 nodes, 287 edges) │
│ ○ Filtered View (67 nodes, 89 edges)│
│ ○ Selected + Neighbors (12 nodes)   │
│ ○ Custom Selection                  │
│                                     │
│ Neighborhood Distance: [=|  ] 1 hop │
│                                     │
│ ── Export Format ────────────────   │
│ ● GraphML (XML)                     │
│ ○ Cytoscape JSON                    │
│ ○ GEXF (Gephi)                      │
│ ○ D3 Force JSON                     │
│ ○ CSV (Nodes + Edges)               │
│ ○ RDF/Turtle (OWL)                  │
│                                     │
│ ── Options ─────────────────────    │
│ ☑ Include positions                 │
│ ☑ Include metadata                  │
│ ☑ Include annotations               │
│ ☐ Compress (ZIP)                    │
│                                     │
│ [Preview] [Export] [Cancel]         │
└─────────────────────────────────────┘
```

#### Export Format Specifications

**1. GraphML**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns">
  <key id="label" for="node" attr.name="label" attr.type="string"/>
  <key id="type" for="node" attr.name="type" attr.type="string"/>
  <key id="iri" for="node" attr.name="iri" attr.type="string"/>

  <graph id="G" edgedefault="directed">
    <node id="AI:Agent">
      <data key="label">Agent</data>
      <data key="type">owl:Class</data>
      <data key="iri">http://ai.org#Agent</data>
    </node>
    <edge id="e1" source="AI:NeuralNetwork" target="AI:Agent">
      <data key="type">rdfs:subClassOf</data>
    </edge>
  </graph>
</graphml>
```

**2. Cytoscape JSON**
```json
{
  "elements": {
    "nodes": [
      {
        "data": {
          "id": "AI:Agent",
          "label": "Agent",
          "type": "owl:Class",
          "iri": "http://ai.org#Agent"
        },
        "position": { "x": 100, "y": 200 }
      }
    ],
    "edges": [
      {
        "data": {
          "id": "e1",
          "source": "AI:NeuralNetwork",
          "target": "AI:Agent",
          "type": "rdfs:subClassOf"
        }
      }
    ]
  }
}
```

**3. GEXF (Gephi)**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<gexf xmlns="http://www.gexf.net/1.2draft" version="1.2">
  <graph mode="static" defaultedgetype="directed">
    <attributes class="node">
      <attribute id="0" title="type" type="string"/>
      <attribute id="1" title="iri" type="string"/>
    </attributes>
    <nodes>
      <node id="AI:Agent" label="Agent">
        <attvalues>
          <attvalue for="0" value="owl:Class"/>
          <attvalue for="1" value="http://ai.org#Agent"/>
        </attvalues>
      </node>
    </nodes>
    <edges>
      <edge id="0" source="AI:NeuralNetwork" target="AI:Agent" type="subClassOf"/>
    </edges>
  </graph>
</gexf>
```

#### Technical Implementation

**Export Utilities:**
```typescript
class GraphExporter {
  exportGraphML(
    nodes: Map<string, Node>,
    edges: Map<string, Edge>,
    options: ExportOptions
  ): string {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<graphml xmlns="http://graphml.graphdrawing.org/xmlns">\n';

    // Define keys
    xml += '  <key id="label" for="node" attr.name="label" attr.type="string"/>\n';
    xml += '  <key id="type" for="node" attr.name="type" attr.type="string"/>\n';

    xml += '  <graph id="G" edgedefault="directed">\n';

    // Export nodes
    nodes.forEach((node, id) => {
      xml += `    <node id="${this.escapeXML(id)}">\n`;
      xml += `      <data key="label">${this.escapeXML(node.label)}</data>\n`;
      xml += `      <data key="type">${this.escapeXML(node.type)}</data>\n`;
      if (options.includePositions) {
        xml += `      <data key="x">${node.position.x}</data>\n`;
        xml += `      <data key="y">${node.position.y}</data>\n`;
      }
      xml += '    </node>\n';
    });

    // Export edges
    let edgeId = 0;
    edges.forEach((edge) => {
      xml += `    <edge id="e${edgeId++}" source="${this.escapeXML(edge.source)}" target="${this.escapeXML(edge.target)}">\n`;
      xml += `      <data key="type">${this.escapeXML(edge.type)}</data>\n`;
      xml += '    </edge>\n';
    });

    xml += '  </graph>\n';
    xml += '</graphml>';

    return xml;
  }

  exportCytoscapeJSON(
    nodes: Map<string, Node>,
    edges: Map<string, Edge>
  ): string {
    const elements = {
      nodes: Array.from(nodes.values()).map(node => ({
        data: {
          id: node.id,
          label: node.label,
          type: node.type,
          iri: node.iri,
        },
        position: { x: node.position.x, y: node.position.y },
      })),
      edges: Array.from(edges.values()).map(edge => ({
        data: {
          id: edge.id,
          source: edge.source,
          target: edge.target,
          type: edge.type,
        },
      })),
    };

    return JSON.stringify({ elements }, null, 2);
  }

  private escapeXML(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}
```

**Subgraph Extraction:**
```typescript
function extractSubgraph(
  nodes: Map<string, Node>,
  edges: Map<string, Edge>,
  seedNodes: Set<string>,
  hops: number
): { nodes: Map<string, Node>; edges: Map<string, Edge> } {
  const includedNodes = new Set<string>(seedNodes);

  // BFS for k-hop neighborhood
  for (let hop = 0; hop < hops; hop++) {
    const currentNodes = Array.from(includedNodes);
    currentNodes.forEach(nodeId => {
      // Find connected nodes
      edges.forEach(edge => {
        if (edge.source === nodeId) includedNodes.add(edge.target);
        if (edge.target === nodeId) includedNodes.add(edge.source);
      });
    });
  }

  // Extract nodes
  const subgraphNodes = new Map<string, Node>();
  includedNodes.forEach(id => {
    const node = nodes.get(id);
    if (node) subgraphNodes.set(id, node);
  });

  // Extract edges
  const subgraphEdges = new Map<string, Edge>();
  edges.forEach((edge, id) => {
    if (includedNodes.has(edge.source) && includedNodes.has(edge.target)) {
      subgraphEdges.set(id, edge);
    }
  });

  return { nodes: subgraphNodes, edges: subgraphEdges };
}
```

**Component Structure:**
- `ExportDialog.tsx` - Export configuration modal
- `ExportPreview.tsx` - Preview before export
- `GraphExporter.ts` - Format conversion utilities
- Update `TopMenuBar.tsx` with export button

---

### Feature 10: Performance Controls (FPS Limiter, LOD)

**Priority:** Advanced
**Complexity:** Easy (10 hours)
**Dependencies:** R3F rendering pipeline

#### Description
User-adjustable performance controls including FPS limiter, LOD (Level of Detail) distance thresholds, simulation speed, and rendering quality presets.

#### User Stories
- As a user on a low-end laptop, I want to limit FPS to 30 to reduce CPU usage
- As a user with a large graph, I want to enable LOD to hide labels when zoomed out
- As a user, I want a "Performance" preset for smooth experience with 1000+ nodes

#### UI Mockup
```
┌─────────────────────────────────────┐
│ ⚙️ Performance Settings              │
│                                     │
│ ── Quick Presets ───────────────    │
│ ○ Quality (60 FPS, high detail)     │
│ ● Balanced (30 FPS, medium detail)  │
│ ○ Performance (30 FPS, low detail)  │
│ ○ Custom                            │
│                                     │
│ ── Rendering ────────────────────   │
│ Target FPS: [====|   ] 30           │
│ Current: 29.8 FPS ✓                 │
│                                     │
│ LOD Enabled: ☑                      │
│ LOD Distance: [===|    ] 500        │
│ Label Culling: [====|  ] 800        │
│                                     │
│ Anti-aliasing: ☑ MSAA 4x            │
│ Shadows: ☐ (Performance +15 FPS)    │
│ Bloom Effects: ☐ (+10 FPS)          │
│                                     │
│ ── Simulation ───────────────────   │
│ Simulation Speed: [==|    ] 0.5x    │
│ Max Iterations/Frame: [=|   ] 1     │
│                                     │
│ ── Debug Info ───────────────────   │
│ Draw Calls: 287                     │
│ Triangles: 12,450                   │
│ Memory: 42 MB                       │
│                                     │
│ [Apply] [Reset to Default]          │
└─────────────────────────────────────┘
```

#### Performance Presets

```typescript
const PERFORMANCE_PRESETS = {
  quality: {
    maxFPS: 60,
    lodEnabled: false,
    lodDistance: 1000,
    labelCullingDistance: 2000,
    antialiasing: 'msaa-4x',
    shadows: true,
    bloom: true,
    simulationSpeed: 1.0,
    maxIterationsPerFrame: 3,
  },
  balanced: {
    maxFPS: 30,
    lodEnabled: true,
    lodDistance: 500,
    labelCullingDistance: 800,
    antialiasing: 'fxaa',
    shadows: false,
    bloom: false,
    simulationSpeed: 1.0,
    maxIterationsPerFrame: 2,
  },
  performance: {
    maxFPS: 30,
    lodEnabled: true,
    lodDistance: 300,
    labelCullingDistance: 500,
    antialiasing: 'none',
    shadows: false,
    bloom: false,
    simulationSpeed: 0.5,
    maxIterationsPerFrame: 1,
  },
};
```

#### Technical Implementation

**FPS Limiter:**
```typescript
function useFPSLimiter(targetFPS: number) {
  const frameTimeRef = useRef(0);
  const minFrameTime = 1000 / targetFPS;

  useFrame((state, delta) => {
    const now = performance.now();
    const elapsed = now - frameTimeRef.current;

    if (elapsed < minFrameTime) {
      // Skip frame
      return;
    }

    frameTimeRef.current = now;

    // Render frame
    state.gl.render(state.scene, state.camera);
  });
}
```

**LOD System:**
```typescript
function ClassNodeWithLOD({ node }: ClassNodeProps) {
  const camera = useThree((state) => state.camera);
  const lodSettings = useUIStore((state) => state.settings.lod);

  const distance = useMemo(() => {
    return camera.position.distanceTo(
      new THREE.Vector3(node.position.x, node.position.y, node.position.z)
    );
  }, [camera.position, node.position]);

  // Determine detail level
  const detailLevel = useMemo(() => {
    if (!lodSettings.enabled) return 'high';
    if (distance > lodSettings.labelCullingDistance) return 'minimal';
    if (distance > lodSettings.lodDistance) return 'medium';
    return 'high';
  }, [distance, lodSettings]);

  return (
    <group>
      {/* Always render node */}
      <Circle
        radius={detailLevel === 'minimal' ? 8 : 12}
        segments={detailLevel === 'minimal' ? 16 : 32}
      >
        <meshBasicMaterial color={node.color} />
      </Circle>

      {/* Conditionally render label */}
      {detailLevel !== 'minimal' && (
        <Text
          position={[0, -20, 0]}
          fontSize={detailLevel === 'high' ? 12 : 10}
        >
          {node.label}
        </Text>
      )}
    </group>
  );
}
```

**Performance Monitor:**
```typescript
function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fps: 60,
    drawCalls: 0,
    triangles: 0,
    memory: 0,
  });

  useFrame((state) => {
    // FPS
    const fps = 1 / state.clock.getDelta();

    // Renderer info
    const info = state.gl.info;

    setMetrics({
      fps: Math.round(fps),
      drawCalls: info.render.calls,
      triangles: info.render.triangles,
      memory: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
    });
  });

  return metrics;
}
```

**Simulation Speed Control:**
```typescript
function useWasmSimulation({ speed = 1.0 }: { speed?: number }) {
  useFrame((state, delta) => {
    if (!wasmInstance) return;

    // Adjust delta based on speed
    const adjustedDelta = delta * speed;
    const iterations = Math.floor(adjustedDelta * 60); // 60 iterations per second at 1.0x

    for (let i = 0; i < Math.min(iterations, maxIterationsPerFrame); i++) {
      wasmInstance.tick();
    }

    // Update node positions from WASM
    updateNodePositions();
  });
}
```

**Component Structure:**
- `PerformancePanel.tsx` - Settings panel
- `PerformanceMonitor.tsx` - Real-time metrics
- `PresetSelector.tsx` - Quick preset buttons
- Update `GraphCanvas.tsx` with LOD system
- Update `useWasmSimulation.ts` with speed control

---

## Technical Architecture

### State Management Extensions

#### useUIStore.ts Extensions
```typescript
interface UIStore {
  // Search (Feature 1)
  searchQuery: string;
  searchResults: string[];
  currentSearchIndex: number;

  // Edge Filtering (Feature 2)
  visibleEdgeTypes: Set<string>;

  // Clustering (Feature 3)
  clusteringEnabled: boolean;
  clusterStrength: number;
  visibleDomains: Set<string>;

  // Hierarchy (Feature 4)
  hierarchyView: boolean;
  hierarchyDepth: number;

  // Layout (Feature 6)
  layoutAlgorithm: LayoutAlgorithm;
  layoutParams: Record<string, number>;

  // Sessions (Feature 8)
  currentSession: string | null;

  // Performance (Feature 10)
  performancePreset: 'quality' | 'balanced' | 'performance' | 'custom';
  lodSettings: LODSettings;
}
```

#### useGraphStore.ts Extensions
```typescript
interface GraphState {
  // Enhanced node data (Feature 5)
  nodeAxioms: Map<string, OWLAxioms>;
  nodeAnnotations: Map<string, Annotations>;

  // Statistics (Feature 7)
  advancedStatistics: AdvancedStatistics | null;

  // Actions
  calculateAdvancedStatistics: () => void;
  exportSubgraph: (nodeIds: string[], hops: number) => GraphData;
}
```

### WASM API Extensions

```rust
// lib.rs additions

#[wasm_bindgen]
impl WebVowl {
    // Clustering (Feature 3)
    pub fn set_clustering(&mut self, enabled: bool, strength: f32) {
        self.cluster_config.enabled = enabled;
        self.cluster_config.strength = strength;
    }

    // Layout algorithms (Feature 6)
    pub fn set_layout_algorithm(&mut self, algorithm: &str) {
        self.layout = match algorithm {
            "force" => Box::new(ForceDirectedLayout::new()),
            "hierarchical" => Box::new(HierarchicalLayout::new()),
            "circular" => Box::new(CircularLayout::new()),
            "tree" => Box::new(TreeLayout::new()),
            _ => Box::new(ForceDirectedLayout::new()),
        };
    }

    // Statistics (Feature 7)
    pub fn calculate_betweenness_centrality(&self) -> JsValue {
        let centrality = calculate_betweenness(&self.nodes, &self.edges);
        serde_wasm_bindgen::to_value(&centrality).unwrap()
    }

    pub fn detect_communities(&self) -> JsValue {
        let communities = louvain_clustering(&self.nodes, &self.edges);
        serde_wasm_bindgen::to_value(&communities).unwrap()
    }
}
```

### Component Hierarchy

```
App.tsx
├── TopMenuBar.tsx (enhanced with export options)
├── Sidebar.tsx
│   ├── SearchPanel.tsx (Feature 1)
│   ├── EdgeTypeFilter.tsx (Feature 2)
│   ├── DomainClusterPanel.tsx (Feature 3)
│   ├── HierarchyView.tsx (Feature 4)
│   ├── NodeDetailsPanel.tsx (enhanced - Feature 5)
│   ├── LayoutSelector.tsx (Feature 6)
│   ├── StatisticsDashboard.tsx (Feature 7)
│   ├── SessionManager.tsx (Feature 8)
│   └── PerformancePanel.tsx (Feature 10)
├── GraphCanvas.tsx
│   ├── GraphScene.tsx (with LOD)
│   ├── ClassNode.tsx (enhanced highlighting)
│   └── PropertyEdge.tsx (conditional rendering)
└── ExportDialog.tsx (Feature 9)
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1) - Must-Have Features
**Goal:** Core functionality improvements
**Time:** 40 hours

#### Sprint 1.1: Search & Filtering (18 hours)
- [ ] **Feature 1: Semantic Search** (12h)
  - Implement search algorithm
  - Create SearchBar component
  - Add result highlighting
  - Test with large datasets

- [ ] **Feature 2: Edge Type Filtering** (6h)
  - Update filter system
  - Create EdgeTypeFilter component
  - Add color legend

#### Sprint 1.2: Enhanced Details (22 hours)
- [ ] **Feature 5: Enhanced Node Details** (10h)
  - Parse OWL axioms in WASM
  - Update NodeDetailsPanel
  - Add copy-to-clipboard
  - Test metadata extraction

- [ ] **Feature 3: Domain Clustering** (12h)
  - Implement domain detection
  - Add WASM clustering forces
  - Create DomainClusterPanel
  - Test with multi-domain ontologies

### Phase 2: Visualization (Week 2) - Must-Have + Nice-to-Have
**Goal:** Advanced visualization capabilities
**Time:** 44 hours

#### Sprint 2.1: Hierarchy View (22 hours)
- [ ] **Feature 4: Hierarchy View** (22h)
  - Build hierarchy tree structure
  - Implement tree layout algorithm
  - Create HierarchyView component
  - Add expand/collapse functionality
  - Test with deep hierarchies

#### Sprint 2.2: Layout Algorithms (22 hours)
- [ ] **Feature 6: Multiple Layouts** (22h)
  - Implement circular layout
  - Implement hierarchical layout
  - Implement tree layout
  - Create LayoutSelector component
  - Add smooth transitions

### Phase 3: Analytics & Persistence (Week 3) - Nice-to-Have
**Goal:** Advanced features and data management
**Time:** 32 hours

#### Sprint 3.1: Statistics (10 hours)
- [ ] **Feature 7: Advanced Statistics** (10h)
  - Implement centrality algorithms in WASM
  - Implement community detection
  - Create StatisticsDashboard component
  - Add degree distribution chart

#### Sprint 3.2: Session Management (22 hours)
- [ ] **Feature 8: Save/Load Sessions** (22h)
  - Design session data structure
  - Implement SessionStorageManager
  - Create SessionManager UI
  - Add auto-save functionality
  - Test import/export

### Phase 4: Advanced Features (Week 4) - Advanced
**Goal:** Professional-grade export and performance
**Time:** 24 hours

#### Sprint 4.1: Export Enhancements (14 hours)
- [ ] **Feature 9: Export Formats** (14h)
  - Implement GraphML exporter
  - Implement Cytoscape JSON exporter
  - Implement GEXF exporter
  - Create ExportDialog component
  - Test with various tools

#### Sprint 4.2: Performance Controls (10 hours)
- [ ] **Feature 10: Performance Settings** (10h)
  - Implement FPS limiter
  - Implement LOD system
  - Create PerformancePanel component
  - Add performance presets
  - Test with 1000+ node graphs

### Total Development Time: 140 hours (3.5 weeks)

---

## Performance Considerations

### Optimization Strategies

#### 1. Search Performance
**Challenge:** Real-time search with 1000+ nodes
**Solution:**
- Use Web Workers for search computation
- Implement search index with inverted index structure
- Debounce search input (300ms)
- Limit results to top 100 matches

```typescript
// Web Worker for search
// search.worker.ts
self.onmessage = (e) => {
  const { query, nodes } = e.data;
  const results = performSearch(query, nodes);
  self.postMessage(results);
};
```

#### 2. LOD Performance
**Challenge:** Maintain 60 FPS with large graphs
**Solution:**
- Distance-based culling for labels
- Geometry simplification for distant nodes
- Frustum culling for off-screen nodes
- Instance rendering for similar nodes

**Performance Gains:**
- Label culling: +25 FPS (500 nodes)
- Geometry LOD: +15 FPS (500 nodes)
- Frustum culling: +10 FPS (500 nodes)
- **Total: 60 FPS with 800+ nodes (vs 200 baseline)**

#### 3. Statistics Calculation
**Challenge:** Betweenness centrality O(n³) complexity
**Solution:**
- Compute in WASM (10x faster than JavaScript)
- Use approximate algorithms for >500 nodes
- Cache results and update incrementally
- Compute in Web Worker to avoid UI blocking

**Performance:**
- Exact: 500 nodes in 2 seconds
- Approximate: 1000 nodes in 1 second
- Incremental update: 50ms per node change

#### 4. Session Storage
**Challenge:** Store large graphs (>10MB)
**Solution:**
- Use IndexedDB for storage (no size limit)
- Compress session data with LZ-string
- Store positions separately (optional)
- Lazy load session metadata

**Storage Efficiency:**
- Uncompressed: 10MB (1000 nodes)
- Compressed: 2MB (80% reduction)
- Metadata only: 50KB (for list view)

---

## Dependencies & Risks

### Technical Dependencies

#### Required Libraries

| Library | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| zustand | ^5.0.0 | State management | Low (already used) |
| immer | ^10.0.0 | Immutable updates | Low (already used) |
| @react-three/fiber | ^9.4.0 | WebGL rendering | Low (already used) |
| lz-string | ^1.5.0 | Session compression | Low (stable) |
| fast-xml-parser | ^4.3.0 | GraphML export | Medium (new) |

#### WASM Extensions

| Feature | Rust Crates | Complexity | Risk Level |
|---------|-------------|------------|------------|
| Clustering | petgraph | Medium | Low |
| Centrality | petgraph | High | Medium |
| Tree Layout | custom | High | High |
| Community Detection | louvain | Medium | Medium |

### Risk Assessment

#### High-Risk Items

**1. Hierarchy View Tree Layout**
- **Risk:** Complex algorithm, edge cases
- **Mitigation:**
  - Start with simple Reingold-Tilford
  - Use petgraph for DAG detection
  - Extensive testing with real ontologies
  - Fallback to force-directed for cyclic graphs

**2. Community Detection Performance**
- **Risk:** Slow for large graphs (>1000 nodes)
- **Mitigation:**
  - Use approximate Louvain algorithm
  - Compute in Web Worker
  - Add progress indicator
  - Cache results

#### Medium-Risk Items

**1. Session State Complexity**
- **Risk:** State schema changes break saved sessions
- **Mitigation:**
  - Version session schema
  - Implement migration functions
  - Validate on import
  - Provide fallback to default state

**2. Export Format Compatibility**
- **Risk:** Generated files don't work in target tools
- **Mitigation:**
  - Test with Gephi, Cytoscape, Graphia
  - Follow official format specifications
  - Validate XML/JSON schema
  - Provide example files

#### Low-Risk Items

**1. Search Performance**
- **Mitigation:** Web Workers, debouncing, indexing

**2. Edge Type Filtering**
- **Mitigation:** Simple implementation, existing pattern

**3. Performance Controls**
- **Mitigation:** Well-established techniques (LOD, FPS limiting)

---

## Priority Matrix

### Implementation Priority

```
High Impact, Low Complexity (Implement First):
├── Feature 2: Edge Type Filtering (10h)
├── Feature 5: Enhanced Node Details (10h)
└── Feature 10: Performance Controls (10h)

High Impact, Medium Complexity (Implement Second):
├── Feature 1: Semantic Search (12h)
├── Feature 3: Domain Clustering (18h)
└── Feature 7: Statistics Dashboard (10h)

High Impact, High Complexity (Implement Third):
├── Feature 4: Hierarchy View (22h)
└── Feature 6: Layout Algorithms (18h)

Medium Impact (Implement Fourth):
├── Feature 8: Save/Load Sessions (14h)
└── Feature 9: Export Enhancements (14h)
```

### User Value vs. Effort

```
                High User Value
                      │
      Feature 1       │      Feature 4
      (Search)        │   (Hierarchy)
                      │
      Feature 5   ────┼──── Feature 6
    (Node Details)    │    (Layouts)
                      │
                      │
───────────────────── ┼ ─────────────────
    Low Effort        │    High Effort
                      │
      Feature 2       │      Feature 8
    (Edge Filter)     │   (Sessions)
                      │
      Feature 10      │      Feature 9
    (Performance)     │    (Export)
                      │
                Low User Value
```

---

## Success Metrics

### Performance Targets

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Search latency | N/A | <100ms | 1000 nodes |
| Hierarchy build | N/A | <200ms | 500 nodes |
| Statistics calc | N/A | <2s | 500 nodes |
| Session save | N/A | <500ms | 1000 nodes |
| Export time | 2s | <3s | 1000 nodes |
| FPS (with LOD) | 25 | 60 | 800 nodes |

### User Experience Metrics

| Feature | Success Criteria |
|---------|------------------|
| Search | >90% of users find target nodes in <10 seconds |
| Hierarchy | >80% prefer hierarchy view for taxonomies |
| Clustering | >70% find domain separation helpful |
| Statistics | >60% use statistics for analysis |
| Sessions | >50% save sessions regularly |

---

## Future Enhancements (Beyond Scope)

### Potential Features for v2.0

1. **Collaborative Editing**
   - Real-time multi-user annotations
   - Shared sessions via WebSocket
   - User presence indicators

2. **AI-Powered Analysis**
   - Automatic ontology quality checks
   - Pattern detection (anti-patterns, duplicates)
   - Intelligent clustering recommendations

3. **Temporal Visualization**
   - Ontology evolution over time
   - Version comparison (diff view)
   - Change history timeline

4. **Advanced Query Interface**
   - SPARQL query builder
   - Visual query construction
   - Query result highlighting

5. **Custom Node Styling**
   - User-defined color schemes
   - Icon support for node types
   - Conditional formatting rules

---

## Conclusion

This design document outlines a comprehensive enhancement plan for WasmVOWL, transforming it from a basic visualizer into a professional-grade ontology exploration platform. The 10 proposed features address critical gaps in search, filtering, analysis, and export capabilities while maintaining the high-performance WASM-powered architecture.

### Key Takeaways

1. **Balanced Approach:** Mix of must-have (5), nice-to-have (3), and advanced (2) features
2. **Realistic Timeline:** 140 hours (3.5 weeks) with phased implementation
3. **Performance-First:** All features designed with 60 FPS target
4. **Risk-Aware:** Identified risks with concrete mitigation strategies
5. **User-Centric:** Features ranked by user value and effort

### Next Steps

1. **Review & Approval:** Present to stakeholders for feedback
2. **Prototyping:** Build mockups for Feature 1, 2, 5 (low-hanging fruit)
3. **WASM Planning:** Design Rust module extensions for clustering and statistics
4. **Sprint Planning:** Break down Phase 1 into actionable tickets
5. **UI Design:** Create high-fidelity mockups in Figma

### Recommendation

**Start with Phase 1 (Foundation)** - implementing Features 1, 2, 3, and 5 provides immediate value while establishing patterns for more complex features. This approach delivers 40% of the functionality in 35% of the time, allowing for early user feedback and course correction.

---

**Document Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Awaiting Review
**Next Review:** 2025-11-20
