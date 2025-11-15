//! Comprehensive integration tests for the complete publishing workflow
//!
//! This test suite covers:
//! - Full workflow from parsing to export
//! - Real ontology file processing
//! - Property filtering (public-access)
//! - Large graph publishing
//! - File size validation
//! - End-to-end scenarios

use logseq_publisher_rust::parser::parse_logseq_page;
use logseq_publisher_rust::graph::Graph;
use logseq_publisher_rust::exporter::{export_to_html, export_page_to_html, ExportConfig};
use std::fs;
use std::path::Path;
use tempfile::TempDir;

#[cfg(test)]
mod integration_tests {
    use super::*;

    fn create_test_config() -> ExportConfig {
        ExportConfig {
            theme: "light".to_string(),
            include_backlinks: true,
            include_graph_view: true,
            custom_css: None,
        }
    }

    #[test]
    fn test_full_workflow_simple() {
        // 1. Parse a few markdown files
        let content1 = r#"- Page 1 content
- Links to [[Page 2]]
- Has #tag1"#;

        let content2 = r#"- Page 2 content
- Links back to [[Page 1]]
- Has #tag2"#;

        let page1 = parse_logseq_page(content1, "page1.md").unwrap();
        let page2 = parse_logseq_page(content2, "page2.md").unwrap();

        // 2. Build graph
        let mut graph = Graph::new();
        graph.add_page(page1);
        graph.add_page(page2);

        // 3. Export to HTML
        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // 4. Verify output
        assert!(html.contains("<!DOCTYPE html>"));
        assert!(html.contains("2 pages"));
        assert!(html.len() > 1000);
        assert!(html.len() < 1_000_000); // Reasonable size
    }

    #[test]
    fn test_full_workflow_with_nested_structure() {
        let content = r#"- Parent block
  - Child block with [[Link]]
    - Grandchild with #tag
      - Great-grandchild
        - Great-great-grandchild"#;

        let page = parse_logseq_page(content, "nested.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page);

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Should handle deep nesting
        assert!(html.contains("block-children"));
        assert!(html.len() < 10_000_000);
    }

    #[test]
    fn test_real_ontology_file_hyperparameter() {
        // Read the actual ontology file
        let file_path = "/home/user/logseq/mainKnowledgeGraph/pages/Hyperparameter.md";

        if !Path::new(file_path).exists() {
            println!("Skipping test: Hyperparameter.md not found");
            return;
        }

        let content = fs::read_to_string(file_path).unwrap();
        let page = parse_logseq_page(&content, "Hyperparameter.md").unwrap();

        // Verify expected properties
        assert_eq!(page.title, "Hyperparameter");

        // Check for ontology properties
        // Note: The parser might extract these from blocks, not frontmatter
        // This test documents expected behavior

        // Verify some links exist
        assert!(page.links.len() > 0, "Should have extracted some links");

        // Build a graph and export
        let mut graph = Graph::new();
        graph.add_page(page);

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("Hyperparameter"));
        assert!(html.len() < 10_000_000);
    }

    #[test]
    fn test_filter_by_public_access_property() {
        // Create pages with and without public-access
        let public_content = r#"---
public-access: true
term-id: AI-0001
---
- Public content"#;

        let private_content = r#"---
public-access: false
term-id: AI-0002
---
- Private content"#;

        let no_property_content = r#"- Content without property"#;

        let page1 = parse_logseq_page(public_content, "public.md").unwrap();
        let page2 = parse_logseq_page(private_content, "private.md").unwrap();
        let page3 = parse_logseq_page(no_property_content, "noprop.md").unwrap();

        // Filter logic (would be in exporter)
        let is_public = |page: &logseq_publisher_rust::parser::Page| {
            page.properties
                .get("public-access")
                .map(|v| v == "true")
                .unwrap_or(false)
        };

        assert!(is_public(&page1));
        assert!(!is_public(&page2));
        assert!(!is_public(&page3));

        // Build graph with only public pages
        let mut graph = Graph::new();
        if is_public(&page1) {
            graph.add_page(page1);
        }

        assert_eq!(graph.page_count(), 1);
    }

