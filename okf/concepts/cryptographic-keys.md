---
okf_version: "0.2"
type: Class
title: Cryptographic Keys
resource: urn:ngm:class:cryptographic-keys
domain: security
description: Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys may be symmetric (single shared secret) or asymmetric (public-private pairs); their security depends on key length, entropy of generation, and rigorous lifecycle management.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
  - urn:ngm:class:session-key
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:cryptographic-key-management
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:authentication
  - urn:ngm:class:data-integrity
dependsOn:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:entropy-source
implements:
  - urn:ngm:class:cryptographic-algorithm
contrastsWith:
  - urn:ngm:class:password
bridgesTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:blockchain-wallet
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:rsa-algorithm
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-encryption
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:secure-communication
standardizedBy:
  - urn:ngm:class:nist-cryptographic-standards
  - urn:ngm:class:fips-140-3
partOf:
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:hardware-security-module
---

# Cryptographic Keys

Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys may be symmetric (single shared secret) or asymmetric (public-private pairs); their security depends on key length, entropy of generation, and rigorous lifecycle management.
