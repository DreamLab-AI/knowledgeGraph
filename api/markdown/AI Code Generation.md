---
public: true
---

# AI Code Generation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-code-generation",
  "@type": "Page",
  "vc:slug": "ai-code-generation",
  "title": "AI Code Generation",
  "vc:public": true,
  "vc:outboundWikilinks": ["Claude tag", "Slack Integration"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-code-generation",
  "@type": "Class",
  "label": "AI Code Generation",
  "definition": "The use of artificial intelligence models to automatically produce, complete, or refactor source code based on natural language prompts or context.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:model", "label": "Model"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model", "label": "Model"}, {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "meet-your-ad-hoc-ai-licensing-regime.md"
  }
}
```

- ### Overview
  - Anthropic reported that 65% of their code now originates from people describing requirements in Slack via the Claude tag integration. *(Source: Anthropic (via podcast host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
