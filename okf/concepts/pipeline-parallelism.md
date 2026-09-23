---
okf_version: "0.2"
type: Class
title: Pipeline Parallelism
resource: urn:ngm:class:pipeline-parallelism
domain: machine-learning
description: Pipeline parallelism splits a computation into ordered stages assigned to different processing units, so that distinct items occupy different stages at once and throughput rises once the pipeline is filled. It is widely used to train large deep learning models across multiple devices by assigning successive layers or micro-batches to separate accelerators.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-computing
requires:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:micro-batch-scheduling
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:high-bandwidth-interconnect
implements:
  - urn:ngm:class:graphics-pipeline
contrastsWith:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:expert-parallelism
bridgesTo:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:distributed-training
uses:
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:gradient-accumulation
supports:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:data-parallelism
partOf:
  - urn:ngm:class:model-parallelism
relatedTo:
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:deep-speed
---

# Pipeline Parallelism

Pipeline parallelism splits a computation into ordered stages assigned to different processing units, so that distinct items occupy different stages at once and throughput rises once the pipeline is filled. It is widely used to train large deep learning models across multiple devices by assigning successive layers or micro-batches to separate accelerators.
