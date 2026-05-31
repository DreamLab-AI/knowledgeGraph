- ### Definition
  - A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.

- ### Semantic Classification
  - owl-class:: distributed-systems:VectorClocks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Clock Synchronization]]
  - bridges-to:: [[Clock Synchronization]]
  - requires:: [[Distributed Computing]]
  - enables:: [[Eventual Consistency]]

- ### Content
  - A vector clock maintains, for each process, a vector with one entry per process. Each process increments its own entry on local events and merges vectors on message receipt, capturing causal relationships between events.
  - By comparing two vectors, a system can tell whether one event happened before another or whether they are concurrent, which supports conflict detection in replicated stores and eventually consistent systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z