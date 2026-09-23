---
okf_version: "0.2"
type: Class
title: Point Cloud Processing
resource: urn:ngm:class:point-cloud-processing
domain: spatial-computing
description: Point cloud processing is the body of computational algorithms and end-to-end pipelines that transform raw collections of georeferenced 3D coordinate samples — produced by LiDAR scanners, depth cameras, structured-light systems, or photogrammetric reconstruction — into structured, semantically meaningful representations suitable for downstream applications such as autonomous navigation, digital tw
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:point-cloud
hasPart:
  - urn:ngm:class:point-cloud-registration
  - urn:ngm:class:point-cloud-segmentation
  - urn:ngm:class:surface-reconstruction
  - urn:ngm:class:normal-estimation
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:3d-coordinate-geometry
enables:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:ne-rf
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:autonomous-driving-perception
dependsOn:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:lidar-scanning
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:spatial-data-structure
  - urn:ngm:class:octree-spatial-index
  - urn:ngm:class:voxel-grid
  - urn:ngm:class:iterative-closest-point
  - urn:ngm:class:octree-spatial-index
relatedTo:
  - urn:ngm:class:bim-virtual-model
  - urn:ngm:class:geospatial-data
  - urn:ngm:class:3d-object-detection
---

# Point Cloud Processing

Point cloud processing is the body of computational algorithms and end-to-end pipelines that transform raw collections of georeferenced 3D coordinate samples — produced by LiDAR scanners, depth cameras, structured-light systems, or photogrammetric reconstruction — into structured, semantically meaningful representations suitable for downstream applications such as autonomous navigation, digital twin construction, heritage documentation, and environmental monitoring. Core operations include noise filtering, voxel downsampling, multi-scan registration via Iterative Closest Point (ICP) and feature-based variants, normal estimation, segmentation, surface reconstruction, and compression. These operations are increasingly augmented by deep learning models operating directly on unordered point sets (PointNet family, sparse 3D CNNs), often executed on GPU-accelerated or specialised embedded hardware to meet real-time constraints. The field bridges classical computational geometry with modern neural scene representations such as NeRF and 3D Gaussian Splatting.
