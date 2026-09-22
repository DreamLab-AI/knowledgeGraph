public:: true

# Transaction Manager
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:transaction-manager",
  "@type": "Page",
  "vc:slug": "transaction-manager",
  "title": "Transaction Manager",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transaction-manager",
  "@type": "Class",
  "label": "Transaction Manager",
  "definition": "A transaction manager is a software component that coordinates the atomic execution of operations against a database or distributed system, enforcing the ACID properties of atomicity, consistency, isolation, and durability. It governs commit and rollback, manages concurrency control and locking, and in distributed settings orchestrates multi-resource protocols such as two-phase commit.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:graph-database", "label": "Graph Database"}, {"@id": "urn:ngm:class:data-layer", "label": "Data Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A component that coordinates atomic, consistent, isolated, and durable execution of operations, governing commit, rollback, and concurrency. It is a core part of the [[Data Layer]] and of engines such as a [[Graph Database]].
- ### Content
  - Transaction managers use techniques like write-ahead logging, multiversion concurrency control, and lock managers to preserve correctness under concurrent access. In distributed databases they extend these guarantees across nodes via coordination protocols, balancing strict consistency against availability and latency.
