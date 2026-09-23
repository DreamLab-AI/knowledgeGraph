---
okf_version: "0.2"
type: Class
title: Cryptographic Algorithm
resource: urn:ngm:class:cryptographic-algorithm
domain: security
description: A Cryptographic Algorithm is a precisely defined mathematical procedure that transforms data to achieve security properties—confidentiality, integrity, authentication, or non-repudiation—based on computational hardness assumptions. The class encompasses symmetric ciphers, asymmetric (public-key) schemes, hash functions, digital signature algorithms, and zero-knowledge proof systems, each providing
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:hash-function
  - urn:ngm:class:public-key-cryptography
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:authentication
  - urn:ngm:class:data-integrity
  - urn:ngm:class:secure-communication
implements:
  - urn:ngm:class:computational-hardness-assumption
  - urn:ngm:class:post-quantum-cryptography
contrastsWith:
  - urn:ngm:class:steganography
  - urn:ngm:class:obfuscation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-systems
supports:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:tls
  - urn:ngm:class:cryptographic-infrastructure
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
relatedTo:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:homomorphic-encryption
---

# Cryptographic Algorithm

A Cryptographic Algorithm is a precisely defined mathematical procedure that transforms data to achieve security properties—confidentiality, integrity, authentication, or non-repudiation—based on computational hardness assumptions. The class encompasses symmetric ciphers, asymmetric (public-key) schemes, hash functions, digital signature algorithms, and zero-knowledge proof systems, each providing different security guarantees and performance characteristics.
