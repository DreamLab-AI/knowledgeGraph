---
okf_version: "0.2"
type: Class
title: Container Orchestration
resource: urn:ngm:class:container-orchestration
domain: infrastructure
description: "Container orchestration is the automated management of the deployment, scaling, networking, and lifecycle of containerised workloads across a cluster of machines. An orchestrator continuously reconciles the observed state of the cluster with a declarative desired state, handling scheduling, health checking, self-healing, and rolling updates. It abstracts the underlying hosts into a single pool of "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:orchestration
hasPart:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:service-discovery
  - urn:ngm:class:auto-scaling
requires:
  - urn:ngm:class:containerisation
  - urn:ngm:class:container-runtime
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:microservices
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:distributed-computing
uses:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:cloud-computing
supports:
  - urn:ngm:class:resilience
  - urn:ngm:class:devops
partOf:
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:gitops
---

# Container Orchestration

Container orchestration is the automated management of the deployment, scaling, networking, and lifecycle of containerised workloads across a cluster of machines. An orchestrator continuously reconciles the observed state of the cluster with a declarative desired state, handling scheduling, health checking, self-healing, and rolling updates. It abstracts the underlying hosts into a single pool of compute, enabling resilient, horizontally scalable services without manual intervention.
