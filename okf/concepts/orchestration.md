---
okf_version: "0.2"
type: Class
title: Orchestration
resource: urn:ngm:class:orchestration
domain: infrastructure
description: The automated coordination, scheduling, and lifecycle management of containerised workloads, microservices, and distributed agents across heterogeneous infrastructure. In the context of metaverse and telecollaboration systems, orchestration—exemplified by Kubernetes—ensures that compute-intensive rendering, AI inference, and real-time communication services scale elastically and recover automatica
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:scheduler
  - urn:ngm:class:service-mesh
  - urn:ngm:class:control-plane
requires:
  - urn:ngm:class:digital-infrastructure
  - urn:ngm:class:container
  - urn:ngm:class:networking
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:auto-scaling
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:continuous-deployment
dependsOn:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:observability
bridgesTo:
  - urn:ngm:class:ai-inference
  - urn:ngm:class:multi-agent-systems
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:latency
  - urn:ngm:class:high-availability
partOf:
  - urn:ngm:class:cloud-native
---

# Orchestration

The automated coordination, scheduling, and lifecycle management of containerised workloads, microservices, and distributed agents across heterogeneous infrastructure. In the context of metaverse and telecollaboration systems, orchestration—exemplified by Kubernetes—ensures that compute-intensive rendering, AI inference, and real-time communication services scale elastically and recover automatically from failures.
