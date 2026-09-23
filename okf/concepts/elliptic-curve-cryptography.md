---
okf_version: "0.2"
type: Class
title: Elliptic Curve Cryptography
resource: urn:ngm:class:elliptic-curve-cryptography
domain: security
description: A public-key cryptographic system based on the algebraic structure of elliptic curves over finite fields, providing strong security guarantees with shorter key lengths than RSA. ECC underpins digital signatures (ECDSA), key agreement (ECDH), and identity operations throughout blockchain infrastructure, TLS, and secure communications.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:ecdsa
requires:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:finite-field
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:key-exchange
  - urn:ngm:class:zero-knowledge-proof
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
implements:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:curve25519
contrastsWith:
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:secure-multi-party-computation
uses:
  - urn:ngm:class:modular-arithmetic
supports:
  - urn:ngm:class:tls
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ieee-2418-1
partOf:
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:decentralization
---

# Elliptic Curve Cryptography

A public-key cryptographic system based on the algebraic structure of elliptic curves over finite fields, providing strong security guarantees with shorter key lengths than RSA. ECC underpins digital signatures (ECDSA), key agreement (ECDH), and identity operations throughout blockchain infrastructure, TLS, and secure communications.
