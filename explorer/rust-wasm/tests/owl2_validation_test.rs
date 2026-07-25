//! OWL2 Validation Integration Tests
//!
//! These tests demonstrate the OWL2 validation functionality
//! for the markdown ontology parser.

use webvowl_wasm::ontology::{
    markdown_parser::MarkdownParser,
    owl2_validator::OWL2Validator,
    Domain,
};

#[test]
fn test_valid_ai_ontology_block() {
    let markdown = r#"
- ### OntologyBlock
  id:: test-ai-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0001
    - preferred-term:: Test AI Class
    - source-domain:: ai
    - status:: complete
    - version:: 1.0
    - last-updated:: 2025-11-21

  - **Definition**
    - definition:: This is a test AI ontology class for validation
    - maturity:: mature
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:TestAIClass
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :TestAIClass))
      (SubClassOf :TestAIClass :AISystem)
      ```
"#;

    let mut parser = MarkdownParser::new();
    let result = parser.parse(markdown);
    assert!(result.is_ok(), "Parse failed: {:?}", result.err());

    let block = result.unwrap();
    let validation = parser.validate(&block);

    println!("Validation result: {:?}", validation);
    assert!(validation.valid, "Validation should pass for a well-formed block");
    assert_eq!(validation.errors.len(), 0, "Should have no errors");
}

#[test]
fn test_invalid_iri_format() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Test Class
    - public-access:: true

  - **Semantic Classification**
    - owl:class:: ai:TestClass

  - **Definition**
    - definition:: Test definition
    - maturity:: mature
    - status:: complete
"#;

    let mut parser = MarkdownParser::new();
    let result = parser.parse(markdown);
    assert!(result.is_ok());

    let block = result.unwrap();
    let validation = parser.validate(&block);

    println!("Validation result: {:?}", validation);
    // Should have warnings about missing properties
    assert!(validation.warnings.len() > 0);
}

#[test]
fn test_namespace_validation() {
    let validator = OWL2Validator::new();

    // Valid namespace
    let result = validator.validate_namespace(
        &Domain::AI,
        "http://narrativegoldmine.com/ai#TestClass",
    );
    assert!(result.is_ok());

    // Invalid namespace (wrong domain)
    let result = validator.validate_namespace(
        &Domain::Blockchain,
        "http://narrativegoldmine.com/ai#TestClass",
    );
    assert!(result.is_err());

    // Invalid class name (lowercase start)
    let result = validator.validate_namespace(
        &Domain::AI,
        "http://narrativegoldmine.com/ai#testClass",
    );
    assert!(result.is_err());
}

#[test]
fn test_iri_format_validation() {
    let validator = OWL2Validator::new();

    // Valid IRIs
    assert!(validator.validate_iri_format("http://example.com/ont#Class").is_ok());
    assert!(validator.validate_iri_format("https://example.org/ont#Thing").is_ok());

    // Invalid IRIs
    assert!(validator.validate_iri_format("").is_err()); // Empty
    assert!(validator.validate_iri_format("relative#Class").is_err()); // Relative
    assert!(validator.validate_iri_format("http://example.com/ont").is_err()); // No fragment
}

#[test]
fn test_iri_uniqueness_checking() {
    let mut validator = OWL2Validator::new();

    let iri1 = "http://example.com/ont#Class1";
    let iri2 = "http://example.com/ont#Class2";

    // First time should be unique
    assert!(validator.check_iri_uniqueness(iri1));
    assert!(validator.check_iri_uniqueness(iri2));

    // Second time should be duplicate
    assert!(!validator.check_iri_uniqueness(iri1));
    assert!(!validator.check_iri_uniqueness(iri2));

    // After reset, should be unique again
    validator.reset();
    assert!(validator.check_iri_uniqueness(iri1));
}

#[test]
fn test_owl2_dl_compliance_missing_properties() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-9999
    - preferred-term:: Incomplete Class
    - public-access:: true

  - **Semantic Classification**
    - owl:class:: ai:IncompleteClass
"#;

    let mut parser = MarkdownParser::new();
    let result = parser.parse(markdown);
    assert!(result.is_ok());

    let block = result.unwrap();
    let validation = parser.validate(&block);

    println!("Validation warnings: {:?}", validation.warnings);

    // Should have multiple warnings about missing properties
    assert!(validation.warnings.len() > 5);
    assert!(validation.warnings.iter().any(|w| w.contains("definition")));
    assert!(validation.warnings.iter().any(|w| w.contains("OWL axioms")));
    assert!(validation.warnings.iter().any(|w| w.contains("owl:physicality")));
    assert!(validation.warnings.iter().any(|w| w.contains("owl:role")));
}

#[test]
fn test_antipattern_detection() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Completely Different Name
    - public-access:: true

  - **Semantic Classification**
    - owl:class:: ai:AI

  - **Definition**
    - definition:: Test
    - maturity:: mature
    - status:: complete
"#;

    let mut parser = MarkdownParser::new();
    let result = parser.parse(markdown);
    assert!(result.is_ok());

    let block = result.unwrap();
    let validation = parser.validate(&block);

    println!("Antipattern warnings: {:?}", validation.warnings);

    // Should detect short class name
    assert!(validation.warnings.iter().any(|w| w.contains("too short")));

    // Should detect mismatched preferred term
    assert!(validation.warnings.iter().any(|w| w.contains("doesn't relate to class name")));
}

#[test]
fn test_multiple_blocks_validation() {
    let markdown1 = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Class One
    - public-access:: true
    - version:: 1.0
    - last-updated:: 2025-11-21

  - **Semantic Classification**
    - owl:class:: ai:ClassOne
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - **Definition**
    - definition:: First test class
    - maturity:: mature
    - status:: complete

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :ClassOne))
      ```
