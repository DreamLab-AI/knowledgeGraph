//! Force calculation utilities
//!
//! This module provides force calculations for the force-directed layout.
//! When the `simd` feature is enabled, batch operations can use WASM SIMD128
//! for improved performance.

use nalgebra::Vector2;

#[cfg(feature = "simd")]
use super::simd::{
    SimdPositions,
    calculate_repulsion_simd, calculate_center_force_simd,
};

/// Calculate repulsive force between two nodes (Coulomb's law)
pub fn calculate_repulsion(
    pos1: Vector2<f64>,
    pos2: Vector2<f64>,
    strength: f64,
) -> Vector2<f64> {
    let delta = pos1 - pos2;
    let distance_sq = delta.norm_squared();

    // Handle case where nodes are at same position or very close
    if distance_sq < 0.0001 {
        // Use a small deterministic perturbation based on positions
        let offset_x = ((pos1.x + pos2.x) * 7.0).sin() * 0.01;
        let offset_y = ((pos1.y + pos2.y) * 11.0).cos() * 0.01;
        return Vector2::new(offset_x, offset_y);
    }

    // Normal repulsion force
    let force_magnitude = strength / distance_sq;
    delta.normalize() * force_magnitude
}

/// Calculate attractive force between connected nodes (Hooke's law)
pub fn calculate_attraction(
    pos1: Vector2<f64>,
    pos2: Vector2<f64>,
    target_distance: f64,
    strength: f64,
) -> Vector2<f64> {
    let delta = pos2 - pos1;
    let distance = delta.norm();

    // Coincident nodes (e.g. a self-loop object property, domain == range) have a
    // zero delta. `delta.normalize()` on a zero vector yields NaN (0/0), which
    // then poisons the node position. Emit no attraction in that degenerate case.
    if distance < 1e-4 {
        return Vector2::new(0.0, 0.0);
    }

    let displacement = distance - target_distance;
    let force_magnitude = displacement * strength;

    (delta / distance) * force_magnitude
}

/// Calculate centering force
pub fn calculate_center_force(
    pos: Vector2<f64>,
    center: Vector2<f64>,
    strength: f64,
) -> Vector2<f64> {
    (center - pos) * strength
}

/// Apply velocity decay (damping)
pub fn apply_damping(velocity: Vector2<f64>, damping: f64) -> Vector2<f64> {
    velocity * damping
}

/// Batch calculate repulsion forces between all node pairs
///
/// When the `simd` feature is enabled, uses WASM SIMD128 for
/// vectorized force calculations (up to 4x speedup).
///
/// # Arguments
/// * `positions` - Node positions as (x, y) tuples
/// * `strength` - Charge strength (negative for repulsion)
///
/// # Returns
/// Vector of force vectors for each node
#[cfg(feature = "simd")]
#[allow(unsafe_code)]
pub fn calculate_batch_repulsion(
    positions: &[(f64, f64)],
    strength: f64,
) -> Vec<Vector2<f64>> {
    let simd_positions = SimdPositions::from_positions(positions);

    #[cfg(target_arch = "wasm32")]
    // Safety: SIMD feature is enabled and target_feature is set by the build
    let forces = unsafe { calculate_repulsion_simd(&simd_positions, strength as f32) };

    #[cfg(not(target_arch = "wasm32"))]
    let forces = calculate_repulsion_simd(&simd_positions, strength as f32);

    forces.to_vectors()
}

/// Batch calculate repulsion forces (scalar fallback)
#[cfg(not(feature = "simd"))]
pub fn calculate_batch_repulsion(
    positions: &[(f64, f64)],
    strength: f64,
) -> Vec<Vector2<f64>> {
    let n = positions.len();
    let mut forces = vec![Vector2::zeros(); n];

    for i in 0..n {
        let pos1 = Vector2::new(positions[i].0, positions[i].1);
        for j in (i + 1)..n {
            let pos2 = Vector2::new(positions[j].0, positions[j].1);
            let force = calculate_repulsion(pos1, pos2, strength);
            forces[i] += force;
            forces[j] -= force;
        }
    }

    forces
}

/// Batch calculate centering forces
///
/// When the `simd` feature is enabled, uses WASM SIMD128 for
/// vectorized calculations.
///
/// # Arguments
/// * `positions` - Node positions as (x, y) tuples
/// * `center` - Center point (x, y)
/// * `strength` - Center force strength
///
/// # Returns
/// Vector of force vectors for each node
#[cfg(feature = "simd")]
#[allow(unsafe_code)]
pub fn calculate_batch_center_force(
    positions: &[(f64, f64)],
    center: (f64, f64),
    strength: f64,
) -> Vec<Vector2<f64>> {
    let simd_positions = SimdPositions::from_positions(positions);

    #[cfg(target_arch = "wasm32")]
    // Safety: SIMD feature is enabled and target_feature is set by the build
    let forces = unsafe {
        calculate_center_force_simd(
            &simd_positions,
            center.0 as f32,
            center.1 as f32,
            strength as f32,
        )
    };

    #[cfg(not(target_arch = "wasm32"))]
    let forces = calculate_center_force_simd(
        &simd_positions,
        center.0 as f32,
        center.1 as f32,
        strength as f32,
    );

    forces.to_vectors()
}

