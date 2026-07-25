//! Markdown ontology block parser for the new standardized format

use super::*;
use crate::{Result, VowlError};
use std::collections::HashMap;

/// Markdown ontology parser for the standardized format
pub struct MarkdownParser {
    /// Parser configuration
    #[allow(dead_code)]
    config: ParserConfig,
    /// OWL2 validator for validation checks
    validator: super::owl2_validator::OWL2Validator,
}

/// Parser configuration options
#[derive(Debug, Clone)]
pub struct ParserConfig {
    /// Strict mode - fail on any missing required properties
    pub strict_mode: bool,
}

impl Default for ParserConfig {
    fn default() -> Self {
        Self {
            strict_mode: false,
        }
    }
}

impl MarkdownParser {
    /// Create a new markdown parser with default configuration
    pub fn new() -> Self {
        Self {
            config: ParserConfig::default(),
            validator: super::owl2_validator::OWL2Validator::new(),
        }
    }

    /// Create a parser with custom configuration
    pub fn with_config(config: ParserConfig) -> Self {
        Self {
            config,
            validator: super::owl2_validator::OWL2Validator::new(),
        }
    }

    /// Validate a parsed ontology block
    pub fn validate(&mut self, block: &OntologyBlock) -> super::owl2_validator::ValidationResult {
        self.validator.validate_block(block)
    }

    /// Parse and validate ontology block
    pub fn parse_and_validate(&mut self, markdown: &str) -> Result<(OntologyBlock, super::owl2_validator::ValidationResult)> {
        let block = self.parse(markdown)?;
        let validation = self.validate(&block);
        Ok((block, validation))
    }

    /// Parse ontology block from markdown content
    pub fn parse(&self, markdown: &str) -> Result<OntologyBlock> {
        // Find ontology block
        let block_content = self.extract_ontology_block(markdown)?;

        // Extract all properties
        let properties = self.extract_all_properties(&block_content);

        // Parse core identification properties
        let term_id = self.get_required_property(&properties, "term-id")?;
        let preferred_term = self.get_required_property(&properties, "preferred-term")?;

        // Parse OWL class to get full IRI and domain
        let owl_class = self.get_required_property(&properties, "owl:class")?;
        let (domain, class_name) = self.parse_owl_class(&owl_class)?;
        let iri = self.build_full_iri(domain, &class_name);

        // Parse public access flag
        let is_public = properties
            .get("public-access")
            .and_then(|v| v.parse().ok())
            .unwrap_or(false);

        // Separate core properties from domain-specific extensions
        let (core_properties, extension_properties) = self.separate_properties(&properties);

        // Extract OWL axioms if present
        let owl_axioms = self.extract_owl_axioms(&block_content);

        // Build metadata
        let metadata = self.build_metadata(&properties, &term_id)?;

        Ok(OntologyBlock {
            iri,
            term_id,
            preferred_term,
            domain,
            core_properties,
            extension_properties,
            owl_axioms,
            is_public,
            metadata,
        })
    }

    /// Extract the ontology block from markdown content
    fn extract_ontology_block(&self, markdown: &str) -> Result<String> {
        // Find ### OntologyBlock section
        let start_marker = "### OntologyBlock";
        let start = markdown
            .find(start_marker)
            .ok_or_else(|| VowlError::ParseError("OntologyBlock section not found".to_string()))?;

        // Extract everything until the next ## heading or end of file
        let after_start = &markdown[start..];
        let end = after_start
            .find("\n##")
            .map(|pos| start + pos)
            .unwrap_or(markdown.len());

        Ok(markdown[start..end].to_string())
    }

    /// Extract all properties from block content
    fn extract_all_properties(&self, content: &str) -> HashMap<String, String> {
        let mut properties = HashMap::new();

        // Match pattern: property:: value
        let re = regex::Regex::new(r"(?m)^\s*-?\s*([a-zA-Z0-9_:-]+)::\s*(.+?)\s*$").unwrap();

        for cap in re.captures_iter(content) {
            if let (Some(key), Some(value)) = (cap.get(1), cap.get(2)) {
                let key_str = key.as_str().trim().to_string();
                let value_str = value.as_str().trim().to_string();

                // Skip if it's a code block marker or other non-property line
                if !value_str.starts_with("```") {
                    properties.insert(key_str, value_str);
                }
            }
        }

        properties
    }

    /// Get required property or error
    fn get_required_property(&self, props: &HashMap<String, String>, key: &str) -> Result<String> {
        props
            .get(key)
            .cloned()
            .ok_or_else(|| {
                VowlError::ParseError(format!("Required property '{}' not found", key))
            })
    }

    /// Parse owl:class property to extract domain and class name
    fn parse_owl_class(&self, owl_class: &str) -> Result<(Domain, String)> {
        // Format: namespace:ClassName (e.g., "ai:LargeLanguageModel" or "aigo:EdgeAISystem")
        let parts: Vec<&str> = owl_class.split(':').collect();

        if parts.len() != 2 {
            return Err(VowlError::ParseError(format!(
                "Invalid owl:class format: {}. Expected 'namespace:ClassName'",
                owl_class
            )));
        }

        let namespace = parts[0];
        let class_name = parts[1].to_string();

        let domain = Domain::from_prefix(namespace).ok_or_else(|| {
            VowlError::ParseError(format!("Unknown domain prefix: {}", namespace))
        })?;

        Ok((domain, class_name))
    }

    /// Build full IRI from domain and class name
    fn build_full_iri(&self, domain: Domain, class_name: &str) -> String {
        format!("{}{}", domain.base_uri(), class_name)
    }

