```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-inference-costs",
  "@type": "Page",
  "vc:slug": "ai-inference-costs",
  "title": "AI Inference Costs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Enterprise AI Budgets",
    "Goldman Sachs"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-inference-costs",
  "@type": "Class",
  "label": "AI Inference Costs",
  "definition": "The financial expenditure associated with executing trained AI models on production workloads, encompassing compute, memory, and latency trade-offs.",
  "domain": "economics",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-inference",
      "label": "AI Inference"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-inference",
        "label": "AI Inference"
      },
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-ai-subsidy-era-is-over.md"
  }
}
```

- ### Overview
  - Goldman Sachs reported that companies are exceeding their AI inference budgets by orders of magnitude, with inference costs approaching 10% of total headcount costs. *(Source: Goldman Sachs (via Hedgeye Markets), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
