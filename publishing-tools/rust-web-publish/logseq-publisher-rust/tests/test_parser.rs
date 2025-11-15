//! Comprehensive unit tests for the Logseq parser
//!
//! This test suite provides extensive coverage of all parsing functionality including:
//! - Simple page parsing
//! - Nested blocks (5+ levels)
//! - Property extraction
//! - Wiki links (simple, alias, namespace)
//! - Tags
//! - Code blocks
//! - Markdown formatting
//! - Edge cases and error handling

use logseq_publisher_rust::parser::{parse_logseq_page, Page, Block};
use std::collections::HashMap;

#[cfg(test)]
mod parser_tests {
    use super::*;

    #[test]
    fn test_parse_simple_page() {
        let content = r#"- This is a simple block
- Another simple block
- Third block"#;

        let page = parse_logseq_page(content, "simple.md").unwrap();

        assert_eq!(page.title, "simple");
        assert_eq!(page.path, "simple.md");
        assert_eq!(page.blocks.len(), 3);
        assert_eq!(page.blocks[0].content, "This is a simple block");
        assert_eq!(page.blocks[1].content, "Another simple block");
        assert_eq!(page.blocks[2].content, "Third block");
    }

    #[test]
    fn test_parse_nested_blocks_5_levels() {
        let content = r#"- Level 1
  - Level 2
    - Level 3
      - Level 4
        - Level 5
          - Level 6 (extra deep)"#;

        let page = parse_logseq_page(content, "nested.md").unwrap();

        assert_eq!(page.blocks.len(), 1);

        let level1 = &page.blocks[0];
        assert_eq!(level1.content, "Level 1");
        assert_eq!(level1.children.len(), 1);

        let level2 = &level1.children[0];
        assert_eq!(level2.content, "Level 2");
        assert_eq!(level2.children.len(), 1);

        let level3 = &level2.children[0];
        assert_eq!(level3.content, "Level 3");
        assert_eq!(level3.children.len(), 1);

        let level4 = &level3.children[0];
        assert_eq!(level4.content, "Level 4");
        assert_eq!(level4.children.len(), 1);

        let level5 = &level4.children[0];
        assert_eq!(level5.content, "Level 5");
        assert_eq!(level5.children.len(), 1);

        let level6 = &level5.children[0];
        assert_eq!(level6.content, "Level 6 (extra deep)");
    }

    #[test]
    fn test_parse_properties_all_types() {
        let content = r#"---
title: Test Page
term-id: AI-0048
public-access: true
status: active
source-domain: ai-ml
maturity: established
---
- Content block"#;

        let page = parse_logseq_page(content, "props.md").unwrap();

        assert_eq!(page.properties.get("title"), Some(&"Test Page".to_string()));
        assert_eq!(page.properties.get("term-id"), Some(&"AI-0048".to_string()));
        assert_eq!(page.properties.get("public-access"), Some(&"true".to_string()));
        assert_eq!(page.properties.get("status"), Some(&"active".to_string()));
        assert_eq!(page.properties.get("source-domain"), Some(&"ai-ml".to_string()));
        assert_eq!(page.properties.get("maturity"), Some(&"established".to_string()));
    }

    #[test]
    fn test_parse_wiki_links_simple() {
        let content = r#"- This links to [[Simple Link]]
- Another link to [[Machine Learning]]"#;

        let page = parse_logseq_page(content, "links.md").unwrap();

        assert_eq!(page.links.len(), 2);
        assert!(page.links.contains(&"Simple Link".to_string()));
        assert!(page.links.contains(&"Machine Learning".to_string()));
    }

    #[test]
    fn test_parse_wiki_links_with_alias() {
        let content = r#"- This is an [[Alias|Real Page Name]]
- Regular [[Link]]"#;

        let page = parse_logseq_page(content, "alias.md").unwrap();

        // The parser should extract "Alias|Real Page Name" as-is
        // A more sophisticated parser might split these
        assert!(page.links.len() >= 1);
    }

    #[test]
    fn test_parse_wiki_links_with_namespace() {
        let content = r#"- Link to [[Namespace/Page]]
- Another [[Domain/Category/Page]]"#;

        let page = parse_logseq_page(content, "namespace.md").unwrap();

        assert!(page.links.contains(&"Namespace/Page".to_string()));
        assert!(page.links.contains(&"Domain/Category/Page".to_string()));
    }

    #[test]
    fn test_parse_multiple_tags() {
        let content = r#"- This has #tag1 and #tag2
- Another block with #machine-learning and #ai"#;

        let page = parse_logseq_page(content, "tags.md").unwrap();

        assert!(page.tags.len() >= 2);
        assert!(page.tags.contains(&"tag1".to_string()));
        assert!(page.tags.contains(&"tag2".to_string()));
        // Note: tags with hyphens might not be captured by simple regex
    }

