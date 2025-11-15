//! Comprehensive performance benchmarks for Logseq Publisher
//!
//! This benchmark suite measures performance across:
//! - Parsing individual pages
//! - Parsing large batches of pages
//! - Graph construction
//! - HTML export
//! - Complete end-to-end workflows
//!
//! Run with: cargo bench

use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion, Throughput};
use logseq_publisher_rust::parser::{parse_logseq_page, Block};
use logseq_publisher_rust::graph::Graph;
use logseq_publisher_rust::exporter::{export_to_html, export_page_to_html, ExportConfig};
use std::collections::HashMap;

// Helper function to create test content
fn create_simple_page_content(index: usize) -> String {
    format!(
        r#"- Block 1 of page {}
- Block 2 with [[Link{}]]
- Block 3 with #tag{}"#,
        index,
        index % 100,
        index % 10
    )
}

fn create_nested_page_content(depth: usize) -> String {
    let mut content = String::from("- Level 0\n");
    for i in 1..=depth {
        let indent = "  ".repeat(i);
        content.push_str(&format!("{}- Level {}\n", indent, i));
    }
    content
}

fn create_complex_page_content(index: usize) -> String {
    format!(
        r#"---
term-id: AI-{:04}
public-access: true
status: active
---
- ## Heading for page {}
- Definition: This is a comprehensive definition with **bold** and *italic* text
- Contains multiple [[Link1]] and [[Link2]] and [[Link3]]
- Tagged with #tag1 #tag2 #tag3
  - Nested block with more content
    - Deep nested block
      - Very deep block
- Another top-level block
  - With child
- Code example:
  ```rust
  fn example() {{
      println!("Hello");
  }}
  ```
- Conclusion paragraph with more text"#,
        index, index
    )
}

fn create_test_config() -> ExportConfig {
    ExportConfig {
        theme: "light".to_string(),
        include_backlinks: true,
        include_graph_view: true,
        custom_css: None,
    }
}

// Benchmark: Parse a simple page
fn bench_parse_simple_page(c: &mut Criterion) {
    let content = create_simple_page_content(1);

    c.bench_function("parse_simple_page", |b| {
        b.iter(|| {
            parse_logseq_page(black_box(&content), black_box("test.md"))
        })
    });
}

// Benchmark: Parse a page with nested blocks
fn bench_parse_nested_page(c: &mut Criterion) {
    let mut group = c.benchmark_group("parse_nested_page");

    for depth in [5, 10, 20].iter() {
        let content = create_nested_page_content(*depth);

        group.bench_with_input(BenchmarkId::from_parameter(depth), depth, |b, _| {
            b.iter(|| {
                parse_logseq_page(black_box(&content), black_box("nested.md"))
            })
        });
    }

    group.finish();
}

// Benchmark: Parse a complex page with all features
fn bench_parse_complex_page(c: &mut Criterion) {
    let content = create_complex_page_content(1);

    c.bench_function("parse_complex_page", |b| {
        b.iter(|| {
            parse_logseq_page(black_box(&content), black_box("complex.md"))
        })
    });
}

// Benchmark: Parse multiple pages in batch
fn bench_parse_batch(c: &mut Criterion) {
    let mut group = c.benchmark_group("parse_batch");

    for size in [10, 100, 1000].iter() {
        group.throughput(Throughput::Elements(*size as u64));

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, &size| {
            let contents: Vec<_> = (0..size)
                .map(|i| create_simple_page_content(i))
                .collect();

            b.iter(|| {
                for (i, content) in contents.iter().enumerate() {
                    let _ = parse_logseq_page(black_box(content), black_box(&format!("page{}.md", i)));
                }
            })
        });
    }

    group.finish();
}

// Benchmark: Build a graph
fn bench_graph_construction(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_construction");

    for size in [10, 100, 1000].iter() {
        group.throughput(Throughput::Elements(*size as u64));

        let pages: Vec<_> = (0..size)
            .map(|i| {
                let content = create_simple_page_content(i);
                parse_logseq_page(&content, &format!("page{}.md", i)).unwrap()
            })
            .collect();

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, _| {
            b.iter(|| {
                let mut graph = Graph::new();
                for page in &pages {
                    graph.add_page(page.clone());
                }
                black_box(graph)
            })
        });
    }

    group.finish();
}

// Benchmark: Calculate graph statistics
fn bench_graph_stats(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_stats");

    for size in [100, 500, 1000].iter() {
        let mut graph = Graph::new();

        for i in 0..*size {
            let content = create_simple_page_content(i);
            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, _| {
            b.iter(|| {
                black_box(graph.stats())
            })
        });
    }

    group.finish();
}

// Benchmark: Export graph to HTML
fn bench_export_graph(c: &mut Criterion) {
    let mut group = c.benchmark_group("export_graph");

    for size in [10, 100, 500].iter() {
        let mut graph = Graph::new();

        for i in 0..*size {
            let content = create_simple_page_content(i);
            let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
            graph.add_page(page);
        }

        let config = create_test_config();

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, _| {
            b.iter(|| {
                black_box(export_to_html(&graph, &config).unwrap())
            })
        });
    }

    group.finish();
}

