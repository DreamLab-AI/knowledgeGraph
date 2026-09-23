
A consistency model is a contract between a distributed data store and its clients that specifies the guarantees about the visibility and ordering of reads and writes across replicas. It defines which outcomes of concurrent operations are permissible, ranging from strong models like linearizability that behave as a single up-to-date copy, to weak models like eventual consistency that allow temporary divergence. The chosen model shapes application correctness, performance, and the achievable balance among consistency, availability, and partition tolerance.

- ### Overview
  - A consistency model formalises which interleavings of operations clients may observe.
  - Strong models present the illusion of a single, instantaneously updated copy, simplifying reasoning at a latency cost.
  - Weak models permit replicas to diverge temporarily, favouring availability and low latency.
  - The CAP theorem forces a trade-off: under partition, a system must sacrifice strong consistency or availability.
- ### Key aspects
  - Linearizability — operations appear instantaneous and in a single global order respecting real time.
  - Sequential consistency — a single order consistent with each client's program order.
  - Causal consistency — operations causally related are seen in order; concurrent ones may differ.
  - Eventual consistency — replicas converge once updates cease, with no ordering guarantees in the interim.
  - Session guarantees — read-your-writes, monotonic reads, and similar per-client properties.
- ### Applications
  - Choosing storage guarantees for transactional versus high-availability workloads.
  - Designing globally distributed databases and caches.
  - Reasoning about correctness of replicated state machines and ledgers.
  - Configuring tunable consistency in systems like Cassandra and DynamoDB.
- ### Provenance

