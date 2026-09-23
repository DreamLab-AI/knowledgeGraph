---
okf_version: "0.2"
type: Class
title: GPU Architecture
resource: urn:ngm:class:gpu-architecture
domain: infrastructure
description: GPU architecture describes the design of graphics processing units as massively parallel processors built around thousands of simple shader cores, wide high-bandwidth memory interfaces, and dedicated fixed-function units for texturing, rasterisation, ray tracing, and tensor computation.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-hardware
hasPart:
  - urn:ngm:class:shader
  - urn:ngm:class:tensor-core
  - urn:ngm:class:memory-hierarchy
  - urn:ngm:class:graphics-pipeline
requires:
  - urn:ngm:class:memory-hierarchy
  - urn:ngm:class:high-bandwidth-memory
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:scientific-computing
implements:
  - urn:ngm:class:single-instruction-multiple-thread
  - urn:ngm:class:graphics-pipeline
contrastsWith:
  - urn:ngm:class:cpu-architecture
  - urn:ngm:class:neural-processing-unit
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:graphics-pipeline
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:opencl
  - urn:ngm:class:vulkan
supports:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:computer-hardware
relatedTo:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:hardware-accelerator
---

# GPU Architecture

GPU architecture describes the design of graphics processing units as massively parallel processors built around thousands of simple shader cores, wide high-bandwidth memory interfaces, and dedicated fixed-function units for texturing, rasterisation, ray tracing, and tensor computation.
