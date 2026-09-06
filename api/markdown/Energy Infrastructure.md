---
public: true
---

# Energy Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:energy-infrastructure",
  "@type": "Page",
  "vc:slug": "energy-infrastructure",
  "title": "Energy Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": ["Grid Demand Forecast", "PJM Interconnection"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:energy-infrastructure",
  "@type": "Class",
  "label": "Energy Infrastructure",
  "definition": "The physical systems and facilities, including power plants, transmission lines, and grids, required to generate, transmit, and distribute electricity.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}, {"@id": "urn:ngm:class:networking", "label": "Networking"}, {"@id": "urn:ngm:class:data-center-sustainability", "label": "Data Center Sustainability"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "more-ai-datacenter-community-commitments.md"
  }
}
```

- ### Overview
  - PJM Interconnection services more than 67 million people and is forecasting a 17% jump in peak demand across its system by 2030. *(Source: PJM Interconnection, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
