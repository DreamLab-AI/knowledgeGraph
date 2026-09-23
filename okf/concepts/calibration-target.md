---
okf_version: "0.2"
type: Class
title: Calibration Target
resource: urn:ngm:class:calibration-target
domain: spatial-computing
description: A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:sc-standards-and-interop
  - urn:ngm:class:reference-standard
hasPart:
  - urn:ngm:class:checkerboard-pattern
  - urn:ngm:class:fiducial-marker
  - urn:ngm:class:circle-grid
requires:
  - urn:ngm:class:flatness-control
  - urn:ngm:class:pattern-definition
  - urn:ngm:class:precision-manufacturing
  - urn:ngm:class:controlled-illumination
enables:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:color-accuracy
  - urn:ngm:class:lens-distortion-correction
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:3-d-reconstruction
contrastsWith:
  - urn:ngm:class:scene-geometry
bridgesTo:
  - urn:ngm:class:reference-standard
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-processing
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:machine-vision
  - urn:ngm:class:spatial-mapping
partOf:
  - urn:ngm:class:camera-calibration-pipeline
  - urn:ngm:class:photogrammetry
relatedTo:
  - urn:ngm:class:intrinsic-parameters
  - urn:ngm:class:extrinsic-parameters
  - urn:ngm:class:ground-truth-labels
---

# Calibration Target

A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.
