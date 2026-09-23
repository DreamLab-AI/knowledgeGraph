---
okf_version: "0.2"
type: Class
title: Tensor Parallelism
resource: urn:ngm:class:tensor-parallelism
domain: machine-learning
description: Tensor parallelism is a model-parallel training and inference technique that splits individual weight tensors, and the matrix multiplications that use them, across multiple accelerators so that each device holds and computes a shard of every layer. Partial results are combined with collective communication such as all-reduce. It lets models whose layers exceed a single device's memory run at scale
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:high-bandwidth-interconnect
  - urn:ngm:class:gpu-cluster
enables:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:distributed-inference
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:collective-communication
implements:
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:deep-speed
contrastsWith:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:pipeline-parallelism
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:nvlink
supports:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:compute-infrastructure
partOf:
  - urn:ngm:class:3d-parallelism
  - urn:ngm:class:model-parallelism
relatedTo:
  - urn:ngm:class:model-training
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:expert-parallelism
---

# Tensor Parallelism

Tensor parallelism is a model-parallel training and inference technique that splits individual weight tensors, and the matrix multiplications that use them, across multiple accelerators so that each device holds and computes a shard of every layer. Partial results are combined with collective communication such as all-reduce. It lets models whose layers exceed a single device's memory run at scale, and is typically combined with data and pipeline parallelism.
