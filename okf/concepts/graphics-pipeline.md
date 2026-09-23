---
okf_version: "0.2"
type: Class
title: Graphics Pipeline
resource: urn:ngm:class:graphics-pipeline
domain: spatial-computing
description: The graphics pipeline is the ordered sequence of stages that transforms a 3D scene description into a 2D raster image, encompassing vertex processing, primitive assembly, rasterisation, fragment shading, and output merging, executed on programmable GPU hardware and exposed through graphics APIs.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:rasterization
  - urn:ngm:class:primitive-assembly
  - urn:ngm:class:depth-buffer
requires:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:shader
  - urn:ngm:class:framebuffer
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
dependsOn:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
contrastsWith:
  - urn:ngm:class:path-tracing
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:rasterization
  - urn:ngm:class:shader
uses:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:vertex-buffer
  - urn:ngm:class:transform-matrix
supports:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:compute-shader
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:real-time-rendering
relatedTo:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:direct3d
  - urn:ngm:class:metal-api
---

# Graphics Pipeline

The graphics pipeline is the ordered sequence of stages that transforms a 3D scene description into a 2D raster image, encompassing vertex processing, primitive assembly, rasterisation, fragment shading, and output merging, executed on programmable GPU hardware and exposed through graphics APIs.
