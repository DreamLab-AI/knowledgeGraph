- ### Definition
  - dYdX is a decentralised exchange focused on perpetual-futures trading, allowing users to take leveraged long and short positions on cryptocurrencies. Earlier versions operated on Ethereum using a layer-two scaling solution with an off-chain order book and on-chain settlement, while a later version migrated to a purpose-built application-specific blockchain in the Cosmos ecosystem. It combines the order-book trading experience of centralised venues with non-custodial settlement.

- ### Semantic Classification
  - owl-class:: defi:DYdX
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[GMX]], [[Cosmos]]
  - requires:: [[Order Book]], [[Smart Contract]]
  - enables:: [[Perpetual Futures]], [[Leveraged Trading]]

- ### Content
  - dYdX provides perpetual futures, contracts without an expiry date that track an underlying asset's price and use a funding-rate mechanism to keep the contract price aligned with the spot market. Traders post margin and can open positions larger than their collateral, with the protocol managing liquidations when positions become undercollateralised.
  - To deliver a responsive trading experience, the protocol historically matched orders off-chain while settling balances on-chain, using a zero-knowledge rollup to reduce costs and confirmation times. The later standalone chain moved order matching into a decentralised validator set, aiming to remove reliance on a centralised operator for the order book.
  - Within DeFi derivatives, dYdX is notable for favouring a central-limit order book over the pooled liquidity used by protocols such as GMX. This design appeals to active traders accustomed to order-book mechanics while retaining self-custody of funds.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z