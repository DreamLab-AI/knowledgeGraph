//! Force-directed layout simulation

use super::{force::*, LayoutAlgorithm, LayoutConfig};
use crate::graph::VowlGraph;
use crate::Result;
use crate::debug::{DebugFlags, log_distribution};
use nalgebra::Vector2;
use std::collections::HashMap;

/// Force-directed layout simulation
pub struct ForceSimulation {
    config: LayoutConfig,
    alpha: f64,
    iteration: usize,
    debug_flags: DebugFlags,
}

impl ForceSimulation {
    /// Create a new simulation with default configuration
    pub fn new() -> Self {
        Self {
            config: LayoutConfig::default(),
            alpha: 1.0,
            iteration: 0,
            debug_flags: DebugFlags::default(),
        }
    }

    /// Create a simulation with custom configuration
    pub fn with_config(config: LayoutConfig) -> Self {
        let alpha = config.alpha;
        Self {
            config,
            alpha,
            iteration: 0,
            debug_flags: DebugFlags::default(),
        }
    }

    /// Enable debug logging
    pub fn enable_debug(&mut self) {
        self.debug_flags.enable_all();
    }

    /// Set debug flags
    pub fn set_debug_flags(&mut self, flags: DebugFlags) {
        self.debug_flags = flags;
    }

    /// Set center position
    pub fn set_center(&mut self, x: f64, y: f64) {
        self.config.center = (x, y);
    }

    /// Set link distance
    pub fn set_link_distance(&mut self, distance: f64) {
        self.config.link_distance = distance;
    }

    /// Set charge strength
    pub fn set_charge_strength(&mut self, strength: f64) {
        self.config.charge_strength = strength;
    }

