- ### Definition
  - A continuously updated record of outstanding buy and sell orders for an asset, organised by price level, against which incoming orders are matched.

- ### Semantic Classification
  - owl-class:: blockchain:OrderBook
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Exchange Mechanism]]
  - bridges-to:: [[Decentralised Exchange]]
  - enables:: [[Price Discovery]], [[Market Making]]

- ### Content
  - An order book lists the limit orders that participants have placed but not yet executed, sorted into bids on one side and asks on the other. The highest bid and lowest ask define the spread, and the depth of resting orders at each level indicates available liquidity.
  - A matching engine pairs incoming orders against the book according to price and time priority. This model supports fine-grained control over execution price and is standard on centralised venues; on-chain implementations are constrained by ledger throughput and the cost of posting and cancelling orders.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z