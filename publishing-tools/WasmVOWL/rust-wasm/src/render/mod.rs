//! Rendering utilities for SVG and Canvas output

use crate::Result;
use crate::graph::{VowlGraph, Node, Edge};

/// Trait for rendering graphs
#[cfg_attr(test, mockall::automock)]
pub trait Renderer {
    /// Render the graph to a string format
    fn render(&self, graph: &VowlGraph) -> Result<String>;

    /// Render a specific node
    fn render_node(&self, node: &Node) -> Result<String>;

    /// Render a specific edge
    fn render_edge(&self, edge: &Edge, from: &Node, to: &Node) -> Result<String>;
}

/// SVG renderer for graphs
pub struct SvgRenderer {
    width: f64,
    height: f64,
    padding: f64,
}

impl SvgRenderer {
    /// Create a new SVG renderer
    pub fn new(width: f64, height: f64) -> Self {
        Self {
            width,
            height,
            padding: 20.0,
        }
    }

    /// Set padding
    pub fn with_padding(mut self, padding: f64) -> Self {
        self.padding = padding;
        self
    }

    /// Generate SVG header
    fn svg_header(&self) -> String {
        format!(
            r#"<svg width="{}" height="{}" xmlns="http://www.w3.org/2000/svg">"#,
            self.width, self.height
        )
    }

    /// Generate SVG footer
    fn svg_footer(&self) -> &str {
        "</svg>"
    }

    // Removed unused normalize_coords method
    // This was causing dead_code warnings in CI builds
    // Can be re-added if SVG rendering is implemented in the future
}

impl Renderer for SvgRenderer {
    fn render(&self, graph: &VowlGraph) -> Result<String> {
        let mut svg = String::new();

        svg.push_str(&self.svg_header());
        svg.push_str("\n  <g id=\"edges\">\n");

        // Render edges (behind nodes)
        // Note: This is simplified - proper implementation would need edge-node mapping
        for edge in graph.edges() {
            svg.push_str("    <!-- Edge: ");
            svg.push_str(&edge.label);
            svg.push_str(" -->\n");
        }

        svg.push_str("  </g>\n  <g id=\"nodes\">\n");

        // Render nodes
        for node in graph.nodes() {
            svg.push_str(&format!("    {}\n", self.render_node(node)?));
        }

        svg.push_str("  </g>\n");
        svg.push_str(self.svg_footer());

        Ok(svg)
    }

    fn render_node(&self, node: &Node) -> Result<String> {
        // Simplified rendering - actual implementation would have more styling
        let radius = 20.0;
        let color = node.visual.color.as_deref().unwrap_or("#4CAF50");

        Ok(format!(
            r##"<g id="{}">
      <circle cx="{}" cy="{}" r="{}" fill="{}" stroke="{{0}}" stroke-width="2"/>
      <text x="{}" y="{}" text-anchor="middle" dy="{{1}}" font-size="12" fill="{{0}}">{}</text>
    </g>"##,
            node.id,
            node.visual.x,
            node.visual.y,
            radius,
            color,
            node.visual.x,
            node.visual.y + radius + 15.0,
            node.label
        ).replace("{0}", "#333").replace("{1}", ".3em"))
    }

    fn render_edge(&self, _edge: &Edge, from: &Node, to: &Node) -> Result<String> {
        Ok(format!(
            r##"<line x1="{}" y1="{}" x2="{}" y2="{}" stroke="{{0}}" stroke-width="1.5" marker-end="url({{1}})"/>"##,
            from.visual.x, from.visual.y, to.visual.x, to.visual.y
        ).replace("{0}", "#999").replace("{1}", "#arrow"))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::graph::node::NodeBuilder;

    #[test]
    fn test_svg_renderer_creation() {
        let renderer = SvgRenderer::new(800.0, 600.0);
        assert_eq!(renderer.width, 800.0);
        assert_eq!(renderer.height, 600.0);
    }

    #[test]
    fn test_svg_header() {
        let renderer = SvgRenderer::new(800.0, 600.0);
        let header = renderer.svg_header();
        assert!(header.contains("800"));
        assert!(header.contains("600"));
    }

    #[test]
    fn test_render_node() {
        let renderer = SvgRenderer::new(800.0, 600.0);
        let node = NodeBuilder::new("test")
            .label("Test Node")
            .position(100.0, 100.0)
            .build();

        let svg = renderer.render_node(&node).unwrap();
        assert!(svg.contains("Test Node"));
        assert!(svg.contains("circle"));
    }

    #[test]
    fn test_render_empty_graph() {
        let renderer = SvgRenderer::new(800.0, 600.0);
        let graph = VowlGraph::new();

        let result = renderer.render(&graph);
        assert!(result.is_ok());

        let svg = result.unwrap();
        assert!(svg.contains("<svg"));
        assert!(svg.contains("</svg>"));
    }
}
