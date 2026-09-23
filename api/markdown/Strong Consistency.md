
Strong consistency is a property of a distributed data system in which every read returns the result of the most recently completed write, so that all clients observe a single, up-to-date view of the data. It typically corresponds to linearizability, where operations appear to take effect instantaneously at some point between their invocation and response. Achieving strong consistency requires coordination such as consensus and, under the CAP theorem, trades availability for consistency during network partitions.

- ### Overview
  - Strong consistency gives applications the illusion of a single, non-replicated data store despite the system being distributed across many replicas.
  - It contrasts sharply with [[Eventual Consistency]], which permits temporary divergence between replicas in exchange for higher availability.
  - Under the [[CAP Theorem]], a strongly consistent system sacrifices availability when partitioned.
- ### Key aspects
  - Linearizable reads and writes: operations respect real-time ordering.
  - Coordination cost: requires a [[Quorum]] or consensus round per operation, adding latency.
  - Single-copy semantics: replicas behave as one logical object.
  - Partition behaviour: prioritises correctness over availability.
  - Implementation: usually built atop [[Total Order Broadcast]] and a [[Consensus Algorithm]].
- ### Applications
  - Financial ledgers and inventory systems where stale reads are unacceptable.
  - Distributed locking, leader election, and configuration stores.
  - Coordination services such as etcd and ZooKeeper-style systems.
  - Strongly consistent metadata layers for replicated databases.
- ### Provenance

