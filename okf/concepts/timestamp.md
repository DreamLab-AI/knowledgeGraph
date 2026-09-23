---
okf_version: "0.2"
type: Class
title: Timestamp
resource: urn:ngm:class:timestamp
domain: blockchain
description: A recorded value indicating the time of block creation in a blockchain system, embedded in each block header to establish chronological ordering of the chain and enable time-based protocol rules. Timestamps support difficulty adjustment, consensus validity checks, and provide an immutable audit trail for transaction ordering and data provenance.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:network-time-protocol
  - urn:ngm:class:cryptographic-hash
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:block-height
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:data-provenance
dependsOn:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:proof-of-work
contrastsWith:
  - urn:ngm:class:logical-clock
  - urn:ngm:class:vector-clock
bridgesTo:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:trusted-timestamping
uses:
  - urn:ngm:class:block-time
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:time-locked-transaction
standardizedBy:
  - urn:ngm:class:iso-iec-23257-2021
  - urn:ngm:class:ieee-2418-1
partOf:
  - urn:ngm:class:block-header
  - urn:ngm:class:block
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:audit-trail
---

# Timestamp

A recorded value indicating the time of block creation in a blockchain system, embedded in each block header to establish chronological ordering of the chain and enable time-based protocol rules. Timestamps support difficulty adjustment, consensus validity checks, and provide an immutable audit trail for transaction ordering and data provenance.
