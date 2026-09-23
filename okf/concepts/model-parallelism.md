---
okf_version: "0.2"
type: Class
title: Model Parallelism
resource: urn:ngm:class:model-parallelism
domain: machine-learning
description: Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often comb
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:distributed-training
hasPart:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:expert-parallelism
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:high-bandwidth-interconnect
  - urn:ngm:class:collective-communication
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:foundation-model
  - urn:ngm:class:mixture-of-experts-architecture
dependsOn:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:nvlink
  - urn:ngm:class:rdma
implements:
  - urn:ngm:class:deep-speed
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:fsdp
contrastsWith:
  - urn:ngm:class:data-parallelism
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:hardware-accelerator
partOf:
  - urn:ngm:class:3d-parallelism
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:micro-batch-scheduling
  - urn:ngm:class:gradient-checkpointing
---

# Model Parallelism

Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often combined with data parallelism.
