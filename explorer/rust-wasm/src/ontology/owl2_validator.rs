//! OWL2 Best Practices Validator
//!
//! This module provides validation functions for OWL2 compliance, including:
//! - IRI format validation (W3C IRI specification)
//! - IRI uniqueness checking
//! - Namespace validation
//! - OWL2 DL profile compliance
//! - Common antipattern detection

use super::*;
use regex::Regex;
use std::collections::HashSet;

/// OWL2 validation result
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct ValidationResult {
    /// Whether the ontology is valid
    pub valid: bool,

    /// Error messages (critical issues)
    pub errors: Vec<String>,

    /// Warning messages (best practice violations)
    pub warnings: Vec<String>,
}

impl ValidationResult {
    /// Create a new validation result
    pub fn new() -> Self {
        Self {
            valid: true,
            errors: Vec::new(),
            warnings: Vec::new(),
        }
    }

    /// Add an error message
    pub fn add_error(&mut self, message: String) {
        self.valid = false;
        self.errors.push(message);
    }

    /// Add a warning message
    pub fn add_warning(&mut self, message: String) {
        self.warnings.push(message);
    }

    /// Merge another validation result
    pub fn merge(&mut self, other: ValidationResult) {
        if !other.valid {
            self.valid = false;
        }
        self.errors.extend(other.errors);
        self.warnings.extend(other.warnings);
    }
}

impl Default for ValidationResult {
    fn default() -> Self {
        Self::new()
    }
}

/// OWL2 Validator for ontology blocks
pub struct OWL2Validator {
    /// Track all IRIs seen across multiple ontology blocks
    seen_iris: HashSet<String>,

    /// Standard OWL2 reserved namespaces
    reserved_namespaces: HashSet<String>,
}

impl OWL2Validator {
    /// Create a new OWL2 validator
    pub fn new() -> Self {
        let mut reserved_namespaces = HashSet::new();
        reserved_namespaces.insert("http://www.w3.org/1999/02/22-rdf-syntax-ns#".to_string());
        reserved_namespaces.insert("http://www.w3.org/2000/01/rdf-schema#".to_string());
        reserved_namespaces.insert("http://www.w3.org/2001/XMLSchema#".to_string());
        reserved_namespaces.insert("http://www.w3.org/2002/07/owl#".to_string());

        Self {
            seen_iris: HashSet::new(),
            reserved_namespaces,
        }
    }

    /// Validate a single ontology block
    pub fn validate_block(&mut self, block: &OntologyBlock) -> ValidationResult {
        let mut result = ValidationResult::new();

        // Validate IRI format
        if let Err(e) = self.validate_iri_format(&block.iri) {
            result.add_error(format!("IRI format error: {}", e));
        }

        // Check IRI uniqueness
        if !self.check_iri_uniqueness(&block.iri) {
            result.add_error(format!("Duplicate IRI found: {}", block.iri));
        }

        // Validate namespace
        if let Err(e) = self.validate_namespace(&block.domain, &block.iri) {
            result.add_error(format!("Namespace error: {}", e));
        }

        // Check OWL2 DL compliance
        let compliance_warnings = self.check_owl2_dl_compliance(block);
        for warning in compliance_warnings {
            result.add_warning(warning);
        }

        // Detect antipatterns
        let antipatterns = self.detect_antipatterns(block);
        for antipattern in antipatterns {
            result.add_warning(antipattern);
        }

        result
    }

