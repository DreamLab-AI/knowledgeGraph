public:: true

# Apache Iceberg
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:apache-iceberg",
  "@type": "Page",
  "vc:slug": "apache-iceberg",
  "title": "Apache Iceberg",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-iceberg",
  "@type": "Class",
  "label": "Apache Iceberg",
  "definition": "Apache Iceberg is an open table format for large analytic datasets stored in data lakes, adding database-like guarantees on top of object storage. It provides ACID transactions, schema and partition evolution, snapshot isolation, and time-travel queries by maintaining immutable metadata layers that track data files. Iceberg decouples the table format from the compute engine, letting Spark, Trino, Flink, and others operate consistently on the same tables.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Apache Iceberg is an open table format that brings ACID transactions, schema evolution, and time travel to data-lake files on [[Storage Infrastructure]]. It turns raw object storage into reliable, engine-agnostic tables.
- ### Content
  - Iceberg organizes data as immutable snapshots described by hierarchical metadata and manifest files, so writers add new files and atomically swap a metadata pointer rather than mutating in place. This enables concurrent readers and writers, hidden partitioning, and safe schema changes, and its open spec lets multiple query engines share one source of truth in the lakehouse.
