public:: true

# Domain Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:domain-model",
  "@type": "Page",
  "vc:slug": "domain-model",
  "title": "Domain Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:domain-model",
  "@type": "Class",
  "label": "Domain Model",
  "definition": "A Domain Model is a conceptual representation of the entities, attributes, relationships, and rules of a particular problem domain, independent of any specific software implementation. It captures the shared vocabulary and structural constraints that stakeholders agree describe the domain, serving as a blueprint for data schemas, APIs, and system behaviour. Standardised domain models enable interoperability by giving distinct systems a common semantic reference.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:etsi-metaverse-domain-model", "label": "ETSI Metaverse Domain Model"}, {"@id": "urn:ngm:class:data-layer", "label": "Data Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Domain Model is an abstract, implementation-independent description of the entities, relationships, and rules of a problem domain. It anchors a system's [[Data Layer]] and underpins standardised references such as the [[ETSI Metaverse Domain Model]].
- ### Content
  - Domain models express the ubiquitous language of a domain, mapping concepts to classes, attributes, and associations with explicit constraints. They guide schema design and API contracts, and when published as standards they let independent systems exchange data with shared meaning.
