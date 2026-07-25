//! Unified Ontology Loader
//!
//! High-performance loader for ontology markdown files with caching, filtering,
//! and parallel processing capabilities.
//!
//! # Features
//!
//! - Load single files or entire directories
//! - Domain filtering (AI, Blockchain, Robotics, etc.)
//! - Term-ID pattern matching
//! - LRU caching for performance
//! - Parallel directory loading with rayon
//! - Comprehensive statistics
//!
//! # Example
//!
//! ```ignore
//! // Illustrative only — crate is `webvowl_wasm`, not `vowl`. Not compiled.
//! use vowl::ontology::loader::{OntologyLoader, LoaderConfig};
//! use std::path::Path;
//!
//! let config = LoaderConfig::default();
//! let mut loader = OntologyLoader::new(config);
//!
//! // Load single file
//! let block = loader.load_file(Path::new("ontology.md"))?;
//!
//! // Load directory with domain filter
//! let blocks = loader.load_directory(
//!     Path::new("pages/"),
//!     Some(Domain::AI)
//! )?;
//!
//! // Get statistics
//! let stats = loader.get_statistics(&blocks);
//! # Ok::<(), vowl::VowlError>(())
//! ```

use super::markdown_parser::MarkdownParser;
use super::{Domain, OntologyBlock};
use crate::{Result, VowlError};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use regex::Regex;

#[cfg(feature = "parallel")]
use rayon::prelude::*;

/// Configuration for the ontology loader
#[derive(Debug, Clone)]
pub struct LoaderConfig {
    /// Maximum number of files to cache (LRU)
    pub cache_size: usize,

    /// Skip blocks with validation errors
    pub strict_validation: bool,

    /// Use parallel loading for directories (requires 'parallel' feature)
    pub parallel_loading: bool,

    /// Glob pattern for markdown files
    pub file_pattern: String,

    /// Recursive directory search
    pub recursive: bool,
}

impl Default for LoaderConfig {
    fn default() -> Self {
        Self {
            cache_size: 128,
            strict_validation: false,
            parallel_loading: cfg!(feature = "parallel"),
            file_pattern: "*.md".to_string(),
            recursive: true,
        }
    }
}

/// Statistics for loaded ontology blocks
#[derive(Debug, Clone, Default)]
pub struct LoaderStatistics {
    /// Total blocks loaded
    pub total_blocks: usize,

    /// Blocks by domain
    pub by_domain: HashMap<Domain, usize>,

    /// Blocks by status
    pub by_status: HashMap<String, usize>,

    /// Cache hits
    pub cache_hits: usize,

    /// Cache misses
    pub cache_misses: usize,

    /// Load time in milliseconds
    pub load_time_ms: u128,
}

impl LoaderStatistics {
    /// Calculate cache hit rate
    pub fn cache_hit_rate(&self) -> f64 {
        let total = self.cache_hits + self.cache_misses;
        if total == 0 {
            0.0
        } else {
            self.cache_hits as f64 / total as f64
        }
    }

    /// Get domain counts as a formatted string
    pub fn domain_summary(&self) -> String {
        let mut summary = String::new();
        for (domain, count) in &self.by_domain {
            summary.push_str(&format!("  {}: {}\n", domain.prefix(), count));
        }
        summary
    }
}

/// High-performance ontology loader with caching
pub struct OntologyLoader {
    /// Markdown parser
    parser: MarkdownParser,

    /// Configuration
    config: LoaderConfig,

    /// File cache: path -> OntologyBlock
    cache: HashMap<PathBuf, Option<OntologyBlock>>,

    /// Cache statistics
    cache_hits: usize,
    cache_misses: usize,
}

impl OntologyLoader {
    /// Create a new loader with the given configuration
    pub fn new(config: LoaderConfig) -> Self {
        Self {
            parser: MarkdownParser::new(),
            config,
            cache: HashMap::with_capacity(128),
            cache_hits: 0,
            cache_misses: 0,
        }
    }

    /// Create a loader with default configuration
    pub fn default() -> Self {
        Self::new(LoaderConfig::default())
    }

    /// Load a single ontology file
    ///
    /// # Arguments
    ///
    /// * `path` - Path to the markdown file
    ///
    /// # Returns
    ///
    /// `Ok(Some(block))` if the file contains a valid ontology block,
    /// `Ok(None)` if no block found, or `Err` on I/O errors.
    pub fn load_file(&mut self, path: &Path) -> Result<Option<OntologyBlock>> {
        let path_buf = path.to_path_buf();

        // Check cache
        if let Some(cached) = self.cache.get(&path_buf) {
            self.cache_hits += 1;
            return Ok(cached.clone());
        }

        self.cache_misses += 1;

        // Read file
        let content = fs::read_to_string(path).map_err(|e| {
            VowlError::ParseError(format!("Failed to read file {:?}: {}", path, e))
        })?;

        // Parse ontology block
        let block = match self.parser.parse(&content) {
            Ok(block) => Some(block),
            Err(VowlError::ParseError(_)) => {
                // OntologyBlock not found or parsing failed
                None
            }
            Err(e) => return Err(e),
        };

        // Cache result (with LRU eviction)
        if self.cache.len() >= self.config.cache_size {
            // Simple eviction: remove first entry (not true LRU, but simple)
            if let Some(first_key) = self.cache.keys().next().cloned() {
                self.cache.remove(&first_key);
            }
        }

        self.cache.insert(path_buf, block.clone());

        Ok(block)
    }

