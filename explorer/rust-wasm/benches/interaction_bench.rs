use criterion::{black_box, criterion_group, criterion_main, Criterion, BenchmarkId};
use nalgebra::Vector3;
use webvowl_wasm::interaction::{find_closest_node_hit, ray_sphere_intersection, NodeHitTest, Ray};

/// Benchmark single ray-sphere intersection
fn bench_ray_sphere_intersection(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 0.0, 0.0),
    );
    let center = Vector3::new(5.0, 0.0, 0.0);
    let radius = 1.0;

    c.bench_function("ray_sphere_intersection", |b| {
        b.iter(|| {
            black_box(ray_sphere_intersection(
                black_box(&ray),
                black_box(center),
                black_box(radius),
            ))
        });
    });
}

/// Benchmark ray-sphere intersection with miss
fn bench_ray_sphere_miss(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 0.0, 0.0),
    );
    let center = Vector3::new(5.0, 10.0, 0.0); // Far away
    let radius = 1.0;

    c.bench_function("ray_sphere_miss", |b| {
        b.iter(|| {
            black_box(ray_sphere_intersection(
                black_box(&ray),
                black_box(center),
                black_box(radius),
            ))
        });
    });
}

/// Benchmark finding closest node with varying node counts
fn bench_find_closest_node(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 0.0, 0.0),
    );

    let mut group = c.benchmark_group("find_closest_node");

    for node_count in [10, 50, 100, 500, 1000].iter() {
        // Create nodes in a grid pattern
        let nodes: Vec<NodeHitTest> = (0..*node_count)
            .map(|i| {
                let x = (i as f32) * 0.1;
                let y = ((i / 10) as f32) * 0.1;
                NodeHitTest {
                    id: format!("node{}", i),
                    position: Vector3::new(x, y, 0.0),
                    radius: 0.05,
                }
            })
            .collect();

        group.bench_with_input(
            BenchmarkId::from_parameter(node_count),
            &nodes,
            |b, nodes| {
                b.iter(|| {
                    black_box(find_closest_node_hit(black_box(&ray), black_box(nodes)))
                });
            },
        );
    }

    group.finish();
}

/// Benchmark with all nodes being hits (worst case)
fn bench_find_closest_all_hits(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 0.0, 0.0),
    );

    // Create 1000 nodes all along the ray path
    let nodes: Vec<NodeHitTest> = (0..1000)
        .map(|i| {
            let x = (i as f32) * 0.1;
            NodeHitTest {
                id: format!("node{}", i),
                position: Vector3::new(x, 0.0, 0.0), // All on ray path
                radius: 0.05,
            }
        })
        .collect();

    c.bench_function("find_closest_all_hits_1000", |b| {
        b.iter(|| {
            black_box(find_closest_node_hit(black_box(&ray), black_box(&nodes)))
        });
    });
}

/// Benchmark with no hits (best case for early termination)
fn bench_find_closest_no_hits(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 0.0, 0.0),
    );

    // Create 1000 nodes all far from the ray
    let nodes: Vec<NodeHitTest> = (0..1000)
        .map(|i| {
            let x = (i as f32) * 0.1;
            NodeHitTest {
                id: format!("node{}", i),
                position: Vector3::new(x, 100.0, 0.0), // Far away
                radius: 0.05,
            }
        })
        .collect();

    c.bench_function("find_closest_no_hits_1000", |b| {
        b.iter(|| {
            black_box(find_closest_node_hit(black_box(&ray), black_box(&nodes)))
        });
    });
}

/// Benchmark 3D ray (more complex calculation)
fn bench_3d_intersection(c: &mut Criterion) {
    let ray = Ray::new(
        Vector3::new(0.0, 0.0, 0.0),
        Vector3::new(1.0, 1.0, 1.0),
    );
    let center = Vector3::new(5.0, 5.0, 5.0);
    let radius = 1.0;

    c.bench_function("ray_sphere_3d", |b| {
        b.iter(|| {
            black_box(ray_sphere_intersection(
                black_box(&ray),
                black_box(center),
                black_box(radius),
            ))
        });
    });
}

criterion_group!(
    benches,
    bench_ray_sphere_intersection,
    bench_ray_sphere_miss,
    bench_find_closest_node,
    bench_find_closest_all_hits,
    bench_find_closest_no_hits,
    bench_3d_intersection
);
criterion_main!(benches);
