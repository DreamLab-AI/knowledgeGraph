---
okf_version: "0.2"
type: Class
title: Gpu Memory
resource: urn:ngm:class:gpu-memory
domain: machine-learning
description: GPU memory is the high-bandwidth memory resident on or tightly coupled to a graphics processing unit that stores model weights, activations, gradients, and intermediate buffers during computation. Its capacity and bandwidth are frequently the binding constraint on the size of models that can be trained or served, motivating techniques such as quantisation, gradient checkpointing, and model paralle
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gpu
requires:
  - urn:ngm:class:memory-management
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network-training
dependsOn:
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:memory-bandwidth
contrastsWith:
  - urn:ngm:class:memory-bandwidth
uses:
  - urn:ngm:class:memory-management
supports:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:batch-size
partOf:
  - urn:ngm:class:gpu
relatedTo:
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:quantisation
  - urn:ngm:class:cuda
  - urn:ngm:class:tensor
  - urn:ngm:class:memory-bandwidth
---

# Gpu Memory

GPU memory is the high-bandwidth memory resident on or tightly coupled to a graphics processing unit that stores model weights, activations, gradients, and intermediate buffers during computation. Its capacity and bandwidth are frequently the binding constraint on the size of models that can be trained or served, motivating techniques such as quantisation, gradient checkpointing, and model parallelism. Efficient use of GPU memory directly determines achievable throughput and batch size.
