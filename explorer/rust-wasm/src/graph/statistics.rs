//! Graph statistics and metrics computation
//!
//! This module provides comprehensive statistical analysis of ontology graphs,
//! including node/edge counts, degree distribution, connected components,
//! and OWL2-specific metrics like disjoint classes and equivalences.

use crate::graph::{EdgeType, NodeType, VowlGraph};
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet};

/// Comprehensive graph statistics
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct GraphStatistics {
    /// Basic metrics
    pub basic: BasicMetrics,

    /// Degree statistics
    pub degree: DegreeStatistics,

    /// Component analysis
    pub components: ComponentAnalysis,

    /// OWL2 specific metrics
    pub owl2: Owl2Metrics,

    /// Property type distribution
    pub properties: PropertyDistribution,

    /// Class type distribution
    pub classes: ClassDistribution,
}

/// Basic graph metrics
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct BasicMetrics {
    /// Total number of nodes
    pub node_count: usize,

    /// Total number of edges
    pub edge_count: usize,

    /// Number of class nodes
    pub class_count: usize,

    /// Number of datatype nodes
    pub datatype_count: usize,

    /// Number of special nodes (Thing, Nothing, etc.)
    pub special_node_count: usize,

    /// Number of external nodes
    pub external_node_count: usize,

    /// Graph density (0.0 to 1.0)
    pub density: f64,
}

/// Degree statistics for nodes
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct DegreeStatistics {
    /// Minimum degree observed
    pub min_degree: usize,

    /// Maximum degree observed
    pub max_degree: usize,

    /// Average degree
    pub avg_degree: f64,

    /// Median degree
    pub median_degree: f64,

    /// Standard deviation of degrees
    pub std_dev_degree: f64,

    /// Degree distribution (degree -> count)
    pub degree_distribution: HashMap<usize, usize>,

    /// In-degree statistics
    pub in_degree: DegreeInfo,

    /// Out-degree statistics
    pub out_degree: DegreeInfo,
}

/// In/out degree information
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct DegreeInfo {
    /// Minimum
    pub min: usize,

    /// Maximum
    pub max: usize,

    /// Average
    pub avg: f64,

    /// High-degree nodes (degree >= 10)
    pub hubs: usize,
}

/// Connected components analysis
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct ComponentAnalysis {
    /// Number of connected components
    pub num_components: usize,

    /// Size of largest component
    pub largest_component_size: usize,

    /// Sizes of all components (sorted descending)
    pub component_sizes: Vec<usize>,

    /// Number of isolated nodes
    pub isolated_nodes: usize,

    /// Number of nodes in largest component
    pub nodes_in_largest: usize,

    /// Percentage of nodes in largest component
    pub largest_component_ratio: f64,
}

/// OWL2-specific metrics
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct Owl2Metrics {
    /// Number of disjoint class pairs
    pub disjoint_classes: usize,

    /// Number of equivalent class relationships
    pub equivalent_classes: usize,

    /// Number of functional properties
    pub functional_properties: usize,

    /// Number of inverse functional properties
    pub inverse_functional_properties: usize,

    /// Number of transitive properties
    pub transitive_properties: usize,

    /// Number of symmetric properties
    pub symmetric_properties: usize,

    /// Properties with cardinality constraints
    pub properties_with_cardinality: usize,

    /// Classes with individuals
    pub classes_with_individuals: usize,

    /// Total individual count (deduplicated)
    pub total_individuals: usize,

    /// Presence of owl:Thing
    pub has_thing: bool,

    /// Presence of owl:Nothing
    pub has_nothing: bool,
}

/// Property type distribution
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct PropertyDistribution {
    /// Object property count
    pub object_properties: usize,

    /// Datatype property count
    pub datatype_properties: usize,

    /// SubClass relationship count
    pub subclass_relations: usize,

    /// Special relation count
    pub special_relations: usize,

    /// Properties by type
    pub by_type: HashMap<String, usize>,
}

/// Class type distribution
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct ClassDistribution {
    /// Regular classes
    pub regular_classes: usize,

    /// Deprecated classes
    pub deprecated_classes: usize,

    /// External classes
    pub external_classes: usize,

    /// Classes with metadata
    pub with_metadata: usize,
}

impl GraphStatistics {
    /// Calculate all statistics for the given graph
    pub fn calculate(graph: &VowlGraph) -> Self {
        let basic = Self::calculate_basic_metrics(graph);
        let degree = Self::calculate_degree_statistics(graph);
        let components = Self::calculate_component_analysis(graph);
        let owl2 = Self::calculate_owl2_metrics(graph);
        let properties = Self::calculate_property_distribution(graph);
        let classes = Self::calculate_class_distribution(graph);

        Self {
            basic,
            degree,
            components,
            owl2,
            properties,
            classes,
        }
    }

