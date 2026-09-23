---
okf_version: "0.2"
type: Class
title: Shader Language
resource: urn:ngm:class:shader-language
domain: spatial-computing
description: A Shader Language is a domain-specific programming language designed to express GPU-executable programs that control one or more programmable stages of a graphics or compute pipeline. Shader languages provide specialised type systems encompassing vectors, matrices, samplers, and atomic types, while deliberately restricting features incompatible with massively parallel execution such as dynamic mem
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:geometry-shader
  - urn:ngm:class:tessellation-shader
  - urn:ngm:class:pixel-shader
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:graphics-api
  - urn:ngm:class:shader-compiler
enables:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:procedural-generation
dependsOn:
  - urn:ngm:class:spir-v
  - urn:ngm:class:parallel-computing
implements:
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
  - urn:ngm:class:wgsl
  - urn:ngm:class:metal-shading-language
contrastsWith:
  - urn:ngm:class:programming-language
  - urn:ngm:class:programming-language
  - urn:ngm:class:opencl-c
bridgesTo:
  - urn:ngm:class:machine-learning-accelerator
  - urn:ngm:class:neural-rendering
supports:
  - urn:ngm:class:webgpu
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:texture-mapping
---

# Shader Language

A Shader Language is a domain-specific programming language designed to express GPU-executable programs that control one or more programmable stages of a graphics or compute pipeline. Shader languages provide specialised type systems encompassing vectors, matrices, samplers, and atomic types, while deliberately restricting features incompatible with massively parallel execution such as dynamic memory allocation and unbounded recursion. Major production languages include GLSL (OpenGL Shading Language) for OpenGL and WebGL, HLSL (High-Level Shading Language) for DirectX, Metal Shading Language for Apple silicon and macOS/iOS platforms, and the emerging WGSL (WebGPU Shading Language) for the web-native WebGPU API. Modern shader toolchains commonly cross-compile to the hardware-agnostic intermediate representation SPIR-V, enabling portability across vendors and runtime environments.
