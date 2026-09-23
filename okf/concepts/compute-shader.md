---
okf_version: "0.2"
type: Class
title: Compute Shader
resource: urn:ngm:class:compute-shader
domain: spatial-computing
description: A Compute Shader is a programmable GPU kernel that executes arbitrary parallel computations outside the traditional graphics rendering pipeline, enabling general-purpose GPU (GPGPU) workloads such as physics simulation, procedural generation, image post-processing, and data-parallel algorithms within real-time 3D and metaverse applications.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
hasPart:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader-compiler
enables:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:procedural-generation
  - urn:ngm:class:post-processing
  - urn:ngm:class:gpu-driven-rendering
dependsOn:
  - urn:ngm:class:parallel-computing
contrastsWith:
  - urn:ngm:class:cpu-computing
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:hlsl
standardizedBy:
  - urn:ngm:class:vulkan
  - urn:ngm:class:webgpu
relatedTo:
  - urn:ngm:class:cuda
  - urn:ngm:class:opencl
---

# Compute Shader

A Compute Shader is a programmable GPU kernel that executes arbitrary parallel computations outside the traditional graphics rendering pipeline, enabling general-purpose GPU (GPGPU) workloads such as physics simulation, procedural generation, image post-processing, and data-parallel algorithms within real-time 3D and metaverse applications.
