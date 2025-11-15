//! Graph data structures and operations
//!
//! This module provides the core graph structures for representing
//! the ontology as a network of nodes and edges.

pub mod node;
pub mod edge;
pub mod builder;

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
#[derive(Debug, Clone, PartialEq)]
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

/// Type of graph node
#[derive(Debug, Clone, PartialEq)]
pub enum NodeType {
    /// OWL Class
    Class,

    /// Datatype
    Datatype,

    /// Special node (Thing, Nothing, etc.)
    Special(String),
}

/// Visual attributes for rendering
#[derive(Debug, Clone, PartialEq, Default)]
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
}

/// Semantic attributes
#[derive(Debug, Clone, PartialEq, Default)]
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

    /// Get edge with source and target node IDs
    /// Returns Vec of (edge, source_id, target_id)
    pub fn edges_with_endpoints(&self) -> Vec<(&Edge, String, String)> {
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

                Some((edge, source_node.id.clone(), target_node.id.clone()))
            })
            .collect()
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
            visual: VisualAttributes::default(),
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
}
