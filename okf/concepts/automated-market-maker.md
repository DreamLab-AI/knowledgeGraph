---
okf_version: "0.2"
type: Class
title: Automated Market Maker
resource: urn:ngm:class:automated-market-maker
domain: blockchain
description: Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:de-fi-protocol
hasPart:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:lp-token
  - urn:ngm:class:constant-product-formula
requires:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:blockchain
  - urn:ngm:class:token-standard
  - urn:ngm:class:liquidity-pools
  - urn:ngm:class:pricing-algorithms
enables:
  - urn:ngm:class:permissionless-trading
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:yield-farming
  - urn:ngm:class:price-discovery
  - urn:ngm:class:token-swaps
implements:
  - urn:ngm:class:decentralized-exchange
contrastsWith:
  - urn:ngm:class:order-book-exchange
  - urn:ngm:class:centralized-exchange
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:virtual-economy
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:token-bonding-curve
  - urn:ngm:class:oracle
relatedTo:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:slippage
  - urn:ngm:class:arbitrage
  - urn:ngm:class:miner-extractable-value
---

# Automated Market Maker

Automated Market Maker (AMM) is a decentralized exchange protocol that uses algorithmic pricing mechanisms and liquidity pools instead of traditional order books, enabling permissionless token swaps where prices adjust automatically based on supply and demand within smart contract-managed reserves.