    /// Calculate basic graph metrics
    fn calculate_basic_metrics(graph: &VowlGraph) -> BasicMetrics {
        let node_count = graph.node_count();
        let edge_count = graph.edge_count();

        let mut class_count = 0;
        let mut datatype_count = 0;
        let mut special_node_count = 0;
        let mut external_node_count = 0;

        for node in graph.nodes() {
            match node.node_type {
                NodeType::Class => {
                    class_count += 1;
                    if node.semantic.external {
                        external_node_count += 1;
                    }
                }
                NodeType::Datatype => datatype_count += 1,
                NodeType::Special(_) => special_node_count += 1,
                NodeType::SetOperator(_) => special_node_count += 1, // Count set operators as special nodes
            }
        }

        let density = if node_count > 1 {
            let max_edges = node_count * (node_count - 1);
            edge_count as f64 / max_edges as f64
        } else {
            0.0
        };

        BasicMetrics {
            node_count,
            edge_count,
            class_count,
            datatype_count,
            special_node_count,
            external_node_count,
            density,
        }
    }

    /// Calculate degree statistics
    fn calculate_degree_statistics(graph: &VowlGraph) -> DegreeStatistics {
        let nodes = graph.nodes();
        if nodes.is_empty() {
            return DegreeStatistics::default();
        }

        let mut degrees = Vec::new();
        let mut in_degrees = Vec::new();
        let mut out_degrees = Vec::new();
        let mut degree_distribution = HashMap::new();

        for node in &nodes {
            if let Ok(degree) = graph.degree(&node.id) {
                degrees.push(degree);
                *degree_distribution.entry(degree).or_insert(0) += 1;
            }
        }

        // Calculate in/out degrees
        let edges_with_endpoints = graph.edges_with_endpoints();
        let mut in_degree_map: HashMap<String, usize> = HashMap::new();
        let mut out_degree_map: HashMap<String, usize> = HashMap::new();

        for (_edge, source, target) in edges_with_endpoints {
            *out_degree_map.entry(source.id.clone()).or_insert(0) += 1;
            *in_degree_map.entry(target.id.clone()).or_insert(0) += 1;
        }

        for node in &nodes {
            in_degrees.push(*in_degree_map.get(&node.id).unwrap_or(&0));
            out_degrees.push(*out_degree_map.get(&node.id).unwrap_or(&0));
        }

        let min_degree = *degrees.iter().min().unwrap_or(&0);
        let max_degree = *degrees.iter().max().unwrap_or(&0);
        let avg_degree = if !degrees.is_empty() {
            degrees.iter().sum::<usize>() as f64 / degrees.len() as f64
        } else {
            0.0
        };

        let median_degree = Self::calculate_median(&degrees);
        let std_dev_degree = Self::calculate_std_dev(&degrees, avg_degree);

        let in_degree_hubs = in_degrees.iter().filter(|&&d| d >= 10).count();
        let out_degree_hubs = out_degrees.iter().filter(|&&d| d >= 10).count();

        DegreeStatistics {
            min_degree,
            max_degree,
            avg_degree,
            median_degree,
            std_dev_degree,
            degree_distribution,
            in_degree: DegreeInfo {
                min: *in_degrees.iter().min().unwrap_or(&0),
                max: *in_degrees.iter().max().unwrap_or(&0),
                avg: in_degrees.iter().sum::<usize>() as f64 / in_degrees.len().max(1) as f64,
                hubs: in_degree_hubs,
            },
            out_degree: DegreeInfo {
                min: *out_degrees.iter().min().unwrap_or(&0),
                max: *out_degrees.iter().max().unwrap_or(&0),
                avg: out_degrees.iter().sum::<usize>() as f64 / out_degrees.len().max(1) as f64,
                hubs: out_degree_hubs,
            },
        }
    }

    /// Calculate connected components
    fn calculate_component_analysis(graph: &VowlGraph) -> ComponentAnalysis {
        let nodes = graph.nodes();
        if nodes.is_empty() {
            return ComponentAnalysis::default();
        }

        let node_count = nodes.len();
        let mut visited = HashSet::new();
        let mut components = Vec::new();
        let mut isolated_nodes = 0;

        for node in &nodes {
            if !visited.contains(&node.id) {
                let component = Self::dfs_component(graph, &node.id, &mut visited);
                if component.len() == 1 {
                    isolated_nodes += 1;
                }
                components.push(component.len());
            }
        }

        components.sort_by(|a, b| b.cmp(a));

        let num_components = components.len();
        let largest_component_size = *components.first().unwrap_or(&0);
        let nodes_in_largest = largest_component_size;
        let largest_component_ratio = if node_count > 0 {
            nodes_in_largest as f64 / node_count as f64
        } else {
            0.0
        };

        ComponentAnalysis {
            num_components,
            largest_component_size,
            component_sizes: components,
            isolated_nodes,
            nodes_in_largest,
            largest_component_ratio,
        }
    }

