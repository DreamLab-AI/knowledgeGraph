---
okf_version: "0.2"
type: Class
title: CUDA
resource: urn:ngm:class:cuda
domain: infrastructure
description: CUDA (Compute Unified Device Architecture) is NVIDIA's proprietary parallel computing platform and programming model that exposes GPU hardware through a C/C++ extension, enabling thousands of threads to execute concurrently across thousands of GPU cores via a three-level hierarchy of grids, blocks, and warps. It provides a unified memory model spanning host (CPU) and device (GPU) address spaces, c
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:parallel-computing
hasPart:
  - urn:ngm:class:tensor-core
  - urn:ngm:class:cublas
  - urn:ngm:class:cudnn
  - urn:ngm:class:nccl
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:nvidia-gpu
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:training
  - urn:ngm:class:inference
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:scientific-computing
contrastsWith:
  - urn:ngm:class:rocm
  - urn:ngm:class:opencl
  - urn:ngm:class:oneapi
  - urn:ngm:class:metal-compute
bridgesTo:
  - urn:ngm:class:gpu-rendering
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:gpu-rendering
uses:
  - urn:ngm:class:shared-memory
  - urn:ngm:class:simt-execution
supports:
  - urn:ngm:class:neural-network
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:large-language-model
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:py-torch
  - urn:ngm:class:memory-bandwidth
---

# CUDA

CUDA (Compute Unified Device Architecture) is NVIDIA's proprietary parallel computing platform and programming model that exposes GPU hardware through a C/C++ extension, enabling thousands of threads to execute concurrently across thousands of GPU cores via a three-level hierarchy of grids, blocks, and warps. It provides a unified memory model spanning host (CPU) and device (GPU) address spaces, complemented by curated libraries such as cuBLAS, cuDNN, and NCCL that deliver optimised primitives for linear algebra, deep neural network operations, and multi-GPU communication. Originally released in 2006, CUDA has become the de facto execution substrate for production deep learning training and inference, underpinning frameworks such as PyTorch and TensorFlow, and is the primary determinant of GPU vendor lock-in in the AI infrastructure stack.
