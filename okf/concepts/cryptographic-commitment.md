---
okf_version: "0.2"
type: Class
title: Cryptographic Commitment
resource: urn:ngm:class:cryptographic-commitment
domain: security
description: A cryptographic scheme that allows a party to commit to a chosen value while keeping it hidden, with the ability to reveal it later, satisfying the binding property (cannot change the committed value) and the hiding property (the commitment reveals no information about the value). Used in zero-knowledge proofs, atomic swaps, and confidential transactions.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-starks
  - urn:ngm:class:immutability
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:secure-multi-party-computation
dependsOn:
  - urn:ngm:class:random-oracle-model
  - urn:ngm:class:discrete-logarithm-problem
implements:
  - urn:ngm:class:vector-commitment
  - urn:ngm:class:polynomial-commitment
contrastsWith:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:hash-function
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:zero-knowledge
  - urn:ngm:class:digital-signature
  - urn:ngm:class:oblivious-transfer
  - urn:ngm:class:coin-flipping-protocol
---

# Cryptographic Commitment

A cryptographic scheme that allows a party to commit to a chosen value while keeping it hidden, with the ability to reveal it later, satisfying the binding property (cannot change the committed value) and the hiding property (the commitment reveals no information about the value). Used in zero-knowledge proofs, atomic swaps, and confidential transactions.
