public:: true

# Raft
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:raft",
  "@type": "Page",
  "vc:slug": "raft",
  "title": "Raft",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:raft",
  "@type": "Class",
  "label": "Raft",
  "definition": "Raft is a distributed consensus algorithm designed explicitly for understandability, introduced by Diego Ongaro and John Ousterhout at USENIX ATC 2014 as a more comprehensible alternative to the Paxos family of protocols. Raft decomposes the consensus problem into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster maintains a replicated log of commands through a strong leader that serialises all writes; followers replicate the leader's log entries and redirect client requests. Leader election uses randomised timeouts to avoid split votes. Raft has become the dominant consensus algorithm in modern distributed systems infrastructure, underpinning etcd, CockroachDB, TiKV, Consul, and many other widely deployed systems.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:raft-consensus", "label": "RAFT Consensus"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:replicated-state-machine", "label": "Replicated State Machine"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:data-replication", "label": "Data Replication"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:quorum", "label": "Quorum"},
      {"@id": "urn:ngm:class:remote-procedure-call", "label": "Remote Procedure Call"},
      {"@id": "urn:ngm:class:heartbeat-mechanism", "label": "Heartbeat Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-system-architecture", "label": "Distributed System Architecture"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:fault-tolerant-system", "label": "Fault-Tolerant System"},
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"},
      {"@id": "urn:ngm:class:linearizability", "label": "Linearizability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerant-system", "label": "Byzantine Fault Tolerant System"},
      {"@id": "urn:ngm:class:paxos", "label": "Paxos"},
      {"@id": "urn:ngm:class:multi-paxos", "label": "Multi-Paxos"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:leader-election", "label": "Leader Election"},
      {"@id": "urn:ngm:class:log-replication", "label": "Log Replication"},
      {"@id": "urn:ngm:class:crash-fault-tolerance", "label": "Crash Fault Tolerance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:majority-quorum", "label": "Majority Quorum"},
      {"@id": "urn:ngm:class:persistent-storage", "label": "Persistent Storage"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:etcd", "label": "etcd"},
      {"@id": "urn:ngm:class:cockroachdb", "label": "CockroachDB"},
      {"@id": "urn:ngm:class:consul", "label": "Consul"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-consensus", "label": "Blockchain Consensus"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:raft-consensus-algorithm", "label": "Raft Consensus Algorithm"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Raft is a [[Consensus Algorithm]] for [[Distributed System]] environments that provides replicated state machine semantics through leader-based [[Data Replication]], designed to be significantly more understandable than Paxos whilst delivering equivalent safety and liveness guarantees.

- ### Relationships
  - Raft is a member of the [[Consensus Algorithm]] class and is closely related to the [[RAFT Consensus]] conceptual entry and the broader [[Consensus Protocol]] family. It is explicitly distinguished from [[Byzantine Fault Tolerance]] mechanisms: Raft assumes crash-stop failures only and cannot tolerate malicious or arbitrarily faulty nodes, unlike [[Byzantine Fault Tolerant System]] designs. Raft operates over [[Distributed System]] infrastructure and provides the [[Data Replication]] guarantees that underpin distributed databases and key-value stores. Deployments of Raft contribute to [[Distributed System Architecture]] patterns and, in some blockchain contexts, inform [[Distributed Ledger Technology]] consensus designs. The contrast with [[Byzantine Fault Tolerant System]] architectures is practically significant: Raft-based systems are simpler and more performant in trusted environments, but require supplementary security measures when deployed across untrusted network participants.

- ### Content
  - Raft was introduced in 2014 with a central goal explicitly stated in the paper title: "In Search of an Understandable Consensus Algorithm." The authors conducted user studies comparing understanding of Raft against Paxos and found statistically significant advantages for Raft comprehension, validating their design choices. The motivation for prioritising understandability was practical: consensus algorithms are notoriously difficult to implement correctly, and subtle bugs in consensus code can cause data loss in production systems.

  - The leader election mechanism in Raft uses terms, which are monotonically increasing logical time counters. Each server starts as a follower and transitions to candidate if it does not receive a heartbeat from a leader within a randomised election timeout period. A candidate requests votes from other servers; a server grants a vote to a candidate only if the candidate's log is at least as up-to-date as the voter's log. The randomised timeout ensures that in practice one server starts an election before others and wins with high probability, avoiding split vote scenarios that require retries.

  - Log replication is the core operation: the leader accepts client commands, appends them to its log, and sends AppendEntries RPC calls to all followers in parallel. A log entry is committed once a majority of servers have acknowledged storing it. This majority quorum guarantee means that any two majorities overlap in at least one server, ensuring that a newly elected leader always has all committed entries. The replicated log drives a deterministic state machine on each server, producing the replicated state machine semantics that make Raft useful as a coordination primitive.

  - The etcd key-value store, used as the primary data store for Kubernetes cluster state, implements Raft as its consensus backend and has made Raft one of the most battle-tested consensus implementations in production. CockroachDB uses Raft to replicate ranges of its distributed key-value store, with each range having its own Raft group, allowing fine-grained replication and fault-tolerance configuration. Consul uses Raft for its leader-elected agent coordination.

  - Raft has been extended by researchers and engineers to handle various practical concerns: multi-Raft allows many independent Raft groups to coexist efficiently in a single process, as used in TiKV; joint consensus mechanisms support cluster membership changes (adding or removing servers) without availability gaps; and pre-vote extensions reduce disruptive elections caused by network-isolated servers with stale terms. These extensions demonstrate the value of Raft's clear design as a foundation for controlled incremental complexity.
