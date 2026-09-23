---
okf_version: "0.2"
type: Class
title: Cryptographic Primitive
resource: urn:ngm:class:cryptographic-primitive
domain: blockchain
description: "The fundamental atomic building blocks of all cryptographic systems — including hash functions, symmetric and asymmetric ciphers, digital signatures, and key exchange protocols — each providing specific, well-defined security guarantees. Primitives are insufficient alone and must be combined in higher-level cryptographic protocols to satisfy multiple security requirements such as confidentiality, "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:hash-function
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:cryptographic-protocol
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:key-management
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:proof-of-work
---

# Cryptographic Primitive

The fundamental atomic building blocks of all cryptographic systems — including hash functions, symmetric and asymmetric ciphers, digital signatures, and key exchange protocols — each providing specific, well-defined security guarantees. Primitives are insufficient alone and must be combined in higher-level cryptographic protocols to satisfy multiple security requirements such as confidentiality, integrity, authentication, and non-repudiation. Correct selection and composition of primitives is the foundational concern of applied cryptography.
