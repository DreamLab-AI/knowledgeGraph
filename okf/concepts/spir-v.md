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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# SPIR-V

SPIR-V is a binary intermediate representation for shaders and parallel-compute kernels standardised by the Khronos Group, used as the portable bytecode target for Vulkan, OpenCL, and OpenGL. High-level shading languages such as GLSL and HLSL compile to SPIR-V, which drivers then translate to native GPU instructions, decoupling source languages from hardware. It enables offline compilation, validation, and optimisation of graphics and compute programs across vendors.
