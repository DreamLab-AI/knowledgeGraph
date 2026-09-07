```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-inference-infrastructure",
  "@type": "Page",
  "vc:slug": "ai-inference-infrastructure",
  "title": "AI Inference Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Nvidia Blackwell",
    "US Intelligence Community"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-inference-infrastructure",
  "@type": "Class",
  "label": "AI Inference Infrastructure",
  "definition": "The specialized hardware, data centers, and energy systems required to run AI models at scale, distinct from training infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-storage",
      "label": "Data Storage"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-center-investment",
        "label": "Data Center Investment"
      },
      {
        "@id": "urn:ngm:class:ai-factory",
        "label": "AI Factory"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-25",
    "episode": "what-the-pope-actually-said-about-ai.md"
  }
}
```

- ### Overview
  - The White House approved a secret $9 billion budget request for intelligence agencies to build their own inference cluster using Nvidia Blackwell chips. *(Source: The New York Times, via AI Daily Brief, 2026-08-25)*
- ### Relationships
- ### Provenance
