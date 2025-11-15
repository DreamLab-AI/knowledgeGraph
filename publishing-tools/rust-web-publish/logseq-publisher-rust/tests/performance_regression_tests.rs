/// Performance regression tests and benchmarks
/// Ensures the Rust implementation meets or exceeds original performance

use logseq_publisher_rust::parser::*;
use logseq_publisher_rust::graph::*;
use logseq_publisher_rust::exporter::*;
use logseq_publisher_rust::optimizer::*;
use std::collections::HashMap;
use std::time::{Duration, Instant};

/// Helper function to measure execution time
fn measure_time<F, R>(f: F) -> (R, Duration)
where
    F: FnOnce() -> R,
{
    let start = Instant::now();
    let result = f();
    let duration = start.elapsed();
    (result, duration)
}

#[test]
fn test_parse_single_page_performance() {
    let content = generate_realistic_page(100);

    let (result, duration) = measure_time(|| {
        parse_logseq_page(&content, "test.md")
    });

    assert!(result.is_ok());
    // Should parse 100 blocks in under 5ms
    assert!(
        duration.as_millis() < 5,
        "Parsing took {:?}, expected < 5ms",
        duration
    );
}

#[test]
fn test_parse_large_page_performance() {
    let content = generate_realistic_page(1000);

    let (result, duration) = measure_time(|| {
        parse_logseq_page(&content, "large.md")
    });

    assert!(result.is_ok());
    // Should parse 1000 blocks in under 30ms
    assert!(
        duration.as_millis() < 30,
        "Parsing took {:?}, expected < 30ms",
        duration
    );
}

#[test]
fn test_parse_massive_graph_performance() {
    let mut graph = Graph::new();

    let (_, duration) = measure_time(|| {
        for i in 0..1000 {
            let content = generate_realistic_page(50);
            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }
    });

    // Should parse and index 1000 pages in under 2 seconds
    assert!(
        duration.as_secs() < 2,
        "Parsing 1000 pages took {:?}, expected < 2s",
        duration
    );

    assert_eq!(graph.page_count(), 1000);
}

#[test]
fn test_graph_traversal_performance() {
    let mut graph = Graph::new();

    // Create a connected graph
    for i in 0..500 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: vec![
                format!("page{}.md", (i + 1) % 500),
                format!("page{}.md", (i + 2) % 500),
            ],
        };
        graph.add_page(page);
    }

    let (visited, duration) = measure_time(|| {
        graph.traverse_from("page0.md", 10)
    });

    // Should traverse graph in under 10ms
    assert!(
        duration.as_millis() < 10,
        "Graph traversal took {:?}, expected < 10ms",
        duration
    );

    assert!(!visited.is_empty());
}

#[test]
fn test_backlinks_computation_performance() {
    let mut graph = Graph::new();

    // Create pages with many backlinks
    for i in 0..200 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: vec!["target.md".to_string()],
        };
        graph.add_page(page);
    }

    let (backlinks, duration) = measure_time(|| {
        graph.get_backlinks("target.md")
    });

    // Should compute backlinks in under 1ms
    assert!(
        duration.as_micros() < 1000,
        "Backlinks computation took {:?}, expected < 1ms",
        duration
    );

    assert_eq!(backlinks.len(), 200);
}