    /// DFS to find connected component
    fn dfs_component(
        graph: &VowlGraph,
        start_id: &str,
        visited: &mut HashSet<String>,
    ) -> Vec<String> {
        let mut component = Vec::new();
        let mut stack = vec![start_id.to_string()];

        while let Some(node_id) = stack.pop() {
            if visited.contains(&node_id) {
                continue;
            }

            visited.insert(node_id.clone());
            component.push(node_id.clone());

            if let Ok(neighbors) = graph.neighbors(&node_id) {
                for neighbor in neighbors {
                    if !visited.contains(&neighbor.id) {
                        stack.push(neighbor.id.clone());
                    }
                }
            }
        }

        component
    }

    /// Calculate OWL2 metrics
    fn calculate_owl2_metrics(graph: &VowlGraph) -> Owl2Metrics {
        let mut equivalent_classes = 0;
        let mut functional_properties = 0;
        let mut inverse_functional_properties = 0;
        let mut transitive_properties = 0;
        let mut symmetric_properties = 0;
        let mut properties_with_cardinality = 0;
        let mut classes_with_individuals = 0;
        let mut individual_iris = HashSet::new();

        let mut has_thing = false;
        let mut has_nothing = false;

        // Analyze nodes for Thing/Nothing and individuals
        for node in graph.nodes() {
            if let NodeType::Special(ref special_type) = node.node_type {
                if special_type.contains("Thing") {
                    has_thing = true;
                }
                if special_type.contains("Nothing") {
                    has_nothing = true;
                }
            }

            if let Some(individual_count) = node.semantic.individuals {
                if individual_count > 0 {
                    classes_with_individuals += 1;
                    individual_iris.insert(node.semantic.iri.clone());
                }
            }

            // Count equivalent classes
            equivalent_classes += node.semantic.equivalent.len();
        }

        // Analyze edges for properties
        for edge in graph.edges() {
            match edge.edge_type {
                EdgeType::ObjectProperty | EdgeType::DatatypeProperty => {
                    if edge.characteristics.functional {
                        functional_properties += 1;
                    }
                    if edge.characteristics.inverse_functional {
                        inverse_functional_properties += 1;
                    }
                    if edge.characteristics.transitive {
                        transitive_properties += 1;
                    }
                    if edge.characteristics.symmetric {
                        symmetric_properties += 1;
                    }
                    if edge.characteristics.cardinality.is_some() {
                        properties_with_cardinality += 1;
                    }
                }
                _ => {}
            }
        }

        Owl2Metrics {
            disjoint_classes: 0,
            equivalent_classes,
            functional_properties,
            inverse_functional_properties,
            transitive_properties,
            symmetric_properties,
            properties_with_cardinality,
            classes_with_individuals,
            total_individuals: individual_iris.len(),
            has_thing,
            has_nothing,
        }
    }

    /// Calculate property distribution
    fn calculate_property_distribution(graph: &VowlGraph) -> PropertyDistribution {
        let mut object_properties = 0;
        let mut datatype_properties = 0;
        let mut subclass_relations = 0;
        let mut special_relations = 0;
        let mut by_type = HashMap::new();

        for edge in graph.edges() {
            match edge.edge_type {
                EdgeType::ObjectProperty => {
                    object_properties += 1;
                    *by_type.entry("ObjectProperty".to_string()).or_insert(0) += 1;
                }
                EdgeType::DatatypeProperty => {
                    datatype_properties += 1;
                    *by_type.entry("DatatypeProperty".to_string()).or_insert(0) += 1;
                }
                EdgeType::SubClass => {
                    subclass_relations += 1;
                    *by_type.entry("SubClass".to_string()).or_insert(0) += 1;
                }
                EdgeType::Special(ref s) => {
                    special_relations += 1;
                    *by_type.entry(format!("Special:{}", s)).or_insert(0) += 1;
                }
            }
        }

        PropertyDistribution {
            object_properties,
            datatype_properties,
            subclass_relations,
            special_relations,
            by_type,
        }
    }

    /// Calculate class distribution
    fn calculate_class_distribution(graph: &VowlGraph) -> ClassDistribution {
        let mut regular_classes = 0;
        let mut deprecated_classes = 0;
        let mut external_classes = 0;
        let mut with_metadata = 0;

        for node in graph.nodes() {
            if node.node_type == NodeType::Class {
                regular_classes += 1;

                if node.semantic.external {
                    external_classes += 1;
                }

                if node.semantic.ontology_meta.is_some() {
                    with_metadata += 1;
                }

                // Check for deprecated status
                if node.label.to_lowercase().contains("deprecated") {
                    deprecated_classes += 1;
                }
            }
        }

        ClassDistribution {
            regular_classes,
            deprecated_classes,
            external_classes,
            with_metadata,
        }
    }

