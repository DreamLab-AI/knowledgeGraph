---
okf_version: "0.2"
type: Class
title: ACID Properties
resource: urn:ngm:class:acid-properties
domain: distributed-systems
description: ACID Properties are the four guarantees - Atomicity, Consistency, Isolation and Durability - that define a reliable database transaction. Atomicity ensures a transaction is all-or-nothing; Consistency preserves invariants; Isolation hides concurrent intermediate states; and Durability persists committed results across failures. Together they let applications reason about correctness despite concur
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:transaction
hasPart:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:fault-tolerance
requires:
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:two-phase-commit
enables:
  - urn:ngm:class:relational-database
  - urn:ngm:class:data-integrity
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:data-persistence
implements:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:reliability
contrastsWith:
  - urn:ngm:class:scalability
uses:
  - urn:ngm:class:two-phase-commit
supports:
  - urn:ngm:class:database-management-system
  - urn:ngm:class:database-systems
partOf:
  - urn:ngm:class:transaction
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:data-persistence
  - urn:ngm:class:distributed-systems
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ACID Properties

ACID Properties are the four guarantees - Atomicity, Consistency, Isolation and Durability - that define a reliable database transaction. Atomicity ensures a transaction is all-or-nothing; Consistency preserves invariants; Isolation hides concurrent intermediate states; and Durability persists committed results across failures. Together they let applications reason about correctness despite concurrency and crashes, distinguishing strongly consistent transactional systems from eventually consistent alternatives.
