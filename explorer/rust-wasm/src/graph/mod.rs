//! Graph data structures and operations
//!
//! This module provides the core graph structures for representing
//! the ontology as a network of nodes and edges.

pub mod node;
pub mod edge;
pub mod builder;
pub mod pinning;
pub mod statistics;

pub use statistics::GraphStatistics;

use crate::{Result, VowlError};
use petgraph::graph::{DiGraph, NodeIndex};
use std::collections::HashMap;

/// Main graph structure for ontology visualization
#[derive(Debug, Clone)]
pub struct VowlGraph {
    /// Underlying directed graph
    graph: DiGraph<Node, Edge>,

    /// Map from node ID to graph index
    node_map: HashMap<String, NodeIndex>,

    /// Graph metadata
    metadata: GraphMetadata,
}

/// Graph metadata and statistics
#[derive(Debug, Clone, Default)]
pub struct GraphMetadata {
    /// Total number of classes
    pub class_count: usize,

    /// Total number of properties
    pub property_count: usize,

    /// Maximum node degree
    pub max_degree: usize,

    /// Graph density
    pub density: f64,
}

/// Graph node representing a class or datatype
#[derive(Debug, Clone, PartialEq, serde::Serialize, serde::Deserialize)]
pub struct Node {
    /// Unique identifier
    pub id: String,

    /// Display label
    pub label: String,

    /// Node type
    pub node_type: NodeType,

    /// Visual attributes
    pub visual: VisualAttributes,

    /// Semantic attributes
    pub semantic: SemanticAttributes,
}

/// Set operator types for complex class expressions
#[derive(Debug, Clone, PartialEq, serde::Serialize, serde::Deserialize)]
pub enum SetOperator {
    /// Union of classes
    UnionOf,
    /// Intersection of classes
    IntersectionOf,
    /// Complement of a class
    ComplementOf,
    /// Disjoint union of classes
    DisjointUnionOf,
}

/// Type of graph node
#[derive(Debug, Clone, PartialEq, serde::Serialize, serde::Deserialize)]
pub enum NodeType {
    /// OWL Class
    Class,

    /// Datatype
    Datatype,

    /// Special node (Thing, Nothing, etc.)
    Special(String),

    /// Set operator node (union, intersection, etc.)
    SetOperator(SetOperator),
}

/// Visual attributes for rendering
#[derive(Debug, Clone, PartialEq, Default, serde::Serialize, serde::Deserialize)]
pub struct VisualAttributes {
    /// X coordinate
    pub x: f64,

    /// Y coordinate
    pub y: f64,

    /// Velocity X (for force simulation)
    pub vx: f64,

    /// Velocity Y (for force simulation)
    pub vy: f64,

    /// Is this node fixed?
    pub fixed: bool,

    /// Visual weight/size
    pub weight: f64,

    /// Color (hex)
    pub color: Option<String>,

    /// Is visible?
    pub visible: bool,
}

/// Semantic attributes
#[derive(Debug, Clone, PartialEq, Default, serde::Serialize, serde::Deserialize)]
pub struct SemanticAttributes {
    /// IRI
    pub iri: String,

    /// Is external?
    pub external: bool,

    /// Equivalent classes
    pub equivalent: Vec<String>,

    /// Individual count
    pub individuals: Option<usize>,

    /// Ontology metadata from Phase 2 parser
    pub ontology_meta: Option<crate::ontology::ClassOntologyMetadata>,
}

/// Graph edge representing a property
#[derive(Debug, Clone, PartialEq)]
pub struct Edge {
    /// Property identifier
    pub id: String,

    /// Display label
    pub label: String,

    /// Edge type
    pub edge_type: EdgeType,

    /// Property characteristics
    pub characteristics: EdgeCharacteristics,

    /// Semantic relationship type
    pub relation_type: Option<SemanticRelationType>,

    /// Inverse of this property (Phase 11)
    pub inverse_of: Option<String>,