    /// Separate core properties from domain-specific extensions
    fn separate_properties(
        &self,
        all_props: &HashMap<String, String>,
    ) -> (HashMap<String, String>, HashMap<String, String>) {
        let mut core = HashMap::new();
        let mut extensions = HashMap::new();

        // Domain prefixes for extension properties
        let domain_prefixes = vec!["ai:", "bc:", "rb:", "mv:", "tc:", "dt:"];

        for (key, value) in all_props {
            if domain_prefixes.iter().any(|prefix| key.starts_with(prefix)) {
                extensions.insert(key.clone(), value.clone());
            } else {
                core.insert(key.clone(), value.clone());
            }
        }

        (core, extensions)
    }

    /// Extract OWL axioms from code block
    fn extract_owl_axioms(&self, content: &str) -> Option<String> {
        // Look for OWL Axioms section with clojure code block
        let axiom_marker = "#### OWL Axioms";
        let axiom_start = content.find(axiom_marker)?;

        let after_marker = &content[axiom_start..];
        let code_start = after_marker.find("```clojure")?;
        let after_code_start = &after_marker[code_start + 10..]; // Skip "```clojure"

        let code_end = after_code_start.find("```")?;
        let axioms = after_code_start[..code_end].trim().to_string();

        if axioms.is_empty() {
            None
        } else {
            Some(axioms)
        }
    }

    /// Build ClassOntologyMetadata from properties
    fn build_metadata(
        &self,
        props: &HashMap<String, String>,
        term_id: &str,
    ) -> Result<ClassOntologyMetadata> {
        Ok(ClassOntologyMetadata {
            term_id: term_id.to_string(),
            preferred_term: props.get("preferred-term").cloned(),
            domain: props.get("source-domain").cloned(),
            maturity: props.get("maturity").cloned(),
            status: props.get("status").cloned(),
            authority_score: props
                .get("authority-score")
                .and_then(|v| v.parse().ok()),
        })
    }
}

impl Default for MarkdownParser {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_ai_ontology_block() {
        let markdown = r#"
- ### OntologyBlock
  id:: edge-ai-system-(ai-0431)-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0431
    - preferred-term:: Edge AI System
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: An Edge AI System is a distributed computing architecture.
    - maturity:: mature
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:EdgeAISystem
    - owl:physicality:: VirtualEntity
    - owl:role:: Process

  - #### OWL Axioms
    id:: edge-ai-system-(ai-0431)-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :EdgeAISystem))
      (SubClassOf :EdgeAISystem :AISystem)
      ```

## About Edge AI
"#;

        let parser = MarkdownParser::new();
        let result = parser.parse(markdown);

        assert!(result.is_ok(), "Parse failed: {:?}", result.err());

        let block = result.unwrap();
        assert_eq!(block.term_id, "AI-0431");
        assert_eq!(block.preferred_term, "Edge AI System");
        assert_eq!(block.domain, Domain::AI);
        assert_eq!(
            block.iri,
            "http://narrativegoldmine.com/ai#EdgeAISystem"
        );
        assert!(block.is_public);
        assert!(block.owl_axioms.is_some());
    }

    #[test]
    fn test_parse_blockchain_ontology() {
        let markdown = r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0001
    - preferred-term:: Smart Contract
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: bc:SmartContract
    - owl:physicality:: VirtualEntity
    - owl:role:: Object

  - **Blockchain Properties**
    - bc:consensus-type:: proof-of-stake
    - bc:gas-optimized:: true
"#;

        let parser = MarkdownParser::new();
        let result = parser.parse(markdown);

        assert!(result.is_ok());

        let block = result.unwrap();
        assert_eq!(block.domain, Domain::Blockchain);
        assert_eq!(block.extension_properties.get("bc:consensus-type"), Some(&"proof-of-stake".to_string()));
    }

    #[test]
    fn test_domain_parsing() {
        let parser = MarkdownParser::new();

        // Test all 6 domains
        let test_cases = vec![
            ("ai:LargeLanguageModel", Domain::AI),
            ("bc:Blockchain", Domain::Blockchain),
            ("rb:AutonomousRobot", Domain::Robotics),
            ("mv:VirtualWorld", Domain::Metaverse),
            ("tc:CollaborationTool", Domain::Telecollaboration),
            ("dt:DisruptiveTechnology", Domain::DisruptiveTech),
        ];

        for (owl_class, expected_domain) in test_cases {
            let result = parser.parse_owl_class(owl_class);
            assert!(result.is_ok());
            let (domain, _) = result.unwrap();
            assert_eq!(domain, expected_domain);
        }
    }

    #[test]
    fn test_full_iri_construction() {
        let parser = MarkdownParser::new();

        let iri = parser.build_full_iri(Domain::AI, "LargeLanguageModel");
        assert_eq!(iri, "http://narrativegoldmine.com/ai#LargeLanguageModel");

        let iri = parser.build_full_iri(Domain::Blockchain, "SmartContract");
        assert_eq!(iri, "http://narrativegoldmine.com/blockchain#SmartContract");
    }

    #[test]
    fn test_extension_property_separation() {
        let parser = MarkdownParser::new();

        let mut props = HashMap::new();
        props.insert("term-id".to_string(), "AI-0001".to_string());
        props.insert("ai:model-architecture".to_string(), "transformer".to_string());
        props.insert("ai:parameter-count".to_string(), "175000000000".to_string());
        props.insert("bc:consensus-type".to_string(), "pos".to_string());
        props.insert("status".to_string(), "complete".to_string());

        let (core, extensions) = parser.separate_properties(&props);

        assert_eq!(core.len(), 2); // term-id, status
        assert_eq!(extensions.len(), 3); // ai:model-architecture, ai:parameter-count, bc:consensus-type

        assert!(core.contains_key("term-id"));
        assert!(core.contains_key("status"));
        assert!(extensions.contains_key("ai:model-architecture"));
        assert!(extensions.contains_key("bc:consensus-type"));
    }
}
