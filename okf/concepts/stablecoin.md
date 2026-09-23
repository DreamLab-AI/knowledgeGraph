---
okf_version: "0.2"
type: Class
title: Stablecoin
resource: urn:ngm:class:stablecoin
domain: blockchain
description: A cryptocurrency whose value is algorithmically or institutionally pegged to a reserve asset to maintain price stability, enabling reliable medium of exchange and store of value in virtual economies.
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:crypto-token
requires:
  - urn:ngm:class:collateral-management
  - urn:ngm:class:price-oracle
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:reserve-asset
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:collateral-management
enables:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:price-stability
  - urn:ngm:class:value-transfer
  - urn:ngm:class:virtual-commerce
  - urn:ngm:class:de-fi
  - urn:ngm:class:remittances
  - urn:ngm:class:cross-border-transactions
dependsOn:
  - urn:ngm:class:ledger
  - urn:ngm:class:monetary-policy
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:reserve-asset
  - urn:ngm:class:stabilization-algorithm
implements:
  - urn:ngm:class:fiat-backed-token
contrastsWith:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:payment-system
  - urn:ngm:class:foreign-exchange-market
uses:
  - urn:ngm:class:proof-of-reserve
  - urn:ngm:class:over-collateralisation
supports:
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:liquidity-provision
standardizedBy:
  - urn:ngm:class:iso-24165
  - urn:ngm:class:regulatory-framework
partOf:
  - urn:ngm:class:crypto-token
  - urn:ngm:class:digital-asset
  - urn:ngm:class:virtual-currency
relatedTo:
  - urn:ngm:class:tokenized-asset
  - urn:ngm:class:automated-market-maker
---

# Stablecoin

A cryptocurrency whose value is algorithmically or institutionally pegged to a reserve asset to maintain price stability, enabling reliable medium of exchange and store of value in virtual economies.
