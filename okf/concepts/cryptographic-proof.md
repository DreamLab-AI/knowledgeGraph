---
okf_version: "0.2"
type: Class
title: Cryptographic Proof
resource: urn:ngm:class:cryptographic-proof
domain: security
description: A cryptographic proof is a mathematical construction that enables one party to demonstrate the truth of a statement or possession of secret knowledge to a verifying party in a computationally sound and tamper-evident manner, without necessarily revealing the underlying information itself. Rooted in complexity theory and interactive proof systems, cryptographic proofs provide infeasibility guarante
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:non-interactive-proof
  - urn:ngm:class:commitment-scheme
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:verifiable-computation
  - urn:ngm:class:digital-identity
contrastsWith:
  - urn:ngm:class:tee
  - urn:ngm:class:multi-party-computation
bridgesTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:ai-model-attestation
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:verification
  - urn:ngm:class:authentication
  - urn:ngm:class:non-repudiation
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:homomorphic-encryption
---

# Cryptographic Proof

A cryptographic proof is a mathematical construction that enables one party to demonstrate the truth of a statement or possession of secret knowledge to a verifying party in a computationally sound and tamper-evident manner, without necessarily revealing the underlying information itself. Rooted in complexity theory and interactive proof systems, cryptographic proofs provide infeasibility guarantees: a computationally bounded adversary cannot forge a valid proof for a false statement. The field spans classical constructions such as hash-based commitments and digital signatures, through to advanced non-interactive arguments including zk-SNARKs and STARKs, and underpins security across blockchain, identity, and privacy-preserving computation domains.
