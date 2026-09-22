public:: true

# FAIR Data Principles
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fair-data-principles",
  "@type": "Page",
  "vc:slug": "fair-data-principles",
  "title": "FAIR Data Principles",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fair-data-principles",
  "@type": "Class",
  "label": "FAIR Data Principles",
  "definition": "The FAIR Data Principles are a set of guidelines stating that scientific and research data should be Findable, Accessible, Interoperable, and Reusable by both humans and machines. They emphasise persistent identifiers, rich machine-readable metadata, standardised vocabularies, and clear usage licences to maximise the long-term value of data. FAIR is widely adopted in research-data management, open science, and knowledge-graph and ontology engineering.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology"},
      {"@id": "urn:ngm:class:metadata-schema", "label": "Metadata Schema"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The FAIR Data Principles require data to be Findable, Accessible, Interoperable, and Reusable, providing the governance foundation that a [[Domain Ontology]] and a [[Metadata Schema]] help operationalise. They are a cornerstone of modern [[Data Management]].
- ### Content
  - Implementing FAIR relies on persistent identifiers (e.g. DOIs), structured machine-readable metadata, shared ontologies for interoperability, and explicit licences and provenance for reuse. The principles are pivotal in linked-data and semantic-web contexts, where ontologies and metadata schemas turn raw datasets into interconnected, queryable resources.
