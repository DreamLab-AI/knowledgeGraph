- ### Definition
  - State Machine Replication (SMR) is a fault-tolerance technique in which multiple server replicas each maintain an identical copy of a deterministic state machine, processing the same ordered sequence of client requests to achieve consistency. It underpins the correctness guarantees of distributed consensus protocols and forms the theoretical foundation of blockchain ledger replication.

- ### Semantic Classification
  - owl-class:: blockchain:StateMachineReplication
  - owl-role:: concept

- ### Relationships
  - requires [[Consensus Mechanism]]
  - requires [[Fault Tolerance]]
  - enables [[Blockchain]]
  - enables [[Distributed Systems]]
  - relatedTo [[State Machine]]

- ### Content

  ## Overview

  State Machine Replication is the core abstraction behind replicated distributed services. By ensuring all replicas apply the same sequence of commands to the same initial state, SMR guarantees that all replicas reach identical states. Classical implementations include Paxos and Raft; blockchain systems such as Bitcoin and Ethereum instantiate SMR using Nakamoto consensus and proof-of-stake variants respectively.

  #### Related Concepts
  - [[Consensus Mechanism]]
  - [[Fault Tolerance]]
  - [[Blockchain]]
  - [[Distributed Systems]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z