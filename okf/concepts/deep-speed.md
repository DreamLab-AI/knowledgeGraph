---
okf_version: "0.2"
type: Class
title: DeepSpeed
resource: urn:ngm:class:deep-speed
domain: machine-learning
description: DeepSpeed is an open-source deep learning optimisation library developed by Microsoft Research that enables training and inference of extremely large neural network models through ZeRO (Zero Redundancy Optimizer) memory partitioning, pipeline parallelism, and mixed-precision arithmetic. It reduces the per-device memory footprint of model states by partitioning optimiser states, gradients, and para
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:high-performance-computing
hasPart:
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:sparse-attention
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:model-quantization
  - urn:ngm:class:zero-optimizer
requires:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:py-torch
  - urn:ngm:class:cuda
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:inference
  - urn:ngm:class:large-language-model
  - urn:ngm:class:distributed-inference
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:model-quantization
  - urn:ngm:class:distributed-ai-training
dependsOn:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:message-passing-interface
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:gpu-cluster
implements:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:mixed-precision-training
contrastsWith:
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:jax
  - urn:ngm:class:fully-sharded-data-parallel
  - urn:ngm:class:horovod
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:cuda
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:cuda
  - urn:ngm:class:py-torch
  - urn:ngm:class:message-passing-interface
  - urn:ngm:class:gpu-cluster
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:hugging-face
  - urn:ngm:class:azure-machine-learning
standardizedBy:
  - urn:ngm:class:microsoft
relatedTo:
  - urn:ngm:class:hugging-face-accelerate
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-quantization
  - urn:ngm:class:distributed-inference
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-compression
---

# DeepSpeed

DeepSpeed is an open-source deep learning optimisation library developed by Microsoft Research that enables training and inference of extremely large neural network models through ZeRO (Zero Redundancy Optimizer) memory partitioning, pipeline parallelism, and mixed-precision arithmetic. It reduces the per-device memory footprint of model states by partitioning optimiser states, gradients, and parameters across data-parallel devices.
