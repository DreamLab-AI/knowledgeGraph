//! Tests for markdown ontology parser (new standardized format)

use webvowl_wasm::ontology::{
    markdown_parser::MarkdownParser,
    Domain,
};

#[test]
fn test_parse_ai_domain_ontology() {
    let markdown = r#"
- ### OntologyBlock
  id:: large-language-models-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: AI-0850
    - preferred-term:: Large Language Models
    - alt-terms:: [[LLM]], [[Foundation Models]]
    - source-domain:: ai
    - status:: complete
    - public-access:: true
    - version:: 1.2.0
    - last-updated:: 2025-11-21
    - quality-score:: 0.92

  - **Definition**
    - definition:: Large Language Models are deep learning systems trained on vast text corpora.
    - maturity:: mature
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:LargeLanguageModel
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - **AI Model Properties**
    - ai:model-architecture:: transformer
    - ai:parameter-count:: 175000000000
    - ai:training-method:: self-supervised

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :LargeLanguageModel))
      (SubClassOf :LargeLanguageModel :MachineLearning)
      ```

## About Large Language Models
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok(), "Parse failed: {:?}", result.err());

    let block = result.unwrap();
    assert_eq!(block.term_id, "AI-0850");
    assert_eq!(block.preferred_term, "Large Language Models");
    assert_eq!(block.domain, Domain::AI);
    assert_eq!(block.iri, "http://narrativegoldmine.com/ai#LargeLanguageModel");
    assert!(block.is_public);

    // Check AI-specific extensions
    assert_eq!(block.extension_properties.get("ai:model-architecture"), Some(&"transformer".to_string()));
    assert_eq!(block.extension_properties.get("ai:parameter-count"), Some(&"175000000000".to_string()));

    // Check OWL axioms
    assert!(block.owl_axioms.is_some());
    assert!(block.owl_axioms.as_ref().unwrap().contains("LargeLanguageModel"));
}

#[test]
fn test_parse_blockchain_domain() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0051
    - preferred-term:: Consensus Mechanism
    - public-access:: true
    - ontology:: true
    - source-domain:: blockchain
    - status:: complete

  - **Semantic Classification**
    - owl:class:: bc:ConsensusMechanism
    - owl:physicality:: AbstractEntity
    - owl:role:: Process

  - **Blockchain Properties**
    - bc:consensus-type:: proof-of-stake
    - bc:finality-type:: probabilistic
    - bc:energy-efficient:: true
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok());

    let block = result.unwrap();
    assert_eq!(block.domain, Domain::Blockchain);
    assert_eq!(block.iri, "http://narrativegoldmine.com/blockchain#ConsensusMechanism");

    // Check blockchain-specific extensions
    assert_eq!(block.extension_properties.get("bc:consensus-type"), Some(&"proof-of-stake".to_string()));
    assert_eq!(block.extension_properties.get("bc:energy-efficient"), Some(&"true".to_string()));
}

#[test]
fn test_parse_robotics_domain() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: RB-0010
    - preferred-term:: Autonomous Navigation
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: rb:AutonomousNavigation
    - owl:physicality:: HybridEntity
    - owl:role:: Process

  - **Robotics Properties**
    - rb:navigation-type:: slam
    - rb:sensor-fusion:: true
    - rb:real-time:: true
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok());

    let block = result.unwrap();
    assert_eq!(block.domain, Domain::Robotics);
    assert_eq!(block.iri, "http://narrativegoldmine.com/robotics#AutonomousNavigation");

    // Check robotics-specific extensions
    assert_eq!(block.extension_properties.get("rb:navigation-type"), Some(&"slam".to_string()));
    assert_eq!(block.extension_properties.get("rb:sensor-fusion"), Some(&"true".to_string()));
}

#[test]
fn test_parse_metaverse_domain() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: 20001
    - preferred-term:: Virtual World
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: mv:VirtualWorld
    - owl:physicality:: VirtualEntity
    - owl:role:: Object

  - **Metaverse Properties**
    - mv:platform-type:: web3
    - mv:interoperability:: true
    - mv:persistence:: true
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok());

    let block = result.unwrap();
    assert_eq!(block.domain, Domain::Metaverse);
    assert_eq!(block.iri, "http://narrativegoldmine.com/metaverse#VirtualWorld");

    // Check metaverse-specific extensions
    assert_eq!(block.extension_properties.get("mv:platform-type"), Some(&"web3".to_string()));
}

#[test]
fn test_parse_telecollaboration_domain() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: TC-0001
    - preferred-term:: Video Conferencing
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: tc:VideoConferencing
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - **Telecollaboration Properties**
    - tc:synchronous:: true
    - tc:multi-party:: true
    - tc:screen-sharing:: true
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok());

    let block = result.unwrap();
    assert_eq!(block.domain, Domain::Telecollaboration);
    assert_eq!(block.iri, "http://narrativegoldmine.com/telecollaboration#VideoConferencing");

    // Check telecollaboration-specific extensions
    assert_eq!(block.extension_properties.get("tc:synchronous"), Some(&"true".to_string()));
}

#[test]
fn test_parse_disruptive_tech_domain() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: DT-0001
    - preferred-term:: Platform Innovation
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: dt:PlatformInnovation
    - owl:physicality:: AbstractEntity
    - owl:role:: Concept

  - **Disruptive Tech Properties**
    - dt:disruption-level:: high
    - dt:adoption-curve:: early-majority
    - dt:market-impact:: transformative
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_ok());

    let block = result.unwrap();
    assert_eq!(block.domain, Domain::DisruptiveTech);
    assert_eq!(block.iri, "http://narrativegoldmine.com/disruptive-tech#PlatformInnovation");

    // Check disruptive tech-specific extensions
    assert_eq!(block.extension_properties.get("dt:disruption-level"), Some(&"high".to_string()));
}

#[test]
fn test_all_domains() {
    let domains = vec![
        Domain::AI,
        Domain::Blockchain,
        Domain::Robotics,
        Domain::Metaverse,
        Domain::Telecollaboration,
        Domain::DisruptiveTech,
    ];

    for domain in domains {
        // Test prefix
        assert!(!domain.prefix().is_empty());

        // Test base URI
        assert!(domain.base_uri().starts_with("http://"));

        // Test round-trip through prefix
        assert_eq!(Domain::from_prefix(domain.prefix()), Some(domain));
    }
}

#[test]
fn test_domain_from_prefix() {
    assert_eq!(Domain::from_prefix("ai"), Some(Domain::AI));
    assert_eq!(Domain::from_prefix("aigo"), Some(Domain::AI)); // Alternative prefix
    assert_eq!(Domain::from_prefix("bc"), Some(Domain::Blockchain));
    assert_eq!(Domain::from_prefix("rb"), Some(Domain::Robotics));
    assert_eq!(Domain::from_prefix("mv"), Some(Domain::Metaverse));
    assert_eq!(Domain::from_prefix("tc"), Some(Domain::Telecollaboration));
    assert_eq!(Domain::from_prefix("dt"), Some(Domain::DisruptiveTech));
    assert_eq!(Domain::from_prefix("unknown"), None);
}

#[test]
fn test_missing_required_properties() {
    let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - ontology:: true
    - term-id:: AI-0001
    # Missing preferred-term and owl:class
"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(markdown);

    assert!(result.is_err());
}

#[test]
fn test_public_access_flag() {
    let markdown_public = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0001
    - preferred-term:: Test Concept
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: ai:TestConcept
"#;

    let markdown_private = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: AI-0002
    - preferred-term:: Private Concept
    - public-access:: false
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: ai:PrivateConcept
"#;

    let parser = MarkdownParser::new();

    let public_block = parser.parse(markdown_public).unwrap();
    assert!(public_block.is_public);

    let private_block = parser.parse(markdown_private).unwrap();
    assert!(!private_block.is_public);
}
