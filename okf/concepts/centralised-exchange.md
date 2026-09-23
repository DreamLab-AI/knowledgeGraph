---
okf_version: "0.2"
type: Class
title: Centralised Exchange
resource: urn:ngm:class:centralised-exchange
domain: blockchain
description: A centralised exchange (CEX) is a custodial trading venue operated by a single company that matches buy and sell orders for cryptocurrencies and other assets through an internal order book. Users deposit funds into accounts the operator controls, and the exchange maintains the ledger of balances off-chain, settling trades internally rather than on a public blockchain. Centralised exchanges typical
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:order-book
requires:
  - urn:ngm:class:custody
  - urn:ngm:class:kyc
enables:
  - urn:ngm:class:liquidity
implements:
  - urn:ngm:class:aml
contrastsWith:
  - urn:ngm:class:decentralised-exchange
uses:
  - urn:ngm:class:identity-verification
supports:
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:binance
  - urn:ngm:class:coinbase
  - urn:ngm:class:blockchain
  - urn:ngm:class:financial-services
---

# Centralised Exchange

A centralised exchange (CEX) is a custodial trading venue operated by a single company that matches buy and sell orders for cryptocurrencies and other assets through an internal order book. Users deposit funds into accounts the operator controls, and the exchange maintains the ledger of balances off-chain, settling trades internally rather than on a public blockchain. Centralised exchanges typically enforce identity verification and provide high liquidity and fast execution, at the cost of requiring trust in the operator.
