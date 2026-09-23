---
okf_version: "0.2"
type: Class
title: Impermanent Loss
resource: urn:ngm:class:impermanent-loss
domain: blockchain
description: Impermanent loss is the opportunity cost incurred by a liquidity provider in an automated market maker (AMM) when the price ratio of deposited assets diverges from the ratio at deposit time, causing the provider's pool share to be worth less than simply holding the assets would have been. The loss is 'impermanent' because it reverses if prices return to the original ratio, but becomes realised upo
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:liquidity-provision
requires:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:arbitrage
enables:
  - urn:ngm:class:concentrated-liquidity
dependsOn:
  - urn:ngm:class:constant-product-formula
contrastsWith:
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:order-book-exchange
bridgesTo:
  - urn:ngm:class:market-making
partOf:
  - urn:ngm:class:liquidity-provider
relatedTo:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:amm-algorithm
  - urn:ngm:class:de-fi
  - urn:ngm:class:yield-generation
  - urn:ngm:class:token-pair
  - urn:ngm:class:price-oracle
---

# Impermanent Loss

Impermanent loss is the opportunity cost incurred by a liquidity provider in an automated market maker (AMM) when the price ratio of deposited assets diverges from the ratio at deposit time, causing the provider's pool share to be worth less than simply holding the assets would have been. The loss is 'impermanent' because it reverses if prices return to the original ratio, but becomes realised upon withdrawal.
