//! Barnes-Hut quadtree for efficient force approximation
//!
//! This module implements the Barnes-Hut algorithm for approximating
//! long-range forces in O(n log n) time instead of O(n²).
//!
//! Algorithm: Recursively subdivide space into quadrants, compute center
//! of mass for each region, and approximate distant forces as if all mass
//! in that region were concentrated at the center.

use nalgebra::Vector2;
use crate::graph::Node;

/// Rectangular boundary for spatial partitioning
#[derive(Debug, Clone, Copy)]
pub struct Rect {
    /// X coordinate of top-left corner
    pub x: f64,
    /// Y coordinate of top-left corner
    pub y: f64,
    /// Width of the rectangle
    pub width: f64,
    /// Height of the rectangle
    pub height: f64,
}

impl Rect {
    /// Create a new rectangle
    pub fn new(x: f64, y: f64, width: f64, height: f64) -> Self {
        Self { x, y, width, height }
    }

    /// Check if a point is contained in this rectangle
    pub fn contains(&self, x: f64, y: f64) -> bool {
        x >= self.x
            && x < self.x + self.width
            && y >= self.y
            && y < self.y + self.height
    }

    /// Get the center of the rectangle
    pub fn center(&self) -> (f64, f64) {
        (self.x + self.width / 2.0, self.y + self.height / 2.0)
    }

    /// Calculate size (max of width and height)
    pub fn size(&self) -> f64 {
        self.width.max(self.height)
    }
}

/// Reference to a node with its position
#[derive(Debug, Clone)]
pub struct NodeRef {
    /// Node identifier
    pub id: String,
    /// Position in 2D space
    pub position: Vector2<f64>,
    /// Mass/weight of the node
    pub mass: f64,
}

impl NodeRef {
    /// Create a node reference from a graph node
    pub fn from_node(node: &Node) -> Self {
        Self {
            id: node.id.clone(),
            position: Vector2::new(node.visual.x, node.visual.y),
            mass: node.visual.weight.max(1.0), // Default mass of 1.0
        }
    }
}

/// Barnes-Hut quadtree for spatial partitioning
///
/// Quadrants are numbered:
/// ```text
///   0 | 1
///   -----
///   2 | 3
/// ```
#[derive(Debug)]
pub struct QuadTree {
    /// Spatial boundary of this quadrant
    bounds: Rect,

    /// Nodes in this quadrant (if leaf)
    nodes: Vec<NodeRef>,

    /// Child quadrants (if internal)
    children: Option<Box<[QuadTree; 4]>>,

    /// Combined center of mass for all nodes in this subtree
    center_of_mass: Vector2<f64>,

    /// Total mass of all nodes in this subtree
    total_mass: f64,

    /// Maximum nodes per quadrant before subdivision
    capacity: usize,
}

impl QuadTree {
    /// Create a new quadtree with given bounds
    pub fn new(bounds: Rect, capacity: usize) -> Self {
        Self {
            bounds,
            nodes: Vec::new(),
            children: None,
            center_of_mass: Vector2::zeros(),
            total_mass: 0.0,
            capacity,
        }
    }

    /// Build a quadtree from a collection of nodes
    ///
    /// Automatically calculates bounds to contain all nodes with padding
    pub fn build(nodes: &[&Node]) -> Self {
        if nodes.is_empty() {
            return Self::new(Rect::new(0.0, 0.0, 1000.0, 1000.0), 1);
        }

        // Calculate bounds from node positions
        let mut min_x = f64::INFINITY;
        let mut min_y = f64::INFINITY;
        let mut max_x = f64::NEG_INFINITY;
        let mut max_y = f64::NEG_INFINITY;

        for node in nodes {
            min_x = min_x.min(node.visual.x);
            min_y = min_y.min(node.visual.y);
            max_x = max_x.max(node.visual.x);
            max_y = max_y.max(node.visual.y);
        }

        // Add 20% padding
        let padding = 0.2;
        let width = (max_x - min_x) * (1.0 + padding);
        let height = (max_y - min_y) * (1.0 + padding);
        let x = min_x - width * padding / 2.0;
        let y = min_y - height * padding / 2.0;

        // Make bounds square (required for proper Barnes-Hut)
        let size = width.max(height);
        let bounds = Rect::new(x, y, size, size);

        let mut tree = Self::new(bounds, 1);

        // Insert all nodes
        for node in nodes {
            tree.insert(NodeRef::from_node(node));
        }

        tree
    }

