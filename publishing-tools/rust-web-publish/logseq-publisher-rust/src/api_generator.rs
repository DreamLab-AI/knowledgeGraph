/// Phase 5: API Generator for React SPA
///
/// Generates JSON API files consumed by the Phase 4 React application:
/// - /api/search-index.json - Unified search index
/// - /api/pages/[name].json - Individual page data
/// - /api/backlinks/[name].json - Page backlinks

use crate::graph::Graph;
use crate::parser::{Block, Page};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::PathBuf;
use anyhow::{Context, Result};

/// Search document for Fuse.js
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SearchDocument {
    pub id: String,
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ontology_id: Option<String>,
}

/// Ontology metadata for pages
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OntologyMetadata {
    pub term_id: String,
    pub preferred_term: String,
    pub definition: Option<String>,
    pub source_domain: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub maturity_level: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub authority_score: Option<f64>,
}

/// Page data for React SPA
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PageData {
    pub title: String,
    pub content: String,
    pub properties: HashMap<String, String>,
    pub backlinks: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ontology: Option<OntologyMetadata>,
}

/// API Generator configuration
#[derive(Debug, Clone)]
pub struct ApiGeneratorConfig {
    pub output_dir: PathBuf,
    pub max_content_length: usize,
    pub include_private: bool,
}

impl Default for ApiGeneratorConfig {
    fn default() -> Self {
        Self {
            output_dir: PathBuf::from("www/api"),
            max_content_length: 5000,
            include_private: false,
        }
    }
}

/// Main API generator
pub struct ApiGenerator {
    config: ApiGeneratorConfig,
}

impl ApiGenerator {
    pub fn new(config: ApiGeneratorConfig) -> Self {
        Self { config }
    }

    /// Generate all API files for the graph
    pub fn generate(&self, graph: &Graph) -> Result<()> {
        // Create API directories
        let api_dir = &self.config.output_dir;
        let pages_dir = api_dir.join("pages");
        let backlinks_dir = api_dir.join("backlinks");

        fs::create_dir_all(&pages_dir)
            .context("Failed to create pages directory")?;
        fs::create_dir_all(&backlinks_dir)
            .context("Failed to create backlinks directory")?;

        println!("📁 Created API directories at {}", api_dir.display());

        // Generate search index
        let search_index = self.generate_search_index(graph)?;
        let search_path = api_dir.join("search-index.json");
        let search_json = serde_json::to_string_pretty(&search_index)
            .context("Failed to serialize search index")?;
        fs::write(&search_path, search_json)
            .context("Failed to write search index")?;

        println!("🔍 Generated search index: {} documents", search_index.len());

        // Generate individual page files
        let mut pages_generated = 0;
        for page in graph.pages() {
            // Skip private pages unless configured otherwise
            if !self.config.include_private {
                if let Some(public) = page.properties.get("public-access") {
                    if public != "true" {
                        continue;
                    }
                }
            }

            // Generate page data
            let page_data = self.generate_page_data(page, graph)?;
            let page_path = pages_dir.join(format!("{}.json", Self::slugify(&page.title)));
            let page_json = serde_json::to_string_pretty(&page_data)
                .context("Failed to serialize page data")?;
            fs::write(&page_path, page_json)
                .with_context(|| format!("Failed to write page: {}", page.title))?;

            // Generate backlinks file
            let backlinks = graph.get_backlinks(&page.path);
            let backlinks_path = backlinks_dir.join(format!("{}.json", Self::slugify(&page.title)));
            let backlinks_json = serde_json::to_string_pretty(&backlinks)
                .context("Failed to serialize backlinks")?;
            fs::write(&backlinks_path, backlinks_json)
                .with_context(|| format!("Failed to write backlinks: {}", page.title))?;

            pages_generated += 1;
        }

        println!("📄 Generated {} page JSON files", pages_generated);
        println!("🔗 Generated {} backlink files", pages_generated);

        Ok(())
    }