    /// Properties equivalent to this one (Phase 11)
    pub equivalent_to: Vec<String>,

    /// Properties disjoint with this one (Phase 11)
    pub disjoint_with: Vec<String>,
}

/// Type of graph edge
#[derive(Debug, Clone, PartialEq)]
pub enum EdgeType {
    /// Object property
    ObjectProperty,

    /// Datatype property
    DatatypeProperty,

    /// Subclass relation
    SubClass,

    /// Special relation
    Special(String),
}

/// Semantic relationship types for ontology edges
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum SemanticRelationType {
    /// SubClassOf relationship
    SubClassOf,

    /// Enables a capability
    EnablesCapability,

    /// Uses a technology
    UsesTechnology,

    /// Requires infrastructure
    RequiresInfrastructure,

    /// Supports a process
    SupportsProcess,

    /// General related-to relationship
    RelatedTo,

    /// Part-of relationship
    PartOf,

    /// Object property relationship
    ObjectProperty,

    /// Datatype property relationship
    DatatypeProperty,

    /// Other/unknown relationship
    Other,
}

/// Edge characteristics
#[derive(Debug, Clone, PartialEq, Default)]
pub struct EdgeCharacteristics {
    /// Is functional
    pub functional: bool,

    /// Is inverse functional
    pub inverse_functional: bool,

    /// Is transitive
    pub transitive: bool,

    /// Is symmetric
    pub symmetric: bool,

    /// Cardinality
    pub cardinality: Option<(Option<u32>, Option<u32>)>,
}

impl VowlGraph {
    /// Create a new empty graph
    pub fn new() -> Self {
        Self {
            graph: DiGraph::new(),
            node_map: HashMap::new(),
            metadata: GraphMetadata::default(),
        }
    }

    /// Add a node to the graph
    pub fn add_node(&mut self, node: Node) -> Result<NodeIndex> {
        if self.node_map.contains_key(&node.id) {
            return Err(VowlError::GraphError(format!(
                "Node with id '{}' already exists",
                node.id
            )));
        }

        let id = node.id.clone();
        let index = self.graph.add_node(node);
        self.node_map.insert(id, index);

        Ok(index)
    }

    /// Add an edge to the graph
    pub fn add_edge(&mut self, from: &str, to: &str, edge: Edge) -> Result<()> {
        let from_idx = self
            .node_map
            .get(from)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", from)))?;

        let to_idx = self
            .node_map
            .get(to)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", to)))?;

        self.graph.add_edge(*from_idx, *to_idx, edge);

        Ok(())
    }

    /// Get a node by ID
    pub fn get_node(&self, id: &str) -> Option<&Node> {
        self.node_map.get(id).and_then(|idx| self.graph.node_weight(*idx))
    }

    /// Get a mutable node by ID
    pub fn get_node_mut(&mut self, id: &str) -> Option<&mut Node> {
        self.node_map
            .get(id)
            .copied()
            .and_then(move |idx| self.graph.node_weight_mut(idx))
    }

    /// Get all nodes
    pub fn nodes(&self) -> Vec<&Node> {
        self.graph.node_weights().collect()
    }

    /// Get all edges
    pub fn edges(&self) -> Vec<&Edge> {
        self.graph.edge_weights().collect()
    }

    /// Get node count
    pub fn node_count(&self) -> usize {
        self.graph.node_count()
    }

    /// Get edge count
    pub fn edge_count(&self) -> usize {
        self.graph.edge_count()
    }

    /// Get neighbors of a node
    pub fn neighbors(&self, id: &str) -> Result<Vec<&Node>> {
        let idx = self
            .node_map
            .get(id)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", id)))?;

        let neighbors: Vec<&Node> = self
            .graph
            .neighbors(*idx)
            .filter_map(|n| self.graph.node_weight(n))
            .collect();

        Ok(neighbors)
    }

    /// Calculate node degree
    pub fn degree(&self, id: &str) -> Result<usize> {
        let idx = self
            .node_map
            .get(id)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", id)))?;

        Ok(self.graph.neighbors(*idx).count())
    }

