---
okf_version: "0.2"
type: Class
title: Point Cloud
resource: urn:ngm:class:point-cloud
domain: spatial-computing
description: A point cloud is a discrete set of data points in three-dimensional coordinate space — each sample defined by (X, Y, Z) spatial coordinates and optionally augmented with attributes such as colour (RGB), intensity, return number, or surface normal vectors — acquired through active sensors like LiDAR and time-of-flight cameras or passive photogrammetric reconstruction from overlapping imagery. Point
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:surface-normal
  - urn:ngm:class:voxel
requires:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:lidar
  - urn:ngm:class:coordinate-system
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:object-detection
dependsOn:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:spatial-registration
contrastsWith:
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:voxel-grid
bridgesTo:
  - urn:ngm:class:pointnet
  - urn:ngm:class:3d-object-segmentation
uses:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotics-perception
standardizedBy:
  - urn:ngm:class:las-format
  - urn:ngm:class:e57-format
partOf:
  - urn:ngm:class:3-d-scene-representation
relatedTo:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:occupancy-mapping
  - urn:ngm:class:geospatial-data
---

# Point Cloud

A point cloud is a discrete set of data points in three-dimensional coordinate space — each sample defined by (X, Y, Z) spatial coordinates and optionally augmented with attributes such as colour (RGB), intensity, return number, or surface normal vectors — acquired through active sensors like LiDAR and time-of-flight cameras or passive photogrammetric reconstruction from overlapping imagery. Point clouds constitute the primary raw geometric representation of physical objects and environments produced by scanning or depth-sensing systems, capturing surface geometry without presupposing mesh topology. They serve as the foundational data structure for downstream spatial-computing workflows including SLAM, 3D reconstruction, digital twin creation, and autonomous navigation, and are processed through operations such as voxelisation, segmentation, surface reconstruction, and registration to produce actionable spatial models.
