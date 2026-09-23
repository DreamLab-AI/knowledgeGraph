---
okf_version: "0.2"
type: Class
title: Multi-View Stereo
resource: urn:ngm:class:multi-view-stereo
domain: spatial-computing
description: Multi-View Stereo (MVS) is a computer vision technique that reconstructs dense 3D geometry from a set of overlapping 2D images captured from multiple camera positions. It extends traditional stereo matching by leveraging consistency across many viewpoints to estimate depth and surface detail at high resolution. MVS is a foundational component of photogrammetry pipelines, producing point clouds and
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:photogrammetry
hasPart:
  - urn:ngm:class:depth-estimation
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
enables:
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:3-d-scanning
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:structure-from-motion
contrastsWith:
  - urn:ngm:class:lidar-scanning
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:3-d-gaussian-splatting
bridgesTo:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:stereo-vision
supports:
  - urn:ngm:class:reality-capture
partOf:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:3-d-reconstruction
relatedTo:
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:simultaneous-localisation-and-mapping
---

# Multi-View Stereo

Multi-View Stereo (MVS) is a computer vision technique that reconstructs dense 3D geometry from a set of overlapping 2D images captured from multiple camera positions. It extends traditional stereo matching by leveraging consistency across many viewpoints to estimate depth and surface detail at high resolution. MVS is a foundational component of photogrammetry pipelines, producing point clouds and textured meshes from photograph collections.