    /// Calculate node degree excluding datatype properties
    /// This is useful for filtering by degree in visualizations where
    /// datatype connections are less semantically important
    pub fn non_datatype_degree(&self, node_id: &str) -> Result<usize> {
        use petgraph::Direction;

        let idx = self
            .node_map
            .get(node_id)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", node_id)))?;

        // Count both incoming and outgoing edges, excluding datatype connections
        let outgoing = self
            .graph
            .neighbors_directed(*idx, Direction::Outgoing)
            .filter(|neighbor_idx| {
                if let Some(node) = self.graph.node_weight(*neighbor_idx) {
                    node.node_type != NodeType::Datatype
                } else {
                    false
                }
            })
            .count();

        let incoming = self
            .graph
            .neighbors_directed(*idx, Direction::Incoming)
            .filter(|neighbor_idx| {
                if let Some(node) = self.graph.node_weight(*neighbor_idx) {
                    node.node_type != NodeType::Datatype
                } else {
                    false
                }
            })
            .count();

        Ok(outgoing + incoming)
    }

    /// Filter nodes by minimum degree (for large graph visualization)
    /// Nodes with degree below min_degree will be hidden
    pub fn filter_by_degree(&mut self, min_degree: usize) -> Result<()> {
        let node_ids: Vec<String> = self.nodes().iter().map(|n| n.id.clone()).collect();

        for node_id in node_ids {
            if let Ok(degree) = self.non_datatype_degree(&node_id) {
                if let Some(node) = self.get_node_mut(&node_id) {
                    node.visual.visible = degree >= min_degree;
                }
            }
        }

        Ok(())
    }

    /// Toggle visibility of datatype nodes
    pub fn toggle_datatypes(&mut self, visible: bool) -> Result<()> {
        for node in self.graph.node_weights_mut() {
            if node.node_type == NodeType::Datatype {
                node.visual.visible = visible;
            }
        }
        Ok(())
    }

    /// Toggle visibility of set operator nodes (union, intersection, complement)
    pub fn toggle_set_operators(&mut self, visible: bool) -> Result<()> {
        for node in self.graph.node_weights_mut() {
            if matches!(node.node_type, NodeType::SetOperator(_)) {
                node.visual.visible = visible;
            }
        }
        Ok(())
    }

    /// Reset all visibility filters
    pub fn reset_visibility(&mut self) -> Result<()> {
        for node in self.graph.node_weights_mut() {
            node.visual.visible = true;
        }
        Ok(())
    }

    /// Update graph metadata
    pub fn update_metadata(&mut self) {
        self.metadata.class_count = self
            .nodes()
            .iter()
            .filter(|n| matches!(n.node_type, NodeType::Class))
            .count();

        self.metadata.property_count = self.edge_count();

        self.metadata.max_degree = self
            .node_map
            .keys()
            .filter_map(|id| self.degree(id).ok())
            .max()
            .unwrap_or(0);

        let node_count = self.node_count();
        if node_count > 1 {
            let max_edges = node_count * (node_count - 1);
            self.metadata.density = self.edge_count() as f64 / max_edges as f64;
        }
    }

    /// Get graph metadata
    pub fn metadata(&self) -> &GraphMetadata {
        &self.metadata
    }

    /// Get edge with source and target nodes
    /// Returns Vec of (edge, source_node, target_node)
    pub fn edges_with_endpoints(&self) -> Vec<(&Edge, &Node, &Node)> {
        use petgraph::visit::EdgeRef;

        self.graph
            .edge_references()
            .filter_map(|edge_ref| {
                let edge = edge_ref.weight();
                let source_idx = edge_ref.source();
                let target_idx = edge_ref.target();

                // Get source and target nodes
                let source_node = self.graph.node_weight(source_idx)?;
                let target_node = self.graph.node_weight(target_idx)?;

                Some((edge, source_node, target_node))
            })
            .collect()
    }

