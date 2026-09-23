---
okf_version: "0.2"
type: Class
title: Token Bonding Curve
resource: urn:ngm:class:token-bonding-curve
domain: spatial-computing
description: Algorithmic pricing mechanism that defines token value as a mathematical function of circulating supply and reserve balance, providing continuous liquidity through automated market making.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:liquidity
  - urn:ngm:class:constant-product-formula
  - urn:ngm:class:constant-product-formula
  - urn:ngm:class:reserve-pool
  - urn:ngm:class:supply-function
  - urn:ngm:class:liquidity
requires:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:reserve-asset
  - urn:ngm:class:smart-contract
  - urn:ngm:class:reserve-asset
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:liquidity
  - urn:ngm:class:predictable-pricing
  - urn:ngm:class:automated-trading
dependsOn:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:mathematical-model
  - urn:ngm:class:economic-parameters
partOf:
  - urn:ngm:class:token-economy
  - urn:ngm:class:automated-market-maker
---

# Token Bonding Curve

Algorithmic pricing mechanism that defines token value as a mathematical function of circulating supply and reserve balance, providing continuous liquidity through automated market making.
