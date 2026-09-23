---
okf_version: "0.2"
type: Class
title: Rsa Algorithm
resource: urn:ngm:class:rsa-algorithm
domain: security
description: The RSA algorithm is a public-key cryptosystem whose security rests on the practical difficulty of factoring the product of two large prime numbers. A public key derived from this product encrypts data or verifies signatures, while the corresponding private key, recoverable only with knowledge of the prime factors, decrypts or signs. RSA was among the first practical asymmetric schemes and remains
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:public-key-cryptography
hasPart:
  - urn:ngm:class:key-pair
requires:
  - urn:ngm:class:key-pair
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-exchange
dependsOn:
  - urn:ngm:class:trapdoor-function
  - urn:ngm:class:one-way-function
implements:
  - urn:ngm:class:asymmetric-encryption
contrastsWith:
  - urn:ngm:class:symmetric-encryption
bridgesTo:
  - urn:ngm:class:cryptographic-algorithm
uses:
  - urn:ngm:class:one-way-function
  - urn:ngm:class:modular-arithmetic
supports:
  - urn:ngm:class:ssl-tls
partOf:
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
---

# Rsa Algorithm

The RSA algorithm is a public-key cryptosystem whose security rests on the practical difficulty of factoring the product of two large prime numbers. A public key derived from this product encrypts data or verifies signatures, while the corresponding private key, recoverable only with knowledge of the prime factors, decrypts or signs. RSA was among the first practical asymmetric schemes and remains widely used for key exchange, digital signatures, and certificate-based authentication.
