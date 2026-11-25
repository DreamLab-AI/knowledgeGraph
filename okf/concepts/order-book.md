---
okf_version: "0.2"
type: Class
title: Order Book
resource: urn:ngm:class:order-book
domain: finance
description: An order book is a real-time, continuously updated electronic ledger that aggregates all outstanding limit buy orders (bids) and limit sell orders (asks) for a tradeable asset, organised by price level and, within each level, by time of arrival. A matching engine processes incoming market and limit orders against the resting book using price-time priority, generating trades whenever a bid price me
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:exchange-mechanism
hasPart:
  - urn:ngm:class:matching-engine
  - urn:ngm:class:bid-ask-spread
  - urn:ngm:class:bid-side
  - urn:ngm:class:ask-side
  - urn:ngm:class:depth-of-market
requires:
  - urn:ngm:class:limit-order
  - urn:ngm:class:price-time-priority
enables:
  - urn:ngm:class:price-discovery
  - urn:ngm:class:market-making
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:trade-execution
dependsOn:
  - urn:ngm:class:clearing-and-settlement
contrastsWith:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:request-for-quote
  - urn:ngm:class:dark-pool
bridgesTo:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:on-chain-order-book
uses:
  - urn:ngm:class:market-order
  - urn:ngm:class:depth-of-market
partOf:
  - urn:ngm:class:trading-venue
  - urn:ngm:class:exchange-mechanism
relatedTo:
  - urn:ngm:class:market-microstructure
  - urn:ngm:class:algorithmic-trading
  - urn:ngm:class:high-frequency-trading
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Order Book

An order book is a real-time, continuously updated electronic ledger that aggregates all outstanding limit buy orders (bids) and limit sell orders (asks) for a tradeable asset, organised by price level and, within each level, by time of arrival. A matching engine processes incoming market and limit orders against the resting book using price-time priority, generating trades whenever a bid price meets or exceeds an ask price. The visible depth of resting orders at each price level constitutes the liquidity profile of the market, and the gap between the best bid and best ask defines the bid-ask spread. Order books underpin both centralised exchanges and, increasingly, on-chain decentralised venues constrained by ledger throughput and gas costs.
