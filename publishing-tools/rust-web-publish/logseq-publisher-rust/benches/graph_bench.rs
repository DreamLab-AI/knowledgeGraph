/// Performance benchmarks for graph operations
/// Measures graph building and traversal performance

use criterion::{black_box, criterion_group, criterion_main, Criterion, BenchmarkId, Throughput};
use logseq_publisher_rust::graph::{GraphBuilder, PageGraph};
use tempfile::TempDir;
use std::fs;

fn bench_graph_construction(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_construction");

    for size in [10, 50, 100, 500, 1000].iter() {
        let temp_dir = create_test_graph(*size);

        group.throughput(Throughput::Elements(*size as u64));
        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            &temp_dir,
            |b, dir| {
                b.iter(|| {
                    let builder = GraphBuilder::new(dir.path());
                    builder.build().unwrap()
                });
            },
        );
    }

    group.finish();
}

fn bench_graph_traversal(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_traversal");

    for size in [100, 500, 1000].iter() {
        let temp_dir = create_test_graph(*size);
        let builder = GraphBuilder::new(temp_dir.path());
        let graph = builder.build().unwrap();

        group.bench_with_input(
            BenchmarkId::new("bfs", size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.breadth_first_search(black_box("page_0"))
                });
            },
        );

        group.bench_with_input(
            BenchmarkId::new("dfs", size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.depth_first_search(black_box("page_0"))
                });
            },
        );
    }

    group.finish();
}

fn bench_pagerank(c: &mut Criterion) {
    let mut group = c.benchmark_group("pagerank");

    for size in [50, 100, 200].iter() {
        let temp_dir = create_test_graph(*size);
        let builder = GraphBuilder::new(temp_dir.path());
        let graph = builder.build().unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.calculate_page_rank(0.85, 100)
                });
            },
        );
    }

    group.finish();
}

fn bench_shortest_path(c: &mut Criterion) {
    let mut group = c.benchmark_group("shortest_path");

    for size in [100, 500, 1000].iter() {
        let temp_dir = create_test_graph(*size);
        let builder = GraphBuilder::new(temp_dir.path());
        let graph = builder.build().unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.find_shortest_path(
                        black_box("page_0"),
                        black_box(&format!("page_{}", size - 1))
                    )
                });
            },
        );
    }

    group.finish();
}

fn bench_backlink_computation(c: &mut Criterion) {
    let mut group = c.benchmark_group("backlinks");

    for size in [100, 500, 1000].iter() {
        let temp_dir = create_test_graph(*size);
        let builder = GraphBuilder::new(temp_dir.path());
        let graph = builder.build().unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.get_backlinks(black_box("page_50"))
                });
            },
        );
    }

    group.finish();
}

fn bench_incremental_update(c: &mut Criterion) {
    let mut group = c.benchmark_group("incremental_update");

    let temp_dir = create_test_graph(1000);
    let builder = GraphBuilder::new(temp_dir.path());
    let mut graph = builder.build().unwrap();

    group.bench_function("add_single_page", |b| {
        b.iter(|| {
            create_page(&temp_dir, "new_page.md", "- New content");
            graph.incremental_update(&["new_page.md"]);
        });
    });

    group.finish();
}

fn bench_serialization(c: &mut Criterion) {
    let mut group = c.benchmark_group("serialization");

    for size in [100, 500, 1000].iter() {
        let temp_dir = create_test_graph(*size);
        let builder = GraphBuilder::new(temp_dir.path());
        let graph = builder.build().unwrap();

        group.bench_with_input(
            BenchmarkId::new("to_json", size),
            &graph,
            |b, g| {
                b.iter(|| {
                    g.to_json().unwrap()
                });
            },
        );
    }

    group.finish();
}

// Helper functions

fn create_test_graph(num_pages: usize) -> TempDir {
    let temp_dir = TempDir::new().unwrap();

    for i in 0..num_pages {
        let next = (i + 1) % num_pages;
        let prev = if i == 0 { num_pages - 1 } else { i - 1 };

        let content = format!(
            "- Page {} content\n- Links to [[page_{}]]\n- Also [[page_{}]]",
            i, next, prev
        );

        create_page(&temp_dir, &format!("page_{}.md", i), &content);
    }

    temp_dir
}

fn create_page(dir: &TempDir, filename: &str, content: &str) {
    let path = dir.path().join(filename);
    fs::write(path, content).unwrap();
}

criterion_group!(
    benches,
    bench_graph_construction,
    bench_graph_traversal,
    bench_pagerank,
    bench_shortest_path,
    bench_backlink_computation,
    bench_incremental_update,
    bench_serialization
);

criterion_main!(benches);
