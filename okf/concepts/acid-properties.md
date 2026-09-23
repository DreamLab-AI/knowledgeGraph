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
---

# ACID Properties

ACID Properties are the four guarantees - Atomicity, Consistency, Isolation and Durability - that define a reliable database transaction. Atomicity ensures a transaction is all-or-nothing; Consistency preserves invariants; Isolation hides concurrent intermediate states; and Durability persists committed results across failures. Together they let applications reason about correctness despite concurrency and crashes, distinguishing strongly consistent transactional systems from eventually consistent alternatives.
