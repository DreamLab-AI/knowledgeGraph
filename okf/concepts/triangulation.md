---
okf_version: "0.2"
type: Class
title: Triangulation
resource: urn:ngm:class:triangulation
domain: spatial-computing
description: Triangulation is the process of determining the 3D position of a point by intersecting lines of sight from two or more known viewpoints. Given calibrated cameras and corresponding image observations, it recovers depth and structure by solving for the point that best explains the rays. Triangulation is a core operation in stereo vision, photogrammetry, structure-from-motion, and positioning systems
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:bundle-adjustment
requires:
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:3d-mapping
dependsOn:
  - urn:ngm:class:depth-sensing
implements:
  - urn:ngm:class:projective-geometry
bridgesTo:
  - urn:ngm:class:gps
uses:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:feature-matching
supports:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:slam
relatedTo:
  - urn:ngm:class:structured-light
  - urn:ngm:class:lidar
  - urn:ngm:class:spatial-computing
---

# Triangulation

Triangulation is the process of determining the 3D position of a point by intersecting lines of sight from two or more known viewpoints. Given calibrated cameras and corresponding image observations, it recovers depth and structure by solving for the point that best explains the rays. Triangulation is a core operation in stereo vision, photogrammetry, structure-from-motion, and positioning systems.
