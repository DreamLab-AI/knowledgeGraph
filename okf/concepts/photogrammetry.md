---
okf_version: "0.2"
type: Class
title: Photogrammetry
resource: urn:ngm:class:photogrammetry
domain: spatial-computing
description: A computational technique for reconstructing 3D geometry from overlapping photographic images through mathematical analysis of correspondences, camera poses, and geometric transformations to extract spatial information from 2D image data.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-detection
  - urn:ngm:class:mesh-reconstruction
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:triangulation
  - urn:ngm:class:image-matching
requires:
  - urn:ngm:class:computational-resources
  - urn:ngm:class:camera
  - urn:ngm:class:image-processing-software
  - urn:ngm:class:multiple-images
  - urn:ngm:class:overlapping-coverage
enables:
  - urn:ngm:class:asset-digitization
  - urn:ngm:class:digital-twin-construction
  - urn:ngm:class:spatial-measurement
  - urn:ngm:class:3d-model-creation
  - urn:ngm:class:terrain-mapping
dependsOn:
  - urn:ngm:class:computer-vision-algorithms
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:multi-view-geometry
  - urn:ngm:class:camera-models
partOf:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:reality-capture-workflow
  - urn:ngm:class:3-d-reconstruction
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Photogrammetry

A computational technique for reconstructing 3D geometry from overlapping photographic images through mathematical analysis of correspondences, camera poses, and geometric transformations to extract spatial information from 2D image data.
