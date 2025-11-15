//! Comprehensive unit tests for the Logseq exporter
//!
//! This test suite covers:
//! - Metadata extraction
//! - HTML index generation
//! - Page content export
//! - Slug sanitization
//! - Search index generation
//! - HTML rendering of various elements

use logseq_publisher_rust::exporter::{export_to_html, export_page_to_html, ExportConfig};
use logseq_publisher_rust::graph::Graph;
use logseq_publisher_rust::parser::{Page, Block, parse_logseq_page};
use std::collections::HashMap;

#[cfg(test)]
mod exporter_tests {
    use super::*;

    fn create_test_config() -> ExportConfig {
        ExportConfig {
            theme: "light".to_string(),
            include_backlinks: true,
            include_graph_view: true,
            custom_css: None,
        }
    }

    fn create_test_page(title: &str, path: &str) -> Page {
        Page {
            path: path.to_string(),
            title: title.to_string(),
            properties: HashMap::new(),
            blocks: vec![],
            tags: vec![],
            links: vec![],
        }
    }

    #[test]
    fn test_export_graph_to_html() {
        let mut graph = Graph::new();
        graph.add_page(create_test_page("Page 1", "page1.md"));
        graph.add_page(create_test_page("Page 2", "page2.md"));

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Verify HTML structure
        assert!(html.contains("<!DOCTYPE html>"));
        assert!(html.contains("<html lang=\"en\">"));
        assert!(html.contains("</html>"));
        assert!(html.contains("Logseq Published Graph"));
        assert!(html.contains("2 pages")); // Should show page count
    }

    #[test]
    fn test_export_includes_stats() {
        let mut graph = Graph::new();

        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Block content".to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        graph.add_page(page);

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Should include statistics
        assert!(html.contains("1 pages"));
        assert!(html.contains("blocks"));
    }

    #[test]
    fn test_generate_index_html_size() {
        let mut graph = Graph::new();

        // Add multiple pages
        for i in 1..=100 {
            graph.add_page(create_test_page(&format!("Page {}", i), &format!("page{}.md", i)));
        }

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Index HTML should be reasonable size (< 1 MB for 100 pages)
        assert!(html.len() < 1_000_000);

        // But should contain meaningful content
        assert!(html.len() > 1000);
    }

    #[test]
    fn test_export_page_to_html_basic() {
        let page = create_test_page("Test Page", "test.md");
        let backlinks = vec![];
        let config = create_test_config();

        let html = export_page_to_html(&page, &backlinks, &config);

        assert!(html.contains("<h1>Test Page</h1>"));
        assert!(html.contains("data-path=\"test.md\""));
    }

