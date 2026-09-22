public:: true

# Vector Clock
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-vector-clock",
  "@type": "Page",
  "vc:slug": "vector-clock",
  "title": "Vector Clock",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vector-clock",
  "@type": "Class",
  "label": "Vector Clock",
  "definition": "A vector clock is a data structure used in distributed systems to capture causal relationships between events across multiple nodes without relying on synchronised physical time. Each node maintains a counter for every other node in the system, incrementing its own counter on each local event and merging received counters on communication. By comparing vector timestamps, systems can determine whether events are causally related, concurrent, or ordered, which is fundamental for conflict detection and resolution in collaborative editing.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:operational-transformation", "label": "Operational Transformation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time-synchronisation", "label": "Real-Time Synchronisation"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A vector clock is a distributed systems mechanism that tracks causal ordering of events across nodes using per-node counters, enabling conflict detection and resolution in collaborative editing without requiring a global clock.
