public:: true

# CQRS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cqrs",
  "@type": "Page",
  "vc:slug": "cqrs",
  "title": "CQRS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cqrs",
  "@type": "Class",
  "label": "CQRS",
  "definition": "Command Query Responsibility Segregation (CQRS) is a software architecture pattern that separates the model used to update state (commands) from the model used to read state (queries). By using distinct write and read paths, systems can independently optimise, scale, and secure each side, often pairing the write model with event sourcing. It is commonly applied in high-throughput, complex-domain systems where read and write workloads diverge.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:data-layer", "label": "Data Layer"}, {"@id": "urn:ngm:class:crdt", "label": "CRDT"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - CQRS is an architectural pattern that splits write operations from read operations into separate models, allowing each to be tuned independently. It is frequently implemented within the [[Data Layer]] and pairs naturally with eventually-consistent structures like [[CRDT]].
- ### Content
  - Commands mutate aggregate state and emit events, while queries serve denormalised read models built for fast retrieval. The pattern trades increased complexity and eventual consistency for scalability, clearer domain boundaries, and the ability to project the same event stream into multiple specialised read stores.
