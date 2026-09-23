---
okf_version: "0.2"
type: Class
title: Symmetric Encryption
resource: urn:ngm:class:symmetric-encryption
domain: security
description: A cryptographic method using a single shared secret key for both encryption and decryption, requiring secure key exchange between parties before communication. Provides high-throughput confidentiality for data at rest and in transit, making it the standard approach for bulk data encryption across security, infrastructure, and distributed-systems domains.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:initialization-vector
  - urn:ngm:class:message-authentication-code
requires:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:key-exchange
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:data-confidentiality
  - urn:ngm:class:authenticated-encryption
dependsOn:
  - urn:ngm:class:hash-function
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:cha-cha20-poly1305
contrastsWith:
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:digital-signature
bridgesTo:
  - urn:ngm:class:tls
  - urn:ngm:class:hardware-security-module
uses:
  - urn:ngm:class:block-cipher
  - urn:ngm:class:stream-cipher
  - urn:ngm:class:random-number-generation
supports:
  - urn:ngm:class:data-encryption-at-rest
  - urn:ngm:class:secure-communication
standardizedBy:
  - urn:ngm:class:nist
partOf:
  - urn:ngm:class:encryption
  - urn:ngm:class:cryptography
  - urn:ngm:class:encryption
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:multi-party-computation
---

# Symmetric Encryption

A cryptographic method using a single shared secret key for both encryption and decryption, requiring secure key exchange between parties before communication. Provides high-throughput confidentiality for data at rest and in transit, making it the standard approach for bulk data encryption across security, infrastructure, and distributed-systems domains.
