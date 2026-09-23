---
okf_version: "0.2"
type: Class
title: Random Number Generation
resource: urn:ngm:class:random-number-generation
domain: security
description: The process of generating unpredictable and statistically random values for cryptographic operations, serving as a critical security primitive for key generation, nonces, and protocol initialization; distinguishes between true randomness from physical entropy sources (TRNG) and pseudo-randomness from deterministic algorithms seeded with entropy (CSPRNG).
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:entropy-source
  - urn:ngm:class:random-number-generator
requires:
  - urn:ngm:class:entropy-source
enables:
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:nist
contrastsWith:
  - urn:ngm:class:random-number-generator
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:trusted-platform-module
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:stream-cipher
supports:
  - urn:ngm:class:nonce
  - urn:ngm:class:consensus-mechanism
standardizedBy:
  - urn:ngm:class:nist
partOf:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:key-generation
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:information-theoretic-security
---

# Random Number Generation

The process of generating unpredictable and statistically random values for cryptographic operations, serving as a critical security primitive for key generation, nonces, and protocol initialization; distinguishes between true randomness from physical entropy sources (TRNG) and pseudo-randomness from deterministic algorithms seeded with entropy (CSPRNG).
