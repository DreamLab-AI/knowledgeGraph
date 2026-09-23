---
okf_version: "0.2"
type: Class
title: USDC
resource: urn:ngm:class:usdc
domain: blockchain
description: A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:stablecoin
hasPart:
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:redemption-mechanism
requires:
  - urn:ngm:class:usd
  - urn:ngm:class:custody-infrastructure
  - urn:ngm:class:reserve-attestation
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:on-chain-settlement
  - urn:ngm:class:collateral-management
  - urn:ngm:class:cross-border-payments
dependsOn:
  - urn:ngm:class:payment-system
  - urn:ngm:class:regulatory-compliance
implements:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:cross-chain-bridge
contrastsWith:
  - urn:ngm:class:usdt
  - urn:ngm:class:dai
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:programmable-money
  - urn:ngm:class:usdt
  - urn:ngm:class:payment-system
uses:
  - urn:ngm:class:ethereum
  - urn:ngm:class:solana
  - urn:ngm:class:proof-of-reserves
standardizedBy:
  - urn:ngm:class:centre-consortium
partOf:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:defi-infrastructure
relatedTo:
  - urn:ngm:class:money-market-fund
  - urn:ngm:class:circle
---

# USDC

A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.
