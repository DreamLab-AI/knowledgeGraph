---
okf_version: "0.2"
type: Class
title: Transaction Output
resource: urn:ngm:class:transaction-output
domain: blockchain
description: A transaction output is a component of a blockchain transaction that specifies an amount of value and the conditions under which it can later be spent. In UTXO-based systems each output records a value and a locking script that defines who may consume it, and an unspent output becomes the input to a future transaction. Transaction outputs are the fundamental units of ownership and value transfer i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-transaction
hasPart:
  - urn:ngm:class:script
requires:
  - urn:ngm:class:bitcoin
enables:
  - urn:ngm:class:unspent-transaction-output
implements:
  - urn:ngm:class:utxo
contrastsWith:
  - urn:ngm:class:transaction
bridgesTo:
  - urn:ngm:class:bitcoin
uses:
  - urn:ngm:class:script
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:utxo
partOf:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction
relatedTo:
  - urn:ngm:class:unspent-transaction-output
  - urn:ngm:class:double-spending
  - urn:ngm:class:consensus-mechanism
---

# Transaction Output

A transaction output is a component of a blockchain transaction that specifies an amount of value and the conditions under which it can later be spent. In UTXO-based systems each output records a value and a locking script that defines who may consume it, and an unspent output becomes the input to a future transaction. Transaction outputs are the fundamental units of ownership and value transfer in such ledgers, and the set of all unspent outputs constitutes the current state of holdings.
