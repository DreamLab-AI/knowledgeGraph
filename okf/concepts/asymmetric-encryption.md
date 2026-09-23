---
okf_version: "0.2"
type: Class
title: Asymmetric Encryption
resource: urn:ngm:class:asymmetric-encryption
domain: security
description: A cryptographic system using mathematically related public-private key pairs where the public key encrypts data that only the corresponding private key can decrypt, enabling secure communication, digital signatures, and trustless verification without pre-shared secrets.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:computational-hardness-assumption
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:key-exchange
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:zero-knowledge-proof
dependsOn:
  - urn:ngm:class:number-theory
implements:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:rsa-cryptosystem
  - urn:ngm:class:trapdoor-function
contrastsWith:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:threshold-signature-scheme
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:random-number-generator
supports:
  - urn:ngm:class:information-security
  - urn:ngm:class:authentication
  - urn:ngm:class:data-confidentiality
partOf:
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:tls
---

# Asymmetric Encryption

A cryptographic system using mathematically related public-private key pairs where the public key encrypts data that only the corresponding private key can decrypt, enabling secure communication, digital signatures, and trustless verification without pre-shared secrets.
