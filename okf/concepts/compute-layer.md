---
okf_version: "0.2"
type: Class
title: Compute Layer
resource: urn:ngm:class:compute-layer
domain: infrastructure
description: Software layer managing computational resources and orchestration for rendering, simulation, physics, AI processing, and real-time processing within metaverse systems.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:experience-layer
  - urn:ngm:class:physics-engine
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:simulation-engine
  - urn:ngm:class:ai-processing-service
  - urn:ngm:class:compute-infrastructure
requires:
  - urn:ngm:class:gpu-resources
  - urn:ngm:class:data-storage-layer
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:processing-hardware
enables:
  - urn:ngm:class:ai-inference
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:resource-scheduler
  - urn:ngm:class:load-balancer
  - urn:ngm:class:container-orchestration
bridgesTo:
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:metaverse-architecture-stack
  - urn:ngm:class:metaverse-stack
---

# Compute Layer

Software layer managing computational resources and orchestration for rendering, simulation, physics, AI processing, and real-time processing within metaverse systems.
