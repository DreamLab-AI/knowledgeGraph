public:: true

# Strong Consistency

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:strong-consistency",
  "@type": "Page",
  "title": "Strong Consistency",
  "vc:slug": "strong-consistency",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:strong-consistency",
  "@type": "Class",
  "label": "Strong Consistency",
  "definition": "Strong consistency is a property of a distributed data system in which every read returns the result of the most recently completed write, so that all clients observe a single, up-to-date view of the data. It typically corresponds to linearizability, where operations appear to take effect instantaneously at some point between their invocation and response. Achieving strong consistency requires coordination such as consensus and, under the CAP theorem, trades availability for consistency during network partitions.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:linearizability",
        "label": "Linearizability"
      },
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:total-order-broadcast",
        "label": "Total Order Broadcast"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:raft",
        "label": "Raft"
      },
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
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
  - Strong consistency is a property of a distributed data system in which every read returns the result of the most recently completed write, so that all clients observe a single, up-to-date view of the data. It typically corresponds to linearizability, where operations appear to take effect instantaneously at some point between their invocation and response. Achieving strong consistency requires coordination such as consensus and, under the CAP theorem, trades availability for consistency during network partitions.
  - Related concepts: [[Linearizability]], [[Eventual Consistency]], [[CAP Theorem]], [[Consensus]], [[Distributed Systems]].
- ### Overview
  - Strong consistency gives applications the illusion of a single, non-replicated data store despite the system being distributed across many replicas.
  - It contrasts sharply with [[Eventual Consistency]], which permits temporary divergence between replicas in exchange for higher availability.
  - Under the [[CAP Theorem]], a strongly consistent system sacrifices availability when partitioned.
- ### Key aspects
  - Linearizable reads and writes: operations respect real-time ordering.
  - Coordination cost: requires a [[Quorum]] or consensus round per operation, adding latency.
  - Single-copy semantics: replicas behave as one logical object.
  - Partition behaviour: prioritises correctness over availability.
  - Implementation: usually built atop [[Total Order Broadcast]] and a [[Consensus Algorithm]].
- ### Applications
  - Financial ledgers and inventory systems where stale reads are unacceptable.
  - Distributed locking, leader election, and configuration stores.
  - Coordination services such as etcd and ZooKeeper-style systems.
  - Strongly consistent metadata layers for replicated databases.
- ### Relationships
  - contrastsWith:: [[Eventual Consistency]]
  - enables:: [[Linearizability]]
  - enables:: [[State Machine Replication]]
  - relatedTo:: [[CAP Theorem]]
  - relatedTo:: [[Replication]]
  - requires:: [[Consensus]]
  - requires:: [[Consensus Algorithm]]
  - requires:: [[Quorum]]
  - dependsOn:: [[Total Order Broadcast]]
  - uses:: [[Raft]]
  - uses:: [[Paxos]]
  - bridgesTo:: [[Distributed Systems]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
