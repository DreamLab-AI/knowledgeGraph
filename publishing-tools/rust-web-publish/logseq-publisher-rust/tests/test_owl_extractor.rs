use logseq_publisher_rust::owl_extractor::*;

#[test]
fn test_extract_ontology_block_basic() {
    let content = r#"
- ### OntologyBlock
  id:: test-ontology

  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Test Class
    - source-domain:: ai-grounded
    - status:: complete

  - **Definition**
    - definition:: A test ontology class for unit testing
    - maturity:: mature
    - authority-score:: 0.95

  - #### Relationships
    - is-subclass-of:: [[ParentClass]]

  - #### OWL Axioms
    - ```clojure
      Declaration(Class(:TestClass))
      SubClassOf(:TestClass :ParentClass)
      ```

- ## About Test Class
  This is additional content outside the ontology block.
"#;

    let owl_class = extract_ontology_block(content).expect("Failed to parse ontology block");

    assert_eq!(owl_class.term_id, "AI-0001");
    assert_eq!(owl_class.preferred_term, "Test Class");
    assert_eq!(owl_class.definition, "A test ontology class for unit testing");
    assert_eq!(owl_class.domain, Some("ai-grounded".to_string()));
    assert_eq!(owl_class.maturity, Some("mature".to_string()));
    assert_eq!(owl_class.authority_score, Some(0.95));
    assert_eq!(owl_class.parent_classes.len(), 1);
    assert_eq!(owl_class.parent_classes[0], "ParentClass");
}

#[test]
fn test_extract_ontology_block_ai_0376() {
    let content = r#"
- ### OntologyBlock
  id:: algorithmic-accountability-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0376
    - preferred-term:: Algorithmic Accountability
    - source-domain:: ai-grounded
    - status:: complete
    - version:: 1.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Algorithmic Accountability is a responsibility framework that ensures AI systems and their developers are answerable for the decisions, outcomes, and impacts produced by algorithmic processes, including mechanisms for redress, transparency, and oversight.
    - maturity:: mature
    - source:: [[IEEE P2863]]
    - authority-score:: 0.95

  - #### Relationships
    - is-subclass-of:: [[AIGovernancePrinciple]], [[EthicalFramework]], [[RegulatoryCompliance]]

  - #### OWL Axioms
    - ```clojure
      Declaration(Class(:AlgorithmicAccountability))
      SubClassOf(:AlgorithmicAccountability :AIGovernancePrinciple)
      SubClassOf(:AlgorithmicAccountability :EthicalFramework)
      ```

- ## About Algorithmic Accountability
"#;

    let owl_class = extract_ontology_block(content).expect("Failed to parse AI-0376");

    assert_eq!(owl_class.term_id, "AI-0376");
    assert_eq!(owl_class.preferred_term, "Algorithmic Accountability");
    assert_eq!(owl_class.domain, Some("ai-grounded".to_string()));
    assert_eq!(owl_class.parent_classes.len(), 3);
    assert!(owl_class.parent_classes.contains(&"AIGovernancePrinciple".to_string()));
    assert!(owl_class.parent_classes.contains(&"EthicalFramework".to_string()));
    assert!(owl_class.parent_classes.contains(&"RegulatoryCompliance".to_string()));
}

#[test]
fn test_extract_ontology_block_bc_0001() {
    let content = r#"
- ### OntologyBlock
  id:: blockchain-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: BC-0001
    - preferred-term:: Blockchain
    - source-domain:: blockchain
    - status:: complete
    - public-access:: true
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A blockchain is a distributed, cryptographically-secured data structure consisting of an ordered chain of blocks, where each block contains a cryptographic hash of the previous block, a timestamp, and transaction data, maintained through a consensus mechanism across a peer-to-peer network without requiring a trusted central authority.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]]
    - authority-score:: 1.0

  - #### Relationships
    - is-subclass-of:: [[Distributed Data Structure]], [[Distributed Ledger]], [[Cryptographic System]]

  - #### OWL Axioms
    - ```clojure
      Declaration(Class(:Blockchain))
      SubClassOf(:Blockchain :DistributedDataStructure)
      SubClassOf(:Blockchain :CryptographicSystem)
      ObjectPropertyDomain :containsBlock :Blockchain
      ObjectPropertyRange :containsBlock :Block
      ```

