---
okf_version: "0.2"
type: Class
title: Shader
resource: urn:ngm:class:shader
domain: spatial-computing
description: A shader is a programmable GPU program that replaces fixed-function rendering pipeline stages, executing artist-authored or engine-generated algorithms in parallel across thousands of GPU threads to determine vertex positions, surface colour, lighting, and post-process effects. Shader types include vertex, tessellation control, tessellation evaluation, geometry, fragment (pixel), mesh, ray-generat
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:geometry-shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:tessellation-shader
  - urn:ngm:class:ray-generation-shader
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader-language
  - urn:ngm:class:gpu-driver
enables:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:post-processing
  - urn:ngm:class:procedural-generation
contrastsWith:
  - urn:ngm:class:fixed-function-pipeline
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:interpolation
supports:
  - urn:ngm:class:rendering-technique
  - urn:ngm:class:visual-effects
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:augmented-reality
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:open-gl
partOf:
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:shader-language
  - urn:ngm:class:material-system
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
  - urn:ngm:class:webgpu
---

# Shader

A shader is a programmable GPU program that replaces fixed-function rendering pipeline stages, executing artist-authored or engine-generated algorithms in parallel across thousands of GPU threads to determine vertex positions, surface colour, lighting, and post-process effects. Shader types include vertex, tessellation control, tessellation evaluation, geometry, fragment (pixel), mesh, ray-generation, and compute shaders, each targeting a distinct stage of the GPU execution pipeline. Written in high-level shading languages such as GLSL, HLSL, Metal Shading Language, or WGSL, shaders are compiled to hardware-specific bytecode and scheduled by the GPU driver onto shader processor cores. In the context of spatial computing, shaders are the fundamental mechanism through which all real-time visual content is generated for head-mounted displays, AR overlays, and immersive 3D environments.
