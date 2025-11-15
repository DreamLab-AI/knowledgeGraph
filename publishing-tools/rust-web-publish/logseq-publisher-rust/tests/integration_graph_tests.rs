/// Integration tests for graph traversal and building
/// Tests the entire graph construction and traversal pipeline

use logseq_publisher_rust::graph::{GraphBuilder, PageGraph, GraphNode};
use logseq_publisher_rust::parser::MarkdownParser;
use tempfile::TempDir;
use std::fs;
use std::path::Path;
use pretty_assertions::assert_eq;

#[test]
fn test_build_simple_graph() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().expect("Failed to build graph");

    // Should have 3 pages
    assert_eq!(graph.node_count(), 3);

    // Should have links between pages
    assert!(graph.has_edge("page1", "page2"));
    assert!(graph.has_edge("page2", "page3"));
}

#[test]
fn test_graph_traversal_bfs() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let visited = graph.breadth_first_search("page1");

    // Should visit all connected pages
    assert!(visited.contains(&"page1".to_string()));
    assert!(visited.contains(&"page2".to_string()));
    assert!(visited.contains(&"page3".to_string()));
}

#[test]
fn test_graph_traversal_dfs() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let visited = graph.depth_first_search("page1");

    // DFS should also visit all pages
    assert_eq!(visited.len(), 3);
}

#[test]
fn test_detect_cycles() {
    let temp_dir = TempDir::new().unwrap();

    // Create circular references: A -> B -> C -> A
    create_page(&temp_dir, "page_a.md", "- Link to [[page_b]]");
    create_page(&temp_dir, "page_b.md", "- Link to [[page_c]]");
    create_page(&temp_dir, "page_c.md", "- Link to [[page_a]]");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let cycles = graph.detect_cycles();

    assert!(!cycles.is_empty(), "Should detect circular reference");
}

#[test]
fn test_find_orphan_pages() {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "connected.md", "- Link to [[other]]");
    create_page(&temp_dir, "other.md", "- Some content");
    create_page(&temp_dir, "orphan.md", "- No links here");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let orphans = graph.find_orphan_pages();

    assert_eq!(orphans.len(), 1);
    assert!(orphans.contains(&"orphan".to_string()));
}

#[test]
fn test_calculate_page_rank() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let page_ranks = graph.calculate_page_rank(0.85, 100);

    // All pages should have a rank
    assert_eq!(page_ranks.len(), 3);

    // Ranks should sum to approximately 1.0
    let sum: f64 = page_ranks.values().sum();
    assert!((sum - 1.0).abs() < 0.01);
}

#[test]
fn test_find_shortest_path() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let path = graph.find_shortest_path("page1", "page3");

    assert!(path.is_some());
    let path = path.unwrap();

    // Should be: page1 -> page2 -> page3
    assert_eq!(path.len(), 3);
    assert_eq!(path[0], "page1");
    assert_eq!(path[2], "page3");
}

#[test]
fn test_get_backlinks() {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "target.md", "- Target page");
    create_page(&temp_dir, "linker1.md", "- Link to [[target]]");
    create_page(&temp_dir, "linker2.md", "- Also links [[target]]");
    create_page(&temp_dir, "other.md", "- No link");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let backlinks = graph.get_backlinks("target");

    assert_eq!(backlinks.len(), 2);
    assert!(backlinks.contains(&"linker1".to_string()));
    assert!(backlinks.contains(&"linker2".to_string()));
}

#[test]
fn test_namespace_hierarchy() {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "Category___Page1.md", "- Page 1");
    create_page(&temp_dir, "Category___Page2.md", "- Page 2");
    create_page(&temp_dir, "Category___Sub___Deep.md", "- Deep page");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let namespace_pages = graph.get_namespace_pages("Category");

    assert_eq!(namespace_pages.len(), 3);
}

#[test]
fn test_incremental_graph_update() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let mut graph = builder.build().unwrap();

    // Add a new page
    create_page(&temp_dir, "page4.md", "- New page links to [[page1]]");

    graph.incremental_update(&["page4.md"]);

    assert_eq!(graph.node_count(), 4);
    assert!(graph.has_edge("page4", "page1"));
}

#[test]
fn test_graph_serialization() {
    let temp_dir = create_test_graph();

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let json = graph.to_json().expect("Failed to serialize");

    // Deserialize and verify
    let restored: PageGraph = serde_json::from_str(&json).expect("Failed to deserialize");

    assert_eq!(restored.node_count(), graph.node_count());
}

#[test]
fn test_filter_by_tags() {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "rust.md", "tags:: [[rust]]\n- Content");
    create_page(&temp_dir, "python.md", "tags:: [[python]]\n- Content");
    create_page(&temp_dir, "both.md", "tags:: [[rust]], [[python]]\n- Content");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let rust_pages = graph.filter_by_tag("rust");

    assert_eq!(rust_pages.len(), 2);
}

#[test]
fn test_public_pages_only() {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "public.md", "public:: true\n- Public content");
    create_page(&temp_dir, "private.md", "public:: false\n- Private content");
    create_page(&temp_dir, "default.md", "- Default visibility");

    let builder = GraphBuilder::new(temp_dir.path());
    let graph = builder.build().unwrap();

    let public_graph = graph.filter_public_only();

    // Only public pages should remain
    assert_eq!(public_graph.node_count(), 1);
}

// Helper functions

fn create_test_graph() -> TempDir {
    let temp_dir = TempDir::new().unwrap();

    create_page(&temp_dir, "page1.md", "- Page 1 links to [[page2]]");
    create_page(&temp_dir, "page2.md", "- Page 2 links to [[page3]]");
    create_page(&temp_dir, "page3.md", "- Page 3 content");

    temp_dir
}

fn create_page(dir: &TempDir, filename: &str, content: &str) {
    let path = dir.path().join(filename);
    fs::write(path, content).unwrap();
}
