- ### Definition
  - A protocol on Ethereum that issues synthetic assets tracking the price of external references, backed by a pooled collateral of its native token and other staked assets.

- ### Semantic Classification
  - owl-class:: blockchain:Synthetix
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Decentralised Exchange]]
  - requires:: [[Collateral Management]], [[Price Oracle]]
  - enables:: [[Liquidity Provision]]

- ### Content
  - Synthetix mints synthetic assets, commonly called synths, that mirror the price of an underlying reference such as a fiat currency, commodity, or index. Stakers lock collateral to back a shared debt pool, and price feeds from oracles determine the value of each synth at the point of trade.
  - Trades between synths execute against the pooled debt rather than against a counterparty order, so there is no order book and liquidity is constrained by collateralisation rather than by matching. Stakers earn fees from this activity but carry exposure to the aggregate debt pool, whose value shifts as the prices of the issued synths change.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z