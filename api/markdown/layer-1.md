- ### Definition
  - The base settlement layer of a blockchain network where consensus and final transaction ordering occur, as distinct from protocols built on top of it.

- ### Semantic Classification
  - owl-class:: blockchain:Layer1
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Distributed Ledger]]
  - requires:: [[Consensus Protocol]]
  - enables:: [[Layer 2 Networks]]

- ### Content
  - A Layer 1 is the underlying chain that maintains its own state, runs a consensus mechanism, and provides finality for the transactions it records. Bitcoin and Ethereum are common examples of Layer 1 networks.
  - Layer 1 security and data availability act as the trust anchor for protocols built above them. Scaling at this layer is constrained by the need for many nodes to validate every transaction, which motivates the use of Layer 2 networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z