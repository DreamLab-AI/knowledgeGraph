---
okf_version: "0.2"
type: Class
title: Public Key
resource: urn:ngm:class:public-key
domain: security
description: The publicly shareable component of an asymmetric key pair, derived from the private key via elliptic curve or RSA mathematics, used to derive wallet addresses, verify digital signatures, and enable encrypted communication without transmitting secret material.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-generation-algorithm
enables:
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:secure-communication
  - urn:ngm:class:key-exchange
dependsOn:
  - urn:ngm:class:one-way-function
  - urn:ngm:class:discrete-logarithm-problem
contrastsWith:
  - urn:ngm:class:private-key
  - urn:ngm:class:symmetric-key
bridgesTo:
  - urn:ngm:class:address
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:rsa-algorithm
  - urn:ngm:class:hash-function
standardizedBy:
  - urn:ngm:class:nist-nistir
  - urn:ngm:class:iso-iec-23257-2021
  - urn:ngm:class:x-509-certificate
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:asymmetric-key-pair
relatedTo:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:sha-256
  - urn:ngm:class:digital-certificate
---

# Public Key

The publicly shareable component of an asymmetric key pair, derived from the private key via elliptic curve or RSA mathematics, used to derive wallet addresses, verify digital signatures, and enable encrypted communication without transmitting secret material.
