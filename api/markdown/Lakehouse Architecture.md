public:: true

# Lakehouse Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lakehouse-architecture",
  "@type": "Page",
  "vc:slug": "lakehouse-architecture",
  "title": "Lakehouse Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lakehouse-architecture",
  "@type": "Class",
  "label": "Lakehouse Architecture",
  "definition": "Lakehouse architecture is a data management pattern that combines the low-cost, open storage of a data lake with the transactional reliability and performance of a data warehouse. It layers ACID transactions, schema enforcement and indexing over inexpensive object storage using open table formats such as Delta Lake, Apache Iceberg or Hudi. This unifies analytics, business intelligence and machine learning on a single copy of data.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Lakehouse architecture is a [[Data Management]] pattern that adds warehouse-grade transactions and governance to data-lake [[Storage Infrastructure]], enabling and relating directly to scalable object-store deployments.
- ### Content
  - Open table formats provide ACID guarantees, time travel, schema evolution and metadata-driven query optimisation directly over files in object storage. By eliminating the copy-and-sync between separate lake and warehouse tiers, the lakehouse reduces cost and staleness while serving SQL analytics and ML feature pipelines from one governed source.