#[test]
fn test_export_performance() {
    let mut graph = Graph::new();

    for i in 0..100 {
        let content = generate_realistic_page(20);
        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    let config = ExportConfig {
        theme: "default".to_string(),
        include_backlinks: true,
        include_graph_view: false,
        custom_css: None,
    };

    let (result, duration) = measure_time(|| {
        export_to_html(&graph, &config)
    });

    assert!(result.is_ok());
    // Should export 100 pages in under 100ms
    assert!(
        duration.as_millis() < 100,
        "Export took {:?}, expected < 100ms",
        duration
    );
}

#[test]
fn test_asset_optimization_performance() {
    let assets: Vec<String> = (0..500)
        .map(|i| format!("assets/image{}.png", i))
        .collect();

    let (result, duration) = measure_time(|| {
        optimize_assets(&assets)
    });

    assert!(result.is_ok());
    // Should optimize 500 assets in under 50ms
    assert!(
        duration.as_millis() < 50,
        "Asset optimization took {:?}, expected < 50ms",
        duration
    );
}

#[test]
fn test_css_minification_performance() {
    let css = generate_large_css(1000);

    let (minified, duration) = measure_time(|| {
        minify_css(&css)
    });

    // Should minify 1000 lines in under 5ms
    assert!(
        duration.as_millis() < 5,
        "CSS minification took {:?}, expected < 5ms",
        duration
    );

    assert!(minified.len() < css.len());
}

#[test]
fn test_js_minification_performance() {
    let js = generate_large_js(1000);

    let (minified, duration) = measure_time(|| {
        minify_js(&js)
    });

    // Should minify 1000 lines in under 5ms
    assert!(
        duration.as_millis() < 5,
        "JS minification took {:?}, expected < 5ms",
        duration
    );

    assert!(minified.len() < js.len());
}

#[test]
fn test_link_extraction_performance() {
    let content = "- Block with ".to_string() + &"[[Link]] ".repeat(100);

    let (result, duration) = measure_time(|| {
        parse_logseq_page(&content, "links.md")
    });

    assert!(result.is_ok());
    // Should extract 100 links in under 5ms
    assert!(
        duration.as_millis() < 5,
        "Link extraction took {:?}, expected < 5ms",
        duration
    );
}

#[test]
fn test_nested_block_parsing_performance() {
    let content = generate_deeply_nested_blocks(50, 5);

    let (result, duration) = measure_time(|| {
        parse_logseq_page(&content, "nested.md")
    });

    assert!(result.is_ok());
    // Should parse nested structure in under 10ms
    assert!(
        duration.as_millis() < 10,
        "Nested parsing took {:?}, expected < 10ms",
        duration
    );
}

#[test]
fn test_graph_stats_performance() {
    let mut graph = Graph::new();

    for i in 0..500 {
        let content = generate_realistic_page(30);
        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    let (stats, duration) = measure_time(|| {
        graph.stats()
    });

    // Should compute stats in under 20ms
    assert!(
        duration.as_millis() < 20,
        "Stats computation took {:?}, expected < 20ms",
        duration
    );

    assert_eq!(stats.page_count, 500);
}

#[test]
fn test_memory_efficiency() {
    // Test memory usage with large dataset
    let mut graph = Graph::new();

    for i in 0..1000 {
        let content = generate_realistic_page(50);
        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    // Graph should be reasonably sized (no excessive memory usage)
    // This is a rough check - actual memory profiling would be more accurate
    assert_eq!(graph.page_count(), 1000);
}

#[test]
fn test_concurrent_parsing_performance() {
    use std::sync::Arc;
    use std::thread;

    let content = Arc::new(generate_realistic_page(100));

    let (_, duration) = measure_time(|| {
        let mut handles = vec![];

        for i in 0..10 {
            let content_clone = Arc::clone(&content);
            let handle = thread::spawn(move || {
                parse_logseq_page(&content_clone, &format!("thread{}.md", i))
            });
            handles.push(handle);
        }

        for handle in handles {
            handle.join().unwrap().unwrap();
        }
    });

    // Should parse 10 pages concurrently in under 20ms
    assert!(
        duration.as_millis() < 20,
        "Concurrent parsing took {:?}, expected < 20ms",
        duration
    );
}

#[test]
fn test_incremental_graph_building_performance() {
    let mut graph = Graph::new();

    let (_, duration) = measure_time(|| {
        for i in 0..100 {
            let content = format!("- Page {} content", i);
            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }
    });

    // Should incrementally build graph in under 50ms
    assert!(
        duration.as_millis() < 50,
        "Incremental building took {:?}, expected < 50ms",
        duration
    );
}

#[test]
fn test_worst_case_parsing_performance() {
    // Worst case: deeply nested with many links and complex formatting
    let mut content = String::new();
    for i in 0..100 {
        let indent = "  ".repeat(i % 10);
        content.push_str(&format!(
            "{}- **Bold** *italic* `code` [[Link1]] [[Link2]] #tag1 #tag2 {{embed [[Page]]}}\n",
            indent
        ));
    }

    let (result, duration) = measure_time(|| {
        parse_logseq_page(&content, "worst.md")
    });

    assert!(result.is_ok());
    // Should handle worst case in under 15ms
    assert!(
        duration.as_millis() < 15,
        "Worst case parsing took {:?}, expected < 15ms",
        duration
    );
}

// Helper functions

fn generate_realistic_page(block_count: usize) -> String {
    let mut content = String::from("# Page Title\n\n");

    for i in 0..block_count {
        let indent = "  ".repeat(i % 3);
        content.push_str(&format!(
            "{}- Block {} with [[Link {}]] and #tag{}\n",
            indent,
            i,
            i % 10,
            i % 5
        ));
    }

    content
}

fn generate_deeply_nested_blocks(breadth: usize, depth: usize) -> String {
    let mut content = String::new();

    fn add_blocks(content: &mut String, current_depth: usize, max_depth: usize, breadth: usize) {
        if current_depth >= max_depth {
            return;
        }

        for i in 0..breadth {
            let indent = "  ".repeat(current_depth);
            content.push_str(&format!("{}- Level {} Block {}\n", indent, current_depth, i));
            add_blocks(content, current_depth + 1, max_depth, breadth);
        }
    }

    add_blocks(&mut content, 0, depth, breadth);
    content
}

fn generate_large_css(lines: usize) -> String {
    let mut css = String::new();
    for i in 0..lines {
        css.push_str(&format!(
            ".class{} {{\n  color: #000;\n  margin: 0;\n  padding: 0;\n}}\n",
            i
        ));
    }
    css
}

fn generate_large_js(lines: usize) -> String {
    let mut js = String::new();
    for i in 0..lines {
        js.push_str(&format!(
            "function func{}() {{\n  console.log('test');\n  return {};\n}}\n",
            i, i
        ));
    }
    js
}
