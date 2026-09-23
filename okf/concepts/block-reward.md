---
okf_version: "0.2"
type: Class
title: Block Reward
resource: urn:ngm:class:block-reward
domain: blockchain
description: A Block Reward is the cryptoeconomic incentive paid to the producer of a valid block—comprising a protocol-specified subsidy (newly minted tokens) plus the aggregate transaction fees included in that block—which compensates validators or miners for expending resources to extend the canonical chain and maintain network security. Block reward schedules are a core parameter of a blockchain's monetary
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:mining-reward
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:mining
  - urn:ngm:class:blockchain-economics
  - urn:ngm:class:tokenomics
supports:
  - urn:ngm:class:blockchain-governance
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
---

# Block Reward

A Block Reward is the cryptoeconomic incentive paid to the producer of a valid block—comprising a protocol-specified subsidy (newly minted tokens) plus the aggregate transaction fees included in that block—which compensates validators or miners for expending resources to extend the canonical chain and maintain network security. Block reward schedules are a core parameter of a blockchain's monetary policy, directly governing token inflation, miner revenue, and the long-run security budget of the network.
