# Data Models: Unified Knowledge Graph

## Overview

This document defines the complete Rust type system for the unified knowledge graph publishing system. All types use `serde` for JSON serialization and follow Rust best practices.

## Core Page Types

### UnifiedPage

The main data structure representing a Logseq page with optional ontology data.

```rust
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnifiedPage {
    /// Relative path to the markdown file
    pub path: String,

    /// Page title (derived from filename or frontmatter)
    pub title: String,

    /// Frontmatter properties (key-value pairs)
    pub properties: HashMap<String, String>,

    /// Hierarchical content blocks
    pub blocks: Vec<Block>,

    /// Extracted tags (#tag)
    pub tags: Vec<String>,

    /// Extracted wiki-links ([[link]])
    pub links: Vec<String>,

    /// Backlinks from other pages
    pub backlinks: Vec<String>,

    /// Ontology data (only present if page has OntologyBlock)
    pub ontology: Option<OWLClass>,
}

impl UnifiedPage {
    /// Check if this page is an ontology page
    pub fn is_ontology(&self) -> bool {
        self.ontology.is_some()
    }

    /// Get term ID if this is an ontology page
    pub fn term_id(&self) -> Option<&str> {
        self.ontology.as_ref().map(|o| o.term_id.as_str())
    }

    /// Get domain prefix (AI, BC, MV, RB, DT)
    pub fn domain(&self) -> Option<&str> {
        self.ontology.as_ref().and_then(|o| o.domain.as_deref())
    }
}
```

### Block

Hierarchical content block with properties and children.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Block {
    /// Unique block ID
    pub id: String,

    /// Block content (markdown text)
    pub content: String,

    /// Nested child blocks
    pub children: Vec<Block>,

    /// Block-level properties
    pub properties: HashMap<String, String>,

    /// Indentation level (0 = top-level)
    pub level: usize,
}

impl Block {
    /// Count total blocks (including children)
    pub fn count_recursive(&self) -> usize {
        1 + self.children.iter().map(|b| b.count_recursive()).sum::<usize>()
    }

    /// Extract all text content (including children)
    pub fn all_text(&self) -> String {
        let mut text = self.content.clone();
        for child in &self.children {
            text.push('\n');
            text.push_str(&child.all_text());
        }
        text
    }
}
```

## Ontology Types

### OWLClass

Complete OWL class definition extracted from OntologyBlock.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OWLClass {
    /// Term identifier (e.g., "AI-0123", "BC-0456")
    pub term_id: String,

    /// Human-readable preferred term (e.g., "Machine Learning")
    pub preferred_term: String,

    /// Textual definition
    pub definition: String,

    /// Source domain (e.g., "artificial-intelligence", "blockchain")
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
    pub axioms: Vec<OWLAxiom>,
}

impl OWLClass {
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
        } else {
            "https://narrativegoldmine.com/ontology/disruptive-technologies#"
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
```

### OWLRelationship

