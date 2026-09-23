---
okf_version: "0.2"
type: Class
title: Domain-Driven Design
resource: urn:ngm:class:domain-driven-design
domain: infrastructure
description: Domain-driven design (DDD) is an approach to software development that centres the design on a deep, shared model of the business domain, expressed in a ubiquitous language common to engineers and domain experts. It provides strategic patterns for partitioning large systems into bounded contexts and tactical patterns such as aggregates, entities and value objects for structuring the model within e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:entity
requires:
  - urn:ngm:class:domain-model
enables:
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:cqrs
implements:
  - urn:ngm:class:domain-model
contrastsWith:
  - urn:ngm:class:domain-model
bridgesTo:
  - urn:ngm:class:microservices-architecture
uses:
  - urn:ngm:class:entity
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:microservices-architecture
partOf:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:cqrs
---

# Domain-Driven Design

Domain-driven design (DDD) is an approach to software development that centres the design on a deep, shared model of the business domain, expressed in a ubiquitous language common to engineers and domain experts. It provides strategic patterns for partitioning large systems into bounded contexts and tactical patterns such as aggregates, entities and value objects for structuring the model within each context. DDD aims to keep complex software aligned with the evolving realities of the business it serves.