// Benchmark: Export individual page to HTML
fn bench_export_page(c: &mut Criterion) {
    let content = create_complex_page_content(1);
    let page = parse_logseq_page(&content, "test.md").unwrap();
    let config = create_test_config();
    let backlinks = vec!["page1.md".to_string(), "page2.md".to_string()];

    c.bench_function("export_page", |b| {
        b.iter(|| {
            black_box(export_page_to_html(
                black_box(&page),
                black_box(&backlinks),
                black_box(&config),
            ))
        })
    });
}

// Benchmark: Get backlinks
fn bench_get_backlinks(c: &mut Criterion) {
    let mut graph = Graph::new();

    // Create a graph where many pages link to a central page
    for i in 0..1000 {
        let content = format!("- Links to [[central]]");
        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    c.bench_function("get_backlinks", |b| {
        b.iter(|| {
            black_box(graph.get_backlinks(black_box("central")))
        })
    });
}

// Benchmark: Graph traversal
fn bench_graph_traversal(c: &mut Criterion) {
    let mut graph = Graph::new();

    // Create a linear chain: A -> B -> C -> ... -> Z
    for i in 0..26 {
        let next = if i < 25 {
            vec![format!("page{}.md", i + 1)]
        } else {
            vec![]
        };

        let mut content = format!("- Page {}", i);
        if !next.is_empty() {
            content.push_str(&format!("\n- Links to [[page{}]]", i + 1));
        }

        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    c.bench_function("graph_traversal", |b| {
        b.iter(|| {
            black_box(graph.traverse_from(black_box("page0.md"), black_box(100)))
        })
    });
}

// Benchmark: End-to-end workflow
fn bench_end_to_end(c: &mut Criterion) {
    let mut group = c.benchmark_group("end_to_end");
    group.sample_size(10); // Reduce sample size for expensive benchmark

    for size in [100, 500, 1000].iter() {
        group.throughput(Throughput::Elements(*size as u64));

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, &size| {
            b.iter(|| {
                // 1. Parse pages
                let mut graph = Graph::new();
                for i in 0..size {
                    let content = create_complex_page_content(i);
                    let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
                    graph.add_page(page);
                }

                // 2. Calculate stats
                let _ = graph.stats();

                // 3. Export to HTML
                let config = create_test_config();
                let html = export_to_html(&graph, &config).unwrap();

                black_box(html)
            })
        });
    }

    group.finish();
}

// Benchmark: Parse real ontology file
fn bench_parse_real_ontology(c: &mut Criterion) {
    use std::fs;
    use std::path::Path;

    let file_path = "/home/user/logseq/mainKnowledgeGraph/pages/Hyperparameter.md";

    if Path::new(file_path).exists() {
        let content = fs::read_to_string(file_path).unwrap();

        c.bench_function("parse_real_ontology", |b| {
            b.iter(|| {
                parse_logseq_page(black_box(&content), black_box("Hyperparameter.md"))
            })
        });
    }
}

// Benchmark: Concurrent parsing simulation
fn bench_concurrent_parsing(c: &mut Criterion) {
    let mut group = c.benchmark_group("concurrent_parsing");

    for size in [10, 50, 100].iter() {
        let contents: Vec<_> = (0..*size)
            .map(|i| create_complex_page_content(i))
            .collect();

        group.bench_with_input(BenchmarkId::from_parameter(size), size, |b, _| {
            b.iter(|| {
                // Simulate concurrent parsing (sequential for benchmark)
                let results: Vec<_> = contents
                    .iter()
                    .enumerate()
                    .map(|(i, content)| {
                        parse_logseq_page(content, &format!("page{}.md", i))
                    })
                    .collect();

                black_box(results)
            })
        });
    }

    group.finish();
}

// Benchmark: Memory-intensive operations
fn bench_large_page(c: &mut Criterion) {
    // Create a very large page with 1000 blocks
    let mut content = String::new();
    for i in 0..1000 {
        content.push_str(&format!("- Block {} with [[Link{}]] and #tag{}\n", i, i, i % 10));
    }

    c.bench_function("parse_large_page", |b| {
        b.iter(|| {
            parse_logseq_page(black_box(&content), black_box("large.md"))
        })
    });
}

criterion_group!(
    benches,
    bench_parse_simple_page,
    bench_parse_nested_page,
    bench_parse_complex_page,
    bench_parse_batch,
    bench_graph_construction,
    bench_graph_stats,
    bench_export_graph,
    bench_export_page,
    bench_get_backlinks,
    bench_graph_traversal,
    bench_end_to_end,
    bench_parse_real_ontology,
    bench_concurrent_parsing,
    bench_large_page,
);

criterion_main!(benches);
