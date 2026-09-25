A distributed database stores and manages data across multiple networked nodes, presenting a unified logical database while partitioning and replicating data for scale and resilience. It must reconcile the trade-offs of the CAP theorem, choosing among strong consistency, availability, and partition tolerance through consensus, quorum, or conflict-resolution strategies. It underpins large-scale applications that exceed the capacity or fault-tolerance limits of a single server.

### Content

- Architectures range from sharded SQL and NewSQL (e.g. Spanner, CockroachDB) to eventually consistent NoSQL and CRDT-based stores. Consistency models span linearizable to eventual; designers tune replication factor, partitioning keys, and consensus (Raft, Paxos) against latency, availability, and operational complexity.

