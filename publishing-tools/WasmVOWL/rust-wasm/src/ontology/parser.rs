//! OWL ontology parser implementation

use super::*;
use crate::{Result, VowlError};
use serde_json::Value;
use std::collections::HashMap;
use super::ClassOntologyMetadata;

/// Standard OWL ontology parser
pub struct StandardParser {
    /// Parser configuration
    config: ParserConfig,
}

/// Parser configuration options
#[derive(Debug, Clone)]
pub struct ParserConfig {
    /// Validate IRI format
    pub validate_iris: bool,

    /// Allow empty labels
    pub allow_empty_labels: bool,

    /// Maximum classes to parse (0 = unlimited)
    pub max_classes: usize,
}

impl Default for ParserConfig {
    fn default() -> Self {
        Self {
            validate_iris: true,
            allow_empty_labels: false,
            max_classes: 0,
        }
    }
}

impl StandardParser {
    /// Create a new parser with default configuration
    pub fn new() -> Self {
        Self {
            config: ParserConfig::default(),
        }
    }

    /// Create a parser with custom configuration
    pub fn with_config(config: ParserConfig) -> Self {
        Self { config }
    }

    /// Parse class nodes from JSON value
    fn parse_classes(&self, json: &Value) -> Result<Vec<ClassNode>> {
        let classes_array = json
            .get("class")
            .or_else(|| json.get("classes"))
            .and_then(|v| v.as_array())
            .ok_or_else(|| VowlError::ParseError("Missing 'class' array".to_string()))?;

        let mut classes = Vec::new();

        for (idx, class_json) in classes_array.iter().enumerate() {
            if self.config.max_classes > 0 && idx >= self.config.max_classes {
                break;
            }

            let class = self.parse_class_node(class_json)?;
            classes.push(class);
        }

        Ok(classes)
    }

    /// Parse a single class node
    fn parse_class_node(&self, json: &Value) -> Result<ClassNode> {
        let id = json
            .get("id")
            .and_then(|v| v.as_str())
            .ok_or_else(|| VowlError::ParseError("Missing class id".to_string()))?
            .to_string();

        let iri = json
            .get("iri")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| id.clone());

