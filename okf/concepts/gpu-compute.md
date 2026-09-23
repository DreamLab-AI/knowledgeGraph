---
okf_version: "0.2"
type: Class
title: GPU Compute
resource: urn:ngm:class:gpu-compute
domain: artificial-intelligence
description: GPU Compute (General-Purpose GPU computing, GPGPU) is the practice of executing data-parallel numerical workloads on Graphics Processing Units originally designed for rasterising 3D geometry, exploiting their thousands of shader cores and high-bandwidth memory to perform tensor operations — principally matrix multiplications and convolutions — at throughputs far exceeding those achievable on CPUs.
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:tensor-core
  - urn:ngm:class:cuda
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:cuda
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:nvlink
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:gpu-memory-management
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:large-language-model
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:diffusion-model
contrastsWith:
  - urn:ngm:class:tpu
  - urn:ngm:class:cpu-compute
  - urn:ngm:class:neuromorphic-computing
bridgesTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:ray-tracing
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:rocm
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:reinforcement-learning
partOf:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:machine-learning-discipline-infrastructure
relatedTo:
  - urn:ngm:class:energy-consumption
  - urn:ngm:class:data-centre
  - urn:ngm:class:model-parallelism
---

# GPU Compute

GPU Compute (General-Purpose GPU computing, GPGPU) is the practice of executing data-parallel numerical workloads on Graphics Processing Units originally designed for rasterising 3D geometry, exploiting their thousands of shader cores and high-bandwidth memory to perform tensor operations — principally matrix multiplications and convolutions — at throughputs far exceeding those achievable on CPUs. Programming models such as NVIDIA CUDA and AMD ROCm expose the GPU's Single Instruction Multiple Data (SIMD) execution model to software, enabling general-purpose scientific, engineering, and machine-learning workloads to run directly on the GPU die. GPU compute is the dominant hardware substrate for training and inference of deep neural networks, large language models, and diffusion models, with specialised Tensor Core and matrix-engine hardware units providing mixed-precision acceleration orders of magnitude beyond scalar compute. The field now extends to heterogeneous cluster computing, where thousands of GPUs are interconnected via NVLink and high-speed fabrics to train models at scales that would be infeasible on any single device.
