---
okf_version: "0.2"
type: Class
title: Write-Ahead Logging
resource: urn:ngm:class:write-ahead-logging
domain: infrastructure
description: Write-Ahead Logging (WAL) is a durability technique in which changes are recorded to a sequential append-only log before they are applied to the main data store. By guaranteeing that the log is flushed to stable storage before the corresponding pages are modified, the system can recover a consistent state after a crash by replaying or undoing logged operations. WAL is foundational to transactional
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-persistence
hasPart:
  - urn:ngm:class:audit-trail
requires:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:data-integrity
enables:
  - urn:ngm:class:transaction
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-integrity
dependsOn:
  - urn:ngm:class:data-persistence
implements:
  - urn:ngm:class:data-integrity
bridgesTo:
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:data-persistence
supports:
  - urn:ngm:class:relational-database
  - urn:ngm:class:database-management-system
  - urn:ngm:class:reliability
partOf:
  - urn:ngm:class:data-persistence
relatedTo:
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:database-systems
  - urn:ngm:class:data-management
---

# Write-Ahead Logging

Write-Ahead Logging (WAL) is a durability technique in which changes are recorded to a sequential append-only log before they are applied to the main data store. By guaranteeing that the log is flushed to stable storage before the corresponding pages are modified, the system can recover a consistent state after a crash by replaying or undoing logged operations. WAL is foundational to transactional databases, providing atomicity and durability without expensive synchronous writes to scattered data pages.
