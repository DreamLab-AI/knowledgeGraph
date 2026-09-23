---
okf_version: "0.2"
type: Class
title: Merkle Proof
resource: urn:ngm:class:merkle-proof
domain: blockchain
description: A cryptographic proof of inclusion or exclusion that demonstrates whether a specific data element is part of a Merkle tree, requiring only O(log n) sibling hashes rather than the full data set. Merkle proofs underpin light-client verification in blockchain systems and enable simplified payment verification (SPV) without downloading the entire chain.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:simplified-payment-verification
  - urn:ngm:class:light-client
implements:
  - urn:ngm:class:proof-of-inclusion
  - urn:ngm:class:vector-commitment
contrastsWith:
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:data-integrity
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-root
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:blockchain-node
  - urn:ngm:class:cross-chain-bridge
partOf:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:block-header
relatedTo:
  - urn:ngm:class:block-header
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:patricia-trie
---

# Merkle Proof

A cryptographic proof of inclusion or exclusion that demonstrates whether a specific data element is part of a Merkle tree, requiring only O(log n) sibling hashes rather than the full data set. Merkle proofs underpin light-client verification in blockchain systems and enable simplified payment verification (SPV) without downloading the entire chain.
