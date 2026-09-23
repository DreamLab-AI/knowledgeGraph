---
okf_version: "0.2"
type: Class
title: Spatial Mapping
resource: urn:ngm:class:spatial-mapping
domain: spatial-computing
description: The process of constructing and continuously updating three-dimensional representations of physical environments using sensor data—including depth cameras, LiDAR, and IMU—enabling AR/VR systems to understand surroundings for occlusion, collision, content placement, and navigation. Core algorithms include SLAM variants that fuse visual features with inertial measurements to produce dense mesh or vo
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:voxel-grid
  - urn:ngm:class:semantic-map
  - urn:ngm:class:loop-closure-detection
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:real-time-processing
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:indoor-navigation
  - urn:ngm:class:mixed-reality
dependsOn:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:odometry
contrastsWith:
  - urn:ngm:class:gps
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:lidar
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:depth-camera
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:neural-radiance-field
relatedTo:
  - urn:ngm:class:ar-technology
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:spatial-computing
---

# Spatial Mapping

The process of constructing and continuously updating three-dimensional representations of physical environments using sensor data—including depth cameras, LiDAR, and IMU—enabling AR/VR systems to understand surroundings for occlusion, collision, content placement, and navigation. Core algorithms include SLAM variants that fuse visual features with inertial measurements to produce dense mesh or voxel representations in real time.
