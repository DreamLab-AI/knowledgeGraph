---
okf_version: "0.2"
type: Class
title: Mining Reward
resource: urn:ngm:class:mining-reward
domain: blockchain
description: A Mining Reward is the economic incentive awarded to the miner who successfully produces a valid block and appends it to the canonical blockchain, comprising a block subsidy of newly minted cryptocurrency plus the aggregate transaction fees of all transactions included in that block. The subsidy follows a pre-programmed halving schedule—in Bitcoin, halving every 210,000 blocks—gradually reducing i
maturity: established
quality: 0
is-a:
  - urn:ngm:class:blockchain-entity
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
partOf:
  - urn:ngm:class:blockchain-entity
relatedTo:
  - urn:ngm:class:block-reward
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:miner
  - urn:ngm:class:mining-pool
  - urn:ngm:class:high-energy-consumption
  - urn:ngm:class:blockchain-economics
---

# Mining Reward

A Mining Reward is the economic incentive awarded to the miner who successfully produces a valid block and appends it to the canonical blockchain, comprising a block subsidy of newly minted cryptocurrency plus the aggregate transaction fees of all transactions included in that block. The subsidy follows a pre-programmed halving schedule—in Bitcoin, halving every 210,000 blocks—gradually reducing issuance until the subsidy approaches zero and transaction fees become the sole miner compensation, aligning long-term network security incentives with user demand for block space.
