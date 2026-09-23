---
okf_version: "0.2"
type: Class
title: Order Book Exchange
resource: urn:ngm:class:order-book-exchange
domain: blockchain
description: An order book exchange is a trading venue that matches buy and sell orders through a central limit order book, an ordered record of outstanding bids and asks at each price level. A matching engine pairs incoming orders against resting liquidity according to price-time priority, executing trades and updating the book in real time. This model, dominant in traditional equities, futures, and centralis
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:market-microstructure
hasPart:
  - urn:ngm:class:liquidity
requires:
  - urn:ngm:class:liquidity
  - urn:ngm:class:latency
enables:
  - urn:ngm:class:financial-services
dependsOn:
  - urn:ngm:class:market-microstructure
contrastsWith:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:liquidity-mining
bridgesTo:
  - urn:ngm:class:decentralized-exchange
uses:
  - urn:ngm:class:latency
supports:
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:financial-system
---

# Order Book Exchange

An order book exchange is a trading venue that matches buy and sell orders through a central limit order book, an ordered record of outstanding bids and asks at each price level. A matching engine pairs incoming orders against resting liquidity according to price-time priority, executing trades and updating the book in real time. This model, dominant in traditional equities, futures, and centralised cryptocurrency exchanges, contrasts with automated market makers that price trades algorithmically against pooled liquidity rather than against discrete counter-orders.
