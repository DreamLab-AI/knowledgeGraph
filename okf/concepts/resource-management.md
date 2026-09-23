---
okf_version: "0.2"
type: Class
title: Resource Management
resource: urn:ngm:class:resource-management
domain: infrastructure
description: Resource Management is the systematic discipline of allocating, scheduling, monitoring, and optimising computational and physical resources — including CPU, GPU, memory, storage, and network bandwidth — across applications, services, and infrastructure to ensure efficient utilisation, quality-of-service guarantees, and graceful degradation under load. It encompasses the full asset lifecycle from p
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:scheduler
  - urn:ngm:class:autoscaling
  - urn:ngm:class:resource-pool
  - urn:ngm:class:quota-management
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:metaverse-infrastructure
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:containerisation
implements:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:service-level-agreement
contrastsWith:
  - urn:ngm:class:over-provisioning
bridgesTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:kubernetes
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:cost-optimisation
  - urn:ngm:class:devops
---

# Resource Management

Resource Management is the systematic discipline of allocating, scheduling, monitoring, and optimising computational and physical resources — including CPU, GPU, memory, storage, and network bandwidth — across applications, services, and infrastructure to ensure efficient utilisation, quality-of-service guarantees, and graceful degradation under load. It encompasses the full asset lifecycle from provisioning and pooling through dynamic scaling to decommissioning, balancing competing workload demands against capacity constraints. In distributed and cloud-native environments, resource management extends to orchestration of containerised workloads, quota enforcement, cost attribution, and autoscaling policies that respond to real-time demand signals. Effective resource management is a foundational prerequisite for reliable, cost-efficient, and performant infrastructure at scale.
