//! Graph edge types and utilities

use super::{Edge, EdgeCharacteristics, EdgeType};

/// Builder for creating graph edges
pub struct EdgeBuilder {
    id: String,
    label: Option<String>,
    edge_type: EdgeType,
    characteristics: EdgeCharacteristics,
}

impl EdgeBuilder {
    /// Create a new edge builder
    pub fn new(id: impl Into<String>) -> Self {
        let id = id.into();
        Self {
            id: id.clone(),
            label: Some(id),
            edge_type: EdgeType::ObjectProperty,
            characteristics: EdgeCharacteristics::default(),
        }
    }

    /// Set the label
    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = Some(label.into());
        self
    }

    /// Set the edge type
    pub fn edge_type(mut self, edge_type: EdgeType) -> Self {
        self.edge_type = edge_type;
        self
    }

    /// Mark as functional
    pub fn functional(mut self) -> Self {
        self.characteristics.functional = true;
        self
    }

    /// Mark as inverse functional
    pub fn inverse_functional(mut self) -> Self {
        self.characteristics.inverse_functional = true;
        self
    }

    /// Mark as transitive
    pub fn transitive(mut self) -> Self {
        self.characteristics.transitive = true;
        self
    }

    /// Mark as symmetric
    pub fn symmetric(mut self) -> Self {
        self.characteristics.symmetric = true;
        self
    }

    /// Set cardinality
    pub fn cardinality(mut self, min: Option<u32>, max: Option<u32>) -> Self {
        self.characteristics.cardinality = Some((min, max));
        self
    }

    /// Build the edge
    pub fn build(self) -> Edge {
        Edge {
            id: self.id,
            label: self.label.unwrap_or_default(),
            edge_type: self.edge_type,
            characteristics: self.characteristics,
            relation_type: None,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_edge_builder_basic() {
        let edge = EdgeBuilder::new("test_edge")
            .label("Test Edge")
            .build();

        assert_eq!(edge.id, "test_edge");
        assert_eq!(edge.label, "Test Edge");
    }

    #[test]
    fn test_edge_builder_functional() {
        let edge = EdgeBuilder::new("functional_prop")
            .functional()
            .build();

        assert!(edge.characteristics.functional);
        assert!(!edge.characteristics.transitive);
    }

    #[test]
    fn test_edge_builder_cardinality() {
        let edge = EdgeBuilder::new("card_prop")
            .cardinality(Some(1), Some(1))
            .build();

        assert_eq!(
            edge.characteristics.cardinality,
            Some((Some(1), Some(1)))
        );
    }

    #[test]
    fn test_edge_builder_multiple_characteristics() {
        let edge = EdgeBuilder::new("complex")
            .functional()
            .transitive()
            .symmetric()
            .build();

        assert!(edge.characteristics.functional);
        assert!(edge.characteristics.transitive);
        assert!(edge.characteristics.symmetric);
    }
}
