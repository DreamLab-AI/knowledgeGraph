public:: true

# Data Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-model",
  "@type": "Page",
  "vc:slug": "data-model",
  "title": "Data Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-model",
  "@type": "Class",
  "label": "Data Model",
  "definition": "A data model is an abstract specification of how data elements are structured, related and constrained within a domain or system. It defines entities, attributes, relationships and integrity rules at conceptual, logical or physical levels of abstraction. Data models are prerequisites for metadata standards and for designing storage, exchange and querying of data.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"},
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data model is an abstract specification of entities, attributes, relationships and constraints in a domain, a foundation for any [[Metadata Standard]] within the [[Data Management Domain]].
- ### Content
  - Models progress from conceptual diagrams of business entities, through logical schemas independent of technology, to physical implementations tuned for a specific engine. Choosing relational, hierarchical, graph or document modelling shapes how data is queried, validated and evolved.
