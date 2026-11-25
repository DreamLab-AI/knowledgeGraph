---
okf_version: "0.2"
type: Class
title: Trade Execution
resource: urn:ngm:class:trade-execution
domain: finance
description: "Trade execution is the process of converting an investment decision into a completed transaction in a market, encompassing how, when, and where an order is routed and filled. It seeks the best achievable outcome for the trader by managing factors such as price, speed, market impact, and slippage against the order book. Execution quality is a core determinant of realised returns and is governed by "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:market-microstructure
requires:
  - urn:ngm:class:latency
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:settlement
dependsOn:
  - urn:ngm:class:liquidity
contrastsWith:
  - urn:ngm:class:high-frequency-trading
bridgesTo:
  - urn:ngm:class:regulatory-compliance
uses:
  - urn:ngm:class:order-book
  - urn:ngm:class:market-maker
supports:
  - urn:ngm:class:clearing
relatedTo:
  - urn:ngm:class:slippage
  - urn:ngm:class:payment-system
  - urn:ngm:class:finance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Trade Execution

Trade execution is the process of converting an investment decision into a completed transaction in a market, encompassing how, when, and where an order is routed and filled. It seeks the best achievable outcome for the trader by managing factors such as price, speed, market impact, and slippage against the order book. Execution quality is a core determinant of realised returns and is governed by best-execution obligations in many jurisdictions.
