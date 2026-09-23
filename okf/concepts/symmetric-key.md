---
okf_version: "0.2"
type: Class
title: Symmetric Key
resource: urn:ngm:class:symmetric-key
domain: security
description: A symmetric key is a single shared secret used by both the sender and receiver to encrypt and decrypt data in symmetric-key cryptography. Because the same key performs both operations, it must be kept secret and distributed securely between the communicating parties. Symmetric-key algorithms such as AES are fast and efficient for bulk data encryption, which makes them the workhorse of confidential
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-key
hasPart:
  - urn:ngm:class:block-cipher
  - urn:ngm:class:stream-cipher
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:key-exchange
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:symmetric-encryption
dependsOn:
  - urn:ngm:class:key-exchange
implements:
  - urn:ngm:class:aes
  - urn:ngm:class:cipher
contrastsWith:
  - urn:ngm:class:public-key
  - urn:ngm:class:asymmetric-encryption
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:cryptography
partOf:
  - urn:ngm:class:symmetric-encryption
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
---

# Symmetric Key

A symmetric key is a single shared secret used by both the sender and receiver to encrypt and decrypt data in symmetric-key cryptography. Because the same key performs both operations, it must be kept secret and distributed securely between the communicating parties. Symmetric-key algorithms such as AES are fast and efficient for bulk data encryption, which makes them the workhorse of confidentiality in practice, often combined with asymmetric techniques that solve the problem of securely exchanging the shared key.
