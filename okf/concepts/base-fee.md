---
okf_version: "0.2"
type: Class
title: Base Fee
resource: urn:ngm:class:base-fee
domain: blockchain
description: The Base Fee is the algorithmically determined minimum fee per unit of gas that every transaction must pay to be included in an Ethereum block, introduced by EIP-1559. It adjusts automatically each block based on whether the previous block was above or below its gas target, increasing when demand is high and decreasing when low. Unlike miner tips, the base fee is burned rather than paid to validat
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:economic-mechanism
requires:
  - urn:ngm:class:gas
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:mempool
  - urn:ngm:class:eip-1559
enables:
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:burning-mechanism
  - urn:ngm:class:mev
contrastsWith:
  - urn:ngm:class:priority-fee
  - urn:ngm:class:miner
partOf:
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:blockchain-economics
relatedTo:
  - urn:ngm:class:gas-price
  - urn:ngm:class:gas-limit
  - urn:ngm:class:priority-fee
  - urn:ngm:class:block-reward
  - urn:ngm:class:blockchain-economics
---

# Base Fee

The Base Fee is the algorithmically determined minimum fee per unit of gas that every transaction must pay to be included in an Ethereum block, introduced by EIP-1559. It adjusts automatically each block based on whether the previous block was above or below its gas target, increasing when demand is high and decreasing when low. Unlike miner tips, the base fee is burned rather than paid to validators, creating a deflationary pressure on ETH supply and making gas price prediction more reliable for users.