"#;

    let markdown2 = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0002
    - preferred-term:: Class Two
    - public-access:: true
    - version:: 1.0
    - last-updated:: 2025-11-21

  - **Semantic Classification**
    - owl:class:: ai:ClassTwo
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - **Definition**
    - definition:: Second test class
    - maturity:: mature
    - status:: complete

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :ClassTwo))
      ```
"#;

    let parser = MarkdownParser::new();
    let block1 = parser.parse(markdown1).unwrap();
    let block2 = parser.parse(markdown2).unwrap();

    let blocks = vec![block1, block2];

    let mut validator = OWL2Validator::new();
    let result = validator.validate_blocks(&blocks);

    println!("Multi-block validation: {:?}", result);
    assert!(result.valid);
    assert_eq!(result.errors.len(), 0);
}

#[test]
fn test_duplicate_iris_detection() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Test Class
    - public-access:: true
    - version:: 1.0
    - last-updated:: 2025-11-21

  - **Semantic Classification**
    - owl:class:: ai:DuplicateClass
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - **Definition**
    - definition:: Test definition
    - maturity:: mature
    - status:: complete

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :DuplicateClass))
      ```
"#;

    let parser = MarkdownParser::new();
    let block1 = parser.parse(markdown).unwrap();
    let block2 = block1.clone(); // Same IRI

    let blocks = vec![block1, block2];

    let mut validator = OWL2Validator::new();
    let result = validator.validate_blocks(&blocks);

    println!("Duplicate IRI validation: {:?}", result);
    assert!(!result.valid);
    assert!(result.errors.iter().any(|e| e.contains("Duplicate IRI")));
}

#[test]
fn test_all_domains() {
    let domains = vec![
        ("ai", Domain::AI),
        ("bc", Domain::Blockchain),
        ("rb", Domain::Robotics),
        ("mv", Domain::Metaverse),
        ("tc", Domain::Telecollaboration),
        ("dt", Domain::DisruptiveTech),
    ];

    let validator = OWL2Validator::new();

    for (prefix, domain) in domains {
        let iri = format!("http://narrativegoldmine.com/{}#TestClass",
            prefix.replace("bc", "blockchain")
                .replace("rb", "robotics")
                .replace("mv", "metaverse")
                .replace("tc", "telecollaboration")
                .replace("dt", "disruptive-tech")
                .replace("ai", "ai")
        );

        let result = validator.validate_namespace(&domain, &iri);
        assert!(result.is_ok(), "Domain {} validation failed: {:?}", prefix, result.err());
    }
}
