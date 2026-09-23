---
okf_version: "0.2"
type: Class
title: Data Integrity
resource: urn:ngm:class:data-integrity
domain: data
description: Data integrity is the property guaranteeing that data remains accurate, complete, consistent, and unaltered throughout its entire lifecycle—spanning creation, storage, transmission, and processing—except through authorised operations. It is enforced through a layered combination of technical controls including cryptographic hash functions, digital signatures, Merkle trees, access control mechanism
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-quality
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:encryption
  - urn:ngm:class:write-ahead-logging
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:immutability
  - urn:ngm:class:data-provenance
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:acid-transactions
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:erasure-coding
contrastsWith:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:data-corruption
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:supply-chain-provenance
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:access-control
  - urn:ngm:class:checksum
standardizedBy:
  - urn:ngm:class:iso-27001
  - urn:ngm:class:nist-cybersecurity-framework
relatedTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:data-governance
  - urn:ngm:class:information-security
  - urn:ngm:class:referential-integrity
  - urn:ngm:class:data-lineage
---

# Data Integrity

Data integrity is the property guaranteeing that data remains accurate, complete, consistent, and unaltered throughout its entire lifecycle—spanning creation, storage, transmission, and processing—except through authorised operations. It is enforced through a layered combination of technical controls including cryptographic hash functions, digital signatures, Merkle trees, access control mechanisms, and ACID-compliant transactions, as well as procedural controls such as change-control workflows, audit trails, and immutable logging. Violations—whether from storage errors, transmission corruption, software bugs, or deliberate tampering—can propagate silently and have cascading consequences in any system relying on the data for decision-making or compliance.
