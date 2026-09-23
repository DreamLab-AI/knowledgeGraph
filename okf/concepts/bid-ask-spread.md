---
okf_version: "0.2"
type: Class
title: Bid Ask Spread
resource: urn:ngm:class:bid-ask-spread
domain: finance
description: The bid-ask spread is the difference between the highest price a buyer is willing to pay (the bid) and the lowest price a seller will accept (the ask) for an asset at a given moment. It is a core measure of market liquidity and an implicit transaction cost borne by traders who cross the spread. Narrow spreads indicate liquid, competitive markets, while wide spreads reflect thin liquidity, volatili
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:market-microstructure
hasPart:
  - urn:ngm:class:price-discovery
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:order-book
enables:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:liquidity
bridgesTo:
  - urn:ngm:class:finance
uses:
  - urn:ngm:class:order-book
partOf:
  - urn:ngm:class:order-book
  - urn:ngm:class:market-microstructure
relatedTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:high-frequency-trading
  - urn:ngm:class:price-discovery
---

# Bid Ask Spread

The bid-ask spread is the difference between the highest price a buyer is willing to pay (the bid) and the lowest price a seller will accept (the ask) for an asset at a given moment. It is a core measure of market liquidity and an implicit transaction cost borne by traders who cross the spread. Narrow spreads indicate liquid, competitive markets, while wide spreads reflect thin liquidity, volatility, or elevated risk for liquidity providers.
