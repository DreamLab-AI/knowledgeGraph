---
okf_version: "0.2"
type: Class
title: Merkle Root
resource: urn:ngm:class:merkle-root
domain: blockchain
description: A Merkle Root is the single cryptographic hash at the apex of a Merkle tree, computed by recursively hashing pairs of child hashes until a single digest remains, such that the root encodes the integrity of every transaction or data element in the tree. In blockchain systems, each block header contains the Merkle root of all transactions in that block, enabling lightweight clients to verify transac
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:cryptographic-hash
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:blockchain-scalability
supports:
  - urn:ngm:class:blockchain-infrastructure
partOf:
  - urn:ngm:class:block
  - urn:ngm:class:block-header
relatedTo:
  - urn:ngm:class:nonce
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:digital-signature
  - urn:ngm:class:blockchain-entity
---

# Merkle Root

A Merkle Root is the single cryptographic hash at the apex of a Merkle tree, computed by recursively hashing pairs of child hashes until a single digest remains, such that the root encodes the integrity of every transaction or data element in the tree. In blockchain systems, each block header contains the Merkle root of all transactions in that block, enabling lightweight clients to verify transaction inclusion via a logarithmic-length Merkle proof without downloading the full block. This compact commitment property makes the Merkle root fundamental to blockchain scalability, security, and efficient synchronisation protocols.
