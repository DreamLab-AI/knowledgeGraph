//! Node pinning functionality for interactive graph manipulation
//!
//! This module provides the ability to "pin" nodes at fixed positions,
//! preventing the force simulation from moving them. This is useful for
//! user interaction, allowing users to fix certain nodes while the rest
//! of the graph continues to layout.
//!
//! Based on WebVOWL's pickAndPin.js module.

use crate::graph::VowlGraph;
use crate::{Result, VowlError};
use std::collections::HashSet;

/// Manages pinned nodes in the graph
#[derive(Debug, Clone, Default)]
pub struct PinManager {
    /// Set of pinned node IDs
    pinned_nodes: HashSet<String>,

    /// Whether pinning is enabled globally
    enabled: bool,
}

impl PinManager {
    /// Create a new pin manager
    pub fn new() -> Self {
        Self {
            pinned_nodes: HashSet::new(),
            enabled: true,
        }
    }

    /// Pin a node at its current position
    ///
    /// # Arguments
    /// * `graph` - The graph containing the node
    /// * `node_id` - The ID of the node to pin
    ///
    /// # Returns
    /// * `Ok(())` if the node was successfully pinned
    /// * `Err` if the node doesn't exist or pinning is disabled
    pub fn pin_node(&mut self, graph: &mut VowlGraph, node_id: &str) -> Result<()> {
        if !self.enabled {
            return Err(VowlError::InteractionError(
                "Pinning is disabled".to_string()
            ));
        }

        // Verify node exists and set it as fixed
        let node = graph.get_node_mut(node_id)
            .ok_or_else(|| VowlError::GraphError(
                format!("Node '{}' not found", node_id)
            ))?;

        node.visual.fixed = true;
        self.pinned_nodes.insert(node_id.to_string());

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "📌 Pinned node '{}' at ({:.1}, {:.1})",
                node_id, node.visual.x, node.visual.y
            ).into());
        }

        Ok(())
    }

    /// Pin a node at a specific position
    ///
    /// # Arguments
    /// * `graph` - The graph containing the node
    /// * `node_id` - The ID of the node to pin
    /// * `x` - X coordinate to pin the node at
    /// * `y` - Y coordinate to pin the node at
    ///
    /// # Returns
    /// * `Ok(())` if the node was successfully pinned
    /// * `Err` if the node doesn't exist or pinning is disabled
    pub fn pin_node_at(&mut self, graph: &mut VowlGraph, node_id: &str, x: f64, y: f64) -> Result<()> {
        if !self.enabled {
            return Err(VowlError::InteractionError(
                "Pinning is disabled".to_string()
            ));
        }

        // Verify node exists, set position, and set it as fixed
        let node = graph.get_node_mut(node_id)
            .ok_or_else(|| VowlError::GraphError(
                format!("Node '{}' not found", node_id)
            ))?;

        node.visual.x = x;
        node.visual.y = y;
        node.visual.vx = 0.0;
        node.visual.vy = 0.0;
        node.visual.fixed = true;
        self.pinned_nodes.insert(node_id.to_string());

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "📌 Pinned node '{}' at ({:.1}, {:.1})",
                node_id, x, y
            ).into());
        }

        Ok(())
    }

    /// Unpin a node, allowing it to move freely
    ///
    /// # Arguments
    /// * `graph` - The graph containing the node
    /// * `node_id` - The ID of the node to unpin
    ///
    /// # Returns
    /// * `Ok(())` if the node was successfully unpinned
    /// * `Err` if the node doesn't exist
    pub fn unpin_node(&mut self, graph: &mut VowlGraph, node_id: &str) -> Result<()> {
        // Verify node exists and set it as not fixed
        let node = graph.get_node_mut(node_id)
            .ok_or_else(|| VowlError::GraphError(
                format!("Node '{}' not found", node_id)
            ))?;

        node.visual.fixed = false;
        self.pinned_nodes.remove(node_id);

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&format!(
                "📍 Unpinned node '{}'",
                node_id
            ).into());
        }

        Ok(())
    }

    /// Check if a node is pinned
    ///
    /// # Arguments
    /// * `node_id` - The ID of the node to check
    ///
    /// # Returns
    /// * `true` if the node is pinned
    /// * `false` if the node is not pinned or doesn't exist
    pub fn is_pinned(&self, node_id: &str) -> bool {
        self.pinned_nodes.contains(node_id)
    }

    /// Unpin all nodes
    pub fn reset(&mut self, graph: &mut VowlGraph) {
        for node_id in self.pinned_nodes.drain() {
            if let Some(node) = graph.get_node_mut(&node_id) {
                node.visual.fixed = false;
            }
        }

        #[cfg(target_arch = "wasm32")]
        {
            web_sys::console::log_1(&"🔓 Reset all pinned nodes".into());
        }
    }

    /// Enable or disable pinning globally
    pub fn set_enabled(&mut self, enabled: bool) {
        self.enabled = enabled;
    }

    /// Check if pinning is enabled
    pub fn is_enabled(&self) -> bool {
        self.enabled
    }

    /// Get the count of pinned nodes
    pub fn pinned_count(&self) -> usize {
        self.pinned_nodes.len()
    }

    /// Get all pinned node IDs
    pub fn pinned_nodes(&self) -> Vec<String> {
        self.pinned_nodes.iter().cloned().collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::graph::{node::NodeBuilder, NodeType};

    fn create_test_graph() -> VowlGraph {
        let mut graph = VowlGraph::new();

        for i in 1..=3 {
            let node = NodeBuilder::new(format!("node{}", i))
                .label(format!("Node {}", i))
                .node_type(NodeType::Class)
                .position(i as f64 * 10.0, i as f64 * 20.0)
                .build();

            graph.add_node(node).unwrap();
        }

        graph
    }

    #[test]
    fn test_pin_manager_creation() {
        let manager = PinManager::new();
        assert!(manager.is_enabled());
        assert_eq!(manager.pinned_count(), 0);
    }

    #[test]
    fn test_pin_node() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        let result = manager.pin_node(&mut graph, "node1");
        assert!(result.is_ok());
        assert!(manager.is_pinned("node1"));
        assert_eq!(manager.pinned_count(), 1);

        // Check that node is marked as fixed
        let node = graph.get_node("node1").unwrap();
        assert!(node.visual.fixed);
    }

    #[test]
    fn test_pin_node_at_position() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        let result = manager.pin_node_at(&mut graph, "node1", 100.0, 200.0);
        assert!(result.is_ok());
        assert!(manager.is_pinned("node1"));

        // Check position was updated
        let node = graph.get_node("node1").unwrap();
        assert_eq!(node.visual.x, 100.0);
        assert_eq!(node.visual.y, 200.0);
        assert!(node.visual.fixed);
        assert_eq!(node.visual.vx, 0.0);
        assert_eq!(node.visual.vy, 0.0);
    }

    #[test]
    fn test_unpin_node() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.pin_node(&mut graph, "node1").unwrap();
        assert!(manager.is_pinned("node1"));

        let result = manager.unpin_node(&mut graph, "node1");
        assert!(result.is_ok());
        assert!(!manager.is_pinned("node1"));
        assert_eq!(manager.pinned_count(), 0);

        // Check that node is no longer fixed
        let node = graph.get_node("node1").unwrap();
        assert!(!node.visual.fixed);
    }

    #[test]
    fn test_pin_nonexistent_node() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        let result = manager.pin_node(&mut graph, "invalid");
        assert!(result.is_err());
    }

    #[test]
    fn test_pin_multiple_nodes() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.pin_node(&mut graph, "node1").unwrap();
        manager.pin_node(&mut graph, "node2").unwrap();
        manager.pin_node(&mut graph, "node3").unwrap();

        assert_eq!(manager.pinned_count(), 3);
        assert!(manager.is_pinned("node1"));
        assert!(manager.is_pinned("node2"));
        assert!(manager.is_pinned("node3"));
    }

    #[test]
    fn test_reset_pins() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.pin_node(&mut graph, "node1").unwrap();
        manager.pin_node(&mut graph, "node2").unwrap();

        manager.reset(&mut graph);

        assert_eq!(manager.pinned_count(), 0);
        assert!(!manager.is_pinned("node1"));
        assert!(!manager.is_pinned("node2"));

        // Check that nodes are no longer fixed
        assert!(!graph.get_node("node1").unwrap().visual.fixed);
        assert!(!graph.get_node("node2").unwrap().visual.fixed);
    }

    #[test]
    fn test_enable_disable() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.set_enabled(false);
        assert!(!manager.is_enabled());

        let result = manager.pin_node(&mut graph, "node1");
        assert!(result.is_err());

        manager.set_enabled(true);
        assert!(manager.is_enabled());

        let result = manager.pin_node(&mut graph, "node1");
        assert!(result.is_ok());
    }

    #[test]
    fn test_get_pinned_nodes() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.pin_node(&mut graph, "node1").unwrap();
        manager.pin_node(&mut graph, "node3").unwrap();

        let pinned = manager.pinned_nodes();
        assert_eq!(pinned.len(), 2);
        assert!(pinned.contains(&"node1".to_string()));
        assert!(pinned.contains(&"node3".to_string()));
    }

    #[test]
    fn test_pin_same_node_twice() {
        let mut graph = create_test_graph();
        let mut manager = PinManager::new();

        manager.pin_node(&mut graph, "node1").unwrap();
        manager.pin_node(&mut graph, "node1").unwrap();

        // Should still only count once
        assert_eq!(manager.pinned_count(), 1);
    }
}
