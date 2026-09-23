---
okf_version: "0.2"
type: Class
title: Postquantum Cryptography
resource: urn:ngm:class:postquantum-cryptography
domain: infrastructure
description: Postquantum Cryptography (PQC) is the class of cryptographic algorithms designed to remain secure against adversaries equipped with large-scale quantum computers, replacing public-key schemes such as RSA and elliptic-curve cryptography that are broken by Shor's algorithm. PQC families include lattice-based, hash-based, code-based, and isogeny-based constructions, several of which NIST standardised
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:infra-security-and-identity
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-key-management
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:censorship-resistance
contrastsWith:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:asymmetric-encryption
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:cyber-security-and-cryptography
  - urn:ngm:class:cybersecurity-standard
relatedTo:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:blockchain-application
  - urn:ngm:class:digital-signature-verification
---

# Postquantum Cryptography

Postquantum Cryptography (PQC) is the class of cryptographic algorithms designed to remain secure against adversaries equipped with large-scale quantum computers, replacing public-key schemes such as RSA and elliptic-curve cryptography that are broken by Shor's algorithm. PQC families include lattice-based, hash-based, code-based, and isogeny-based constructions, several of which NIST standardised in 2024 (e.g. CRYSTALS-Kyber, CRYSTALS-Dilithium).
