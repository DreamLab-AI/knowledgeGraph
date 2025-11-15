//! Graph builder for converting ontology data to graph structures

use super::{
    edge::EdgeBuilder, EdgeType, node::NodeBuilder, NodeType, VowlGraph,
};
use crate::ontology::{OntologyData, PropertyType};
use crate::Result;

/// Builder for constructing VowlGraph from OntologyData
pub struct GraphBuilder {
    graph: VowlGraph,
}

impl GraphBuilder {
    /// Create a new graph builder
    pub fn new() -> Self {
        Self {
            graph: VowlGraph::new(),
        }
    }

    /// Build a graph from ontology data
    pub fn from_ontology(data: &OntologyData) -> Result<VowlGraph> {
        let mut builder = Self::new();

        // Add all class nodes
        for class in &data.classes {
            let node = NodeBuilder::new(&class.id)
                .label(&class.label)
                .node_type(Self::map_node_type(&class.class_type))
                .iri(&class.iri)
                .external(class.attributes.external)
                .ontology_meta(class.ontology_meta.clone())
                .build();

            builder.graph.add_node(node)?;
        }

        // Add all property edges
        for property in &data.properties {
            let edge = EdgeBuilder::new(&property.id)
                .label(&property.label)
                .edge_type(Self::map_edge_type(&property.property_type));

            let edge = if property.characteristics.functional {
                edge.functional()
            } else {
                edge
            };

            let edge = if property.characteristics.transitive {
                edge.transitive()
            } else {
                edge
            };

            let edge = if property.characteristics.symmetric {
                edge.symmetric()
            } else {
                edge
            };

            let edge = if property.characteristics.inverse_functional {
                edge.inverse_functional()
            } else {
                edge
            };

            let edge = if let Some(card) = &property.characteristics.cardinality {
                edge.cardinality(card.min, card.max)
            } else {
                edge
            };

            builder
                .graph
                .add_edge(&property.domain, &property.range, edge.build())?;
        }

        // Update metadata
        builder.graph.update_metadata();

        Ok(builder.graph)
    }

    /// Map ontology class type to graph node type
    fn map_node_type(class_type: &str) -> NodeType {
        match class_type {
            "owl:Class" | "rdfs:Class" => NodeType::Class,
            "rdfs:Datatype" | "xsd:*" => NodeType::Datatype,
            other => NodeType::Special(other.to_string()),
        }
    }

    /// Map ontology property type to graph edge type
    fn map_edge_type(property_type: &PropertyType) -> EdgeType {
        match property_type {
            PropertyType::ObjectProperty => EdgeType::ObjectProperty,
            PropertyType::DatatypeProperty => EdgeType::DatatypeProperty,
            PropertyType::AnnotationProperty => EdgeType::Special("annotation".to_string()),
            PropertyType::SpecialProperty(name) => {
                if name.contains("subclass") {
                    EdgeType::SubClass
                } else {
                    EdgeType::Special(name.clone())
                }
            }
        }
    }

    /// Get the built graph
    pub fn build(self) -> VowlGraph {
        self.graph
    }
}

impl Default for GraphBuilder {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::ontology::{
        ClassAttributes, ClassNode, OntologyMetadata, Property, PropertyCharacteristics,
    };

    fn create_test_ontology() -> OntologyData {
        OntologyData {
            metadata: OntologyMetadata {
                iri: "http://test.org/onto".to_string(),
                version: None,
                title: None,
                description: None,
            },
            classes: vec![
                ClassNode {
                    id: "class1".to_string(),
                    iri: "http://test.org/Class1".to_string(),
                    label: "Class 1".to_string(),
                    class_type: "owl:Class".to_string(),
                    equivalent: vec![],
                    attributes: ClassAttributes::default(),
                    ontology_meta: None,
                },
                ClassNode {
                    id: "class2".to_string(),
                    iri: "http://test.org/Class2".to_string(),
                    label: "Class 2".to_string(),
                    class_type: "owl:Class".to_string(),
                    equivalent: vec![],
                    attributes: ClassAttributes::default(),
                    ontology_meta: None,
                },
            ],
            properties: vec![Property {
                id: "prop1".to_string(),
                iri: "http://test.org/prop1".to_string(),
                label: "Property 1".to_string(),
                property_type: PropertyType::ObjectProperty,
                domain: "class1".to_string(),
                range: "class2".to_string(),
                characteristics: PropertyCharacteristics {
                    functional: true,
                    ..Default::default()
                },
            }],
            namespaces: vec![],
        }
    }

    #[test]
    fn test_build_from_ontology() {
        let ontology = create_test_ontology();
        let result = GraphBuilder::from_ontology(&ontology);

        assert!(result.is_ok());
        let graph = result.unwrap();

        assert_eq!(graph.node_count(), 2);
        assert_eq!(graph.edge_count(), 1);
    }

    #[test]
    fn test_node_mapping() {
        let ontology = create_test_ontology();
        let graph = GraphBuilder::from_ontology(&ontology).unwrap();

        let node = graph.get_node("class1");
        assert!(node.is_some());
        assert_eq!(node.unwrap().label, "Class 1");
    }

    #[test]
    fn test_edge_characteristics() {
        let ontology = create_test_ontology();
        let graph = GraphBuilder::from_ontology(&ontology).unwrap();

        let edges = graph.edges();
        assert_eq!(edges.len(), 1);
        assert!(edges[0].characteristics.functional);
    }

    #[test]
    fn test_metadata_update() {
        let ontology = create_test_ontology();
        let graph = GraphBuilder::from_ontology(&ontology).unwrap();

        assert_eq!(graph.metadata().class_count, 2);
        assert_eq!(graph.metadata().property_count, 1);
    }
}
