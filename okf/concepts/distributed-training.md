---
okf_version: "0.2"
type: Class
title: Distributed Training
resource: urn:ngm:class:distributed-training
domain: machine-learning
description: Distributed training is a machine learning paradigm that partitions computation, data, and model parameters across multiple processors, accelerators, or networked nodes so that training jobs too large or too slow for a single device can complete at scale. The four primary parallelism axes are data parallelism (each worker processes a distinct data shard and aggregates gradients), model parallelism
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:high-performance-computing
hasPart:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:zero-redundancy-optimiser
  - urn:ngm:class:gradient-synchronisation
  - urn:ngm:class:all-reduce-algorithm
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:gradient-synchronisation
  - urn:ngm:class:high-speed-interconnect
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:collective-communication
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:foundation-model
  - urn:ngm:class:model-scaling
  - urn:ngm:class:large-language-models
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:scientific-machine-learning
dependsOn:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:collective-communication
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:all-reduce-algorithm
  - urn:ngm:class:ring-allreduce
  - urn:ngm:class:flash-attention
  - urn:ngm:class:sequence-parallelism
contrastsWith:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:single-device-training
  - urn:ngm:class:transfer-learning
bridgesTo:
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:jax
  - urn:ngm:class:py-torch
  - urn:ngm:class:nvidia-nccl
  - urn:ngm:class:deep-speed
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:torchtitan
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
standardizedBy:
  - urn:ngm:class:mlcommons
  - urn:ngm:class:mpi-standard
relatedTo:
  - urn:ngm:class:checkpoint-recovery
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:zero-redundancy-optimiser
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:hpc-cluster
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:mlperf
---

# Distributed Training

Distributed training is a machine learning paradigm that partitions computation, data, and model parameters across multiple processors, accelerators, or networked nodes so that training jobs too large or too slow for a single device can complete at scale. The four primary parallelism axes are data parallelism (each worker processes a distinct data shard and aggregates gradients), model parallelism (layers assigned to different devices), tensor parallelism (individual weight matrices sharded across devices), and pipeline parallelism (the forward pass staged across devices as a micro-batch pipeline). These strategies are composed into multi-dimensional schemes — commonly called 3D parallelism — that balance compute, memory, and communication trade-offs for workloads ranging from fine-tuning to pre-training frontier models with hundreds of billions of parameters.
