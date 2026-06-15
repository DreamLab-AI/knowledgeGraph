public:: true

# Consistency Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:consistency-model",
  "@type": "Page",
  "title": "Consistency Model",
  "vc:slug": "consistency-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consistency-model",
  "@type": "Class",
  "label": "Consistency Model",
  "definition": "A consistency model is a contract between a distributed data store and its clients that specifies the guarantees about the visibility and ordering of reads and writes across replicas. It defines which outcomes of concurrent operations are permissible, ranging from strong models like linearizability that behave as a single up-to-date copy, to weak models like eventual consistency that allow temporary divergence. The chosen model shapes application correctness, performance, and the achievable balance among consistency, availability, and partition tolerance.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "Distributed Data Structure"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:strong-consistency",
        "label": "Strong Consistency"
      },
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      },
      {
        "@id": "urn:ngm:class:linearizability",
        "label": "Linearizability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:replication-protocol",
        "label": "Replication Protocol"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "requires": {
      "@id": "urn:ngm:class:replication-protocol",
      "label": "Replication Protocol"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      },
      {
        "@id": "urn:ngm:class:partition-tolerance",
        "label": "Partition Tolerance"
      },
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      }
    ],
    "constrains": {
      "@id": "urn:ngm:class:vector-clock",
      "label": "Vector Clock"
    },
    "supports": [
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      }
    ],
    "contrastsWith": {
      "@id": "urn:ngm:class:partition-tolerance",
      "label": "Partition Tolerance"
    },
    "uses": [
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Consistency Model]] is the visibility contract of a [[Distributed Data Structure]].
  - It is realised by a [[Replication Protocol]] and constrained by the [[CAP Theorem]].
  - Models span from [[Linearizability]] through [[Strong Consistency]] to [[Eventual Consistency]].
- ### Overview
  - A consistency model formalises which interleavings of operations clients may observe.
  - Strong models present the illusion of a single, instantaneously updated copy, simplifying reasoning at a latency cost.
  - Weak models permit replicas to diverge temporarily, favouring availability and low latency.
  - The CAP theorem forces a trade-off: under partition, a system must sacrifice strong consistency or availability.
- ### Key aspects
  - Linearizability — operations appear instantaneous and in a single global order respecting real time.
  - Sequential consistency — a single order consistent with each client's program order.
  - Causal consistency — operations causally related are seen in order; concurrent ones may differ.
  - Eventual consistency — replicas converge once updates cease, with no ordering guarantees in the interim.
  - Session guarantees — read-your-writes, monotonic reads, and similar per-client properties.
- ### Applications
  - Choosing storage guarantees for transactional versus high-availability workloads.
  - Designing globally distributed databases and caches.
  - Reasoning about correctness of replicated state machines and ledgers.
  - Configuring tunable consistency in systems like Cassandra and DynamoDB.
- ### Relationships
  - A consistency model governs distributed data structures and contrasts with the demands of partition tolerance.
  - partOf:: [[Distributed Data Structure]]
  - hasPart:: [[Strong Consistency]]
  - hasPart:: [[Eventual Consistency]]
  - hasPart:: [[Linearizability]]
  - dependsOn:: [[Replication Protocol]]
  - dependsOn:: [[Consensus Mechanism]]
  - requires:: [[Replication Protocol]]
  - enables:: [[Fault Tolerance]]
  - relatedTo:: [[CAP Theorem]]
  - relatedTo:: [[Partition Tolerance]]
  - relatedTo:: [[Vector Clock]]
  - constrains:: [[Vector Clock]]
  - supports:: [[State Machine Replication]]
  - contrastsWith:: [[Partition Tolerance]]
  - uses:: [[Vector Clock]]
  - uses:: [[Quorum]]
  - bridgesTo:: [[Distributed Systems]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
