
Concurrency control is the set of techniques that coordinate simultaneous operations on shared data so that correctness is preserved despite interleaving. It ensures that concurrent transactions or processes produce results equivalent to some valid serial execution, preventing anomalies such as lost updates and inconsistent reads. It is foundational to databases, distributed systems, and collaborative applications.

- ### Overview
  - When multiple processes read and write shared state at once, naive interleaving can corrupt data through lost updates and dirty reads.
  - Concurrency control imposes discipline so that the observable outcome is as if operations ran in some legal sequence.
  - Approaches range from pessimistic locking, which blocks conflicting access, to optimistic methods that detect conflicts at commit.
  - Multi-version schemes let readers see a consistent snapshot while writers proceed, improving throughput.
- ### Mechanisms
  - Locking acquires exclusive or shared access to data items, serialising conflicting operations.
  - Optimistic validation proceeds without locks and aborts transactions that conflict at commit time.
  - Multi-version concurrency maintains historical versions so reads never block writes.
  - Timestamp ordering assigns each transaction a position in a global serial order.
- ### Key aspects
  - Serializability: concurrent execution must equal some serial execution.
  - Isolation: a transaction should not see another's incomplete effects.
  - Throughput: control should maximise parallelism without sacrificing correctness.
  - Deadlock handling: the system must detect or prevent circular waits.
- ### Applications
  - Transaction processing in relational and distributed [[Database System]] engines.
  - Coordinating concurrent updates in [[Distributed Systems]].
  - Underpinning safe state mutation in collaborative software.
  - Maintaining [[Data Consistency]] under heavy parallel load.
- ### Provenance

