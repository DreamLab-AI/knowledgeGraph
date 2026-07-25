//! WASM bindings for JavaScript interop

pub mod explorer;

use crate::{
    graph::{builder::GraphBuilder, pinning::PinManager, VowlGraph, GraphStatistics},
    interaction::{find_closest_node_hit, NodeHitTest, Ray},
    layout::{simulation::ForceSimulation, LayoutAlgorithm},
    ontology::{
        parser::StandardParser,
        markdown_parser::MarkdownParser,
        owl2_validator::ValidationResult,
        OntologyParser,
        OntologyBlock,
    },
};
use nalgebra::Vector3;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

/// Main WebVOWL WASM interface
#[wasm_bindgen]
pub struct WebVowl {
    graph: Option<VowlGraph>,
    simulation: ForceSimulation,
    pin_manager: PinManager,
}

#[wasm_bindgen]
impl WebVowl {
    /// Create a new WebVOWL instance
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            graph: None,
            simulation: ForceSimulation::new(),
            pin_manager: PinManager::new(),
        }
    }

    /// Load ontology from JSON string
    #[wasm_bindgen(js_name = loadOntology)]
    pub fn load_ontology(&mut self, json: &str) -> std::result::Result<(), JsValue> {
        let parser = StandardParser::new();
        let ontology_data = parser
            .parse(json)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        parser
            .validate(&ontology_data)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        let graph = GraphBuilder::from_ontology(&ontology_data)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        self.graph = Some(graph);
        Ok(())
    }

    /// Parse markdown ontology block and return structured data
    ///
    /// This parses a single markdown ontology block in the new standardized format.
    /// Returns a JSON object with the parsed ontology data including:
    /// - Full IRI
    /// - Term ID and preferred term
    /// - Domain classification
    /// - Core properties
    /// - Domain-specific extension properties
    /// - OWL axioms (if present)
    ///
    /// # Example (JavaScript)
    /// ```javascript
    /// const ontologyData = webvowl.parseMarkdownOntology(markdownContent);
    /// console.log(ontologyData);
    /// // {
    /// //   iri: "http://narrativegoldmine.com/ai#LargeLanguageModel",
    /// //   termId: "AI-0850",
    /// //   preferredTerm: "Large Language Models",
    /// //   domain: "ai",
    /// //   ...
    /// // }
    /// ```
    #[wasm_bindgen(js_name = parseMarkdownOntology)]
    pub fn parse_markdown_ontology(&self, markdown: &str) -> std::result::Result<JsValue, JsValue> {
        let parser = MarkdownParser::new();
        let ontology_block = parser
            .parse(markdown)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        // Convert to serializable format
        let data = MarkdownOntologyData::from_block(&ontology_block);
        serde_wasm_bindgen::to_value(&data).map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Validate markdown ontology content for OWL2 best practices
    ///
    /// This validates a markdown ontology block according to OWL2 best practices:
    /// - IRI format validation (W3C IRI specification)
    /// - IRI uniqueness checking
    /// - Namespace validation
    /// - OWL2 DL profile compliance
    /// - Common antipattern detection
    ///
    /// Returns a JSON object with validation results:
    /// - valid: boolean indicating if the ontology passes validation
    /// - errors: array of critical error messages
    /// - warnings: array of best practice warnings
    ///
    /// # Example (JavaScript)
    /// ```javascript
    /// const result = webvowl.validateOWL2(markdownContent);
    /// console.log(result);
    /// // {
    /// //   valid: true,
    /// //   errors: [],
    /// //   warnings: ["Missing version information for change tracking"]
    /// // }
    /// ```
    #[wasm_bindgen(js_name = validateOWL2)]
    pub fn validate_owl2(&self, markdown: &str) -> std::result::Result<JsValue, JsValue> {
        let mut parser = MarkdownParser::new();

        // Parse the markdown
        let ontology_block = parser
            .parse(markdown)
            .map_err(|e| {
                // Return a validation result with parse error
                let mut result = ValidationResult::new();
                result.add_error(format!("Parse error: {}", e));
                return serde_wasm_bindgen::to_value(&ValidationResultData::from_result(&result))
                    .unwrap_or_else(|_| JsValue::from_str("{}"));
            })?;

        // Validate the block
        let validation = parser.validate(&ontology_block);

        // Convert to serializable format
        let data = ValidationResultData::from_result(&validation);
        serde_wasm_bindgen::to_value(&data).map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Initialize the force simulation
    #[wasm_bindgen(js_name = initSimulation)]
    pub fn init_simulation(&mut self) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.simulation
            .initialize(graph)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        Ok(())
    }

    /// Run simulation for n iterations
    #[wasm_bindgen(js_name = runSimulation)]
    pub fn run_simulation(&mut self, iterations: usize) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.simulation
            .run(graph, iterations)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        Ok(())
    }

    /// Perform one simulation tick
    #[wasm_bindgen(js_name = tick)]
    pub fn tick(&mut self) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.simulation
            .tick(graph)
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        Ok(())
    }

    /// Check if simulation is finished
    #[wasm_bindgen(js_name = isFinished)]
    pub fn is_finished(&self) -> bool {
        self.simulation.is_finished()
    }

    /// Get current alpha value
    #[wasm_bindgen(js_name = getAlpha)]
    pub fn get_alpha(&self) -> f64 {
        self.simulation.alpha()
    }

    /// Set simulation center
    #[wasm_bindgen(js_name = setCenter)]
    pub fn set_center(&mut self, x: f64, y: f64) {
        self.simulation.set_center(x, y);
    }

    /// Set link distance
    #[wasm_bindgen(js_name = setLinkDistance)]
    pub fn set_link_distance(&mut self, distance: f64) {
        self.simulation.set_link_distance(distance);
    }

    /// Set charge strength
    #[wasm_bindgen(js_name = setChargeStrength)]
    pub fn set_charge_strength(&mut self, strength: f64) {
        self.simulation.set_charge_strength(strength);
    }

    /// Filter hierarchy by depth
    #[wasm_bindgen(js_name = filterHierarchy)]
    pub fn filter_hierarchy(&mut self, depth: usize) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph.apply_hierarchy_folding(depth);
        Ok(())
    }

    /// Get graph data as JSON.
    ///
    /// Full-graph serde serialisation across the WASM boundary — the O(n) hot
    /// path deleted from the NarrativeGoldmine explorer (ADR-NG-001 §3). Retained
    /// only behind the `debug-serde` feature for diagnostics; the live explorer
    /// reads positions zero-copy via `NggExplorer::positions_ptr` instead.
    #[cfg(feature = "debug-serde")]
    #[wasm_bindgen(js_name = getGraphData)]
    pub fn get_graph_data(&self) -> std::result::Result<JsValue, JsValue> {
        let graph = self
            .graph
            .as_ref()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        let data = GraphData::from_graph(graph);
        serde_wasm_bindgen::to_value(&data).map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Get node count
    #[wasm_bindgen(js_name = getNodeCount)]
    pub fn get_node_count(&self) -> usize {
        self.graph.as_ref().map(|g| g.node_count()).unwrap_or(0)
    }

    /// Get edge count
    #[wasm_bindgen(js_name = getEdgeCount)]
    pub fn get_edge_count(&self) -> usize {
        self.graph.as_ref().map(|g| g.edge_count()).unwrap_or(0)
    }

    /// Get comprehensive graph statistics
    ///
    /// Returns detailed statistics including:
    /// - Basic metrics (node count, edge count, density)
    /// - Degree statistics (min, max, average, distribution)
    /// - Connected components analysis
    /// - OWL2 specific metrics (functional properties, equivalences, etc.)
    /// - Property distribution (by type)
    /// - Class distribution
    ///
    /// # Returns
    /// JSON object with complete graph statistics
    ///
    /// # Example (JavaScript)
    /// ```javascript
    /// const stats = webvowl.getStatistics();
    /// console.log(stats.basic.node_count);  // Total nodes
    /// console.log(stats.degree.avg_degree); // Average degree
    /// console.log(stats.owl2.functional_properties); // Functional property count
    /// ```
    #[wasm_bindgen(js_name = getStatistics)]
    pub fn get_statistics(&self) -> std::result::Result<JsValue, JsValue> {
        let graph = self
            .graph
            .as_ref()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        let graph_stats = GraphStatistics::calculate(graph);
        serde_wasm_bindgen::to_value(&graph_stats).map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Check which node (if any) is clicked by a ray from the camera
    ///
    /// This method performs ray-sphere intersection testing to determine
    /// which node was clicked in 3D space.
    ///
    /// # Arguments
    /// * `ray_origin` - Ray origin as [x, y, z] array
    /// * `ray_direction` - Ray direction as [x, y, z] array (will be normalized)
    ///
    /// # Returns
    /// * `Some(node_id)` - ID of the closest clicked node
    /// * `None` - No node was clicked
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// const nodeId = webvowl.checkNodeClick(
    ///     [0, 0, 10],  // Camera position
    ///     [0, 0, -1]   // Looking down -Z axis
    /// );
    /// if (nodeId) {
    ///     console.log(`Clicked node: ${nodeId}`);
    /// }
    /// ```
    ///
    /// # Performance
    /// This method is optimized for graphs with up to 1,000 nodes.
    /// For larger graphs, it should still complete in < 1ms on modern hardware.
    #[wasm_bindgen(js_name = checkNodeClick)]
    pub fn check_node_click(
        &self,
        ray_origin: Vec<f32>,
        ray_direction: Vec<f32>,
    ) -> Option<String> {
        // Validate input arrays
        if ray_origin.len() != 3 || ray_direction.len() != 3 {
            web_sys::console::warn_1(&JsValue::from_str(
                "checkNodeClick: ray_origin and ray_direction must have 3 elements",
            ));
            return None;
        }

        let graph = self.graph.as_ref()?;

        // Create ray from input arrays
        let ray = Ray::new(
            Vector3::new(ray_origin[0], ray_origin[1], ray_origin[2]),
            Vector3::new(ray_direction[0], ray_direction[1], ray_direction[2]),
        );

        // Default node radius for collision detection
        // In a real implementation, this could be configurable or per-node
        let node_radius = 20.0; // Matches typical visual size

        // Convert graph nodes to hit test format
        let nodes: Vec<NodeHitTest> = graph
            .nodes()
            .iter()
            .map(|node| NodeHitTest {
                id: node.id.clone(),
                position: Vector3::new(
                    node.visual.x as f32,
                    node.visual.y as f32,
                    0.0, // Z=0 for 2D layout, can be extended for 3D
                ),
                radius: node_radius,
            })
            .collect();

        // Find closest hit
        find_closest_node_hit(&ray, &nodes).map(|(id, _distance)| id)
    }

    /// Pin a node at a specific position
    ///
    /// Pinned nodes will not be moved by the force simulation.
    /// This is useful for allowing users to fix nodes in place.
    ///
    /// # Arguments
    /// * `node_id` - The ID of the node to pin
    /// * `x` - X coordinate to pin the node at
    /// * `y` - Y coordinate to pin the node at
    ///
    /// # Returns
    /// * `Ok(())` if the node was successfully pinned
    /// * `Err` if the node doesn't exist
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Pin a node at position (100, 200)
    /// webvowl.pinNode("node_1", 100, 200);
    ///
    /// // Run simulation - this node will stay at (100, 200)
    /// webvowl.runSimulation(50);
    /// ```
    #[wasm_bindgen(js_name = pinNode)]
    pub fn pin_node(&mut self, node_id: &str, x: f64, y: f64) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.pin_manager
            .pin_node_at(graph, node_id, x, y)
            .map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Unpin a node, allowing it to move freely
    ///
    /// # Arguments
    /// * `node_id` - The ID of the node to unpin
    ///
    /// # Returns
    /// * `Ok(())` if the node was successfully unpinned
    /// * `Err` if the node doesn't exist
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Unpin a previously pinned node
    /// webvowl.unpinNode("node_1");
    /// ```
    #[wasm_bindgen(js_name = unpinNode)]
    pub fn unpin_node(&mut self, node_id: &str) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.pin_manager
            .unpin_node(graph, node_id)
            .map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Check if a node is currently pinned
    ///
    /// # Arguments
    /// * `node_id` - The ID of the node to check
    ///
    /// # Returns
    /// * `true` if the node is pinned
    /// * `false` if the node is not pinned or doesn't exist
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// if (webvowl.isPinned("node_1")) {
    ///     console.log("Node is pinned");
    /// }
    /// ```
    #[wasm_bindgen(js_name = isPinned)]
    pub fn is_pinned(&self, node_id: &str) -> bool {
        self.pin_manager.is_pinned(node_id)
    }

    /// Unpin all nodes
    ///
    /// Removes all pins, allowing all nodes to move freely again.
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Reset all pinned nodes
    /// webvowl.resetPins();
    /// ```
    #[wasm_bindgen(js_name = resetPins)]
    pub fn reset_pins(&mut self) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        self.pin_manager.reset(graph);
        Ok(())
    }

    /// Get the number of currently pinned nodes
    ///
    /// # Returns
    /// * The count of pinned nodes
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// const count = webvowl.getPinnedCount();
    /// console.log(`${count} nodes are pinned`);
    /// ```
    #[wasm_bindgen(js_name = getPinnedCount)]
    pub fn get_pinned_count(&self) -> usize {
        self.pin_manager.pinned_count()
    }

    /// Filter nodes by minimum degree
    ///
    /// Filters the graph to show only nodes with at least the specified degree.
    /// Degree is calculated excluding datatype connections, focusing on structural
    /// relationships.
    ///
    /// # Arguments
    /// * `min_degree` - Minimum number of non-datatype connections required
    ///
    /// # Returns
    /// * `Ok(())` if filtering succeeded
    /// * `Err` if graph not loaded
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Show only nodes with 3+ connections
    /// webvowl.filterByDegree(3);
    /// ```
    #[wasm_bindgen(js_name = filterByDegree)]
    pub fn filter_by_degree(&mut self, min_degree: usize) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph
            .filter_by_degree(min_degree)
            .map_err(|e| JsValue::from_str(&format!("Filter error: {}", e)))
    }

    /// Toggle visibility of datatype nodes
    ///
    /// Show or hide all datatype nodes (e.g., xsd:string, xsd:int).
    /// This is useful for simplifying the visualization by hiding literal types.
    ///
    /// # Arguments
    /// * `visible` - true to show datatypes, false to hide them
    ///
    /// # Returns
    /// * `Ok(())` if toggle succeeded
    /// * `Err` if graph not loaded
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Hide all datatype nodes
    /// webvowl.toggleDatatypes(false);
    /// ```
    #[wasm_bindgen(js_name = toggleDatatypes)]
    pub fn toggle_datatypes(&mut self, visible: bool) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph
            .toggle_datatypes(visible)
            .map_err(|e| JsValue::from_str(&format!("Filter error: {}", e)))
    }

    /// Toggle visibility of set operator nodes
    ///
    /// Show or hide set operator nodes (union, intersection, complement).
    /// These represent complex class expressions in OWL ontologies.
    ///
    /// # Arguments
    /// * `visible` - true to show operators, false to hide them
    ///
    /// # Returns
    /// * `Ok(())` if toggle succeeded
    /// * `Err` if graph not loaded
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Hide set operators for simpler view
    /// webvowl.toggleSetOperators(false);
    /// ```
    #[wasm_bindgen(js_name = toggleSetOperators)]
    pub fn toggle_set_operators(&mut self, visible: bool) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph
            .toggle_set_operators(visible)
            .map_err(|e| JsValue::from_str(&format!("Filter error: {}", e)))
    }

    /// Reset all visibility filters
    ///
    /// Makes all nodes visible again, clearing any filters that were applied.
    ///
    /// # Returns
    /// * `Ok(())` if reset succeeded
    /// * `Err` if graph not loaded
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// // Clear all filters
    /// webvowl.resetVisibility();
    /// ```
    #[wasm_bindgen(js_name = resetVisibility)]
    pub fn reset_visibility(&mut self) -> std::result::Result<(), JsValue> {
        let graph = self
            .graph
            .as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph
            .reset_visibility()
            .map_err(|e| JsValue::from_str(&format!("Filter error: {}", e)))
    }

    /// Get node degree (excluding datatypes)
    ///
    /// Returns the number of non-datatype connections for a specific node.
    /// This is useful for understanding node importance in the ontology structure.
    ///
    /// # Arguments
    /// * `node_id` - The ID of the node
    ///
    /// # Returns
    /// * Number of non-datatype connections
    /// * `Err` if node doesn't exist or graph not loaded
    ///
    /// # Example (from JavaScript)
    /// ```javascript
    /// const degree = webvowl.getNodeDegree("class_1");
    /// console.log(`Node has ${degree} connections`);
    /// ```
    #[wasm_bindgen(js_name = getNodeDegree)]
    pub fn get_node_degree(&self, node_id: &str) -> std::result::Result<usize, JsValue> {
        let graph = self
            .graph
            .as_ref()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph
            .non_datatype_degree(node_id)
            .map_err(|e| JsValue::from_str(&format!("Degree error: {}", e)))
    }
}

