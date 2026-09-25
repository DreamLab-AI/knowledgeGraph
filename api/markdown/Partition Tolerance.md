The property of a distributed system that allows it to continue operating correctly when the network splits into components that cannot communicate with one another, so that messages between nodes are arbitrarily delayed or lost. As the P in the CAP theorem, partition tolerance is effectively mandatory over real networks, forcing designers to choose during a partition between refusing requests to preserve consistency and serving them to preserve availability at the cost of divergent replicas.

### Semantic Classification

### Content

## Definition

**Partition tolerance** is a distributed system's ability to keep functioning when the network partitions — that is, when node failures or link failures divide the cluster into groups that can talk internally but not to each other. During a partition, each side has no way to distinguish "the other nodes are slow" from "the other nodes are unreachable" from "the other nodes are dead"; the asynchronous network model makes these cases indistinguishable in bounded time.

In the [[CAP Theorem]], as formalised by Gilbert and Lynch (2002) from Brewer's conjecture, partition tolerance is one of three properties — with linearisable consistency and availability — of which a system can guarantee only two. The practical reading, argued influentially by Brewer himself and by Kleppmann, is that P is not optional: real networks partition, so the actual design decision is what to *sacrifice while a partition is in progress*. CP systems (e.g. etcd, ZooKeeper, Spanner) make the minority side refuse or stall requests, preserving a single consistent history; AP systems (e.g. Dynamo-style stores, Cassandra, CRDT-based collaboration engines) keep every side writable and reconcile afterwards, accepting [[Eventual Consistency]] and the need for conflict resolution.

Partition handling is therefore intertwined with the [[Consistency Model]] and the replication design: quorum protocols such as Raft and Paxos survive minority partitions by construction, while leaderless replication uses techniques such as sloppy quorums, hinted handoff, vector clocks, and merge functions to absorb partitions gracefully. The PACELC refinement extends the analysis to normal operation: even without partitions, systems trade latency against consistency.

## Technical Details

- **Failure model**: partitions arise from switch and router faults, misconfiguration, congestion, garbage-collection pauses, and cloud availability-zone outages. Studies of production networks (e.g. Bailis and Kingsbury's "The Network is Reliable") document partitions as routine, not exotic.
- **CP behaviour**: quorum-based consensus continues on the majority side; the minority side loses liveness. Systems expose this as leader elections, fencing tokens, and read leases.
- **AP behaviour**: divergent replicas must be reconciled — last-writer-wins (lossy), application-level merge, or CRDTs, which guarantee convergence by making all operations commutative.
- **Split-brain**: the pathological failure of partition handling, where two sides both believe they hold the lease or leadership and accept conflicting writes; prevented with quorums, fencing, and STONITH-style mechanisms.
- **Testing**: partition tolerance claims are routinely falsified in practice; Jepsen's fault-injection testing has documented consistency violations under partition in dozens of widely used databases, making partition testing part of modern release engineering.

  ## Current Landscape

- Jepsen continues to find partition-related safety failures in current systems: its analysis of NATS 2.12.1 (December 2025) showed the JetStream subsystem could lose acknowledged messages or enter persistent split-brain when node failures combined with network partitions, worsened by an fsync-once-every-two-minutes default.
- The March 2026 MariaDB Galera Cluster analysis (versions 12.1.2–12.2.2) found committed transactions lost under process crashes and network partitions, and that the cluster fails to meet its claimed isolation level even without faults.
- The pattern is consistent across the corpus: divergence and data loss during partitions typically trace to weak durability defaults (delayed fsync) interacting with the partition, not to the consensus core itself — reinforcing that partition tolerance is an end-to-end property spanning replication and disk-flush policy.
- Amazon RDS for PostgreSQL (April 2025, v17.4) was found to exhibit Long Fork at "Repeatable Read", illustrating that even managed, mature engines expose partition- and concurrency-related anomalies under Jepsen's Elle checker.
- The theoretical frame is unchanged since Gilbert and Lynch (2002): over real networks P is mandatory, so the live engineering question remains what to sacrifice — consistency (CP) or availability (AP) — while a partition is in progress.
- **Sources**:
  - https://jepsen.io/analyses
  - https://jepsen.io/blog
  - https://www.infoq.com/articles/jepsen/