    /// Apply hierarchy folding based on depth
    pub fn apply_hierarchy_folding(&mut self, max_depth: usize) {
        use petgraph::visit::EdgeRef;
        use petgraph::Direction;
        use std::collections::{HashSet, VecDeque};

        // Reset visibility for all nodes
        for node in self.graph.node_weights_mut() {
            node.visual.visible = false;
        }

        // Find root nodes (Classes with no outgoing SubClassOf edges)
        let mut roots = Vec::new();
        #[allow(unused_variables)]
        let total_classes = self.graph.node_indices()
            .filter(|idx| self.graph[*idx].node_type == NodeType::Class)
            .count();

        for idx in self.graph.node_indices() {
            let node = &self.graph[idx];
            if node.node_type != NodeType::Class {
                // Non-class nodes (like Datatypes) are visible by default
                self.graph[idx].visual.visible = true;
                continue;
            }

            // Check if it has any outgoing SubClassOf edges
            let has_super_class = self.graph.edges_directed(idx, Direction::Outgoing)
                .any(|e| matches!(e.weight().edge_type, EdgeType::SubClass));

            if !has_super_class {
                roots.push(idx);
            }
        }

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "[WASM] Hierarchy folding: depth={}, total_classes={}, roots={}",
                max_depth, total_classes, roots.len()
            ).into());
        }

        // BFS from roots to set visibility
        let mut queue = VecDeque::new();
        let mut visited = HashSet::new();

        for root in roots {
            queue.push_back((root, 0));
            visited.insert(root);
            
            if let Some(node) = self.graph.node_weight_mut(root) {
                node.visual.visible = true;
            }
        }

        while let Some((curr_idx, depth)) = queue.pop_front() {
            if depth >= max_depth {
                continue;
            }

            // Find children (incoming SubClassOf edges)
            let children: Vec<_> = self.graph
                .edges_directed(curr_idx, Direction::Incoming)
                .filter(|e| matches!(e.weight().edge_type, EdgeType::SubClass))
                .map(|e| e.source())
                .collect();

            for child_idx in children {
                if !visited.contains(&child_idx) {
                    visited.insert(child_idx);
                    
                    if let Some(node) = self.graph.node_weight_mut(child_idx) {
                        node.visual.visible = true;
                    }

                    queue.push_back((child_idx, depth + 1));
                }
            }
        }

        #[allow(unused_variables)]
        let visible_count = self.graph.node_indices()
            .filter(|idx| self.graph[*idx].visual.visible)
            .count();

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "[WASM] After folding: {} visible nodes out of {} total",
                visible_count, self.graph.node_count()
            ).into());
        }
    }
}

impl Default for VowlGraph {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn create_test_node(id: &str, label: &str) -> Node {
        Node {
            id: id.to_string(),
            label: label.to_string(),
            node_type: NodeType::Class,
            visual: VisualAttributes {
                visible: true,
                ..VisualAttributes::default()
            },
            semantic: SemanticAttributes::default(),
        }
    }

    fn create_test_edge(id: &str, label: &str) -> Edge {
        Edge {
            id: id.to_string(),
            label: label.to_string(),
            edge_type: EdgeType::ObjectProperty,
            characteristics: EdgeCharacteristics::default(),
            relation_type: None,
            inverse_of: None,
            equivalent_to: vec![],
            disjoint_with: vec![],
        }
    }

    #[test]
    fn test_create_empty_graph() {
        let graph = VowlGraph::new();
        assert_eq!(graph.node_count(), 0);
        assert_eq!(graph.edge_count(), 0);
    }

    #[test]
    fn test_add_node() {
        let mut graph = VowlGraph::new();
        let node = create_test_node("node1", "Node 1");

        let result = graph.add_node(node);
        assert!(result.is_ok());
        assert_eq!(graph.node_count(), 1);
    }

    #[test]
    fn test_add_duplicate_node() {
        let mut graph = VowlGraph::new();
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node1", "Node 1 Duplicate");

        graph.add_node(node1).unwrap();
        let result = graph.add_node(node2);

        assert!(result.is_err());
    }

