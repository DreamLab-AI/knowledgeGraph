---
okf_version: "0.2"
type: Class
title: GPU Computing
resource: urn:ngm:class:gpu-computing
domain: ai
description: GPU Computing is the use of graphics processing units as massively parallel co-processors to accelerate general-purpose computational workloads beyond rendering. Modern GPUs contain thousands of shader cores organised into streaming multiprocessors capable of executing thousands of threads simultaneously, making them ideal for data-parallel algorithms in deep learning training, scientific simulati
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:hardware-acceleration
requires:
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:interconnect-fabric
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:distributed-training
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:large-language-model
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:scientific-computing
contrastsWith:
  - urn:ngm:class:tensor-processing-unit
  - urn:ngm:class:cpu-computing
  - urn:ngm:class:field-programmable-gate-array
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:opencl
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:compute-shader
  - urn:ngm:class:compiler
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:compiler
relatedTo:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:nvlink
---

# GPU Computing

GPU Computing is the use of graphics processing units as massively parallel co-processors to accelerate general-purpose computational workloads beyond rendering. Modern GPUs contain thousands of shader cores organised into streaming multiprocessors capable of executing thousands of threads simultaneously, making them ideal for data-parallel algorithms in deep learning training, scientific simulation, and signal processing. Frameworks such as CUDA and OpenCL expose this parallelism to application developers through a hierarchical thread and memory model. GPU computing has become the primary accelerator substrate for large-scale machine learning, high-performance computing, and increasingly for inference serving at cloud scale.
