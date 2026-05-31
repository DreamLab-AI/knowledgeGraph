- ### Definition
  - A consistency model for distributed data stores in which, given no new updates, all replicas eventually converge to the same value. It favours availability and partition tolerance over immediate consistency.

- ### Semantic Classification
  - owl-class:: distributed-systems:EventualConsistency
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Computing]]
  - bridges-to:: [[Vector Clocks]]
  - requires:: [[Distributed Computing]]
  - enables:: [[Distributed Storage]]

- ### Content
  - Under eventual consistency, replicas may temporarily diverge after an update, but in the absence of further changes they converge to a consistent state. This model is used by many large-scale distributed databases to remain available during network partitions.
  - It contrasts with strong consistency, where every read returns the most recent write. Systems that adopt eventual consistency often use mechanisms such as vector clocks and conflict resolution to reconcile divergent replicas.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z