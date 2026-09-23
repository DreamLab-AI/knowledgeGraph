---
okf_version: "0.2"
type: Class
title: Price Discovery
resource: urn:ngm:class:price-discovery
domain: finance
description: Price discovery is the market mechanism through which asset prices are determined via the continuous interaction of buyers and sellers, incorporating supply/demand dynamics, order flow analysis, bid-ask spread formation, and arbitrage across venues to establish fair market value in real-time.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:market-microstructure
hasPart:
  - urn:ngm:class:bid-ask-spread
  - urn:ngm:class:order-book
  - urn:ngm:class:auction-mechanism
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:information-asymmetry
enables:
  - urn:ngm:class:market-efficiency
  - urn:ngm:class:price-transparency
  - urn:ngm:class:capital-allocation
  - urn:ngm:class:fair-valuation
dependsOn:
  - urn:ngm:class:supply-and-demand
  - urn:ngm:class:market-structure
contrastsWith:
  - urn:ngm:class:market-manipulation
  - urn:ngm:class:information-asymmetry
bridgesTo:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:oracle-network
  - urn:ngm:class:mev
uses:
  - urn:ngm:class:arbitrage
relatedTo:
  - urn:ngm:class:high-frequency-trading
  - urn:ngm:class:futures-market
---

# Price Discovery

Price discovery is the market mechanism through which asset prices are determined via the continuous interaction of buyers and sellers, incorporating supply/demand dynamics, order flow analysis, bid-ask spread formation, and arbitrage across venues to establish fair market value in real-time.
