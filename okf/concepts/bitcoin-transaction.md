---
okf_version: "0.2"
type: Class
title: Bitcoin Transaction
resource: urn:ngm:class:bitcoin-transaction
domain: blockchain
description: A Bitcoin transaction is a signed data structure that transfers value on the Bitcoin network by consuming unspent transaction outputs (UTXOs) and creating new ones. Each transaction references prior outputs, provides cryptographic signatures satisfying their spending conditions, and specifies new outputs locked to recipient scripts. Validated transactions are broadcast to the mempool and ultimatel
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:bitcoin
hasPart:
  - urn:ngm:class:utxo
  - urn:ngm:class:transaction-fee
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:bitcoin-script
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:runes-protocol
dependsOn:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining
uses:
  - urn:ngm:class:mempool
  - urn:ngm:class:wallet
partOf:
  - urn:ngm:class:bitcoin
relatedTo:
  - urn:ngm:class:blockchain-transaction
---

# Bitcoin Transaction

A Bitcoin transaction is a signed data structure that transfers value on the Bitcoin network by consuming unspent transaction outputs (UTXOs) and creating new ones. Each transaction references prior outputs, provides cryptographic signatures satisfying their spending conditions, and specifies new outputs locked to recipient scripts. Validated transactions are broadcast to the mempool and ultimately confirmed when included in a mined block.
