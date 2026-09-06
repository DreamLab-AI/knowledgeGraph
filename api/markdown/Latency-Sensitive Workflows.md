---
public: true
---

# Latency-Sensitive Workflows
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:latency-sensitive-workflows",
  "@type": "Page",
  "vc:slug": "latency-sensitive-workflows",
  "title": "Latency-Sensitive Workflows",
  "vc:public": true,
  "vc:outboundWikilinks": ["Model Tradeoffs", "Synchronous Coding"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:latency-sensitive-workflows",
  "@type": "Class",
  "label": "Latency-Sensitive Workflows",
  "definition": "User interactions and tasks where the speed of AI response is a critical factor in usability and value, such as real-time coding assistance or interactive dialogue.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:ai-inference", "label": "AI Inference"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:inference-speed", "label": "Inference Speed"}, {"@id": "urn:ngm:class:ai-inference", "label": "AI Inference"}, {"@id": "urn:ngm:class:model-tradeoffs", "label": "Model Tradeoffs"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "how-to-help-ai-do-your-work-better.md"
  }
}
```

- ### Overview
  - **[Emerging signal]** For partially synchronous coding tasks where users interact directly with the agent's output, the speed boost from models like Gemini 3.7 Flash could justify a slightly higher price tag even if performance is lower than frontier models. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
