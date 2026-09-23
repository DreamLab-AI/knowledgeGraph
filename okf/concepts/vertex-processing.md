---
okf_version: "0.2"
type: Class
title: Vertex Processing
resource: urn:ngm:class:vertex-processing
domain: spatial-computing
description: Vertex processing is the stage of the graphics pipeline that operates on each vertex of geometry, transforming its position from model space through world, view, and clip space, and computing or passing per-vertex attributes such as normals, texture coordinates, and colours. Executed largely by programmable vertex shaders on the GPU, it prepares primitives for clipping, perspective division, and r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graphics-pipeline
hasPart:
  - urn:ngm:class:vertex-shader
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:rasterization
  - urn:ngm:class:fragment-shading
dependsOn:
  - urn:ngm:class:shader
implements:
  - urn:ngm:class:geometry-processing
bridgesTo:
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu-pipeline
uses:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:real-time-rendering-pipeline
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:geometry-processing
  - urn:ngm:class:fragment-shading
  - urn:ngm:class:real-time-rendering-pipeline
---

# Vertex Processing

Vertex processing is the stage of the graphics pipeline that operates on each vertex of geometry, transforming its position from model space through world, view, and clip space, and computing or passing per-vertex attributes such as normals, texture coordinates, and colours. Executed largely by programmable vertex shaders on the GPU, it prepares primitives for clipping, perspective division, and rasterisation, and may feed subsequent geometry, tessellation, and fragment stages. As a foundational step in real-time rendering it determines screen-space placement and the interpolated inputs available to downstream shading.