    /// Initialize node positions in a circle layout
    /// ✅ FIX: Always initialize, don't check if at origin
    fn initialize_positions(&self, graph: &mut VowlGraph) {
        // ✅ EXTREME FIX: 20x larger radius for maximum spread for 1,155 nodes (was 990.0)
        let radius = 2000.0;
        let mut angle: f64 = 0.0;
        let angle_step = std::f64::consts::TAU / graph.node_count() as f64;

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "🔄 Initializing {} nodes in circular layout with radius {}",
                graph.node_count(), radius
            ).into());
        }

        // Collect node IDs first to avoid borrow conflicts
        let node_ids: Vec<String> = graph.nodes().iter().map(|n| n.id.clone()).collect();

        for node_id in node_ids {
            if let Some(node_mut) = graph.get_node_mut(&node_id) {
                // ✅ FIX: ALWAYS initialize positions (removed the if check)
                // Previously: Only initialized if at (0,0), but React already set positions
                // Now: Always initialize in circular layout for deterministic starting state
                node_mut.visual.x = radius * angle.cos();
                node_mut.visual.y = radius * angle.sin();
                // Reset velocities
                node_mut.visual.vx = 0.0;
                node_mut.visual.vy = 0.0;
                angle += angle_step;
            }
        }

        // Log initial distribution
        if self.debug_flags.log_positions {
            let positions: Vec<(f64, f64)> = graph.nodes().iter()
                .map(|n| (n.visual.x, n.visual.y))
                .collect();
            log_distribution("Initial Positions", &positions);
        }
    }

    /// Calculate all forces for one simulation step
    fn calculate_forces(&self, graph: &VowlGraph) -> HashMap<String, Vector2<f64>> {
        let mut forces: HashMap<String, Vector2<f64>> = HashMap::new();
        let nodes = graph.nodes();

        // Initialize forces
        for node in &nodes {
            forces.insert(node.id.clone(), Vector2::zeros());
        }

        // Apply repulsion between all nodes
        if self.config.use_barnes_hut && nodes.len() > 50 {
            // Use Barnes-Hut approximation for large graphs
            use super::quadtree::QuadTree;

            let quadtree = QuadTree::build(&nodes);

            for node in &nodes {
                let pos = Vector2::new(node.visual.x, node.visual.y);
                let force = quadtree.calculate_force(
                    pos,
                    &node.id,
                    self.config.barnes_hut_theta,
                    self.config.charge_strength,
                );
                *forces.get_mut(&node.id).unwrap() += force;
            }
        } else {
            // Use exact O(n²) calculation for small graphs
            for i in 0..nodes.len() {
                for j in (i + 1)..nodes.len() {
                    let node1 = nodes[i];
                    let node2 = nodes[j];

                    let pos1 = Vector2::new(node1.visual.x, node1.visual.y);
                    let pos2 = Vector2::new(node2.visual.x, node2.visual.y);

                    let force = calculate_repulsion(pos1, pos2, self.config.charge_strength);

                    *forces.get_mut(&node1.id).unwrap() += force;
                    *forces.get_mut(&node2.id).unwrap() -= force;
                }
            }
        }

        // Apply attraction along edges
        // ✅ FIX: Added logging to verify attraction forces are applied
        let mut attraction_count = 0;
        for node in &nodes {
            if let Ok(neighbors) = graph.neighbors(&node.id) {
                for neighbor in neighbors {
                    let pos1 = Vector2::new(node.visual.x, node.visual.y);
                    let pos2 = Vector2::new(neighbor.visual.x, neighbor.visual.y);

                    let force = calculate_attraction(
                        pos1,
                        pos2,
                        self.config.link_distance,
                        self.config.link_strength,
                    );

                    *forces.get_mut(&node.id).unwrap() += force * self.alpha;
                    attraction_count += 1;
                }
            }
        }

        // ✅ Log attraction force count on first iteration only
        #[cfg(target_arch = "wasm32")]
        {
            if self.iteration == 0 {
                web_sys::console::log_1(&format!(
                    "🔗 Applied {} attraction forces between {} nodes ({} edges in graph)",
                    attraction_count,
                    nodes.len(),
                    graph.edge_count()
                ).into());
            }
        }

        // Apply centering force
        let center = Vector2::new(self.config.center.0, self.config.center.1);
        for node in &nodes {
            let pos = Vector2::new(node.visual.x, node.visual.y);
            let force = calculate_center_force(pos, center, self.config.center_strength);
            *forces.get_mut(&node.id).unwrap() += force;
        }

        forces
    }

    /// Apply forces to update node positions
    fn apply_forces(&self, graph: &mut VowlGraph, forces: &HashMap<String, Vector2<f64>>) {
        for (node_id, force) in forces {
            if let Some(node) = graph.get_node_mut(node_id) {
                if !node.visual.fixed {
                    // Update velocity
                    node.visual.vx += force.x * self.alpha;
                    node.visual.vy += force.y * self.alpha;

                    // Apply damping
                    node.visual.vx *= self.config.velocity_decay;
                    node.visual.vy *= self.config.velocity_decay;

                    // Update position
                    node.visual.x += node.visual.vx;
                    node.visual.y += node.visual.vy;
                }
            }
        }
    }
}

impl LayoutAlgorithm for ForceSimulation {
    fn initialize(&mut self, graph: &mut VowlGraph) -> Result<()> {
        self.initialize_positions(graph);
        self.alpha = self.config.alpha;
        self.iteration = 0;
        Ok(())
    }

    fn tick(&mut self, graph: &mut VowlGraph) -> Result<()> {
        if self.is_finished() {
            return Ok(());
        }

        // Log before tick
        if self.debug_flags.should_log(self.iteration) && self.debug_flags.log_positions {
            let positions: Vec<(f64, f64)> = graph.nodes().iter()
                .map(|n| (n.visual.x, n.visual.y))
                .collect();
            log_distribution(&format!("Before Tick {}", self.iteration), &positions);
        }

        let forces = self.calculate_forces(graph);
        self.apply_forces(graph, &forces);

        // Decay alpha
        self.alpha *= 1.0 - self.config.alpha_decay;
        self.iteration += 1;

        // Log after tick
        if self.debug_flags.should_log(self.iteration) {
            #[cfg(target_arch = "wasm32")]
            {
                if self.debug_flags.log_positions {
                    let positions: Vec<(f64, f64)> = graph.nodes().iter()
                        .map(|n| (n.visual.x, n.visual.y))
                        .collect();
                    log_distribution(&format!("After Tick {}", self.iteration), &positions);
                }

                web_sys::console::log_1(&format!(
                    "⏱️ Iteration {}: alpha={:.4}, nodes={}",
                    self.iteration, self.alpha, graph.node_count()
                ).into());
            }
        }

        Ok(())
    }

