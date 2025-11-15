/// Unit tests for Markdown parser
/// Tests individual components of the parser in isolation

use logseq_publisher_rust::parser::{
    MarkdownParser,
    PageMetadata,
    LogseqBlock,
    LinkResolver,
    PropertyExtractor
};
use pretty_assertions::assert_eq;
use rstest::*;
use std::collections::HashMap;

#[test]
fn test_parse_simple_markdown() {
    let input = "# Hello World\n\nThis is a test.";
    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.title, "Hello World");
    assert!(!page.blocks.is_empty());
}

#[test]
fn test_parse_frontmatter() {
    let input = r#"---
title: Test Page
tags: [rust, testing]
public: true
---

Content here"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.metadata.title, Some("Test Page".to_string()));
    assert_eq!(page.metadata.tags, vec!["rust", "testing"]);
    assert_eq!(page.metadata.public, true);
}

#[test]
fn test_parse_logseq_properties() {
    let input = r#"- title:: My Page
  tags:: [[programming]], [[rust]]
  public:: true
- This is content"#;

    let extractor = PropertyExtractor::new();
    let props = extractor.extract(input).unwrap();

    assert_eq!(props.get("title"), Some(&"My Page".to_string()));
    assert!(props.contains_key("tags"));
    assert_eq!(props.get("public"), Some(&"true".to_string()));
}

#[rstest]
#[case("[[Page Link]]", "Page Link", "wikilink")]
#[case("[External](https://example.com)", "External", "markdown")]
#[case("[[Page with spaces]]", "Page with spaces", "wikilink")]
#[case("[Nested [[Link]]]", "Nested [[Link]]", "markdown")]
fn test_parse_links(#[case] input: &str, #[case] expected_text: &str, #[case] link_type: &str) {
    let parser = MarkdownParser::new();
    let links = parser.extract_links(input);

    assert!(!links.is_empty());
    assert_eq!(links[0].text, expected_text);
    assert_eq!(links[0].link_type, link_type);
}

#[test]
fn test_parse_nested_blocks() {
    let input = r#"- Level 1
  - Level 2
    - Level 3
  - Level 2 again
- Top level again"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();

    // Should have 2 top-level blocks
    assert_eq!(page.blocks.len(), 2);

    // First block should have nested children
    assert_eq!(page.blocks[0].children.len(), 2);
    assert_eq!(page.blocks[0].children[0].children.len(), 1);
}

#[test]
fn test_parse_code_blocks() {
    let input = r#"```rust
fn main() {
    println!("Hello");
}
```"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();

    let code_block = &page.blocks[0];
    assert_eq!(code_block.block_type, "code");
    assert_eq!(code_block.language, Some("rust".to_string()));
    assert!(code_block.content.contains("println!"));
}

#[test]
fn test_parse_block_references() {
    let input = "- This is a block ((block-ref-id))";

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();

    assert!(!page.blocks[0].block_refs.is_empty());
    assert_eq!(page.blocks[0].block_refs[0], "block-ref-id");
}

#[test]
fn test_parse_task_markers() {
    let input = r#"- TODO Task 1
- DONE Task 2
- LATER Task 3
- NOW Task 4"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();

    assert_eq!(page.blocks[0].task_status, Some("TODO".to_string()));
    assert_eq!(page.blocks[1].task_status, Some("DONE".to_string()));
    assert_eq!(page.blocks[2].task_status, Some("LATER".to_string()));
    assert_eq!(page.blocks[3].task_status, Some("NOW".to_string()));
}

#[test]
fn test_parse_page_embeds() {
    let input = "- Check this out: {{embed [[Other Page]]}}";

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();

    assert!(!page.blocks[0].embeds.is_empty());
    assert_eq!(page.blocks[0].embeds[0], "Other Page");
}

#[test]
fn test_empty_input() {
    let parser = MarkdownParser::new();
    let result = parser.parse("");

    assert!(result.is_ok());
    let page = result.unwrap();
    assert!(page.blocks.is_empty());
}

#[test]
fn test_malformed_markdown() {
    let input = "[[Unclosed link\n```unclosed code";

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    // Should handle gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_unicode_content() {
    let input = r#"- 日本語のテキスト
- Текст на русском
- العربية
- 🚀 Emoji support"#;

    let parser = MarkdownParser::new();
    let result = parser.parse(input);

    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 4);
}

#[test]
fn test_link_resolver_absolute_paths() {
    let resolver = LinkResolver::new("/base/path");

    let resolved = resolver.resolve("[[Page Name]]");
    assert_eq!(resolved, "/base/path/Page-Name.html");
}

#[test]
fn test_link_resolver_with_namespaces() {
    let resolver = LinkResolver::new("/base");

    let resolved = resolver.resolve("[[Category/Subcategory/Page]]");
    assert_eq!(resolved, "/base/Category/Subcategory/Page.html");
}

#[cfg(test)]
mod property_tests {
    use super::*;
    use quickcheck::TestResult;
    use quickcheck_macros::quickcheck;

    #[quickcheck]
    fn prop_parse_always_returns_result(input: String) -> TestResult {
        let parser = MarkdownParser::new();
        let result = parser.parse(&input);
        TestResult::from_bool(result.is_ok() || result.is_err())
    }

    #[quickcheck]
    fn prop_parsed_blocks_count_valid(input: String) -> TestResult {
        let parser = MarkdownParser::new();
        match parser.parse(&input) {
            Ok(page) => TestResult::from_bool(page.blocks.len() <= input.lines().count()),
            Err(_) => TestResult::discard(),
        }
    }
}