    #[test]
    fn test_add_edge() {
        let mut graph = VowlGraph::new();
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");
        let edge = create_test_edge("edge1", "Edge 1");

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();

        let result = graph.add_edge("node1", "node2", edge);
        assert!(result.is_ok());
        assert_eq!(graph.edge_count(), 1);
    }

    #[test]
    fn test_add_edge_invalid_nodes() {
        let mut graph = VowlGraph::new();
        let edge = create_test_edge("edge1", "Edge 1");

        let result = graph.add_edge("invalid1", "invalid2", edge);
        assert!(result.is_err());
    }

    #[test]
    fn test_get_node() {
        let mut graph = VowlGraph::new();
        let node = create_test_node("node1", "Node 1");

        graph.add_node(node).unwrap();

        let retrieved = graph.get_node("node1");
        assert!(retrieved.is_some());
        assert_eq!(retrieved.unwrap().label, "Node 1");
    }

    #[test]
    fn test_degree() {
        let mut graph = VowlGraph::new();
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");
        let node3 = create_test_node("node3", "Node 3");

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph.add_node(node3).unwrap();

        graph
            .add_edge("node1", "node2", create_test_edge("e1", "E1"))
            .unwrap();
        graph
            .add_edge("node1", "node3", create_test_edge("e2", "E2"))
            .unwrap();

        let degree = graph.degree("node1").unwrap();
        assert_eq!(degree, 2);
    }

    #[test]
    fn test_update_metadata() {
        let mut graph = VowlGraph::new();
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph
            .add_edge("node1", "node2", create_test_edge("e1", "E1"))
            .unwrap();

        graph.update_metadata();

        assert_eq!(graph.metadata().class_count, 2);
        assert_eq!(graph.metadata().property_count, 1);
        assert_eq!(graph.metadata().max_degree, 1);
    }

