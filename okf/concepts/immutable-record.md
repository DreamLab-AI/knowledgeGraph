---
okf_version: "0.2"
type: Class
title: Immutable Record
resource: urn:ngm:class:immutable-record
domain: blockchain
description: An immutable record is a data entry that, once written, cannot be altered or deleted without cryptographic or consensus-based detection of tampering. Immutability is enforced through hash chaining, Merkle trees, distributed ledger consensus mechanisms, or append-only data structures, making immutable records foundational to audit trails, provenance tracking, and trustworthy data archiving.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:audit-log
  - urn:ngm:class:data-provenance
  - urn:ngm:class:provenance-tracking
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:blockchain-ledger
relatedTo:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:trusted-timestamping
---

# Immutable Record

An immutable record is a data entry that, once written, cannot be altered or deleted without cryptographic or consensus-based detection of tampering. Immutability is enforced through hash chaining, Merkle trees, distributed ledger consensus mechanisms, or append-only data structures, making immutable records foundational to audit trails, provenance tracking, and trustworthy data archiving.
