- ### Definition
  - Crash fault tolerance is the ability of a system to keep working as a kind of [[Fault Tolerance]] when nodes fail by halting rather than acting maliciously.
  - It is achieved through [[Replication]], a [[Quorum]] of healthy nodes and a [[Consensus Protocol]] such as [[Paxos]] or [[Raft]].

- ### Overview
  - The crash-stop failure model assumes a faulty process simply stops; the crash-recovery model allows it to restart, optionally with stable storage.
  - Because failures are benign, crash-fault-tolerant protocols tolerate up to f failures with 2f+1 replicas, needing a simple majority quorum.
  - This is weaker than tolerating arbitrary behaviour but far cheaper, which is why it underpins most production data stores and coordination services.

- ### Mechanisms
  - State machine replication: replicas apply the same ordered log of commands so survivors hold an up-to-date copy.
  - Quorum agreement: a majority must acknowledge each decision, ensuring overlap between successive quorums.
  - Leader-based ordering with failover, using timeouts and [[Leader Election]] to replace a crashed leader.
  - Recovery from durable logs and snapshots so a restarted node can rejoin.

- ### Applications
  - Coordination services and distributed lock managers.
  - Replicated databases and metadata stores requiring [[High Availability]].
  - Configuration and service-discovery systems built on [[Raft]].

- ### Relationships
  - subClassOf:: [[Fault Tolerance]]
  - partOf:: [[Distributed Consensus]]
  - requires:: [[Quorum]]
  - requires:: [[Replication]]
  - enables:: [[High Availability]]
  - enables:: [[State Machine Replication]]
  - dependsOn:: [[Consensus Protocol]]
  - dependsOn:: [[Leader Election]]
  - implements:: [[Paxos]]
  - implements:: [[Raft]]
  - uses:: [[Replication]]
  - supports:: [[State Machine Replication]]
  - contrastsWith:: [[Byzantine Fault Tolerance]]
  - bridgesTo:: [[Distributed Consensus]]
  - relatedTo:: [[Quorum]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation