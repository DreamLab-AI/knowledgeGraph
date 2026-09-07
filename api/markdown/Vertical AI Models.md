```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vertical-ai-models",
  "@type": "Page",
  "vc:slug": "vertical-ai-models",
  "title": "Vertical AI Models",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Customer Service AI",
    "Intercom Apex",
    "Intercom Finn",
    "Proprietary Evals"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vertical-ai-models",
  "@type": "Class",
  "label": "Vertical AI Models",
  "definition": "Machine learning models specifically trained and optimized for a particular industry or narrow domain, such as customer service or finance, to outperform general-purpose models on domain-specific tasks.",
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
  - Intercom's CEO Eoin MacCarron stated that their new customer service model, Finn, is the highest performing, fastest, and cheapest model for customer service, beating GPT-4 and Opus 4.5. *(Source: Eoin MacCarron (Intercom CEO), via AI Daily Brief, 2026-08-24)*
  - Intercom's Chief Product Officer Paul Adams announced a new model called Apex for Finn, claiming it has a higher resolution rate, fewer hallucinations, and is far cheaper than any other model, enabled by domain-specific proprietary evals from billions of interaction data points. *(Source: Paul Adams (Intercom CPO), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
