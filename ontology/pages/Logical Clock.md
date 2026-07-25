public:: true

# Logical Clock

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:logical-clock",
  "@type": "Page",
  "title": "Logical Clock",
  "vc:slug": "logical-clock",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:logical-clock",
  "@type": "Class",
  "label": "Logical Clock",
  "definition": "A logical clock is a mechanism for ordering events in a distributed system without relying on synchronised physical time. It assigns monotonically increasing counters to events so that causal relationships between them can be inferred, supporting the happened-before relation. Logical clocks underpin consistency, coordination and debugging in systems where no global wall-clock can be trusted.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems-theory",
      "label": "Distributed Systems Theory"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      },
      {
        "@id": "urn:ngm:class:time-synchronisation",
        "label": "Time Synchronisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems-theory",
        "label": "Distributed Systems Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      },
      {
        "@id": "urn:ngm:class:vector-clock",
        "label": "Vector Clock"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ]
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
  - A logical clock is a mechanism for ordering events in a distributed system without relying on synchronised physical time. It assigns monotonically increasing counters to events so that causal relationships between them can be inferred, supporting the happened-before relation. Logical clocks underpin consistency, coordination and debugging in systems where no global wall-clock can be trusted.
  - Related: [[Distributed Systems Theory]] [[Concurrency]] [[Vector Clock]] [[Timestamp]]
- ### Overview
  - Logical clocks were introduced to reason about ordering when physical clocks drift and message delays are unbounded. Lamport-style scalar clocks provide a total order consistent with causality, while vector clocks capture concurrency precisely by tracking per-process counters.
- ### Mechanisms
  - Each process maintains a counter incremented on local events
  - Counters are piggybacked on outgoing messages
  - Receivers advance their counter past the received value
  - The happened-before relation is preserved by counter monotonicity
  - Vector clocks extend the idea to detect concurrent events
- ### Applications
  - Event ordering in replicated databases and logs
  - Detecting causal dependencies for conflict resolution
  - Distributed snapshots and consistent checkpoints
  - Debugging and tracing of distributed executions
- ### Relationships
  - subClassOf:: [[Distributed Systems Theory]]
  - contrastsWith:: [[Timestamp]]
  - contrastsWith:: [[Time Synchronisation]]
  - hasPart:: [[Vector Clock]]
  - uses:: [[Concurrency]]
  - partOf:: [[Distributed Systems Theory]]
  - enables:: [[Consensus]]
  - supports:: [[Distributed Computing]]
  - supports:: [[Distributed Systems]]
  - requires:: [[Concurrency]]
  - relatedTo:: [[Timestamp]]
  - relatedTo:: [[Vector Clock]]
  - relatedTo:: [[Distributed Systems]]
  - bridgesTo:: [[Consensus]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