        let label = json
            .get("label")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| id.clone());

        if !self.config.allow_empty_labels && label.is_empty() {
            return Err(VowlError::ParseError(format!(
                "Empty label for class: {}",
                id
            )));
        }

        let class_type = json
            .get("type")
            .and_then(|v| v.as_str())
            .unwrap_or("owl:Class")
            .to_string();

        let equivalent = json
            .get("equivalent")
            .and_then(|v| v.as_array())
            .map(|arr| {
                arr.iter()
                    .filter_map(|v| v.as_str())
                    .map(|s| s.to_string())
                    .collect()
            })
            .unwrap_or_default();

        let attributes = self.parse_class_attributes(json)?;
        let ontology_meta = self.parse_ontology_metadata(json);

        Ok(ClassNode {
            id,
            iri,
            label,
            class_type,
            equivalent,
            attributes,
            ontology_meta,
        })
    }

    /// Parse class attributes
    fn parse_class_attributes(&self, json: &Value) -> Result<ClassAttributes> {
        let external = json
            .get("external")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);

        let individuals = json
            .get("individuals")
            .and_then(|v| v.as_u64())
            .map(|n| n as usize);

        let mut properties = HashMap::new();
        if let Some(attrs) = json.get("attributes").and_then(|v| v.as_object()) {
            for (key, value) in attrs {
                if let Some(s) = value.as_str() {
                    properties.insert(key.clone(), s.to_string());
                } else if let Some(val_str) = value.to_string().strip_prefix('"').and_then(|s| s.strip_suffix('"')) {
                    properties.insert(key.clone(), val_str.to_string());
                }
            }
        }

        Ok(ClassAttributes {
            external,
            individuals,
            properties,
        })
    }

    /// Parse class ontology metadata from attributes
    fn parse_ontology_metadata(&self, json: &Value) -> Option<ClassOntologyMetadata> {
        // Check if attributes exist
        let attrs = json.get("attributes").or_else(|| json.get("classAttribute"))?;

        let attrs_obj = attrs.as_object()?;

        // Extract metadata fields from attributes
        let term_id = json.get("id").and_then(|v| v.as_str()).unwrap_or("").to_string();

        let preferred_term = attrs_obj
            .get("preferredTerm")
            .or_else(|| attrs_obj.get("preferred_term"))
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let domain = attrs_obj
            .get("domain")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let maturity = attrs_obj
            .get("maturity")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let status = attrs_obj
            .get("status")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let authority_score = attrs_obj
            .get("authorityScore")
            .or_else(|| attrs_obj.get("authority_score"))
            .and_then(|v| v.as_f64())
            .map(|f| f as f32);

        // Only create metadata if we have at least one field
        if preferred_term.is_some() || domain.is_some() || maturity.is_some()
            || status.is_some() || authority_score.is_some() {
            Some(ClassOntologyMetadata {
                term_id,
                preferred_term,
                domain,
                maturity,
                status,
                authority_score,
            })
        } else {
            None
        }
    }

    /// Parse properties from JSON value
    fn parse_properties(&self, json: &Value) -> Result<Vec<Property>> {
        let properties_array = json
            .get("property")
            .or_else(|| json.get("properties"))
            .and_then(|v| v.as_array())
            .ok_or_else(|| VowlError::ParseError("Missing 'property' array".to_string()))?;

        properties_array
            .iter()
            .map(|prop_json| self.parse_property(prop_json))
            .collect()
    }

    /// Parse a single property
    fn parse_property(&self, json: &Value) -> Result<Property> {
        let id = json
            .get("id")
            .and_then(|v| v.as_str())
            .ok_or_else(|| VowlError::ParseError("Missing property id".to_string()))?
            .to_string();

        let iri = json
            .get("iri")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| id.clone());

        let label = json
            .get("label")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| id.clone());

        let property_type = self.parse_property_type(json)?;

        let domain = json
            .get("domain")
            .and_then(|v| v.as_str())
            .ok_or_else(|| VowlError::ParseError(format!("Missing domain for property: {}", id)))?
            .to_string();

        let range = json
            .get("range")
            .and_then(|v| v.as_str())
            .ok_or_else(|| VowlError::ParseError(format!("Missing range for property: {}", id)))?
            .to_string();

        let characteristics = self.parse_property_characteristics(json)?;

        Ok(Property {
            id,
            iri,
            label,
            property_type,
            domain,
            range,
            characteristics,
        })
    }

    /// Parse property type
    fn parse_property_type(&self, json: &Value) -> Result<PropertyType> {
        let type_str = json
            .get("type")
            .and_then(|v| v.as_str())
            .unwrap_or("owl:ObjectProperty");

        Ok(match type_str {
            "owl:ObjectProperty" => PropertyType::ObjectProperty,
            "owl:DatatypeProperty" => PropertyType::DatatypeProperty,
            "owl:AnnotationProperty" => PropertyType::AnnotationProperty,
            other => PropertyType::SpecialProperty(other.to_string()),
        })
    }

    /// Parse property characteristics
    fn parse_property_characteristics(&self, json: &Value) -> Result<PropertyCharacteristics> {
        let functional = json
            .get("functional")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);

        let inverse_functional = json
            .get("inverseFunctional")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);

        let transitive = json
            .get("transitive")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);

        let symmetric = json
            .get("symmetric")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);

        let cardinality = self.parse_cardinality(json)?;

        Ok(PropertyCharacteristics {
            functional,
            inverse_functional,
            transitive,
            symmetric,
            cardinality,
        })
    }

    /// Parse cardinality constraints
    fn parse_cardinality(&self, json: &Value) -> Result<Option<Cardinality>> {
        let cardinality = json.get("cardinality");
        if cardinality.is_none() {
            return Ok(None);
        }

        let min = json
            .get("minCardinality")
            .and_then(|v| v.as_u64())
            .map(|n| n as u32);

        let max = json
            .get("maxCardinality")
            .and_then(|v| v.as_u64())
            .map(|n| n as u32);

        let exact = json
            .get("cardinality")
            .and_then(|v| v.as_u64())
            .map(|n| n as u32);

        if min.is_some() || max.is_some() || exact.is_some() {
            Ok(Some(Cardinality { min, max, exact }))
        } else {
            Ok(None)
        }
    }

    /// Parse namespaces from JSON value
    fn parse_namespaces(&self, json: &Value) -> Result<Vec<Namespace>> {
        let namespace_obj = json.get("namespace").or_else(|| json.get("namespaces"));

        if let Some(ns) = namespace_obj {
            if let Some(obj) = ns.as_object() {
                return Ok(obj
                    .iter()
                    .map(|(prefix, iri)| Namespace {
                        prefix: prefix.clone(),
                        iri: iri.as_str().unwrap_or("").to_string(),
                    })
                    .collect());
            }
        }

        Ok(vec![])
    }

    /// Parse ontology metadata
    fn parse_metadata(&self, json: &Value) -> Result<OntologyMetadata> {
        let header = json.get("header");

        let iri = header
            .and_then(|h| h.get("iri"))
            .and_then(|v| v.as_str())
            .unwrap_or("http://example.org/ontology")
            .to_string();

        let version = header
            .and_then(|h| h.get("version"))
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let title = header
            .and_then(|h| h.get("title"))
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        let description = header
            .and_then(|h| h.get("description"))
            .and_then(|v| v.as_str())
            .map(|s| s.to_string());

        Ok(OntologyMetadata {
            iri,
            version,
            title,
            description,
        })
    }
}

