---
okf_version: "0.2"
type: Class
title: Camera Intrinsics
resource: urn:ngm:class:camera-intrinsics
domain: spatial-computing
description: Camera Intrinsics are the internal optical and geometric parameters of a camera that define the mathematical relationship between 3D points in the camera's coordinate frame and their 2D projections onto the image sensor. The intrinsic parameter matrix encodes focal length in pixel units along each image axis, the principal point (optical axis intersection with the sensor), and skew, whilst associa
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:lens-distortion-model
requires:
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:depth-estimation
contrastsWith:
  - urn:ngm:class:camera-extrinsics
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:pinhole-camera-model
  - urn:ngm:class:projective-geometry
partOf:
  - urn:ngm:class:camera-model
relatedTo:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:optical-flow
---

# Camera Intrinsics

Camera Intrinsics are the internal optical and geometric parameters of a camera that define the mathematical relationship between 3D points in the camera's coordinate frame and their 2D projections onto the image sensor. The intrinsic parameter matrix encodes focal length in pixel units along each image axis, the principal point (optical axis intersection with the sensor), and skew, whilst associated distortion coefficients correct for lens aberrations that cause deviations from the ideal pinhole projection model.