/// Graph data for JSON export
#[cfg(feature = "debug-serde")]
#[derive(Debug, Clone, Serialize, Deserialize)]
struct GraphData {
    nodes: Vec<NodeData>,
    edges: Vec<EdgeData>,
}

#[cfg(feature = "debug-serde")]
#[derive(Debug, Clone, Serialize, Deserialize)]
struct NodeData {
    id: String,
    label: String,
    x: f64,
    y: f64,
    node_type: String,
    visible: bool,
    term_id: Option<String>,  // For linking to published pages
    iri: Option<String>,       // Full ontology IRI
}

#[cfg(feature = "debug-serde")]
#[derive(Debug, Clone, Serialize, Deserialize)]
struct EdgeData {
    id: String,
    label: String,
    source: String,
    target: String,
    edge_type: String,
    inverse_of: Option<String>,
    equivalent_to: Vec<String>,
    disjoint_with: Vec<String>,
}

#[cfg(feature = "debug-serde")]
impl GraphData {
    fn from_graph(graph: &VowlGraph) -> Self {
        let nodes = graph
            .nodes()
            .iter()
            .map(|n| NodeData {
                id: n.id.clone(),
                label: n.label.clone(),
                x: n.visual.x,
                y: n.visual.y,
                node_type: format!("{:?}", n.node_type),
                visible: n.visual.visible,
                term_id: n.semantic.ontology_meta.as_ref().map(|m| m.term_id.clone()),
                iri: Some(n.semantic.iri.clone()),
            })
            .collect();

        // ✅ FIX: Extract edges with proper source/target from graph topology
        // AND filter out edges connected to invisible nodes
        let edges = graph
            .edges_with_endpoints()
            .iter()
            .filter(|(_, source, target)| source.visual.visible && target.visual.visible)
            .map(|(edge, source, target)| EdgeData {
                id: edge.id.clone(),
                label: edge.label.clone(),
                source: source.id.clone(),
                target: target.id.clone(),
                edge_type: format!("{:?}", edge.edge_type),
                inverse_of: edge.inverse_of.clone(),
                equivalent_to: edge.equivalent_to.clone(),
                disjoint_with: edge.disjoint_with.clone(),
            })
            .collect();

        Self { nodes, edges }
    }
}

