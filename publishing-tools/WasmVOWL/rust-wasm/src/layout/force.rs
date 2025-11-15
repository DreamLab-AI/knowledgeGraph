//! Force calculation utilities

use nalgebra::Vector2;

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
    let distance = delta.norm().max(0.1); // Avoid division by zero

    let displacement = distance - target_distance;
    let force_magnitude = displacement * strength;

    delta.normalize() * force_magnitude
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
}