    /// Generate unified search index
    fn generate_search_index(&self, graph: &Graph) -> Result<Vec<SearchDocument>> {
        let mut documents = Vec::new();

        for page in graph.pages() {
            // Skip private pages
            if !self.config.include_private {
                if let Some(public) = page.properties.get("public-access") {
                    if public != "true" {
                        continue;
                    }
                }
            }

            // Extract content from blocks
            let content = Self::extract_text_content(&page.blocks);
            let truncated_content = if content.len() > self.config.max_content_length {
                // Ensure we truncate at a valid UTF-8 character boundary
                let mut end = self.config.max_content_length;
                while end > 0 && !content.is_char_boundary(end) {
                    end -= 1;
                }
                format!("{}...", &content[..end])
            } else {
                content
            };

            // Extract ontology ID if present
            let ontology_id = page.ontology.as_ref().map(|o| o.term_id.clone());

            documents.push(SearchDocument {
                id: Self::slugify(&page.title),
                title: page.title.clone(),
                content: truncated_content,
                tags: page.tags.clone(),
                ontology_id,
            });
        }

        Ok(documents)
    }

    /// Generate page data for React SPA
    fn generate_page_data(&self, page: &Page, graph: &Graph) -> Result<PageData> {
        // Convert blocks to markdown content
        let content = Self::blocks_to_markdown(&page.blocks, 0);

        // Get backlinks
        let backlinks = graph.get_backlinks(&page.path)
            .into_iter()
            .filter_map(|path| {
                graph.pages().find(|p| p.path == path).map(|p| p.title.clone())
            })
            .collect();

        // Extract ontology metadata if present
        let ontology = page.ontology.as_ref().map(|o| {
            OntologyMetadata {
                term_id: o.term_id.clone(),
                preferred_term: o.preferred_term.clone(),
                definition: Some(o.definition.clone()),
                source_domain: o.domain.clone().unwrap_or_else(|| "unknown".to_string()),
                maturity_level: o.maturity.clone(),
                authority_score: o.authority_score,
            }
        });

        Ok(PageData {
            title: page.title.clone(),
            content,
            properties: page.properties.clone(),
            backlinks,
            ontology,
        })
    }

    /// Convert blocks to markdown recursively
    fn blocks_to_markdown(blocks: &[Block], indent: usize) -> String {
        let mut content = String::new();
        let indent_str = "  ".repeat(indent);

        for block in blocks {
            // Add block content
            if !block.content.is_empty() {
                content.push_str(&format!("{}- {}\n", indent_str, block.content));
            }

            // Recursively add children
            if !block.children.is_empty() {
                content.push_str(&Self::blocks_to_markdown(&block.children, indent + 1));
            }
        }

        content
    }

    /// Extract plain text content from blocks (for search index)
    fn extract_text_content(blocks: &[Block]) -> String {
        let mut content = String::new();

        for block in blocks {
            if !block.content.is_empty() {
                content.push_str(&block.content);
                content.push(' ');
            }

            // Recursively extract from children
            if !block.children.is_empty() {
                content.push_str(&Self::extract_text_content(&block.children));
            }
        }

        content.trim().to_string()
    }

    /// Convert page title to URL-safe slug
    fn slugify(title: &str) -> String {
        title
            .to_lowercase()
            .replace(' ', "-")
            .replace('/', "-")
            .replace('\\', "-")
            .chars()
            .filter(|c| c.is_alphanumeric() || *c == '-' || *c == '_')
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;

    #[test]
    fn test_slugify() {
        assert_eq!(ApiGenerator::slugify("AI Alignment"), "ai-alignment");
        assert_eq!(ApiGenerator::slugify("Smart Contracts"), "smart-contracts");
        assert_eq!(ApiGenerator::slugify("Test/Path"), "test-path");
    }

    #[test]
    fn test_extract_text_content() {
        let blocks = vec![
            Block {
                id: "block-1".to_string(),
                content: "Hello world".to_string(),
                children: vec![
                    Block {
                        id: "block-2".to_string(),
                        content: "Nested content".to_string(),
                        children: vec![],
                        properties: HashMap::new(),
                        level: 1,
                    }
                ],
                properties: HashMap::new(),
                level: 0,
            }
        ];

        let content = ApiGenerator::extract_text_content(&blocks);
        assert!(content.contains("Hello world"));
        assert!(content.contains("Nested content"));
    }
}
