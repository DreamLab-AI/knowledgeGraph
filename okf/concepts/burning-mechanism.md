---
okf_version: "0.2"
type: Class
title: Burning Mechanism
resource: urn:ngm:class:burning-mechanism
domain: blockchain
description: A Burning Mechanism is an economic design pattern in tokenised blockchain systems whereby tokens are permanently removed from circulating supply by sending them to an unspendable address (a null or black-hole address) or by protocol-enforced destruction, permanently contracting the total token supply. Token burning is deployed as a deflationary monetary policy tool to counteract inflationary issua
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:base-fee
requires:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:deflationary-token
  - urn:ngm:class:inflation-control
  - urn:ngm:class:tokenomics
dependsOn:
  - urn:ngm:class:eip-1559
  - urn:ngm:class:token-economics
contrastsWith:
  - urn:ngm:class:block-reward
  - urn:ngm:class:inflationary-token
partOf:
  - urn:ngm:class:tokenomics-governance
relatedTo:
  - urn:ngm:class:fee-market
  - urn:ngm:class:market-capitalization
  - urn:ngm:class:blockchain-economics
  - urn:ngm:class:virtual-economy
---

# Burning Mechanism

A Burning Mechanism is an economic design pattern in tokenised blockchain systems whereby tokens are permanently removed from circulating supply by sending them to an unspendable address (a null or black-hole address) or by protocol-enforced destruction, permanently contracting the total token supply. Token burning is deployed as a deflationary monetary policy tool to counteract inflationary issuance, to create token scarcity as a value-accrual mechanism, to implement fee markets (as in Ethereum's EIP-1559 base fee burn), and to regulate supply in algorithmic stablecoins and tokenomics models. The economic effect depends critically on the rate and predictability of burning relative to issuance.
