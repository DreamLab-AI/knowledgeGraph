---
okf_version: "0.2"
type: Class
title: Coinbase Transaction
resource: urn:ngm:class:coinbase-transaction
domain: blockchain
description: The first transaction in every blockchain block, created by the miner or block producer, that contains no inputs and issues the block reward plus accumulated transaction fees to the miner's address. Unlike regular transactions, the coinbase transaction has no sender; it creates new coins from protocol-defined issuance rules and serves as the primary mechanism by which new cryptocurrency enters cir
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:block-reward
  - urn:ngm:class:transaction-fee
requires:
  - urn:ngm:class:mining
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:mining-reward
  - urn:ngm:class:cryptocurrency
partOf:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:blockchain-protocol
---

# Coinbase Transaction

The first transaction in every blockchain block, created by the miner or block producer, that contains no inputs and issues the block reward plus accumulated transaction fees to the miner's address. Unlike regular transactions, the coinbase transaction has no sender; it creates new coins from protocol-defined issuance rules and serves as the primary mechanism by which new cryptocurrency enters circulation.
