---
okf_version: "0.2"
type: Class
title: Stable Coins
resource: urn:ngm:class:stable-coins
domain: blockchain
description: "Stable Coins (stablecoins) are blockchain-native digital tokens engineered to maintain stable value relative to an external reference asset — most commonly the US dollar at 1:1 parity — through one of four primary stabilisation mechanisms: (i) fiat-collateralised custody, where off-chain reserves..."
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:digital-asset
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:payments-infrastructure
  - urn:ngm:class:tokenized-asset
  - urn:ngm:class:financial-instruments
hasPart:
  - urn:ngm:class:liquidation-engine
  - urn:ngm:class:mint-burn-mechanism
  - urn:ngm:class:oracle-network
  - urn:ngm:class:reserve-asset
  - urn:ngm:class:governance-token
  - urn:ngm:class:reserve-assets
  - urn:ngm:class:smart-contract-vault
  - urn:ngm:class:attestation-report
requires:
  - urn:ngm:class:custodian
  - urn:ngm:class:price-oracle
  - urn:ngm:class:regulatory-licence
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:reserve-audit
  - urn:ngm:class:smart-contract-infrastructure
enables:
  - urn:ngm:class:treasury-management
  - urn:ngm:class:cross-border-remittances
  - urn:ngm:class:de-fi
  - urn:ngm:class:on-chain-settlement
  - urn:ngm:class:payments-infrastructure
  - urn:ngm:class:yield-generation
  - urn:ngm:class:treasury-management
dependsOn:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:custodian
  - urn:ngm:class:central-bank-policy
  - urn:ngm:class:interest-rate-environment
  - urn:ngm:class:price-oracle
  - urn:ngm:class:smart-contract-infrastructure
implements:
  - urn:ngm:class:over-collateralisation
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:dollar-peg-mechanism
  - urn:ngm:class:fractional-reserve-model
  - urn:ngm:class:algorithmic-stabilisation
  - urn:ngm:class:over-collateralisation
contrastsWith:
  - urn:ngm:class:cbdcs
  - urn:ngm:class:bitcoin-proof-of-work-protocol-as-money
  - urn:ngm:class:traditional-bank-deposits
  - urn:ngm:class:money
  - urn:ngm:class:commercial-bank-money
bridgesTo:
  - urn:ngm:class:financial-instruments
uses:
  - urn:ngm:class:avalanche
  - urn:ngm:class:base
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:solana
  - urn:ngm:class:tron-network
  - urn:ngm:class:base
  - urn:ngm:class:multi-party-computation-custody
supports:
  - urn:ngm:class:cross-border-remittances
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:trade-finance
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:metaverse-payments
  - urn:ngm:class:emerging-market-finance
standardizedBy:
  - urn:ngm:class:basel-iii
  - urn:ngm:class:stablecoin-regulation
  - urn:ngm:class:genius-act
  - urn:ngm:class:bc-0482-eu-mica-regulation
  - urn:ngm:class:genius-act
  - urn:ngm:class:stablecoin-regulation
  - urn:ngm:class:fasb-asc-350-60
  - urn:ngm:class:basel-iii
relatedTo:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:btc-layer-3
  - urn:ngm:class:cashu
  - urn:ngm:class:eurodollar
---

# Stable Coins

Stable Coins (stablecoins) are blockchain-native digital tokens engineered to maintain stable value relative to an external reference asset — most commonly the US dollar at 1:1 parity — through one of four primary stabilisation mechanisms: (i) fiat-collateralised custody, where off-chain reserves...
