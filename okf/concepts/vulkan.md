---
okf_version: "0.2"
type: Class
title: Vulkan
resource: urn:ngm:class:vulkan
domain: spatial-computing
description: Vulkan is a low-overhead, cross-platform graphics and compute API developed by the Khronos Group and released in 2016 as the successor to OpenGL, designed to give developers explicit control over GPU resources including memory allocation, synchronisation, command buffer submission, and render pass configuration in order to minimise CPU overhead and achieve predictable, high-performance rendering a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:graphics-api
hasPart:
  - urn:ngm:class:pipeline-state-object
requires:
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:spir-v
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:real-time-rendering-pipeline
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:mesh-shading
implements:
  - urn:ngm:class:open-xr
contrastsWith:
  - urn:ngm:class:open-gl
  - urn:ngm:class:direct3d
  - urn:ngm:class:metal-api
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:safety-critical-systems
uses:
  - urn:ngm:class:shader-language
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:command-buffer
  - urn:ngm:class:descriptor-set
standardizedBy:
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:rendering-pipeline
---

# Vulkan

Vulkan is a low-overhead, cross-platform graphics and compute API developed by the Khronos Group and released in 2016 as the successor to OpenGL, designed to give developers explicit control over GPU resources including memory allocation, synchronisation, command buffer submission, and render pass configuration in order to minimise CPU overhead and achieve predictable, high-performance rendering across diverse hardware. Vulkan operates closer to metal than its predecessor: applications manage their own memory pools, pipeline state objects, descriptor sets, and queue families, while the driver's role is reduced to translating API calls into hardware commands with minimal hidden magic. Vulkan shaders are compiled to SPIR-V, a portable intermediate representation, enabling shader code authored in GLSL or HLSL to execute on any conforming GPU without driver-side shader compilation.
