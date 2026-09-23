---
okf_version: "0.2"
type: Class
title: Stable Swap Invariant
resource: urn:ngm:class:stable-swap-invariant
domain: blockchain
description: The stable swap invariant is an automated market maker pricing formula, introduced by Curve Finance, that blends the constant-sum and constant-product curves to provide very low slippage for trades between assets expected to hold near-equal value, such as stablecoins or pegged tokens. Near the balanced point it behaves like a constant-sum market for tight pricing, while curving toward constant-pro
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:economic-mechanism
relatedTo:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:decentralized-exchange
---

# Stable Swap Invariant

The stable swap invariant is an automated market maker pricing formula, introduced by Curve Finance, that blends the constant-sum and constant-product curves to provide very low slippage for trades between assets expected to hold near-equal value, such as stablecoins or pegged tokens. Near the balanced point it behaves like a constant-sum market for tight pricing, while curving toward constant-product behaviour as reserves diverge to preserve liquidity. It is the core mechanism enabling efficient stablecoin exchange on-chain.
