```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:domain-specific-llms",
  "@type": "Page",
  "vc:slug": "domain-specific-llms",
  "title": "Domain-Specific LLMs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Bitter Lesson",
    "Bloomberg GPT"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:domain-specific-llms",
  "@type": "Class",
  "label": "Domain-Specific LLMs",
  "definition": "Large language models that are pre-trained or fine-tuned on specialized corpora to achieve superior performance in a particular field, such as finance or law.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:vertical-ai-models",
        "label": "Vertical AI Models"
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
  - Bloomberg GPT, a 50-billion-parameter large language model purpose-built for finance, was outperformed by general-purpose models, illustrating the 'bitter lesson' that general methods leveraging computation are most effective. *(Source: Host (AI Daily Brief), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