- ## About Blockchain
"#;

    let owl_class = extract_ontology_block(content).expect("Failed to parse BC-0001");

    assert_eq!(owl_class.term_id, "BC-0001");
    assert_eq!(owl_class.preferred_term, "Blockchain");
    assert_eq!(owl_class.domain, Some("blockchain".to_string()));
    assert_eq!(owl_class.authority_score, Some(1.0));
    assert_eq!(owl_class.parent_classes.len(), 3);
    assert!(owl_class.axioms.len() > 0);
}

#[test]
fn test_extract_relationships() {
    let content = r#"
- ### OntologyBlock
  - term-id:: TEST-001
  - preferred-term:: Test
  - definition:: Test definition

  - #### Relationships
    - is-subclass-of:: [[Parent1]], [[Parent2]]
    - enables-capability:: [[Capability1]]
    - uses-technology:: [[Technology1]], [[Technology2]]
"#;

    let owl_class = extract_ontology_block(content).expect("Failed to parse relationships");

    assert_eq!(owl_class.relationships.len(), 5);
    assert_eq!(owl_class.parent_classes.len(), 2);

    let subclass_rels: Vec<_> = owl_class
        .relationships
        .iter()
        .filter(|r| r.relationship_type == RelationshipType::SubClassOf)
        .collect();
    assert_eq!(subclass_rels.len(), 2);

    let capability_rels: Vec<_> = owl_class
        .relationships
        .iter()
        .filter(|r| r.relationship_type == RelationshipType::EnablesCapability)
        .collect();
    assert_eq!(capability_rels.len(), 1);
}

#[test]
fn test_build_rdf_triples() {
    let owl_class = OWLClass {
        term_id: "AI-0001".to_string(),
        preferred_term: "Machine Learning".to_string(),
        definition: "A subset of AI".to_string(),
        domain: Some("ai-grounded".to_string()),
        maturity: Some("mature".to_string()),
        authority_score: Some(0.95),
        source: None,
        relationships: vec![
            OWLRelationship {
                property: "enables-capability".to_string(),
                target: "Deep Learning".to_string(),
                relationship_type: RelationshipType::EnablesCapability,
            },
        ],
        parent_classes: vec!["Artificial Intelligence".to_string()],
        axioms: vec![],
    };

    let triples = build_rdf_triples(&[owl_class]);

    assert!(triples.len() >= 4); // type, label, comment, subClassOf, relationship

    // Check class declaration
    assert!(triples.iter().any(|t| t.predicate == "rdf:type" && t.object == "owl:Class"));

    // Check label
    assert!(triples.iter().any(|t| t.predicate == "rdfs:label" && t.object.contains("Machine Learning")));

    // Check subClassOf
    assert!(triples.iter().any(|t| t.predicate == "rdfs:subClassOf"));
}

#[test]
fn test_export_webvowl_json() {
    let owl_classes = vec![
        OWLClass {
            term_id: "AI-0001".to_string(),
            preferred_term: "Machine Learning".to_string(),
            definition: "A subset of AI".to_string(),
            domain: Some("ai-grounded".to_string()),
            maturity: Some("mature".to_string()),
            authority_score: Some(0.95),
            source: None,
            relationships: vec![
                OWLRelationship {
                    property: "is-subclass-of".to_string(),
                    target: "Artificial Intelligence".to_string(),
                    relationship_type: RelationshipType::SubClassOf,
                },
            ],
            parent_classes: vec!["Artificial Intelligence".to_string()],
            axioms: vec![],
        },
        OWLClass {
            term_id: "AI-0002".to_string(),
            preferred_term: "Artificial Intelligence".to_string(),
            definition: "AI definition".to_string(),
            domain: Some("ai-grounded".to_string()),
            maturity: Some("mature".to_string()),
            authority_score: Some(1.0),
            source: None,
            relationships: vec![],
            parent_classes: vec![],
            axioms: vec![],
        },
    ];

    let webvowl = export_webvowl_json(&owl_classes);

    assert_eq!(webvowl.class.len(), 2);
    assert_eq!(webvowl.class_attribute.len(), 2);
    assert!(webvowl.namespace.len() >= 5);
    assert!(webvowl.property.len() >= 1); // At least the subClassOf relationship
}