Typed relationship between ontology classes.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OWLRelationship {
    /// Property name (e.g., "enables-capability", "uses-technology")
    pub property: String,

    /// Target class (term-id or preferred-term)
    pub target: String,

    /// Relationship type (inferred from property name or explicit)
    pub relationship_type: RelationshipType,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum RelationshipType {
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
```

### OWLAxiom

Parsed OWL Functional Syntax axioms.

```rust
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
        restriction_type: RestrictionType,
    },
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub enum RestrictionType {
    SomeValuesFrom,  // ObjectSomeValuesFrom
    AllValuesFrom,   // ObjectAllValuesFrom
    HasValue,        // ObjectHasValue
    MinCardinality,  // ObjectMinCardinality
    MaxCardinality,  // ObjectMaxCardinality
    ExactCardinality, // ObjectExactCardinality
}
```

## WebVOWL Output Types

### WebVOWLOutput

Complete WebVOWL JSON format for visualization.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebVOWLOutput {
    pub header: WebVOWLHeader,
    pub namespace: Vec<Namespace>,
    pub class: Vec<Class>,
    #[serde(rename = "classAttribute")]
    pub class_attribute: Vec<ClassAttribute>,
    pub property: Vec<Property>,
    #[serde(rename = "propertyAttribute")]
    pub property_attribute: Vec<PropertyAttribute>,
}

impl WebVOWLOutput {
    /// Create empty WebVOWL structure
    pub fn new(title: &str, description: &str) -> Self {
        Self {
            header: WebVOWLHeader {
                languages: vec!["en".to_string()],
                title: LocalizedString::new(title),
                description: Some(LocalizedString::new(description)),
                version: Some("1.0.0".to_string()),
            },
            namespace: Vec::new(),
            class: Vec::new(),
            class_attribute: Vec::new(),
            property: Vec::new(),
            property_attribute: Vec::new(),
        }
    }

    /// Add namespace
    pub fn add_namespace(&mut self, prefix: &str, iri: &str) {
        self.namespace.push(Namespace {
            prefix: prefix.to_string(),
            iri: iri.to_string(),
        });
    }

    /// Get statistics
    pub fn stats(&self) -> WebVOWLStats {
        WebVOWLStats {
            class_count: self.class.len(),
            property_count: self.property.len(),
            namespace_count: self.namespace.len(),
        }
    }
}
```

### WebVOWLHeader

Metadata for ontology visualization.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebVOWLHeader {
    pub languages: Vec<String>,
    pub title: LocalizedString,
    pub description: Option<LocalizedString>,
    pub version: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LocalizedString {
    pub en: String,
}

impl LocalizedString {
    pub fn new(text: &str) -> Self {
        Self {
            en: text.to_string(),
        }
    }
}
```

### Namespace

Namespace prefix and IRI mapping.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Namespace {
    pub prefix: String,
    pub iri: String,
}
```

### Class

WebVOWL class node (minimal, paired with ClassAttribute).

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Class {
    /// Numeric ID (as string)
    pub id: String,

    /// OWL type
    #[serde(rename = "type")]
    pub owl_type: String, // "owl:Class"
}
```

### ClassAttribute

Extended class attributes (labels, IRI, comments).

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClassAttribute {
    /// Numeric ID (must match Class.id)
    pub id: String,

    /// Full IRI
    pub iri: String,

    /// Base IRI (namespace)
    #[serde(rename = "baseIri")]
    pub base_iri: String,

    /// Human-readable label
    pub label: Option<LocalizedString>,

    /// Comment/definition
    pub comment: Option<LocalizedString>,

    /// Visual attributes
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attributes: Option<Vec<String>>,
}
```

### Property

WebVOWL property edge (minimal, paired with PropertyAttribute).

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Property {
    /// Numeric ID (as string, must be > all class IDs)
    pub id: String,

    /// OWL type
    #[serde(rename = "type")]
    pub owl_type: String, // "owl:objectProperty", "owl:datatypeProperty", "rdfs:SubClassOf"
}
```

### PropertyAttribute

Extended property attributes (domain, range, labels).

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PropertyAttribute {
    /// Numeric ID (must match Property.id)
    pub id: String,

    /// Domain class ID
    pub domain: String,

    /// Range class ID
    pub range: String,

    /// Full IRI
    #[serde(skip_serializing_if = "Option::is_none")]
    pub iri: Option<String>,

    /// Base IRI (namespace)
    #[serde(rename = "baseIri", skip_serializing_if = "Option::is_none")]
    pub base_iri: Option<String>,

    /// Human-readable label
    #[serde(skip_serializing_if = "Option::is_none")]
    pub label: Option<LocalizedString>,

    /// Visual attributes
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attributes: Option<Vec<String>>,
}
```

## Graph Types

### UnifiedGraph

Complete knowledge graph with pages and ontology relationships.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnifiedGraph {
    /// All pages indexed by path
    pub pages: HashMap<String, UnifiedPage>,

    /// Backlinks: target -> sources
    pub backlinks: HashMap<String, Vec<String>>,

    /// Ontology classes indexed by term-id
    pub ontology_classes: HashMap<String, OWLClass>,

    /// Cross-domain bridges
    pub bridges: Vec<CrossDomainBridge>,
}

impl UnifiedGraph {
    pub fn new() -> Self {
        Self {
            pages: HashMap::new(),
            backlinks: HashMap::new(),
            ontology_classes: HashMap::new(),
            bridges: Vec::new(),
        }
    }

    pub fn add_page(&mut self, page: UnifiedPage) {
        let path = page.path.clone();

        // Update backlinks
        for link in &page.links {
            self.backlinks
                .entry(link.clone())
                .or_insert_with(Vec::new)
                .push(path.clone());
        }

        // Index ontology class
        if let Some(ontology) = &page.ontology {
            self.ontology_classes.insert(ontology.term_id.clone(), ontology.clone());

            // Track cross-domain relationships
            for rel in &ontology.relationships {
                if let Some(target_class) = self.ontology_classes.get(&rel.target) {
                    if ontology.domain != target_class.domain {
                        self.bridges.push(CrossDomainBridge {
                            source_term: ontology.term_id.clone(),
                            source_domain: ontology.domain.clone().unwrap_or_default(),
                            target_term: target_class.term_id.clone(),
                            target_domain: target_class.domain.clone().unwrap_or_default(),
                            property: rel.property.clone(),
                        });
                    }
                }
            }
        }

        self.pages.insert(path, page);
    }

    pub fn stats(&self) -> GraphStats {
        let total_blocks: usize = self.pages.values()
            .map(|p| p.blocks.iter().map(|b| b.count_recursive()).sum::<usize>())
            .sum();

        let total_links: usize = self.pages.values()
            .map(|p| p.links.len())
            .sum();

        let ontology_count = self.ontology_classes.len();

        GraphStats {
            page_count: self.pages.len(),
            total_blocks,
            total_links,
            ontology_count,
            bridge_count: self.bridges.len(),
        }
    }
}
```

### CrossDomainBridge

Tracks relationships between different ontology domains.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CrossDomainBridge {
    pub source_term: String,
    pub source_domain: String,
    pub target_term: String,
    pub target_domain: String,
    pub property: String,
}
```

### GraphStats

Statistics about the knowledge graph.

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GraphStats {
    pub page_count: usize,
    pub total_blocks: usize,
    pub total_links: usize,
    pub ontology_count: usize,
    pub bridge_count: usize,
}
```

## Helper Functions

### Utility Functions

```rust
/// Convert text to PascalCase for URIs
pub fn to_camel_case(text: &str) -> String {
    // Remove code patterns like BC-0123, AI-0456
    let text = regex::Regex::new(r"^[A-Z]{2,}-?\d+[-_\s]*")
        .unwrap()
        .replace(text, "");

    // Remove invalid characters
    let text = regex::Regex::new(r"[()%\[\]{}]")
        .unwrap()
        .replace_all(&text, "");

    // Convert to PascalCase
    let words: Vec<&str> = text.split_whitespace().collect();
    let result: String = words.iter()
        .map(|word| {
            let mut chars = word.chars();
            match chars.next() {
                None => String::new(),
                Some(first) => first.to_uppercase().chain(chars).collect(),
            }
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
```

## Type Compilation Checks

All types must be:
1. ✅ **Serializable** with `#[derive(Serialize, Deserialize)]`
2. ✅ **Clonable** with `#[derive(Clone)]`
3. ✅ **Debuggable** with `#[derive(Debug)]`
4. ✅ **WebVOWL compatible** - matches JSON schema exactly
5. ✅ **napi-rs compatible** - can be passed to/from Node.js

## Example Usage

```rust
// Create a unified page
let page = UnifiedPage {
    path: "pages/machine-learning.md".to_string(),
    title: "Machine Learning".to_string(),
    properties: HashMap::new(),
    blocks: vec![],
    tags: vec!["AI".to_string(), "technology".to_string()],
    links: vec!["Neural Networks".to_string()],
    backlinks: vec![],
    ontology: Some(OWLClass {
        term_id: "AI-0123".to_string(),
        preferred_term: "Machine Learning".to_string(),
        definition: "A subset of AI...".to_string(),
        domain: Some("artificial-intelligence".to_string()),
        maturity: Some("proven".to_string()),
        authority_score: Some(0.95),
        source: Some("Stanford AI Lab".to_string()),
        relationships: vec![
            OWLRelationship {
                property: "enables-capability".to_string(),
                target: "Deep Learning".to_string(),
                relationship_type: RelationshipType::EnablesCapability,
            },
        ],
        parent_classes: vec!["Artificial Intelligence".to_string()],
        axioms: vec![],
    }),
};

// Add to graph
let mut graph = UnifiedGraph::new();
graph.add_page(page);

// Export to WebVOWL
let webvowl = graph.to_webvowl();
let json = serde_json::to_string_pretty(&webvowl)?;
```

## Conclusion

This type system provides:
1. ✅ **Complete coverage** of all data structures
2. ✅ **Type safety** with Rust's type system
3. ✅ **Serialization** for JSON output
4. ✅ **WebVOWL compatibility** for visualization
5. ✅ **napi-rs compatibility** for Node.js integration
6. ✅ **Extensibility** for future features

All types are ready for implementation in the unified Rust library.
