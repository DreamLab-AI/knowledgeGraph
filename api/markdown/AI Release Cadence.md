```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-release-cadence",
  "@type": "Page",
  "vc:slug": "ai-release-cadence",
  "title": "AI Release Cadence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Model Training Speed",
    "Public-Internal Capability Gap"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-release-cadence",
  "@type": "Class",
  "label": "AI Release Cadence",
  "definition": "The frequency and timing at which artificial intelligence models and capabilities are made available to the public or specific user groups.",
  "domain": "governance",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-policy",
      "label": "AI Policy"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-policy",
        "label": "AI Policy"
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
    "episode": "meet-your-ad-hoc-ai-licensing-regime.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** The ad-hoc licensing regime slows the rate at which AI labs can release models to the public but does not slow the rate at which they can train them, causing the gap between public availability and internal lab capabilities to widen. *(Source: Andrew Curran (via podcast host), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
