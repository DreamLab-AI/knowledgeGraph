---
okf_version: "0.2"
type: Class
title: Shamir Secret Sharing
resource: urn:ngm:class:shamir-secret-sharing
domain: security
description: Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptography-domain
requires:
  - urn:ngm:class:modular-arithmetic
  - urn:ngm:class:finite-field
  - urn:ngm:class:polynomial-interpolation
enables:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:key-management
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:key-recovery
implements:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:information-theoretic-security
contrastsWith:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:homomorphic-encryption
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:blockchain
  - urn:ngm:class:stark
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:decentralized-key-storage
  - urn:ngm:class:multi-signature
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-secret-sharing
  - urn:ngm:class:bip39
---

# Shamir Secret Sharing

Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.
