---
okf_version: "0.2"
type: Class
title: GPU Acceleration
resource: urn:ngm:class:gpu-acceleration
domain: infrastructure
description: "GPU Acceleration is the use of graphics processing units to perform general-purpose computational workloads in a massively parallel fashion, exploiting thousands of shader cores arranged in a single-instruction-multiple-data (SIMD) architecture to achieve throughput orders of magnitude beyond conventional CPUs for data-parallel tasks such as matrix multiplication and tensor contraction. It is the "
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:hardware-acceleration
hasPart:
  - urn:ngm:class:tensor-core
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:streaming-multiprocessor
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:parallel-programming-model
  - urn:ngm:class:memory-bandwidth
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:inference
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:scientific-simulation
  - urn:ngm:class:large-language-model
  - urn:ngm:class:ray-tracing
dependsOn:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:pcie-interconnect
contrastsWith:
  - urn:ngm:class:cpu-computing
  - urn:ngm:class:tensor-processing-unit
  - urn:ngm:class:neuromorphic-computing
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:extended-reality
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:compute-shader
  - urn:ngm:class:opencl
  - urn:ngm:class:mixed-precision-training
supports:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:inference-serving
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
partOf:
  - urn:ngm:class:compute-infrastructure
relatedTo:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:distributed-training
  - urn:ngm:class:quantisation
---

# GPU Acceleration

GPU Acceleration is the use of graphics processing units to perform general-purpose computational workloads in a massively parallel fashion, exploiting thousands of shader cores arranged in a single-instruction-multiple-data (SIMD) architecture to achieve throughput orders of magnitude beyond conventional CPUs for data-parallel tasks such as matrix multiplication and tensor contraction. It is the dominant execution paradigm for training and inference in modern deep learning, scientific simulation, and real-time rendering pipelines. The programming model is exposed through vendor APIs such as CUDA and ROCm, as well as cross-platform standards including OpenCL and SYCL. Hierarchical parallelism — threads grouped into warps, warps into thread blocks, blocks into grids dispatched across streaming multiprocessors — enables fine-grained exploitation of data parallelism at every level of the memory hierarchy.
