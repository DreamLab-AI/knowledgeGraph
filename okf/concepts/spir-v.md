---
okf_version: "0.2"
type: Class
title: SPIR-V
resource: urn:ngm:class:spir-v
domain: infrastructure
description: SPIR-V is a binary intermediate representation for shaders and parallel-compute kernels standardised by the Khronos Group, used as the portable bytecode target for Vulkan, OpenCL, and OpenGL. High-level shading languages such as GLSL and HLSL compile to SPIR-V, which drivers then translate to native GPU instructions, decoupling source languages from hardware. It enables offline compilation, valida
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:technical-standard
relatedTo:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:rendering-pipeline
---

# SPIR-V

SPIR-V is a binary intermediate representation for shaders and parallel-compute kernels standardised by the Khronos Group, used as the portable bytecode target for Vulkan, OpenCL, and OpenGL. High-level shading languages such as GLSL and HLSL compile to SPIR-V, which drivers then translate to native GPU instructions, decoupling source languages from hardware. It enables offline compilation, validation, and optimisation of graphics and compute programs across vendors.
