- ### Definition
  - The Liquid Network is a Bitcoin sidechain developed by Blockstream that provides faster settlement and confidential transactions for exchanges, traders and institutions. Bitcoin is moved onto the network by locking it on the main chain and issuing an equivalent pegged asset, Liquid Bitcoin, which can later be redeemed. The network is operated by a federation of functionaries who produce blocks and manage the peg, trading some decentralisation for performance and privacy features.

- ### Semantic Classification
  - owl-class:: blockchain:LiquidNetwork
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bitcoin Lightning Network]], [[Digital Asset Domain]]
  - requires:: [[Bitcoin]], [[Federation]]
  - enables:: [[Confidential Transactions]], [[Asset Issuance]]

- ### Content
  - Liquid uses a two-way peg in which bitcoin is locked on the main chain and a corresponding amount of Liquid Bitcoin is created on the sidechain. Blocks are produced on a fixed schedule by a federation, which gives faster and more predictable settlement than waiting for Bitcoin confirmations.
  - The network supports Confidential Transactions, which hide transaction amounts and asset types from public view while still allowing the network to verify that no value is created or destroyed. It also supports issuing other assets, such as stablecoins and security tokens, alongside Liquid Bitcoin.
  - The federated model means that the network's security and liveness depend on the honesty and availability of its functionaries, a deliberate trade-off aimed at institutional users who prioritise speed, privacy and asset issuance over the trust-minimisation of the base chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z