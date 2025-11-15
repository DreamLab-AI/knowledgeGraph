//! Integration tests for WebVOWL WASM

use webvowl_wasm::{
    graph::{builder::GraphBuilder, VowlGraph},
    layout::{simulation::ForceSimulation, LayoutAlgorithm},
    ontology::{parser::StandardParser, OntologyParser},
};

#[test]
fn test_full_pipeline() {
    // 1. Parse ontology
    let json = r#"
    {
        "header": {
            "iri": "http://test.org/ontology",
            "title": "Test Ontology"
        },
        "class": [
            {
                "id": "person",
                "label": "Person",
                "type": "owl:Class"
            },
            {
                "id": "organization",
                "label": "Organization",
                "type": "owl:Class"
            }
        ],
        "property": [
            {
                "id": "worksFor",
                "label": "works for",
                "type": "owl:ObjectProperty",
                "domain": "person",
                "range": "organization",
                "functional": true
            }
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Failed to parse ontology");

    assert_eq!(ontology.classes.len(), 2);
    assert_eq!(ontology.properties.len(), 1);

    // 2. Validate ontology
    parser.validate(&ontology).expect("Validation failed");

    // 3. Build graph
    let mut graph = GraphBuilder::from_ontology(&ontology).expect("Failed to build graph");

    assert_eq!(graph.node_count(), 2);
    assert_eq!(graph.edge_count(), 1);

    // 4. Run force simulation
    let mut simulation = ForceSimulation::new();
    simulation
        .run(&mut graph, 50)
        .expect("Simulation failed");

    // 5. Verify nodes have moved
    for node in graph.nodes() {
        // Nodes should have non-zero positions after simulation
        let has_position = node.visual.x.abs() > 0.1 || node.visual.y.abs() > 0.1;
        assert!(
            has_position,
            "Node {} should have moved during simulation",
            node.id
        );
    }
}

#[test]
fn test_large_ontology() {
    // Create a larger test ontology
    let mut classes = Vec::new();
    let mut properties = Vec::new();

    for i in 0..50 {
        classes.push(format!(
            r#"{{"id": "class{}", "label": "Class {}", "type": "owl:Class"}}"#,
            i, i
        ));
    }

    for i in 0..40 {
        let domain = i;
        let range = (i + 1) % 50;
        properties.push(format!(
            r#"{{"id": "prop{}", "label": "Prop {}", "type": "owl:ObjectProperty", "domain": "class{}", "range": "class{}"}}"#,
            i, i, domain, range
        ));
    }

    let json = format!(
        r#"{{
        "header": {{"iri": "http://test.org/large"}},
        "class": [{}],
        "property": [{}]
    }}"#,
        classes.join(","),
        properties.join(",")
    );

    let parser = StandardParser::new();
    let ontology = parser.parse(&json).expect("Failed to parse large ontology");

    assert_eq!(ontology.classes.len(), 50);
    assert_eq!(ontology.properties.len(), 40);

    let mut graph = GraphBuilder::from_ontology(&ontology).expect("Failed to build graph");

    let mut simulation = ForceSimulation::new();
    simulation.run(&mut graph, 100).expect("Simulation failed");

    // Verify graph statistics
    assert_eq!(graph.node_count(), 50);
    assert_eq!(graph.edge_count(), 40);
}

#[test]
fn test_graph_statistics() {
    let json = r#"
    {
        "class": [
            {"id": "a", "label": "A", "type": "owl:Class"},
            {"id": "b", "label": "B", "type": "owl:Class"},
            {"id": "c", "label": "C", "type": "owl:Class"}
        ],
        "property": [
            {"id": "p1", "label": "P1", "type": "owl:ObjectProperty", "domain": "a", "range": "b"},
            {"id": "p2", "label": "P2", "type": "owl:ObjectProperty", "domain": "b", "range": "c"},
            {"id": "p3", "label": "P3", "type": "owl:ObjectProperty", "domain": "a", "range": "c"}
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).expect("Parse failed");
    let graph = GraphBuilder::from_ontology(&ontology).expect("Build failed");

    let metadata = graph.metadata();
    assert_eq!(metadata.class_count, 3);
    assert_eq!(metadata.property_count, 3);
    assert!(metadata.density > 0.0);
}

#[test]
fn test_simulation_convergence() {
    let json = r#"
    {
        "class": [
            {"id": "a", "label": "A"},
            {"id": "b", "label": "B"},
            {"id": "c", "label": "C"}
        ],
        "property": [
            {"id": "p1", "domain": "a", "range": "b"},
            {"id": "p2", "domain": "b", "range": "c"}
        ]
    }
    "#;

    let parser = StandardParser::new();
    let ontology = parser.parse(json).unwrap();
    let mut graph = GraphBuilder::from_ontology(&ontology).unwrap();

    let mut simulation = ForceSimulation::new();
    simulation.initialize(&mut graph).unwrap();

    let initial_alpha = simulation.alpha();
    assert_eq!(initial_alpha, 1.0);

    // Run until convergence
    simulation.run(&mut graph, 1000).unwrap();

    assert!(simulation.is_finished());
    assert!(simulation.alpha() < 0.01);
}

#[test]
fn test_error_handling() {
    let parser = StandardParser::new();

    // Test invalid JSON
    let result = parser.parse("invalid json");
    assert!(result.is_err());

    // Test empty ontology (valid - empty arrays allowed)
    let json = r#"{"class": [], "property": []}"#;
    let result = parser.parse(json);
    assert!(result.is_ok(), "Empty ontology should be valid"); // Empty arrays are valid

    // Test invalid property reference
    let json = r#"
    {
        "class": [{"id": "a", "label": "A"}],
        "property": [{"id": "p1", "domain": "invalid", "range": "a"}]
    }
    "#;

    let ontology = parser.parse(json).unwrap();
    let result = parser.validate(&ontology);
    assert!(result.is_err());
}
