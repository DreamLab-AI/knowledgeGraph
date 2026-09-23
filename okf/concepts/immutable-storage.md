---
okf_version: "0.2"
type: Class
title: Immutable Storage
resource: urn:ngm:class:immutable-storage
domain: infrastructure
description: Immutable storage is a data persistence model in which written records cannot be modified or deleted for a defined period, preserving their integrity against tampering and accidental loss. It is realised through write-once-read-many policies, append-only logs, content addressing, and cryptographic hashing, and underpins audit trails, regulatory retention, and ransomware resilience. Immutability pr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-storage
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:append-only-log
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:compliance-audit-trail
implements:
  - urn:ngm:class:append-only-log
contrastsWith:
  - urn:ngm:class:object-storage
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:object-storage
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-integrity
  - urn:ngm:class:backup-and-recovery
partOf:
  - urn:ngm:class:data-storage
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:ipfs
  - urn:ngm:class:object-storage
  - urn:ngm:class:data-integrity
---

# Immutable Storage

Immutable storage is a data persistence model in which written records cannot be modified or deleted for a defined period, preserving their integrity against tampering and accidental loss. It is realised through write-once-read-many policies, append-only logs, content addressing, and cryptographic hashing, and underpins audit trails, regulatory retention, and ransomware resilience. Immutability provides verifiable evidence that data has not changed since it was committed.
