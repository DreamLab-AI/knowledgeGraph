// Public modules
pub mod parser;
pub mod graph;
pub mod optimizer;
pub mod exporter;
pub mod owl_extractor;
pub mod api_generator;

// N-API bindings (disabled temporarily - needs fixes)
// #[cfg(not(target_arch = "wasm32"))]
// pub mod napi_bindings;

// Re-export commonly used types
pub use parser::{Page, Block, parse_logseq_page};
pub use graph::{Graph, GraphStats, GraphData};
pub use exporter::{ExportConfig, PageMetadata, extract_metadata, generate_index_html};
pub use api_generator::{ApiGenerator, ApiGeneratorConfig, PageData, SearchDocument};

// Re-export N-API functions (disabled temporarily - needs fixes)
// #[cfg(not(target_arch = "wasm32"))]
// pub use napi_bindings::{export_logseq_graph, parse_page, get_version, ExportOptions, ExportResult};

// WASM bindings
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
use std::collections::HashMap;

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

/// Main entry point for WASM
#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub struct LogseqPublisher {
    graph: graph::Graph,
}

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
impl LogseqPublisher {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        #[cfg(feature = "console_error_panic_hook")]
        console_error_panic_hook::set_once();

        Self {
            graph: graph::Graph::new(),
        }
    }

    /// Parse Logseq markdown files and build graph
    #[wasm_bindgen]
    pub fn parse_files(&mut self, files_json: &str) -> Result<String, JsValue> {
        let files: HashMap<String, String> = serde_json::from_str(files_json)
            .map_err(|e| JsValue::from_str(&format!("JSON parse error: {}", e)))?;

        for (path, content) in files {
            let page = parser::parse_logseq_page(&content, &path)
                .map_err(|e| JsValue::from_str(&format!("Parse error: {}", e)))?;
            self.graph.add_page(page);
        }

        Ok(serde_json::to_string(&self.graph.stats())
            .map_err(|e| JsValue::from_str(&format!("Serialization error: {}", e)))?)
    }

    /// Get page by path
    #[wasm_bindgen]
    pub fn get_page(&self, path: &str) -> Result<String, JsValue> {
        let page = self.graph.get_page(path)
            .ok_or_else(|| JsValue::from_str("Page not found"))?;

        serde_json::to_string(page)
            .map_err(|e| JsValue::from_str(&format!("Serialization error: {}", e)))
    }

    /// Get all backlinks for a page
    #[wasm_bindgen]
    pub fn get_backlinks(&self, path: &str) -> Result<String, JsValue> {
        let backlinks = self.graph.get_backlinks(path);
        serde_json::to_string(&backlinks)
            .map_err(|e| JsValue::from_str(&format!("Serialization error: {}", e)))
    }

    /// Export to HTML
    #[wasm_bindgen]
    pub fn export_html(&self, config_json: &str) -> Result<String, JsValue> {
        let config: exporter::ExportConfig = serde_json::from_str(config_json)
            .map_err(|e| JsValue::from_str(&format!("Config parse error: {}", e)))?;

        let html = exporter::export_to_html(&self.graph, &config)
            .map_err(|e| JsValue::from_str(&format!("Export error: {}", e)))?;

        Ok(html)
    }

    /// Optimize assets
    #[wasm_bindgen]
    pub fn optimize_assets(&self, assets_json: &str) -> Result<String, JsValue> {
        let assets: Vec<String> = serde_json::from_str(assets_json)
            .map_err(|e| JsValue::from_str(&format!("JSON parse error: {}", e)))?;

        let optimized = optimizer::optimize_assets(&assets)
            .map_err(|e| JsValue::from_str(&format!("Optimization error: {}", e)))?;

        serde_json::to_string(&optimized)
            .map_err(|e| JsValue::from_str(&format!("Serialization error: {}", e)))
    }
}

#[cfg(all(test, target_arch = "wasm32"))]
mod tests {
    use super::*;

    #[test]
    fn test_publisher_creation() {
        let publisher = LogseqPublisher::new();
        assert_eq!(publisher.graph.page_count(), 0);
    }
}

// napi-rs bindings (conditional compilation)
#[cfg(feature = "napi")]
pub mod napi_bindings;
