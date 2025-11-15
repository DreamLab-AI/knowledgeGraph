use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::Path;
use regex::Regex;
use lazy_static::lazy_static;

lazy_static! {
    static ref TERM_ID_REGEX: Regex = Regex::new(r"(?:term-id|term_id)\s*::\s*([A-Z]{2,}-\d+)").unwrap();
    static ref PREFERRED_TERM_REGEX: Regex = Regex::new(r"(?:preferred-term|preferred_term)\s*::\s*(.+)").unwrap();
    static ref DEFINITION_REGEX: Regex = Regex::new(r"definition\s*::\s*(.+)").unwrap();
    static ref DOMAIN_REGEX: Regex = Regex::new(r"(?:source-domain|source_domain)\s*::\s*(.+)").unwrap();
    static ref MATURITY_REGEX: Regex = Regex::new(r"maturity\s*::\s*(.+)").unwrap();
    static ref AUTHORITY_REGEX: Regex = Regex::new(r"(?:authority-score|authority_score)\s*::\s*([\d.]+)").unwrap();
    static ref SOURCE_REGEX: Regex = Regex::new(r"source\s*::\s*\[\[(.+?)\]\]").unwrap();
    static ref WIKI_LINK_REGEX: Regex = Regex::new(r"\[\[([^\]]+)\]\]").unwrap();
}

/// Represents an OWL Class extracted from a Logseq OntologyBlock
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OWLClass {
    /// Term identifier (e.g., "AI-0123", "BC-0456")
    pub term_id: String,

    /// Human-readable preferred term
    pub preferred_term: String,

    /// Textual definition
    pub definition: String,

    /// Source domain (e.g., "ai-grounded", "blockchain")
    pub domain: Option<String>,

    /// Maturity level (e.g., "proven", "emerging", "experimental")
    pub maturity: Option<String>,

    /// Authority score (0.0 - 1.0)
    pub authority_score: Option<f64>,

    /// Source/citation
    pub source: Option<String>,

    /// OWL relationships to other classes
    pub relationships: Vec<OWLRelationship>,

    /// Parent classes (rdfs:subClassOf)
    pub parent_classes: Vec<String>,

    /// OWL axioms (parsed from code blocks)
    pub axioms: Vec<String>,
}

impl OWLClass {
    pub fn new(term_id: String, preferred_term: String) -> Self {
        Self {
            term_id,
            preferred_term,
            definition: String::new(),
            domain: None,
            maturity: None,
            authority_score: None,
            source: None,
            relationships: Vec::new(),
            parent_classes: Vec::new(),
            axioms: Vec::new(),
        }
    }

    /// Get namespace URI based on term-id prefix
    pub fn namespace_uri(&self) -> &str {
        if self.term_id.starts_with("AI-") {
            "https://narrativegoldmine.com/ontology/artificial-intelligence#"
        } else if self.term_id.starts_with("BC-") {
            "https://narrativegoldmine.com/ontology/blockchain#"
        } else if self.term_id.starts_with("MV-") {
            "https://narrativegoldmine.com/ontology/metaverse#"
        } else if self.term_id.starts_with("RB-") {
            "https://narrativegoldmine.com/ontology/robotics#"
        } else if self.term_id.starts_with("DT-") {
            "https://narrativegoldmine.com/ontology/disruptive-technologies#"
        } else {
            "https://narrativegoldmine.com/ontology/general#"
        }
    }

    /// Get full IRI for this class
    pub fn iri(&self) -> String {
        format!("{}{}", self.namespace_uri(), to_camel_case(&self.preferred_term))
    }

    /// Check if relationship exists
    pub fn has_relationship(&self, property: &str, target: &str) -> bool {
        self.relationships.iter().any(|r| r.property == property && r.target == target)
    }
}

