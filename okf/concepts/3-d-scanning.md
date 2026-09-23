---
okf_version: "0.2"
type: Class
title: 3D Scanning
resource: urn:ngm:class:3-d-scanning
domain: spatial-computing
description: 3D Scanning is the process of capturing the three-dimensional shape, and optionally the colour and texture, of real-world objects, people, or environments using hardware such as structured-light scanners, time-of-flight LiDAR, photogrammetry rigs, or depth cameras, producing digital point clouds or meshes that represent the physical source. The resulting data feeds into digital preservation, rever
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:3-d-reconstruction
hasPart:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:mesh-generation
requires:
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:calibration
enables:
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:digital-twin-creation
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:reverse-engineering
  - urn:ngm:class:digital-heritage
contrastsWith:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:neural-radiance-field
bridgesTo:
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:medical-imaging
uses:
  - urn:ngm:class:3-d-li-dar
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight-sensor
supports:
  - urn:ngm:class:bim-virtual-model
  - urn:ngm:class:quality-inspection
  - urn:ngm:class:augmented-reality
relatedTo:
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:simultaneous-localisation-and-mapping
---

# 3D Scanning

3D Scanning is the process of capturing the three-dimensional shape, and optionally the colour and texture, of real-world objects, people, or environments using hardware such as structured-light scanners, time-of-flight LiDAR, photogrammetry rigs, or depth cameras, producing digital point clouds or meshes that represent the physical source. The resulting data feeds into digital preservation, reverse engineering, visual-effects production, quality inspection, and spatial computing pipelines. Accuracy, resolution, and scan volume are the primary quality axes that distinguish scanning technologies.