/// Markdown ontology data for JSON export
#[derive(Debug, Clone, Serialize, Deserialize)]
struct MarkdownOntologyData {
    iri: String,
    term_id: String,
    preferred_term: String,
    domain: String,
    core_properties: std::collections::HashMap<String, String>,
    extension_properties: std::collections::HashMap<String, String>,
    owl_axioms: Option<String>,
    is_public: bool,
    metadata: MarkdownMetadata,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct MarkdownMetadata {
    term_id: String,
    preferred_term: Option<String>,
    domain: Option<String>,
    maturity: Option<String>,
    status: Option<String>,
    authority_score: Option<f32>,
}

impl MarkdownOntologyData {
    fn from_block(block: &OntologyBlock) -> Self {
        Self {
            iri: block.iri.clone(),
            term_id: block.term_id.clone(),
            preferred_term: block.preferred_term.clone(),
            domain: block.domain.prefix().to_string(),
            core_properties: block.core_properties.clone(),
            extension_properties: block.extension_properties.clone(),
            owl_axioms: block.owl_axioms.clone(),
            is_public: block.is_public,
            metadata: MarkdownMetadata {
                term_id: block.metadata.term_id.clone(),
                preferred_term: block.metadata.preferred_term.clone(),
                domain: block.metadata.domain.clone(),
                maturity: block.metadata.maturity.clone(),
                status: block.metadata.status.clone(),
                authority_score: block.metadata.authority_score,
            },
        }
    }
}

/// Validation result data for JSON export
#[derive(Debug, Clone, Serialize, Deserialize)]
struct ValidationResultData {
    valid: bool,
    errors: Vec<String>,
    warnings: Vec<String>,
}

impl ValidationResultData {
    fn from_result(result: &ValidationResult) -> Self {
        Self {
            valid: result.valid,
            errors: result.errors.clone(),
            warnings: result.warnings.clone(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::*;

    #[wasm_bindgen_test]
    fn test_webvowl_creation() {
        let webvowl = WebVowl::new();
        assert_eq!(webvowl.get_node_count(), 0);
        assert_eq!(webvowl.get_edge_count(), 0);
    }

    #[wasm_bindgen_test]
    fn test_load_ontology() {
        let mut webvowl = WebVowl::new();

        let json = r#"
        {
            "class": [
                {
                    "id": "class1",
                    "label": "Class 1",
                    "type": "owl:Class"
                }
            ],
            "property": []
        }
        "#;

        let result = webvowl.load_ontology(json);
        assert!(result.is_ok());
        assert_eq!(webvowl.get_node_count(), 1);
    }
}
