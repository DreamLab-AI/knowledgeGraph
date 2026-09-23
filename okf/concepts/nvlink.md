---
okf_version: "0.2"
type: Class
title: NVLink
resource: urn:ngm:class:nvlink
domain: ai
description: NVLink is NVIDIA's high-bandwidth, low-latency point-to-point interconnect that links GPUs directly to one another, and in some platforms to the CPU, providing far greater throughput than the PCIe bus it supplements. By creating a coherent, high-speed fabric between accelerators, NVLink enables fast peer-to-peer memory transfers and unified memory pooling across multiple GPUs. It is foundational t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gpu-computing
hasPart:
  - urn:ngm:class:bandwidth
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:cuda
enables:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:distributed-training
dependsOn:
  - urn:ngm:class:gpu
bridgesTo:
  - urn:ngm:class:distributed-training
uses:
  - urn:ngm:class:bandwidth
supports:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:latency
  - urn:ngm:class:cuda
---

# NVLink

NVLink is NVIDIA's high-bandwidth, low-latency point-to-point interconnect that links GPUs directly to one another, and in some platforms to the CPU, providing far greater throughput than the PCIe bus it supplements. By creating a coherent, high-speed fabric between accelerators, NVLink enables fast peer-to-peer memory transfers and unified memory pooling across multiple GPUs. It is foundational to multi-GPU training and inference of large neural networks, where the interconnect bandwidth between devices often determines the achievable scaling efficiency of model and tensor parallelism.
