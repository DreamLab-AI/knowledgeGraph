/// WASM-specific performance benchmarks
/// Measures WASM module performance and bundle size efficiency

#![cfg(target_arch = "wasm32")]

use criterion::{black_box, criterion_group, criterion_main, Criterion};
use logseq_publisher_rust::wasm::WasmPublisher;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

fn bench_wasm_initialization(c: &mut Criterion) {
    c.bench_function("wasm_init", |b| {
        b.iter(|| {
            WasmPublisher::new()
        });
    });
}

fn bench_wasm_parsing(c: &mut Criterion) {
    let mut group = c.benchmark_group("wasm_parsing");

    let publisher = WasmPublisher::new();

    let small = generate_markdown(50);
    let medium = generate_markdown(500);
    let large = generate_markdown(5000);

    group.bench_function("small_50_lines", |b| {
        b.iter(|| {
            publisher.parse_markdown(black_box(&small)).unwrap()
        });
    });

    group.bench_function("medium_500_lines", |b| {
        b.iter(|| {
            publisher.parse_markdown(black_box(&medium)).unwrap()
        });
    });

    group.bench_function("large_5000_lines", |b| {
        b.iter(|| {
            publisher.parse_markdown(black_box(&large)).unwrap()
        });
    });

    group.finish();
}

fn bench_wasm_rendering(c: &mut Criterion) {
    use web_sys::window;

    let window = window().expect("no window");
    let document = window.document().expect("no document");
    let container = document.create_element("div").unwrap();

    let publisher = WasmPublisher::new();
    let markdown = generate_markdown(100);

    c.bench_function("render_to_dom", |b| {
        b.iter(|| {
            publisher.render_to_dom(black_box(&container), black_box(&markdown)).unwrap()
        });
    });
}

fn bench_wasm_search(c: &mut Criterion) {
    let publisher = WasmPublisher::new();

    // Index 1000 pages
    let pages: Vec<_> = (0..1000)
        .map(|i| (format!("page_{}", i), format!("Content for page {}", i)))
        .collect();

    publisher.index_pages(pages).unwrap();

    c.bench_function("search_query", |b| {
        b.iter(|| {
            publisher.search(black_box("content"))
        });
    });
}

fn bench_memory_allocation(c: &mut Criterion) {
    c.bench_function("allocate_large_graph", |b| {
        b.iter(|| {
            let publisher = WasmPublisher::new();

            let pages: Vec<_> = (0..1000)
                .map(|i| {
                    let content = format!("- Page {} links to [[page_{}]]", i, (i + 1) % 1000);
                    (format!("page_{}", i), content)
                })
                .collect();

            publisher.build_graph(black_box(pages)).unwrap()
        });
    });
}

// Helper functions

fn generate_markdown(lines: usize) -> String {
    let mut content = String::new();
    content.push_str("# Test Document\n\n");

    for i in 0..lines {
        content.push_str(&format!("- Line {} with [[Link {}]] content\n", i, i));
    }

    content
}

criterion_group!(
    benches,
    bench_wasm_initialization,
    bench_wasm_parsing,
    bench_wasm_rendering,
    bench_wasm_search,
    bench_memory_allocation
);

criterion_main!(benches);