    /// Validate IRI format according to W3C IRI specification
    ///
    /// # Arguments
    /// * `iri` - The IRI to validate
    ///
    /// # Returns
    /// * `Ok(())` if the IRI is valid
    /// * `Err(String)` with error message if invalid
    ///
    /// # W3C Requirements
    /// - Must be absolute (not relative)
    /// - Must follow RFC 3987 IRI syntax
    /// - Should use HTTP/HTTPS scheme for accessibility
    pub fn validate_iri_format(&self, iri: &str) -> std::result::Result<(), String> {
        // Check for empty IRI
        if iri.is_empty() {
            return Err("IRI cannot be empty".to_string());
        }

        // Check for angle brackets (should be removed before validation)
        if iri.starts_with('<') || iri.ends_with('>') {
            return Err("IRI should not include angle brackets".to_string());
        }

        // Check for absolute IRI (must have scheme)
        if !iri.contains("://") {
            return Err("IRI must be absolute (include scheme like http://)".to_string());
        }

        // Parse scheme
        let scheme_end = iri.find("://").unwrap();
        let scheme = &iri[..scheme_end];

        // Validate scheme (alphanumeric + . + -)
        let scheme_regex = Regex::new(r"^[a-zA-Z][a-zA-Z0-9+.-]*$").unwrap();
        if !scheme_regex.is_match(scheme) {
            return Err(format!("Invalid IRI scheme: {}", scheme));
        }

        // Warn about non-HTTP schemes (best practice)
        if scheme != "http" && scheme != "https" {
            // This is a warning, not an error - handled separately
        }

        // Check for fragment identifier (#)
        if !iri.contains('#') && !iri.ends_with('/') {
            return Err("IRI should end with # or / for namespace separation".to_string());
        }

        // Check for invalid characters (basic check)
        if iri.contains(' ') {
            return Err("IRI cannot contain spaces".to_string());
        }

        // Check that reserved vocabulary is not used for ontology IRI
        for reserved in &self.reserved_namespaces {
            if iri.starts_with(reserved) {
                return Err(format!(
                    "IRI uses reserved OWL2 vocabulary: {}",
                    reserved
                ));
            }
        }

        Ok(())
    }

    /// Check IRI uniqueness across all parsed ontology blocks
    ///
    /// # Arguments
    /// * `iri` - The IRI to check
    ///
    /// # Returns
    /// * `true` if the IRI is unique (first time seen)
    /// * `false` if the IRI has been seen before (duplicate)
    pub fn check_iri_uniqueness(&mut self, iri: &str) -> bool {
        if self.seen_iris.contains(iri) {
            false
        } else {
            self.seen_iris.insert(iri.to_string());
            true
        }
    }

    /// Validate namespace consistency with domain
    ///
    /// # Arguments
    /// * `domain` - The domain of the ontology block
    /// * `iri` - The full IRI to validate
    ///
    /// # Returns
    /// * `Ok(())` if namespace is valid
    /// * `Err(String)` with error message if invalid
    pub fn validate_namespace(&self, domain: &Domain, iri: &str) -> std::result::Result<(), String> {
        let expected_base = domain.base_uri();

        if !iri.starts_with(expected_base) {
            return Err(format!(
                "IRI namespace mismatch: expected '{}' but got '{}'",
                expected_base,
                iri.split('#').next().unwrap_or(iri)
            ));
        }

        // Extract class name from IRI
        let class_name = iri
            .split('#')
            .nth(1)
            .or_else(|| iri.split('/').last())
            .unwrap_or("");

        if class_name.is_empty() {
            return Err("IRI does not contain a valid class name".to_string());
        }

        // Validate class name format (PascalCase)
        if !class_name.chars().next().unwrap_or('_').is_uppercase() {
            return Err(format!(
                "Class name '{}' should start with uppercase (PascalCase)",
                class_name
            ));
        }

        // Check for invalid characters in class name
        let class_name_regex = Regex::new(r"^[A-Z][a-zA-Z0-9]*$").unwrap();
        if !class_name_regex.is_match(class_name) {
            return Err(format!(
                "Class name '{}' contains invalid characters. Use PascalCase (letters and numbers only)",
                class_name
            ));
        }

        Ok(())
    }

