---
okf_version: "0.2"
type: Class
title: Event Sourcing
resource: urn:ngm:class:event-sourcing
domain: distributed-systems
description: Event sourcing is an architectural pattern for data persistence in which the state of a system is stored not as a mutable current-state record but as an append-only, ordered log of discrete domain events — each representing a fact that occurred at a specific point in time. Current application state is derived by replaying the event log from the beginning (or from a periodic snapshot), making the f
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:event-projection
  - urn:ngm:class:snapshot
requires:
  - urn:ngm:class:event-store
  - urn:ngm:class:idempotency
enables:
  - urn:ngm:class:state-management
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:temporal-query
  - urn:ngm:class:retroactive-correction
implements:
  - urn:ngm:class:immutability
  - urn:ngm:class:cqrs
bridgesTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:agent-memory
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:data-persistence
  - urn:ngm:class:eventstoredb
  - urn:ngm:class:append-only-log
supports:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:optimistic-concurrency-control
relatedTo:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:audit-log
  - urn:ngm:class:domain-driven-design
  - urn:ngm:class:write-ahead-logging
---

# Event Sourcing

Event sourcing is an architectural pattern for data persistence in which the state of a system is stored not as a mutable current-state record but as an append-only, ordered log of discrete domain events — each representing a fact that occurred at a specific point in time. Current application state is derived by replaying the event log from the beginning (or from a periodic snapshot), making the full history of state transitions a first-class, queryable artefact. This contrasts with CRUD-oriented architectures where only the latest state is stored, discarding historical change information.
