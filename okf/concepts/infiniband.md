---
okf_version: "0.2"
type: Class
title: Infiniband
resource: urn:ngm:class:infiniband
domain: ai
description: InfiniBand is a high-throughput, low-latency switched-fabric interconnect standard used to connect servers, storage, and accelerators in high-performance computing and large-scale AI training clusters. It provides remote direct memory access (RDMA) that bypasses the operating system kernel, enabling near-wire-speed data movement between nodes. InfiniBand is widely deployed as the backbone fabric f
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:interconnect
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:collective-communication
  - urn:ngm:class:model-parallelism
contrastsWith:
  - urn:ngm:class:nvlink
bridgesTo:
  - urn:ngm:class:checkpoints
uses:
  - urn:ngm:class:rdma
  - urn:ngm:class:network-fabric
supports:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:data-centre
relatedTo:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:throughput
  - urn:ngm:class:latency
---

# Infiniband

InfiniBand is a high-throughput, low-latency switched-fabric interconnect standard used to connect servers, storage, and accelerators in high-performance computing and large-scale AI training clusters. It provides remote direct memory access (RDMA) that bypasses the operating system kernel, enabling near-wire-speed data movement between nodes. InfiniBand is widely deployed as the backbone fabric for GPU clusters where collective communication bandwidth determines training scalability.
