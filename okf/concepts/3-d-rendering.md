---
okf_version: "0.2"
type: Class
title: 3D Rendering
resource: urn:ngm:class:3-d-rendering
domain: spatial-computing
description: 3D rendering is the computational process of generating a two-dimensional image or animation from a three-dimensional scene description by simulating the interaction of light with surfaces, materials, and geometry. It encompasses techniques ranging from real-time rasterization used in interactive applications to physically-based ray tracing and path tracing used for photorealistic offline producti
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:path-tracing
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:render-pipeline
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:virtual-lighting-model
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:virtual-lighting-model
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:real-time-graphics
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:3-d-rendering-engine
bridgesTo:
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:3-d-content-generation
uses:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:3-d-model
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:shader
  - urn:ngm:class:scene-graph
  - urn:ngm:class:shader
partOf:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:spatial-computing
relatedTo:
  - urn:ngm:class:global-illumination
  - urn:ngm:class:anti-aliasing
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:spatial-computing
---

# 3D Rendering

3D rendering is the computational process of generating a two-dimensional image or animation from a three-dimensional scene description by simulating the interaction of light with surfaces, materials, and geometry. It encompasses techniques ranging from real-time rasterization used in interactive applications to physically-based ray tracing and path tracing used for photorealistic offline production. The pipeline converts geometric primitives, shader programs, texture maps, and lighting data into final pixel colours via a GPU compute pipeline or software renderer. Contemporary rendering also incorporates neural methods such as Neural Radiance Fields and 3D Gaussian Splatting, as well as AI-driven upscaling and denoising, blurring the boundary between classical computer graphics and machine learning.
