---
okf_version: "0.2"
type: Class
title: Arbitrage
resource: urn:ngm:class:arbitrage
domain: blockchain
description: Arbitrage is the practice of simultaneously buying and selling an asset across different markets or instruments to profit from a price discrepancy with minimal directional risk. In decentralised finance it is a central economic force that aligns token prices across exchanges and liquidity pools, often executed by automated bots exploiting transient inefficiencies. Arbitrage activity drives price d
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:market-efficiency
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:order-book
enables:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:market-efficiency
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:price-discovery
uses:
  - urn:ngm:class:flash-loan
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:dex
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset-trading
relatedTo:
  - urn:ngm:class:mev
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:yield-farming
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:risk-management
---

# Arbitrage

Arbitrage is the practice of simultaneously buying and selling an asset across different markets or instruments to profit from a price discrepancy with minimal directional risk. In decentralised finance it is a central economic force that aligns token prices across exchanges and liquidity pools, often executed by automated bots exploiting transient inefficiencies. Arbitrage activity drives price discovery and improves market efficiency, but is closely tied to phenomena such as miner/maximal extractable value and impermanent loss.
