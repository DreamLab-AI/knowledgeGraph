---
okf_version: "0.2"
type: Class
title: USDT
resource: urn:ngm:class:usdt
domain: blockchain
description: A fiat-backed stablecoin pegged to the United States dollar, issued across multiple ledgers and intended to be redeemable for dollar value held in reserve.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:stablecoin
requires:
  - urn:ngm:class:usd
  - urn:ngm:class:custody-infrastructure
  - urn:ngm:class:tether
enables:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:crypto-trading
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:usdc
  - urn:ngm:class:dai
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:payment-system
  - urn:ngm:class:finance
  - urn:ngm:class:usdc
uses:
  - urn:ngm:class:ethereum
  - urn:ngm:class:tron-blockchain
  - urn:ngm:class:solana
  - urn:ngm:class:erc-20-token-standard
partOf:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:automated-market-maker
---

# USDT

A fiat-backed stablecoin pegged to the United States dollar, issued across multiple ledgers and intended to be redeemable for dollar value held in reserve.
