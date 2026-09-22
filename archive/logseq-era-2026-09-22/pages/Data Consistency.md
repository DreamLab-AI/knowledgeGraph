public:: true

# Data Consistency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-consistency",
  "@type": "Page",
  "vc:slug": "data-consistency",
  "title": "Data Consistency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-consistency",
  "@type": "Class",
  "label": "Data Consistency",
  "definition": "Data consistency is the guarantee that data remains valid, coherent and in agreement across copies, transactions and nodes of a system. In distributed systems it spans a spectrum from strong consistency, where all readers observe the latest write, to eventual consistency, where replicas converge over time. It is a core correctness property traded off against availability and latency, and it underpins fault-tolerant data layers.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:data-layer", "label": "Data Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data consistency is the guarantee that data stays coherent across replicas and transactions, a property central to [[Fault Tolerance]] and a robust [[Data Layer]].
- ### Content
  - Consistency models range from linearisable strong consistency to eventual consistency, with the CAP theorem framing the trade-off against availability under partition. The chosen model shapes replication, conflict resolution and the correctness guarantees an application can rely on.
