//! Debug utilities for force-directed layout

use wasm_bindgen::prelude::*;

/// Debug configuration flags
#[wasm_bindgen]
#[derive(Debug, Clone)]
pub struct DebugFlags {
    /// Log force calculations
    pub log_forces: bool,
    /// Log node positions
    pub log_positions: bool,
    /// Log node velocities
    pub log_velocities: bool,
    /// Log repulsion forces
    pub log_repulsion: bool,
    /// Log attraction forces
    pub log_attraction: bool,
    /// Log centering forces
    pub log_centering: bool,
    /// Log Barnes-Hut calculations
    pub log_barnes_hut: bool,
    /// Logging interval (log every N iterations)
    pub log_interval: usize,
}

#[wasm_bindgen]
impl DebugFlags {
    /// Create new debug flags with default settings
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            log_forces: false,
            log_positions: false,
            log_velocities: false,
            log_repulsion: false,
            log_attraction: false,
            log_centering: false,
            log_barnes_hut: false,
            log_interval: 10,
        }
    }

    /// Enable all debug logging
    pub fn enable_all(&mut self) {
        self.log_forces = true;
        self.log_positions = true;
        self.log_velocities = true;
        self.log_repulsion = true;
        self.log_attraction = true;
        self.log_centering = true;
        self.log_barnes_hut = true;
    }

    /// Check if logging should occur for this iteration
    pub fn should_log(&self, iteration: usize) -> bool {
        iteration % self.log_interval == 0
    }
}

impl Default for DebugFlags {
    fn default() -> Self {
        Self::new()
    }
}

/// Log force vector
#[cfg(target_arch = "wasm32")]
pub fn log_force(label: &str, fx: f64, fy: f64, magnitude: f64) {
    web_sys::console::log_1(&format!(
        "🔧 {}: fx={:.2}, fy={:.2}, mag={:.2}",
        label, fx, fy, magnitude
    ).into());
}

/// Log position
#[cfg(target_arch = "wasm32")]
pub fn log_position(node_id: &str, x: f64, y: f64) {
    web_sys::console::log_1(&format!(
        "📍 Node {}: ({:.2}, {:.2})",
        node_id, x, y
    ).into());
}

/// Log velocity
#[cfg(target_arch = "wasm32")]
pub fn log_velocity(node_id: &str, vx: f64, vy: f64, speed: f64) {
    web_sys::console::log_1(&format!(
        "💨 Node {}: vx={:.2}, vy={:.2}, speed={:.2}",
        node_id, vx, vy, speed
    ).into());
}

/// Log node distribution statistics
#[cfg(target_arch = "wasm32")]
pub fn log_distribution(label: &str, positions: &[(f64, f64)]) {
    if positions.is_empty() {
        return;
    }

    // Calculate centroid
    let (sum_x, sum_y) = positions.iter().fold((0.0, 0.0), |(sx, sy), (x, y)| {
        (sx + x, sy + y)
    });
    let centroid_x = sum_x / positions.len() as f64;
    let centroid_y = sum_y / positions.len() as f64;

    // Calculate distances from centroid
    let distances: Vec<f64> = positions.iter().map(|(x, y)| {
        ((x - centroid_x).powi(2) + (y - centroid_y).powi(2)).sqrt()
    }).collect();

    let min_dist = distances.iter().cloned().fold(f64::INFINITY, f64::min);
    let max_dist = distances.iter().cloned().fold(0.0, f64::max);
    let avg_dist = distances.iter().sum::<f64>() / distances.len() as f64;

    // Count clustering
    let clustered = distances.iter().filter(|&&d| d < 100.0).count();
    let spread = distances.iter().filter(|&&d| d > 500.0).count();
    let clustering_pct = (clustered as f64 / positions.len() as f64) * 100.0;
    let spread_pct = (spread as f64 / positions.len() as f64) * 100.0;

    web_sys::console::group_1(&format!("📊 {} - Node Distribution (n={})", label, positions.len()).into());
    web_sys::console::log_1(&format!(
        "Centroid: ({:.1}, {:.1})",
        centroid_x, centroid_y
    ).into());
    web_sys::console::log_1(&format!(
        "Distance: min={:.1}, max={:.1}, avg={:.1}",
        min_dist, max_dist, avg_dist
    ).into());
    web_sys::console::log_1(&format!(
        "Clustering: {} nodes within 100 units ({:.1}%)",
        clustered, clustering_pct
    ).into());
    web_sys::console::log_1(&format!(
        "Spread: {} nodes beyond 500 units ({:.1}%)",
        spread, spread_pct
    ).into());

    if clustering_pct > 50.0 {
        web_sys::console::warn_1(&format!(
            "⚠️ CLUSTERING DETECTED: {:.1}% of nodes within 100 units of center!",
            clustering_pct
        ).into());
    }

    web_sys::console::group_end();
}

// No-op versions for non-wasm targets
/// Log force information (no-op in production)
#[cfg(not(target_arch = "wasm32"))]
pub fn log_force(_label: &str, _fx: f64, _fy: f64, _magnitude: f64) {}

/// Log node position (no-op in production)
#[cfg(not(target_arch = "wasm32"))]
pub fn log_position(_node_id: &str, _x: f64, _y: f64) {}

/// Log node velocity (no-op in production)
#[cfg(not(target_arch = "wasm32"))]
pub fn log_velocity(_node_id: &str, _vx: f64, _vy: f64, _speed: f64) {}

/// Log position distribution (no-op in production)
#[cfg(not(target_arch = "wasm32"))]
pub fn log_distribution(_label: &str, _positions: &[(f64, f64)]) {}