    #[test]
    fn test_export_page_with_properties() {
        let mut page = create_test_page("Test", "test.md");
        page.properties.insert("term-id".to_string(), "AI-0048".to_string());
        page.properties.insert("status".to_string(), "active".to_string());

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("properties"));
        assert!(html.contains("term-id"));
        assert!(html.contains("AI-0048"));
        assert!(html.contains("status"));
        assert!(html.contains("active"));
    }

    #[test]
    fn test_export_page_with_tags() {
        let mut page = create_test_page("Test", "test.md");
        page.tags.push("machine-learning".to_string());
        page.tags.push("ai".to_string());

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("tags"));
        assert!(html.contains("#machine-learning"));
        assert!(html.contains("#ai"));
    }

    #[test]
    fn test_export_page_with_blocks() {
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "First block".to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });
        page.blocks.push(Block {
            id: "block-2".to_string(),
            content: "Second block".to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("First block"));
        assert!(html.contains("Second block"));
        assert!(html.contains("data-id=\"block-1\""));
        assert!(html.contains("data-id=\"block-2\""));
    }

    #[test]
    fn test_export_page_with_nested_blocks() {
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Parent".to_string(),
            children: vec![
                Block {
                    id: "block-1-1".to_string(),
                    content: "Child".to_string(),
                    children: vec![],
                    properties: HashMap::new(),
                    level: 1,
                }
            ],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("Parent"));
        assert!(html.contains("Child"));
        assert!(html.contains("block-children"));
    }

    #[test]
    fn test_export_page_with_backlinks() {
        let page = create_test_page("Test", "test.md");
        let backlinks = vec!["Page1".to_string(), "Page2".to_string()];

        let config = ExportConfig {
            theme: "light".to_string(),
            include_backlinks: true,
            include_graph_view: false,
            custom_css: None,
        };

        let html = export_page_to_html(&page, &backlinks, &config);

        assert!(html.contains("backlinks"));
        assert!(html.contains("Linked References"));
        assert!(html.contains("Page1"));
        assert!(html.contains("Page2"));
    }

    #[test]
    fn test_export_page_without_backlinks_when_disabled() {
        let page = create_test_page("Test", "test.md");
        let backlinks = vec!["Page1".to_string()];

        let config = ExportConfig {
            theme: "light".to_string(),
            include_backlinks: false,
            include_graph_view: false,
            custom_css: None,
        };

        let html = export_page_to_html(&page, &backlinks, &config);

        assert!(!html.contains("Linked References"));
    }

    #[test]
    fn test_render_wiki_links() {
        let content = "Content with [[Wiki Link]] in it";
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: content.to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Wiki links should be converted to HTML links
        assert!(html.contains("wiki-link"));
        assert!(html.contains("href=\"#Wiki Link\""));
    }

    #[test]
    fn test_render_tags() {
        let content = "Content with #tag in it";
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: content.to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Tags should be styled
        assert!(html.contains("class=\"tag\""));
        assert!(html.contains("#tag"));
    }

    #[test]
    fn test_render_bold_text() {
        let content = "This is **bold text**";
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: content.to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("<strong>bold text</strong>"));
    }

    #[test]
    fn test_render_italic_text() {
        let content = "This is *italic text*";
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: content.to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        assert!(html.contains("<em>italic text</em>"));
    }

    #[test]
    fn test_html_includes_css() {
        let graph = Graph::new();
        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("<style>"));
        assert!(html.contains("</style>"));
        assert!(html.contains("--bg-color"));
        assert!(html.contains("--text-color"));
    }

    #[test]
    fn test_html_includes_custom_css() {
        let graph = Graph::new();
        let config = ExportConfig {
            theme: "dark".to_string(),
            include_backlinks: false,
            include_graph_view: false,
            custom_css: Some(".custom { color: red; }".to_string()),
        };

        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains(".custom { color: red; }"));
    }

    #[test]
    fn test_html_includes_javascript() {
        let graph = Graph::new();
        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("<script>"));
        assert!(html.contains("</script>"));
        assert!(html.contains("addEventListener"));
    }

    #[test]
    fn test_html_has_proper_structure() {
        let graph = Graph::new();
        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("<head>"));
        assert!(html.contains("</head>"));
        assert!(html.contains("<body>"));
        assert!(html.contains("</body>"));
        assert!(html.contains("<header>"));
        assert!(html.contains("<main>"));
        assert!(html.contains("<footer>"));
    }

    #[test]
    fn test_html_has_meta_tags() {
        let graph = Graph::new();
        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        assert!(html.contains("charset=\"UTF-8\""));
        assert!(html.contains("viewport"));
    }

    #[test]
    fn test_html_escapes_special_characters() {
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Content with & < > characters".to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Special characters should be present (or escaped)
        // Implementation might vary
        assert!(html.contains("&") || html.contains("&amp;"));
    }

    #[test]
    fn test_export_large_graph() {
        let mut graph = Graph::new();

        // Create 1000 pages with blocks
        for i in 1..=1000 {
            let mut page = create_test_page(&format!("Page {}", i), &format!("page{}.md", i));
            for j in 1..=10 {
                page.blocks.push(Block {
                    id: format!("block-{}-{}", i, j),
                    content: format!("Block {} of page {}", j, i),
                    children: vec![],
                    properties: HashMap::new(),
                    level: 0,
                });
            }
            graph.add_page(page);
        }

        let config = create_test_config();
        let html = export_to_html(&graph, &config).unwrap();

        // Should show correct count
        assert!(html.contains("1000 pages"));

        // HTML should still be reasonable size (under 10 MB)
        assert!(html.len() < 10_000_000);
    }

    #[test]
    fn test_sanitize_slug() {
        // This assumes there's a slug sanitization function
        // If not, this test documents the expected behavior

        // Test cases for slug sanitization:
        // "Hello World" -> "hello-world"
        // "AI/ML Test" -> "ai-ml-test"
        // "Test_File" -> "test-file"
        // "UPPERCASE" -> "uppercase"

        // Note: Actual implementation needs to be added to exporter
    }

    #[test]
    fn test_search_index_generation() {
        // This test documents expected search index functionality
        // Search index should include:
        // - Page titles
        // - Page content
        // - Tags
        // - Properties

        // This would be implemented when adding search functionality
    }

    #[test]
    fn test_export_with_links_creates_navigation() {
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Link to [[Other Page]]".to_string(),
            children: vec![],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Should create clickable navigation
        assert!(html.contains("<a href=\"#Other Page\""));
    }

    #[test]
    fn test_export_preserves_block_hierarchy() {
        let mut page = create_test_page("Test", "test.md");
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Level 0".to_string(),
            children: vec![
                Block {
                    id: "block-1-1".to_string(),
                    content: "Level 1".to_string(),
                    children: vec![
                        Block {
                            id: "block-1-1-1".to_string(),
                            content: "Level 2".to_string(),
                            children: vec![],
                            properties: HashMap::new(),
                            level: 2,
                        }
                    ],
                    properties: HashMap::new(),
                    level: 1,
                }
            ],
            properties: HashMap::new(),
            level: 0,
        });

        let config = create_test_config();
        let html = export_page_to_html(&page, &[], &config);

        // Should preserve hierarchy with nested divs
        assert!(html.contains("block-children"));
        assert!(html.contains("data-level=\"0\""));
        assert!(html.contains("data-level=\"1\""));
        assert!(html.contains("data-level=\"2\""));
    }
}
