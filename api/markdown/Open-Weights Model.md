```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-weights-model",
  "@type": "Page",
  "vc:slug": "open-weights-model",
  "title": "Open-Weights Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "GLM 5.2",
    "Model Performance Comparison"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-weights-model",
  "@type": "Class",
  "label": "Open-Weights Model",
  "definition": "An artificial intelligence model whose learned parameters are publicly available for download, allowing users to inspect, modify, and deploy the model locally without relying on a proprietary API.",
  "domain": "artificial-intelligence",
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
        "@id": "urn:ngm:class:model",
        "label": "Model"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-5-minute-ai-weekly-recap-realignment-week.md"
  }
}
```

- ### Overview
  - Z.ai released GLM 5.2, which Jeremy Howard described as 'at least as good as Opus 48 and GPT 55' and 'super fast, inexpensive, and not too verbose.' *(Source: Jeremy Howard (via Latent Space and AI Daily Brief host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