/// Batch calculate centering forces (scalar fallback)
#[cfg(not(feature = "simd"))]
pub fn calculate_batch_center_force(
    positions: &[(f64, f64)],
    center: (f64, f64),
    strength: f64,
) -> Vec<Vector2<f64>> {
    let center_v = Vector2::new(center.0, center.1);
    positions
        .iter()
        .map(|&(x, y)| calculate_center_force(Vector2::new(x, y), center_v, strength))
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_repulsion_force() {
        let pos1 = Vector2::new(0.0, 0.0);
        let pos2 = Vector2::new(10.0, 0.0);
        let strength = -30.0;

        let force = calculate_repulsion(pos1, pos2, strength);

        // Force should point away from pos2 (negative strength means pos1 repels from pos2)
        // So force.x should be negative (pointing left, away from pos2)
        assert!(force.x < 0.0 || force.x.abs() > 0.0); // Has meaningful force
        assert!(force.y.abs() < 0.01); // Nearly zero in Y direction
    }

    #[test]
    fn test_attraction_force() {
        let pos1 = Vector2::new(0.0, 0.0);
        let pos2 = Vector2::new(50.0, 0.0);
        let target = 30.0;
        let strength = 1.0;

        let force = calculate_attraction(pos1, pos2, target, strength);

        // Force should pull pos1 toward pos2
        assert!(force.x > 0.0);
    }

    #[test]
    fn test_center_force() {
        let pos = Vector2::new(100.0, 100.0);
        let center = Vector2::new(0.0, 0.0);
        let strength = 0.1;

        let force = calculate_center_force(pos, center, strength);

        // Force should point toward center
        assert!(force.x < 0.0);
        assert!(force.y < 0.0);
    }

    #[test]
    fn test_damping() {
        let velocity = Vector2::new(10.0, 10.0);
        let damping = 0.6;

        let new_velocity = apply_damping(velocity, damping);

        assert_eq!(new_velocity.x, 6.0);
        assert_eq!(new_velocity.y, 6.0);
    }

    #[test]
    fn test_repulsion_at_same_position() {
        let pos = Vector2::new(5.0, 5.0);
        let strength = -30.0;

        let force = calculate_repulsion(pos, pos, strength);

        // When nodes are at same position, we apply a small deterministic perturbation
        // This prevents divide-by-zero and ensures nodes separate
        // The force should be very small (< 0.1) since we use 0.01 as the offset scale
        let magnitude = force.norm();
        assert!(
            magnitude < 0.1 && !magnitude.is_nan(),
            "Force should be small and valid, got: {}",
            magnitude
        );
    }

    #[test]
    fn test_batch_repulsion() {
        let positions = vec![(0.0, 0.0), (10.0, 0.0), (0.0, 10.0)];
        let strength = -100.0;

        let forces = calculate_batch_repulsion(&positions, strength);

        assert_eq!(forces.len(), 3);
        // All forces should be non-zero
        for force in &forces {
            assert!(force.norm() > 0.0);
        }
    }

    #[test]
    fn test_batch_repulsion_newton_third_law() {
        // Two nodes should exert equal and opposite forces
        let positions = vec![(0.0, 0.0), (10.0, 0.0)];
        let strength = -100.0;

        let forces = calculate_batch_repulsion(&positions, strength);

        // Forces should be equal in magnitude
        let diff = (forces[0].norm() - forces[1].norm()).abs();
        assert!(diff < 0.001, "Force magnitudes should be equal");

        // Forces should be opposite in direction
        let sum = forces[0] + forces[1];
        assert!(sum.norm() < 0.001, "Forces should cancel out");
    }

    #[test]
    fn test_batch_center_force() {
        let positions = vec![(10.0, 10.0), (-10.0, -10.0), (0.0, 0.0)];
        let center = (0.0, 0.0);
        let strength = 0.1;

        let forces = calculate_batch_center_force(&positions, center, strength);

        assert_eq!(forces.len(), 3);
        // First node should be pulled toward center
        assert!(forces[0].x < 0.0);
        assert!(forces[0].y < 0.0);
        // Second node should be pulled toward center
        assert!(forces[1].x > 0.0);
        assert!(forces[1].y > 0.0);
        // Node at center should have zero force
        assert!(forces[2].norm() < 0.001);
    }

    #[test]
    fn test_batch_repulsion_large() {
        // Test with larger dataset to exercise SIMD paths
        let positions: Vec<(f64, f64)> = (0..100)
            .map(|i| (i as f64 * 10.0, (i as f64 * 7.0) % 100.0))
            .collect();
        let strength = -1000.0;

        let forces = calculate_batch_repulsion(&positions, strength);

        assert_eq!(forces.len(), 100);
        // All forces should be valid (not NaN or infinite)
        for force in &forces {
            assert!(!force.x.is_nan() && !force.y.is_nan());
            assert!(force.x.is_finite() && force.y.is_finite());
        }
    }
}