/// Typed relationship between ontology classes
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OWLRelationship {
    /// Property name (e.g., "enables-capability", "uses-technology")
    pub property: String,

    /// Target class (term-id or preferred-term)
    pub target: String,

    /// Relationship type (inferred from property name)
    pub relationship_type: RelationshipType,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum RelationshipType {
    SubClassOf,
    EnablesCapability,
    UsesTechnology,
    RequiresInfrastructure,
    SupportsProcess,
    RelatedTo,
    PartOf,
    HasComponent,
    DependsOn,
    Enables,
    Constrains,
    Custom(String),
}

impl RelationshipType {
    /// Parse from property name
    pub fn from_property(property: &str) -> Self {
        match property.to_lowercase().as_str() {
            "is-subclass-of" | "is_subclass_of" | "subclass-of" => Self::SubClassOf,
            "enables-capability" | "enables_capability" => Self::EnablesCapability,
            "uses-technology" | "uses_technology" => Self::UsesTechnology,
            "requires-infrastructure" | "requires_infrastructure" => Self::RequiresInfrastructure,
            "supports-process" | "supports_process" => Self::SupportsProcess,
            "related-to" | "related_to" => Self::RelatedTo,
            "part-of" | "part_of" => Self::PartOf,
            "has-component" | "has_component" => Self::HasComponent,
            "depends-on" | "depends_on" => Self::DependsOn,
            "enables" => Self::Enables,
            "constrains" => Self::Constrains,
            _ => Self::Custom(property.to_string()),
        }
    }
}

/// Parsed OWL Functional Syntax axioms
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "camelCase")]
pub enum OWLAxiom {
    ClassDeclaration {
        class_iri: String,
    },
    SubClassOf {
        subclass: String,
        superclass: String,
    },
    ObjectPropertyDeclaration {
        property_iri: String,
    },
    DataPropertyDeclaration {
        property_iri: String,
    },
    ObjectPropertyDomain {
        property: String,
        domain: String,
    },
    ObjectPropertyRange {
        property: String,
        range: String,
    },
    DisjointClasses {
        classes: Vec<String>,
    },
    SubClassOfRestriction {
        subclass: String,
        property: String,
        filler: String,
        restriction_type: String,
    },
}

/// Parse OWL Functional Syntax axioms from text
pub fn parse_owl_axioms(axiom_text: &str) -> Vec<OWLAxiom> {
    let mut axioms = Vec::new();

    // Parse Declaration(Class(:ClassName))
    let class_decl_re = Regex::new(r"Declaration\s*\(\s*Class\s*\(\s*:(\w+)\s*\)\s*\)").unwrap();
    for cap in class_decl_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::ClassDeclaration {
            class_iri: cap[1].to_string(),
        });
    }

    // Parse SubClassOf(:Child :Parent)
    let subclass_re = Regex::new(r"SubClassOf\s*\(\s*:(\w+)\s+:(\w+)\s*\)").unwrap();
    for cap in subclass_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::SubClassOf {
            subclass: cap[1].to_string(),
            superclass: cap[2].to_string(),
        });
    }

    // Parse Declaration(ObjectProperty(:propertyName))
    let obj_prop_re = Regex::new(r"Declaration\s*\(\s*ObjectProperty\s*\(\s*:(\w+)\s*\)\s*\)").unwrap();
    for cap in obj_prop_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::ObjectPropertyDeclaration {
            property_iri: cap[1].to_string(),
        });
    }

    // Parse Declaration(DataProperty(:propertyName))
    let data_prop_re = Regex::new(r"Declaration\s*\(\s*DataProperty\s*\(\s*:(\w+)\s*\)\s*\)").unwrap();
    for cap in data_prop_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::DataPropertyDeclaration {
            property_iri: cap[1].to_string(),
        });
    }

    // Parse ObjectPropertyDomain :property :domain
    let obj_domain_re = Regex::new(r"ObjectPropertyDomain\s+:(\w+)\s+:(\w+)").unwrap();
    for cap in obj_domain_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::ObjectPropertyDomain {
            property: cap[1].to_string(),
            domain: cap[2].to_string(),
        });
    }

    // Parse ObjectPropertyRange :property :range
    let obj_range_re = Regex::new(r"ObjectPropertyRange\s+:(\w+)\s+:(\w+)").unwrap();
    for cap in obj_range_re.captures_iter(axiom_text) {
        axioms.push(OWLAxiom::ObjectPropertyRange {
            property: cap[1].to_string(),
            range: cap[2].to_string(),
        });
    }

    axioms
}

