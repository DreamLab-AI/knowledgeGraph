---
okf_version: "0.2"
type: Class
title: Public-Key Cryptography
resource: urn:ngm:class:public-key-cryptography
domain: security
description: An asymmetric cryptographic system using mathematically related key pairs — a public key for encryption or signature verification and a private key for decryption or signing — enabling secure communication, digital signatures, and authentication without requiring shared secrets. In blockchain systems it underpins wallet addresses, transaction signing, and identity verification.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
  - urn:ngm:class:digital-signature
  - urn:ngm:class:ecdsa
  - urn:ngm:class:key-pair
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:key-exchange
implements:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:tls
contrastsWith:
  - urn:ngm:class:symmetric-encryption
bridgesTo:
  - urn:ngm:class:decentralized-identity
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:trapdoor-function
standardizedBy:
  - urn:ngm:class:nist-cryptographic-standards
  - urn:ngm:class:rfc-5280
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:certificate-authority
---

# Public-Key Cryptography

An asymmetric cryptographic system using mathematically related key pairs — a public key for encryption or signature verification and a private key for decryption or signing — enabling secure communication, digital signatures, and authentication without requiring shared secrets. In blockchain systems it underpins wallet addresses, transaction signing, and identity verification.
