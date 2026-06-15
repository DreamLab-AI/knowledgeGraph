public:: true

# Total Order Broadcast

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:total-order-broadcast",
  "@type": "Page",
  "title": "Total Order Broadcast",
  "vc:slug": "total-order-broadcast",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:total-order-broadcast",
  "@type": "Class",
  "label": "Total Order Broadcast",
  "definition": "Total order broadcast, also called atomic broadcast, is a communication primitive in distributed systems that guarantees all correct processes deliver the same set of messages in exactly the same order. It strengthens reliable broadcast with a total ordering property, ensuring that every replica observes an identical sequence of events. Total order broadcast is provably equivalent to consensus and forms the foundation of state machine replication.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      },
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:linearizability",
        "label": "Linearizability"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
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
    "dependsOn": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
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
  - Total order broadcast, also called atomic broadcast, is a communication primitive in distributed systems that guarantees all correct processes deliver the same set of messages in exactly the same order. It strengthens reliable broadcast with a total ordering property, ensuring that every replica observes an identical sequence of events. Total order broadcast is provably equivalent to consensus and forms the foundation of state machine replication.
  - Related concepts: [[Consensus]], [[State Machine Replication]], [[Distributed Systems]], [[Raft]], [[Paxos]].
- ### Overview
  - Total order broadcast provides agreement on both which messages are delivered and the order of delivery, which is the precise guarantee needed to replicate deterministic state machines.
  - It is mutually reducible to [[Consensus]]: a solution to one yields a solution to the other.
  - Protocols such as [[Raft]] and [[Paxos]] implement total order broadcast as their core ordering service.
- ### Mechanisms
  - Agreement: all correct processes deliver the same messages.
  - Total order: messages are delivered in an identical global sequence at every process.
  - Integrity and validity: each delivered message was previously broadcast.
  - Leader-based sequencing: a primary assigns sequence numbers, with [[Leader Election]] on failure.
  - Quorum replication: a [[Quorum]] of acknowledgements commits each ordered slot.
- ### Applications
  - Implementing [[State Machine Replication]] for fault-tolerant services.
  - Ordering transactions in a [[Distributed Ledger]] or replicated database.
  - Building strongly consistent key-value stores and configuration services.
  - Coordinating replicated logs across data centres.
- ### Relationships
  - relatedTo:: [[Consensus]]
  - relatedTo:: [[Consensus Algorithm]]
  - relatedTo:: [[Distributed Ledger]]
  - requires:: [[Fault Tolerance]]
  - requires:: [[Quorum]]
  - requires:: [[Leader Election]]
  - implements:: [[State Machine Replication]]
  - enables:: [[Linearizability]]
  - enables:: [[Replication]]
  - uses:: [[Paxos]]
  - uses:: [[Raft]]
  - dependsOn:: [[Byzantine Fault Tolerance]]
  - bridgesTo:: [[Distributed Systems]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
