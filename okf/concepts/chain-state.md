---
okf_version: "0.2"
type: Class
title: Chain State
resource: urn:ngm:class:chain-state
domain: blockchain
description: Chain State is the complete, current snapshot of all data held by a blockchain at a given block height, encompassing account balances, smart contract storage, unspent transaction outputs (UTXOs), and any other data structures committed to the ledger. It represents the authoritative, globally agreed world-state that full nodes maintain and update after each validated block, serving as the ground tr
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:account-model
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-root
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:blockchain-transaction
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:blockchain-scalability
uses:
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:block-header
relatedTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-data-structure
---

# Chain State

Chain State is the complete, current snapshot of all data held by a blockchain at a given block height, encompassing account balances, smart contract storage, unspent transaction outputs (UTXOs), and any other data structures committed to the ledger. It represents the authoritative, globally agreed world-state that full nodes maintain and update after each validated block, serving as the ground truth against which new transactions are validated.
