---
okf_version: "0.2"
type: Class
title: Structure-from-Motion
resource: urn:ngm:class:structure-from-motion
domain: spatial-computing
description: Structure-from-Motion (SfM) is a photogrammetric pipeline that simultaneously recovers three-dimensional scene geometry and camera motion parameters from an unordered collection of overlapping two-dimensional images. Sparse feature correspondences—detected via descriptors such as SIFT, ORB, or learned alternatives—seed an incremental or global pose-estimation stage that triangulates a sparse point
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:photogrammetry
requires:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:multi-view-stereo
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:3d-mapping
  - urn:ngm:class:augmented-reality
contrastsWith:
  - urn:ngm:class:slam
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:lidar-scanning
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-detection
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:ransac
partOf:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:3-d-reconstruction
relatedTo:
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:3-d-scene-reconstruction
---

# Structure-from-Motion

Structure-from-Motion (SfM) is a photogrammetric pipeline that simultaneously recovers three-dimensional scene geometry and camera motion parameters from an unordered collection of overlapping two-dimensional images. Sparse feature correspondences—detected via descriptors such as SIFT, ORB, or learned alternatives—seed an incremental or global pose-estimation stage that triangulates a sparse point cloud. Bundle adjustment then jointly refines all camera extrinsics, intrinsics, and 3D point coordinates by minimising reprojection error across the full image set. SfM is a foundational technique in computer vision, photogrammetry, autonomous navigation, and spatial computing, serving as the upstream stage for multi-view stereo densification and neural scene representations.
