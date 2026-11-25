---
okf_version: "0.2"
type: Class
title: Input
resource: urn:ngm:class:input
domain: blockchain
description: In the UTXO blockchain model, an Input is a reference to a previous unspent transaction output that is being consumed to fund a new transaction. Each input includes a pointer to the referenced output, a cryptographic signature proving ownership, and an unlocking script that satisfies the output's locking conditions.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-keys
contrastsWith:
  - urn:ngm:class:account-model
uses:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:merkle-proof
partOf:
  - urn:ngm:class:transaction
relatedTo:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:output
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:double-spending
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Input

In the UTXO blockchain model, an Input is a reference to a previous unspent transaction output that is being consumed to fund a new transaction. Each input includes a pointer to the referenced output, a cryptographic signature proving ownership, and an unlocking script that satisfies the output's locking conditions.
