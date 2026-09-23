---
okf_version: "0.2"
type: Class
title: Twap Oracle
resource: urn:ngm:class:twap-oracle
domain: blockchain
description: A TWAP oracle is a price oracle that reports the time-weighted average price of an asset over a chosen window rather than its instantaneous spot price. By accumulating price-time observations and dividing by elapsed time, it produces a smoothed figure that is expensive to manipulate within a single block or short interval. TWAP oracles are widely deployed by on-chain automated market makers to sup
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:price-oracle
hasPart:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:on-chain-data
requires:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:on-chain-data
enables:
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:on-chain-data
contrastsWith:
  - urn:ngm:class:chainlink
  - urn:ngm:class:oracle
bridgesTo:
  - urn:ngm:class:automated-market-maker
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:dex
partOf:
  - urn:ngm:class:price-oracle
relatedTo:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:uniswap
  - urn:ngm:class:arbitrage
---

# Twap Oracle

A TWAP oracle is a price oracle that reports the time-weighted average price of an asset over a chosen window rather than its instantaneous spot price. By accumulating price-time observations and dividing by elapsed time, it produces a smoothed figure that is expensive to manipulate within a single block or short interval. TWAP oracles are widely deployed by on-chain automated market makers to supply manipulation-resistant price feeds to lending, derivatives, and liquidation systems.
