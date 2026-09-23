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
---

# Limit Order

A limit order is an instruction to buy or sell an asset at a specified price or better, remaining unfilled until the market reaches that price rather than executing immediately at the prevailing market price. It rests in the order book alongside other resting orders, contributing to displayed liquidity and price discovery until it is filled, cancelled or expires. Market makers use limit orders on both sides of the book to earn the bid-ask spread while managing inventory risk.
