---
okf_version: "0.2"
type: Class
title: Large-Scale Training
resource: urn:ngm:class:large-scale-training
domain: machine-learning
description: Machine learning training conducted at a scale that exceeds the capacity of a single accelerator, requiring workloads to be distributed across many GPUs or nodes. Large-scale training covers the full range of distributed regimes—pretraining, large fine-tuning runs, and reinforcement learning from feedback—and rests on parallelism strategies (data, tensor, pipeline, and expert parallelism), high-ba
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:model-training
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:distributed-training
enables:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
relatedTo:
  - urn:ngm:class:high-performance-computing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Large-Scale Training

Machine learning training conducted at a scale that exceeds the capacity of a single accelerator, requiring workloads to be distributed across many GPUs or nodes. Large-scale training covers the full range of distributed regimes—pretraining, large fine-tuning runs, and reinforcement learning from feedback—and rests on parallelism strategies (data, tensor, pipeline, and expert parallelism), high-bandwidth interconnects, checkpointing, and fault tolerance to keep thousands of accelerators productively synchronised for days or weeks.
