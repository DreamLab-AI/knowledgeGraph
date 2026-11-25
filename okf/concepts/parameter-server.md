---
okf_version: "0.2"
type: Class
title: Parameter Server
resource: urn:ngm:class:parameter-server
domain: distributed-systems
description: A distributed systems architecture for large-scale machine learning in which a set of centralised server nodes holds the globally shared model parameters while many worker nodes compute gradients on partitions of the training data, pushing updates to the servers and pulling refreshed parameters back. The design decouples computation from state management, supports synchronous and asynchronous upda
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:federated-learning
implements:
  - urn:ngm:class:gradient-aggregation
contrastsWith:
  - urn:ngm:class:collective-communication
partOf:
  - urn:ngm:class:distributed-training
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Parameter Server

A distributed systems architecture for large-scale machine learning in which a set of centralised server nodes holds the globally shared model parameters while many worker nodes compute gradients on partitions of the training data, pushing updates to the servers and pulling refreshed parameters back. The design decouples computation from state management, supports synchronous and asynchronous update schemes, and underpinned the first generation of industrial-scale distributed training before decentralised all-reduce approaches became dominant.
