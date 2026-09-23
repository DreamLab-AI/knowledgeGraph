---
okf_version: "0.2"
type: Class
title: Depth Buffer
resource: urn:ngm:class:depth-buffer
domain: spatial-computing
description: A depth buffer (also called a z-buffer) is a per-pixel array maintained during rasterised rendering that stores the depth of the nearest surface drawn at each screen position. As fragments are generated, their interpolated depth is compared against the stored value, and only fragments closer to the camera overwrite the colour and depth, resolving visibility automatically. The depth buffer is the s
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:rendering-pipeline
hasPart:
  - urn:ngm:class:texture-mapping
requires:
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:occlusion-culling
contrastsWith:
  - urn:ngm:class:ray-tracing
uses:
  - urn:ngm:class:gpu-acceleration
supports:
  - urn:ngm:class:computer-graphics
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:gpu
  - urn:ngm:class:spatial-computing
---

# Depth Buffer

A depth buffer (also called a z-buffer) is a per-pixel array maintained during rasterised rendering that stores the depth of the nearest surface drawn at each screen position. As fragments are generated, their interpolated depth is compared against the stored value, and only fragments closer to the camera overwrite the colour and depth, resolving visibility automatically. The depth buffer is the standard hidden-surface-removal mechanism in real-time graphics pipelines.