/// Extract ontology block from Logseq markdown content
pub fn extract_ontology_block(content: &str) -> Option<OWLClass> {
    if !content.contains("### OntologyBlock") {
        return None;
    }

    let lines: Vec<&str> = content.lines().collect();
    let mut in_block = false;
    let mut in_relationships = false;
    let mut in_axioms = false;
    let mut axiom_text = String::new();

    let mut term_id: Option<String> = None;
    let mut preferred_term: Option<String> = None;
    let mut definition = String::new();
    let mut domain: Option<String> = None;
    let mut maturity: Option<String> = None;
    let mut authority_score: Option<f64> = None;
    let mut source: Option<String> = None;
    let mut relationships: Vec<OWLRelationship> = Vec::new();
    let mut parent_classes: Vec<String> = Vec::new();

    for line in lines {
        let trimmed = line.trim();

        // Detect OntologyBlock start
        if trimmed.contains("### OntologyBlock") {
            in_block = true;
            continue;
        }

        // Exit block when we hit a new section
        if in_block && trimmed.starts_with("## ") && !trimmed.contains("OntologyBlock") {
            break;
        }

        if !in_block {
            continue;
        }

        // Detect relationships section
        if trimmed.contains("#### Relationships") {
            in_relationships = true;
            in_axioms = false;
            continue;
        }

        // Detect axioms section
        if trimmed.contains("#### OWL Axioms") {
            in_axioms = true;
            in_relationships = false;
            continue;
        }

        // End axioms section at end of code block
        if in_axioms && trimmed == "```" {
            in_axioms = false;
            continue;
        }

        // Collect axiom text
        if in_axioms && !trimmed.starts_with("```") {
            axiom_text.push_str(line);
            axiom_text.push('\n');
            continue;
        }

        // Parse relationships
        if in_relationships {
            if let Some(property_start) = trimmed.find("- ") {
                let rel_line = &trimmed[property_start + 2..];
                if let Some(sep) = rel_line.find("::") {
                    let property = rel_line[..sep].trim();
                    let targets_str = rel_line[sep + 2..].trim();

                    // Extract wiki links
                    for cap in WIKI_LINK_REGEX.captures_iter(targets_str) {
                        let target = cap[1].to_string();
                        let relationship_type = RelationshipType::from_property(property);

                        relationships.push(OWLRelationship {
                            property: property.to_string(),
                            target: target.clone(),
                            relationship_type: relationship_type.clone(),
                        });

                        // Track parent classes
                        if matches!(relationship_type, RelationshipType::SubClassOf) {
                            parent_classes.push(target);
                        }
                    }
                }
            }
            continue;
        }

        // Parse basic fields using regex
        if let Some(cap) = TERM_ID_REGEX.captures(line) {
            term_id = Some(cap[1].trim().to_string());
        }
        if let Some(cap) = PREFERRED_TERM_REGEX.captures(line) {
            preferred_term = Some(cap[1].trim().to_string());
        }
        if let Some(cap) = DEFINITION_REGEX.captures(line) {
            definition = cap[1].trim().to_string();
        }
        if let Some(cap) = DOMAIN_REGEX.captures(line) {
            domain = Some(cap[1].trim().to_string());
        }
        if let Some(cap) = MATURITY_REGEX.captures(line) {
            maturity = Some(cap[1].trim().to_string());
        }
        if let Some(cap) = AUTHORITY_REGEX.captures(line) {
            if let Ok(score) = cap[1].parse::<f64>() {
                authority_score = Some(score);
            }
        }
        if let Some(cap) = SOURCE_REGEX.captures(line) {
            source = Some(cap[1].trim().to_string());
        }
    }

    // Parse axioms if collected
    let axiom_strings: Vec<String> = if !axiom_text.is_empty() {
        axiom_text.lines().map(|s| s.to_string()).collect()
    } else {
        Vec::new()
    };

    if let (Some(tid), Some(pterm)) = (term_id, preferred_term) {
        Some(OWLClass {
            term_id: tid,
            preferred_term: pterm,
            definition,
            domain,
            maturity,
            authority_score,
            source,
            relationships,
            parent_classes,
            axioms: axiom_strings,
        })
    } else {
        None
    }
}

/// Build RDF triples from OWL classes
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RDFTriple {
    pub subject: String,
    pub predicate: String,
    pub object: String,
}

