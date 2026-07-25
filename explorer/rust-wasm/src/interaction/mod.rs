//! Interaction module for ray-sphere intersection and node click detection
//!
//! This module provides high-performance ray-sphere intersection testing
//! for detecting mouse clicks on graph nodes in 3D space.

use nalgebra::Vector3;

/// A ray in 3D space with origin and direction
#[derive(Debug, Clone, PartialEq)]
pub struct Ray {
    /// Ray origin point
    pub origin: Vector3<f32>,

    /// Ray direction (should be normalized)
    pub direction: Vector3<f32>,
}

impl Ray {
    /// Create a new ray with given origin and direction
    ///
    /// # Arguments
    /// * `origin` - The starting point of the ray
    /// * `direction` - The direction vector of the ray (will be normalized)
    ///
    /// # Example
    /// ```
    /// use nalgebra::Vector3;
    /// use webvowl_wasm::interaction::Ray;
    ///
    /// let ray = Ray::new(
    ///     Vector3::new(0.0, 0.0, 0.0),
    ///     Vector3::new(1.0, 0.0, 0.0)
    /// );
    /// ```
    pub fn new(origin: Vector3<f32>, direction: Vector3<f32>) -> Self {
        Self {
            origin,
            direction: direction.normalize(),
        }
    }

    /// Get a point along the ray at parameter t
    ///
    /// # Arguments
    /// * `t` - Distance along the ray
    ///
    /// # Returns
    /// Point at position origin + t * direction
    pub fn point_at(&self, t: f32) -> Vector3<f32> {
        self.origin + t * self.direction
    }
}

/// Result of a ray-sphere intersection test
#[derive(Debug, Clone, PartialEq)]
pub struct Intersection {
    /// Distance along ray to intersection point
    pub distance: f32,

    /// 3D point of intersection
    pub point: Vector3<f32>,
}

/// Performs ray-sphere intersection using the quadratic formula
///
/// Solves: ||ray.origin + t*ray.direction - center||² = radius²
///
/// # Arguments
/// * `ray` - The ray to test
/// * `center` - Center point of the sphere
/// * `radius` - Radius of the sphere
///
/// # Returns
/// * `Some(distance)` - Distance to closest intersection point (positive t)
/// * `None` - No intersection found
///
/// # Algorithm
/// The ray equation is: P(t) = O + tD
/// The sphere equation is: ||P - C||² = r²
///
/// Substituting ray into sphere:
/// ||O + tD - C||² = r²
/// ||OC + tD||² = r²  (where OC = O - C)
/// (OC + tD)·(OC + tD) = r²
/// OC·OC + 2t(D·OC) + t²(D·D) = r²
///
/// This gives us: at² + bt + c = 0
/// where:
/// - a = D·D = 1 (direction is normalized)
/// - b = 2(D·OC)
/// - c = OC·OC - r²
///
/// Discriminant: Δ = b² - 4ac
/// - Δ < 0: no intersection
/// - Δ = 0: tangent (one intersection)
/// - Δ > 0: two intersections
///
/// Solutions: t = (-b ± √Δ) / 2a
pub fn ray_sphere_intersection(
    ray: &Ray,
    center: Vector3<f32>,
    radius: f32,
) -> Option<Intersection> {
    // Vector from sphere center to ray origin
    let oc = ray.origin - center;

    // Quadratic equation coefficients
    // a = 1.0 (direction is normalized)
    let a = ray.direction.dot(&ray.direction);
    let b = 2.0 * oc.dot(&ray.direction);
    let c = oc.dot(&oc) - radius * radius;

    // Discriminant
    let discriminant = b * b - 4.0 * a * c;

    // No intersection if discriminant is negative
    if discriminant < 0.0 {
        return None;
    }

    // Calculate both solutions
    let sqrt_discriminant = discriminant.sqrt();
    let t1 = (-b - sqrt_discriminant) / (2.0 * a);
    let t2 = (-b + sqrt_discriminant) / (2.0 * a);

    // We want the closest positive t value
    let t = if t1 >= 0.0 {
        t1 // First intersection (closer)
    } else if t2 >= 0.0 {
        t2 // Second intersection (ray origin inside sphere)
    } else {
        return None; // Both intersections behind the ray
    };

    Some(Intersection {
        distance: t,
        point: ray.point_at(t),
    })
}

/// Node information for intersection testing
#[derive(Debug, Clone)]
pub struct NodeHitTest {
    /// Node identifier
    pub id: String,

    /// Node center position
    pub position: Vector3<f32>,

    /// Node radius (collision sphere)
    pub radius: f32,
}

