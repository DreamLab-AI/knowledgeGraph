---
okf_version: "0.2"
type: Class
title: 3D Scene Reconstruction
resource: urn:ngm:class:3-d-scene-reconstruction
domain: spatial-computing
description: 3D Scene Reconstruction is the computational process of recovering a complete, coherent three-dimensional model of an environment or scene from sensor observations such as images, depth maps, or LiDAR returns, integrating multiple viewpoints and modalities into a unified representation. Methods include volumetric fusion, truncated signed distance function (TSDF) integration, neural implicit repres
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:3-d-reconstruction
enables:
  - urn:ngm:class:digital-twin-creation
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:ar-registration
uses:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:multi-view-stereo
relatedTo:
  - urn:ngm:class:3-d-scanning
  - urn:ngm:class:ne-rf
  - urn:ngm:class:gaussian-splatting
---

# 3D Scene Reconstruction

3D Scene Reconstruction is the computational process of recovering a complete, coherent three-dimensional model of an environment or scene from sensor observations such as images, depth maps, or LiDAR returns, integrating multiple viewpoints and modalities into a unified representation. Methods include volumetric fusion, truncated signed distance function (TSDF) integration, neural implicit representations, and Gaussian splatting, each offering different trade-offs between completeness, accuracy, and real-time capability. The output is used in robotics, autonomous driving, spatial computing, and cultural heritage documentation.
