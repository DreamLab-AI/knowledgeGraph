
A replication protocol is the set of rules and message exchanges by which a distributed system maintains multiple copies of data across nodes so that they remain consistent according to a chosen consistency model despite failures and concurrency. It governs how updates are propagated, ordered, and acknowledged, balancing availability, latency, and durability. Replication protocols range from synchronous primary-backup and quorum schemes to asynchronous gossip and conflict-free replicated approaches.

- ### Overview
  - Replication improves availability and durability by storing the same data on several nodes.
  - The protocol decides how writes propagate: synchronously to a quorum, or asynchronously with later reconciliation.
  - Ordering of updates — via a replicated log or logical clocks — determines the achievable consistency model.
  - Trade-offs among consistency, availability, and partition tolerance follow the CAP theorem.
- ### Mechanisms
  - Primary-backup — a leader orders writes and ships them to followers.
  - Quorum replication — reads and writes intersect over a majority to guarantee freshness.
  - Log replication — an append-only ordered log replayed to bring replicas to the same state.
  - Gossip and anti-entropy — epidemic propagation reconciling replicas over time.
  - Conflict resolution — last-writer-wins, version vectors, or CRDT merge for concurrent updates.
- ### Applications
  - Replicated databases and key-value stores for availability and durability.
  - Consensus-backed configuration stores such as etcd and ZooKeeper.
  - Blockchain and distributed-ledger state replication across validators.
  - Collaborative editing and offline-first applications using CRDTs.
- ### Provenance

