---
okf_version: "0.2"
type: Class
title: Signature Scheme
resource: urn:ngm:class:signature-scheme
domain: blockchain
description: A Signature Scheme is a cryptographic primitive that provides a triple of algorithms—key generation, signing, and verification—enabling a party holding a private key to produce an unforgeable authentication tag over arbitrary messages that any holder of the corresponding public key can verify. In blockchain systems, signature schemes authenticate transactions, authorise state transitions, and unde
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:key-management
relatedTo:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Signature Scheme

A Signature Scheme is a cryptographic primitive that provides a triple of algorithms—key generation, signing, and verification—enabling a party holding a private key to produce an unforgeable authentication tag over arbitrary messages that any holder of the corresponding public key can verify. In blockchain systems, signature schemes authenticate transactions, authorise state transitions, and underpin identity and ownership semantics across the distributed ledger.
