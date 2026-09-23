---
okf_version: "0.2"
type: Class
title: Epipolar Geometry
resource: urn:ngm:class:epipolar-geometry
domain: spatial-computing
description: Epipolar Geometry is the projective geometry of stereo vision, describing the geometric relationship between two camera views of the same 3D scene. It is encapsulated in the Fundamental Matrix (uncalibrated cameras) and Essential Matrix (calibrated cameras), which constrain the search for correspondences between images to one-dimensional epipolar lines rather than the full 2D image plane.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:projective-geometry
enables:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:stereo-rectification
  - urn:ngm:class:3-d-reconstruction
dependsOn:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:ransac
contrastsWith:
  - urn:ngm:class:monocular-depth-estimation
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:autonomous-driving
uses:
  - urn:ngm:class:camera-intrinsics
  - urn:ngm:class:homography
  - urn:ngm:class:triangulation
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:novel-view-synthesis
relatedTo:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:bundle-adjustment
---

# Epipolar Geometry

Epipolar Geometry is the projective geometry of stereo vision, describing the geometric relationship between two camera views of the same 3D scene. It is encapsulated in the Fundamental Matrix (uncalibrated cameras) and Essential Matrix (calibrated cameras), which constrain the search for correspondences between images to one-dimensional epipolar lines rather than the full 2D image plane.
