---
okf_version: "0.2"
type: Class
title: Balancer
resource: urn:ngm:class:balancer
domain: blockchain
description: Balancer is a decentralised automated market maker (AMM) protocol on Ethereum and compatible EVM chains that generalises the constant-product AMM model to support weighted multi-asset pools, where pool weights can be set arbitrarily (e.g., 80/20 or 60/20/20 distributions) rather than the 50/50 split of Uniswap. It functions simultaneously as a self-rebalancing portfolio manager, a liquidity provid
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:automated-market-maker
requires:
  - urn:ngm:class:arbitrage
  - urn:ngm:class:liquidity-provider
enables:
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:asset-liquidity
  - urn:ngm:class:decentralized-exchange
contrastsWith:
  - urn:ngm:class:constant-product-amm
  - urn:ngm:class:order-book-exchange
bridgesTo:
  - urn:ngm:class:finance
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:evm
  - urn:ngm:class:smart-contract
  - urn:ngm:class:stable-swap-invariant
  - urn:ngm:class:vote-escrow-model
relatedTo:
  - urn:ngm:class:governance-token
  - urn:ngm:class:lp-token
  - urn:ngm:class:concentrated-liquidity
  - urn:ngm:class:curve-finance
  - urn:ngm:class:uniswap
  - urn:ngm:class:liquid-staking-token
---

# Balancer

Balancer is a decentralised automated market maker (AMM) protocol on Ethereum and compatible EVM chains that generalises the constant-product AMM model to support weighted multi-asset pools, where pool weights can be set arbitrarily (e.g., 80/20 or 60/20/20 distributions) rather than the 50/50 split of Uniswap. It functions simultaneously as a self-rebalancing portfolio manager, a liquidity provider, and a price sensor.
