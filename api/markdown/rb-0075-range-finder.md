- ### Definition
  - A **range finder** measures the distance from a robot to objects in its environment using time-of-flight or phase-shift techniques with laser, infrared, or ultrasonic signals. Range finders span from single-beam infrared distance sensors to multi-layer laser scanners (LiDAR), providing the raw distance data that feeds obstacle detection, safety zone enforcement, and SLAM algorithms.

- ### Semantic Classification
  - owl-class:: robotics:rb0075rangefinder
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Enables safety zone detection (rb 0095) and is a core component of LiDAR systems (rb 0069).
  - Outputs are typically processed as point clouds and fused with IMU and camera data (sensor fusion) for robust environment models.
  - Complements infrared sensors (rb 0078) and radar (rb 0080) in multi-modal sensing configurations.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z