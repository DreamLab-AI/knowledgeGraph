public:: true

# Data Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-models",
  "@type": "Page",
  "vc:slug": "data-models",
  "title": "Data Models",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-models",
  "@type": "Class",
  "label": "Data Models",
  "definition": "Data models are the collected structural specifications that define how information is represented, related and constrained within a system or framework. In digital-twin and layered service architectures they describe the shape of state, telemetry and interactions exchanged between components. Well-defined data models are a prerequisite for interoperability, validation and consistent behaviour across service layers.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-twin-framework", "label": "Digital Twin Framework"},
      {"@id": "urn:ngm:class:service-layer", "label": "Service Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data models are the structural specifications of how information is represented and related, required by a [[Digital Twin Framework]] and by each [[Service Layer]] to ensure interoperability.
- ### Content
  - In a digital twin, data models define the synchronised representation of a physical asset's state and telemetry. Across layered architectures they provide the shared contracts that let services exchange and validate information consistently.
