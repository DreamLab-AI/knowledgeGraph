---
okf_version: "0.2"
type: Class
title: Graphics API
resource: urn:ngm:class:graphics-api
domain: spatial-computing
description: A Graphics API (Application Programming Interface) is a standardised software interface mediating between application code and Graphics Processing Unit (GPU) hardware, exposing primitives for command submission, shader compilation, resource allocation, synchronisation, and frame presentation acro...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:hardware-interface
  - urn:ngm:class:application-programming-interface
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:system-software
  - urn:ngm:class:rendering-interface
hasPart:
  - urn:ngm:class:command-buffer
  - urn:ngm:class:descriptor-set
  - urn:ngm:class:pipeline-state-object
  - urn:ngm:class:resource-management
  - urn:ngm:class:shader-compiler
  - urn:ngm:class:synchronisation-primitive
  - urn:ngm:class:resource-management
  - urn:ngm:class:swap-chain
  - urn:ngm:class:memory-allocator
requires:
  - urn:ngm:class:device-drivers
  - urn:ngm:class:gpu
  - urn:ngm:class:operating-system
  - urn:ngm:class:shader-language
  - urn:ngm:class:gpu
  - urn:ngm:class:device-drivers
  - urn:ngm:class:driver-compiler
enables:
  - urn:ngm:class:cross-platform-rendering
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:gpu-programming
  - urn:ngm:class:mesh-shading
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:spatial-computing-paradigm
dependsOn:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:device-drivers
  - urn:ngm:class:operating-system
  - urn:ngm:class:shader-compilation-toolchain
  - urn:ngm:class:window-system-integration
implements:
  - urn:ngm:class:command-submission-pattern
  - urn:ngm:class:resource-binding-model
  - urn:ngm:class:pipeline-compilation
  - urn:ngm:class:frame-presentation-protocol
  - urn:ngm:class:multi-queue-submission
contrastsWith:
  - urn:ngm:class:software-rasterisation
  - urn:ngm:class:cpu-rendering
  - urn:ngm:class:fixed-function-pipeline
  - urn:ngm:class:game-engine-framework
  - urn:ngm:class:higher-level-renderer
bridgesTo:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:hardware-abstraction-layer
uses:
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
  - urn:ngm:class:spir-v
  - urn:ngm:class:driver-software
  - urn:ngm:class:wgsl
  - urn:ngm:class:msl
  - urn:ngm:class:driver-software
  - urn:ngm:class:kernel-mode-driver
supports:
  - urn:ngm:class:ai-inference
  - urn:ngm:class:cad-software
  - urn:ngm:class:game-engine
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:game-engines
  - urn:ngm:class:professional-visualisation
  - urn:ngm:class:xr-compositing
  - urn:ngm:class:web-rendering
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:microsoft
  - urn:ngm:class:w3-c
  - urn:ngm:class:apple-inc-technology-corporation
  - urn:ngm:class:gpu-for-the-web-working-group
relatedTo:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:shader-language
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:xr-runtime-api
  - urn:ngm:class:driver-stack
  - urn:ngm:class:window-system-api
---

# Graphics API

A Graphics API (Application Programming Interface) is a standardised software interface mediating between application code and Graphics Processing Unit (GPU) hardware, exposing primitives for command submission, shader compilation, resource allocation, synchronisation, and frame presentation acro...
