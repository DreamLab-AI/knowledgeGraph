---
okf_version: "0.2"
type: Class
title: Liquidity Provider
resource: urn:ngm:class:liquidity-provider
domain: finance
description: A liquidity provider is an entity — individual, institution, or automated protocol participant — that deposits assets into a trading venue or liquidity pool to enable others to execute trades, receiving fee income or other incentives in return. In decentralised finance, liquidity providers supply token pairs to automated market makers, receiving LP tokens representing their proportional pool share
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:decentralized-finance-de-fi
hasPart:
  - urn:ngm:class:liquidity-position
requires:
  - urn:ngm:class:token-pair
  - urn:ngm:class:wallet
enables:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:trade-execution
  - urn:ngm:class:market-depth
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:price-oracle
contrastsWith:
  - urn:ngm:class:order-book
bridgesTo:
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:real-world-asset
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:lp-token
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:yield-farming
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:total-value-locked
  - urn:ngm:class:slippage
  - urn:ngm:class:governance-token
---

# Liquidity Provider

A liquidity provider is an entity — individual, institution, or automated protocol participant — that deposits assets into a trading venue or liquidity pool to enable others to execute trades, receiving fee income or other incentives in return. In decentralised finance, liquidity providers supply token pairs to automated market makers, receiving LP tokens representing their proportional pool share.
