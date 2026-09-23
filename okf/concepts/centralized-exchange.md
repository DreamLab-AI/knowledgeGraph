---
okf_version: "0.2"
type: Class
title: Centralized Exchange
resource: urn:ngm:class:centralized-exchange
domain: blockchain
description: "A centralized exchange (CEX) is a digital-asset trading venue operated by a single company that custodies user funds, matches orders through an internal order book, and acts as an intermediary for every trade. Users deposit assets into accounts controlled by the operator, who maintains liquidity, settlement, and the matching engine off-chain. CEXs offer high throughput and familiar interfaces but "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-defi-and-economics
requires:
  - urn:ngm:class:order-book
  - urn:ngm:class:custody
  - urn:ngm:class:kyc
  - urn:ngm:class:liquidity
dependsOn:
  - urn:ngm:class:custody
contrastsWith:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:self-custody
bridgesTo:
  - urn:ngm:class:order-book
uses:
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:aml
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:binance
  - urn:ngm:class:coinbase
  - urn:ngm:class:de-fi
---

# Centralized Exchange

A centralized exchange (CEX) is a digital-asset trading venue operated by a single company that custodies user funds, matches orders through an internal order book, and acts as an intermediary for every trade. Users deposit assets into accounts controlled by the operator, who maintains liquidity, settlement, and the matching engine off-chain. CEXs offer high throughput and familiar interfaces but require trust in the operator and typically enforce identity-verification and anti-money-laundering controls.
