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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# AMM Algorithm

An AMM Algorithm is the pricing rule of an Automated Market Maker that algorithmically sets exchange rates from the reserves held in a liquidity pool, removing the need for a traditional order book. The canonical form is the constant-product invariant x*y=k, with variants such as constant-sum, stableswap, and concentrated-liquidity curves tuned for different asset pairs. It determines slippage, price impact, and the impermanent loss that liquidity providers bear.
