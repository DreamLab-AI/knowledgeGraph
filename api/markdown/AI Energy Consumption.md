```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-energy-consumption",
  "@type": "Page",
  "vc:slug": "ai-energy-consumption",
  "title": "AI Energy Consumption",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Human vs. Machine Intelligence",
    "Sam Altman"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-energy-consumption",
  "@type": "Class",
  "label": "AI Energy Consumption",
  "definition": "The total electrical power and computational resources required to train, deploy, and operate artificial intelligence models.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:energy-consumption",
      "label": "Energy Consumption"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-consumption",
        "label": "Energy Consumption"
      },
      {
        "@id": "urn:ngm:class:ai-model",
        "label": "AI Model"
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
    "episode": "the-anti-ai-movement.md"
  }
}
```

- ### Overview
  - Sam Altman stated in a public discussion that it takes a lot of energy to train a human, comparing it to the energy required to train an AI model, noting it takes '20 years of life and all the food you eat during that time before you get smart.' *(Source: Sam Altman, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
