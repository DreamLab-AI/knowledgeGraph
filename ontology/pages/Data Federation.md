public:: true

# Data Federation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-federation",
  "@type": "Page",
  "vc:slug": "data-federation",
  "title": "Data Federation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-federation",
  "@type": "Class",
  "label": "Data Federation",
  "definition": "Data federation is a data integration technique that presents multiple distributed and heterogeneous data sources as a single virtual database queryable in place, without physically moving or copying the data. A federation engine decomposes queries, pushes work to source systems and combines results on the fly. It enables real-time unified access and is a core mechanism behind data virtualization and integration interfaces.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-virtualization", "label": "Data Virtualization"},
      {"@id": "urn:ngm:class:data-integration-interface", "label": "Data Integration Interface"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data federation exposes many distributed sources as one virtual queryable database, the underlying mechanism for [[Data Virtualization]] and a [[Data Integration Interface]] that avoids copying data.
- ### Content
  - A federation layer parses a query, splits it into source-specific subqueries pushed down for execution, and joins the returned results. The trade-off is query-time latency and source-system load versus the agility of avoiding bulk ETL and duplicate storage.
