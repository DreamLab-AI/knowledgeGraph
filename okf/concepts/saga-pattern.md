---
okf_version: "0.2"
type: Class
title: Saga Pattern
resource: urn:ngm:class:saga-pattern
domain: distributed-systems
description: The saga pattern is a distributed-systems design for managing long-lived business transactions that span multiple services without a global lock or two-phase commit. A saga is a sequence of local transactions, each of which has an associated compensating transaction that semantically undoes its effect if a later step fails. Coordination is achieved either through orchestration, where a central coo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:microservices
enables:
  - urn:ngm:class:eventual-consistency
dependsOn:
  - urn:ngm:class:event-driven-architecture
implements:
  - urn:ngm:class:eventual-consistency
contrastsWith:
  - urn:ngm:class:two-phase-commit
bridgesTo:
  - urn:ngm:class:orchestration
uses:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:orchestration
supports:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:reliability
partOf:
  - urn:ngm:class:microservices-architecture
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:microservices
---

# Saga Pattern

The saga pattern is a distributed-systems design for managing long-lived business transactions that span multiple services without a global lock or two-phase commit. A saga is a sequence of local transactions, each of which has an associated compensating transaction that semantically undoes its effect if a later step fails. Coordination is achieved either through orchestration, where a central coordinator drives the steps, or choreography, where services react to events, trading strong atomicity for eventual consistency and availability.
