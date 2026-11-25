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
  - urn:ngm:class:mixture-of-experts
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Parallelism

Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often combined with data parallelism.
