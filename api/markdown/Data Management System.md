public:: true

# Data Management System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-management-system",
  "@type": "Page",
  "vc:slug": "data-management-system",
  "title": "Data Management System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-management-system",
  "@type": "Class",
  "label": "Data Management System",
  "definition": "A data management system is software that stores, organises, secures and provides controlled access to data throughout its lifecycle. It encompasses capabilities for ingestion, modelling, querying, integrity enforcement and governance, with database management systems and graph databases as common specialisations. It is the foundational platform on which metadata standards and downstream applications depend.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data management system is software for storing, organising and governing data across its lifecycle, with specialisations such as the [[Graph Database]] and supporting [[Metadata Standard]] adoption.
- ### Content
  - Such systems provide schema definition, transactional integrity, concurrency control, querying and access management. Variants are optimised for relational, document, key-value, graph or time-series workloads depending on the access patterns required.
