---
public: true
---

# Customer World Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:customer-world-model",
  "@type": "Page",
  "vc:slug": "customer-world-model",
  "title": "Customer World Model",
  "vc:public": true,
  "vc:outboundWikilinks": ["Financial Transaction Data", "Proprietary Data"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:customer-world-model",
  "@type": "Class",
  "label": "Customer World Model",
  "definition": "A proprietary, data-driven internal representation of a customer's or merchant's financial behavior and context, used to generate personalized insights and services.",
  "domain": "economics",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:world-model", "label": "World Model"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:world-model", "label": "World Model"}, {"@id": "urn:ngm:class:data", "label": "Data"}, {"@id": "urn:ngm:class:metadata", "label": "Metadata"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-new-ai-org-chart.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Block utilizes its proprietary transaction data from Cash App and Square to build a 'customer world model' that provides per-customer and per-merchant financial insights. *(Source: Jack Dorsey, Roelof Botha, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
