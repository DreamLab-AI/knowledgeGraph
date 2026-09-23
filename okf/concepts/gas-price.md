---
okf_version: "0.2"
type: Class
title: Gas Price
resource: urn:ngm:class:gas-price
domain: blockchain
description: Gas Price is the amount of cryptocurrency (denominated in gwei on Ethereum) that a transaction sender is willing to pay per unit of gas consumed during execution. It serves as the primary market mechanism for prioritising transactions within a block and compensating validators or miners for computational work. Gas price interacts with the gas limit and base fee to determine total transaction cost,
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:base-fee
  - urn:ngm:class:priority-fee
requires:
  - urn:ngm:class:gas
  - urn:ngm:class:gas-limit
  - urn:ngm:class:transaction
enables:
  - urn:ngm:class:fee-market
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:mempool
relatedTo:
  - urn:ngm:class:eip-1559
  - urn:ngm:class:miner
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:token-economics
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:mechanism-design
---

# Gas Price

Gas Price is the amount of cryptocurrency (denominated in gwei on Ethereum) that a transaction sender is willing to pay per unit of gas consumed during execution. It serves as the primary market mechanism for prioritising transactions within a block and compensating validators or miners for computational work. Gas price interacts with the gas limit and base fee to determine total transaction cost, and is subject to dynamic adjustment under fee-market protocols such as EIP-1559.
