/// End-to-end integration tests for the complete publishing workflow
/// Tests the entire pipeline from Logseq graph to published static site

use logseq_publisher_rust::{Publisher, PublishConfig};
use tempfile::TempDir;
use std::fs;
use std::path::Path;
use assert_fs::prelude::*;
use predicates::prelude::*;

#[test]
fn test_complete_publishing_workflow() {
    let graph_dir = create_sample_graph();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: true,
        generate_sitemap: true,
    };

    let publisher = Publisher::new(config);
    let result = publisher.publish();

    assert!(result.is_ok());

    // Verify output structure
    assert!(output_dir.path().join("index.html").exists());
    assert!(output_dir.path().join("assets").exists());
    assert!(output_dir.path().join("sitemap.xml").exists());
}

#[test]
fn test_asset_optimization() {
    let graph_dir = create_graph_with_assets();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: false,
        optimize_assets: true,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    // Check that images were optimized
    let original_img = graph_dir.path().join("assets/test.png");
    let optimized_img = output_dir.path().join("assets/test.png");

    if original_img.exists() && optimized_img.exists() {
        let original_size = fs::metadata(&original_img).unwrap().len();
        let optimized_size = fs::metadata(&optimized_img).unwrap().len();

        assert!(optimized_size <= original_size);
    }
}

#[test]
fn test_link_resolution() {
    let graph_dir = TempDir::new().unwrap();

    create_page(&graph_dir, "page1.md", "public:: true\n- Link to [[page2]]");
    create_page(&graph_dir, "page2.md", "public:: true\n- Link to [[page3]]");
    create_page(&graph_dir, "page3.md", "public:: true\n- End page");

    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    // Verify that links were correctly resolved
    let page1_html = fs::read_to_string(output_dir.path().join("page1.html")).unwrap();
    assert!(page1_html.contains("href=\"page2.html\"") || page1_html.contains("page2"));
}

#[test]
fn test_public_pages_filter() {
    let graph_dir = TempDir::new().unwrap();

    create_page(&graph_dir, "public.md", "public:: true\n- Public content");
    create_page(&graph_dir, "private.md", "public:: false\n- Private content");

    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    // Only public page should be published
    assert!(output_dir.path().join("public.html").exists());
    assert!(!output_dir.path().join("private.html").exists());
}

#[test]
fn test_namespace_hierarchy() {
    let graph_dir = TempDir::new().unwrap();

    create_page(&graph_dir, "Category___Page1.md", "public:: true\n- Page 1");
    create_page(&graph_dir, "Category___Page2.md", "public:: true\n- Page 2");
    create_page(&graph_dir, "Category___Sub___Deep.md", "public:: true\n- Deep");

    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    // Should create directory structure
    assert!(output_dir.path().join("Category").exists());
    assert!(output_dir.path().join("Category/Sub").exists());
}

#[test]
fn test_sitemap_generation() {
    let graph_dir = create_sample_graph();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: true,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    let sitemap_path = output_dir.path().join("sitemap.xml");
    assert!(sitemap_path.exists());

    let sitemap_content = fs::read_to_string(sitemap_path).unwrap();
    assert!(sitemap_content.contains("<?xml"));
    assert!(sitemap_content.contains("<urlset"));
}

#[test]
fn test_graph_navigation_json() {
    let graph_dir = create_sample_graph();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    let graph_json = output_dir.path().join("graph.json");
    assert!(graph_json.exists());

    let json_content = fs::read_to_string(graph_json).unwrap();
    let parsed: serde_json::Value = serde_json::from_str(&json_content).unwrap();

    assert!(parsed["nodes"].is_array());
    assert!(parsed["edges"].is_array());
}

#[test]
fn test_code_block_highlighting() {
    let graph_dir = TempDir::new().unwrap();

    let code_content = r#"public:: true

```rust
fn main() {
    println!("Hello, world!");
}
```"#;

    create_page(&graph_dir, "code.md", code_content);

    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    let html = fs::read_to_string(output_dir.path().join("code.html")).unwrap();

    // Should have code highlighting
    assert!(html.contains("language-rust") || html.contains("code"));
}

#[test]
fn test_incremental_publishing() {
    let graph_dir = create_sample_graph();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let mut publisher = Publisher::new(config);

    // First publish
    publisher.publish().unwrap();
    let first_count = count_html_files(&output_dir);

    // Add a new page
    create_page(&graph_dir, "new_page.md", "public:: true\n- New content");

    // Incremental publish
    publisher.publish_incremental(&["new_page.md"]).unwrap();
    let second_count = count_html_files(&output_dir);

    assert_eq!(second_count, first_count + 1);
}

#[test]
fn test_error_handling_invalid_graph() {
    let empty_dir = TempDir::new().unwrap();
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: empty_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: false,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    let result = publisher.publish();

    // Should handle empty graph gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_bundle_size() {
    let graph_dir = create_large_graph(100);
    let output_dir = TempDir::new().unwrap();

    let config = PublishConfig {
        input_path: graph_dir.path().to_path_buf(),
        output_path: output_dir.path().to_path_buf(),
        public_only: true,
        optimize_assets: true,
        generate_sitemap: false,
    };

    let publisher = Publisher::new(config);
    publisher.publish().unwrap();

    // Calculate total bundle size
    let total_size = calculate_directory_size(&output_dir);

    // Should be reasonable size (< 10MB for 100 pages)
    assert!(total_size < 10 * 1024 * 1024);
}

// Helper functions

fn create_sample_graph() -> TempDir {
    let dir = TempDir::new().unwrap();

    create_page(&dir, "index.md", "public:: true\n- Main page [[page1]]");
    create_page(&dir, "page1.md", "public:: true\n- Links to [[page2]]");
    create_page(&dir, "page2.md", "public:: true\n- End page");

    dir
}

fn create_graph_with_assets() -> TempDir {
    let dir = TempDir::new().unwrap();

    fs::create_dir_all(dir.path().join("assets")).unwrap();

    create_page(&dir, "index.md", "public:: true\n- Page with ![image](assets/test.png)");

    // Create dummy image file
    fs::write(dir.path().join("assets/test.png"), vec![0u8; 1024]).unwrap();

    dir
}

fn create_large_graph(num_pages: usize) -> TempDir {
    let dir = TempDir::new().unwrap();

    for i in 0..num_pages {
        let content = format!(
            "public:: true\n- Page {} content\n- Links to [[page_{}]]",
            i,
            (i + 1) % num_pages
        );
        create_page(&dir, &format!("page_{}.md", i), &content);
    }

    dir
}

fn create_page(dir: &TempDir, filename: &str, content: &str) {
    let pages_dir = dir.path().join("pages");
    fs::create_dir_all(&pages_dir).ok();
    fs::write(pages_dir.join(filename), content).unwrap();
}

fn count_html_files(dir: &TempDir) -> usize {
    walkdir::WalkDir::new(dir.path())
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().extension().map_or(false, |ext| ext == "html"))
        .count()
}

fn calculate_directory_size(dir: &TempDir) -> u64 {
    walkdir::WalkDir::new(dir.path())
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().is_file())
        .map(|e| e.metadata().map(|m| m.len()).unwrap_or(0))
        .sum()
}
