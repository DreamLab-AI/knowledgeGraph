---
okf_version: "0.2"
type: Class
title: Cryptocurrency Exchange
resource: urn:ngm:class:cryptocurrency-exchange
domain: finance
description: A cryptocurrency exchange is a platform that enables the trading of digital assets for other cryptocurrencies or for fiat currency. Exchanges match buy and sell orders, provide custody or settlement of funds, and supply liquidity and price discovery for crypto markets. They range from centralised intermediaries holding customer assets to decentralised protocols that execute trades on-chain.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-economy
hasPart:
  - urn:ngm:class:order-book
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:wallet
requires:
  - urn:ngm:class:custody
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:liquidity
contrastsWith:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:fiat-currency
uses:
  - urn:ngm:class:kyc
  - urn:ngm:class:fiat-currency
supports:
  - urn:ngm:class:liquidity
  - urn:ngm:class:custody
partOf:
  - urn:ngm:class:digital-economy
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:bitcoin
  - urn:ngm:class:tether
  - urn:ngm:class:stablecoin
---

# Cryptocurrency Exchange

A cryptocurrency exchange is a platform that enables the trading of digital assets for other cryptocurrencies or for fiat currency. Exchanges match buy and sell orders, provide custody or settlement of funds, and supply liquidity and price discovery for crypto markets. They range from centralised intermediaries holding customer assets to decentralised protocols that execute trades on-chain.
