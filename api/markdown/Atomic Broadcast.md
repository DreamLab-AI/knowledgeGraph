public:: true

# Atomic Broadcast

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:atomic-broadcast",
  "@type": "Page",
  "title": "Atomic Broadcast",
  "vc:slug": "atomic-broadcast",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:atomic-broadcast",
  "@type": "Class",
  "label": "Atomic Broadcast",
  "definition": "Atomic broadcast (also called total-order broadcast) is a distributed communication primitive guaranteeing that all correct processes deliver the same set of messages in the same total order. It strengthens reliable broadcast with an ordering property, ensuring agreement on both the content and sequence of delivered messages. Atomic broadcast is equivalent in power to consensus and underpins state-machine replication.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      },
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:clock-synchronization",
        "label": "Clock Synchronization"
      },
      {
        "@id": "urn:ngm:class:blockchain-consensus",
        "label": "Blockchain Consensus"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      },
      {
        "@id": "urn:ngm:class:raft",
        "label": "Raft"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:crash-fault-tolerance",
        "label": "Crash Fault Tolerance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:byzantine-generals-problem",
        "label": "Byzantine Generals Problem"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
        "label": "Practical Byzantine Fault Tolerance"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Atomic broadcast delivers messages to all correct processes in one identical total order across a [[Distributed System]].
  - It is equivalent to [[Consensus]] and is the engine of [[State Machine Replication]].
  - It builds on reliable [[Message Passing]] under [[Fault Tolerance]] assumptions.
- ### Overview
  - Two safety properties: agreement (same messages) and total order (same sequence); plus validity and integrity.
  - Reducible to and from consensus, so it inherits the FLP impossibility under pure asynchrony.
  - Practical protocols layer ordering on Paxos, Raft, or PBFT cores.
- ### Mechanisms
  - Total-order delivery: a global sequence number per message.
  - Agreement: no two correct processes deliver different message sets.
  - Crash-tolerant variants (Paxos, Raft) versus Byzantine variants (PBFT, Tendermint).
  - Throughput and latency trade-offs via batching and pipelining.
- ### Applications
  - Replicated state machines and fault-tolerant databases.
  - Blockchain transaction ordering and consensus layers.
  - Coordination services such as configuration and lock managers.
  - Reliable group communication in clustered systems.
- ### Relationships
  - enables:: [[State Machine Replication]]
  - enables:: [[Replication]]
  - enables:: [[Consensus]]
  - requires:: [[Message Passing]]
  - requires:: [[Fault Tolerance]]
  - relatedTo:: [[Consensus]]
  - relatedTo:: [[Clock Synchronization]]
  - relatedTo:: [[Blockchain Consensus]]
  - uses:: [[Paxos]]
  - uses:: [[Raft]]
  - supports:: [[Byzantine Fault Tolerance]]
  - supports:: [[Crash Fault Tolerance]]
  - contrastsWith:: [[Byzantine Generals Problem]]
  - dependsOn:: [[Distributed System]]
  - bridgesTo:: [[Practical Byzantine Fault Tolerance]]
- ### Provenance
  - updated:: 2026-06-15
