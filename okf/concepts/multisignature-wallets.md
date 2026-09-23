---
okf_version: "0.2"
type: Class
title: Multisignature Wallets
resource: urn:ngm:class:multisignature-wallets
domain: blockchain
description: Multisignature wallets are cryptocurrency custody arrangements requiring m-of-n cryptographic signatures before a transaction can be authorised, distributing key control across multiple independent parties or devices. They eliminate single points of failure in private key management, making them a standard security architecture for institutional digital asset custody and shared treasury governance
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain-entity
enables:
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:cold-storage
uses:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:bls-signature
relatedTo:
  - urn:ngm:class:cryptocurrency-storage
---

# Multisignature Wallets

Multisignature wallets are cryptocurrency custody arrangements requiring m-of-n cryptographic signatures before a transaction can be authorised, distributing key control across multiple independent parties or devices. They eliminate single points of failure in private key management, making them a standard security architecture for institutional digital asset custody and shared treasury governance. The underlying cryptographic mechanism uses threshold signing schemes such as ECDSA or Schnorr aggregation.
