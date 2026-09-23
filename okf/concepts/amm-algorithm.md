---
okf_version: "0.2"
type: Class
title: AMM Algorithm
resource: urn:ngm:class:amm-algorithm
domain: blockchain
description: An AMM Algorithm is the pricing rule of an Automated Market Maker that algorithmically sets exchange rates from the reserves held in a liquidity pool, removing the need for a traditional order book. The canonical form is the constant-product invariant x*y=k, with variants such as constant-sum, stableswap, and concentrated-liquidity curves tuned for different asset pairs. It determines slippage, pr
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
relatedTo:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:impermanent-loss
---

# AMM Algorithm

An AMM Algorithm is the pricing rule of an Automated Market Maker that algorithmically sets exchange rates from the reserves held in a liquidity pool, removing the need for a traditional order book. The canonical form is the constant-product invariant x*y=k, with variants such as constant-sum, stableswap, and concentrated-liquidity curves tuned for different asset pairs. It determines slippage, price impact, and the impermanent loss that liquidity providers bear.