    /// Load all ontology files from a directory
    ///
    /// # Arguments
    ///
    /// * `path` - Directory path
    /// * `domain` - Optional domain filter
    ///
    /// # Returns
    ///
    /// Vector of successfully loaded ontology blocks
    pub fn load_directory(
        &mut self,
        path: &Path,
        domain: Option<Domain>,
    ) -> Result<Vec<OntologyBlock>> {
        let _start = std::time::Instant::now();

        // Collect all markdown files
        let files = self.collect_files(path)?;

        // Load files (parallel or sequential)
        let blocks = if self.config.parallel_loading && cfg!(feature = "parallel") {
            self.load_files_parallel(&files)?
        } else {
            self.load_files_sequential(&files)?
        };

        // Apply domain filter
        let filtered = if let Some(d) = domain {
            blocks.into_iter().filter(|b| b.domain == d).collect()
        } else {
            blocks
        };

        Ok(filtered)
    }

    /// Load multiple specific files
    pub fn load_files(&mut self, paths: &[PathBuf]) -> Result<Vec<OntologyBlock>> {
        self.load_files_sequential(paths)
    }

    /// Filter blocks by domain
    pub fn filter_by_domain(
        &self,
        blocks: Vec<OntologyBlock>,
        domain: Domain,
    ) -> Vec<OntologyBlock> {
        blocks.into_iter().filter(|b| b.domain == domain).collect()
    }

    /// Filter blocks by term-id pattern
    pub fn filter_by_pattern(
        &self,
        blocks: Vec<OntologyBlock>,
        pattern: &str,
    ) -> Result<Vec<OntologyBlock>> {
        let regex = Regex::new(pattern)
            .map_err(|e| VowlError::ParseError(format!("Invalid regex: {}", e)))?;

        Ok(blocks
            .into_iter()
            .filter(|b| regex.is_match(&b.term_id))
            .collect())
    }

    /// Generate statistics for loaded blocks
    pub fn get_statistics(&self, blocks: &[OntologyBlock]) -> LoaderStatistics {
        let mut stats = LoaderStatistics {
            total_blocks: blocks.len(),
            cache_hits: self.cache_hits,
            cache_misses: self.cache_misses,
            ..Default::default()
        };

        for block in blocks {
            // Count by domain
            *stats.by_domain.entry(block.domain).or_insert(0) += 1;

            // Count by status (if present in metadata)
            if let Some(ref status) = block.metadata.status {
                *stats.by_status.entry(status.clone()).or_insert(0) += 1;
            }
        }

        stats
    }

    /// Create a term-id -> block lookup index
    pub fn create_term_index(
        &self,
        blocks: Vec<OntologyBlock>,
    ) -> HashMap<String, OntologyBlock> {
        blocks
            .into_iter()
            .map(|b| (b.term_id.clone(), b))
            .collect()
    }

    /// Group blocks by domain
    pub fn group_by_domain(
        &self,
        blocks: Vec<OntologyBlock>,
    ) -> HashMap<Domain, Vec<OntologyBlock>> {
        let mut groups: HashMap<Domain, Vec<OntologyBlock>> = HashMap::new();

        for block in blocks {
            groups.entry(block.domain).or_insert_with(Vec::new).push(block);
        }

        groups
    }

    /// Clear the file cache
    pub fn clear_cache(&mut self) {
        self.cache.clear();
        self.cache_hits = 0;
        self.cache_misses = 0;
    }

    /// Get cache statistics
    pub fn get_cache_stats(&self) -> (usize, usize, usize, f64) {
        let total = self.cache_hits + self.cache_misses;
        let hit_rate = if total == 0 {
            0.0
        } else {
            self.cache_hits as f64 / total as f64
        };

        (
            self.cache.len(),
            self.cache_hits,
            self.cache_misses,
            hit_rate,
        )
    }

    // Private helper methods

    /// Collect all markdown files from a directory
    fn collect_files(&self, path: &Path) -> Result<Vec<PathBuf>> {
        if !path.exists() {
            return Err(VowlError::ParseError(format!(
                "Directory not found: {:?}",
                path
            )));
        }

        let mut files = Vec::new();

        if self.config.recursive {
            self.collect_files_recursive(path, &mut files)?;
        } else {
            let entries = fs::read_dir(path).map_err(|e| {
                VowlError::ParseError(format!("Failed to read directory {:?}: {}", path, e))
            })?;

            for entry in entries {
                let entry = entry.map_err(|e| {
                    VowlError::ParseError(format!("Failed to read directory entry: {}", e))
                })?;
                let path = entry.path();
                if path.is_file() && self.matches_pattern(&path) {
                    files.push(path);
                }
            }
        }

        files.sort();
        Ok(files)
    }

