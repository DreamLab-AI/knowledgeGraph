---
public: true
---

# Usage-Based Pricing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:usage-based-pricing",
  "@type": "Page",
  "vc:slug": "usage-based-pricing",
  "title": "Usage-Based Pricing",
  "vc:public": true,
  "vc:outboundWikilinks": ["AI Token Billing", "SaaS Business Model"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:usage-based-pricing",
  "@type": "Class",
  "label": "Usage-Based Pricing",
  "definition": "A pricing strategy where customers are charged based on the actual consumption of a service or resource, such as compute time, API calls, or data tokens, rather than a fixed periodic fee.",
  "domain": "economics",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:saas-business-model", "label": "SaaS Business Model"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ai-business-model", "label": "AI Business Model"}, {"@id": "urn:ngm:class:inference", "label": "Inference"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "is-openai-the-new-github.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Stripe's token billing feature will make usage-based pricing a viable and sustainable business model for AI apps by allowing tokens to be priced as a commodity to the end user. *(Source: Host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