    /// Check OWL2 DL profile compliance
    ///
    /// # Arguments
    /// * `block` - The ontology block to check
    ///
    /// # Returns
    /// * Vector of warning messages for compliance issues
    pub fn check_owl2_dl_compliance(&self, block: &OntologyBlock) -> Vec<String> {
        let mut warnings = Vec::new();

        // Check for required properties
        if !block.core_properties.contains_key("definition") {
            warnings.push("Missing 'definition' property - required for OWL2 DL".to_string());
        }

        // Check for missing OWL axioms
        if block.owl_axioms.is_none() {
            warnings.push(
                "Missing OWL axioms - recommended for formal OWL2 DL reasoning".to_string()
            );
        } else {
            // Validate axiom syntax if present
            let axioms = block.owl_axioms.as_ref().unwrap();

            // Check for Declaration axiom
            if !axioms.contains("Declaration") {
                warnings.push(
                    "OWL axioms should include Declaration for the class".to_string()
                );
            }

            // Check for balanced parentheses in functional syntax
            let open_parens = axioms.matches('(').count();
            let close_parens = axioms.matches(')').count();
            if open_parens != close_parens {
                warnings.push(format!(
                    "Unbalanced parentheses in OWL axioms: {} open, {} close",
                    open_parens, close_parens
                ));
            }
        }

        // Check for semantic classification properties
        if !block.core_properties.contains_key("owl:physicality") {
            warnings.push(
                "Missing 'owl:physicality' classification (VirtualEntity/PhysicalEntity)".to_string()
            );
        }

        if !block.core_properties.contains_key("owl:role") {
            warnings.push(
                "Missing 'owl:role' classification (Process/Object/Quality)".to_string()
            );
        }

        // Check for proper domain classification
        if !block.core_properties.contains_key("source-domain") {
            warnings.push("Missing 'source-domain' property".to_string());
        }

        // Check term-id format
        let term_id_regex = Regex::new(r"^[A-Z]{2,3}-\d{4}$").unwrap();
        if !term_id_regex.is_match(&block.term_id) {
            warnings.push(format!(
                "Term ID '{}' does not follow standard format (e.g., AI-0850, BC-0001)",
                block.term_id
            ));
        }

        // Check for maturity and status
        if !block.core_properties.contains_key("maturity") {
            warnings.push("Missing 'maturity' property (draft/emerging/mature/established)".to_string());
        }

        if !block.core_properties.contains_key("status") {
            warnings.push("Missing 'status' property (draft/in-progress/complete/deprecated)".to_string());
        }

        warnings
    }

    /// Detect common OWL2 antipatterns
    ///
    /// # Arguments
    /// * `block` - The ontology block to check
    ///
    /// # Returns
    /// * Vector of warning messages for detected antipatterns
    pub fn detect_antipatterns(&self, block: &OntologyBlock) -> Vec<String> {
        let mut warnings = Vec::new();

        // Antipattern 1: Class name contains domain prefix
        let class_name = block
            .iri
            .split('#')
            .nth(1)
            .or_else(|| block.iri.split('/').last())
            .unwrap_or("");

        let domain_prefix = block.domain.prefix();
        if class_name.to_lowercase().starts_with(domain_prefix) {
            warnings.push(format!(
                "Antipattern: Class name '{}' contains domain prefix '{}'. Domain is already in namespace.",
                class_name, domain_prefix
            ));
        }

        // Antipattern 2: Overly abbreviated class names
        if class_name.len() < 3 {
            warnings.push(format!(
                "Antipattern: Class name '{}' is too short. Use descriptive names (min 3 characters).",
                class_name
            ));
        }

        // Antipattern 3: Missing preferred term
        if block.preferred_term.is_empty() {
            warnings.push("Antipattern: Missing preferred term for human readability".to_string());
        }

        // Antipattern 4: Preferred term doesn't match class name
        let normalized_class = class_name.to_lowercase();
        let normalized_term = block.preferred_term.replace(' ', "").to_lowercase();

        if !normalized_class.contains(&normalized_term) && !normalized_term.contains(&normalized_class) {
            warnings.push(format!(
                "Antipattern: Preferred term '{}' doesn't relate to class name '{}'",
                block.preferred_term, class_name
            ));
        }

        // Antipattern 5: Using snake_case or kebab-case in class names
        if class_name.contains('_') || class_name.contains('-') {
            warnings.push(format!(
                "Antipattern: Class name '{}' uses separators. Use PascalCase without separators.",
                class_name
            ));
        }

        // Antipattern 6: Missing version information
        if !block.core_properties.contains_key("version") {
            warnings.push("Antipattern: Missing version information for change tracking".to_string());
        }

        // Antipattern 7: No last-updated timestamp
        if !block.core_properties.contains_key("last-updated") {
            warnings.push("Antipattern: Missing last-updated timestamp".to_string());
        }

        // Antipattern 8: Authority score outside valid range
        if let Some(score) = block.metadata.authority_score {
            if score < 0.0 || score > 1.0 {
                warnings.push(format!(
                    "Antipattern: Authority score {} outside valid range [0.0, 1.0]",
                    score
                ));
            }
        }

        // Antipattern 9: Duplicate extension properties
        let mut seen_keys = HashSet::new();
        for key in block.extension_properties.keys() {
            let normalized_key = key.to_lowercase();
            if !seen_keys.insert(normalized_key.clone()) {
                warnings.push(format!(
                    "Antipattern: Duplicate extension property key (case-insensitive): {}",
                    key
                ));
            }
        }

        // Antipattern 10: Extension properties with empty values
        for (key, value) in &block.extension_properties {
            if value.trim().is_empty() {
                warnings.push(format!(
                    "Antipattern: Extension property '{}' has empty value",
                    key
                ));
            }
        }

        warnings
    }

