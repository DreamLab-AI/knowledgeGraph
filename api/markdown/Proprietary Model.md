```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proprietary-model",
  "@type": "Page",
  "vc:slug": "proprietary-model",
  "title": "Proprietary Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Alibaba",
    "Qwen 3.6"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proprietary-model",
  "@type": "Class",
  "label": "Proprietary Model",
  "definition": "A machine learning model whose weights, architecture, and training data are owned by a specific entity and distributed under restrictive licensing terms, as opposed to open-source or open-weight models.",
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
    "episode": "the-calm-before-the-agi-storm.md"
  }
}
```

- ### Overview
  - Alibaba released Qwen 3.6, a proprietary model that ranked number one on Open Router and became the first model to serve a trillion tokens on release day, as part of a strategic shift from open-source to proprietary models to maximize revenue. *(Source: Host (AI Daily Brief), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
