---
okf_version: "0.2"
type: Class
title: Distributed AI Training
resource: urn:ngm:class:distributed-ai-training
domain: ai
description: Distributed AI training is the practice of training machine-learning models across many compute nodes in parallel to handle datasets and model sizes that exceed a single machine. It uses strategies such as data parallelism, model and tensor parallelism, and pipeline parallelism, coordinated by collective communication and gradient synchronisation. It is essential for training large neural networks
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:sequence-parallelism
  - urn:ngm:class:gradient-synchronisation
  - urn:ngm:class:all-reduce
  - urn:ngm:class:zero-optimiser
  - urn:ngm:class:gradient-compression
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:high-speed-interconnect
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:collective-communication
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:reinforcement-learning-from-human-feedback
dependsOn:
  - urn:ngm:class:nccl
  - urn:ngm:class:infiniband
  - urn:ngm:class:nvlink
  - urn:ngm:class:py-torch
  - urn:ngm:class:deep-speed
  - urn:ngm:class:megatron-lm
implements:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:federated-learning
  - urn:ngm:class:di-lo-co
contrastsWith:
  - urn:ngm:class:single-device-training
  - urn:ngm:class:federated-learning
  - urn:ngm:class:edge-ai-training
uses:
  - urn:ngm:class:zero-optimiser
  - urn:ngm:class:fsdp
  - urn:ngm:class:ring-allreduce
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:activation-recomputation
supports:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:diffusion-models
standardizedBy:
  - urn:ngm:class:mlperf-training-benchmark
  - urn:ngm:class:neurips-systems-track
  - urn:ngm:class:mlsys-conference
relatedTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:di-lo-co
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:mlops
  - urn:ngm:class:model-compression
  - urn:ngm:class:transfer-learning
---

# Distributed AI Training

Distributed AI training is the practice of training machine-learning models across many compute nodes in parallel to handle datasets and model sizes that exceed a single machine. It uses strategies such as data parallelism, model and tensor parallelism, and pipeline parallelism, coordinated by collective communication and gradient synchronisation. It is essential for training large neural networks within feasible time and memory budgets.
