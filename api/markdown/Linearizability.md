Linearizability is a strong consistency model for concurrent and distributed systems requiring that every operation appears to take effect atomically at a single point in time between its invocation and its response, consistent with a global real-time ordering. It is a composable (local) property: a system is linearizable if each individual object is linearizable. Informally it guarantees that once a write completes, all subsequent reads observe that write or a later one, giving the illusion of a single, instantaneous copy of the data. Formalised by Herlihy and Wing, it is the gold standard against which weaker models such as eventual consistency are contrasted.

- Linearizability is the strongest single-object [[Consistency Model]], requiring each operation to appear atomic and consistent with real-time order. It is what robust [[Distributed Consensus]] protocols such as [[Raft]] and [[Paxos]] provide, and it stands in tension with availability as framed by the [[CAP Theorem]].

### Overview

- A linearizable system behaves as if there were a single up-to-date copy of the data, even though it is replicated across many machines.
- Each operation seems to occur instantaneously at some moment between its call and return, and these moments respect the wall-clock order of non-overlapping operations.
- Because it is a local property, composing linearizable objects yields a linearizable system, which simplifies reasoning.

### Key aspects

- Real-time ordering: non-overlapping operations preserve their observed order.
- Atomic visibility: a completed write is immediately visible to all later reads.
- Compositionality: per-object linearizability implies system-wide linearizability.

### Applications

- Strongly consistent key-value stores and coordination services.
- Leader-based [[State Machine Replication]] for configuration and locks.
- Distributed databases prioritising correctness over latency.

### Provenance

