---
okf_version: "0.2"
type: Class
title: Rdma
resource: urn:ngm:class:rdma
domain: machine-learning
description: Remote Direct Memory Access (RDMA) is a networking capability that lets one computer read from or write to the memory of another without involving either machine's operating system or CPU on the data path. By bypassing kernel buffering and copying, RDMA delivers very low latency and high throughput, which is essential for the collective communication patterns of large-scale distributed training. I
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:networking
  - urn:ngm:class:infra-network-and-comms
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:collective-communication
  - urn:ngm:class:low-latency
dependsOn:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:memory-bandwidth
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:tensor-parallelism
partOf:
  - urn:ngm:class:networking
relatedTo:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:gpu
---

# Rdma

Remote Direct Memory Access (RDMA) is a networking capability that lets one computer read from or write to the memory of another without involving either machine's operating system or CPU on the data path. By bypassing kernel buffering and copying, RDMA delivers very low latency and high throughput, which is essential for the collective communication patterns of large-scale distributed training. It is exposed through fabrics such as InfiniBand and RoCE and underpins high-performance computing clusters.