    /// Validate multiple ontology blocks and check cross-block constraints
    pub fn validate_blocks(&mut self, blocks: &[OntologyBlock]) -> ValidationResult {
        let mut result = ValidationResult::new();

        for (idx, block) in blocks.iter().enumerate() {
            let block_result = self.validate_block(block);

            // Add block index to error messages for clarity
            for error in block_result.errors {
                result.add_error(format!("Block {} ({}): {}", idx + 1, block.term_id, error));
            }

            for warning in block_result.warnings {
                result.add_warning(format!("Block {} ({}): {}", idx + 1, block.term_id, warning));
            }
        }

        result
    }

    /// Reset the validator state (clear seen IRIs)
    pub fn reset(&mut self) {
        self.seen_iris.clear();
    }
}

impl Default for OWL2Validator {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;

    fn create_test_block() -> OntologyBlock {
        let mut core_props = HashMap::new();
        core_props.insert("definition".to_string(), "Test definition".to_string());
        core_props.insert("source-domain".to_string(), "ai".to_string());
        core_props.insert("status".to_string(), "complete".to_string());
        core_props.insert("maturity".to_string(), "mature".to_string());
        core_props.insert("version".to_string(), "1.0".to_string());
        core_props.insert("last-updated".to_string(), "2025-11-21".to_string());
        core_props.insert("owl:physicality".to_string(), "VirtualEntity".to_string());
        core_props.insert("owl:role".to_string(), "Process".to_string());

        OntologyBlock {
            iri: "http://narrativegoldmine.com/ai#TestClass".to_string(),
            term_id: "AI-0001".to_string(),
            preferred_term: "Test Class".to_string(),
            domain: Domain::AI,
            core_properties: core_props,
            extension_properties: HashMap::new(),
            owl_axioms: Some("(Declaration (Class :TestClass))".to_string()),
            is_public: true,
            metadata: ClassOntologyMetadata {
                term_id: "AI-0001".to_string(),
                preferred_term: Some("Test Class".to_string()),
                domain: Some("ai".to_string()),
                maturity: Some("mature".to_string()),
                status: Some("complete".to_string()),
                authority_score: Some(0.95),
            },
        }
    }

    #[test]
    fn test_valid_iri_format() {
        let validator = OWL2Validator::new();

        assert!(validator.validate_iri_format("http://example.com/ontology#Class").is_ok());
        assert!(validator.validate_iri_format("https://example.org/ont#Thing").is_ok());
        assert!(validator.validate_iri_format("http://narrativegoldmine.com/ai#AI").is_ok());
    }

    #[test]
    fn test_invalid_iri_format() {
        let validator = OWL2Validator::new();

        // Empty IRI
        assert!(validator.validate_iri_format("").is_err());

        // Relative IRI
        assert!(validator.validate_iri_format("ontology#Class").is_err());

        // Contains spaces
        assert!(validator.validate_iri_format("http://example.com/ont#My Class").is_err());

        // Missing fragment/slash
        assert!(validator.validate_iri_format("http://example.com/ontology").is_err());

        // Reserved vocabulary
        assert!(validator
            .validate_iri_format("http://www.w3.org/2002/07/owl#MyClass")
            .is_err());
    }

