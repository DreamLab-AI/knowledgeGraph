public:: true

# State Machine Replication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b2909df1d28d61e415bfcc60536bde215c504cc9a499b10e3cc88d2f86da722",
  "@type": "Page",
  "vc:slug": "state-machine-replication",
  "title": "State Machine Replication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9507"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "State Machine Replication"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:state-machine-replication",
  "@type": "Class",
  "label": "State Machine Replication",
  "definition": "State Machine Replication (SMR) is a fault-tolerance and consistency technique in which multiple server replicas each maintain an identical deterministic state machine by processing the same totally-ordered sequence of client commands, ensuring that all correct replicas converge to the same state after executing every command. The approach was formalised by Leslie Lamport and later by Fred Schneider, and it provides the theoretical foundation for consensus protocols such as Paxos, Raft, and Viewstamped Replication. SMR simultaneously achieves high availability and strong consistency in the presence of crash or Byzantine failures by decoupling the agreement problem (ordering) from the execution problem (state transition). It is the core architectural abstraction underlying permissioned blockchains, cloud database replication, and coordination services such as Apache ZooKeeper.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-computing",
      "label": "Distributed Computing"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:replicated-state-machine",
      "label": "Replicated State Machine"
    },
    {
      "@id": "urn:ngm:class:smr",
      "label": "SMR"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:total-order-broadcast",
        "label": "Total Order Broadcast"
      },
      {
        "@id": "urn:ngm:class:deterministic-execution",
        "label": "Deterministic Execution"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      },
      {
        "@id": "urn:ngm:class:raft-consensus",
        "label": "RAFT Consensus"
      },
      {
        "@id": "urn:ngm:class:pbft",
        "label": "PBFT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:strong-consistency",
        "label": "Strong Consistency"
      },
      {
        "@id": "urn:ngm:class:linearizability",
        "label": "Linearizability"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      },
      {
        "@id": "urn:ngm:class:log-replication",
        "label": "Log Replication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:state-machine",
        "label": "State Machine"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-databases",
        "label": "Distributed Database"
      },
      {
        "@id": "urn:ngm:class:coordination-layer",
        "label": "Coordination Service"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:replication",
        "label": "Primary-Backup Replication"
      },
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:distributed-ai-training",
        "label": "Distributed AI Training"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      },
      {
        "@id": "urn:ngm:class:replication-protocol",
        "label": "Replication Protocol"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:state-machine-replication:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4b2909df1d28d61e415bfcc60536bde215c504cc9a499b10e3cc88d2f86da722"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - State Machine Replication (SMR) is a fundamental technique in [[Distributed Computing]] in which every replica in a cluster maintains an identical deterministic [[State Machine]] and advances it by executing the same totally-ordered sequence of commands. The key insight, formalised by Leslie Lamport in the context of [[Paxos]] and by Fred Schneider in his 1990 survey, is that if two machines start in the same initial state and receive the same inputs in the same order, they produce identical outputs — providing strong-consistency guarantees that are essential for [[Fault Tolerance]], [[High Availability]], and [[Linearizability]]. SMR forms the theoretical backbone of consensus-based systems ranging from [[Raft Consensus]] and [[Viewstamped Replication]] to permissioned [[Blockchain]] ledgers.

- ### Overview
  - SMR addresses the core challenge of building reliable services atop unreliable components. A service is modelled as a deterministic state machine: given any state and an input command, the machine transitions to a precisely defined next state and produces a deterministic output. Replicating this machine across N servers creates redundancy; as long as a quorum of replicas agrees on the same command sequence, the system can tolerate up to ⌊(N-1)/2⌋ crash failures (crash fault-tolerant, CFT) or, under [[Byzantine Fault Tolerance]] variants, up to ⌊(N-1)/3⌋ arbitrary failures (BFT).
  - The central challenge reduces to ensuring all correct replicas observe the same totally-ordered log of commands — a problem solved by [[Total Order Broadcast]], which is equivalent in power to [[Consensus Mechanism]] in asynchronous networks (by FLP impossibility). Practical systems circumvent FLP by using timeouts and leader-based protocols.
  - SMR is contrasted with [[Primary-Backup Replication]], where only the primary executes requests and ships state changes to passive backups; SMR has all replicas execute commands, providing stronger recoverability properties at the cost of higher coordination overhead.

- ### Key Components
  - **Deterministic State Machine** — The replicated object; all non-determinism (random number generation, wall-clock reads, thread scheduling) must be excluded or serialised before being injected into the command log. See [[Deterministic Execution]].
  - **Total Order Broadcast / Atomic Broadcast** — The ordering layer that delivers the same sequence of messages to every correct replica, satisfying validity, agreement, and total order properties. [[Total Order Broadcast]] is the key primitive.
  - **Leader Election** — Many SMR protocols (Paxos, Raft) elect a single leader replica that sequences proposals. [[Leader Election]] must handle leader failures via view changes or term increments.
  - **Log Replication** — The leader appends entries to a distributed log and replicates them to followers before committing. [[Log Replication]] is the data-flow component of [[Raft Consensus]] and Paxos.
  - **Quorum** — A majority (or weighted) subset of replicas whose acknowledgement is required before a command is considered committed. [[Quorum]] intersection properties guarantee that any two quorums share at least one correct member, preventing conflicting decisions.
  - **State Transfer / Snapshotting** — New or lagging replicas must catch up without replaying the entire log. [[State Transfer]] or checkpoint mechanisms allow replicas to install a snapshot and replay only recent log entries.
  - **View Changes / Leader Failover** — When the current leader is suspected of failure, replicas execute a view-change protocol to elect a new leader without losing committed entries. Raft calls this a term change; Paxos Phase 1 serves the same purpose.
  - **Client Request Handling** — Clients submit commands to the leader (or any replica with forwarding), receive acknowledgements only after a quorum commits the entry, and use sequence numbers or session tokens to prevent duplicate execution.

- ### Fault Tolerance Models
  - **Crash Fault-Tolerant (CFT)** — Replicas may crash and stop but do not send incorrect messages. Raft, Multi-Paxos, and Viewstamped Replication are CFT protocols tolerating f failures in a 2f+1 cluster.
  - **Byzantine Fault-Tolerant (BFT)** — Replicas may behave arbitrarily (send conflicting messages, collude). [[Practical Byzantine Fault Tolerance]] (PBFT) requires 3f+1 replicas to tolerate f Byzantine faults. Used in permissioned blockchains and critical infrastructure.
  - **Hybrid Models** — Systems such as Stellar and Tendermint blend BFT with economic or trust-based quorum selection, lowering replica counts while retaining safety under partial Byzantine assumptions.

- ### Consensus Protocol Implementations
  - **[[Paxos]]** — The original multi-decree consensus protocol by Lamport; defines the theoretical basis for leader-based SMR. Multi-Paxos extends it to a continuous log of decrees.
  - **[[Raft Consensus]]** — A more understandable SMR protocol designed for engineering teams; introduces explicit leader election, log replication, and safety proofs. Widely deployed in etcd, CockroachDB, TiKV, and Consul.
  - **[[Viewstamped Replication]]** — Developed by Liskov and Cowling (1988, revised 2012); equivalent in power to Paxos and historically important as an independent derivation.
  - **[[Practical Byzantine Fault Tolerance]]** (PBFT) — The first practical BFT-SMR algorithm; introduced by Castro and Liskov (1999). Three-phase protocol (pre-prepare, prepare, commit) provides safety and liveness under f < n/3 Byzantine faults.
  - **HotStuff** — Linear-communication BFT protocol used in Diem/LibraBFT and several permissioned blockchains; achieves O(n) message complexity per view change vs. O(n²) in PBFT.
  - **Tendermint / CometBFT** — BFT-SMR engine underlying the Cosmos ecosystem; combines round-based voting with [[Proof of Stake]] validator selection.

- ### Applications
  - **[[Coordination Service]]** — Apache ZooKeeper and etcd implement SMR (via ZAB and Raft respectively) to provide distributed locks, configuration stores, and service discovery used by nearly all large-scale cloud infrastructure.
  - **[[Distributed Database]]** — Google Spanner, CockroachDB, TiDB, and YugabyteDB use Paxos or Raft at the tablet/range level to replicate database shards with ACID semantics across data centres.
  - **[[Blockchain]]** — Permissioned blockchains (Hyperledger Fabric, Quorum) use BFT-SMR to order and replicate the ledger. Permissionless chains (Bitcoin, Ethereum) instantiate SMR probabilistically via Nakamoto or [[Proof of Stake]] consensus, with finality achieved asynchronously.
  - **[[Smart Contract]] Execution** — The Ethereum Virtual Machine and similar runtimes enforce SMR determinism by banning floating-point operations and bounding execution via gas, ensuring all validator nodes reach the same contract output.
  - **Replicated Storage Engines** — Systems such as Chubby (Google), Zab (ZooKeeper), and DRBD (Linux block replication) use SMR or derived protocols to maintain consistent storage state across replicas.
  - **Cloud Databases as a Service** — Amazon Aurora, Azure Cosmos DB, and Google Cloud Spanner expose SMR-backed storage layers behind managed APIs, abstracting replication complexity from application developers.
  - **[[Distributed AI Training]]** — Emerging use-case: parameter-server clusters and federated learning co-ordination layers are beginning to apply SMR principles to provide consistent global model state across training workers.

- ### Theoretical Foundations
  - **FLP Impossibility** — Fischer, Lynch, and Paterson (1985) proved that no deterministic algorithm can achieve consensus in a fully asynchronous system with even one crash failure. SMR protocols circumvent this via partial synchrony assumptions or randomisation.
  - **[[CAP Theorem]]** — Brewer's conjecture (formalised by Gilbert and Lynch, 2002) shows that a distributed system cannot simultaneously guarantee Consistency, Availability, and Partition tolerance. SMR prioritises CP (Consistency + Partition tolerance) at the cost of availability under partitions.
  - **[[Linearizability]]** — The strongest single-object consistency model (Herlihy and Wing, 1990); SMR provides linearisable semantics for the replicated state machine as a whole, making the cluster appear as a single atomic object to clients.
  - **Equivalence of SMR and Consensus** — Chandra and Toueg (1996) showed that solving consensus is equivalent to implementing total order broadcast, which in turn is the ordering component of SMR. These three problems are computationally equivalent.

- ### Relationships
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Fault Tolerance]]
  - requires:: [[Total Order Broadcast]]
  - requires:: [[Deterministic Execution]]
  - implements:: [[Paxos]]
  - implements:: [[Raft Consensus]]
  - implements:: [[Viewstamped Replication]]
  - implements:: [[Practical Byzantine Fault Tolerance]]
  - enables:: [[High Availability]]
  - enables:: [[Strong Consistency]]
  - enables:: [[Linearizability]]
  - enables:: [[Distributed Ledger]]
  - hasPart:: [[Leader Election]]
  - hasPart:: [[Log Replication]]
  - hasPart:: [[State Transfer]]
  - uses:: [[State Machine]]
  - uses:: [[Quorum]]
  - supports:: [[Blockchain]]
  - supports:: [[Distributed Database]]
  - supports:: [[Coordination Service]]
  - contrastsWith:: [[Primary-Backup Replication]]
  - contrastsWith:: [[Eventual Consistency]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Distributed AI Training]]
  - relatedTo:: [[Byzantine Fault Tolerance]]
  - relatedTo:: [[CAP Theorem]]
  - relatedTo:: [[Replication Protocol]]

