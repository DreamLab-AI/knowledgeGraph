---
okf_version: "0.2"
type: Class
title: Post-Quantum Cryptography
resource: urn:ngm:class:post-quantum-cryptography
domain: infrastructure
description: Postquantum Cryptography (PQC) is the class of cryptographic algorithms designed to remain secure against adversaries equipped with large-scale quantum computers, replacing public-key schemes such as RSA and elliptic-curve cryptography that are broken by Shor's algorithm. PQC families include lattice-based, hash-based, code-based, and isogeny-based constructions, several of which NIST standardised
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:code-based-cryptography
  - urn:ngm:class:multivariate-cryptography
  - urn:ngm:class:hash-based-signatures
  - urn:ngm:class:isogeny-based-cryptography
requires:
  - urn:ngm:class:algorithm
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:algorithm
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:quantum-resistant-encryption
  - urn:ngm:class:key-exchange
  - urn:ngm:class:long-term-data-protection
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:censorship-resistance
dependsOn:
  - urn:ngm:class:mathematical-hard-problems
  - urn:ngm:class:computational-complexity-theory
contrastsWith:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:asymmetric-encryption
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:hash-function
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:security-protocol
relatedTo:
  - urn:ngm:class:quantum-computing
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:blockchain-application
  - urn:ngm:class:digital-signature-verification
---

# Post-Quantum Cryptography

Postquantum Cryptography (PQC) is the class of cryptographic algorithms designed to remain secure against adversaries equipped with large-scale quantum computers, replacing public-key schemes such as RSA and elliptic-curve cryptography that are broken by Shor's algorithm. PQC families include lattice-based, hash-based, code-based, and isogeny-based constructions, several of which NIST standardised in 2024 (e.g. CRYSTALS-Kyber, CRYSTALS-Dilithium).
