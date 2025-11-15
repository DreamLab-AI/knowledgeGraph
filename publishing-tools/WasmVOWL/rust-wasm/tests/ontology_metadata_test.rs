//! Tests for ontology metadata support (Phase 3, Task 3.1)

use webvowl_wasm::{
    graph::{builder::GraphBuilder, SemanticRelationType},
    ontology::{parser::StandardParser, ClassOntologyMetadata, OntologyParser},
};

#[test]
fn test_parse_ontology_metadata_from_webvowl_json() {
    let json = r#"
    {
        "header": {
            "iri": "http://example.org/test",
            "title": "Test Ontology with Metadata"
        },
        "class": [
            {
                "id": "dataScience",
                "label": "Data Science",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "Data Science",
                    "domain": "Technology",
                    "maturity": "Established",
                    "status": "Active",
                    "authorityScore": 0.92
                }
            },
            {
                "id": "machineLearning",
                "label": "Machine Learning",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "ML",
                    "domain": "AI",
                    "maturity": "Mature",
                    "status": "Active",
                    "authorityScore": 0.95
                }
            }
        ],
        "property": [
            {
                "id": "requires",
                "label": "requires",
                "type": "owl:ObjectProperty",
                "domain": "dataScience",
                "range": "machineLearning"
            }
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse ontology");

    assert_eq!(ontology.classes.len(), 2);

    // Check first class metadata
    let ds_class = &ontology.classes[0];
    assert!(ds_class.ontology_meta.is_some());

    let ds_meta = ds_class.ontology_meta.as_ref().unwrap();
    assert_eq!(ds_meta.term_id, "dataScience");
    assert_eq!(ds_meta.preferred_term, Some("Data Science".to_string()));
    assert_eq!(ds_meta.domain, Some("Technology".to_string()));
    assert_eq!(ds_meta.maturity, Some("Established".to_string()));
    assert_eq!(ds_meta.status, Some("Active".to_string()));
    assert_eq!(ds_meta.authority_score, Some(0.92));

    // Check second class metadata
    let ml_class = &ontology.classes[1];
    assert!(ml_class.ontology_meta.is_some());

    let ml_meta = ml_class.ontology_meta.as_ref().unwrap();
    assert_eq!(ml_meta.preferred_term, Some("ML".to_string()));
    assert_eq!(ml_meta.authority_score, Some(0.95));
}

