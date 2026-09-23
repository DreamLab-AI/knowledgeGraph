---
okf_version: "0.2"
type: Class
title: Computational Infrastructure
resource: urn:ngm:class:computational-infrastructure
domain: infrastructure
description: Computational infrastructure refers to the ensemble of physical and virtualised hardware resources, networking fabric, storage systems, and supporting services that provide the computational substrate upon which software workloads execute. It encompasses data centres, server clusters, GPUs, networking interconnects, and the orchestration layers that manage resource allocation, scheduling, and faul
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:digital-infrastructure
hasPart:
  - urn:ngm:class:compute-resources
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:storage-infrastructure
  - urn:ngm:class:networking-infrastructure
  - urn:ngm:class:data-centre
requires:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:semiconductor-manufacturing
enables:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:hyperscale-computing
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:container-orchestration
supports:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:compute-layer
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:resource-scheduling
---

# Computational Infrastructure

Computational infrastructure refers to the ensemble of physical and virtualised hardware resources, networking fabric, storage systems, and supporting services that provide the computational substrate upon which software workloads execute. It encompasses data centres, server clusters, GPUs, networking interconnects, and the orchestration layers that manage resource allocation, scheduling, and fault tolerance. In the context of AI and large-scale distributed systems, computational infrastructure determines the ceiling on model scale, training throughput, and inference latency, making it a strategic bottleneck as much as a technical one.