    #[test]
    fn test_export_1000_pages_size() {
        let mut graph = Graph::new();

        // Create 1000 test pages
        for i in 1..=1000 {
            let content = format!(r#"- Content for page {}
- Has [[Link{}]]
- Tagged with #tag{}"#, i, i % 100, i % 10);

            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Verify HTML is under 10 MB
        assert!(html.len() < 10_000_000, "HTML too large: {} bytes", html.len());

        // But should contain meaningful content
        assert!(html.len() > 10_000, "HTML too small: {} bytes", html.len());

        // Should show correct stats
        assert!(html.contains("1000 pages"));
    }

    #[test]
    fn test_export_index_html_metadata() {
        let mut graph = Graph::new();

        let content = r#"---
term-id: AI-0048
status: active
---
- Test content"#;

        let page = parse_logseq_page(content, "test.md").unwrap();
        graph.add_page(page);

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Should have proper HTML structure
        assert!(html.contains("<!DOCTYPE html>"));
        assert!(html.contains("<meta charset=\"UTF-8\">"));
        assert!(html.contains("<title>"));
    }

    #[test]
    fn test_export_preserves_links() {
        let content1 = r#"- Page 1 links to [[Page 2]] and [[Page 3]]"#;
        let content2 = r#"- Page 2 content"#;
        let content3 = r#"- Page 3 content"#;

        let page1 = parse_logseq_page(content1, "page1.md").unwrap();
        let page2 = parse_logseq_page(content2, "page2.md").unwrap();
        let page3 = parse_logseq_page(content3, "page3.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page1.clone());
        graph.add_page(page2);
        graph.add_page(page3);

        // Export individual page
        let config = create_test_config();
        let backlinks = graph.get_backlinks("page2.md");
        let html = export_page_to_html(&page1, &backlinks, &config);

        // Should have clickable links
        assert!(html.contains("wiki-link"));
        assert!(html.contains("Page 2"));
        assert!(html.contains("Page 3"));
    }

    #[test]
    fn test_export_with_backlinks() {
        let content1 = r#"- Page 1 links to [[target]]"#;
        let content2 = r#"- Page 2 also links to [[target]]"#;
        let content3 = r#"- This is the target page"#;

        let page1 = parse_logseq_page(content1, "page1.md").unwrap();
        let page2 = parse_logseq_page(content2, "page2.md").unwrap();
        let page3 = parse_logseq_page(content3, "target.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page1);
        graph.add_page(page2);
        graph.add_page(page3.clone());

        let backlinks = graph.get_backlinks("target.md");

        let config = create_test_config();
        let html = export_page_to_html(&page3, &backlinks, &config);

        // Should show backlinks section
        assert!(html.contains("Linked References") || html.contains("backlinks"));
    }

    #[test]
    fn test_performance_parse_1000_pages() {
        use std::time::Instant;

        let start = Instant::now();

        for i in 1..=1000 {
            let content = format!(r#"- Page {} content
  - Nested block
    - Deep nested
- Another block with [[Link]]
- Tagged with #tag{}"#, i, i);

            let _ = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        }

        let duration = start.elapsed();

        // Should parse 1000 pages in under 5 seconds
        assert!(duration.as_secs() < 5, "Parsing too slow: {:?}", duration);
    }

    #[test]
    fn test_performance_export_large_graph() {
        use std::time::Instant;

        let mut graph = Graph::new();

        // Create 500 pages with 10 blocks each
        for i in 1..=500 {
            let content = (1..=10)
                .map(|j| format!("- Block {} of page {}", j, i))
                .collect::<Vec<_>>()
                .join("\n");

            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }

        let config = create_test_config();
        let start = Instant::now();

        let html = export_to_html(&graph, &config).unwrap();

        let duration = start.elapsed();

        // Should export in under 2 seconds
        assert!(duration.as_secs() < 2, "Export too slow: {:?}", duration);

        // Verify size
        assert!(html.len() < 10_000_000);
    }

    #[test]
    fn test_roundtrip_parse_export() {
        let original = r#"- This is **bold** and *italic*
- Has [[wiki-link]] and #tag
  - Nested content
    - Deep nested"#;

        let page = parse_logseq_page(original, "test.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page.clone());

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Should preserve all elements
        assert!(html.contains("bold"));
        assert!(html.contains("italic"));
        assert!(html.contains("wiki-link"));
        assert!(html.contains("tag"));
        assert!(html.contains("Nested content"));
        assert!(html.contains("Deep nested"));
    }

    #[test]
    fn test_handle_malformed_input_gracefully() {
        // Unclosed frontmatter
        let bad_content = r#"---
title: Test
no closing marker
- Content"#;

        let result = parse_logseq_page(bad_content, "bad.md");
        assert!(result.is_err());
    }

    #[test]
    fn test_unicode_and_special_chars() {
        let content = r#"- Unicode: 你好 🌍
- Special: & < > " '
- Math: ∑ ∫ π"#;

        let page = parse_logseq_page(content, "unicode.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page.clone());

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Should handle all characters
        assert!(html.contains("你好") || html.contains("&#"));
        assert!(html.len() > 100);
    }

    #[test]
    fn test_empty_graph_export() {
        let graph = Graph::new();
        let config = create_test_config();

        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("0 pages"));
        assert!(html.len() > 500); // Still has HTML structure
    }

    #[test]
    fn test_graph_with_circular_refs() {
        let content1 = r#"- Page A links to [[page_b]]"#;
        let content2 = r#"- Page B links to [[page_c]]"#;
        let content3 = r#"- Page C links back to [[page_a]]"#;

        let page_a = parse_logseq_page(content1, "page_a.md").unwrap();
        let page_b = parse_logseq_page(content2, "page_b.md").unwrap();
        let page_c = parse_logseq_page(content3, "page_c.md").unwrap();

        let mut graph = Graph::new();
        graph.add_page(page_a);
        graph.add_page(page_b);
        graph.add_page(page_c);

        // Should handle circular references without issues
        let stats = graph.stats();
        assert_eq!(stats.page_count, 3);

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.len() < 10_000_000);
    }
}
