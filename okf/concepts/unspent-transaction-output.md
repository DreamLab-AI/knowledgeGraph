---
okf_version: "0.2"
type: Class
title: Unspent Transaction Output
resource: urn:ngm:class:unspent-transaction-output
domain: blockchain
description: An Unspent Transaction Output (UTXO) is a discrete amount of cryptocurrency that has been received by an address and not yet spent, forming the fundamental accounting unit in UTXO-based blockchains such as Bitcoin. Each transaction consumes one or more existing UTXOs as inputs and creates new UTXOs as outputs, with the global set of all UTXOs representing the current ledger state. Validating a tra
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:wallet
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:transaction-validation
contrastsWith:
  - urn:ngm:class:account-model
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:transaction-validation
partOf:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:ledger
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:double-spending
  - urn:ngm:class:mining
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain
---

# Unspent Transaction Output

An Unspent Transaction Output (UTXO) is a discrete amount of cryptocurrency that has been received by an address and not yet spent, forming the fundamental accounting unit in UTXO-based blockchains such as Bitcoin. Each transaction consumes one or more existing UTXOs as inputs and creates new UTXOs as outputs, with the global set of all UTXOs representing the current ledger state. Validating a transaction requires confirming that its referenced inputs exist in the UTXO set and have not already been spent, which is central to preventing double spending.
