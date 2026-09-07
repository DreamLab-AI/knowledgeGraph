```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-user-demographics",
  "@type": "Page",
  "vc:slug": "ai-user-demographics",
  "title": "AI User Demographics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Ipsos Survey",
    "US AI Adoption"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-user-demographics",
  "@type": "Class",
  "label": "AI User Demographics",
  "definition": "Statistical breakdowns of artificial intelligence adoption rates segmented by geographic, economic, or sociological factors.",
  "domain": "economics",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-adoption",
      "label": "AI Adoption"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-adoption",
        "label": "AI Adoption"
      },
      {
        "@id": "urn:ngm:class:diffusion-of-innovations-theory",
        "label": "Diffusion of Innovations Theory"
      },
      {
        "@id": "urn:ngm:class:technology-acceptance-model",
        "label": "Technology Acceptance Model"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-whole-world-gets-claude-pilled.md"
  }
}
```

- ### Overview
  - In the Ipsos survey, only 40% of US participants reported using AI in the past year, making the US the only country without a majority of AI users. *(Source: Ipsos (commissioned by Google), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
