---
okf_version: "0.2"
type: Class
title: Priority Fee
resource: urn:ngm:class:priority-fee
domain: blockchain
description: A Priority Fee (also called a miner tip or validator tip) is an optional, user-specified additional payment on top of the base fee in EIP-1559-compatible blockchains, paid directly to the block producer to incentivise preferential inclusion and ordering of a transaction within the next block. By offering a higher tip, users signal urgency and compete for limited block space during periods of netwo
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:gas
requires:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:gas-optimization
  - urn:ngm:class:mev
dependsOn:
  - urn:ngm:class:eip-1559
  - urn:ngm:class:base-fee
contrastsWith:
  - urn:ngm:class:burning-mechanism
partOf:
  - urn:ngm:class:fee-market
  - urn:ngm:class:tokenomics
relatedTo:
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:gas-price
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:validator-node
---

# Priority Fee

A Priority Fee (also called a miner tip or validator tip) is an optional, user-specified additional payment on top of the base fee in EIP-1559-compatible blockchains, paid directly to the block producer to incentivise preferential inclusion and ordering of a transaction within the next block. By offering a higher tip, users signal urgency and compete for limited block space during periods of network congestion, enabling a market-based transaction prioritisation mechanism. Priority fees are burned alongside the base fee under EIP-1559's fee model only partially — the base fee is burned while the priority fee flows to the validator, aligning incentives for prompt transaction confirmation.
