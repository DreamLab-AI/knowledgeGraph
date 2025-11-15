/// Performance benchmarks for Markdown parser
/// Measures parser performance across different input sizes and complexities

use criterion::{black_box, criterion_group, criterion_main, Criterion, BenchmarkId, Throughput};
use logseq_publisher_rust::parser::MarkdownParser;

fn bench_parse_simple(c: &mut Criterion) {
    let mut group = c.benchmark_group("parse_simple");

    let inputs = vec![
        ("10_lines", generate_simple_markdown(10)),
        ("100_lines", generate_simple_markdown(100)),
        ("1000_lines", generate_simple_markdown(1000)),
        ("10000_lines", generate_simple_markdown(10000)),
    ];

    for (name, input) in inputs {
        group.throughput(Throughput::Bytes(input.len() as u64));
        group.bench_with_input(BenchmarkId::from_parameter(name), &input, |b, input| {
            let parser = MarkdownParser::new();
            b.iter(|| {
                parser.parse(black_box(input)).unwrap()
            });
        });
    }

    group.finish();
}

fn bench_parse_complex(c: &mut Criterion) {
    let mut group = c.benchmark_group("parse_complex");

    let inputs = vec![
        ("nested_10", generate_nested_markdown(10)),
        ("nested_100", generate_nested_markdown(100)),
        ("with_links_100", generate_markdown_with_links(100)),
        ("with_code_50", generate_markdown_with_code(50)),
    ];

    for (name, input) in inputs {
        group.throughput(Throughput::Bytes(input.len() as u64));
        group.bench_with_input(BenchmarkId::from_parameter(name), &input, |b, input| {
            let parser = MarkdownParser::new();
            b.iter(|| {
                parser.parse(black_box(input)).unwrap()
            });
        });
    }

    group.finish();
}

fn bench_link_extraction(c: &mut Criterion) {
    let mut group = c.benchmark_group("link_extraction");

    let parser = MarkdownParser::new();

    let inputs = vec![
        ("few_links", generate_markdown_with_links(10)),
        ("many_links", generate_markdown_with_links(100)),
        ("dense_links", generate_dense_links(50)),
    ];

    for (name, input) in inputs {
        group.bench_with_input(BenchmarkId::from_parameter(name), &input, |b, input| {
            b.iter(|| {
                parser.extract_links(black_box(input))
            });
        });
    }

    group.finish();
}

fn bench_property_extraction(c: &mut Criterion) {
    let mut group = c.benchmark_group("property_extraction");

    let inputs = vec![
        ("few_props", generate_with_properties(5)),
        ("many_props", generate_with_properties(50)),
    ];

    for (name, input) in inputs {
        group.bench_with_input(BenchmarkId::from_parameter(name), &input, |b, input| {
            let parser = MarkdownParser::new();
            b.iter(|| {
                parser.extract_properties(black_box(input))
            });
        });
    }

    group.finish();
}

fn bench_real_world_pages(c: &mut Criterion) {
    let mut group = c.benchmark_group("real_world");

    // Simulate real Logseq pages
    let small_page = generate_realistic_page(50, 5, 3);
    let medium_page = generate_realistic_page(200, 20, 10);
    let large_page = generate_realistic_page(1000, 100, 50);

    group.bench_function("small_page", |b| {
        let parser = MarkdownParser::new();
        b.iter(|| {
            parser.parse(black_box(&small_page)).unwrap()
        });
    });

    group.bench_function("medium_page", |b| {
        let parser = MarkdownParser::new();
        b.iter(|| {
            parser.parse(black_box(&medium_page)).unwrap()
        });
    });

    group.bench_function("large_page", |b| {
        let parser = MarkdownParser::new();
        b.iter(|| {
            parser.parse(black_box(&large_page)).unwrap()
        });
    });

    group.finish();
}

// Helper functions to generate test data

fn generate_simple_markdown(lines: usize) -> String {
    let mut content = String::new();
    content.push_str("# Test Document\n\n");

    for i in 0..lines {
        content.push_str(&format!("- Line {} with some content\n", i));
    }

    content
}

fn generate_nested_markdown(depth: usize) -> String {
    let mut content = String::new();

    for level in 0..depth {
        let indent = "  ".repeat(level);
        content.push_str(&format!("{}- Level {} item\n", indent, level));
    }

    content
}

fn generate_markdown_with_links(link_count: usize) -> String {
    let mut content = String::new();
    content.push_str("# Document with Links\n\n");

    for i in 0..link_count {
        content.push_str(&format!("- Item {} links to [[Page {}]]\n", i, i));
    }

    content
}

fn generate_markdown_with_code(blocks: usize) -> String {
    let mut content = String::new();

    for i in 0..blocks {
        content.push_str(&format!(
            "```rust\nfn function_{}() {{\n    println!(\"Test\");\n}}\n```\n\n",
            i
        ));
    }

    content
}

fn generate_dense_links(count: usize) -> String {
    let mut content = String::new();

    for i in 0..count {
        content.push_str(&format!(
            "- [[Link {}]] and [[Link {}]] and [[Link {}]]\n",
            i * 3,
            i * 3 + 1,
            i * 3 + 2
        ));
    }

    content
}

fn generate_with_properties(prop_count: usize) -> String {
    let mut content = String::new();

    for i in 0..prop_count {
        content.push_str(&format!("- prop{}:: value{}\n", i, i));
    }

    content
}

fn generate_realistic_page(lines: usize, link_count: usize, prop_count: usize) -> String {
    let mut content = String::new();

    // Frontmatter
    content.push_str("---\n");
    content.push_str("title: Realistic Page\n");
    content.push_str("tags: [test, benchmark]\n");
    content.push_str("public: true\n");
    content.push_str("---\n\n");

    // Properties
    for i in 0..prop_count {
        content.push_str(&format!("- property{}:: value{}\n", i, i));
    }

    content.push_str("\n# Main Content\n\n");

    // Mix of content
    for i in 0..lines {
        match i % 5 {
            0 => content.push_str(&format!("- TODO Task {}\n", i)),
            1 if i < link_count => content.push_str(&format!("- Links to [[Page {}]]\n", i)),
            2 => content.push_str(&format!("- **Bold** and *italic* text {}\n", i)),
            3 => content.push_str(&format!("- Code: `inline code {}`\n", i)),
            _ => content.push_str(&format!("- Regular content line {}\n", i)),
        }
    }

    content
}

criterion_group!(
    benches,
    bench_parse_simple,
    bench_parse_complex,
    bench_link_extraction,
    bench_property_extraction,
    bench_real_world_pages
);

criterion_main!(benches);
