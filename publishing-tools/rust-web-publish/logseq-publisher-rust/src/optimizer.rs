use serde::{Deserialize, Serialize};
use sha2::{Sha256, Digest};

#[derive(Debug, Serialize, Deserialize)]
pub struct AssetManifest {
    pub files: Vec<OptimizedAsset>,
    pub total_size: usize,
    pub optimized_size: usize,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OptimizedAsset {
    pub original_path: String,
    pub optimized_path: String,
    pub hash: String,
    pub original_size: usize,
    pub optimized_size: usize,
}

/// Optimize assets (images, CSS, JS)
pub fn optimize_assets(asset_paths: &[String]) -> Result<AssetManifest, String> {
    let mut optimized_assets = Vec::new();
    let mut total_size = 0;
    let mut optimized_size = 0;

    for path in asset_paths {
        let asset = optimize_single_asset(path)?;
        total_size += asset.original_size;
        optimized_size += asset.optimized_size;
        optimized_assets.push(asset);
    }

    Ok(AssetManifest {
        files: optimized_assets,
        total_size,
        optimized_size,
    })
}

fn optimize_single_asset(path: &str) -> Result<OptimizedAsset, String> {
    // In a real implementation, this would:
    // - Compress images (WebP, AVIF)
    // - Minify CSS/JS
    // - Generate content hashes
    // - Create responsive image variants

    let hash = generate_hash(path);
    let extension = path.split('.').last().unwrap_or("");

    // Simulate optimization
    let original_size = path.len() * 100; // Mock size
    let optimized_size = (original_size as f64 * 0.7) as usize; // 30% reduction

    Ok(OptimizedAsset {
        original_path: path.to_string(),
        optimized_path: format!("{}.{}.{}", path.trim_end_matches(extension), hash, extension),
        hash,
        original_size,
        optimized_size,
    })
}

fn generate_hash(content: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(content.as_bytes());
    format!("{:x}", hasher.finalize())[..8].to_string()
}

/// Minify CSS
pub fn minify_css(css: &str) -> String {
    css.lines()
        .map(|line| line.trim())
        .filter(|line| !line.is_empty())
        .collect::<Vec<_>>()
        .join("")
        .replace("  ", " ")
}

/// Minify JavaScript
pub fn minify_js(js: &str) -> String {
    // Basic minification - in production use proper minifier
    js.lines()
        .map(|line| line.trim())
        .filter(|line| !line.is_empty() && !line.starts_with("//"))
        .collect::<Vec<_>>()
        .join("")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_asset_optimization() {
        let assets = vec![
            "image.png".to_string(),
            "styles.css".to_string(),
        ];

        let manifest = optimize_assets(&assets).unwrap();
        assert_eq!(manifest.files.len(), 2);
        assert!(manifest.optimized_size < manifest.total_size);
    }

    #[test]
    fn test_css_minification() {
        let css = r#"
        body {
            margin: 0;
            padding: 0;
        }
        "#;

        let minified = minify_css(css);
        assert!(!minified.contains('\n'));
    }
}