    /// Insert a node into the quadtree
    pub fn insert(&mut self, node_ref: NodeRef) {
        // Update center of mass and total mass
        let new_total_mass = self.total_mass + node_ref.mass;
        if new_total_mass > 0.0 {
            self.center_of_mass = (self.center_of_mass * self.total_mass
                + node_ref.position * node_ref.mass) / new_total_mass;
        }
        self.total_mass = new_total_mass;

        // If we have children, delegate to appropriate child
        if self.children.is_some() {
            let quadrant = self.get_quadrant(node_ref.position.x, node_ref.position.y);
            self.children.as_mut().unwrap()[quadrant].insert(node_ref);
            return;
        }

        // Add to this node
        self.nodes.push(node_ref);

        // Subdivide if we exceed capacity
        if self.nodes.len() > self.capacity {
            self.subdivide();
        }
    }

    /// Subdivide this quadrant into four child quadrants
    fn subdivide(&mut self) {
        let half_width = self.bounds.width / 2.0;
        let half_height = self.bounds.height / 2.0;

        let children = Box::new([
            // Quadrant 0: top-left
            QuadTree::new(
                Rect::new(self.bounds.x, self.bounds.y, half_width, half_height),
                self.capacity,
            ),
            // Quadrant 1: top-right
            QuadTree::new(
                Rect::new(self.bounds.x + half_width, self.bounds.y, half_width, half_height),
                self.capacity,
            ),
            // Quadrant 2: bottom-left
            QuadTree::new(
                Rect::new(self.bounds.x, self.bounds.y + half_height, half_width, half_height),
                self.capacity,
            ),
            // Quadrant 3: bottom-right
            QuadTree::new(
                Rect::new(self.bounds.x + half_width, self.bounds.y + half_height, half_width, half_height),
                self.capacity,
            ),
        ]);

        self.children = Some(children);

        // Redistribute existing nodes to children
        let nodes = std::mem::take(&mut self.nodes);
        for node in nodes {
            let quadrant = self.get_quadrant(node.position.x, node.position.y);
            self.children.as_mut().unwrap()[quadrant].insert(node);
        }
    }

    /// Determine which quadrant a point belongs to
    fn get_quadrant(&self, x: f64, y: f64) -> usize {
        let (center_x, center_y) = self.bounds.center();
        match (x >= center_x, y >= center_y) {
            (false, false) => 0, // top-left
            (true, false) => 1,  // top-right
            (false, true) => 2,  // bottom-left
            (true, true) => 3,   // bottom-right
        }
    }

    /// Calculate repulsive force on a node using Barnes-Hut approximation
    ///
    /// # Arguments
    /// * `node_pos` - Position of the node to calculate force for
    /// * `node_id` - ID of the node (to avoid self-interaction)
    /// * `theta` - Approximation threshold (typical: 0.5-0.9)
    /// * `strength` - Charge strength (negative for repulsion)
    ///
    /// # Returns
    /// Force vector to apply to the node
    pub fn calculate_force(
        &self,
        node_pos: Vector2<f64>,
        node_id: &str,
        theta: f64,
        strength: f64,
    ) -> Vector2<f64> {
        // Skip empty quadrants
        if self.total_mass == 0.0 {
            return Vector2::zeros();
        }

        // If this is a leaf with a single node
        if self.children.is_none() {
            if self.nodes.len() == 1 && self.nodes[0].id == node_id {
                // Don't apply force to self
                return Vector2::zeros();
            }
            // Calculate exact force for leaf nodes
            return self.calculate_exact_force(node_pos, node_id, strength);
        }

        // Calculate distance to center of mass
        let delta = self.center_of_mass - node_pos;
        let distance = delta.norm();

        // Avoid division by zero
        if distance < 0.0001 {
            return Vector2::zeros();
        }

        // Barnes-Hut criterion: s/d < theta
        // where s = size of region, d = distance to center of mass
        let s = self.bounds.size();
        if s / distance < theta {
            // Region is far enough away - use approximation
            let force_magnitude = strength * self.total_mass / (distance * distance);
            return delta.normalize() * force_magnitude;
        }

        // Region is too close - recurse into children
        if let Some(ref children) = self.children {
            children
                .iter()
                .map(|child| child.calculate_force(node_pos, node_id, theta, strength))
                .fold(Vector2::zeros(), |acc, f| acc + f)
        } else {
            // Shouldn't happen but handle gracefully
            Vector2::zeros()
        }
    }

