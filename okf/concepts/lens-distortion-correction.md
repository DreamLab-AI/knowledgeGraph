---
okf_version: "0.2"
type: Class
title: Lens Distortion Correction
resource: urn:ngm:class:lens-distortion-correction
domain: spatial-computing
description: Lens distortion correction is the process of removing geometric aberrations introduced by camera optics so that straight lines in the world appear straight in the image. It estimates distortion coefficients, typically radial and tangential terms, from calibration data and remaps pixels to an undistorted, rectilinear projection. The correction is a prerequisite for accurate measurement, pose estima
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:camera-calibration
requires:
  - urn:ngm:class:camera-intrinsics
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:checkerboard-pattern
enables:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:camera-calibration
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-detection
supports:
  - urn:ngm:class:camera-calibration
partOf:
  - urn:ngm:class:camera-calibration
relatedTo:
  - urn:ngm:class:homography
  - urn:ngm:class:fiducial-marker
---

# Lens Distortion Correction

Lens distortion correction is the process of removing geometric aberrations introduced by camera optics so that straight lines in the world appear straight in the image. It estimates distortion coefficients, typically radial and tangential terms, from calibration data and remaps pixels to an undistorted, rectilinear projection. The correction is a prerequisite for accurate measurement, pose estimation, and image rectification in computer-vision pipelines.
