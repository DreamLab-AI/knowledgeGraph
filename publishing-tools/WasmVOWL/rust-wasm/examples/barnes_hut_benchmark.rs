//! Benchmark comparing O(n²) vs Barnes-Hut O(n log n) force calculation
//!
//! Run with: cargo run --release --example barnes_hut_benchmark

use webvowl_wasm::graph::{Node, NodeType, VisualAttributes, SemanticAttributes, VowlGraph};
use webvowl_wasm::layout::{LayoutConfig, LayoutAlgorithm};
use webvowl_wasm::layout::simulation::ForceSimulation;
use std::time::Instant;

fn create_test_graph(n: usize) -> VowlGraph {
    let mut graph = VowlGraph::new();

    // Create nodes in a circle
    let radius = 500.0;
    for i in 0..n {
        let angle = 2.0 * std::f64::consts::PI * (i as f64) / (n as f64);
        let x = radius * angle.cos();
        let y = radius * angle.sin();

        let node = Node {
            id: format!("node_{}", i),
            label: format!("Node {}", i),
            node_type: NodeType::Class,
            visual: VisualAttributes {
                x,
                y,
                vx: 0.0,
                vy: 0.0,
                fixed: false,
                weight: 1.0,
                color: None,
            },
            semantic: SemanticAttributes::default(),
        };

        graph.add_node(node).unwrap();
    }

    graph
}

fn benchmark_config(use_barnes_hut: bool, theta: f64) -> LayoutConfig {
    LayoutConfig {
        use_barnes_hut,
        barnes_hut_theta: theta,
        alpha: 1.0,
        alpha_decay: 0.0228,
        alpha_min: 0.001,
        velocity_decay: 0.6,
        link_distance: 160.0,
        link_strength: 1.0,
        charge_strength: -1000.0,
        center_strength: 1.0,
        center: (0.0, 0.0),
    }
}

fn run_benchmark(n: usize, use_barnes_hut: bool, theta: f64, iterations: usize) -> (u128, String) {
    let mut graph = create_test_graph(n);
    let config = benchmark_config(use_barnes_hut, theta);
    let mut sim = ForceSimulation::with_config(config);

    sim.initialize(&mut graph).unwrap();

    let start = Instant::now();
    for _ in 0..iterations {
        sim.tick(&mut graph).unwrap();
    }
    let duration = start.elapsed();

    let algorithm = if use_barnes_hut {
        format!("Barnes-Hut (θ={})", theta)
    } else {
        "Exact O(n²)".to_string()
    };

    (duration.as_millis(), algorithm)
}

fn main() {
    let sep = "=".repeat(80);
    println!("{}", sep);
    println!("Barnes-Hut Quadtree Performance Benchmark");
    println!("{}", sep);
    println!();

    let test_sizes = vec![100, 500, 1000, 1155, 2000];
    let iterations = 10;

    println!("Running {} iterations per configuration...\n", iterations);

    for &n in &test_sizes {
        let subsep = "-".repeat(80);
        println!("{}", subsep);
        println!("Graph Size: {} nodes", n);
        println!("{}", subsep);

        // Benchmark exact O(n²)
        let (exact_time, exact_name) = run_benchmark(n, false, 0.0, iterations);
        println!("  {:20} {:8} ms  ({:.2} ms/tick)",
            exact_name, exact_time, exact_time as f64 / iterations as f64);

        // Benchmark Barnes-Hut with different theta values
        let theta_values = vec![0.5, 0.9, 1.2];
        for &theta in &theta_values {
            let (bh_time, bh_name) = run_benchmark(n, true, theta, iterations);
            let speedup = exact_time as f64 / bh_time as f64;
            println!("  {:20} {:8} ms  ({:.2} ms/tick)  [{:.1}x speedup]",
                bh_name, bh_time, bh_time as f64 / iterations as f64, speedup);
        }

        println!();
    }

    println!("{}", sep);
    println!("Theoretical Complexity Analysis");
    println!("{}", sep);
    println!();

    for &n in &test_sizes {
        let exact_ops = n * (n - 1) / 2;
        let bh_ops = n * (n as f64).log2() as usize;
        let speedup = exact_ops as f64 / bh_ops as f64;

        println!("  {:4} nodes: O(n²) = {:10} ops | O(n log n) = {:8} ops | {:.1}x reduction",
            n, exact_ops, bh_ops, speedup);
    }

    println!();
    println!("{}", sep);
    println!("Conclusion");
    println!("{}", sep);
    println!();
    println!("For 1,155 nodes:");
    println!("  - Exact O(n²):       ~667,725 operations per tick");
    println!("  - Barnes-Hut:        ~11,550 operations per tick");
    println!("  - Expected speedup:  58x");
    println!();
    println!("Recommended configuration:");
    println!("  - Theta (θ):         0.9 (good balance of speed vs accuracy)");
    println!("  - Enable for:        Graphs with > 50 nodes");
    println!("  - Target FPS:        60 FPS for graphs up to 2,000 nodes");
    println!();
    println!("{}", sep);
}