#[test]
fn test_missing_fields() {
    let content = r#"
- ### OntologyBlock
  - term-id:: TEST-001
  - preferred-term:: Minimal Test
  - definition:: Minimal definition
"#;

    let owl_class = extract_ontology_block(content).expect("Failed to parse minimal block");

    assert_eq!(owl_class.term_id, "TEST-001");
    assert_eq!(owl_class.preferred_term, "Minimal Test");
    assert_eq!(owl_class.domain, None);
    assert_eq!(owl_class.maturity, None);
    assert_eq!(owl_class.authority_score, None);
    assert_eq!(owl_class.relationships.len(), 0);
    assert_eq!(owl_class.axioms.len(), 0);
}

#[test]
fn test_invalid_yaml() {
    let content = r#"
- ### OntologyBlock
  This is not valid property syntax
  - preferred-term:: Only Term
"#;

    let owl_class = extract_ontology_block(content);

    // Should fail because term-id is missing
    assert!(owl_class.is_none());
}

#[test]
fn test_no_ontology_block() {
    let content = r#"
- ## Regular Page Header
  - This is just a regular page
  - No ontology block here
"#;

    let owl_class = extract_ontology_block(content);
    assert!(owl_class.is_none());
}

#[test]
fn test_namespace_uri() {
    let ai_class = OWLClass {
        term_id: "AI-0001".to_string(),
        preferred_term: "Test".to_string(),
        definition: String::new(),
        domain: None,
        maturity: None,
        authority_score: None,
        source: None,
        relationships: vec![],
        parent_classes: vec![],
        axioms: vec![],
    };

    assert!(ai_class.namespace_uri().contains("artificial-intelligence"));

    let bc_class = OWLClass {
        term_id: "BC-0001".to_string(),
        preferred_term: "Test".to_string(),
        definition: String::new(),
        domain: None,
        maturity: None,
        authority_score: None,
        source: None,
        relationships: vec![],
        parent_classes: vec![],
        axioms: vec![],
    };

    assert!(bc_class.namespace_uri().contains("blockchain"));
}

#[test]
fn test_iri_generation() {
    let owl_class = OWLClass {
        term_id: "AI-0001".to_string(),
        preferred_term: "Machine Learning".to_string(),
        definition: String::new(),
        domain: None,
        maturity: None,
        authority_score: None,
        source: None,
        relationships: vec![],
        parent_classes: vec![],
        axioms: vec![],
    };

    let iri = owl_class.iri();
    assert!(iri.contains("artificial-intelligence"));
    assert!(iri.contains("MachineLearning"));
}

#[test]
fn test_parse_owl_axioms_class_declaration() {
    let axiom_text = r#"
Declaration(Class(:TestClass))
Declaration(Class(:AnotherClass))
    "#;

    let axioms = logseq_publisher_rust::owl_extractor::parse_owl_axioms(axiom_text);

    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::ClassDeclaration { class_iri } if class_iri == "TestClass")));
    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::ClassDeclaration { class_iri } if class_iri == "AnotherClass")));
}

#[test]
fn test_parse_owl_axioms_subclass() {
    let axiom_text = r#"
SubClassOf(:Child :Parent)
SubClassOf(:GrandChild :Child)
    "#;

    let axioms = logseq_publisher_rust::owl_extractor::parse_owl_axioms(axiom_text);

    assert!(axioms.iter().any(|a| matches!(
        a,
        OWLAxiom::SubClassOf { subclass, superclass }
        if subclass == "Child" && superclass == "Parent"
    )));
}

#[test]
fn test_parse_owl_axioms_properties() {
    let axiom_text = r#"
Declaration(ObjectProperty(:hasComponent))
Declaration(DataProperty(:hasName))
ObjectPropertyDomain :hasComponent :System
ObjectPropertyRange :hasComponent :Component
    "#;

    let axioms = logseq_publisher_rust::owl_extractor::parse_owl_axioms(axiom_text);

    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::ObjectPropertyDeclaration { .. })));
    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::DataPropertyDeclaration { .. })));
    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::ObjectPropertyDomain { .. })));
    assert!(axioms.iter().any(|a| matches!(a, OWLAxiom::ObjectPropertyRange { .. })));
}
