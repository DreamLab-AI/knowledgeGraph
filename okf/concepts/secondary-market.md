---
okf_version: "0.2"
type: Class
title: Secondary Market
resource: urn:ngm:class:secondary-market
domain: finance
description: A secondary market is a venue in which existing financial assets are bought and sold among investors after their initial issuance, rather than purchased directly from the issuer. By allowing holders to exit positions and new buyers to enter, it provides liquidity, continuous price discovery, and a mechanism for valuing assets through ongoing trading. Secondary markets are essential to the function
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:finance
hasPart:
  - urn:ngm:class:asset-trading
requires:
  - urn:ngm:class:liquidity
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:price-discovery
  - urn:ngm:class:asset-trading
dependsOn:
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:price-discovery
contrastsWith:
  - urn:ngm:class:capital-allocation
bridgesTo:
  - urn:ngm:class:decentralised-exchange
uses:
  - urn:ngm:class:asset-trading
  - urn:ngm:class:price-discovery
supports:
  - urn:ngm:class:capital-allocation
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:interest-rate
  - urn:ngm:class:capital-allocation
---

# Secondary Market

A secondary market is a venue in which existing financial assets are bought and sold among investors after their initial issuance, rather than purchased directly from the issuer. By allowing holders to exit positions and new buyers to enter, it provides liquidity, continuous price discovery, and a mechanism for valuing assets through ongoing trading. Secondary markets are essential to the functioning of capital markets because the ability to resell makes initial investment far more attractive.
