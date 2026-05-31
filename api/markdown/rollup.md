- ### Definition
  - A Rollup is a blockchain scaling technique that executes transactions off a base layer such as Ethereum while posting compressed transaction data and state commitments back to it for settlement and data availability. By batching many transactions and proving or asserting their validity on the main chain, rollups increase throughput and reduce fees while inheriting much of the base layer's security. Two main types exist: optimistic rollups, which assume validity and rely on fraud proofs during a challenge window, and zero-knowledge rollups, which post validity proofs verifying each batch. Rollups are central to Ethereum's layer-2 scaling strategy.

- ### Semantic Classification
  - owl-class:: bc:Rollup
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Polygon]]
  - has-part:: [[Fraud Proof]], [[Zero Knowledge Proof]]
  - requires:: [[Ethereum]]
  - enables:: [[Optimism]], [[Arbitrum]], [[zkSync]]

- ### Content
  - Rollups move the heavy work of executing transactions off the main chain while still anchoring their data and integrity to it. Transaction data is published to the base layer so that anyone can reconstruct the rollup's state, which is what allows the system to inherit security guarantees rather than depending solely on a separate validator set.
  - Optimistic rollups treat posted state transitions as valid by default and provide a window during which a fraud proof can challenge an incorrect result, after which the base layer re-executes the disputed computation. Zero-knowledge rollups instead attach a succinct cryptographic proof to each batch, letting the base layer verify correctness directly without a challenge period.
  - Within Ethereum's roadmap, rollups are the primary path to scaling, complemented by upgrades that lower the cost of posting data, such as proto-danksharding. The approach lets many application-specific and general-purpose layer-2 networks coexist while settling to a shared, secure base layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z