public:: true

# Paxos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:paxos",
  "@type": "Page",
  "vc:slug": "paxos",
  "title": "Paxos",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:paxos",
  "@type": "Class",
  "label": "Paxos",
  "definition": "Paxos is a family of fault-tolerant distributed consensus algorithms first formally described by Leslie Lamport in 1989 and published in 1998, designed to allow a cluster of processes to agree on a single value or sequence of values despite the failure of a minority of participants. The algorithm proceeds through prepare and accept phases orchestrated by a proposer, with acceptors voting to commit proposed values and learners observing the final agreement. Multi-Paxos extends the basic protocol to achieve consensus on a log of commands efficiently, forming the algorithmic foundation of replicated state machines. Paxos and its derivatives, including Raft and HotStuff, underpin virtually every strongly consistent distributed database and coordination service in production use today.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:state-machine-replication", "label": "State Machine Replication"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:hot-stuff-consensus", "label": "HotStuff Consensus"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:quorum", "label": "Quorum"},
      {"@id": "urn:ngm:class:distributed-protocol", "label": "Distributed Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Paxos is a landmark [[Consensus Algorithm]] that enables a distributed cluster to achieve agreement on a single value despite minority node failures, providing the theoretical and practical foundation for [[State Machine Replication]] in fault-tolerant systems.
- ### Relationships
  - Paxos implements [[Consensus Mechanism]] guarantees by requiring a [[Quorum]] majority to accept each proposed value before committing. It assumes crash-fault-tolerant rather than [[Byzantine Fault Tolerance]] environments, making it simpler than BFT protocols but unsuitable for adversarial settings. Multi-Paxos chains consensus rounds to implement [[State Machine Replication]], the basis of strongly consistent distributed databases. [[HotStuff Consensus]] and Raft modernise Paxos with linear communication complexity and simpler leader election, whilst [[Nakamoto Consensus]] offers a probabilistic alternative suited to permissionless [[Distributed Ledger]] networks. Together they represent the continuum of [[Distributed Protocol]] design.
- ### Content
  - Paxos solves the fundamental problem of getting a set of processes to agree on a value when messages may be lost or delayed and processes may crash, as long as a majority remain operational. The two-phase protocol—prepare/promise followed by accept/accepted—ensures that any value chosen in one round cannot be overturned by a later round, a property called safety.

  - Multi-Paxos optimises repeated consensus by electing a stable leader that skips the prepare phase for subsequent log entries, reducing message complexity. The leader proposes log entries sequentially, and acceptors respond once per entry. This design underpins Apache ZooKeeper, Google Chubby, and the Paxos-based internals of Spanner's distributed transaction coordination.

  - A well-known limitation of Paxos is its complexity: Lamport's original paper acknowledged that the algorithm is notoriously difficult to understand and implement correctly. Subtle edge cases in leader election and log hole filling have caused production incidents at major technology companies. Raft was designed explicitly to address Paxos comprehensibility, decomposing consensus into independent sub-problems of leader election and log replication.

  - [[HotStuff Consensus]] advances the protocol family further by achieving linear communication complexity per round, making it practical for large-scale Byzantine-tolerant deployments in blockchain and federated systems. Despite its age, Paxos remains conceptually central: nearly every modern consensus protocol can be analysed as a variant or optimisation of the original Paxos invariants.
