public:: true

# Real-Time Synchronisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-synchronisation",
  "@type": "Page",
  "vc:slug": "real-time-synchronisation",
  "title": "Real-Time Synchronisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-synchronisation",
  "@type": "Class",
  "label": "Real-Time Synchronisation",
  "definition": "Real-time synchronisation is the continuous propagation of state changes across distributed participants so that all observers converge on a consistent, up-to-date view with minimal delay. It combines low-latency transport, conflict resolution, and clock or causal ordering to keep replicas aligned. It is essential for collaborative tools, multiplayer environments, and digital-twin mirroring.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration Domain"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Real-time synchronisation continuously propagates state so distributed participants share a consistent, current view. It is a constituent part of the [[Distributed Collaboration Domain]] and of [[Digital Twin]] state mirroring.
- ### Content
  - Synchronisation must handle concurrent updates, network partitions, and ordering, using techniques such as CRDTs, operational transformation, vector clocks, or authoritative-server reconciliation. The central trade-off is between strong consistency and low latency; interactive systems favour eventual consistency with client-side prediction to mask network delay.