    /// Recursively collect markdown files
    fn collect_files_recursive(&self, path: &Path, files: &mut Vec<PathBuf>) -> Result<()> {
        let entries = fs::read_dir(path).map_err(|e| {
            VowlError::ParseError(format!("Failed to read directory {:?}: {}", path, e))
        })?;

        for entry in entries {
            let entry = entry.map_err(|e| {
                VowlError::ParseError(format!("Failed to read directory entry: {}", e))
            })?;
            let path = entry.path();

            if path.is_dir() {
                self.collect_files_recursive(&path, files)?;
            } else if path.is_file() && self.matches_pattern(&path) {
                files.push(path);
            }
        }

        Ok(())
    }

    /// Check if a file matches the configured pattern
    fn matches_pattern(&self, path: &Path) -> bool {
        if let Some(ext) = path.extension() {
            if ext == "md" {
                return true;
            }
        }
        false
    }

    /// Load files sequentially
    fn load_files_sequential(&mut self, files: &[PathBuf]) -> Result<Vec<OntologyBlock>> {
        let mut blocks = Vec::new();

        for file in files {
            if let Some(block) = self.load_file(file)? {
                blocks.push(block);
            }
        }

        Ok(blocks)
    }

    /// Load files in parallel (requires 'parallel' feature)
    #[cfg(feature = "parallel")]
    fn load_files_parallel(&mut self, files: &[PathBuf]) -> Result<Vec<OntologyBlock>> {
        // Note: We can't use self.cache in parallel without Mutex
        // For now, just use parallel parsing without caching
        let parser = MarkdownParser::new();

        let blocks: Vec<OntologyBlock> = files
            .par_iter()
            .filter_map(|file| {
                let content = fs::read_to_string(file).ok()?;
                parser.parse(&content).ok()
            })
            .collect();

        Ok(blocks)
    }

    #[cfg(not(feature = "parallel"))]
    fn load_files_parallel(&mut self, files: &[PathBuf]) -> Result<Vec<OntologyBlock>> {
        // Fallback to sequential if parallel feature not enabled
        self.load_files_sequential(files)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[allow(dead_code)] // retained test helper; call sites vary by feature set
    fn create_test_markdown(term_id: &str, domain: &str) -> String {
        format!(
            r#"
- ### OntologyBlock
  - **Identification**
    - term-id:: {}
    - preferred-term:: Test Term
    - public-access:: true
    - ontology:: true

  - **Semantic Classification**
    - owl:class:: {}:TestClass
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
"#,
            term_id, domain
        )
    }

    #[test]
    fn test_loader_creation() {
        let config = LoaderConfig::default();
        let loader = OntologyLoader::new(config);

        assert_eq!(loader.cache.len(), 0);
        assert_eq!(loader.cache_hits, 0);
    }

    #[test]
    fn test_filter_by_domain() {
        let loader = OntologyLoader::default();

        // Create test blocks
        let blocks = Vec::new();

        // Would need actual OntologyBlock instances here
        // This is a simplified example

        let filtered = loader.filter_by_domain(blocks, Domain::AI);
        assert_eq!(filtered.len(), 0);
    }

    #[test]
    fn test_statistics() {
        let loader = OntologyLoader::default();
        let blocks = Vec::new();

        let stats = loader.get_statistics(&blocks);
        assert_eq!(stats.total_blocks, 0);
        assert_eq!(stats.cache_hit_rate(), 0.0);
    }

    #[test]
    fn test_cache_stats() {
        let loader = OntologyLoader::default();
        let (size, hits, misses, rate) = loader.get_cache_stats();

        assert_eq!(size, 0);
        assert_eq!(hits, 0);
        assert_eq!(misses, 0);
        assert_eq!(rate, 0.0);
    }

    #[test]
    fn test_group_by_domain() {
        let loader = OntologyLoader::default();
        let blocks = Vec::new();

        let groups = loader.group_by_domain(blocks);
        assert_eq!(groups.len(), 0);
    }

    #[test]
    fn test_filter_by_pattern() {
        let loader = OntologyLoader::default();
        let blocks = Vec::new();

        let result = loader.filter_by_pattern(blocks, r"AI-\d+");
        assert!(result.is_ok());
    }

    #[test]
    fn test_invalid_pattern() {
        let loader = OntologyLoader::default();
        let blocks = Vec::new();

        let result = loader.filter_by_pattern(blocks, "[invalid");
        assert!(result.is_err());
    }
}
