---
okf_version: "0.2"
type: Class
title: Lending Protocol
resource: urn:ngm:class:lending-protocol
domain: blockchain
description: A smart-contract system that lets users supply assets to earn interest and borrow against deposited collateral, with interest rates and liquidations governed by on-chain code rather than intermediaries.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
hasPart:
  - urn:ngm:class:liquidation-engine
  - urn:ngm:class:interest-rate-model
  - urn:ngm:class:governance
requires:
  - urn:ngm:class:collateral-management
  - urn:ngm:class:price-oracle
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:over-collateralisation
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:flash-loan
  - urn:ngm:class:leveraged-trading
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-exchange
implements:
  - urn:ngm:class:de-fi
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:traditional-banking
bridgesTo:
  - urn:ngm:class:credit-risk
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:liquidity-pool
uses:
  - urn:ngm:class:erc-20-tokens
  - urn:ngm:class:oracle-network
  - urn:ngm:class:automated-market-maker
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:token-standard
relatedTo:
  - urn:ngm:class:aave
  - urn:ngm:class:compound
  - urn:ngm:class:maker-dao
---

# Lending Protocol

A smart-contract system that lets users supply assets to earn interest and borrow against deposited collateral, with interest rates and liquidations governed by on-chain code rather than intermediaries.
