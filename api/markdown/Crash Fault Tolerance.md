Crash fault tolerance is the property of a distributed system that continues to operate correctly despite nodes failing by stopping, that is, by halting and ceasing to send messages. It assumes the crash-stop or crash-recovery failure model, in which faulty processes do not behave maliciously or send incorrect information. Protocols such as Paxos and Raft achieve it through replication and consensus over a quorum of non-faulty nodes.

### Overview

- The crash-stop failure model assumes a faulty process simply stops; the crash-recovery model allows it to restart, optionally with stable storage.
- Because failures are benign, crash-fault-tolerant protocols tolerate up to f failures with 2f+1 replicas, needing a simple majority quorum.
- This is weaker than tolerating arbitrary behaviour but far cheaper, which is why it underpins most production data stores and coordination services.

### Mechanisms

- State machine replication: replicas apply the same ordered log of commands so survivors hold an up-to-date copy.
- Quorum agreement: a majority must acknowledge each decision, ensuring overlap between successive quorums.
- Leader-based ordering with failover, using timeouts and [[Leader Election]] to replace a crashed leader.
- Recovery from durable logs and snapshots so a restarted node can rejoin.

### Applications

- Coordination services and distributed lock managers.
- Replicated databases and metadata stores requiring [[High Availability]].
- Configuration and service-discovery systems built on [[Raft]].

### Provenance

