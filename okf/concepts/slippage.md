---
okf_version: "0.2"
type: Class
title: Slippage
resource: urn:ngm:class:slippage
domain: blockchain
description: Slippage is the difference between the expected price of a trade and the price at which it actually executes, arising from price movement and limited liquidity between order submission and settlement. On automated-market-maker decentralised exchanges slippage is a direct function of trade size relative to pool depth, and traders set a slippage tolerance to bound acceptable execution price. Excessi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:decentralised-exchange
requires:
  - urn:ngm:class:trade-execution
enables:
  - urn:ngm:class:mev
dependsOn:
  - urn:ngm:class:liquidity
  - urn:ngm:class:liquidity-pool
contrastsWith:
  - urn:ngm:class:liquidity
bridgesTo:
  - urn:ngm:class:market-microstructure
uses:
  - urn:ngm:class:order-book
supports:
  - urn:ngm:class:market-maker
partOf:
  - urn:ngm:class:trade-execution
relatedTo:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:liquidity
  - urn:ngm:class:trade-execution
  - urn:ngm:class:mev
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Slippage

Slippage is the difference between the expected price of a trade and the price at which it actually executes, arising from price movement and limited liquidity between order submission and settlement. On automated-market-maker decentralised exchanges slippage is a direct function of trade size relative to pool depth, and traders set a slippage tolerance to bound acceptable execution price. Excessive slippage can be exploited through front-running and other maximal-extractable-value strategies.
