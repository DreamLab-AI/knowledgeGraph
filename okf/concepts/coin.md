---
okf_version: "0.2"
type: Class
title: Coin
resource: urn:ngm:class:coin
domain: blockchain
description: A Coin is a native cryptographic asset issued and governed by a blockchain protocol itself, distinct from tokens created by smart contracts on top of an existing chain. Coins function as the primary medium of exchange for transaction fees, validator rewards, and network participation incentives within their respective distributed ledger ecosystems, and may also serve as stores of value, monetary r
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:monetary-system
  - urn:ngm:class:payment-system
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:mining-reward
  - urn:ngm:class:stablecoin-token
  - urn:ngm:class:digital-asset-market
contrastsWith:
  - urn:ngm:class:cryptocurrency-token
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:digital-currency
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:monetary-sovereignty
  - urn:ngm:class:economic-layer
---

# Coin

A Coin is a native cryptographic asset issued and governed by a blockchain protocol itself, distinct from tokens created by smart contracts on top of an existing chain. Coins function as the primary medium of exchange for transaction fees, validator rewards, and network participation incentives within their respective distributed ledger ecosystems, and may also serve as stores of value, monetary reserves, or collateral in decentralised finance applications.
