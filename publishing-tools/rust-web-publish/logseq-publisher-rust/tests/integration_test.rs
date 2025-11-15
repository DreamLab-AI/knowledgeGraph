use logseq_publisher_rust::parser::*;
use logseq_publisher_rust::graph::*;
use logseq_publisher_rust::exporter::*;
use std::collections::HashMap;

#[test]
fn test_full_workflow() {
    // Parse a sample page
    let content = r#"---
title: My Page
tags: test, example
---
- First block with [[linked page]]
  - Nested block
- Second block with #tag
- Third block with **bold** text
"#;

    let page = parse_logseq_page(content, "my-page.md").unwrap();

    // Verify parsing
    assert_eq!(page.title, "my-page");
    assert_eq!(page.blocks.len(), 3);
    assert!(page.tags.contains(&"tag".to_string()));
    assert!(page.links.contains(&"linked page".to_string()));

    // Build graph
    let mut graph = Graph::new();
    graph.add_page(page.clone());

    // Verify graph
    assert_eq!(graph.page_count(), 1);
    let stats = graph.stats();
    assert_eq!(stats.page_count, 1);
    assert!(stats.total_blocks >= 3);

    // Export to HTML
    let config = ExportConfig {
        theme: "default".to_string(),
        include_backlinks: true,
        include_graph_view: false,
        custom_css: None,
    };

    let html = export_to_html(&graph, &config).unwrap();
    assert!(html.contains("<!DOCTYPE html>"));
    assert!(html.contains("Logseq"));
}

#[test]
fn test_graph_traversal() {
    let mut graph = Graph::new();

    // Create interconnected pages
    let page1 = Page {
        path: "page1.md".to_string(),
        title: "Page 1".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["page2.md".to_string(), "page3.md".to_string()],
        ontology: None,
    };

    let page2 = Page {
        path: "page2.md".to_string(),
        title: "Page 2".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["page3.md".to_string()],
        ontology: None,
    };

    let page3 = Page {
        path: "page3.md".to_string(),
        title: "Page 3".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page1);
    graph.add_page(page2);
    graph.add_page(page3);

    // Test traversal
    let visited = graph.traverse_from("page1.md", 10);
    assert!(visited.contains(&"page1.md".to_string()));
    assert!(visited.contains(&"page2.md".to_string()));
    assert!(visited.contains(&"page3.md".to_string()));

    // Test backlinks
    let backlinks = graph.get_backlinks("page3.md");
    assert_eq!(backlinks.len(), 2);
}

#[test]
fn test_complex_markdown_parsing() {
    let content = r#"- Block with [[link]] and #tag
  - Nested with **bold** and *italic*
    - Deep nested
- Another top-level
"#;

    let page = parse_logseq_page(content, "test.md").unwrap();

    assert_eq!(page.blocks.len(), 2);
    assert_eq!(page.blocks[0].children.len(), 1);
    assert_eq!(page.blocks[0].children[0].children.len(), 1);
}
