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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Multisignature Wallets

Multisignature wallets are cryptocurrency custody arrangements requiring m-of-n cryptographic signatures before a transaction can be authorised, distributing key control across multiple independent parties or devices. They eliminate single points of failure in private key management, making them a standard security architecture for institutional digital asset custody and shared treasury governance. The underlying cryptographic mechanism uses threshold signing schemes such as ECDSA or Schnorr aggregation.
