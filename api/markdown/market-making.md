- ### Definition
  - The practice of quoting both buy and sell prices for an asset to supply liquidity and earn the spread between them.

- ### Semantic Classification
  - owl-class:: blockchain:MarketMaking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Liquidity Provision]]
  - bridges-to:: [[Order Book]], [[Automated Market Maker]]
  - enables:: [[Price Discovery]]

- ### Content
  - Market making involves continuously posting bids and offers so that other participants can trade without waiting for a matching counterparty. The market maker profits from the spread between its buy and sell quotes while bearing inventory risk as prices move.
  - On order book venues this is done by placing and revising limit orders. In automated market maker designs the role is performed algorithmically by liquidity providers who deposit assets into a pool, with the pricing curve setting quotes and fees compensating for the risk of holding the pooled inventory.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z