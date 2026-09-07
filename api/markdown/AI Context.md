```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-context",
  "@type": "Page",
  "vc:slug": "ai-context",
  "title": "AI Context",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "AI Deputization",
    "Model Capability"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-context",
  "@type": "Class",
  "label": "AI Context",
  "definition": "The specific, often private or situational information required by an AI model to perform tasks effectively for a particular user, representing a critical bottleneck in AI deployment beyond raw model capability.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
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
  - **[Industry analysis]** The primary bottleneck in AI deployment has shifted from model capability to access to context, meaning models often lack the specific information needed to perform tasks well relative to individual users. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
