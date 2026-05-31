- ### Definition
  - GMX is a decentralised spot and perpetual-futures exchange deployed on the Arbitrum and Avalanche networks. It allows traders to take leveraged positions against a shared multi-asset liquidity pool rather than a traditional order book, with prices supplied by external oracles. Liquidity providers deposit assets into the pool and earn a share of trading fees while acting as the counterparty to traders.

- ### Semantic Classification
  - owl-class:: defi:GMX
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[dYdX]], [[Automated Market Maker]]
  - requires:: [[Oracle]], [[Arbitrum]], [[Liquidity Pool]]
  - enables:: [[Perpetual Futures]], [[Leveraged Trading]]

- ### Content
  - GMX uses a pooled liquidity model in which a basket of assets backs all open positions. Traders open long or short positions with leverage, and profits or losses are settled against this pool. Because execution prices come from oracle feeds rather than matched orders, the design avoids the price impact of thin order books for supported assets.
  - Liquidity providers receive a token representing their share of the pool and earn fees from swaps, leverage trading and liquidations, while bearing the aggregate profit and loss of traders. This couples provider returns to the net performance of the trading population, which differs from order-book venues where market makers manage individual quotes.
  - The protocol has been a prominent example of on-chain perpetuals on layer-two networks, where lower fees make active trading viable. Subsequent versions introduced isolated liquidity pools and broader asset support to manage risk concentration and to widen the range of tradable markets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z