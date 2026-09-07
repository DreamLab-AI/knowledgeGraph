```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inference-speed",
  "@type": "Page",
  "vc:slug": "inference-speed",
  "title": "Inference Speed",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "AI Model Race",
    "Artificial Analysis",
    "Gemini 3.7 Flash",
    "Strategic Positioning"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inference-speed",
  "@type": "Class",
  "label": "Inference Speed",
  "definition": "The rate at which an AI model generates output tokens, typically measured in tokens per second, serving as a critical performance metric for user experience and latency-sensitive applications.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-performance",
      "label": "Model Performance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:ai-model",
        "label": "AI Model"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "how-to-help-ai-do-your-work-better.md"
  }
}
```

- ### Overview
  - Google's Gemini 3.7 Flash model ran at 340 tokens per second during testing by Artificial Analysis, making it more than twice as fast as GPT-5.6 Luna. *(Source: AI Daily Brief host citing Artificial Analysis testing, via AI Daily Brief, 2026-08-24)*
  - **[Emerging signal]** The 'model race' is branching out into multiple distinct competitions, including races for frontier capability, distribution, harnesses, revenue, and speed, with Google specifically betting that speed is a dimension users will pay attention to. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
