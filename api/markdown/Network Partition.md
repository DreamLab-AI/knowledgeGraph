A network partition is a failure condition in a distributed system where communication is severed between subsets of nodes, splitting the cluster into groups that cannot exchange messages. Partitions force a trade-off, formalised by the CAP theorem, between maintaining consistency and remaining available while the split persists. Detecting, tolerating, and recovering from partitions is a central concern of distributed-systems design.

### Overview

- When links fail or routers misbehave, a distributed system can fracture into islands that each believe the others have crashed. During a partition a system must choose: refuse writes to preserve a single consistent history, or accept divergent writes on both sides and reconcile later. Quorum protocols, consensus algorithms, and conflict-free replicated data types are the principal tools for surviving partitions safely.

### Key aspects

- CAP trade-off between consistency and availability under partition
- Split-brain scenarios where multiple sides accept writes
- Quorum and majority rules to keep at most one writable side
- Failure detectors and heartbeats that distinguish slow from dead nodes
- Reconciliation and conflict resolution during partition healing

### Applications

- Designing fault-tolerant databases and key-value stores
- Configuring quorum sizes for replicated state machines
- Tuning availability-versus-consistency policies in cloud services
- Chaos-engineering tests that inject network splits

### Provenance

