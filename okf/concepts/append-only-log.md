---
okf_version: "0.2"
type: Class
title: Append-Only Log
resource: urn:ngm:class:append-only-log
domain: blockchain
description: "An append-only log is a data structure in which records can only be added to the end and never modified or deleted in place, producing an immutable, totally ordered sequence of events. Each entry is durably persisted before subsequent entries, giving a tamper-evident history that consumers can replay deterministically from any offset. Append-only logs underpin event sourcing, distributed ledgers, "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-structure
requires:
  - urn:ngm:class:data-integrity
enables:
  - urn:ngm:class:audit-log
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:non-repudiation
implements:
  - urn:ngm:class:immutability
  - urn:ngm:class:event-sourcing
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:data-replication
partOf:
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:blockchain-ledger
---

# Append-Only Log

An append-only log is a data structure in which records can only be added to the end and never modified or deleted in place, producing an immutable, totally ordered sequence of events. Each entry is durably persisted before subsequent entries, giving a tamper-evident history that consumers can replay deterministically from any offset. Append-only logs underpin event sourcing, distributed ledgers, write-ahead logging and certificate transparency, where verifiability and an authoritative ordering of changes are required.
