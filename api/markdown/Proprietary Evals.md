---
public: true
---

# Proprietary Evals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proprietary-evals",
  "@type": "Page",
  "vc:slug": "proprietary-evals",
  "title": "Proprietary Evals",
  "vc:public": true,
  "vc:outboundWikilinks": ["Intercom Apex", "Vertical AI Models"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proprietary-evals",
  "@type": "Class",
  "label": "Proprietary Evals",
  "definition": "Internal, non-public evaluation benchmarks and datasets used by AI developers to measure and optimize model performance on specific, often domain-specific, tasks.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model", "label": "Model"}, {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-era-of-vertical-ai-models.md"
  }
}
```

- ### Overview
  - Intercom's Chief Product Officer Paul Adams announced a new model called Apex for Finn, claiming it has a higher resolution rate, fewer hallucinations, and is far cheaper than any other model, enabled by domain-specific proprietary evals from billions of interaction data points. *(Source: Paul Adams (Intercom CPO), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
