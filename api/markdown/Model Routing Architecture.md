---
public: true
---

# Model Routing Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-routing-architecture",
  "@type": "Page",
  "vc:slug": "model-routing-architecture",
  "title": "Model Routing Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": ["Harvey AI", "Inference Optimization"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-routing-architecture",
  "@type": "Class",
  "label": "Model Routing Architecture",
  "definition": "A system design pattern that dynamically directs inference requests to different AI models based on task complexity, cost, or performance requirements to optimize overall efficiency.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:model-architecture", "label": "Model Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model", "label": "Model"}, {"@id": "urn:ngm:class:model-architecture", "label": "Model Architecture"}, {"@id": "urn:ngm:class:inference", "label": "Inference"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-models-trying-to-replace-fable.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Harvey's experiment with a 'worker advisor' architecture, where an open-weight GLM 5.1 worker delegates high-stakes tasks to a closed Opus 4.7 advisor, resulted in increased performance at a lower cost than using Opus 4.7 alone. *(Source: Harvey (cited by AI Daily Brief host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
