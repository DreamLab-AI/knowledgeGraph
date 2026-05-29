- ### Definition
  - CUDA (Compute Unified Device Architecture) is NVIDIA's proprietary parallel computing platform and programming model that exposes GPU hardware through a C/C++ extension, enabling thousands of threads to execute concurrently across GPU cores. It provides a hierarchical thread model of grids, blocks, and warps, alongside a managed memory model that spans host (CPU) and device (GPU) address spaces. CUDA underpins the majority of production deep learning training and inference workloads, acting as the primary execution substrate for frameworks such as PyTorch and TensorFlow.

- ### Semantic Classification
  - owl-class:: cuda:CUDA
  - owl-role:: Concept

- ### Relationships
  - enables [[Deep Learning]]
  - enables [[Training]]
  - enables [[Inference]]
  - requires [[GPU Compute]]
  - supports [[Neural Network]]
  - supports [[Machine Learning Framework]]

- ### Content
  - CUDA was introduced by NVIDIA in 2006 as the first broadly accessible general-purpose GPU (GPGPU) programming model. It abstracts the massively parallel hardware of NVIDIA GPUs through an extension to C and C++, allowing developers to write kernel functions executed across thousands of lightweight threads organised in a three-level hierarchy: grids of thread blocks, each containing warps of 32 threads that execute in lockstep via SIMT (Single Instruction, Multiple Threads) scheduling.
  - Memory management in CUDA spans multiple tiers — registers, shared memory per block, L1 and L2 caches, and global device memory — requiring explicit control for peak throughput. The CUDA runtime API and the lower-level driver API both expose this model, whilst cuBLAS, cuDNN, NCCL, and other curated libraries provide optimised primitives for linear algebra, deep neural network operations, and multi-GPU communication.
  - Deep learning frameworks including PyTorch and TensorFlow emit CUDA kernels either directly or via backends such as cuDNN and XLA. Mixed-precision training using FP16 or BF16 with CUDA's Tensor Core instructions delivers substantial throughput gains on Ampere and Hopper architectures. CUDA's dominance in the training and inference ecosystem makes it a de facto prerequisite for GPU-accelerated Machine Learning Infrastructure, though open alternatives such as ROCm (AMD) and oneAPI (Intel) exist at varying maturity levels.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z