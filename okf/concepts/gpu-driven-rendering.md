---
okf_version: "0.2"
type: Class
title: Gpu Driven Rendering
resource: urn:ngm:class:gpu-driven-rendering
domain: spatial-computing
description: GPU-driven rendering is an architecture in which the GPU itself determines what to draw and issues its own draw commands, rather than relying on the CPU to traverse the scene and submit each object individually. Using compute shaders for culling and indirect, multi-draw commands, it minimises CPU overhead and draw-call cost, enabling scenes with very large object counts. It builds on compute capab
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:real-time-rendering
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:shader-compiler
  - urn:ngm:class:parallel-computing
enables:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:frustum-culling
dependsOn:
  - urn:ngm:class:gpu
implements:
  - urn:ngm:class:gpu-rendering
uses:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:graphics-api
supports:
  - urn:ngm:class:rasterization
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:real-time-rendering
relatedTo:
  - urn:ngm:class:vulkan
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:computer-graphics
---

# Gpu Driven Rendering

GPU-driven rendering is an architecture in which the GPU itself determines what to draw and issues its own draw commands, rather than relying on the CPU to traverse the scene and submit each object individually. Using compute shaders for culling and indirect, multi-draw commands, it minimises CPU overhead and draw-call cost, enabling scenes with very large object counts. It builds on compute capability, indirect drawing, and modern graphics APIs to keep the GPU saturated and scalable.
