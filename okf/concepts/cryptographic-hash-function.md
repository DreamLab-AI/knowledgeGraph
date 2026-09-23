---
okf_version: "0.2"
type: Class
title: Cryptographic Hash Function
resource: urn:ngm:class:cryptographic-hash-function
domain: security
description: "A cryptographic hash function is a deterministic, one-way algorithm that maps an input of arbitrary length to a fixed-size digest (typically 160–512 bits), satisfying three core security properties: preimage resistance (infeasibility of recovering input from digest), second-preimage resistance (infeasibility of finding a distinct input that maps to the same digest as a known input), and collision "
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:preimage-resistance
  - urn:ngm:class:avalanche-effect
  - urn:ngm:class:second-preimage-resistance
enables:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:one-way-function
  - urn:ngm:class:pseudorandom-function
contrastsWith:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:checksums
bridgesTo:
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:sha-256
  - urn:ngm:class:keccak-256
  - urn:ngm:class:blake2
  - urn:ngm:class:sha-3
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:password-hashing
  - urn:ngm:class:content-addressed-storage
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:hmac
  - urn:ngm:class:key-derivation-function
---

# Cryptographic Hash Function

A cryptographic hash function is a deterministic, one-way algorithm that maps an input of arbitrary length to a fixed-size digest (typically 160–512 bits), satisfying three core security properties: preimage resistance (infeasibility of recovering input from digest), second-preimage resistance (infeasibility of finding a distinct input that maps to the same digest as a known input), and collision resistance (infeasibility of finding any two distinct inputs that share a digest). These properties make hash functions foundational primitives for data integrity verification, digital signatures, message authentication codes, and proof-of-work consensus. Widely deployed algorithms include SHA-256 (Bitcoin), Keccak-256 (Ethereum), BLAKE2, and SHA-3 (NIST FIPS 202); Grover's algorithm on quantum hardware reduces effective security by half, motivating ongoing standardisation of quantum-resistant alternatives by NIST.
