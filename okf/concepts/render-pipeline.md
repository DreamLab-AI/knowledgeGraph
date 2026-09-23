---
okf_version: "0.2"
type: Class
title: Render Pipeline
resource: urn:ngm:class:render-pipeline
domain: spatial-computing
description: A Render Pipeline is the ordered sequence of programmable and fixed-function GPU stages that transforms 3D scene geometry, material data, and lighting information into a final rasterised or ray-traced 2D image frame, typically encompassing vertex processing, tessellation, geometry shading, rasterisation, fragment shading, depth-stencil testing, blending, and screen-space post-processing. Modern gr
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:shader
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:post-processing
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:rasteriser
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:graphics-api
  - urn:ngm:class:scene-graph
enables:
  - urn:ngm:class:immersive-experience
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
dependsOn:
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:driver-model
contrastsWith:
  - urn:ngm:class:path-tracing
  - urn:ngm:class:offline-rendering
bridgesTo:
  - urn:ngm:class:machine-learning-accelerator
  - urn:ngm:class:neural-rendering
uses:
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:vulkan
  - urn:ngm:class:webgpu
  - urn:ngm:class:physically-based-rendering
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:physics-engine
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:occlusion-culling
---

# Render Pipeline

A Render Pipeline is the ordered sequence of programmable and fixed-function GPU stages that transforms 3D scene geometry, material data, and lighting information into a final rasterised or ray-traced 2D image frame, typically encompassing vertex processing, tessellation, geometry shading, rasterisation, fragment shading, depth-stencil testing, blending, and screen-space post-processing. Modern graphics APIs — including Vulkan, DirectX 12, Metal, and WebGPU — expose explicit, low-overhead control over pipeline state objects and synchronisation barriers, enabling advanced techniques such as deferred rendering, clustered shading, variable-rate shading, and hardware-accelerated ray tracing. The render pipeline is the core computational artefact of any real-time interactive graphics system and is equally foundational to offline path-traced production rendering, though the stage granularity and scheduling strategies differ considerably between the two contexts. In spatial computing and metaverse platforms, render pipeline design determines latency, fidelity, and energy consumption on resource-constrained XR devices.