    #[test]
    fn test_iri_uniqueness() {
        let mut validator = OWL2Validator::new();

        let iri1 = "http://example.com/ont#Class1";
        let iri2 = "http://example.com/ont#Class2";

        // First time should be unique
        assert!(validator.check_iri_uniqueness(iri1));
        assert!(validator.check_iri_uniqueness(iri2));

        // Second time should be duplicate
        assert!(!validator.check_iri_uniqueness(iri1));
        assert!(!validator.check_iri_uniqueness(iri2));
    }

    #[test]
    fn test_namespace_validation() {
        let validator = OWL2Validator::new();

        // Valid namespace
        assert!(validator
            .validate_namespace(&Domain::AI, "http://narrativegoldmine.com/ai#TestClass")
            .is_ok());

        // Invalid namespace (wrong domain)
        assert!(validator
            .validate_namespace(&Domain::Blockchain, "http://narrativegoldmine.com/ai#TestClass")
            .is_err());

        // Invalid class name (lowercase)
        assert!(validator
            .validate_namespace(&Domain::AI, "http://narrativegoldmine.com/ai#testClass")
            .is_err());

        // Invalid class name (contains hyphen)
        assert!(validator
            .validate_namespace(&Domain::AI, "http://narrativegoldmine.com/ai#Test-Class")
            .is_err());
    }

    #[test]
    fn test_owl2_dl_compliance() {
        let validator = OWL2Validator::new();
        let block = create_test_block();

        let warnings = validator.check_owl2_dl_compliance(&block);

        // Should have no warnings for a complete block
        assert_eq!(warnings.len(), 0);
    }

    #[test]
    fn test_owl2_dl_compliance_missing_properties() {
        let validator = OWL2Validator::new();

        let mut block = create_test_block();
        block.core_properties.clear();
        block.owl_axioms = None;

        let warnings = validator.check_owl2_dl_compliance(&block);

        // Should have multiple warnings
        assert!(warnings.len() > 5);
        assert!(warnings.iter().any(|w| w.contains("definition")));
        assert!(warnings.iter().any(|w| w.contains("OWL axioms")));
    }

    #[test]
    fn test_antipattern_detection() {
        let validator = OWL2Validator::new();
        let block = create_test_block();

        let warnings = validator.detect_antipatterns(&block);

        // Well-formed block should have minimal antipatterns
        assert!(warnings.len() == 0);
    }

    #[test]
    fn test_antipattern_short_class_name() {
        let validator = OWL2Validator::new();

        let mut block = create_test_block();
        block.iri = "http://narrativegoldmine.com/ai#AI".to_string();

        let warnings = validator.detect_antipatterns(&block);

        assert!(warnings.iter().any(|w| w.contains("too short")));
    }

    #[test]
    fn test_antipattern_class_name_with_separator() {
        let validator = OWL2Validator::new();

        let mut block = create_test_block();
        block.iri = "http://narrativegoldmine.com/ai#Test_Class".to_string();

        let warnings = validator.detect_antipatterns(&block);

        assert!(warnings.iter().any(|w| w.contains("separators")));
    }

    #[test]
    fn test_validate_multiple_blocks() {
        let mut validator = OWL2Validator::new();

        let block1 = create_test_block();
        let mut block2 = create_test_block();
        block2.iri = "http://narrativegoldmine.com/ai#AnotherClass".to_string();
        block2.term_id = "AI-0002".to_string();

        let blocks = vec![block1, block2];
        let result = validator.validate_blocks(&blocks);

        assert!(result.valid);
        assert_eq!(result.errors.len(), 0);
    }

    #[test]
    fn test_validate_duplicate_iris() {
        let mut validator = OWL2Validator::new();

        let block1 = create_test_block();
        let block2 = create_test_block(); // Same IRI

        let blocks = vec![block1, block2];
        let result = validator.validate_blocks(&blocks);

        assert!(!result.valid);
        assert!(result.errors.iter().any(|e| e.contains("Duplicate IRI")));
    }
}
