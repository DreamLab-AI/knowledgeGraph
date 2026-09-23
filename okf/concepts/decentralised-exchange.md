---
okf_version: "0.2"
type: Class
title: Decentralised Exchange
resource: urn:ngm:class:decentralised-exchange
domain: blockchain
description: A trading venue that allows users to swap digital assets directly through smart contracts, without a central operator holding custody of funds or matching orders off-chain.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:exchange-mechanism
hasPart:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:order-book
  - urn:ngm:class:liquidity-pool
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptocurrency-wallet
  - urn:ngm:class:gas-fee
enables:
  - urn:ngm:class:permissionless-trading
  - urn:ngm:class:self-custody
  - urn:ngm:class:token-swapping
  - urn:ngm:class:yield-farming
implements:
  - urn:ngm:class:de-fi
contrastsWith:
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:financial-market
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:order-book
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:oracle
relatedTo:
  - urn:ngm:class:miner-extractable-value
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:slippage
  - urn:ngm:class:governance-token
---

# Decentralised Exchange

A trading venue that allows users to swap digital assets directly through smart contracts, without a central operator holding custody of funds or matching orders off-chain.
