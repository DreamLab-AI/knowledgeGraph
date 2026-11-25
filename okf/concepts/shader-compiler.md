---
okf_version: "0.2"
type: Class
title: Shader Compiler
resource: urn:ngm:class:shader-compiler
domain: spatial-computing
description: "A shader compiler is the toolchain component that translates high-level shading-language source code, such as GLSL or HLSL, into an intermediate representation or the native instruction set executed by a GPU. It performs parsing, optimisation, register allocation, and code generation so that programmable graphics and compute stages run efficiently on diverse hardware. Shader compilation may occur "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:compiler
hasPart:
  - urn:ngm:class:spir-v
requires:
  - urn:ngm:class:compiler
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:gpu-compute
dependsOn:
  - urn:ngm:class:gpu
  - urn:ngm:class:graphics-api
uses:
  - urn:ngm:class:spir-v
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:gpu-rendering
partOf:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:graphics-api
relatedTo:
  - urn:ngm:class:vulkan
  - urn:ngm:class:rendering-pipeline
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Shader Compiler

A shader compiler is the toolchain component that translates high-level shading-language source code, such as GLSL or HLSL, into an intermediate representation or the native instruction set executed by a GPU. It performs parsing, optimisation, register allocation, and code generation so that programmable graphics and compute stages run efficiently on diverse hardware. Shader compilation may occur ahead of time or just in time, and its results are frequently cached to avoid costly recompilation.
