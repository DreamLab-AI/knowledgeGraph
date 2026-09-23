
Data consistency is the guarantee that data remains valid, coherent and in agreement across copies, transactions and nodes of a system. In distributed systems it spans a spectrum from strong consistency, where all readers observe the latest write, to eventual consistency, where replicas converge over time. It is a core correctness property traded off against availability and latency, and it underpins fault-tolerant data layers.

- ### Content
  - Consistency models range from linearisable strong consistency to eventual consistency, with the CAP theorem framing the trade-off against availability under partition. The chosen model shapes replication, conflict resolution and the correctness guarantees an application can rely on.

