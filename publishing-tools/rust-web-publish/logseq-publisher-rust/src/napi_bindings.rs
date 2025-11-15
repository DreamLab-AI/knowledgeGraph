#[cfg(feature = "napi")]
use napi::bindgen_prelude::*;
#[cfg(feature = "napi")]
use napi_derive::napi;

use crate::owl_extractor::{
    load_webvowl_ontology, save_ontology, get_ontology_stats, WebVOWLOntology, OntologyStats,
};
use std::path::Path;

#[cfg(feature = "napi")]
#[napi(object)]
pub struct ExportResult {
    pub pages_count: u32,
    pub ontology_count: u32,
    pub output_dir: String,
}

#[cfg(feature = "napi")]
#[napi(object)]
pub struct OntologyStatsJS {
    pub class_count: u32,
    pub property_count: u32,
    pub namespace_count: u32,
    pub title: String,
    pub version: String,
}

impl From<OntologyStats> for OntologyStatsJS {
    fn from(stats: OntologyStats) -> Self {
        OntologyStatsJS {
            class_count: stats.class_count as u32,
            property_count: stats.property_count as u32,
            namespace_count: stats.namespace_count as u32,
            title: stats.title,
            version: stats.version,
        }
    }
}

/// Export unified knowledge graph with pages and ontology
#[cfg(feature = "napi")]
#[napi]
pub fn export_unified_graph(
    pages_dir: String,
    output_dir: String,
) -> Result<ExportResult> {
    // Create output directory
    std::fs::create_dir_all(&output_dir)
        .map_err(|e| Error::from_reason(format!("Failed to create output directory: {}", e)))?;

    // Look for existing ontology file
    let ontology_path = Path::new("/home/user/logseq/narrativegoldmine-ontology.json");

    let ontology_count = if ontology_path.exists() {
        let ontology = load_webvowl_ontology(ontology_path)
            .map_err(|e| Error::from_reason(format!("Failed to load ontology: {}", e)))?;

        let stats = get_ontology_stats(&ontology);
        let ontology_output = Path::new(&output_dir).join("ontology.json");

        save_ontology(&ontology, &ontology_output)
            .map_err(|e| Error::from_reason(format!("Failed to save ontology: {}", e)))?;

        stats.class_count as u32
    } else {
        0
    };

    Ok(ExportResult {
        pages_count: 0, // This would be filled by actual page export logic
        ontology_count,
        output_dir,
    })
}

/// Load and get statistics from an ontology file
#[cfg(feature = "napi")]
#[napi]
pub fn get_ontology_statistics(ontology_path: String) -> Result<OntologyStatsJS> {
    let ontology = load_webvowl_ontology(&ontology_path)
        .map_err(|e| Error::from_reason(format!("Failed to load ontology: {}", e)))?;

    let stats = get_ontology_stats(&ontology);
    Ok(stats.into())
}

/// Export ontology to JSON format
#[cfg(feature = "napi")]
#[napi]
pub fn export_ontology_json(
    input_path: String,
    output_path: String,
) -> Result<OntologyStatsJS> {
    let ontology = load_webvowl_ontology(&input_path)
        .map_err(|e| Error::from_reason(format!("Failed to load ontology: {}", e)))?;

    save_ontology(&ontology, &output_path)
        .map_err(|e| Error::from_reason(format!("Failed to save ontology: {}", e)))?;

    let stats = get_ontology_stats(&ontology);
    Ok(stats.into())
}

/// Get the version of logseq-publisher
#[cfg(feature = "napi")]
#[napi]
pub fn get_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}
