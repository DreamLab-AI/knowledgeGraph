---
okf_version: "0.2"
type: Class
title: Asymmetric Cryptography
resource: urn:ngm:class:asymmetric-cryptography
domain: security
description: "Asymmetric Cryptography is a cryptographic paradigm in which mathematically related key pairs — a public key and a private key — serve distinct roles: the public key may be freely shared and used to encrypt messages or verify signatures, while the private key is kept secret and used to decrypt or sign. Security rests on the computational intractability of reversing the underlying mathematical prob"
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-pair
requires:
  - urn:ngm:class:trapdoor-function
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:tls
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:key-management
  - urn:ngm:class:hardware-security-module
implements:
  - urn:ngm:class:rsa
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:diffie-hellman-key-exchange
contrastsWith:
  - urn:ngm:class:symmetric-cryptography
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:code-signing
relatedTo:
  - urn:ngm:class:key-management
  - urn:ngm:class:fido2
  - urn:ngm:class:certificate-transparency
---

# Asymmetric Cryptography

Asymmetric Cryptography is a cryptographic paradigm in which mathematically related key pairs — a public key and a private key — serve distinct roles: the public key may be freely shared and used to encrypt messages or verify signatures, while the private key is kept secret and used to decrypt or sign. Security rests on the computational intractability of reversing the underlying mathematical problems without knowledge of the private key.
