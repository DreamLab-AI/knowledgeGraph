---
okf_version: "0.2"
type: Class
title: Collective Communication
resource: urn:ngm:class:collective-communication
domain: machine-learning
description: Collective communication is the class of synchronised, multi-party data-exchange operations in which a group of processes jointly participate, such as broadcast, scatter, gather, all-gather, reduce, and all-reduce. It provides the communication primitives that coordinate state across the nodes of a parallel or distributed system, and it is the backbone of distributed machine-learning training, whe
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-training
requires:
  - urn:ngm:class:interconnect
  - urn:ngm:class:gpu-cluster
enables:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:model-parallelism
dependsOn:
  - urn:ngm:class:message-passing
  - urn:ngm:class:rdma
implements:
  - urn:ngm:class:gradient-aggregation
uses:
  - urn:ngm:class:mpi
  - urn:ngm:class:infiniband
supports:
  - urn:ngm:class:parameter-server
partOf:
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:message-passing
  - urn:ngm:class:gradient-aggregation
  - urn:ngm:class:gpu-cluster
---

# Collective Communication

Collective communication is the class of synchronised, multi-party data-exchange operations in which a group of processes jointly participate, such as broadcast, scatter, gather, all-gather, reduce, and all-reduce. It provides the communication primitives that coordinate state across the nodes of a parallel or distributed system, and it is the backbone of distributed machine-learning training, where gradients and parameters are aggregated and synchronised across many accelerators. Implementations are optimised over high-speed interconnects to minimise the communication overhead that otherwise bottlenecks scaling.
