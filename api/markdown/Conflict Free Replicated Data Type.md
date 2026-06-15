public:: true

# Conflict Free Replicated Data Type
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:conflict-free-replicated-data-type",
  "@type": "Page",
  "title": "Conflict Free Replicated Data Type",
  "vc:slug": "conflict-free-replicated-data-type",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conflict-free-replicated-data-type",
  "@type": "Class",
  "label": "Conflict Free Replicated Data Type",
  "definition": "A conflict-free replicated data type (CRDT) is a data structure that can be replicated across many nodes and updated independently, with mathematical guarantees that all replicas converge to the same state once they have exchanged updates. By designing operations to be commutative or merges to be monotonic, CRDTs avoid the need for coordination or central conflict resolution. They are a foundational technique for offline-first and real-time collaborative distributed systems.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:eventual-consistency",
      "label": "Eventual Consistency"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operational-transformation",
        "label": "Operational Transformation"
      },
      {
        "@id": "urn:ngm:class:state-synchronisation",
        "label": "State Synchronisation"
      },
      {
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:state-synchronisation",
        "label": "State Synchronisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:operational-transformation",
        "label": "Operational Transformation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution"
      },
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
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
  - A [[Conflict Free Replicated Data Type]] implements [[Eventual Consistency]] using [[Replication]] and [[Vector Clock]]s to enable [[State Synchronisation]] and [[Conflict Resolution]].
- ### Overview
  - CRDTs let each replica accept updates locally and merge them later without ever producing a conflict that needs manual resolution.
  - They come in operation-based and state-based forms, both designed so concurrent updates commute or merge deterministically.
  - Because no coordination is required on the critical path, they are well suited to networks that are slow, partitioned or offline.
- ### Mechanisms
  - Commutative operations or join-semilattice merges that guarantee convergence.
  - Causal metadata such as vector clocks to order related updates.
  - Monotonic state growth so merges never lose committed information.
  - Garbage collection of tombstones to bound storage overhead.
- ### Applications
  - Real-time collaborative document and design editors.
  - Offline-first mobile and edge applications that sync later.
  - Distributed databases offering strong eventual consistency.
  - Peer-to-peer and local-first software architectures.
- ### Relationships
  - partOf:: [[Distributed Collaboration]]
  - partOf:: [[Distributed System]]
  - implements:: [[Eventual Consistency]]
  - uses:: [[Vector Clock]]
  - uses:: [[Replication]]
  - enables:: [[Operational Transformation]]
  - enables:: [[State Synchronisation]]
  - enables:: [[Conflict Resolution]]
  - supports:: [[Distributed Collaboration]]
  - supports:: [[State Synchronisation]]
  - dependsOn:: [[Replication]]
  - dependsOn:: [[Concurrency]]
  - requires:: [[Eventual Consistency]]
  - contrastsWith:: [[Operational Transformation]]
  - bridgesTo:: [[Distributed System]]
  - relatedTo:: [[Conflict Resolution]]
  - relatedTo:: [[Vector Clock]]
  - relatedTo:: [[Concurrency]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
