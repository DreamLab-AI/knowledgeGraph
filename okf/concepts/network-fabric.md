---
okf_version: "0.2"
type: Class
title: Network Fabric
resource: urn:ngm:class:network-fabric
domain: infrastructure
description: A network fabric is a switched interconnect topology, typically non-blocking and multi-path such as a fat-tree or dragonfly, that provides uniform high-bandwidth, low-latency connectivity between many compute nodes. It is the physical and logical substrate over which technologies such as InfiniBand move data between GPUs or servers in a cluster. It underpins distributed training and high-performan
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:network-layer
requires:
  - urn:ngm:class:compute-infrastructure
enables:
  - urn:ngm:class:message-passing-interface
uses:
  - urn:ngm:class:infiniband
---

# Network Fabric

A network fabric is a switched interconnect topology, typically non-blocking and multi-path such as a fat-tree or dragonfly, that provides uniform high-bandwidth, low-latency connectivity between many compute nodes. It is the physical and logical substrate over which technologies such as InfiniBand move data between GPUs or servers in a cluster. It underpins distributed training and high-performance computing workloads that depend on collective communication primitives such as the Message Passing Interface.
