---
okf_version: "0.2"
type: Class
title: Gpu Programming
resource: urn:ngm:class:gpu-programming
domain: spatial-computing
description: GPU programming is the practice of writing software that exploits the massively parallel architecture of graphics processing units to accelerate computation across thousands of concurrent threads. It encompasses both graphics pipelines, expressed through shaders, and general-purpose compute expressed through frameworks such as CUDA, OpenCL, and Vulkan compute. Effective GPU programming requires re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:high-performance-computing
hasPart:
  - urn:ngm:class:shader
  - urn:ngm:class:compute-shader
requires:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:memory-management
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:ray-tracing
implements:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:fragment-shader
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:opencl
  - urn:ngm:class:vulkan
  - urn:ngm:class:simd
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:rendering
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:parallel-computing
---

# Gpu Programming

GPU programming is the practice of writing software that exploits the massively parallel architecture of graphics processing units to accelerate computation across thousands of concurrent threads. It encompasses both graphics pipelines, expressed through shaders, and general-purpose compute expressed through frameworks such as CUDA, OpenCL, and Vulkan compute. Effective GPU programming requires reasoning about memory hierarchies, thread divergence, and data parallelism to achieve high throughput on suitable workloads.
