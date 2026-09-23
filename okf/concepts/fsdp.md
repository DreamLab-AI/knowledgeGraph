---
okf_version: "0.2"
type: Class
title: FSDP
resource: urn:ngm:class:fsdp
domain: machine-learning
description: Fully Sharded Data Parallel (FSDP) is a distributed training technique implemented natively in PyTorch that shards a model's parameters, gradients, and optimizer states across multiple GPUs or nodes, enabling training of models too large for a single device's memory. Each worker holds only a fraction of every parameter tensor and gathers the full tensor on demand via all-gather collective operatio
maturity: established
quality: 0.89
is-a:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:all-gather-collective
  - urn:ngm:class:reduce-scatter-collective
  - urn:ngm:class:sharded-parameter
  - urn:ngm:class:sharded-optimiser-state
  - urn:ngm:class:sharded-gradient
  - urn:ngm:class:distributed-checkpointing
  - urn:ngm:class:gradient-synchronisation
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:collective-communication
  - urn:ngm:class:gradient-synchronisation
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:py-torch
  - urn:ngm:class:nvidia-nccl
  - urn:ngm:class:mixed-precision-training
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:foundation-model
  - urn:ngm:class:model-scaling
  - urn:ngm:class:checkpoint-resharding
  - urn:ngm:class:large-language-models
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:distributed-inference
dependsOn:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:nvidia-nccl
  - urn:ngm:class:py-torch
implements:
  - urn:ngm:class:zero-stage-3
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:distributed-checkpointing
  - urn:ngm:class:zero-redundancy-optimiser
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:gradient-checkpointing
contrastsWith:
  - urn:ngm:class:deep-speed
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:distributed-data-parallel
  - urn:ngm:class:horovod
  - urn:ngm:class:pipeline-parallelism
uses:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:safetensors
  - urn:ngm:class:py-torch
  - urn:ngm:class:nvidia-nccl
  - urn:ngm:class:distributed-training
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:checkpoints
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-models
standardizedBy:
  - urn:ngm:class:pytorch-foundation
  - urn:ngm:class:meta-ai
relatedTo:
  - urn:ngm:class:checkpoints
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:zero-redundancy-optimiser
  - urn:ngm:class:torchtitan
  - urn:ngm:class:hugging-face-accelerate
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:distributed-training
  - urn:ngm:class:deep-speed
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:isambard-ai
---

# FSDP

Fully Sharded Data Parallel (FSDP) is a distributed training technique implemented natively in PyTorch that shards a model's parameters, gradients, and optimizer states across multiple GPUs or nodes, enabling training of models too large for a single device's memory. Each worker holds only a fraction of every parameter tensor and gathers the full tensor on demand via all-gather collective operations before each layer's forward computation, immediately discarding the assembled tensor after use so that only the local shard is persistently stored. FSDP implements the ZeRO Stage 3 memory partitioning algorithm as a first-class PyTorch primitive, and integrates with sharded Distributed Checkpointing (DCP) so that each rank writes and reads its own parameter shard independently, enabling checkpoint resharding across different cluster topologies at load time.