    fn run(&mut self, graph: &mut VowlGraph, iterations: usize) -> Result<()> {
        self.initialize(graph)?;

        for _ in 0..iterations {
            if self.is_finished() {
                break;
            }
            self.tick(graph)?;
        }

        Ok(())
    }

    fn is_finished(&self) -> bool {
        self.alpha < self.config.alpha_min
    }

    fn alpha(&self) -> f64 {
        self.alpha
    }
}

impl Default for ForceSimulation {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::graph::{node::NodeBuilder, NodeType, VowlGraph};

    fn create_test_graph() -> VowlGraph {
        let mut graph = VowlGraph::new();

        let node1 = NodeBuilder::new("node1")
            .label("Node 1")
            .node_type(NodeType::Class)
            .build();

        let node2 = NodeBuilder::new("node2")
            .label("Node 2")
            .node_type(NodeType::Class)
            .build();

        let node3 = NodeBuilder::new("node3")
            .label("Node 3")
            .node_type(NodeType::Class)
            .build();

        graph.add_node(node1).unwrap();
        graph.add_node(node2).unwrap();
        graph.add_node(node3).unwrap();

        graph
    }

    #[test]
    fn test_simulation_creation() {
        let sim = ForceSimulation::new();
        assert_eq!(sim.alpha, 1.0);
        assert_eq!(sim.iteration, 0);
    }

    #[test]
    fn test_simulation_with_config() {
        let config = LayoutConfig {
            alpha: 0.5,
            link_distance: 50.0,
            ..Default::default()
        };

        let sim = ForceSimulation::with_config(config);
        assert_eq!(sim.alpha, 0.5);
        assert_eq!(sim.config.link_distance, 50.0);
    }

    #[test]
    fn test_initialize_positions() {
        let mut graph = create_test_graph();
        let mut sim = ForceSimulation::new();

        sim.initialize(&mut graph).unwrap();

        // All nodes should have non-zero positions
        for node in graph.nodes() {
            assert!(
                node.visual.x != 0.0 || node.visual.y != 0.0,
                "Node should have initialized position"
            );
        }
    }

    #[test]
    fn test_single_tick() {
        let mut graph = create_test_graph();
        let mut sim = ForceSimulation::new();

        sim.initialize(&mut graph).unwrap();
        let initial_alpha = sim.alpha();

        sim.tick(&mut graph).unwrap();

        // Alpha should have decayed
        assert!(sim.alpha() < initial_alpha);
    }

    #[test]
    fn test_run_simulation() {
        let mut graph = create_test_graph();
        let mut sim = ForceSimulation::new();

        let result = sim.run(&mut graph, 100);
        assert!(result.is_ok());

        // Alpha should have decayed significantly
        assert!(sim.alpha() < 0.5);
    }

    #[test]
    fn test_simulation_finishes() {
        let mut graph = create_test_graph();
        let mut sim = ForceSimulation::new();

        sim.run(&mut graph, 1000).unwrap();

        // Simulation should have finished
        assert!(sim.is_finished());
    }

    #[test]
    fn test_set_center() {
        let mut sim = ForceSimulation::new();
        sim.set_center(100.0, 200.0);

        assert_eq!(sim.config.center, (100.0, 200.0));
    }

    #[test]
    fn test_set_parameters() {
        let mut sim = ForceSimulation::new();

        sim.set_link_distance(50.0);
        sim.set_charge_strength(-100.0);

        assert_eq!(sim.config.link_distance, 50.0);
        assert_eq!(sim.config.charge_strength, -100.0);
    }
}
