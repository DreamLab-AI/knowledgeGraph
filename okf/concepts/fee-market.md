---
okf_version: "0.2"
type: Class
title: Fee Market
resource: urn:ngm:class:fee-market
domain: blockchain
description: A Fee Market is the mechanism by which blockchain participants competitively bid transaction fees to have their transactions included in blocks, with miners or validators selecting transactions that maximise their revenue given limited block capacity. Fee markets emerge from the interplay between fixed block-space supply and variable transaction demand, producing dynamic price discovery that signa
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:base-fee
  - urn:ngm:class:transaction-fee
requires:
  - urn:ngm:class:mempool
  - urn:ngm:class:block-size
enables:
  - urn:ngm:class:miner
  - urn:ngm:class:blockchain-transaction
dependsOn:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:gas-price
  - urn:ngm:class:tokenomics
  - urn:ngm:class:proof-of-work
---

# Fee Market

A Fee Market is the mechanism by which blockchain participants competitively bid transaction fees to have their transactions included in blocks, with miners or validators selecting transactions that maximise their revenue given limited block capacity. Fee markets emerge from the interplay between fixed block-space supply and variable transaction demand, producing dynamic price discovery that signals network congestion. Ethereum's EIP-1559 introduced a protocol-level base fee that adjusts algorithmically each block, partially burning fees to reduce token supply and adding a tip mechanism for priority inclusion.
