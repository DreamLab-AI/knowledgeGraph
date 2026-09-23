---
okf_version: "0.2"
type: Class
title: Mempool
resource: urn:ngm:class:mempool
domain: blockchain
description: The memory pool maintained by each blockchain node holding broadcast but as-yet unconfirmed transactions awaiting inclusion in a block. Miners select transactions from the mempool, typically prioritising by fee rate, while node operators use mempool policies to manage capacity and mitigate spam.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:transaction-pool
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:transaction-propagation
  - urn:ngm:class:gossip-protocol
enables:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:block-production
  - urn:ngm:class:fee-market
dependsOn:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:replace-by-fee
  - urn:ngm:class:child-pays-for-parent
contrastsWith:
  - urn:ngm:class:block
  - urn:ngm:class:transaction
bridgesTo:
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:decentralised-exchange
uses:
  - urn:ngm:class:utxo
  - urn:ngm:class:transaction-fee
partOf:
  - urn:ngm:class:blockchain-node
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:fee-market
  - urn:ngm:class:block-size
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining-pool
  - urn:ngm:class:double-spending
  - urn:ngm:class:transaction
---

# Mempool

The memory pool maintained by each blockchain node holding broadcast but as-yet unconfirmed transactions awaiting inclusion in a block. Miners select transactions from the mempool, typically prioritising by fee rate, while node operators use mempool policies to manage capacity and mitigate spam.
