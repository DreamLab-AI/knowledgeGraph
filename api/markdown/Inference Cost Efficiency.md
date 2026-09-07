```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inference-cost-efficiency",
  "@type": "Page",
  "vc:slug": "inference-cost-efficiency",
  "title": "Inference Cost Efficiency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Bridgebench",
    "GLM 5.2"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inference-cost-efficiency",
  "@type": "Class",
  "label": "Inference Cost Efficiency",
  "definition": "The optimization of computational resources and financial expenditure required to execute AI model predictions, often measured by cost per token or latency.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:inference",
      "label": "Inference"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model",
        "label": "Model"
      },
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
    "episode": "the-models-trying-to-replace-fable.md"
  }
}
```

- ### Overview
  - ZAI's GLM 5.2 model achieved a ranking of number one on Bridgebench and reasoning benchmarks, reportedly beating Fable 5 at one-tenth of the cost and 300 tokens per second. *(Source: Bridge Mind AI (cited by AI Daily Brief host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
