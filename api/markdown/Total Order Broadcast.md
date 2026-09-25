Total order broadcast, also called atomic broadcast, is a communication primitive in distributed systems that guarantees all correct processes deliver the same set of messages in exactly the same order. It strengthens reliable broadcast with a total ordering property, ensuring that every replica observes an identical sequence of events. Total order broadcast is provably equivalent to consensus and forms the foundation of state machine replication.

### Overview

- Total order broadcast provides agreement on both which messages are delivered and the order of delivery, which is the precise guarantee needed to replicate deterministic state machines.
- It is mutually reducible to [[Consensus]]: a solution to one yields a solution to the other.
- Protocols such as [[Raft]] and [[Paxos]] implement total order broadcast as their core ordering service.

### Mechanisms

- Agreement: all correct processes deliver the same messages.
- Total order: messages are delivered in an identical global sequence at every process.
- Integrity and validity: each delivered message was previously broadcast.
- Leader-based sequencing: a primary assigns sequence numbers, with [[Leader Election]] on failure.
- Quorum replication: a [[Quorum]] of acknowledgements commits each ordered slot.

### Applications

- Implementing [[State Machine Replication]] for fault-tolerant services.
- Ordering transactions in a [[Distributed Ledger]] or replicated database.
- Building strongly consistent key-value stores and configuration services.
- Coordinating replicated logs across data centres.

### Provenance

