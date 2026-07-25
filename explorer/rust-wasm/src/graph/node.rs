//! Graph node types and utilities

use super::{Node, NodeType, SemanticAttributes, VisualAttributes};

/// Builder for creating graph nodes
pub struct NodeBuilder {
    id: String,
    label: Option<String>,
    node_type: NodeType,
    visual: VisualAttributes,
    semantic: SemanticAttributes,
}

impl NodeBuilder {
    /// Create a new node builder
    pub fn new(id: impl Into<String>) -> Self {
        let id = id.into();
        Self {
            id: id.clone(),
            label: Some(id),
            node_type: NodeType::Class,
            visual: VisualAttributes {
                visible: true,
                ..VisualAttributes::default()
            },
            semantic: SemanticAttributes::default(),
        }
    }

    /// Set the label
    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = Some(label.into());
        self
    }

    /// Set the node type
    pub fn node_type(mut self, node_type: NodeType) -> Self {
        self.node_type = node_type;
        self
    }

    /// Set position
    pub fn position(mut self, x: f64, y: f64) -> Self {
        self.visual.x = x;
        self.visual.y = y;
        self
    }

    /// Set IRI
    pub fn iri(mut self, iri: impl Into<String>) -> Self {
        self.semantic.iri = iri.into();
        self
    }

    /// Set external flag
    pub fn external(mut self, external: bool) -> Self {
        self.semantic.external = external;
        self
    }

    /// Set weight
    pub fn weight(mut self, weight: f64) -> Self {
        self.visual.weight = weight;
        self
    }

    /// Set ontology metadata
    pub fn ontology_meta(mut self, meta: Option<crate::ontology::ClassOntologyMetadata>) -> Self {
        self.semantic.ontology_meta = meta;
        self
    }

    /// Build the node
    pub fn build(self) -> Node {
        Node {
            id: self.id,
            label: self.label.unwrap_or_default(),
            node_type: self.node_type,
            visual: self.visual,
            semantic: self.semantic,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_node_builder_basic() {
        let node = NodeBuilder::new("test_node")
            .label("Test Node")
            .build();

        assert_eq!(node.id, "test_node");
        assert_eq!(node.label, "Test Node");
    }

    #[test]
    fn test_node_builder_with_position() {
        let node = NodeBuilder::new("test")
            .position(100.0, 200.0)
            .build();

        assert_eq!(node.visual.x, 100.0);
        assert_eq!(node.visual.y, 200.0);
    }

    #[test]
    fn test_node_builder_external() {
        let node = NodeBuilder::new("external")
            .external(true)
            .iri("http://example.org/External")
            .build();

        assert!(node.semantic.external);
        assert_eq!(node.semantic.iri, "http://example.org/External");
    }
}
