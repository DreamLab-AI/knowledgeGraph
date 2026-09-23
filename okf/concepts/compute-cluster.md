---
okf_version: "0.2"
type: Class
title: Compute Cluster
resource: urn:ngm:class:compute-cluster
domain: artificial-intelligence
description: "A compute cluster is a collection of interconnected computers that work together as a single system to execute large or parallel workloads. Nodes are coordinated by a scheduler that allocates jobs across processors, accelerators, and memory, sharing high-speed networking and often a common storage fabric. Clusters underpin large-scale model training, simulation, and data processing where a single "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:high-performance-computing
requires:
  - urn:ngm:class:scheduler
  - urn:ngm:class:resource-management
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:data-centre
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:mlops
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:data-centre
  - urn:ngm:class:deep-learning
---

# Compute Cluster

A compute cluster is a collection of interconnected computers that work together as a single system to execute large or parallel workloads. Nodes are coordinated by a scheduler that allocates jobs across processors, accelerators, and memory, sharing high-speed networking and often a common storage fabric. Clusters underpin large-scale model training, simulation, and data processing where a single machine cannot supply enough compute.
