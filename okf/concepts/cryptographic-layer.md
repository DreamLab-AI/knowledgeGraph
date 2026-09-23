---
okf_version: "0.2"
type: Class
title: Cryptographic Layer
resource: urn:ngm:class:cryptographic-layer
domain: security
description: The Cryptographic Layer is the stratum that provides confidentiality, integrity, and authenticity primitives to the layers above. It sits above the Hardware Layer, which supplies entropy and acceleration, and below identity, consensus, and security strata that depend on its guarantees. It contains ciphers, hash functions, signature schemes, and key management.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:hardware-layer
enables:
  - urn:ngm:class:identity-layer
  - urn:ngm:class:consensus-layer
bridgesTo:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
---

# Cryptographic Layer

The Cryptographic Layer is the stratum that provides confidentiality, integrity, and authenticity primitives to the layers above. It sits above the Hardware Layer, which supplies entropy and acceleration, and below identity, consensus, and security strata that depend on its guarantees. It contains ciphers, hash functions, signature schemes, and key management.
