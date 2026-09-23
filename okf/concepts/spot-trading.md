---
okf_version: "0.2"
type: Class
title: Spot Trading
resource: urn:ngm:class:spot-trading
domain: blockchain
description: Spot trading is the buying and selling of an asset for immediate delivery and settlement at the current market price, as opposed to settlement at a future date. In cryptocurrency and traditional markets it involves placing orders against an order book or liquidity pool, with ownership of the underlying asset transferring promptly, and it contrasts with derivatives and margin trading where exposure
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-asset
hasPart:
  - urn:ngm:class:order-book
  - urn:ngm:class:limit-order
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:settlement
enables:
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:bid-ask-spread
contrastsWith:
  - urn:ngm:class:derivatives-trading
uses:
  - urn:ngm:class:order-book
supports:
  - urn:ngm:class:settlement
partOf:
  - urn:ngm:class:digital-asset
relatedTo:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:decentralised-exchange
---

# Spot Trading

Spot trading is the buying and selling of an asset for immediate delivery and settlement at the current market price, as opposed to settlement at a future date. In cryptocurrency and traditional markets it involves placing orders against an order book or liquidity pool, with ownership of the underlying asset transferring promptly, and it contrasts with derivatives and margin trading where exposure is taken without immediate full ownership.