- ### Standards & Context
  - SMR is not governed by a single formal standards body; it is codified primarily through academic literature and open-source reference implementations.
  - **Key papers**: Lamport (1998) "The Part-Time Parliament" (Paxos); Schneider (1990) "Implementing Fault-Tolerant Services Using the State Machine Approach"; Castro & Liskov (1999) PBFT; Ongaro & Ousterhout (2014) "In Search of an Understandable Consensus Algorithm" (Raft).
  - **IETF RFC 8628** and related RFCs address aspects of distributed consensus in network protocols; no single RFC defines SMR, but the IETF RAFT working group standardised Raft via multiple RFCs.
  - **NIST SP 800-204** series on microservices security discusses replicated state management as part of resilient architecture guidance.
  - Industry adoption is tracked through implementations in etcd (CNCF), Apache ZooKeeper (Apache Software Foundation), and consensus layers of major cloud providers.
  - The correctness of SMR implementations is formally verified using tools such as TLA+ (by Lamport), Coq, and Isabelle/HOL; the Raft paper includes a full TLA+ specification.

- ### Provenance
  - sources:: Schneider (1990) "Implementing Fault-Tolerant Services Using the State Machine Approach"; Lamport (1998) Paxos; Castro & Liskov (1999) PBFT; Ongaro & Ousterhout (2014) Raft
  - updated:: 2026-06-13
