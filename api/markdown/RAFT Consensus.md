public:: true

# raft consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:702f0d6b4ace2f1b4918e680c4ead0d1d9fc23bff6d59fcff6e7ec098549fa83",
  "@type": "Page",
  "vc:slug": "raft-consensus",
  "title": "raft consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:raft-consensus",
  "@type": "Class",
  "label": "RAFT Consensus",
  "definition": "Raft is a distributed consensus algorithm designed as a more understandable alternative to Paxos, decomposing consensus into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster elects a single leader by majority vote during which followers grant a term-limited mandate; the leader receives all client writes, appends them to its log, and replicates them to followers, committing entries once a quorum acknowledges receipt. Raft guarantees that committed entries are never lost as long as a majority of nodes remain connected, providing crash fault tolerance but not Byzantine fault tolerance.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Blockchain Protocol and Consensus"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:state-machine-replication", "label": "State Machine Replication"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Raft is a distributed consensus algorithm designed as a more understandable alternative to Paxos, decomposing consensus into three relatively independent sub-problems: leader election, log replication, and safety. A Raft cluster elects a single leader by majority vote during which followers grant a term-limited mandate; the leader receives all client writes, appends them to its log, and replicates them to followers, committing entries once a quorum acknowledges receipt. Raft guarantees that committed entries are never lost as long as a majority of nodes remain connected, providing crash fault tolerance but not Byzantine fault tolerance.

- ### Semantic Classification
  - owl-class:: raft-consensus:RAFT Consensus
  - owl-role:: Concept

- ### Relationships
  - requires [[Consensus Algorithm]]
  - requires [[Distributed System]]
  - enables [[State Machine Replication]]
  - enables [[Fault Tolerance]]
  - contrastsWith [[Byzantine Fault Tolerance]]
  - relatedTo [[Distributed Ledger]]

- ### Content
  - Raft was introduced by Diego Ongaro and John Ousterhout in 2014 specifically to address the perceived understandability problem of Paxos, which is notoriously difficult to implement correctly from its original description. Raft's key design decisions include: strong leader (all log entries flow through the leader, simplifying consistency reasoning); randomised election timeouts (each follower waits a random duration before starting an election, avoiding split-vote livelock); and log matching (if two logs have an entry with the same index and term, all entries up to that index are identical).
  - Leader election proceeds by term number: when a follower detects a leader timeout, it increments its current term and sends RequestVote RPCs to peers. A candidate wins if it receives votes from a majority of the cluster; a node votes for a candidate only if the candidate's log is at least as up-to-date as its own, ensuring that elected leaders always hold all committed entries. Once elected, the leader sends periodic AppendEntries RPCs (heartbeats) to prevent follower timeouts.
  - Raft is widely deployed in production distributed systems: etcd (the Kubernetes configuration store), CockroachDB, TiKV (TiDB's storage engine), and Consul all use Raft-based consensus. Permissioned blockchain frameworks such as Hyperledger Fabric support Raft as an ordering service consensus mechanism for crash fault-tolerant deployments. For Byzantine fault-tolerant environments (where nodes may behave arbitrarily or maliciously), alternative algorithms such as PBFT, HotStuff, or Tendermint are required instead.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
