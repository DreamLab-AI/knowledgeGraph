---
okf_version: "0.2"
type: Class
title: Fiducial Marker
resource: urn:ngm:class:fiducial-marker
domain: spatial-computing
description: A fiducial marker is a designed visual pattern placed in a scene to serve as a reliable reference point for computer-vision systems. Its known geometry and high-contrast, machine-readable encoding allow algorithms to detect it robustly, recover camera pose, and assign a unique identifier. Fiducial markers such as ArUco and AprilTag families are widely used for camera calibration, augmented-reality
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:optical-calibration-target
hasPart:
  - urn:ngm:class:checkerboard-pattern
requires:
  - urn:ngm:class:camera-intrinsics
enables:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:augmented-reality
contrastsWith:
  - urn:ngm:class:checkerboard-pattern
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:feature-detection
  - urn:ngm:class:computer-vision
supports:
  - urn:ngm:class:pose-estimation
partOf:
  - urn:ngm:class:optical-calibration-target
relatedTo:
  - urn:ngm:class:homography
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:lens-distortion-correction
---

# Fiducial Marker

A fiducial marker is a designed visual pattern placed in a scene to serve as a reliable reference point for computer-vision systems. Its known geometry and high-contrast, machine-readable encoding allow algorithms to detect it robustly, recover camera pose, and assign a unique identifier. Fiducial markers such as ArUco and AprilTag families are widely used for camera calibration, augmented-reality registration, and robot localisation.
