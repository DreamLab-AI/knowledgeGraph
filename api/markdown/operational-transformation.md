- ### Definition
  - A concurrency control technique for collaborative editing that transforms concurrent operations against each other so that all replicas converge to the same consistent state.

- ### Semantic Classification
  - owl-class:: distributed-systems:OperationalTransformation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[CRDT]], [[Conflict Resolution]]
  - requires:: [[Distributed Systems]]
  - enables:: [[Collaboration Tools]]

- ### Content
  - Operational transformation (OT) allows multiple users to edit a shared document concurrently by representing changes as operations and transforming each incoming operation against operations that have already been applied locally. This adjustment preserves user intent and ensures replicas converge.
  - OT underpins many real-time collaborative editors. It requires careful handling of operation ordering and transformation functions, and it is often contrasted with conflict-free replicated data types, which achieve convergence through commutative data structures rather than transformation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z