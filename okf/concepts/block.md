---
okf_version: "0.2"
type: Class
title: Block
resource: urn:ngm:class:block
domain: blockchain
description: "The fundamental unit of a blockchain: a cryptographically linked, immutable data container that batches a set of transactions together with a block header containing the Merkle root of those transactions, a timestamp, the previous block's hash, and consensus-specific fields such as a nonce or validator signature. Sequential blocks form the chain that provides an append-only audit trail."
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:block-header
  - urn:ngm:class:merkle-root
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:coinbase-transaction
  - urn:ngm:class:nonce
  - urn:ngm:class:timestamp
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:immutability
  - urn:ngm:class:finality
  - urn:ngm:class:smart-contract-execution
dependsOn:
  - urn:ngm:class:peer-to-peer-network
contrastsWith:
  - urn:ngm:class:orphan-block
  - urn:ngm:class:uncle-block
bridgesTo:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:data-integrity
  - urn:ngm:class:telecollaboration
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:cryptographic-hash-function
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-ledger
relatedTo:
  - urn:ngm:class:genesis-block
  - urn:ngm:class:block-time
  - urn:ngm:class:block-size
  - urn:ngm:class:block-reward
  - urn:ngm:class:block-propagation
  - urn:ngm:class:fork
---

# Block

The fundamental unit of a blockchain: a cryptographically linked, immutable data container that batches a set of transactions together with a block header containing the Merkle root of those transactions, a timestamp, the previous block's hash, and consensus-specific fields such as a nonce or validator signature. Sequential blocks form the chain that provides an append-only audit trail.
