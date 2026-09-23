---
okf_version: "0.2"
type: Class
title: Merkle Patricia Trie
resource: urn:ngm:class:merkle-patricia-trie
domain: blockchain
description: A Merkle Patricia Trie is a cryptographically authenticated key-value data structure that combines a Patricia (radix) trie for compact prefix-keyed storage with Merkle hashing for tamper-evident integrity. Each node is referenced by the hash of its contents, so a single root hash commits to the entire dataset and any change propagates to the root. It is the data structure Ethereum uses to store ac
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:merkle-tree
hasPart:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:verification
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:account-model
contrastsWith:
  - urn:ngm:class:merkle-dag
uses:
  - urn:ngm:class:data-structure
  - urn:ngm:class:persistence
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm
partOf:
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:nonce
  - urn:ngm:class:smart-contract
---

# Merkle Patricia Trie

A Merkle Patricia Trie is a cryptographically authenticated key-value data structure that combines a Patricia (radix) trie for compact prefix-keyed storage with Merkle hashing for tamper-evident integrity. Each node is referenced by the hash of its contents, so a single root hash commits to the entire dataset and any change propagates to the root. It is the data structure Ethereum uses to store account state, transactions, and receipts, enabling compact Merkle proofs of inclusion.
