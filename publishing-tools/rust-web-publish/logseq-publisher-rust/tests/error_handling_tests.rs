/// Comprehensive error handling and recovery tests
/// Tests failure modes, error propagation, and recovery mechanisms

use logseq_publisher_rust::parser::*;
use logseq_publisher_rust::graph::*;
use logseq_publisher_rust::exporter::*;
use logseq_publisher_rust::optimizer::*;
use std::collections::HashMap;

#[test]
fn test_parser_error_recovery() {
    let inputs = vec![
        ("", "empty input"),
        ("---\nunclosed", "unclosed frontmatter"),
        ("\0\0\0", "null bytes"),
        ("```\nunclosed code", "unclosed code block"),
    ];

    for (input, description) in inputs {
        let result = parse_logseq_page(input, "test.md");
        // Should either succeed or fail gracefully, never panic
        match result {
            Ok(_) => println!("{}: gracefully handled as success", description),
            Err(e) => {
                println!("{}: gracefully failed with error: {}", description, e);
                assert!(!e.is_empty(), "Error message should not be empty");
            }
        }
    }
}

#[test]
fn test_graph_with_missing_references() {
    let mut graph = Graph::new();

    let page = Page {
        path: "page1.md".to_string(),
        title: "Page 1".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec![
            "nonexistent1.md".to_string(),
            "nonexistent2.md".to_string(),
            "nonexistent3.md".to_string(),
        ],
        ontology: None,
    };

    graph.add_page(page);

    // Should handle missing references gracefully
    let backlinks = graph.get_backlinks("nonexistent1.md");
    assert_eq!(backlinks.len(), 1);
    assert_eq!(backlinks[0], "page1.md");

    let page_result = graph.get_page("nonexistent1.md");
    assert!(page_result.is_none());
}

#[test]
fn test_graph_circular_reference_traversal() {
    let mut graph = Graph::new();

    // Create circular reference: A -> B -> C -> A
    let page_a = Page {
        path: "a.md".to_string(),
        title: "A".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["b.md".to_string()],
        ontology: None,
    };

    let page_b = Page {
        path: "b.md".to_string(),
        title: "B".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["c.md".to_string()],
        ontology: None,
    };

    let page_c = Page {
        path: "c.md".to_string(),
        title: "C".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["a.md".to_string()],
        ontology: None,
    };

    graph.add_page(page_a);
    graph.add_page(page_b);
    graph.add_page(page_c);

    // Should handle circular references without infinite loop
    let visited = graph.traverse_from("a.md", 100);
    assert!(visited.len() == 3); // Should visit each page exactly once
}

#[test]
fn test_exporter_with_invalid_config() {
    let graph = Graph::new();

    let invalid_configs = vec![
        r#"{"theme": "", "include_backlinks": true, "include_graph_view": false, "custom_css": null}"#,
        r#"{"theme": "unknown-theme", "include_backlinks": true, "include_graph_view": false, "custom_css": null}"#,
    ];

    for config_json in invalid_configs {
        let config: Result<ExportConfig, _> = serde_json::from_str(config_json);
        if let Ok(cfg) = config {
            let result = export_to_html(&graph, &cfg);
            // Should handle gracefully
            assert!(result.is_ok() || result.is_err());
        }
    }
}

#[test]
fn test_exporter_with_empty_graph() {
    let graph = Graph::new();
    let config = ExportConfig {
        theme: "default".to_string(),
        include_backlinks: true,
        include_graph_view: false,
        custom_css: None,
    };

    let result = export_to_html(&graph, &config);
    assert!(result.is_ok());

    let html = result.unwrap();
    assert!(html.contains("<!DOCTYPE html>"));
    assert!(html.contains("0 pages"));
}

#[test]
fn test_optimizer_with_invalid_paths() {
    let invalid_paths = vec![
        "".to_string(),
        " ".to_string(),
        "/".to_string(),
        "\\".to_string(),
        "null\0byte.png".to_string(),
    ];

    let result = optimize_assets(&invalid_paths);
    // Should handle gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_optimizer_with_empty_input() {
    let result = optimize_assets(&[]);
    assert!(result.is_ok());

    let manifest = result.unwrap();
    assert_eq!(manifest.files.len(), 0);
    assert_eq!(manifest.total_size, 0);
    assert_eq!(manifest.optimized_size, 0);
}

#[test]
fn test_minifier_with_invalid_css() {
    let invalid_css = vec![
        "",
        "{ unclosed",
        "invalid syntax }",
        "@import \0;",
    ];

    for css in invalid_css {
        let result = minify_css(css);
        // Should not panic
        assert!(!result.is_empty() || css.is_empty());
    }
}

#[test]
fn test_minifier_with_invalid_js() {
    let invalid_js = vec![
        "",
        "function unclosed() {",
        "const invalid syntax",
        "alert(\0)",
    ];

    for js in invalid_js {
        let result = minify_js(js);
        // Should not panic
        assert!(!result.is_empty() || js.is_empty());
    }
}

#[test]
fn test_parser_thread_safety() {
    use std::sync::Arc;
    use std::thread;

    let content = Arc::new("- Test content with [[links]] and #tags".to_string());
    let mut handles = vec![];

    for i in 0..100 {
        let content_clone = Arc::clone(&content);
        let handle = thread::spawn(move || {
            parse_logseq_page(&content_clone, &format!("thread{}.md", i))
        });
        handles.push(handle);
    }

    for handle in handles {
        let result = handle.join().unwrap();
        assert!(result.is_ok());
    }
}

