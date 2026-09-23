---
okf_version: "0.2"
type: Class
title: Event Driven Architecture
resource: urn:ngm:class:event-driven-architecture
domain: distributed-systems
description: A software architecture pattern built from decoupled services that publish, consume, and route events representing state changes, enabling real-time responsiveness, independent scaling, and resilient distributed systems.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:system-architecture
hasPart:
  - urn:ngm:class:message-queue
requires:
  - urn:ngm:class:message-passing
  - urn:ngm:class:asynchronous-communication
enables:
  - urn:ngm:class:metaverse-infrastructure
  - urn:ngm:class:real-time-data-processing
  - urn:ngm:class:loose-coupling
  - urn:ngm:class:stream-processing
  - urn:ngm:class:metaverse-infrastructure
dependsOn:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:distributed-systems
implements:
  - urn:ngm:class:reactive-programming
  - urn:ngm:class:cqrs
contrastsWith:
  - urn:ngm:class:request-response-pattern
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:system-architecture
  - urn:ngm:class:iot-platform
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:rabbitmq
  - urn:ngm:class:event-sourcing
supports:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:saga-pattern
  - urn:ngm:class:observability
---

# Event Driven Architecture

A software architecture pattern built from decoupled services that publish, consume, and route events representing state changes, enabling real-time responsiveness, independent scaling, and resilient distributed systems.
