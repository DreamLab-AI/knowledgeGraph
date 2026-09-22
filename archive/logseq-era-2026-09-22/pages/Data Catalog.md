public:: true

# Data Catalog
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-catalog",
  "@type": "Page",
  "vc:slug": "data-catalog",
  "title": "Data Catalog",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-catalog",
  "@type": "Class",
  "label": "Data Catalog",
  "definition": "A data catalog is a centralised, searchable inventory of an organisation's data assets enriched with metadata, descriptions, ownership and usage context. It enables discovery, governance and self-service analytics by indexing datasets, schemas and their relationships, often integrating glossaries and lineage. As a component of metadata management and data fabric architectures it is essential for finding and trusting data at scale.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:data-fabric-architecture", "label": "Data Fabric Architecture"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data catalog is a searchable metadata-driven inventory of data assets that underpins [[Metadata Management]] and [[Data Fabric Architecture]] for discovery and governance.
- ### Content
  - Catalogs harvest technical and business metadata, tag assets with ownership and sensitivity, and expose search, lineage and glossary capabilities. They are the discovery layer that lets analysts and stewards locate, evaluate and govern data without manual tribal knowledge.
