//! WebVOWL WASM - High-performance ontology visualization
//!
//! This library provides a Rust/WASM implementation of WebVOWL,
//! offering significant performance improvements over the JavaScript version.

#![deny(missing_docs)]
#![deny(unsafe_code)]

pub mod ontology;
pub mod graph;
pub mod layout;
pub mod render;
pub mod bindings;
pub mod interaction;
pub mod debug;

mod error;

pub use error::{Result, VowlError};

use wasm_bindgen::prelude::*;

/// Initialize panic hook for better error messages in WASM
#[wasm_bindgen(start)]
pub fn init() {
    // Panic hook disabled - feature not configured in Cargo.toml
    // #[cfg(feature = "console_error_panic_hook")]
    // console_error_panic_hook::set_once();
}

/// Version information
#[wasm_bindgen]
pub fn version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}
