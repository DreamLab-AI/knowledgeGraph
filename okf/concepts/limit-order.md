---
okf_version: "0.2"
type: Class
title: Limit Order
resource: urn:ngm:class:limit-order
domain: finance
description: "A limit order is an instruction to buy or sell an asset at a specified price or better, remaining unfilled until the market reaches that price rather than executing immediately at the prevailing market price. It rests in the order book alongside other resting orders, contributing to displayed liquidity and price discovery until it is filled, cancelled or expires. Market makers use limit orders on "
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:order-book
enables:
  - urn:ngm:class:market-making
partOf:
  - urn:ngm:class:order-book
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Limit Order

A limit order is an instruction to buy or sell an asset at a specified price or better, remaining unfilled until the market reaches that price rather than executing immediately at the prevailing market price. It rests in the order book alongside other resting orders, contributing to displayed liquidity and price discovery until it is filled, cancelled or expires. Market makers use limit orders on both sides of the book to earn the bid-ask spread while managing inventory risk.
