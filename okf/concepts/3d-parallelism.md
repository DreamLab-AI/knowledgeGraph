---
okf_version: "0.2"
type: Class
title: 3D Parallelism
resource: urn:ngm:class:3d-parallelism
domain: machine-learning
description: "3D parallelism is a distributed training strategy that combines data parallelism, tensor parallelism and pipeline parallelism along three independent axes to train models too large for a single accelerator or single parallelism scheme alone. Each axis partitions a different dimension of the problem: data parallelism splits the batch, tensor parallelism splits individual layers across devices, and "
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:distributed-training
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# 3D Parallelism

3D parallelism is a distributed training strategy that combines data parallelism, tensor parallelism and pipeline parallelism along three independent axes to train models too large for a single accelerator or single parallelism scheme alone. Each axis partitions a different dimension of the problem: data parallelism splits the batch, tensor parallelism splits individual layers across devices, and pipeline parallelism splits the layer stack across stages. Frameworks such as Megatron-LM and DeepSpeed implement 3D parallelism to scale training to thousands of GPUs.
