//! Benchmark for force-directed layout performance

use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion};
use webvowl_wasm::{
    graph::{builder::GraphBuilder, NodeBuilder, NodeType, VowlGraph},
    layout::{simulation::ForceSimulation, LayoutAlgorithm},
    ontology::{
        ClassAttributes, ClassNode, OntologyData, OntologyMetadata, Property,
        PropertyCharacteristics, PropertyType,
    },
};

fn create_test_ontology(num_classes: usize, num_properties: usize) -> OntologyData {
    let mut classes = Vec::new();
    for i in 0..num_classes {
        classes.push(ClassNode {
            id: format!("class{}", i),
            iri: format!("http://test.org/Class{}", i),
            label: format!("Class {}", i),
            class_type: "owl:Class".to_string(),
            equivalent: vec![],
            attributes: ClassAttributes::default(),
        });
    }

    let mut properties = Vec::new();
    for i in 0..num_properties {
        let domain_idx = i % num_classes;
        let range_idx = (i + 1) % num_classes;

        properties.push(Property {
            id: format!("prop{}", i),
            iri: format!("http://test.org/prop{}", i),
            label: format!("Property {}", i),
            property_type: PropertyType::ObjectProperty,
            domain: format!("class{}", domain_idx),
            range: format!("class{}", range_idx),
            characteristics: PropertyCharacteristics::default(),
        });
    }

    OntologyData {
        metadata: OntologyMetadata {
            iri: "http://test.org/bench".to_string(),
            version: None,
            title: Some("Benchmark Ontology".to_string()),
            description: None,
        },
        classes,
        properties,
        namespaces: vec![],
    }
}

fn bench_graph_construction(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_construction");

    for size in [10, 50, 100, 200].iter() {
        let ontology = create_test_ontology(*size, *size - 5);

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            size,
            |b, _| {
                b.iter(|| {
                    let graph = GraphBuilder::from_ontology(black_box(&ontology)).unwrap();
                    black_box(graph);
                });
            },
        );
    }

    group.finish();
}

fn bench_force_simulation(c: &mut Criterion) {
    let mut group = c.benchmark_group("force_simulation");

    for size in [10, 25, 50].iter() {
        let ontology = create_test_ontology(*size, *size - 5);
        let mut graph = GraphBuilder::from_ontology(&ontology).unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            size,
            |b, _| {
                b.iter(|| {
                    let mut sim = ForceSimulation::new();
                    let mut test_graph = graph.clone();
                    sim.run(black_box(&mut test_graph), 50).unwrap();
                    black_box(test_graph);
                });
            },
        );
    }

    group.finish();
}

fn bench_single_tick(c: &mut Criterion) {
    let mut group = c.benchmark_group("single_tick");

    for size in [10, 50, 100, 200].iter() {
        let ontology = create_test_ontology(*size, *size - 5);
        let mut graph = GraphBuilder::from_ontology(&ontology).unwrap();
        let mut sim = ForceSimulation::new();
        sim.initialize(&mut graph).unwrap();

        group.bench_with_input(
            BenchmarkId::from_parameter(size),
            size,
            |b, _| {
                b.iter(|| {
                    let mut test_graph = graph.clone();
                    let mut test_sim = ForceSimulation::new();
                    test_sim.initialize(&mut test_graph).unwrap();
                    test_sim.tick(black_box(&mut test_graph)).unwrap();
                    black_box(test_graph);
                });
            },
        );
    }

    group.finish();
}

fn bench_graph_queries(c: &mut Criterion) {
    let mut group = c.benchmark_group("graph_queries");

    let ontology = create_test_ontology(100, 90);
    let graph = GraphBuilder::from_ontology(&ontology).unwrap();

    group.bench_function("node_count", |b| {
        b.iter(|| {
            black_box(graph.node_count());
        });
    });

    group.bench_function("edge_count", |b| {
        b.iter(|| {
            black_box(graph.edge_count());
        });
    });

    group.bench_function("get_node", |b| {
        b.iter(|| {
            black_box(graph.get_node("class50"));
        });
    });

    group.bench_function("neighbors", |b| {
        b.iter(|| {
            black_box(graph.neighbors("class50")).ok();
        });
    });

    group.finish();
}

criterion_group!(
    benches,
    bench_graph_construction,
    bench_force_simulation,
    bench_single_tick,
    bench_graph_queries
);
criterion_main!(benches);
