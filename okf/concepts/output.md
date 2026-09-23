---
okf_version: "0.2"
type: Class
title: Output
resource: urn:ngm:class:output
domain: blockchain
description: "An Output is a component of a blockchain transaction that specifies a recipient address and an amount of value to be transferred, forming the fundamental unit through which cryptocurrency is allocated and ownership is recorded on a distributed ledger. In UTXO-based systems such as Bitcoin, unspent outputs serve as inputs to subsequent transactions, creating a directed graph of value flows secured "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:address
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-economics
uses:
  - urn:ngm:class:script
  - urn:ngm:class:cryptographic-hash
partOf:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:block
relatedTo:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:audit-trail
---

# Output

An Output is a component of a blockchain transaction that specifies a recipient address and an amount of value to be transferred, forming the fundamental unit through which cryptocurrency is allocated and ownership is recorded on a distributed ledger. In UTXO-based systems such as Bitcoin, unspent outputs serve as inputs to subsequent transactions, creating a directed graph of value flows secured by digital signatures.
