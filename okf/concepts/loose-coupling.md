---
okf_version: "0.2"
type: Class
title: Loose Coupling
resource: urn:ngm:class:loose-coupling
domain: infrastructure
description: Loose coupling is a design principle in which components of a system depend on one another only through stable, minimal interfaces rather than internal implementation details, so that each can evolve, fail, or be replaced independently. It reduces the ripple effect of change, improves testability, and is foundational to scalable distributed and event-driven architectures. Loose coupling is typical
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-architecture
requires:
  - urn:ngm:class:interface
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:microservices
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:coupling
bridgesTo:
  - urn:ngm:class:message-broker
uses:
  - urn:ngm:class:interface
  - urn:ngm:class:message-passing
  - urn:ngm:class:asynchronous-messaging
supports:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:service-mesh
  - urn:ngm:class:api-gateway
partOf:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:resilience
---

# Loose Coupling

Loose coupling is a design principle in which components of a system depend on one another only through stable, minimal interfaces rather than internal implementation details, so that each can evolve, fail, or be replaced independently. It reduces the ripple effect of change, improves testability, and is foundational to scalable distributed and event-driven architectures. Loose coupling is typically achieved through abstraction, asynchronous messaging, and well-defined contracts.
