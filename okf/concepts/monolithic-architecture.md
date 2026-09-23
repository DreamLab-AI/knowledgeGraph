---
okf_version: "0.2"
type: Class
title: Monolithic Architecture
resource: urn:ngm:class:monolithic-architecture
domain: infrastructure
description: Monolithic architecture is a software design style in which an application is built and deployed as a single, self-contained unit where the user interface, business logic, and data-access layers are tightly coupled within one codebase and process. Components communicate through in-process function calls rather than network protocols, simplifying development, testing, and deployment for small to me
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:system-architecture
hasPart:
  - urn:ngm:class:business-logic-layer
  - urn:ngm:class:data-access-layer
  - urn:ngm:class:presentation-layer
requires:
  - urn:ngm:class:single-codebase
enables:
  - urn:ngm:class:simplified-deployment
  - urn:ngm:class:atomic-refactoring
dependsOn:
  - urn:ngm:class:vertical-scaling
contrastsWith:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:distributed-architecture
bridgesTo:
  - urn:ngm:class:modular-monolith
  - urn:ngm:class:strangler-fig-pattern
uses:
  - urn:ngm:class:in-process-communication
  - urn:ngm:class:shared-database
supports:
  - urn:ngm:class:rapid-prototyping
partOf:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:n-tier-architecture
  - urn:ngm:class:deployment-unit
---

# Monolithic Architecture

Monolithic architecture is a software design style in which an application is built and deployed as a single, self-contained unit where the user interface, business logic, and data-access layers are tightly coupled within one codebase and process. Components communicate through in-process function calls rather than network protocols, simplifying development, testing, and deployment for small to medium systems. As applications grow, the monolith can become difficult to scale selectively, evolve independently, or deploy without full redeployment, which motivates migration toward modular or microservices architectures.
