---
okf_version: "0.2"
type: Class
title: Liquidation Mechanism
resource: urn:ngm:class:liquidation-mechanism
domain: blockchain
description: A liquidation mechanism is the automated process by which a decentralised finance protocol seizes and sells a borrower's collateral once the value of that collateral falls below a defined threshold relative to the outstanding debt. It protects lenders and the protocol from undercollateralised positions by ensuring debt is repaid before collateral becomes insufficient. Liquidations are typically tr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:de-fi
requires:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:over-collateralisation
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:lending-protocol
  - urn:ngm:class:risk-management
dependsOn:
  - urn:ngm:class:price-oracle
implements:
  - urn:ngm:class:risk-management
contrastsWith:
  - urn:ngm:class:over-collateralisation
uses:
  - urn:ngm:class:oracle
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:liquidity
partOf:
  - urn:ngm:class:lending-protocol
relatedTo:
  - urn:ngm:class:aave
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:interest-rate
---

# Liquidation Mechanism

A liquidation mechanism is the automated process by which a decentralised finance protocol seizes and sells a borrower's collateral once the value of that collateral falls below a defined threshold relative to the outstanding debt. It protects lenders and the protocol from undercollateralised positions by ensuring debt is repaid before collateral becomes insufficient. Liquidations are typically triggered by oracle price updates and executed by liquidators who are incentivised with a discount or bonus on the seized assets.
