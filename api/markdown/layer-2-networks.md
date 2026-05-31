- ### Definition
  - Protocols built on top of a base blockchain that process transactions off the main chain while inheriting its settlement and security guarantees.

- ### Semantic Classification
  - owl-class:: blockchain:Layer2Networks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 1]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Layer 1]]
  - enables:: [[Scalability]]

- ### Content
  - Layer 2 networks move execution and data away from the base chain to increase throughput and lower cost, then settle results back to Layer 1. Common forms include rollups, state channels, and sidechains.
  - Their security depends on the ability to fall back to the base layer, for example by posting data or proofs that allow disputes to be resolved on Layer 1. This lets them scale transaction volume without weakening final settlement.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z