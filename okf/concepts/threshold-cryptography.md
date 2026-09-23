---
okf_version: "0.2"
type: Class
title: Threshold Cryptography
resource: urn:ngm:class:threshold-cryptography
domain: security
description: Threshold cryptography is a branch of cryptography in which a secret — such as a private key, decryption key, or signing capability — is distributed among a set of n parties such that any qualifying subset of at least t parties can jointly perform the cryptographic operation, while no coalition of fewer than t parties can do so alone. The t-of-n structure provides both redundancy and distributed a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:distributed-key-generation
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:secret-sharing
requires:
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:cryptocurrency-storage
  - urn:ngm:class:distributed-validator-technology
  - urn:ngm:class:privacy-preserving-technology
  - urn:ngm:class:decentralised-identity
dependsOn:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-infrastructure
implements:
  - urn:ngm:class:access-control
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:hardware-security-module
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:shamir-secret-sharing
supports:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:homomorphic-encryption
---

# Threshold Cryptography

Threshold cryptography is a branch of cryptography in which a secret — such as a private key, decryption key, or signing capability — is distributed among a set of n parties such that any qualifying subset of at least t parties can jointly perform the cryptographic operation, while no coalition of fewer than t parties can do so alone. The t-of-n structure provides both redundancy and distributed access control: no single party holds complete key material, eliminating single points of compromise from theft, coercion, or insider malfeasance. The three primary primitives are threshold signatures, threshold decryption, and distributed key generation (DKG), with applications spanning cryptocurrency custody, distributed certificate authorities, multi-party computation protocols, and confidential smart contract execution. Modern protocols such as CGGMP21, GG20, and FROST have brought threshold operations to practical round counts suitable for production deployment.
