- ### Definition
  - Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.

- ### Semantic Classification
  - owl-class:: blockchain:transactionfees
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Transaction]]
  - bridges-to:: [[Bitcoin Mining]]
  - requires:: [[Bitcoin Network]]
  - enables:: [[Transaction Validation]]

- ### Content
  - Transaction fees are set by users and represent the difference between a transaction's inputs and outputs, which the block producer collects. When demand for block space is high, users raise fees to have their transactions confirmed sooner.
  - Fees provide an incentive for miners and validators in addition to block rewards, and they are expected to become a larger share of mining revenue as block subsidies decline over time. Fee estimation tools help users choose appropriate amounts.

- ### Provenance
  - sources:: [[https://developer.bitcoin.org/devguide/transactions.html]], [[https://en.bitcoin.it/wiki/Transaction_fees]]
  - migration-date:: 2026-05-29T00:00:00Z