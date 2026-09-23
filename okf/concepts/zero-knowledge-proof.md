---
okf_version: "0.2"
type: Class
title: Zero-Knowledge Proof
resource: urn:ngm:class:zero-knowledge-proof
domain: security
description: A cryptographic protocol allowing one party (prover) to convince another party (verifier) that a statement is true without revealing any information beyond the validity of the statement itself. Zero-knowledge proofs provide privacy-preserving verification in blockchain systems, enabling private transactions, identity attestation, and scalable computation via ZK-rollups.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-starks
  - urn:ngm:class:bulletproofs
requires:
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:computational-hardness-assumption
enables:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:zero-knowledge-machine-learning
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:private-smart-contract
  - urn:ngm:class:decentralised-identity
dependsOn:
  - urn:ngm:class:trusted-setup
contrastsWith:
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:secure-multi-party-computation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:federated-learning
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:hash-function
  - urn:ngm:class:elliptic-curve-cryptography
partOf:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:privacy-enhancing-technologies
relatedTo:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:merkle-tree
---

# Zero-Knowledge Proof

A cryptographic protocol allowing one party (prover) to convince another party (verifier) that a statement is true without revealing any information beyond the validity of the statement itself. Zero-knowledge proofs provide privacy-preserving verification in blockchain systems, enabling private transactions, identity attestation, and scalable computation via ZK-rollups.
