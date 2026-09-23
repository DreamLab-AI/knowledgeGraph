---
okf_version: "0.2"
type: Class
title: Merkle Tree
resource: urn:ngm:class:merkle-tree
domain: blockchain
description: A binary tree of cryptographic hashes in which each leaf node contains the hash of a data block and each non-leaf node contains the hash of its children. Merkle trees enable efficient and tamper-evident verification of large data sets; in blockchain systems they allow nodes to confirm individual transaction inclusion without downloading an entire block.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:merkle-root
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:leaf-node
  - urn:ngm:class:internal-node
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:simplified-payment-verification
  - urn:ngm:class:light-client
  - urn:ngm:class:data-integrity-verification
contrastsWith:
  - urn:ngm:class:patricia-trie
bridgesTo:
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:distributed-file-system
  - urn:ngm:class:version-control
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:proof-of-inclusion
  - urn:ngm:class:blockchain-scalability
partOf:
  - urn:ngm:class:block-header
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:block
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:vector-commitment
---

# Merkle Tree

A binary tree of cryptographic hashes in which each leaf node contains the hash of a data block and each non-leaf node contains the hash of its children. Merkle trees enable efficient and tamper-evident verification of large data sets; in blockchain systems they allow nodes to confirm individual transaction inclusion without downloading an entire block.
