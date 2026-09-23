---
okf_version: "0.2"
type: Class
title: ECDSA
resource: urn:ngm:class:ecdsa
domain: security
description: Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographic primitive that uses elliptic curve mathematics to generate and verify digital signatures, underpinning transaction authentication in Bitcoin, Ethereum, and most public blockchain networks. ECDSA provides non-repudiation, integrity verification, and ownership proof with compact key sizes relative to RSA equivalents.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:elliptic-curve-parameters
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:authentication
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:transaction-signing
dependsOn:
  - urn:ngm:class:elliptic-curve-discrete-logarithm-problem
  - urn:ngm:class:cryptographic-key-management
implements:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature-standard
contrastsWith:
  - urn:ngm:class:rsa-signature
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:schnorr-signature
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:finite-field-arithmetic
  - urn:ngm:class:random-number-generator
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:tls
  - urn:ngm:class:code-signing
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:sec-standards
relatedTo:
  - urn:ngm:class:digital-signature-algorithm
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:secp256k1
  - urn:ngm:class:p-256-curve
---

# ECDSA

Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographic primitive that uses elliptic curve mathematics to generate and verify digital signatures, underpinning transaction authentication in Bitcoin, Ethereum, and most public blockchain networks. ECDSA provides non-repudiation, integrity verification, and ownership proof with compact key sizes relative to RSA equivalents.
