---
okf_version: "0.2"
type: Class
title: Key Generation
resource: urn:ngm:class:key-generation
domain: security
description: Key generation is the cryptographic process of creating the keys used by symmetric and asymmetric algorithms, deriving them from high-quality randomness so that they are unpredictable to an adversary. For symmetric schemes it produces a single secret value, while for public-key schemes it produces a mathematically linked private and public key pair. The security of every downstream cryptographic o
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-key-management
hasPart:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:entropy
  - urn:ngm:class:key-derivation-function
requires:
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-exchange
dependsOn:
  - urn:ngm:class:entropy
  - urn:ngm:class:random-number-generation
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:hardware-security-module
supports:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:symmetric-encryption
partOf:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:cryptography
---

# Key Generation

Key generation is the cryptographic process of creating the keys used by symmetric and asymmetric algorithms, deriving them from high-quality randomness so that they are unpredictable to an adversary. For symmetric schemes it produces a single secret value, while for public-key schemes it produces a mathematically linked private and public key pair. The security of every downstream cryptographic operation rests on the entropy and correctness of this step.
