---
okf_version: "0.2"
type: Class
title: Checkerboard Pattern
resource: urn:ngm:class:checkerboard-pattern
domain: spatial-computing
description: A checkerboard pattern is a planar grid of alternating black and white squares used as a calibration target in computer vision. Its regularly spaced corners are easy to detect with sub-pixel accuracy and have precisely known relative positions, providing reliable correspondences for estimating camera parameters. The checkerboard is the most common target for intrinsic calibration, distortion corre
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:optical-calibration-target
hasPart:
  - urn:ngm:class:feature-detection
enables:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:lens-distortion-correction
  - urn:ngm:class:camera-intrinsics
contrastsWith:
  - urn:ngm:class:fiducial-marker
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-detection
supports:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:pose-estimation
partOf:
  - urn:ngm:class:optical-calibration-target
relatedTo:
  - urn:ngm:class:homography
  - urn:ngm:class:fiducial-marker
---

# Checkerboard Pattern

A checkerboard pattern is a planar grid of alternating black and white squares used as a calibration target in computer vision. Its regularly spaced corners are easy to detect with sub-pixel accuracy and have precisely known relative positions, providing reliable correspondences for estimating camera parameters. The checkerboard is the most common target for intrinsic calibration, distortion correction, and stereo rig alignment.
