---
okf_version: "0.2"
type: Class
title: Stablecoin Token
resource: urn:ngm:class:stablecoin-token
domain: blockchain
description: "A Stablecoin Token is a blockchain-native fungible token engineered to maintain a stable value, typically pegged to a fiat currency, commodity, or basket of assets, through one of three principal mechanisms: fiat-collateralised reserves held by a custodian (e.g. USDC, USDT), crypto-collateralised over-collateralisation enforced by smart contracts (e.g. DAI), or algorithmic supply adjustment that m"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:fungible-token
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:transaction
  - urn:ngm:class:interoperability
contrastsWith:
  - urn:ngm:class:inflationary-token
  - urn:ngm:class:deflationary-token
uses:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:price-oracle
relatedTo:
  - urn:ngm:class:token-economics
  - urn:ngm:class:digital-currency
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:erc20-token
---

# Stablecoin Token

A Stablecoin Token is a blockchain-native fungible token engineered to maintain a stable value, typically pegged to a fiat currency, commodity, or basket of assets, through one of three principal mechanisms: fiat-collateralised reserves held by a custodian (e.g. USDC, USDT), crypto-collateralised over-collateralisation enforced by smart contracts (e.g. DAI), or algorithmic supply adjustment that mints and burns tokens to defend the peg without direct collateral. Stablecoins serve as the primary medium of exchange, unit of account, and store of value within decentralised finance ecosystems, enabling lending, borrowing, and trading without exposure to cryptocurrency price volatility.
