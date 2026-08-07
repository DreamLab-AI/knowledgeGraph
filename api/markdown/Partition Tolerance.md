public:: true

# Partition Tolerance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1de6fcb11015f78fd632b8b6d9168536e83fe2d636b31442c05a47ee329dcee7",
  "@type": "Page",
  "vc:slug": "partition-tolerance",
  "title": "Partition Tolerance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cap-theorem",
      "vc:label": "CAP Theorem"
    },
    {
      "@id": "urn:visionflow:linked:fault-tolerance",
      "vc:label": "Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:eventual-consistency",
      "vc:label": "Eventual Consistency"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:partition-tolerance",
  "@type": "Class",
  "label": "Partition Tolerance",
  "definition": "The property of a distributed system that allows it to continue operating correctly when the network splits into components that cannot communicate with one another, so that messages between nodes are arbitrarily delayed or lost. As the P in the CAP theorem, partition tolerance is effectively mandatory over real networks, forcing designers to choose during a partition between refusing requests to preserve consistency and serving them to preserve availability at the cost of divergent replicas.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:fault-tolerance",
    "label": "Fault Tolerance"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      },
      {
        "@id": "urn:ngm:class:consistency-model",
        "label": "Consistency Model"
      },
      {
        "@id": "urn:ngm:class:replication-protocol",
        "label": "Replication Protocol"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The property of a distributed system that allows it to continue operating correctly when the network splits into components that cannot communicate with one another, so that messages between nodes are arbitrarily delayed or lost. As the P in the CAP theorem, partition tolerance is effectively mandatory over real networks, forcing designers to choose during a partition between refusing requests to preserve consistency and serving them to preserve availability at the cost of divergent replicas."

- ### Semantic Classification
  - owl-class:: distributed-systems:PartitionTolerance
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Fault Tolerance]]
  - part-of:: [[CAP Theorem]]
  - related-to:: [[Eventual Consistency]]
  - related-to:: [[Consistency Model]]

- ### Content

  ## Definition

  **Partition tolerance** is a distributed system's ability to keep functioning when the network partitions — that is, when node failures or link failures divide the cluster into groups that can talk internally but not to each other. During a partition, each side has no way to distinguish "the other nodes are slow" from "the other nodes are unreachable" from "the other nodes are dead"; the asynchronous network model makes these cases indistinguishable in bounded time.

  In the [[CAP Theorem]], as formalised by Gilbert and Lynch (2002) from Brewer's conjecture, partition tolerance is one of three properties — with linearisable consistency and availability — of which a system can guarantee only two. The practical reading, argued influentially by Brewer himself and by Kleppmann, is that P is not optional: real networks partition, so the actual design decision is what to *sacrifice while a partition is in progress*. CP systems (e.g. etcd, ZooKeeper, Spanner) make the minority side refuse or stall requests, preserving a single consistent history; AP systems (e.g. Dynamo-style stores, Cassandra, CRDT-based collaboration engines) keep every side writable and reconcile afterwards, accepting [[Eventual Consistency]] and the need for conflict resolution.

  Partition handling is therefore intertwined with the [[Consistency Model]] and the replication design: quorum protocols such as Raft and Paxos survive minority partitions by construction, while leaderless replication uses techniques such as sloppy quorums, hinted handoff, vector clocks, and merge functions to absorb partitions gracefully. The PACELC refinement extends the analysis to normal operation: even without partitions, systems trade latency against consistency.

  ## Technical Details

  - **Failure model**: partitions arise from switch and router faults, misconfiguration, congestion, garbage-collection pauses, and cloud availability-zone outages. Studies of production networks (e.g. Bailis and Kingsbury's "The Network is Reliable") document partitions as routine, not exotic.
  - **CP behaviour**: quorum-based consensus continues on the majority side; the minority side loses liveness. Systems expose this as leader elections, fencing tokens, and read leases.
  - **AP behaviour**: divergent replicas must be reconciled — last-writer-wins (lossy), application-level merge, or CRDTs, which guarantee convergence by making all operations commutative.
  - **Split-brain**: the pathological failure of partition handling, where two sides both believe they hold the lease or leadership and accept conflicting writes; prevented with quorums, fencing, and STONITH-style mechanisms.
  - **Testing**: partition tolerance claims are routinely falsified in practice; Jepsen's fault-injection testing has documented consistency violations under partition in dozens of widely used databases, making partition testing part of modern release engineering.
