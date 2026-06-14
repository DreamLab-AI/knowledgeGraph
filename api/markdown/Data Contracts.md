public:: true

# Data Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-contracts",
  "@type": "Page",
  "vc:slug": "data-contracts",
  "title": "Data Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-contracts",
  "@type": "Class",
  "label": "Data Contracts",
  "definition": "A data contract is a formal, versioned agreement between data producers and consumers that specifies the schema, semantics, quality guarantees and service-level expectations of a dataset or stream. It makes data interfaces explicit and enforceable, enabling automated validation and breaking-change detection in data pipelines. Data contracts are a metadata-management practice that improves reliability and trust across decentralised data ownership.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data contracts are formal versioned agreements defining a dataset's schema, semantics and quality guarantees, a [[Metadata Management]] practice that makes data interfaces explicit and enforceable.
- ### Content
  - By codifying expectations between producers and consumers, contracts allow pipelines to validate incoming data and detect breaking schema changes before they propagate. They are central to data-as-a-product and data-mesh approaches where ownership is distributed across teams.
