---
okf_version: "0.2"
type: Class
title: Immutability
resource: urn:ngm:class:immutability
domain: blockchain
description: The tamper-resistant property of blockchain ledgers whereby confirmed records cannot be altered without invalidating the cryptographic chain of hashes, providing verifiable finality, audit-trail integrity, and resistance to retroactive manipulation. Achieved through chained Merkle roots, accumulated proof-of-work, or BFT-based finality.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:cryptographic-commitment
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:data-integrity
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:smart-contract-execution
dependsOn:
  - urn:ngm:class:decentralization
contrastsWith:
  - urn:ngm:class:right-to-erasure
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:byzantine-fault-tolerance
supports:
  - urn:ngm:class:supply-chain-integrity
  - urn:ngm:class:regulatory-compliance
partOf:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:append-only-log
  - urn:ngm:class:tamper-evidence
---

# Immutability

The tamper-resistant property of blockchain ledgers whereby confirmed records cannot be altered without invalidating the cryptographic chain of hashes, providing verifiable finality, audit-trail integrity, and resistance to retroactive manipulation. Achieved through chained Merkle roots, accumulated proof-of-work, or BFT-based finality.
