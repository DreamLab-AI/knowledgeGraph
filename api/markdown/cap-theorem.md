- ### Definition
  - The CAP Theorem states that a distributed data store cannot simultaneously guarantee all three of consistency, availability and partition tolerance. When a network partition occurs and messages between nodes are lost or delayed, a system must choose between remaining available, by serving possibly stale data, and remaining consistent, by refusing requests it cannot safely satisfy. Formulated by Eric Brewer and later proved formally by Gilbert and Lynch, it frames a fundamental trade-off in distributed systems design.

- ### Semantic Classification
  - owl-class:: cs:CAPTheorem
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Distributed Systems Domain]], [[Consensus]], [[Eventual Consistency]]
  - enables:: [[Distributed Database Design]]

- ### Content
  - In the theorem's terms, consistency means every read returns the most recent write or an error, availability means every request receives a non-error response without guaranteeing it reflects the latest write, and partition tolerance means the system continues operating despite arbitrary loss of messages between nodes. Because network partitions are unavoidable in real distributed systems, partition tolerance is effectively a given.
  - The practical consequence is that, during a partition, a system must sacrifice either consistency or availability. This gives rise to the common CP and AP categorisations of distributed databases, where CP systems prioritise correctness over responsiveness during faults, and AP systems remain responsive at the cost of possibly stale reads.
  - The theorem clarifies that there is no single best choice, only trade-offs appropriate to a workload. It is often refined by the PACELC formulation, which adds that even without partitions a system trades latency against consistency, and it informs the design of consensus protocols, replication schemes and eventually consistent stores.

- ### Provenance
  - sources:: [[Gilbert and Lynch (2002)]]
  - migration-date:: 2026-05-29T00:00:00Z