    #[test]
    fn test_non_datatype_degree() {
        let mut graph = VowlGraph::new();

        // Create nodes: 1 class connected to 2 other classes and 1 datatype
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");
        let node3 = create_test_node("node3", "Node 3");
        let datatype = Node {
            id: "dt1".to_string(),
            label: "Datatype 1".to_string(),
            node_type: NodeType::Datatype,
            visual: VisualAttributes::default(),
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph.add_node(node3).unwrap();
        graph.add_node(datatype).unwrap();

        graph.add_edge("node1", "node2", create_test_edge("e1", "E1")).unwrap();
        graph.add_edge("node1", "node3", create_test_edge("e2", "E2")).unwrap();
        graph.add_edge("node1", "dt1", create_test_edge("e3", "E3")).unwrap();

        // Total degree should be 3
        assert_eq!(graph.degree("node1").unwrap(), 3);

        // Non-datatype degree should be 2 (excludes datatype)
        assert_eq!(graph.non_datatype_degree("node1").unwrap(), 2);
    }

    #[test]
    fn test_filter_by_degree() {
        let mut graph = VowlGraph::new();

        // Create a graph where nodes have different degrees
        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");
        let node3 = create_test_node("node3", "Node 3");
        let node4 = create_test_node("node4", "Node 4");

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph.add_node(node3).unwrap();
        graph.add_node(node4).unwrap();

        // node1 has degree 2
        graph.add_edge("node1", "node2", create_test_edge("e1", "E1")).unwrap();
        graph.add_edge("node1", "node3", create_test_edge("e2", "E2")).unwrap();

        // node2 has degree 1
        // (already connected to node1)

        // node3 has degree 1
        // (already connected to node1)

        // node4 has degree 0
        // (no connections)

        graph.filter_by_degree(2).unwrap();

        // Only node1 should be visible (degree >= 2)
        assert!(graph.get_node("node1").unwrap().visual.visible);
        assert!(!graph.get_node("node2").unwrap().visual.visible);
        assert!(!graph.get_node("node3").unwrap().visual.visible);
        assert!(!graph.get_node("node4").unwrap().visual.visible);
    }

    #[test]
    fn test_toggle_datatypes() {
        let mut graph = VowlGraph::new();

        let class_node = create_test_node("class1", "Class 1");
        let datatype_node = Node {
            id: "dt1".to_string(),
            label: "Datatype 1".to_string(),
            node_type: NodeType::Datatype,
            visual: VisualAttributes {
                visible: true,
                ..VisualAttributes::default()
            },
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(class_node).unwrap();
        graph.add_node(datatype_node).unwrap();

        // Hide datatypes
        graph.toggle_datatypes(false).unwrap();

        assert!(graph.get_node("class1").unwrap().visual.visible);
        assert!(!graph.get_node("dt1").unwrap().visual.visible);

        // Show datatypes
        graph.toggle_datatypes(true).unwrap();

        assert!(graph.get_node("class1").unwrap().visual.visible);
        assert!(graph.get_node("dt1").unwrap().visual.visible);
    }

    #[test]
    fn test_toggle_set_operators() {
        let mut graph = VowlGraph::new();

        let class_node = create_test_node("class1", "Class 1");
        let union_node = Node {
            id: "union1".to_string(),
            label: "Union 1".to_string(),
            node_type: NodeType::SetOperator(SetOperator::UnionOf),
            visual: VisualAttributes {
                visible: true,
                ..VisualAttributes::default()
            },
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(class_node).unwrap();
        graph.add_node(union_node).unwrap();

        // Hide set operators
        graph.toggle_set_operators(false).unwrap();

        assert!(graph.get_node("class1").unwrap().visual.visible);
        assert!(!graph.get_node("union1").unwrap().visual.visible);

        // Show set operators
        graph.toggle_set_operators(true).unwrap();

        assert!(graph.get_node("class1").unwrap().visual.visible);
        assert!(graph.get_node("union1").unwrap().visual.visible);
    }

    #[test]
    fn test_reset_visibility() {
        let mut graph = VowlGraph::new();

        let node1 = create_test_node("node1", "Node 1");
        let node2 = create_test_node("node2", "Node 2");

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();

        // Hide all nodes with high degree filter
        graph.filter_by_degree(100).unwrap();

        // Verify nodes are hidden
        assert!(!graph.get_node("node1").unwrap().visual.visible);
        assert!(!graph.get_node("node2").unwrap().visual.visible);

        // Reset visibility
        graph.reset_visibility().unwrap();

        // All nodes should be visible again
        assert!(graph.get_node("node1").unwrap().visual.visible);
        assert!(graph.get_node("node2").unwrap().visual.visible);
    }

    #[test]
    fn test_multiple_filters_compose() {
        let mut graph = VowlGraph::new();

        // Create mixed node types
        let class1 = create_test_node("class1", "Class 1");
        let class2 = create_test_node("class2", "Class 2");
        let datatype = Node {
            id: "dt1".to_string(),
            label: "Datatype 1".to_string(),
            node_type: NodeType::Datatype,
            visual: VisualAttributes::default(),
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(class1).unwrap();
        graph.add_node(class2).unwrap();
        graph.add_node(datatype).unwrap();

        graph.add_edge("class1", "class2", create_test_edge("e1", "E1")).unwrap();
        graph.add_edge("class1", "dt1", create_test_edge("e2", "E2")).unwrap();

        // Apply degree filter (min degree 1) - should keep class1 and class2
        graph.filter_by_degree(1).unwrap();

        // Then hide datatypes
        graph.toggle_datatypes(false).unwrap();

        // Verify: class1 visible (degree >= 1), class2 visible (degree >= 1), dt1 hidden (datatype)
        assert!(graph.get_node("class1").unwrap().visual.visible);
        assert!(graph.get_node("class2").unwrap().visual.visible);
        assert!(!graph.get_node("dt1").unwrap().visual.visible);
    }
}
