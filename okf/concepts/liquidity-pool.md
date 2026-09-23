---
okf_version: "0.2"
type: Class
title: Liquidity Pool
resource: urn:ngm:class:liquidity-pool
domain: blockchain
description: A smart contract-governed reserve of paired cryptocurrency tokens that enables decentralized trading through automated market-making algorithms, providing continuous liquidity without traditional order books.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:amm-algorithm
  - urn:ngm:class:lp-token
  - urn:ngm:class:smart-contract
  - urn:ngm:class:token-reserve
requires:
  - urn:ngm:class:liquidity-provider
  - urn:ngm:class:price-oracle
  - urn:ngm:class:smart-contract-platform
enables:
  - urn:ngm:class:token-swapping
  - urn:ngm:class:yield-farming
  - urn:ngm:class:automated-market-making
  - urn:ngm:class:price-discovery
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:token-standard
  - urn:ngm:class:cryptographic-verification
partOf:
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:decentralized-exchange-dex
  - urn:ngm:class:de-fi-protocol
---

# Liquidity Pool

A smart contract-governed reserve of paired cryptocurrency tokens that enables decentralized trading through automated market-making algorithms, providing continuous liquidity without traditional order books.