pub fn build_rdf_triples(classes: &[OWLClass]) -> Vec<RDFTriple> {
    let mut triples = Vec::new();

    for class in classes {
        let subject = class.iri();

        // rdf:type owl:Class
        triples.push(RDFTriple {
            subject: subject.clone(),
            predicate: "rdf:type".to_string(),
            object: "owl:Class".to_string(),
        });

        // rdfs:label
        triples.push(RDFTriple {
            subject: subject.clone(),
            predicate: "rdfs:label".to_string(),
            object: format!("\"{}\"@en", class.preferred_term),
        });

        // rdfs:comment (definition)
        if !class.definition.is_empty() {
            triples.push(RDFTriple {
                subject: subject.clone(),
                predicate: "rdfs:comment".to_string(),
                object: format!("\"{}\"@en", class.definition),
            });
        }

        // rdfs:subClassOf for parent classes
        for parent in &class.parent_classes {
            triples.push(RDFTriple {
                subject: subject.clone(),
                predicate: "rdfs:subClassOf".to_string(),
                object: format!("<{}>", parent),
            });
        }

        // Custom relationships
        for rel in &class.relationships {
            if !matches!(rel.relationship_type, RelationshipType::SubClassOf) {
                triples.push(RDFTriple {
                    subject: subject.clone(),
                    predicate: to_property_name(&rel.property),
                    object: format!("<{}>", rel.target),
                });
            }
        }
    }

    triples
}

