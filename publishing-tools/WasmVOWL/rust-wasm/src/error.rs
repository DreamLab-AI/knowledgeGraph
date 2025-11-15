//! Error types for WebVOWL WASM

use thiserror::Error;
use wasm_bindgen::JsValue;

/// Result type alias for WebVOWL operations
pub type Result<T> = std::result::Result<T, VowlError>;

/// Error types that can occur in WebVOWL operations
#[derive(Error, Debug, Clone)]
pub enum VowlError {
    /// Error parsing OWL ontology
    #[error("Failed to parse ontology: {0}")]
    ParseError(String),

    /// Invalid ontology data
    #[error("Invalid ontology data: {0}")]
    InvalidData(String),

    /// Graph construction error
    #[error("Graph error: {0}")]
    GraphError(String),

    /// Layout computation error
    #[error("Layout error: {0}")]
    LayoutError(String),

    /// Rendering error
    #[error("Rendering error: {0}")]
    RenderError(String),

    /// WASM binding error
    #[error("Binding error: {0}")]
    BindingError(String),
}

impl From<VowlError> for JsValue {
    fn from(error: VowlError) -> Self {
        JsValue::from_str(&error.to_string())
    }
}

impl From<serde_json::Error> for VowlError {
    fn from(error: serde_json::Error) -> Self {
        VowlError::ParseError(error.to_string())
    }
}
