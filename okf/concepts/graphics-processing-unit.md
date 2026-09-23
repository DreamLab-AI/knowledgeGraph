---
okf_version: "0.2"
type: Class
title: Graphics Processing Unit
resource: urn:ngm:class:graphics-processing-unit
domain: infrastructure
description: A Graphics Processing Unit is a parallel processor designed to accelerate the rendering of images and other data-parallel workloads through many concurrent execution units, and widely repurposed for general-purpose computing in machine learning, scientific simulation, and spatial computing.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:graphics-processing
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:shader
  - urn:ngm:class:compute-shader
requires:
  - urn:ngm:class:video-memory
  - urn:ngm:class:device-drivers
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:compute-shader
dependsOn:
  - urn:ngm:class:pcie-bus
  - urn:ngm:class:open-gl
implements:
  - urn:ngm:class:parallel-computing
contrastsWith:
  - urn:ngm:class:central-processing-unit
  - urn:ngm:class:neural-processing-unit
bridgesTo:
  - urn:ngm:class:machine-learning-accelerator
  - urn:ngm:class:extended-reality
  - urn:ngm:class:gpu
  - urn:ngm:class:open-gl
uses:
  - urn:ngm:class:floating-point-arithmetic
  - urn:ngm:class:memory-bandwidth
supports:
  - urn:ngm:class:vulkan
  - urn:ngm:class:directx
  - urn:ngm:class:opencl
partOf:
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:cuda
  - urn:ngm:class:tensor-core
---

# Graphics Processing Unit

A Graphics Processing Unit is a parallel processor designed to accelerate the rendering of images and other data-parallel workloads through many concurrent execution units, and widely repurposed for general-purpose computing in machine learning, scientific simulation, and spatial computing.
