//! Benchmark for OWL parser performance

use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion};
use webvowl_wasm::ontology::{parser::StandardParser, OntologyParser};

fn generate_test_json(num_classes: usize, num_properties: usize) -> String {
    let mut classes = Vec::new();
    for i in 0..num_classes {
        classes.push(format!(
            r#"{{"id": "class{}", "iri": "http://test.org/Class{}", "label": "Class {}", "type": "owl:Class"}}"#,
            i, i, i
        ));
    }

    let mut properties = Vec::new();
    for i in 0..num_properties {
        let domain = i % num_classes;
        let range = (i + 1) % num_classes;
        properties.push(format!(
            r#"{{"id": "prop{}", "iri": "http://test.org/prop{}", "label": "Prop {}", "type": "owl:ObjectProperty", "domain": "class{}", "range": "class{}"}}"#,
            i, i, i, domain, range
        ));
    }

    format!(
        r#"{{
        "header": {{
            "iri": "http://test.org/benchmark",
            "title": "Benchmark Ontology",
            "version": "1.0"
        }},
        "namespace": {{
            "owl": "http://www.w3.org/2002/07/owl#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#"
        }},
        "class": [{}],
        "property": [{}]
    }}"#,
        classes.join(","),
        properties.join(",")
    )
}

fn bench_parser(c: &mut Criterion) {
    let mut group = c.benchmark_group("parser");

    for size in [10, 50, 100, 200, 500].iter() {
        let json = generate_test_json(*size, *size - 5);
        let parser = StandardParser::new();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            size,
            |b, _| {
                b.iter(|| {
                    let result = parser.parse(black_box(&json)).unwrap();
                    black_box(result);
                });
            },
        );
    }

    group.finish();
}

fn bench_validation(c: &mut Criterion) {
    let mut group = c.benchmark_group("validation");

    for size in [10, 50, 100, 200].iter() {
        let json = generate_test_json(*size, *size - 5);
        let parser = StandardParser::new();
        let ontology = parser.parse(&json).unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            size,
            |b, _| {
                b.iter(|| {
                    parser.validate(black_box(&ontology)).unwrap();
                });
            },
        );
    }

    group.finish();
}

fn bench_json_parsing(c: &mut Criterion) {
    let mut group = c.benchmark_group("json_parsing");

    let json = generate_test_json(100, 95);

    group.bench_function("serde_json", |b| {
        b.iter(|| {
            let value: serde_json::Value = serde_json::from_str(black_box(&json)).unwrap();
            black_box(value);
        });
    });

    group.finish();
}

criterion_group!(benches, bench_parser, bench_validation, bench_json_parsing);
criterion_main!(benches);
