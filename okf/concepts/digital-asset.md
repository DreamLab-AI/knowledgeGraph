---
okf_version: "0.2"
type: Class
title: Digital Asset
resource: urn:ngm:class:digital-asset
domain: blockchain
description: A digital asset is any electronically stored item of value that carries ownership rights and can be transferred, traded, or programmatically controlled — encompassing cryptocurrencies, tokenised securities, non-fungible tokens, stablecoins, and programmable financial instruments. Digital assets achieve verifiable scarcity and ownership through cryptographic proofs, with blockchain-based variants r
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
hasPart:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:nft
  - urn:ngm:class:stablecoin
  - urn:ngm:class:security-token
  - urn:ngm:class:utility-token
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:digital-wallet
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:programmable-money
  - urn:ngm:class:decentralised-exchange
dependsOn:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:oracle
contrastsWith:
  - urn:ngm:class:physical-asset
  - urn:ngm:class:fiat-currency
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:metaverse-economy
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:token-standard
standardizedBy:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
relatedTo:
  - urn:ngm:class:digital-asset-management
  - urn:ngm:class:custody
  - urn:ngm:class:tokenomics
---

# Digital Asset

A digital asset is any electronically stored item of value that carries ownership rights and can be transferred, traded, or programmatically controlled — encompassing cryptocurrencies, tokenised securities, non-fungible tokens, stablecoins, and programmable financial instruments. Digital assets achieve verifiable scarcity and ownership through cryptographic proofs, with blockchain-based variants recorded immutably on distributed ledgers and governed by smart contracts. The class spans both on-chain native assets (e.g., BTC, ETH) and real-world asset tokenisations (RWAs), where legal property rights are encoded into blockchain representations enabling fractional ownership, automated compliance, and atomic settlement. Regulatory frameworks globally now classify digital assets across securities, commodities, payment instruments, and utility categories, shaping issuance, custody, and trading obligations.
