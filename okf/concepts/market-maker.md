---
okf_version: "0.2"
type: Class
title: Market Maker
resource: urn:ngm:class:market-maker
domain: finance
description: A market maker is a firm or agent that stands ready to both buy and sell an asset continuously, quoting bid and ask prices and earning the spread between them. By absorbing temporary imbalances between buyers and sellers, market makers supply liquidity, tighten spreads, reduce slippage and accelerate price discovery on exchanges. In decentralised finance the role is generalised by automated market
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:liquidity-provider
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:price-discovery
  - urn:ngm:class:trade-execution
contrastsWith:
  - urn:ngm:class:automated-market-maker
uses:
  - urn:ngm:class:order-book
relatedTo:
  - urn:ngm:class:bid-ask-spread
  - urn:ngm:class:slippage
  - urn:ngm:class:market-making
  - urn:ngm:class:capital-efficiency
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Market Maker

A market maker is a firm or agent that stands ready to both buy and sell an asset continuously, quoting bid and ask prices and earning the spread between them. By absorbing temporary imbalances between buyers and sellers, market makers supply liquidity, tighten spreads, reduce slippage and accelerate price discovery on exchanges. In decentralised finance the role is generalised by automated market makers, which replace quoted order books with algorithmic pricing curves funded by pooled liquidity.
