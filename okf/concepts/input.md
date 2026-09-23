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
---

# Input

In the UTXO blockchain model, an Input is a reference to a previous unspent transaction output that is being consumed to fund a new transaction. Each input includes a pointer to the referenced output, a cryptographic signature proving ownership, and an unlocking script that satisfies the output's locking conditions.