impl OntologyParser for StandardParser {
    fn parse(&self, json: &str) -> Result<OntologyData> {
        let value: Value = serde_json::from_str(json)?;

        let metadata = self.parse_metadata(&value)?;
        let classes = self.parse_classes(&value)?;
        let properties = self.parse_properties(&value)?;
        let namespaces = self.parse_namespaces(&value)?;

        Ok(OntologyData {
            metadata,
            classes,
            properties,
            namespaces,
        })
    }

    fn validate(&self, data: &OntologyData) -> Result<()> {
        // Validate that all property domains and ranges reference valid classes
        let class_ids: HashMap<_, _> = data.classes.iter().map(|c| (&c.id, ())).collect();

        for prop in &data.properties {
            if !class_ids.contains_key(&prop.domain) {
                return Err(VowlError::InvalidData(format!(
                    "Property '{}' references unknown domain class: {}",
                    prop.id, prop.domain
                )));
            }

            // Range might be a datatype, so we're more lenient
            if !class_ids.contains_key(&prop.range) && !prop.range.starts_with("xsd:") {
                // Only warn for non-datatype ranges
                eprintln!(
                    "Warning: Property '{}' references possibly unknown range: {}",
                    prop.id, prop.range
                );
            }
        }

        Ok(())
    }
}

impl Default for StandardParser {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_simple_ontology() {
        let json = r#"
        {
            "header": {
                "iri": "http://example.org/test",
                "title": "Test Ontology",
                "version": "1.0"
            },
            "namespace": {
                "owl": "http://www.w3.org/2002/07/owl#"
            },
            "class": [
                {
                    "id": "class1",
                    "iri": "http://example.org/Class1",
                    "label": "Class 1",
                    "type": "owl:Class"
                }
            ],
            "property": [
                {
                    "id": "prop1",
                    "iri": "http://example.org/prop1",
                    "label": "Property 1",
                    "type": "owl:ObjectProperty",
                    "domain": "class1",
                    "range": "class1"
                }
            ]
        }
        "#;

        let parser = StandardParser::new();
        let result = parser.parse(json);

        assert!(result.is_ok());
        let data = result.unwrap();
        assert_eq!(data.classes.len(), 1);
        assert_eq!(data.properties.len(), 1);
        assert_eq!(data.metadata.title, Some("Test Ontology".to_string()));
    }

    #[test]
    fn test_parse_class_with_attributes() {
        let json = r#"
        {
            "class": [
                {
                    "id": "class1",
                    "label": "Class 1",
                    "external": true,
                    "individuals": 42
                }
            ],
            "property": []
        }
        "#;

        let parser = StandardParser::new();
        let result = parser.parse(json);

        assert!(result.is_ok());
        let data = result.unwrap();
        assert_eq!(data.classes.len(), 1);
        assert!(data.classes[0].attributes.external);
        assert_eq!(data.classes[0].attributes.individuals, Some(42));
    }

    #[test]
    fn test_validate_invalid_domain() {
        let data = OntologyData {
            metadata: OntologyMetadata {
                iri: "test".to_string(),
                version: None,
                title: None,
                description: None,
            },
            classes: vec![ClassNode {
                id: "class1".to_string(),
                iri: "test".to_string(),
                label: "Test".to_string(),
                class_type: "owl:Class".to_string(),
                equivalent: vec![],
                attributes: ClassAttributes::default(),
                ontology_meta: None,
            }],
            properties: vec![Property {
                id: "prop1".to_string(),
                iri: "test".to_string(),
                label: "Test".to_string(),
                property_type: PropertyType::ObjectProperty,
                domain: "invalid_class".to_string(),
                range: "class1".to_string(),
                characteristics: PropertyCharacteristics::default(),
            }],
            namespaces: vec![],
        };

        let parser = StandardParser::new();
        let result = parser.validate(&data);

        assert!(result.is_err());
    }

    #[test]
    fn test_parser_config() {
        let config = ParserConfig {
            validate_iris: false,
            allow_empty_labels: true,
            max_classes: 10,
        };

        let parser = StandardParser::with_config(config.clone());
        assert!(!parser.config.validate_iris);
        assert!(parser.config.allow_empty_labels);
        assert_eq!(parser.config.max_classes, 10);
    }
}
