---
public: true
---

# Hallucination Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hallucination-rate",
  "@type": "Page",
  "vc:slug": "hallucination-rate",
  "title": "Hallucination Rate",
  "vc:public": true,
  "vc:outboundWikilinks": ["Model Performance Metrics", "Resolution Rate"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hallucination-rate",
  "@type": "Class",
  "label": "Hallucination Rate",
  "definition": "A quantitative metric measuring the frequency with which a generative AI model produces factually incorrect or fabricated information.",
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
  - Intercom's CEO Eoin MacCarron reported that the Apex model has a 2.8% higher resolution rate and a 65% reduction in hallucinations compared to other available models. *(Source: Eoin MacCarron (Intercom CEO), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
