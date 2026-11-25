---
okf_version: "0.2"
type: Class
title: Liquidity
resource: urn:ngm:class:liquidity
domain: finance
description: The degree to which an asset can be bought or sold quickly without causing a significant change in its price. In decentralised markets, liquidity is supplied by participants who deposit assets into pools or order books, enabling efficient price discovery and low-slippage trade execution.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:decentralised-finance
hasPart:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:order-book
requires:
  - urn:ngm:class:market-depth
  - urn:ngm:class:bid-ask-spread
  - urn:ngm:class:liquidity-provider
  - urn:ngm:class:liquidity-pool
enables:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:price-discovery
  - urn:ngm:class:token-swapping
dependsOn:
  - urn:ngm:class:market-making
contrastsWith:
  - urn:ngm:class:impermanent-loss
bridgesTo:
  - urn:ngm:class:treasury-management
  - urn:ngm:class:market-making
  - urn:ngm:class:order-book
uses:
  - urn:ngm:class:constant-product-formula
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:arbitrage
  - urn:ngm:class:capital-efficiency
relatedTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:token-economics
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Liquidity

The degree to which an asset can be bought or sold quickly without causing a significant change in its price. In decentralised markets, liquidity is supplied by participants who deposit assets into pools or order books, enabling efficient price discovery and low-slippage trade execution.
