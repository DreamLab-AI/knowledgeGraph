---
okf_version: "0.2"
type: Class
title: Tether
resource: urn:ngm:class:tether
domain: finance
description: Tether is the issuer of USDT, the largest fiat-collateralised stablecoin by circulating supply, designed to maintain a value pegged to the United States dollar. Tokens are issued on numerous blockchains and are intended to be redeemable one-to-one for dollars, backed by reserves held by the issuer. Tether is widely used for trading, settlement and as a dollar proxy on exchanges, and its reserve co
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:digital-asset-domain
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:fiat-currency
  - urn:ngm:class:custodian
  - urn:ngm:class:reserve-backing
enables:
  - urn:ngm:class:crypto-trading
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:stablecoin
dependsOn:
  - urn:ngm:class:dollar-peg
  - urn:ngm:class:liquidity-provision
contrastsWith:
  - urn:ngm:class:central-bank-digital-currency
  - urn:ngm:class:algorithmic-stablecoin
  - urn:ngm:class:usd-coin
bridgesTo:
  - urn:ngm:class:infra-legal-and-regulatory
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:systemic-risk
  - urn:ngm:class:decentralised-finance-domain
  - urn:ngm:class:regulatory-domain
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
  - urn:ngm:class:tron-blockchain
  - urn:ngm:class:proof-of-reserves
supports:
  - urn:ngm:class:cryptocurrency-exchange
  - urn:ngm:class:liquidity
partOf:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:decentralised-finance
relatedTo:
  - urn:ngm:class:money-market-fund
  - urn:ngm:class:stablecoin-regulation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tether

Tether is the issuer of USDT, the largest fiat-collateralised stablecoin by circulating supply, designed to maintain a value pegged to the United States dollar. Tokens are issued on numerous blockchains and are intended to be redeemable one-to-one for dollars, backed by reserves held by the issuer. Tether is widely used for trading, settlement and as a dollar proxy on exchanges, and its reserve composition and transparency have been subjects of regulatory scrutiny.
