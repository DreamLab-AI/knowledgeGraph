---
okf_version: "0.2"
type: Class
title: Private Key
resource: urn:ngm:class:private-key
domain: security
description: A Private Key is a secret scalar value generated through cryptographically secure randomness that serves as the sole proof of ownership within asymmetric cryptographic systems. In blockchain contexts it authorises transaction signing via digital signatures, controls access to associated public addresses and funds, and underpins the non-custodial security model where loss or exposure is irreversibl
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:secure-storage
enables:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:transaction-signing
  - urn:ngm:class:authentication
  - urn:ngm:class:non-custodial-wallet
dependsOn:
  - urn:ngm:class:discrete-logarithm-problem
implements:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:cryptographic-infrastructure
contrastsWith:
  - urn:ngm:class:public-key
  - urn:ngm:class:symmetric-key
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:secp256k1
standardizedBy:
  - urn:ngm:class:nist-fips-186
partOf:
  - urn:ngm:class:cryptographic-system
  - urn:ngm:class:asymmetric-key-pair
relatedTo:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:hierarchical-deterministic-wallet
  - urn:ngm:class:hardware-security-module
---

# Private Key

A Private Key is a secret scalar value generated through cryptographically secure randomness that serves as the sole proof of ownership within asymmetric cryptographic systems. In blockchain contexts it authorises transaction signing via digital signatures, controls access to associated public addresses and funds, and underpins the non-custodial security model where loss or exposure is irreversible.
