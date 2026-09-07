```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-distillation",
  "@type": "Page",
  "vc:slug": "model-distillation",
  "title": "Model Distillation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Sanctions",
    "Scott Bessent",
    "US-China AI Policy"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-distillation",
  "@type": "Class",
  "label": "Model Distillation",
  "definition": "A knowledge transfer technique where a smaller student model is trained to mimic the output distributions or behavior of a larger teacher model to achieve comparable performance with reduced computational cost.",
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
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
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
  - **[Industry analysis]** US Treasury Secretary Scott Bessent threatened targeted sanctions against Chinese companies for distilling US large language models, framing the practice as IP theft. *(Source: Scott Bessent (via AI Daily Brief host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
