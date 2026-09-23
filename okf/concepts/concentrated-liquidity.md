---
okf_version: "0.2"
type: Class
title: Concentrated Liquidity
resource: urn:ngm:class:concentrated-liquidity
domain: blockchain
description: Concentrated liquidity is a capital efficiency mechanism for automated market makers (AMMs) in which liquidity providers deposit assets within user-specified price ranges rather than uniformly across the full price curve from zero to infinity. Within an active price range, the capital deployed behaves equivalently to a much larger position in a constant-product AMM, dramatically increasing fee rev
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:liquidity-provision
hasPart:
  - urn:ngm:class:liquidity-position
requires:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:fee-tier
enables:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:yield-farming
  - urn:ngm:class:token-economics
  - urn:ngm:class:liquidity
  - urn:ngm:class:capital-efficiency
dependsOn:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:blockchain
contrastsWith:
  - urn:ngm:class:constant-product-amm
  - urn:ngm:class:order-book-exchange
bridgesTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:financial-derivatives
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
  - urn:ngm:class:non-fungible-token
relatedTo:
  - urn:ngm:class:uniswap
  - urn:ngm:class:de-fi
  - urn:ngm:class:protocol-owned-liquidity
  - urn:ngm:class:perpetual-futures
---

# Concentrated Liquidity

Concentrated liquidity is a capital efficiency mechanism for automated market makers (AMMs) in which liquidity providers deposit assets within user-specified price ranges rather than uniformly across the full price curve from zero to infinity. Within an active price range, the capital deployed behaves equivalently to a much larger position in a constant-product AMM, dramatically increasing fee revenue per unit of capital while simultaneously reducing the price impact of trades of a given size. This design was pioneered by Uniswap v3 and has since been widely adopted across decentralised exchanges.