#[test]
fn test_class_without_metadata() {
    let json = r#"
    {
        "class": [
            {
                "id": "simpleClass",
                "label": "Simple Class",
                "type": "owl:Class"
            }
        ],
        "property": []
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse");

    assert_eq!(ontology.classes.len(), 1);
    assert!(ontology.classes[0].ontology_meta.is_none());
}

#[test]
fn test_metadata_propagation_to_graph() {
    let json = r#"
    {
        "class": [
            {
                "id": "technology",
                "label": "Technology",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "Tech",
                    "domain": "Innovation",
                    "maturity": "Stable",
                    "status": "Active",
                    "authorityScore": 0.88
                }
            }
        ],
        "property": []
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse");

    // Build graph from ontology
    let graph = GraphBuilder::from_ontology(&ontology).expect("Failed to build graph");

    assert_eq!(graph.node_count(), 1);

    // Verify metadata was propagated to graph node
    let node = graph.get_node("technology").expect("Node not found");
    assert!(node.semantic.ontology_meta.is_some());

    let meta = node.semantic.ontology_meta.as_ref().unwrap();
    assert_eq!(meta.preferred_term, Some("Tech".to_string()));
    assert_eq!(meta.domain, Some("Innovation".to_string()));
    assert_eq!(meta.authority_score, Some(0.88));
}

#[test]
fn test_partial_metadata() {
    let json = r#"
    {
        "class": [
            {
                "id": "partialMeta",
                "label": "Partial Metadata",
                "type": "owl:Class",
                "attributes": {
                    "domain": "TestDomain",
                    "status": "Active"
                }
            }
        ],
        "property": []
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse");

    let class = &ontology.classes[0];
    assert!(class.ontology_meta.is_some());

    let meta = class.ontology_meta.as_ref().unwrap();
    assert_eq!(meta.domain, Some("TestDomain".to_string()));
    assert_eq!(meta.status, Some("Active".to_string()));
    assert_eq!(meta.preferred_term, None);
    assert_eq!(meta.maturity, None);
    assert_eq!(meta.authority_score, None);
}

#[test]
fn test_semantic_relation_type_enum() {
    use SemanticRelationType::*;

    let relations = vec![
        SubClassOf,
        EnablesCapability,
        UsesTechnology,
        RequiresInfrastructure,
        SupportsProcess,
        RelatedTo,
        PartOf,
        ObjectProperty,
        DatatypeProperty,
        Other,
    ];

    assert_eq!(relations.len(), 10);

    // Test equality
    assert_eq!(SubClassOf, SubClassOf);
    assert_ne!(SubClassOf, EnablesCapability);

    // Test copy trait
    let rel1 = SubClassOf;
    let rel2 = rel1;
    assert_eq!(rel1, rel2);
}

#[test]
fn test_metadata_serialization() {
    let meta = ClassOntologyMetadata {
        term_id: "test_term".to_string(),
        preferred_term: Some("Test Term".to_string()),
        domain: Some("Testing".to_string()),
        maturity: Some("Experimental".to_string()),
        status: Some("Draft".to_string()),
        authority_score: Some(0.75),
    };

    // Test serialization to JSON
    let json = serde_json::to_string(&meta).expect("Failed to serialize");
    assert!(json.contains("test_term"));
    assert!(json.contains("Test Term"));
    assert!(json.contains("0.75"));

    // Test deserialization
    let deserialized: ClassOntologyMetadata =
        serde_json::from_str(&json).expect("Failed to deserialize");
    assert_eq!(deserialized, meta);
}

#[test]
fn test_metadata_default() {
    let meta = ClassOntologyMetadata::default();

    assert_eq!(meta.term_id, "");
    assert_eq!(meta.preferred_term, None);
    assert_eq!(meta.domain, None);
    assert_eq!(meta.maturity, None);
    assert_eq!(meta.status, None);
    assert_eq!(meta.authority_score, None);
}

#[test]
fn test_snake_case_and_camel_case_attributes() {
    // Test both snake_case and camelCase attribute names
    let json = r#"
    {
        "class": [
            {
                "id": "mixedCase",
                "label": "Mixed Case Test",
                "type": "owl:Class",
                "attributes": {
                    "preferred_term": "SnakeCase",
                    "authorityScore": 0.9
                }
            }
        ],
        "property": []
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse");

    let meta = ontology.classes[0]
        .ontology_meta
        .as_ref()
        .expect("Metadata not found");

    assert_eq!(meta.preferred_term, Some("SnakeCase".to_string()));
    assert_eq!(meta.authority_score, Some(0.9));
}

#[test]
fn test_complex_ontology_with_metadata() {
    let json = r#"
    {
        "header": {
            "iri": "http://example.org/complex",
            "title": "Complex Ontology"
        },
        "class": [
            {
                "id": "artificialIntelligence",
                "label": "Artificial Intelligence",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "AI",
                    "domain": "Computer Science",
                    "maturity": "Evolving",
                    "status": "Active",
                    "authorityScore": 0.98
                }
            },
            {
                "id": "neuralNetworks",
                "label": "Neural Networks",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "NN",
                    "domain": "Machine Learning",
                    "maturity": "Mature",
                    "status": "Active",
                    "authorityScore": 0.96
                }
            },
            {
                "id": "deepLearning",
                "label": "Deep Learning",
                "type": "owl:Class",
                "attributes": {
                    "preferredTerm": "DL",
                    "domain": "AI",
                    "maturity": "Emerging",
                    "status": "Active",
                    "authorityScore": 0.94
                }
            }
        ],
        "property": [
            {
                "id": "usesTechnology",
                "label": "uses technology",
                "type": "owl:ObjectProperty",
                "domain": "deepLearning",
                "range": "neuralNetworks",
                "functional": true
            },
            {
                "id": "partOf",
                "label": "part of",
                "type": "owl:ObjectProperty",
                "domain": "neuralNetworks",
                "range": "artificialIntelligence"
            }
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse");

    assert_eq!(ontology.classes.len(), 3);
    assert_eq!(ontology.properties.len(), 2);

    // Build graph and verify metadata
    let graph = GraphBuilder::from_ontology(&ontology).expect("Failed to build graph");

    assert_eq!(graph.node_count(), 3);
    assert_eq!(graph.edge_count(), 2);

    // Verify all nodes have metadata
    for class in &ontology.classes {
        let node = graph.get_node(&class.id).expect("Node not found");
        assert!(
            node.semantic.ontology_meta.is_some(),
            "Node {} missing metadata",
            class.id
        );

        let meta = node.semantic.ontology_meta.as_ref().unwrap();
        assert!(meta.authority_score.unwrap() >= 0.94);
        assert_eq!(meta.status, Some("Active".to_string()));
    }
}

#[test]
fn test_edge_with_relation_type() {
    use webvowl_wasm::graph::{edge::EdgeBuilder, EdgeType};

    let edge = EdgeBuilder::new("test_edge")
        .label("Test Edge")
        .edge_type(EdgeType::ObjectProperty)
        .build();

    assert_eq!(edge.id, "test_edge");
    assert_eq!(edge.label, "Test Edge");
    assert!(edge.relation_type.is_none()); // Default is None
}

#[test]
fn test_graph_metadata_statistics() {
    let json = r#"
    {
        "class": [
            {"id": "a", "label": "A", "type": "owl:Class"},
            {"id": "b", "label": "B", "type": "owl:Class"},
            {"id": "c", "label": "C", "type": "owl:Class"}
        ],
        "property": [
            {"id": "p1", "type": "owl:ObjectProperty", "domain": "a", "range": "b"},
            {"id": "p2", "type": "owl:ObjectProperty", "domain": "b", "range": "c"}
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Parse failed");
    let graph = GraphBuilder::from_ontology(&ontology).expect("Build failed");

    let metadata = graph.metadata();
    assert_eq!(metadata.class_count, 3);
    assert_eq!(metadata.property_count, 2);
    assert!(metadata.density > 0.0);
}
