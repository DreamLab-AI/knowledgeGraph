```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-router",
  "@type": "Page",
  "vc:slug": "model-router",
  "title": "Model Router",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Inference Optimization",
    "Meta AI Labs",
    "Switchboard"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-router",
  "@type": "Class",
  "label": "Model Router",
  "definition": "An inference-time orchestration component that dynamically selects and directs tasks to the most appropriate AI model based on complexity, cost, or performance requirements.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model",
      "label": "Model"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "just-how-good-is-gpt-6-going-to-be.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Meta's internal incubator, AI Labs, is developing a model router called Switchboard to automatically route low-complexity tasks to cheaper models. *(Source: The Information (via AI Daily Brief host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
