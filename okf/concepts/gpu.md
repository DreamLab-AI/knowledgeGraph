---
okf_version: "0.2"
type: Class
title: GPU
resource: urn:ngm:class:gpu
domain: infrastructure
description: A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads, and increasingly used as the primary compute substrate for deep learning, scientific simulation, and XR rendering.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:graphics-processing
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:shader
  - urn:ngm:class:tensor-core
  - urn:ngm:class:video-memory
requires:
  - urn:ngm:class:parallel-programming-model
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:scientific-computing
dependsOn:
  - urn:ngm:class:pcie-bus
  - urn:ngm:class:cpu
implements:
  - urn:ngm:class:single-instruction-multiple-thread
contrastsWith:
  - urn:ngm:class:cpu
  - urn:ngm:class:neural-processing-unit
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:mining
  - urn:ngm:class:graphics-processing-unit
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:opencl
  - urn:ngm:class:vulkan
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
standardizedBy:
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:compute-shader
---

# GPU

A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads, and increasingly used as the primary compute substrate for deep learning, scientific simulation, and XR rendering.
