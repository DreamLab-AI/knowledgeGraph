---
okf_version: "0.2"
type: Class
title: UTXO Model
resource: urn:ngm:class:utxo-model
domain: blockchain
description: Unspent Transaction Output accounting model used in Bitcoin and related blockchains, where each coin is represented as a discrete unspent output that must be fully consumed and re-created by a transaction. The model enables straightforward parallel validation, eliminates double-spend via simple output-state queries, and underpins script-based programmability.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:transaction-output
  - urn:ngm:class:locking-script
  - urn:ngm:class:utxo
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:immutability
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:double-spend-prevention
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:simplified-payment-verification
dependsOn:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:merkle-tree
contrastsWith:
  - urn:ngm:class:account-model
  - urn:ngm:class:decentralized-finance-de-fi
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:state-channel
  - urn:ngm:class:virtual-economy
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:transaction-fee
partOf:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:bitcoin-protocol
relatedTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:wallet
  - urn:ngm:class:coinbase-transaction
  - urn:ngm:class:block
---

# UTXO Model

Unspent Transaction Output accounting model used in Bitcoin and related blockchains, where each coin is represented as a discrete unspent output that must be fully consumed and re-created by a transaction. The model enables straightforward parallel validation, eliminates double-spend via simple output-state queries, and underpins script-based programmability.
