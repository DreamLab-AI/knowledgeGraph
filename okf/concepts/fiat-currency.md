---
okf_version: "0.2"
type: Class
title: Fiat Currency
resource: urn:ngm:class:fiat-currency
domain: finance
description: "Fiat currency is money issued and declared legal tender by a sovereign government or central bank, whose value derives from state authority, institutional trust, and collective public acceptance rather than from any intrinsic commodity backing. Unlike commodity money, fiat currency is not convertible into a fixed quantity of gold, silver, or other physical assets at a legally guaranteed rate. Its "
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:money
hasPart:
  - urn:ngm:class:banknote
  - urn:ngm:class:reserve-currency
requires:
  - urn:ngm:class:central-bank
  - urn:ngm:class:legal-tender
  - urn:ngm:class:monetary-policy
  - urn:ngm:class:government-authority
enables:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:fractional-reserve-banking
  - urn:ngm:class:international-trade
dependsOn:
  - urn:ngm:class:government-authority
  - urn:ngm:class:institutional-trust
contrastsWith:
  - urn:ngm:class:commodity-money
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:gold-standard
bridgesTo:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
uses:
  - urn:ngm:class:swift
  - urn:ngm:class:real-time-gross-settlement
partOf:
  - urn:ngm:class:monetary-system
relatedTo:
  - urn:ngm:class:inflation
  - urn:ngm:class:exchange-rate
  - urn:ngm:class:foreign-exchange-market
  - urn:ngm:class:usd
  - urn:ngm:class:reserve-currency
---

# Fiat Currency

Fiat currency is money issued and declared legal tender by a sovereign government or central bank, whose value derives from state authority, institutional trust, and collective public acceptance rather than from any intrinsic commodity backing. Unlike commodity money, fiat currency is not convertible into a fixed quantity of gold, silver, or other physical assets at a legally guaranteed rate. Its purchasing power is maintained through monetary policy instruments — interest rates, reserve requirements, open-market operations — and is subject to inflation, deflation, and exchange-rate dynamics driven by macroeconomic conditions. Fiat currency forms the foundational settlement layer for modern banking systems, international trade, and the reserve benchmarks against which digital assets are priced.
