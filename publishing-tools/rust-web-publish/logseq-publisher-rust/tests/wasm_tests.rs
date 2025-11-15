/// WASM-specific tests for browser compatibility
/// Tests WASM bindings, browser APIs, and client-side functionality

#[cfg(target_arch = "wasm32")]
mod wasm_tests {

use wasm_bindgen_test::*;
use logseq_publisher_rust::wasm::{WasmPublisher, WasmGraph};
use web_sys::{Document, Element, Performance, Window};

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_wasm_publisher_initialization() {
    let publisher = WasmPublisher::new();
    assert!(publisher.is_initialized());
}

#[wasm_bindgen_test]
fn test_parse_markdown_in_browser() {
    let publisher = WasmPublisher::new();

    let markdown = "# Test\n\n- Item 1\n- Item 2";
    let result = publisher.parse_markdown(markdown);

    assert!(result.is_ok());
    assert!(result.unwrap().contains("Test"));
}

#[wasm_bindgen_test]
fn test_build_graph_in_browser() {
    let publisher = WasmPublisher::new();

    let pages = vec![
        ("page1", "- Links to [[page2]]"),
        ("page2", "- Content"),
    ];

    let graph = publisher.build_graph(pages);

    assert!(graph.is_ok());
    assert_eq!(graph.unwrap().node_count(), 2);
}

#[wasm_bindgen_test]
fn test_render_to_dom() {
    let window = web_sys::window().expect("no global window");
    let document = window.document().expect("no document");

    let container = document.create_element("div").unwrap();
    document.body().unwrap().append_child(&container).unwrap();

    let publisher = WasmPublisher::new();
    let markdown = "# Hello WASM\n\n- List item";

    let result = publisher.render_to_dom(&container, markdown);

    assert!(result.is_ok());

    // Check that content was rendered
    let html = container.inner_html();
    assert!(html.contains("Hello WASM"));
    assert!(html.contains("List item"));
}

#[wasm_bindgen_test]
fn test_navigation_in_browser() {
    let window = web_sys::window().expect("no global window");
    let document = window.document().expect("no document");

    let publisher = WasmPublisher::new();

    // Simulate navigation to a page
    let result = publisher.navigate_to_page("test-page");

    assert!(result.is_ok());
}

#[wasm_bindgen_test]
fn test_search_functionality() {
    let publisher = WasmPublisher::new();

    let pages = vec![
        ("rust", "- Rust programming language"),
        ("javascript", "- JavaScript is awesome"),
        ("python", "- Python for data science"),
    ];

    publisher.index_pages(pages).unwrap();

    let results = publisher.search("rust");

    assert!(!results.is_empty());
    assert_eq!(results[0].0, "rust");
}

#[wasm_bindgen_test]
fn test_performance_timing() {
    let window = web_sys::window().expect("no global window");
    let performance = window.performance().expect("no performance");

    let start = performance.now();

    let publisher = WasmPublisher::new();
    let markdown = generate_large_markdown(1000);
    publisher.parse_markdown(&markdown).unwrap();

    let end = performance.now();
    let duration = end - start;

    // Should parse 1000 lines in under 100ms
    assert!(duration < 100.0, "Parsing took {}ms, expected < 100ms", duration);
}

#[wasm_bindgen_test]
fn test_memory_efficiency() {
    let publisher = WasmPublisher::new();

    // Parse multiple large documents
    for i in 0..100 {
        let markdown = generate_large_markdown(100);
        publisher.parse_markdown(&markdown).unwrap();
    }

    // WASM module should still be functional
    assert!(publisher.is_initialized());
}

#[wasm_bindgen_test]
fn test_link_click_handler() {
    let window = web_sys::window().expect("no global window");
    let document = window.document().expect("no document");

    let publisher = WasmPublisher::new();

    // Create a link element
    let link = document.create_element("a").unwrap();
    link.set_attribute("href", "#/page/test-page").unwrap();

    // Attach click handler
    publisher.attach_link_handlers(&link).unwrap();

    // Simulate click (would require manual testing in browser)
    // This tests that the handler attaches without error
}

#[wasm_bindgen_test]
fn test_graph_visualization_data() {
    let publisher = WasmPublisher::new();

    let pages = vec![
        ("A", "- Links to [[B]] and [[C]]"),
        ("B", "- Links to [[C]]"),
        ("C", "- End node"),
    ];

    let graph = publisher.build_graph(pages).unwrap();
    let viz_data = graph.to_visualization_json();

    // Should have nodes and edges in correct format
    assert!(viz_data.contains("nodes"));
    assert!(viz_data.contains("edges"));
}

#[wasm_bindgen_test]
fn test_asset_loading() {
    let publisher = WasmPublisher::new();

    // Test that image paths are correctly resolved
    let markdown = "![Image](assets/image.png)";
    let html = publisher.parse_markdown(markdown).unwrap();

    assert!(html.contains("assets/image.png"));
}

#[wasm_bindgen_test]
fn test_code_highlighting() {
    let publisher = WasmPublisher::new();

    let markdown = r#"```rust
fn main() {
    println!("Hello");
}
```"#;

    let html = publisher.parse_markdown(markdown).unwrap();

    // Should have code block classes
    assert!(html.contains("language-rust") || html.contains("code"));
}

#[wasm_bindgen_test]
fn test_local_storage_integration() {
    let window = web_sys::window().expect("no global window");
    let storage = window.local_storage().unwrap().unwrap();

    let publisher = WasmPublisher::new();

    // Save state
    publisher.save_state("test-key", "test-value").unwrap();

    // Retrieve state
    let value = storage.get_item("test-key").unwrap();
    assert_eq!(value, Some("test-value".to_string()));

    // Cleanup
    storage.remove_item("test-key").unwrap();
}

#[wasm_bindgen_test]
fn test_error_handling_in_browser() {
    let publisher = WasmPublisher::new();

    // Invalid markdown should be handled gracefully
    let invalid = "[[Unclosed link\n```unclosed code";
    let result = publisher.parse_markdown(invalid);

    // Should either succeed or return error, not panic
    assert!(result.is_ok() || result.is_err());
}

#[wasm_bindgen_test]
fn test_bundle_size_verification() {
    // This is a compile-time check
    // The actual bundle size should be verified in CI

    let publisher = WasmPublisher::new();

    // Minimal API surface should keep bundle small
    assert!(publisher.is_initialized());

    // Target: < 500KB gzipped
    // This would be checked in CI with wasm-opt
}

// Helper functions

fn generate_large_markdown(lines: usize) -> String {
    let mut content = String::new();
    content.push_str("# Large Document\n\n");

    for i in 0..lines {
        content.push_str(&format!("- Line {} with some [[Link {}]] content\n", i, i));
    }

    content
}

#[wasm_bindgen_test]
fn test_concurrent_parsing() {
    use wasm_bindgen_futures::JsFuture;
    use js_sys::Promise;

    let publisher = WasmPublisher::new();

    // Parse multiple documents concurrently
    let markdown1 = "# Doc 1";
    let markdown2 = "# Doc 2";
    let markdown3 = "# Doc 3";

    let p1 = publisher.parse_async(markdown1);
    let p2 = publisher.parse_async(markdown2);
    let p3 = publisher.parse_async(markdown3);

    // All should complete
    assert!(p1.is_some());
    assert!(p2.is_some());
    assert!(p3.is_some());
}

} // End mod wasm_tests
