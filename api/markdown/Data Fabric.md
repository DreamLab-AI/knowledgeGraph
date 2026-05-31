public:: true

# Data Fabric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-fabric",
  "@type": "Page",
  "vc:slug": "data-fabric",
  "title": "Data Fabric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-fabric",
  "@type": "Class",
  "label": "Data Fabric",
  "definition": "A data fabric is an architectural approach that provides a unified, metadata-driven layer for accessing, integrating and governing data across heterogeneous and distributed sources. It uses active metadata, knowledge graphs and automation to connect data without forcing physical consolidation. By abstracting underlying systems it delivers consistent discovery, access and governance, reducing the friction of fragmented data estates.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data fabric is a unified metadata-driven integration and governance layer over distributed data sources, leveraging [[Metadata Management]] and knowledge graphs to connect data without physical consolidation.
- ### Content
  - The fabric relies on active metadata and machine learning to recommend integrations, enforce policy and automate access across clouds and systems. It contrasts with data mesh by emphasising a technology-led integration layer rather than domain-oriented ownership.
