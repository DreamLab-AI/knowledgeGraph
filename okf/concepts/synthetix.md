---
okf_version: "0.2"
type: Class
title: Synthetix
resource: urn:ngm:class:synthetix
domain: blockchain
description: A protocol on Ethereum that issues synthetic assets (synths) tracking the price of external references such as fiat currencies, commodities, and indices, backed by a pooled collateral of its native SNX token and other staked assets; trades execute against the shared debt pool rather than an order book.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:synthetic-asset
  - urn:ngm:class:debt-pool
  - urn:ngm:class:staking
requires:
  - urn:ngm:class:collateral-management
  - urn:ngm:class:price-oracle
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
enables:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:derivatives-trading
dependsOn:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:layer-2-scaling
contrastsWith:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:finance
  - urn:ngm:class:tokenization
  - urn:ngm:class:decentralised-exchange
uses:
  - urn:ngm:class:token
  - urn:ngm:class:governance-token
partOf:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:yield-farming
  - urn:ngm:class:cross-chain-interoperability
---

# Synthetix

A protocol on Ethereum that issues synthetic assets (synths) tracking the price of external references such as fiat currencies, commodities, and indices, backed by a pooled collateral of its native SNX token and other staked assets; trades execute against the shared debt pool rather than an order book.
