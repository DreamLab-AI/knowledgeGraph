---
okf_version: "0.2"
type: Class
title: Key Pair
resource: urn:ngm:class:key-pair
domain: security
description: "A Key Pair is the matched set of a public key and a corresponding private key used in asymmetric cryptography, where the two keys are mathematically related such that data encrypted or signed with one can only be processed with the other. The private key is kept secret by its owner, while the public key may be distributed openly, enabling encryption, digital signatures, and authentication without "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:asymmetric-cryptography
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
requires:
  - urn:ngm:class:key-generation
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:asymmetric-cryptography
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:cryptographic-key
supports:
  - urn:ngm:class:identity
  - urn:ngm:class:digital-wallet
partOf:
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:hardware-security-module
---

# Key Pair

A Key Pair is the matched set of a public key and a corresponding private key used in asymmetric cryptography, where the two keys are mathematically related such that data encrypted or signed with one can only be processed with the other. The private key is kept secret by its owner, while the public key may be distributed openly, enabling encryption, digital signatures, and authentication without sharing a secret in advance. Key pairs underpin public-key infrastructure, blockchain wallets, secure messaging, and identity systems. Their security rests on the computational hardness of deriving the private key from the public key.
