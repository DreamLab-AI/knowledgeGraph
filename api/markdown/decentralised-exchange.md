- ### Definition
  - A trading venue that allows users to swap digital assets directly through smart contracts, without a central operator holding custody of funds or matching orders off-chain.

- ### Semantic Classification
  - owl-class:: blockchain:DecentralisedExchange
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Exchange Mechanism]]
  - bridges-to:: [[Automated Market Maker]], [[Order Book]]
  - requires:: [[Smart Contract]], [[Liquidity Pool]]
  - enables:: [[Permissionless Trading]]

- ### Content
  - A decentralised exchange settles trades on-chain through smart contracts rather than through a custodial intermediary. Two main designs exist: automated market makers, which price assets against pooled liquidity using a deterministic curve, and on-chain order books, which match discrete bids and offers. In both cases users retain control of their assets in their own wallets until the moment of settlement.
  - Because the matching and settlement logic is encoded in public contracts, anyone may interact with the venue without registration or approval. This removes single points of custodial failure but exposes traders to on-chain risks such as price slippage, front-running of pending transactions, and bugs in the contract code. Liquidity is supplied by participants who deposit assets in return for a share of trading fees.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z