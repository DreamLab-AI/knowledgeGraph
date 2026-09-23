---
okf_version: "0.2"
type: Class
title: Bundle Adjustment
resource: urn:ngm:class:bundle-adjustment
domain: spatial-computing
description: Bundle adjustment is a non-linear least-squares optimisation technique in computer vision and photogrammetry that simultaneously refines estimates of 3-D structure (point cloud positions) and camera parameters (extrinsics and intrinsics) so that reprojected 3-D points best match their observed 2-D image locations across all views. The name derives from the bundle of light rays connecting each came
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:reprojection-error
  - urn:ngm:class:levenberg-marquardt-algorithm
  - urn:ngm:class:schur-complement-elimination
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:feature-matching
  - urn:ngm:class:ransac
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:point-cloud
  - urn:ngm:class:point-cloud
  - urn:ngm:class:map-building
contrastsWith:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:pose-graph
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:pose-graph
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:sparse-matrix
  - urn:ngm:class:ceres-solver
  - urn:ngm:class:sift-features
partOf:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:visual-slam
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:camera-pose-estimation
  - urn:ngm:class:epipolar-geometry
---

# Bundle Adjustment

Bundle adjustment is a non-linear least-squares optimisation technique in computer vision and photogrammetry that simultaneously refines estimates of 3-D structure (point cloud positions) and camera parameters (extrinsics and intrinsics) so that reprojected 3-D points best match their observed 2-D image locations across all views. The name derives from the bundle of light rays connecting each camera centre to visible scene points; optimising the geometry tightens these bundles. It is the gold-standard global refinement step in structure-from-motion pipelines, visual SLAM, and aerial photogrammetry, producing metrically accurate 3-D reconstructions from overlapping images or video frames. Computationally it exploits the sparse block structure of the Jacobian via Schur complement elimination and is typically solved with the Levenberg-Marquardt algorithm.