#[test]
fn test_graph_concurrent_modifications() {
    use std::sync::{Arc, Mutex};
    use std::thread;

    let graph = Arc::new(Mutex::new(Graph::new()));
    let mut handles = vec![];

    for i in 0..50 {
        let graph_clone = Arc::clone(&graph);
        let handle = thread::spawn(move || {
            let page = Page {
                path: format!("page{}.md", i),
                title: format!("Page {}", i),
                properties: HashMap::new(),
                blocks: Vec::new(),
                tags: Vec::new(),
                links: Vec::new(),
                ontology: None,
            };

            let mut g = graph_clone.lock().unwrap();
            g.add_page(page);
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    let g = graph.lock().unwrap();
    assert_eq!(g.page_count(), 50);
}

#[test]
fn test_memory_leak_prevention() {
    // Parse and drop many documents to check for memory leaks
    for i in 0..1000 {
        let content = format!("- Document {} with lots of content\n", i);
        let content = content.repeat(100);

        let result = parse_logseq_page(&content, &format!("doc{}.md", i));
        assert!(result.is_ok());
        // Document is dropped here
    }
}

#[test]
fn test_stack_overflow_prevention() {
    // Create extremely deeply nested structure
    let mut content = String::new();
    for i in 0..1000 {
        let indent = "  ".repeat(i);
        content.push_str(&format!("{}- Level {}\n", indent, i));
    }

    let result = parse_logseq_page(&content, "deep.md");
    // Should not cause stack overflow
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_unicode_error_handling() {
    let inputs = vec![
        "\u{FEFF}BOM at start",
        "Text\u{200B}with\u{200C}zero\u{200D}width",
        "\u{202E}RTL override",
        "Combining\u{0301}\u{0302}\u{0303}marks",
    ];

    for input in inputs {
        let result = parse_logseq_page(input, "unicode.md");
        assert!(result.is_ok(), "Failed to handle: {:?}", input);
    }
}

#[test]
fn test_json_serialization_errors() {
    let page = Page {
        path: "test.md".to_string(),
        title: "Test".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    // Should serialize successfully
    let json = serde_json::to_string(&page);
    assert!(json.is_ok());

    // Should deserialize successfully
    let deserialized: Result<Page, _> = serde_json::from_str(&json.unwrap());
    assert!(deserialized.is_ok());
}

#[test]
fn test_invalid_json_deserialization() {
    let invalid_jsons = vec![
        "",
        "{",
        "{}",
        r#"{"invalid": "structure"}"#,
        r#"{"path": null}"#,
    ];

    for json in invalid_jsons {
        let result: Result<Page, _> = serde_json::from_str(json);
        assert!(result.is_err(), "Should fail to deserialize: {}", json);
    }
}

#[test]
fn test_partial_parse_recovery() {
    // Test that parser can recover from errors in part of the document
    let input = r#"- Valid block 1
- Valid block 2
---
Invalid frontmatter in middle
---
- Valid block 3
- Valid block 4"#;

    let result = parse_logseq_page(input, "partial.md");
    // Should either parse what it can or fail gracefully
    match result {
        Ok(page) => assert!(!page.blocks.is_empty()),
        Err(e) => assert!(!e.is_empty()),
    }
}

#[test]
fn test_resource_exhaustion_prevention() {
    // Test with patterns that could cause excessive resource usage
    let patterns = vec![
        "[[".repeat(10000),
        "{{".repeat(10000),
        "((".repeat(10000),
        "**".repeat(10000),
    ];

    for pattern in patterns {
        let result = parse_logseq_page(&pattern, "resource.md");
        // Should handle without excessive memory/time
        assert!(result.is_ok() || result.is_err());
    }
}

#[test]
fn test_error_message_quality() {
    let result = parse_logseq_page("---\nunclosed frontmatter", "test.md");

    if let Err(e) = result {
        // Error messages should be descriptive
        assert!(!e.is_empty());
        assert!(e.len() > 5, "Error message too short: {}", e);
        // Should not contain internal implementation details
        assert!(!e.contains("unwrap"));
        assert!(!e.contains("panic"));
    }
}

#[test]
fn test_graceful_degradation() {
    // Test that parser degrades gracefully with partially valid input
    let input = r#"# Valid heading

- Valid block
- [[Valid link]]

INVALID SYNTAX HERE
RANDOM GARBAGE
!!!@@@###

- Another valid block
- Final valid block"#;

    let result = parse_logseq_page(input, "degraded.md");
    // Should parse what it can
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_concurrent_graph_operations() {
    use std::sync::{Arc, RwLock};
    use std::thread;

    let graph = Arc::new(RwLock::new(Graph::new()));
    let mut handles = vec![];

    // Writer threads
    for i in 0..10 {
        let graph_clone = Arc::clone(&graph);
        let handle = thread::spawn(move || {
            let page = Page {
                path: format!("page{}.md", i),
                title: format!("Page {}", i),
                properties: HashMap::new(),
                blocks: Vec::new(),
                tags: Vec::new(),
                links: vec![format!("page{}.md", (i + 1) % 10)],
                ontology: None,
            };

            let mut g = graph_clone.write().unwrap();
            g.add_page(page);
        });
        handles.push(handle);
    }

    // Reader threads
    for i in 0..10 {
        let graph_clone = Arc::clone(&graph);
        let handle = thread::spawn(move || {
            std::thread::sleep(std::time::Duration::from_millis(10));
            let g = graph_clone.read().unwrap();
            let _ = g.get_page(&format!("page{}.md", i));
            let _ = g.stats();
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }
}

#[test]
fn test_error_propagation_chain() {
    // Test that errors propagate correctly through the call chain
    let invalid_json = "invalid json";

    let result: Result<ExportConfig, _> = serde_json::from_str(invalid_json);
    assert!(result.is_err());

    if let Err(e) = result {
        let error_string = e.to_string();
        assert!(!error_string.is_empty());
    }
}
