---
okf_version: "0.2"
type: Class
title: Tessellation Shader
resource: urn:ngm:class:tessellation-shader
domain: spatial-computing
description: A tessellation shader is a programmable stage of the GPU graphics pipeline that subdivides coarse geometric patches into finer primitives at render time, controlling the level of detail of surfaces dynamically. It comprises a control phase that sets tessellation factors and an evaluation phase that positions the generated vertices. By adaptively refining meshes on the GPU, it produces smooth curve
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:shader-language
hasPart:
  - urn:ngm:class:rasterization
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:vertex-shader
enables:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:real-time-rendering
contrastsWith:
  - urn:ngm:class:compute-shader
uses:
  - urn:ngm:class:shader-language
supports:
  - urn:ngm:class:level-of-detail
partOf:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:webgpu
  - urn:ngm:class:rasterization
---

# Tessellation Shader

A tessellation shader is a programmable stage of the GPU graphics pipeline that subdivides coarse geometric patches into finer primitives at render time, controlling the level of detail of surfaces dynamically. It comprises a control phase that sets tessellation factors and an evaluation phase that positions the generated vertices. By adaptively refining meshes on the GPU, it produces smooth curved surfaces and displacement-mapped detail without inflating the source geometry.
