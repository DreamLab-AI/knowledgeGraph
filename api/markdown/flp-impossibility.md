- ### Definition
  - A foundational result in distributed computing showing that no deterministic consensus protocol can guarantee agreement in an asynchronous system if even a single process may fail.

- ### Semantic Classification
  - owl-class:: distributed-systems:FLPImpossibility
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Consensus]]
  - bridges-to:: [[Consensus Algorithm]], [[Fault Tolerance]]
  - requires:: [[Distributed Consensus]]

- ### Content
  - The FLP impossibility result, named after Fischer, Lynch and Paterson, proves that in a fully asynchronous distributed system there is no deterministic algorithm that always reaches consensus when at least one process can crash. Because messages can be delayed arbitrarily, no protocol can guarantee both safety and termination in all executions.
  - The result does not say consensus is impossible in practice; it shows that guarantees require additional assumptions such as partial synchrony, timeouts or randomisation. It frames the design of real consensus algorithms like Paxos and Raft, which sacrifice liveness under adverse timing rather than correctness.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z