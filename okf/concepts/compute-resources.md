---
okf_version: "0.2"
type: Class
title: Compute Resources
resource: urn:ngm:class:compute-resources
domain: infrastructure
description: "Compute resources are the aggregate processing capacity available to execute computational workloads, encompassing CPUs, GPUs, specialised accelerators (TPUs, NPUs), memory, network bandwidth, and associated storage I/O. They are quantified by metrics such as FLOPS, memory bandwidth, core count, and clock speed, and are provisioned via physical hardware, virtualised cloud instances, or serverless "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:computational-resources
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:gpu-resources
  - urn:ngm:class:compute-layer
  - urn:ngm:class:cpu
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:network-bandwidth
requires:
  - urn:ngm:class:power-infrastructure
  - urn:ngm:class:cooling-system
enables:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:model-training
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:inference
  - urn:ngm:class:distributed-training
dependsOn:
  - urn:ngm:class:virtualisation
contrastsWith:
  - urn:ngm:class:edge-computing
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
supports:
  - urn:ngm:class:workload-scheduling
  - urn:ngm:class:containerisation
partOf:
  - urn:ngm:class:data-centre
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:resource-allocation
---

# Compute Resources

Compute resources are the aggregate processing capacity available to execute computational workloads, encompassing CPUs, GPUs, specialised accelerators (TPUs, NPUs), memory, network bandwidth, and associated storage I/O. They are quantified by metrics such as FLOPS, memory bandwidth, core count, and clock speed, and are provisioned via physical hardware, virtualised cloud instances, or serverless functions. Effective allocation and scheduling of compute resources is the foundational concern of cloud computing, high-performance computing, and AI infrastructure.