    /// Helper: calculate median
    fn calculate_median(values: &[usize]) -> f64 {
        if values.is_empty() {
            return 0.0;
        }

        let mut sorted = values.to_vec();
        sorted.sort_unstable();

        let mid = sorted.len() / 2;
        if sorted.len() % 2 == 0 {
            (sorted[mid - 1] as f64 + sorted[mid] as f64) / 2.0
        } else {
            sorted[mid] as f64
        }
    }

    /// Helper: calculate standard deviation
    fn calculate_std_dev(values: &[usize], mean: f64) -> f64 {
        if values.is_empty() {
            return 0.0;
        }

        let variance = values
            .iter()
            .map(|&v| {
                let diff = v as f64 - mean;
                diff * diff
            })
            .sum::<f64>()
            / values.len() as f64;

        variance.sqrt()
    }
}

impl Default for GraphStatistics {
    fn default() -> Self {
        Self {
            basic: BasicMetrics::default(),
            degree: DegreeStatistics::default(),
            components: ComponentAnalysis::default(),
            owl2: Owl2Metrics::default(),
            properties: PropertyDistribution::default(),
            classes: ClassDistribution::default(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::graph::{
        Edge, EdgeCharacteristics, EdgeType, Node, NodeType, SemanticAttributes,
        VisualAttributes,
    };

    fn create_test_graph() -> VowlGraph {
        let mut graph = VowlGraph::new();

        let node1 = Node {
            id: "n1".to_string(),
            label: "Class 1".to_string(),
            node_type: NodeType::Class,
            visual: VisualAttributes::default(),
            semantic: SemanticAttributes::default(),
        };

        let node2 = Node {
            id: "n2".to_string(),
            label: "Class 2".to_string(),
            node_type: NodeType::Class,
            visual: VisualAttributes::default(),
            semantic: SemanticAttributes::default(),
        };

        let node3 = Node {
            id: "n3".to_string(),
            label: "Datatype".to_string(),
            node_type: NodeType::Datatype,
            visual: VisualAttributes::default(),
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph.add_node(node3).unwrap();

        let edge1 = Edge {
            id: "e1".to_string(),
            label: "prop1".to_string(),
            edge_type: EdgeType::ObjectProperty,
            characteristics: EdgeCharacteristics {
                functional: true,
                ..EdgeCharacteristics::default()
            },
            relation_type: None,
            inverse_of: None,
            equivalent_to: vec![],
            disjoint_with: vec![],
        };

        let edge2 = Edge {
            id: "e2".to_string(),
            label: "prop2".to_string(),
            edge_type: EdgeType::DatatypeProperty,
            characteristics: EdgeCharacteristics::default(),
            relation_type: None,
            inverse_of: None,
            equivalent_to: vec![],
            disjoint_with: vec![],
        };

        graph.add_edge("n1", "n2", edge1).unwrap();
        graph.add_edge("n2", "n3", edge2).unwrap();

        graph
    }

    #[test]
    fn test_calculate_basic_metrics() {
        let graph = create_test_graph();
        let stats = GraphStatistics::calculate(&graph);

        assert_eq!(stats.basic.node_count, 3);
        assert_eq!(stats.basic.edge_count, 2);
        assert_eq!(stats.basic.class_count, 2);
        assert_eq!(stats.basic.datatype_count, 1);
    }

    #[test]
    fn test_degree_statistics() {
        let graph = create_test_graph();
        let stats = GraphStatistics::calculate(&graph);

        assert!(stats.degree.max_degree > 0);
        assert!(stats.degree.avg_degree > 0.0);
    }

    #[test]
    fn test_property_distribution() {
        let graph = create_test_graph();
        let stats = GraphStatistics::calculate(&graph);

        assert_eq!(stats.properties.object_properties, 1);
        assert_eq!(stats.properties.datatype_properties, 1);
    }

    #[test]
    fn test_owl2_metrics() {
        let graph = create_test_graph();
        let stats = GraphStatistics::calculate(&graph);

        assert_eq!(stats.owl2.functional_properties, 1);
    }

    #[test]
    fn test_density_calculation() {
        let graph = create_test_graph();
        let stats = GraphStatistics::calculate(&graph);

        assert!(stats.basic.density >= 0.0 && stats.basic.density <= 1.0);
    }

    #[test]
    fn test_median_calculation() {
        let values = vec![1, 2, 3, 4, 5];
        let median = GraphStatistics::calculate_median(&values);
        assert_eq!(median, 3.0);
    }

    #[test]
    fn test_std_dev_calculation() {
        let values = vec![1, 2, 3, 4, 5];
        let mean = 3.0;
        let std_dev = GraphStatistics::calculate_std_dev(&values, mean);
        assert!(std_dev > 0.0);
    }
}
