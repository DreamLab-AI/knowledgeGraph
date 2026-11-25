---
okf_version: "0.2"
type: Class
title: High Bandwidth Interconnect
resource: urn:ngm:class:high-bandwidth-interconnect
domain: machine-learning
description: A high-bandwidth interconnect is a communication link or fabric engineered to move very large volumes of data between processors, accelerators, or nodes with minimal latency, enabling tightly-coupled parallel computation. In machine learning it is the substrate over which gradients, activations, and parameters are exchanged during distributed training, directly bounding how efficiently models scal
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning
requires:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:data-centre
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:data-parallelism
dependsOn:
  - urn:ngm:class:network-fabric
  - urn:ngm:class:memory-bandwidth
bridgesTo:
  - urn:ngm:class:high-performance-computing
uses:
  - urn:ngm:class:nvlink
  - urn:ngm:class:rdma
  - urn:ngm:class:infiniband
supports:
  - urn:ngm:class:collective-communication
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:checkpoints
relatedTo:
  - urn:ngm:class:throughput
  - urn:ngm:class:latency
  - urn:ngm:class:gpu
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# High Bandwidth Interconnect

A high-bandwidth interconnect is a communication link or fabric engineered to move very large volumes of data between processors, accelerators, or nodes with minimal latency, enabling tightly-coupled parallel computation. In machine learning it is the substrate over which gradients, activations, and parameters are exchanged during distributed training, directly bounding how efficiently models scale across many devices. Technologies such as NVLink, InfiniBand, and RDMA fabrics provide the throughput that large-scale training demands.