/// Find the closest node hit by a ray
///
/// # Arguments
/// * `ray` - The ray to test
/// * `nodes` - List of nodes to test against
///
/// # Returns
/// * `Some((node_id, distance))` - ID of closest hit node and distance
/// * `None` - No nodes were hit
///
/// # Performance
/// This function tests all nodes sequentially. For large graphs (>1000 nodes),
/// consider using spatial acceleration structures (BVH, octree, etc.)
pub fn find_closest_node_hit(ray: &Ray, nodes: &[NodeHitTest]) -> Option<(String, f32)> {
    let mut closest_hit: Option<(String, f32)> = None;

    for node in nodes {
        if let Some(intersection) = ray_sphere_intersection(ray, node.position, node.radius) {
            match closest_hit {
                Some((_, current_distance)) => {
                    if intersection.distance < current_distance {
                        closest_hit = Some((node.id.clone(), intersection.distance));
                    }
                }
                None => {
                    closest_hit = Some((node.id.clone(), intersection.distance));
                }
            }
        }
    }

    closest_hit
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_ray_creation() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        assert_eq!(ray.origin, Vector3::new(0.0, 0.0, 0.0));
        assert_eq!(ray.direction, Vector3::new(1.0, 0.0, 0.0));
    }

    #[test]
    fn test_ray_normalization() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(3.0, 4.0, 0.0), // Length = 5
        );

        // Direction should be normalized
        assert!((ray.direction.norm() - 1.0).abs() < 1e-6);
        assert_eq!(ray.direction, Vector3::new(0.6, 0.8, 0.0));
    }

    #[test]
    fn test_ray_point_at() {
        let ray = Ray::new(
            Vector3::new(1.0, 2.0, 3.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let point = ray.point_at(5.0);
        assert_eq!(point, Vector3::new(6.0, 2.0, 3.0));
    }

    #[test]
    fn test_ray_hits_sphere() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let center = Vector3::new(5.0, 0.0, 0.0);
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);

        assert!(result.is_some());
        let intersection = result.unwrap();
        assert!((intersection.distance - 4.0).abs() < 1e-6);
        assert!((intersection.point - Vector3::new(4.0, 0.0, 0.0)).norm() < 1e-6);
    }

    #[test]
    fn test_ray_misses_sphere() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let center = Vector3::new(5.0, 5.0, 0.0); // Way off to the side
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_none());
    }

    #[test]
    fn test_ray_tangent_to_sphere() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let center = Vector3::new(5.0, 1.0, 0.0); // Exactly radius away
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_some());
        let intersection = result.unwrap();
        assert!((intersection.distance - 5.0).abs() < 1e-5);
    }

    #[test]
    fn test_ray_origin_inside_sphere() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0), // Inside sphere
            Vector3::new(1.0, 0.0, 0.0),
        );

        let center = Vector3::new(0.0, 0.0, 0.0);
        let radius = 2.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_some());
        // Should return exit point
        let intersection = result.unwrap();
        assert!((intersection.distance - 2.0).abs() < 1e-6);
    }

    #[test]
    fn test_ray_behind_sphere() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let center = Vector3::new(-5.0, 0.0, 0.0); // Behind ray origin
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_none());
    }

    #[test]
    fn test_find_closest_node_single_hit() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let nodes = vec![
            NodeHitTest {
                id: "node1".to_string(),
                position: Vector3::new(5.0, 0.0, 0.0),
                radius: 1.0,
            },
        ];

        let result = find_closest_node_hit(&ray, &nodes);
        assert!(result.is_some());
        let (id, distance) = result.unwrap();
        assert_eq!(id, "node1");
        assert!((distance - 4.0).abs() < 1e-6);
    }

    #[test]
    fn test_find_closest_node_multiple_hits() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let nodes = vec![
            NodeHitTest {
                id: "node1".to_string(),
                position: Vector3::new(10.0, 0.0, 0.0),
                radius: 1.0,
            },
            NodeHitTest {
                id: "node2".to_string(),
                position: Vector3::new(5.0, 0.0, 0.0), // Closer
                radius: 1.0,
            },
            NodeHitTest {
                id: "node3".to_string(),
                position: Vector3::new(15.0, 0.0, 0.0),
                radius: 1.0,
            },
        ];

        let result = find_closest_node_hit(&ray, &nodes);
        assert!(result.is_some());
        let (id, _) = result.unwrap();
        assert_eq!(id, "node2"); // Should find the closest one
    }

    #[test]
    fn test_find_closest_node_no_hits() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        let nodes = vec![
            NodeHitTest {
                id: "node1".to_string(),
                position: Vector3::new(5.0, 10.0, 0.0), // Too far away
                radius: 1.0,
            },
        ];

        let result = find_closest_node_hit(&ray, &nodes);
        assert!(result.is_none());
    }

    #[test]
    fn test_performance_many_nodes() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 0.0, 0.0),
        );

        // Create 1000 nodes in a grid
        let mut nodes = Vec::new();
        for i in 0..1000 {
            let x = (i as f32) * 0.1;
            let y = ((i / 10) as f32) * 0.1;
            nodes.push(NodeHitTest {
                id: format!("node{}", i),
                position: Vector3::new(x, y, 0.0),
                radius: 0.05,
            });
        }

        // This should complete quickly (< 1ms on modern hardware)
        let start = std::time::Instant::now();
        let result = find_closest_node_hit(&ray, &nodes);
        let elapsed = start.elapsed();

        // Just verify it runs, actual performance measured in benchmarks
        assert!(elapsed.as_millis() < 10); // Very generous limit for test
        assert!(result.is_some());
    }

    #[test]
    fn test_ray_diagonal_intersection() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 1.0, 0.0), // 45 degree angle
        );

        let center = Vector3::new(5.0, 5.0, 0.0);
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_some());
    }

    #[test]
    fn test_ray_3d_intersection() {
        let ray = Ray::new(
            Vector3::new(0.0, 0.0, 0.0),
            Vector3::new(1.0, 1.0, 1.0), // True 3D direction
        );

        let center = Vector3::new(5.0, 5.0, 5.0);
        let radius = 1.0;

        let result = ray_sphere_intersection(&ray, center, radius);
        assert!(result.is_some());
    }
}
