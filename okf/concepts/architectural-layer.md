---
okf_version: "0.2"
type: Class
title: Architectural Layer
resource: urn:ngm:class:architectural-layer
domain: infrastructure
description: An architectural layer is a discrete horizontal stratum within a layered software or system architecture, responsible for a cohesive set of concerns and communicating only with adjacent layers through well-defined interfaces. Layered decomposition is a fundamental pattern in software architecture that promotes separation of concerns, replaceability of individual layers, and independent evolution o
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:technology-infrastructure-domain-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:service-layer
  - urn:ngm:class:application-layer
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:hardware-abstraction
relatedTo:
  - urn:ngm:class:system-architecture
  - urn:ngm:class:api-standard
---

# Architectural Layer

An architectural layer is a discrete horizontal stratum within a layered software or system architecture, responsible for a cohesive set of concerns and communicating only with adjacent layers through well-defined interfaces. Layered decomposition is a fundamental pattern in software architecture that promotes separation of concerns, replaceability of individual layers, and independent evolution of distinct system capabilities. Classic examples include the OSI network model's seven layers, the three-tier application architecture (presentation, logic, data), and the cloud-native separation of infrastructure, platform, and application layers.
