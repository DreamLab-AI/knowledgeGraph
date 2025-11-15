//! OWL Ontology parsing and representation
//!
//! This module handles parsing OWL ontologies in JSON format and
//! converting them into internal graph representations.

pub mod parser;
pub mod model;

use crate::Result;
use serde::{Deserialize, Serialize};

/// Trait for parsing OWL ontology data
#[cfg_attr(test, mockall::automock)]
pub trait OntologyParser {
    /// Parse ontology from JSON string
    fn parse(&self, json: &str) -> Result<OntologyData>;

    /// Validate ontology structure
    fn validate(&self, data: &OntologyData) -> Result<()>;
}

/// Represents parsed OWL ontology data
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct OntologyData {
    /// Ontology metadata
    pub metadata: OntologyMetadata,

    /// Class nodes in the ontology
    pub classes: Vec<ClassNode>,

    /// Properties (object and datatype properties)
    pub properties: Vec<Property>,

    /// Namespace definitions
    pub namespaces: Vec<Namespace>,
}

/// Ontology metadata
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct OntologyMetadata {
    /// Ontology IRI
    pub iri: String,

    /// Version information
    pub version: Option<String>,

    /// Title/label
    pub title: Option<String>,

    /// Description
    pub description: Option<String>,
}

/// Represents an OWL class
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct ClassNode {
    /// Unique identifier
    pub id: String,

    /// IRI of the class
    pub iri: String,

    /// Label for display
    pub label: String,

    /// Class type (e.g., owl:Class, rdfs:Class)
    pub class_type: String,

    /// Equivalent classes
    pub equivalent: Vec<String>,

    /// Attributes for visualization
    pub attributes: ClassAttributes,

    /// Ontology metadata from Phase 2 parser
    pub ontology_meta: Option<ClassOntologyMetadata>,
}

/// Visual and semantic attributes for a class
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct ClassAttributes {
    /// Whether this is an external class
    pub external: bool,

    /// Individuals count
    pub individuals: Option<usize>,

    /// Additional properties
    pub properties: std::collections::HashMap<String, String>,
}

/// Represents an OWL property (object or datatype property)
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Property {
    /// Unique identifier
    pub id: String,

    /// IRI of the property
    pub iri: String,

    /// Label for display
    pub label: String,

    /// Property type
    pub property_type: PropertyType,

    /// Domain class ID
    pub domain: String,

    /// Range class/datatype ID
    pub range: String,

    /// Property characteristics
    pub characteristics: PropertyCharacteristics,
}

/// Type of OWL property
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum PropertyType {
    /// Object property
    ObjectProperty,

    /// Datatype property
    DatatypeProperty,

    /// Annotation property
    AnnotationProperty,

    /// Special property (e.g., subclass, disjoint)
    SpecialProperty(String),
}

/// Property characteristics (functional, transitive, etc.)
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct PropertyCharacteristics {
    /// Is functional
    pub functional: bool,

    /// Is inverse functional
    pub inverse_functional: bool,

    /// Is transitive
    pub transitive: bool,

    /// Is symmetric
    pub symmetric: bool,

    /// Cardinality constraints
    pub cardinality: Option<Cardinality>,
}

/// Cardinality constraint
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Cardinality {
    /// Minimum cardinality
    pub min: Option<u32>,

    /// Maximum cardinality
    pub max: Option<u32>,

    /// Exact cardinality
    pub exact: Option<u32>,
}

/// Namespace definition
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Namespace {
    /// Prefix
    pub prefix: String,

    /// IRI
    pub iri: String,
}

/// Class-level ontology metadata (from Phase 2 OWL extractor)
/// This is separate from OntologyMetadata which represents ontology header data
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct ClassOntologyMetadata {
    /// Term identifier
    pub term_id: String,

    /// Preferred term name
    pub preferred_term: Option<String>,

    /// Domain/category
    pub domain: Option<String>,

    /// Maturity level
    pub maturity: Option<String>,

    /// Status (active, deprecated, etc.)
    pub status: Option<String>,

    /// Authority/confidence score
    pub authority_score: Option<f32>,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_ontology_data_creation() {
        let metadata = OntologyMetadata {
            iri: "http://example.org/ontology".to_string(),
            version: Some("1.0".to_string()),
            title: Some("Test Ontology".to_string()),
            description: None,
        };

        let data = OntologyData {
            metadata,
            classes: vec![],
            properties: vec![],
            namespaces: vec![],
        };

        assert_eq!(data.classes.len(), 0);
        assert_eq!(data.metadata.iri, "http://example.org/ontology");
    }

    #[test]
    fn test_class_node_with_attributes() {
        let class = ClassNode {
            id: "class1".to_string(),
            iri: "http://example.org/Class1".to_string(),
            label: "Class 1".to_string(),
            class_type: "owl:Class".to_string(),
            equivalent: vec![],
            attributes: ClassAttributes {
                external: false,
                individuals: Some(10),
                properties: std::collections::HashMap::new(),
            },
            ontology_meta: None,
        };

        assert_eq!(class.attributes.individuals, Some(10));
        assert!(!class.attributes.external);
    }

    #[test]
    fn test_class_ontology_metadata() {
        let meta = ClassOntologyMetadata {
            term_id: "term1".to_string(),
            preferred_term: Some("PreferredTerm".to_string()),
            domain: Some("TechnologyDomain".to_string()),
            maturity: Some("Stable".to_string()),
            status: Some("Active".to_string()),
            authority_score: Some(0.95),
        };

        assert_eq!(meta.term_id, "term1");
        assert_eq!(meta.preferred_term, Some("PreferredTerm".to_string()));
        assert_eq!(meta.authority_score, Some(0.95));
    }

    #[test]
    fn test_property_with_characteristics() {
        let prop = Property {
            id: "prop1".to_string(),
            iri: "http://example.org/prop1".to_string(),
            label: "Property 1".to_string(),
            property_type: PropertyType::ObjectProperty,
            domain: "class1".to_string(),
            range: "class2".to_string(),
            characteristics: PropertyCharacteristics {
                functional: true,
                transitive: false,
                symmetric: false,
                inverse_functional: false,
                cardinality: Some(Cardinality {
                    min: Some(1),
                    max: Some(1),
                    exact: None,
                }),
            },
        };

        assert!(prop.characteristics.functional);
        assert_eq!(prop.characteristics.cardinality.as_ref().unwrap().min, Some(1));
    }
}
