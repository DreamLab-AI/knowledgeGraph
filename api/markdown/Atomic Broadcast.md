Atomic broadcast (also called total-order broadcast) is a distributed communication primitive guaranteeing that all correct processes deliver the same set of messages in the same total order. It strengthens reliable broadcast with an ordering property, ensuring agreement on both the content and sequence of delivered messages. Atomic broadcast is equivalent in power to consensus and underpins state-machine replication.

### Overview

- Two safety properties: agreement (same messages) and total order (same sequence); plus validity and integrity.
- Reducible to and from consensus, so it inherits the FLP impossibility under pure asynchrony.
- Practical protocols layer ordering on Paxos, Raft, or PBFT cores.

### Mechanisms

- Total-order delivery: a global sequence number per message.
- Agreement: no two correct processes deliver different message sets.
- Crash-tolerant variants (Paxos, Raft) versus Byzantine variants (PBFT, Tendermint).
- Throughput and latency trade-offs via batching and pipelining.

### Applications

- Replicated state machines and fault-tolerant databases.
- Blockchain transaction ordering and consensus layers.
- Coordination services such as configuration and lock managers.
- Reliable group communication in clustered systems.

### Provenance

