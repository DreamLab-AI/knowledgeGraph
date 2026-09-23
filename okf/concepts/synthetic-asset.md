---
okf_version: "0.2"
type: Class
title: Synthetic Asset
resource: urn:ngm:class:synthetic-asset
domain: blockchain
description: "A Synthetic Asset is a tokenised financial instrument on a blockchain whose value tracks an underlying reference asset, such as a fiat currency, commodity, equity, or index, without requiring direct ownership or custody of that asset. Synthetic assets derive their price through collateralisation and price oracles rather than through a one-to-one backing of the underlying, distinguishing them from "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-token
hasPart:
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:mint-burn-mechanism
requires:
  - urn:ngm:class:liquidity-pool
enables:
  - urn:ngm:class:derivatives-trading
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:decentralized-exchange
dependsOn:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:oracle
implements:
  - urn:ngm:class:de-fi-protocol
contrastsWith:
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:stablecoin
bridgesTo:
  - urn:ngm:class:finance
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:liquidity-pool
supports:
  - urn:ngm:class:hedging
  - urn:ngm:class:risk-management
relatedTo:
  - urn:ngm:class:synthetix
  - urn:ngm:class:algorithmic-stablecoin
---

# Synthetic Asset

A Synthetic Asset is a tokenised financial instrument on a blockchain whose value tracks an underlying reference asset, such as a fiat currency, commodity, equity, or index, without requiring direct ownership or custody of that asset. Synthetic assets derive their price through collateralisation and price oracles rather than through a one-to-one backing of the underlying, distinguishing them from wrapped tokens. Protocols such as Synthetix mint synthetic exposures (synths) backed by over-collateralised pools, allowing on-chain trading of real-world price feeds. They enable permissionless access to traditional markets but carry oracle, liquidation, and collateral-risk dependencies.
