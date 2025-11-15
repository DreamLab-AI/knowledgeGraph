use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use regex::Regex;
use lazy_static::lazy_static;
use crate::owl_extractor;

lazy_static! {
    static ref TAG_REGEX: Regex = Regex::new(r"#([\w-]+)").unwrap();
    static ref WIKILINK_REGEX: Regex = Regex::new(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]").unwrap();
    static ref PROPERTY_REGEX: Regex = Regex::new(r"^(\w+(?:-\w+)*)::\s*(.+)$").unwrap();
    static ref BLOCK_REF_REGEX: Regex = Regex::new(r"\(\(([a-zA-Z0-9-]+)\)\)").unwrap();
    static ref CODE_BLOCK_REGEX: Regex = Regex::new(r"```(\w+)?\n([\s\S]*?)```").unwrap();
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Page {
    pub path: String,
    pub title: String,
    pub properties: HashMap<String, String>,
    pub blocks: Vec<Block>,
    pub tags: Vec<String>,
    pub links: Vec<String>,
    pub ontology: Option<owl_extractor::OWLClass>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Block {
    pub id: String,
    pub content: String,
    pub children: Vec<Block>,
    pub properties: HashMap<String, String>,
    pub level: usize,
}

/// Count total blocks recursively
pub fn count_blocks(blocks: &[Block]) -> usize {
    blocks.iter().map(|b| 1 + count_blocks(&b.children)).sum()
}

/// Parse a Logseq markdown page with full feature support
pub fn parse_logseq_page(content: &str, path: &str) -> Result<Page, String> {
    let mut page = Page {
        path: path.to_string(),
        title: extract_title(path),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    let lines: Vec<&str> = content.lines().collect();
    let mut i = 0;

    // Parse YAML frontmatter properties
    if lines.first() == Some(&"---") {
        i = parse_frontmatter(&lines[1..], &mut page.properties)?;
        i += 2; // Skip opening and closing ---
    }

    // Parse blocks starting from line i
    if i < lines.len() {
        page.blocks = parse_blocks(&lines[i..], 0)?;
    }

    // Extract tags and links from all blocks
    extract_tags_and_links(&page.blocks, &mut page.tags, &mut page.links);

    // Extract ontology block if present (Phase 2 integration)
    page.ontology = owl_extractor::extract_ontology_block(content);

    Ok(page)
}

fn extract_title(path: &str) -> String {
    path.split('/')
        .last()
        .unwrap_or(path)
        .trim_end_matches(".md")
        .trim_end_matches(".markdown")
        .to_string()
}

fn parse_frontmatter(lines: &[&str], properties: &mut HashMap<String, String>) -> Result<usize, String> {
    for (i, line) in lines.iter().enumerate() {
        if *line == "---" {
            return Ok(i);
        }
        if let Some((key, value)) = line.split_once(':') {
            properties.insert(
                key.trim().to_string(),
                value.trim().to_string(),
            );
        }
    }
    Err("Unclosed frontmatter block".to_string())
}

fn parse_blocks(lines: &[&str], base_level: usize) -> Result<Vec<Block>, String> {
    let mut blocks = Vec::new();
    let mut i = 0;

    while i < lines.len() {
        let line = lines[i];
        let indent_level = count_leading_tabs(line);

        if indent_level < base_level {
            break;
        }

        if indent_level == base_level && line.trim().starts_with('-') {
            let content = line.trim().trim_start_matches('-').trim().to_string();
            let id = generate_block_id(&content);
            let mut block = Block {
                id,
                content: content.clone(),
                children: Vec::new(),
                properties: HashMap::new(),
                level: base_level,
            };

            // Parse inline properties
            parse_inline_properties(&content, &mut block.properties);

            // Look ahead for children
            let mut child_lines = Vec::new();
            let mut j = i + 1;
            while j < lines.len() && count_leading_tabs(lines[j]) > base_level {
                child_lines.push(lines[j]);
                j += 1;
            }

            if !child_lines.is_empty() {
                block.children = parse_blocks(&child_lines, base_level + 1)?;
            }

            blocks.push(block);
            i = j;
        } else {
            i += 1;
        }
    }

    Ok(blocks)
}

fn count_leading_tabs(line: &str) -> usize {
    line.chars().take_while(|c| *c == '\t' || *c == ' ').count() / 2
}

fn generate_block_id(content: &str) -> String {
    use sha2::{Sha256, Digest};
    let mut hasher = Sha256::new();
    hasher.update(content.as_bytes());
    format!("{:x}", hasher.finalize())[..16].to_string()
}

fn parse_inline_properties(content: &str, properties: &mut HashMap<String, String>) {
    for cap in PROPERTY_REGEX.captures_iter(content) {
        if let (Some(key), Some(value)) = (cap.get(1), cap.get(2)) {
            properties.insert(key.as_str().to_string(), value.as_str().to_string());
        }
    }
}

fn extract_tags_and_links(blocks: &[Block], tags: &mut Vec<String>, links: &mut Vec<String>) {
    for block in blocks {
        // Extract tags
        for cap in TAG_REGEX.captures_iter(&block.content) {
            if let Some(tag) = cap.get(1) {
                let tag_str = tag.as_str().to_string();
                if !tags.contains(&tag_str) {
                    tags.push(tag_str);
                }
            }
        }

        // Extract wikilinks
        for cap in WIKILINK_REGEX.captures_iter(&block.content) {
            if let Some(link) = cap.get(1) {
                let link_str = link.as_str().to_string();
                if !links.contains(&link_str) {
                    links.push(link_str);
                }
            }
        }

        // Recurse into children
        extract_tags_and_links(&block.children, tags, links);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_simple_page() {
        let content = r#"---
title: Test Page
tags: test, example
---

- First block
  - Nested block
- Second block"#;

        let page = parse_logseq_page(content, "test.md").unwrap();
        assert_eq!(page.title, "test");
        assert_eq!(page.properties.get("title"), Some(&"Test Page".to_string()));
        assert_eq!(page.blocks.len(), 2);
        assert_eq!(page.blocks[0].children.len(), 1);
    }

    #[test]
    fn test_extract_tags() {
        let content = "- This is a #test page with #multiple tags";
        let page = parse_logseq_page(content, "test.md").unwrap();
        assert!(page.tags.contains(&"test".to_string()));
        assert!(page.tags.contains(&"multiple".to_string()));
    }

    #[test]
    fn test_extract_links() {
        let content = "- Link to [[Page One]] and [[Page Two]]";
        let page = parse_logseq_page(content, "test.md").unwrap();
        assert!(page.links.contains(&"Page One".to_string()));
        assert!(page.links.contains(&"Page Two".to_string()));
    }
}
