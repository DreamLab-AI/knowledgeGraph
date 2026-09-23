---
okf_version: "0.2"
type: Class
title: Wrapped Token
resource: urn:ngm:class:wrapped-token
domain: blockchain
description: A Wrapped Token is a digital asset on one blockchain that represents, at a 1:1 peg, an asset from a different blockchain or currency system, created by locking the original asset in a custody mechanism (custodian, bridge smart contract, or MPC wallet) and minting an equivalent representation on the target chain. Wrapped tokens enable cross-chain liquidity by making assets from non-smart-contract b
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptocurrency-token
requires:
  - urn:ngm:class:custodian
  - urn:ngm:class:mint-burn-mechanism
enables:
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:yield-farming
  - urn:ngm:class:liquidity-pool
dependsOn:
  - urn:ngm:class:oracle
  - urn:ngm:class:proof-of-reserve
contrastsWith:
  - urn:ngm:class:synthetic-asset
  - urn:ngm:class:native-token
  - urn:ngm:class:algorithmic-stablecoin
bridgesTo:
  - urn:ngm:class:automated-market-maker
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:threshold-signature-scheme
relatedTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:peg-mechanism
  - urn:ngm:class:liquid-staking-token
---

# Wrapped Token

A Wrapped Token is a digital asset on one blockchain that represents, at a 1:1 peg, an asset from a different blockchain or currency system, created by locking the original asset in a custody mechanism (custodian, bridge smart contract, or MPC wallet) and minting an equivalent representation on the target chain. Wrapped tokens enable cross-chain liquidity by making assets from non-smart-contract blockchains (such as Bitcoin) or from other chains available within DeFi ecosystems. WBTC (Wrapped Bitcoin on Ethereum, ERC-20) is the canonical example, allowing Bitcoin to participate in Ethereum-based lending, trading, and yield protocols. Wrapped tokens introduce custodial or bridge risk as the peg relies on the integrity of the locking and minting mechanism.
