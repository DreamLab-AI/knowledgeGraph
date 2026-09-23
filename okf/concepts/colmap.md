---
okf_version: "0.2"
type: Class
title: COLMAP
resource: urn:ngm:class:colmap
domain: metaverse
description: COLMAP is an open-source general-purpose Structure-from-Motion and multi-view stereo pipeline used to reconstruct three-dimensional scenes from unordered collections of photographs. It performs feature extraction, image matching, incremental camera pose estimation, triangulation, and dense point-cloud generation. COLMAP is widely used as a preprocessing step for neural radiance fields and 3D Gauss
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:structure-from-motion
enables:
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:gaussian-splatting
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:gpu-computing
relatedTo:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:spatial-mapping
---

# COLMAP

COLMAP is an open-source general-purpose Structure-from-Motion and multi-view stereo pipeline used to reconstruct three-dimensional scenes from unordered collections of photographs. It performs feature extraction, image matching, incremental camera pose estimation, triangulation, and dense point-cloud generation. COLMAP is widely used as a preprocessing step for neural radiance fields and 3D Gaussian Splatting pipelines. Its modular architecture supports both GPU-accelerated and CPU-only execution, making it accessible across a range of hardware configurations.
