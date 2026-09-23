---
okf_version: "0.2"
type: Class
title: Geometry Shader
resource: urn:ngm:class:geometry-shader
domain: spatial-computing
description: A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation. Unlike vertex shaders, it can create or discard primitives, emitting zero or more output primitives for each input. This capability supports effects such as silhouette extrusion, point-sprite expansion and dynami
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:shader-language
hasPart:
  - urn:ngm:class:graphics-pipeline
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:graphics-processing-unit
enables:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:particle-system
contrastsWith:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:compute-shader
uses:
  - urn:ngm:class:hlsl
  - urn:ngm:class:glsl
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:visual-effects
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:rasterization
  - urn:ngm:class:graphics-api
---

# Geometry Shader

A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation. Unlike vertex shaders, it can create or discard primitives, emitting zero or more output primitives for each input. This capability supports effects such as silhouette extrusion, point-sprite expansion and dynamic level-of-detail generation directly on the GPU.