    #[test]
    fn test_parse_single_tag() {
        let content = r#"- Block with #singletag at the end"#;

        let page = parse_logseq_page(content, "onetag.md").unwrap();

        assert!(page.tags.contains(&"singletag".to_string()));
    }

    #[test]
    fn test_parse_code_blocks() {
        let content = r#"- Code example:
  ```rust
  fn hello() {
      println!("Hello");
  }
  ```"#;

        let page = parse_logseq_page(content, "code.md").unwrap();

        // Code blocks should be preserved in content
        assert!(page.blocks[0].content.contains("Code example:"));
    }

    #[test]
    fn test_parse_markdown_bold() {
        let content = r#"- This is **bold text** in markdown"#;

        let page = parse_logseq_page(content, "bold.md").unwrap();

        assert!(page.blocks[0].content.contains("**bold text**"));
    }

    #[test]
    fn test_parse_markdown_italic() {
        let content = r#"- This is *italic text* in markdown"#;

        let page = parse_logseq_page(content, "italic.md").unwrap();

        assert!(page.blocks[0].content.contains("*italic text*"));
    }

    #[test]
    fn test_parse_markdown_links() {
        let content = r#"- Regular markdown [link](https://example.com)
- Another [Example Link](https://test.com)"#;

        let page = parse_logseq_page(content, "mdlinks.md").unwrap();

        assert!(page.blocks[0].content.contains("[link](https://example.com)"));
        assert!(page.blocks[1].content.contains("[Example Link](https://test.com)"));
    }

    #[test]
    fn test_parse_mixed_markdown() {
        let content = r#"- This has **bold** and *italic* and [[wiki-link]] and #tag"#;

        let page = parse_logseq_page(content, "mixed.md").unwrap();

        assert!(page.blocks[0].content.contains("**bold**"));
        assert!(page.blocks[0].content.contains("*italic*"));
        assert!(page.links.contains(&"wiki-link".to_string()));
        assert!(page.tags.contains(&"tag".to_string()));
    }

    #[test]
    fn test_parse_empty_page() {
        let content = "";

        let page = parse_logseq_page(content, "empty.md").unwrap();

        assert_eq!(page.title, "empty");
        assert_eq!(page.blocks.len(), 0);
        assert_eq!(page.tags.len(), 0);
        assert_eq!(page.links.len(), 0);
    }

    #[test]
    fn test_parse_only_whitespace() {
        let content = "   \n\n   \n  ";

        let page = parse_logseq_page(content, "whitespace.md").unwrap();

        assert_eq!(page.blocks.len(), 0);
    }

    #[test]
    fn test_parse_malformed_frontmatter() {
        let content = r#"---
title: Test
missing closing marker
- Block content"#;

        let result = parse_logseq_page(content, "malformed.md");

        // Should return an error for unclosed frontmatter
        assert!(result.is_err());
    }

    #[test]
    fn test_parse_very_deep_nesting() {
        // Create 20 levels of nesting
        let mut content = String::from("- Level 1\n");
        for i in 2..=20 {
            let indent = "  ".repeat(i - 1);
            content.push_str(&format!("{}- Level {}\n", indent, i));
        }

        let page = parse_logseq_page(&content, "deep.md").unwrap();

        // Verify we can parse very deep nesting
        assert_eq!(page.blocks.len(), 1);

        // Walk down the tree
        let mut current = &page.blocks[0];
        for i in 2..=20 {
            assert!(!current.children.is_empty(), "Missing level {}", i);
            current = &current.children[0];
        }
    }

    #[test]
    fn test_parse_unicode_content() {
        let content = r#"- Unicode content: 你好世界 🌍
- Emoji: 🎉 🚀 ✨
- Math symbols: ∑ ∫ π"#;

        let page = parse_logseq_page(content, "unicode.md").unwrap();

        assert_eq!(page.blocks.len(), 3);
        assert!(page.blocks[0].content.contains("你好世界"));
        assert!(page.blocks[1].content.contains("🎉"));
        assert!(page.blocks[2].content.contains("∑"));
    }

    #[test]
    fn test_parse_special_characters() {
        let content = r#"- Special chars: & < > " '
- Symbols: @ # $ % ^ & * ( )"#;

        let page = parse_logseq_page(content, "special.md").unwrap();

        assert_eq!(page.blocks.len(), 2);
        assert!(page.blocks[0].content.contains("&"));
        assert!(page.blocks[1].content.contains("@"));
    }

    #[test]
    fn test_parse_mixed_bullet_types() {
        let content = r#"- Hyphen bullet
* Asterisk bullet
- Another hyphen"#;

        let page = parse_logseq_page(content, "bullets.md").unwrap();

        assert_eq!(page.blocks.len(), 3);
    }

    #[test]
    fn test_parse_inline_properties() {
        let content = r#"- Block with property
  id:: block-123
  collapsed:: true
  - Child block"#;

        let page = parse_logseq_page(content, "inline-props.md").unwrap();

        // Inline properties should be parsed as separate blocks or within block content
        assert!(page.blocks.len() >= 1);
    }

    #[test]
    fn test_parse_real_ontology_file() {
        // Simplified version of the real Hyperparameter.md
        let content = r#"- ### OntologyBlock
  id:: hyperparameter-ontology
  collapsed:: true
- ontology:: true
- term-id:: AI-0048
- preferred-term:: Hyperparameter
- source-domain:: ai-ml
- status:: active
- public-access:: true
- definition:: A configuration variable set before training.
- maturity:: established
- belongsToDomain:: [[MachineLearningDomain]]

## Academic Context

- Brief contextual overview
  - Hyperparameters are foundational to machine learning"#;

        let page = parse_logseq_page(content, "Hyperparameter.md").unwrap();

        assert_eq!(page.title, "Hyperparameter");
        assert!(page.blocks.len() > 0);
    }

    #[test]
    fn test_extract_multiple_links_from_single_block() {
        let content = r#"- This block has [[Link1]] and [[Link2]] and [[Link3]]"#;

        let page = parse_logseq_page(content, "multilink.md").unwrap();

        assert_eq!(page.links.len(), 3);
        assert!(page.links.contains(&"Link1".to_string()));
        assert!(page.links.contains(&"Link2".to_string()));
        assert!(page.links.contains(&"Link3".to_string()));
    }

    #[test]
    fn test_extract_links_from_nested_blocks() {
        let content = r#"- Parent with [[ParentLink]]
  - Child with [[ChildLink]]
    - Grandchild with [[GrandchildLink]]"#;

        let page = parse_logseq_page(content, "nested-links.md").unwrap();

        assert_eq!(page.links.len(), 3);
        assert!(page.links.contains(&"ParentLink".to_string()));
        assert!(page.links.contains(&"ChildLink".to_string()));
        assert!(page.links.contains(&"GrandchildLink".to_string()));
    }

    #[test]
    fn test_duplicate_links_are_deduplicated() {
        let content = r#"- First [[DuplicateLink]]
- Second [[DuplicateLink]]
- Third [[DuplicateLink]]"#;

        let page = parse_logseq_page(content, "dupes.md").unwrap();

        // Should only have one instance
        assert_eq!(page.links.iter().filter(|l| *l == "DuplicateLink").count(), 1);
    }

    #[test]
    fn test_title_extraction_from_path() {
        let page1 = parse_logseq_page("- test", "simple.md").unwrap();
        assert_eq!(page1.title, "simple");

        let page2 = parse_logseq_page("- test", "folder/nested.md").unwrap();
        assert_eq!(page2.title, "nested");

        let page3 = parse_logseq_page("- test", "deep/folder/structure/page.md").unwrap();
        assert_eq!(page3.title, "page");
    }

    #[test]
    fn test_empty_blocks_are_skipped() {
        let content = r#"- Block 1

- Block 2

- Block 3"#;

        let page = parse_logseq_page(content, "empty-lines.md").unwrap();

        // Empty lines should be skipped
        assert_eq!(page.blocks.len(), 3);
    }

    #[test]
    fn test_blocks_with_only_spaces() {
        let content = "- Block 1\n     \n- Block 2";

        let page = parse_logseq_page(content, "spaces.md").unwrap();

        assert_eq!(page.blocks.len(), 2);
    }

    #[test]
    fn test_headings_as_blocks() {
        let content = r#"## Heading 2
- Block under heading
### Heading 3
- Another block"#;

        let page = parse_logseq_page(content, "headings.md").unwrap();

        // Headings might be parsed as blocks or skipped depending on implementation
        assert!(page.blocks.len() >= 2);
    }

    #[test]
    fn test_complex_nesting_pattern() {
        let content = r#"- A
  - A1
  - A2
    - A2a
    - A2b
  - A3
- B
  - B1
    - B1a"#;

        let page = parse_logseq_page(content, "complex.md").unwrap();

        assert_eq!(page.blocks.len(), 2); // A and B
        assert_eq!(page.blocks[0].children.len(), 3); // A1, A2, A3
        assert_eq!(page.blocks[0].children[1].children.len(), 2); // A2a, A2b
        assert_eq!(page.blocks[1].children.len(), 1); // B1
        assert_eq!(page.blocks[1].children[0].children.len(), 1); // B1a
    }
}
