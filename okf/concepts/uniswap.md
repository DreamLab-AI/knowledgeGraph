---
okf_version: "0.2"
type: Class
title: Uniswap
resource: urn:ngm:class:uniswap
domain: blockchain
description: Uniswap is a decentralised exchange (DEX) protocol deployed on Ethereum and EVM-compatible blockchains that enables permissionless, non-custodial token swaps through an Automated Market Maker (AMM) mechanism. Rather than maintaining an order book, it uses liquidity pools governed by the constant-product invariant (x × y = k), where liquidity providers deposit token pairs and earn fees proportional
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-defi-and-economics
hasPart:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:governance-token
  - urn:ngm:class:router-contract
  - urn:ngm:class:governance-token
  - urn:ngm:class:factory-contract
requires:
  - urn:ngm:class:ethereum
  - urn:ngm:class:liquidity-provider
  - urn:ngm:class:web3-wallet
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:yield-farming
  - urn:ngm:class:token-swapping
  - urn:ngm:class:token-swapping
  - urn:ngm:class:permissionless-token-listing
dependsOn:
  - urn:ngm:class:token-economics
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:price-oracle
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:order-book-exchange
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:layer-2-scaling
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:erc-20-token-standard
relatedTo:
  - urn:ngm:class:curve-finance
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:flash-loan
  - urn:ngm:class:mev
  - urn:ngm:class:sushiswap
  - urn:ngm:class:mev
---

# Uniswap

Uniswap is a decentralised exchange (DEX) protocol deployed on Ethereum and EVM-compatible blockchains that enables permissionless, non-custodial token swaps through an Automated Market Maker (AMM) mechanism. Rather than maintaining an order book, it uses liquidity pools governed by the constant-product invariant (x × y = k), where liquidity providers deposit token pairs and earn fees proportional to their pool share. Successive protocol versions have introduced concentrated liquidity (v3), multiple fee tiers, multi-hop routing, and hook-based extensibility (v4), making Uniswap a foundational primitive of decentralised finance. Governance is managed by holders of the UNI governance token through on-chain voting.