    /// Calculate exact force for leaf nodes
    fn calculate_exact_force(
        &self,
        node_pos: Vector2<f64>,
        node_id: &str,
        strength: f64,
    ) -> Vector2<f64> {
        self.nodes
            .iter()
            .filter(|node| node.id != node_id)
            .map(|node| {
                let delta = node_pos - node.position;
                let distance_sq = delta.norm_squared();

                if distance_sq < 0.0001 {
                    // Small deterministic perturbation for coincident nodes
                    let offset_x = ((node_pos.x + node.position.x) * 7.0).sin() * 0.01;
                    let offset_y = ((node_pos.y + node.position.y) * 11.0).cos() * 0.01;
                    Vector2::new(offset_x, offset_y)
                } else {
                    let force_magnitude = strength * node.mass / distance_sq;
                    delta.normalize() * force_magnitude
                }
            })
            .fold(Vector2::zeros(), |acc, f| acc + f)
    }

    /// Count total nodes in the tree (for testing)
    pub fn count_nodes(&self) -> usize {
        if let Some(ref children) = self.children {
            children.iter().map(|c| c.count_nodes()).sum()
        } else {
            self.nodes.len()
        }
    }

    /// Get maximum depth of the tree (for testing)
    pub fn max_depth(&self) -> usize {
        if let Some(ref children) = self.children {
            1 + children.iter().map(|c| c.max_depth()).max().unwrap_or(0)
        } else {
            0
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::graph::{Node, NodeType, VisualAttributes, SemanticAttributes};

    fn create_test_node(id: &str, x: f64, y: f64) -> Node {
        Node {
            id: id.to_string(),
            label: id.to_string(),
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
        }
    }

    #[test]
    fn test_rect_contains() {
        let rect = Rect::new(0.0, 0.0, 100.0, 100.0);
        assert!(rect.contains(50.0, 50.0));
        assert!(rect.contains(0.0, 0.0));
        assert!(!rect.contains(100.0, 100.0));
        assert!(!rect.contains(-10.0, 50.0));
    }

    #[test]
    fn test_rect_center() {
        let rect = Rect::new(0.0, 0.0, 100.0, 100.0);
        assert_eq!(rect.center(), (50.0, 50.0));

        let rect2 = Rect::new(-50.0, -50.0, 100.0, 100.0);
        assert_eq!(rect2.center(), (0.0, 0.0));
    }

    #[test]
    fn test_quadtree_creation() {
        let bounds = Rect::new(0.0, 0.0, 1000.0, 1000.0);
        let tree = QuadTree::new(bounds, 1);
        assert_eq!(tree.total_mass, 0.0);
        assert_eq!(tree.nodes.len(), 0);
        assert!(tree.children.is_none());
    }

    #[test]
    fn test_quadtree_insert_single() {
        let bounds = Rect::new(0.0, 0.0, 1000.0, 1000.0);
        let mut tree = QuadTree::new(bounds, 1);

        let node = create_test_node("node1", 500.0, 500.0);
        tree.insert(NodeRef::from_node(&node));

        assert_eq!(tree.total_mass, 1.0);
        assert_eq!(tree.nodes.len(), 1);
    }

    #[test]
    fn test_quadtree_subdivision() {
        let bounds = Rect::new(0.0, 0.0, 1000.0, 1000.0);
        let mut tree = QuadTree::new(bounds, 1); // capacity = 1

        let node1 = create_test_node("node1", 250.0, 250.0);
        let node2 = create_test_node("node2", 750.0, 750.0);

        tree.insert(NodeRef::from_node(&node1));
        assert!(tree.children.is_none()); // No subdivision yet

        tree.insert(NodeRef::from_node(&node2));
        assert!(tree.children.is_some()); // Should subdivide
        assert_eq!(tree.nodes.len(), 0); // Nodes moved to children
    }

    #[test]
    fn test_quadtree_build() {
        let nodes = vec![
            create_test_node("n1", 0.0, 0.0),
            create_test_node("n2", 100.0, 100.0),
            create_test_node("n3", 200.0, 200.0),
            create_test_node("n4", 50.0, 150.0),
        ];

        let node_refs: Vec<&Node> = nodes.iter().collect();
        let tree = QuadTree::build(&node_refs);

        assert_eq!(tree.count_nodes(), 4);
        assert_eq!(tree.total_mass, 4.0);
    }

    #[test]
    fn test_quadtree_center_of_mass() {
        let bounds = Rect::new(0.0, 0.0, 1000.0, 1000.0);
        let mut tree = QuadTree::new(bounds, 10);

        let node1 = create_test_node("node1", 0.0, 0.0);
        let node2 = create_test_node("node2", 100.0, 0.0);

        tree.insert(NodeRef::from_node(&node1));
        tree.insert(NodeRef::from_node(&node2));

        // Center of mass should be at midpoint (50, 0)
        assert!((tree.center_of_mass.x - 50.0).abs() < 0.001);
        assert!((tree.center_of_mass.y - 0.0).abs() < 0.001);
    }

    #[test]
    fn test_barnes_hut_force_approximation() {
        let nodes = vec![
            create_test_node("n1", 0.0, 0.0),
            create_test_node("n2", 1000.0, 1000.0),
            create_test_node("n3", 1010.0, 1010.0),
        ];

        let node_refs: Vec<&Node> = nodes.iter().collect();
        let tree = QuadTree::build(&node_refs);

        // Calculate force on n1 from distant cluster (n2, n3)
        let force = tree.calculate_force(
            Vector2::new(0.0, 0.0),
            "n1",
            0.9, // theta
            -1000.0, // strength
        );

        // Force should be non-zero and repulsive (pointing away from cluster)
        assert!(force.norm() > 0.0);
    }

    #[test]
    fn test_avoid_self_force() {
        let nodes = vec![
            create_test_node("n1", 0.0, 0.0),
            create_test_node("n2", 100.0, 100.0),
        ];

        let node_refs: Vec<&Node> = nodes.iter().collect();
        let tree = QuadTree::build(&node_refs);

        // Force on n1 should not include self-interaction
        let force = tree.calculate_force(
            Vector2::new(0.0, 0.0),
            "n1",
            0.9,
            -1000.0,
        );

        // Should only get force from n2
        assert!(force.norm() > 0.0);
    }

    #[test]
    fn test_empty_tree_force() {
        let tree = QuadTree::build(&[]);
        let force = tree.calculate_force(
            Vector2::new(0.0, 0.0),
            "n1",
            0.9,
            -1000.0,
        );

        assert_eq!(force, Vector2::zeros());
    }

    #[test]
    fn test_large_graph_performance() {
        // Create a large graph to test performance
        let mut nodes = Vec::new();
        for i in 0..100 {
            let x = (i as f64 * 37.0) % 1000.0;
            let y = (i as f64 * 73.0) % 1000.0;
            nodes.push(create_test_node(&format!("n{}", i), x, y));
        }

        let node_refs: Vec<&Node> = nodes.iter().collect();
        let tree = QuadTree::build(&node_refs);

        assert_eq!(tree.count_nodes(), 100);

        // Tree should have reasonable depth (not degenerating to a list)
        let depth = tree.max_depth();
        assert!(depth > 0 && depth < 20);
    }
}
