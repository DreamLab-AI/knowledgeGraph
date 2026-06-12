public:: true

elevatedFrom:: [[json]]
# JSON Data Interchange Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ea91b9bc96df05281051ab901705227f7550e6087e4a3c9913e8a399c3ec9b55",
  "@type": "Page",
  "vc:slug": "json-data-interchange-format",
  "title": "JSON Data Interchange Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "json"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-data-interchange-format",
  "@type": "Class",
  "label": "JSON Data Interchange Format",
  "definition": "JSON (JavaScript Object Notation) is a lightweight, human-readable data-interchange format derived from JavaScript object syntax. It provides a universal text-based representation for structured data using key-value pairs and ordered lists, serving as the predominant wire format for REST APIs, configuration files, and data-exchange layers in modern distributed systems and AI pipelines.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:json-data-interchange-format-data-interchange-format-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api-standard", "label": "API Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:json:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ea91b9bc96df05281051ab901705227f7550e6087e4a3c9913e8a399c3ec9b55"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - JSON (JavaScript Object Notation) is a lightweight, human-readable data-interchange format derived from JavaScript object syntax. It provides a universal text-based representation for structured data using key-value pairs and ordered lists, serving as the predominant wire format for REST APIs, configuration files, and data-exchange layers in modern distributed systems and AI pipelines.

- ### Semantic Classification
  - owl-class:: infrastructure:Json
  - owl-role:: Concept

- ### Relationships
  - enables [[JSON-LD]]
  - enables [[Knowledge Graph]]
  - uses [[API Standard]]
  - relatedTo [[Ontology]]

- ### Content
  - JSON is the de facto standard serialisation format for web APIs and data pipelines. Its simplicity and language-agnostic nature have made it the foundation for richer formats such as JSON-LD, which extends it with linked-data semantics and RDF compatibility.
  - [json optimised local model](https://huggingface.co/NousResearch/Hermes-2-Pro-Mistral-7B-GGUF)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