/// WebVOWL JSON format structures
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebVOWLOntology {
    pub header: OntologyHeader,
    pub namespace: Vec<Namespace>,
    pub class: Vec<Class>,
    #[serde(rename = "classAttribute")]
    pub class_attribute: Vec<ClassAttribute>,
    pub property: Vec<Property>,
    #[serde(rename = "propertyAttribute")]
    pub property_attribute: Vec<PropertyAttribute>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OntologyHeader {
    pub languages: Vec<String>,
    pub title: HashMap<String, String>,
    pub description: HashMap<String, String>,
    pub version: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Namespace {
    pub prefix: String,
    pub iri: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Class {
    pub id: String,
    #[serde(rename = "type")]
    pub class_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClassAttribute {
    pub id: String,
    pub iri: String,
    #[serde(rename = "baseIri")]
    pub base_iri: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub label: Option<HashMap<String, String>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub comment: Option<HashMap<String, String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Property {
    pub id: String,
    #[serde(rename = "type")]
    pub property_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PropertyAttribute {
    pub id: String,
    pub domain: String,
    pub range: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub iri: Option<String>,
    #[serde(rename = "baseIri", skip_serializing_if = "Option::is_none")]
    pub base_iri: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub label: Option<HashMap<String, String>>,
}

/// Export OWL classes to WebVOWL JSON format
pub fn export_webvowl_json(classes: &[OWLClass]) -> WebVOWLOntology {
    let mut class_nodes = Vec::new();
    let mut class_attributes = Vec::new();
    let mut properties = Vec::new();
    let mut property_attributes = Vec::new();

    let mut class_id_map: HashMap<String, String> = HashMap::new();
    let mut next_id = 0;

    // Create class nodes
    for owl_class in classes {
        let id = next_id.to_string();
        // Map both term_id and preferred_term to the same numeric ID
        class_id_map.insert(owl_class.term_id.clone(), id.clone());
        class_id_map.insert(owl_class.preferred_term.clone(), id.clone());

        class_nodes.push(Class {
            id: id.clone(),
            class_type: "owl:Class".to_string(),
        });

        let mut label = HashMap::new();
        label.insert("en".to_string(), owl_class.preferred_term.clone());

        let mut comment = HashMap::new();
        if !owl_class.definition.is_empty() {
            comment.insert("en".to_string(), owl_class.definition.clone());
        }

        class_attributes.push(ClassAttribute {
            id: id.clone(),
            iri: owl_class.iri(),
            base_iri: owl_class.namespace_uri().to_string(),
            label: Some(label),
            comment: if comment.is_empty() { None } else { Some(comment) },
        });

        next_id += 1;
    }

    // Create property edges
    let mut property_id = next_id;
    for owl_class in classes {
        if let Some(source_id) = class_id_map.get(&owl_class.term_id) {
            for rel in &owl_class.relationships {
                // Try to find target class
                if let Some(target_id) = class_id_map.get(&rel.target) {
                    let prop_id = property_id.to_string();

                    let property_type = if matches!(rel.relationship_type, RelationshipType::SubClassOf) {
                        "rdfs:SubClassOf"
                    } else {
                        "owl:objectProperty"
                    };

                    properties.push(Property {
                        id: prop_id.clone(),
                        property_type: property_type.to_string(),
                    });

                    let mut label = HashMap::new();
                    label.insert("en".to_string(), rel.property.clone());

                    property_attributes.push(PropertyAttribute {
                        id: prop_id,
                        domain: source_id.clone(),
                        range: target_id.clone(),
                        iri: Some(format!("http://example.org/ontology#{}", to_property_name(&rel.property))),
                        base_iri: Some("http://example.org/ontology#".to_string()),
                        label: Some(label),
                    });

                    property_id += 1;
                }
            }
        }
    }

    let mut title = HashMap::new();
    title.insert("en".to_string(), "Knowledge Graph Ontology".to_string());

    let mut description = HashMap::new();
    description.insert("en".to_string(), "Unified ontology extracted from Logseq knowledge graph".to_string());

    WebVOWLOntology {
        header: OntologyHeader {
            languages: vec!["en".to_string()],
            title,
            description,
            version: "1.0.0".to_string(),
        },
        namespace: create_default_namespaces(),
        class: class_nodes,
        class_attribute: class_attributes,
        property: properties,
        property_attribute: property_attributes,
    }
}

/// Create default OWL/RDF namespaces
fn create_default_namespaces() -> Vec<Namespace> {
    vec![
        Namespace { prefix: "owl".to_string(), iri: "http://www.w3.org/2002/07/owl#".to_string() },
        Namespace { prefix: "rdf".to_string(), iri: "http://www.w3.org/1999/02/22-rdf-syntax-ns#".to_string() },
        Namespace { prefix: "rdfs".to_string(), iri: "http://www.w3.org/2000/01/rdf-schema#".to_string() },
        Namespace { prefix: "xsd".to_string(), iri: "http://www.w3.org/2001/XMLSchema#".to_string() },
        Namespace { prefix: "dc".to_string(), iri: "http://purl.org/dc/elements/1.1/".to_string() },
    ]
}

/// Load existing WebVOWL ontology from JSON file
pub fn load_webvowl_ontology<P: AsRef<Path>>(path: P) -> Result<WebVOWLOntology, String> {
    let content = fs::read_to_string(path)
        .map_err(|e| format!("Failed to read ontology file: {}", e))?;

    let ontology: WebVOWLOntology = serde_json::from_str(&content)
        .map_err(|e| format!("Failed to parse ontology JSON: {}", e))?;

    Ok(ontology)
}

/// Save ontology to file
pub fn save_ontology<P: AsRef<Path>>(ontology: &WebVOWLOntology, path: P) -> Result<(), String> {
    let json = serde_json::to_string_pretty(ontology)
        .map_err(|e| format!("Failed to serialize ontology: {}", e))?;
    fs::write(path, json)
        .map_err(|e| format!("Failed to write ontology file: {}", e))?;
    Ok(())
}

/// Get ontology statistics
#[derive(Debug, Serialize, Deserialize)]
pub struct OntologyStats {
    pub class_count: usize,
    pub property_count: usize,
    pub namespace_count: usize,
    pub title: String,
    pub version: String,
}

pub fn get_ontology_stats(ontology: &WebVOWLOntology) -> OntologyStats {
    OntologyStats {
        class_count: ontology.class.len(),
        property_count: ontology.property.len(),
        namespace_count: ontology.namespace.len(),
        title: ontology.header.title.get("en").cloned().unwrap_or_default(),
        version: ontology.header.version.clone(),
    }
}

/// Convert text to PascalCase for URIs
pub fn to_camel_case(text: &str) -> String {
    // Remove term-id patterns like BC-0123, AI-0456
    let text = Regex::new(r"^[A-Z]{2,}-?\d+[-_\s]*")
        .unwrap()
        .replace(text, "");

    // Remove invalid characters
    let text = Regex::new(r"[()%\[\]{}]")
        .unwrap()
        .replace_all(&text, "");

    // Convert to PascalCase
    let words: Vec<&str> = text.split_whitespace().collect();
    let result: String = words.iter()
        .filter_map(|word| {
            let mut chars = word.chars();
            chars.next().map(|first| {
                first.to_uppercase().chain(chars).collect::<String>()
            })
        })
        .collect();

    if result.is_empty() {
        "Term".to_string()
    } else {
        result
    }
}

/// Convert text to camelCase for properties
pub fn to_property_name(text: &str) -> String {
    let words: Vec<&str> = text.split(|c: char| !c.is_alphanumeric()).collect();
    if words.is_empty() {
        return "relatedTo".to_string();
    }

    let mut result = words[0].to_lowercase();
    for word in &words[1..] {
        let mut chars = word.chars();
        if let Some(first) = chars.next() {
            result.push_str(&first.to_uppercase().chain(chars).collect::<String>());
        }
    }

    result
}
