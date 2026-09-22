public:: true

# Storage Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:storage-architecture",
  "@type": "Page",
  "vc:slug": "storage-architecture",
  "title": "Storage Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:storage-architecture",
  "@type": "Class",
  "label": "Storage Architecture",
  "definition": "Storage architecture is the structured design of how data is persisted, organised, and accessed across hardware and software layers, encompassing block, file, and object paradigms as well as tiering, replication, and consistency models. It defines the trade-offs between durability, latency, throughput, and cost for a given workload. Sound storage architecture underpins databases, data lakes, and distributed systems by matching access patterns to the right storage substrate.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-storage", "label": "Data Storage"},
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Storage architecture describes how a system lays out, replicates, and serves persistent data, choosing among block, file, and object models to balance durability, latency, and cost for its workloads. It is a foundational layer of [[Data Storage]].
- ### Content
  - A storage architecture specifies the physical media, abstraction layer, partitioning scheme, and replication strategy used to keep data available and consistent. Decisions such as hot/warm/cold tiering, erasure coding versus full replication, and synchronous versus asynchronous writes determine the system's recovery guarantees and performance envelope. Modern architectures increasingly separate compute from storage so that capacity and processing scale independently.
