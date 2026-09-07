```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-fine-tuning",
  "@type": "Page",
  "vc:slug": "model-fine-tuning",
  "title": "Model Fine-Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Compute Allocation",
    "Open-Source Base Models"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-fine-tuning",
  "@type": "Class",
  "label": "Model Fine-Tuning",
  "definition": "The process of further training a pre-trained machine learning model on a specific dataset to adapt its general capabilities to a particular task or domain.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-training",
      "label": "Model Training"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model",
        "label": "Model"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-era-of-vertical-ai-models.md"
  }
}
```

- ### Overview
  - Cursor's Dev Relations rep Lee Robinson confirmed that Composer 2 started from an open-source base, with only a quarter of the compute spent on the final model coming from the base and the rest from their own training. *(Source: Lee Robinson (Cursor Dev Relations), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
