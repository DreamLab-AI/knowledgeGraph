```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:spacefaring-data-centers",
  "@type": "Page",
  "vc:slug": "spacefaring-data-centers",
  "title": "Spacefaring Data Centers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Compute Power",
    "SpaceX IPO"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spacefaring-data-centers",
  "@type": "Class",
  "label": "Spacefaring Data Centers",
  "definition": "Proposed orbital or space-based computational facilities designed to host high-density AI training and inference workloads.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-training-infrastructure",
      "label": "AI Training Infrastructure"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-training-infrastructure",
        "label": "AI Training Infrastructure"
      },
      {
        "@id": "urn:ngm:class:compute-power",
        "label": "Compute Power"
      },
      {
        "@id": "urn:ngm:class:spacex",
        "label": "SpaceX"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-biggest-unlocks-of-gpt-images-2.md"
  }
}
```

- ### Overview
  - SpaceX's IPO disclosure documents include a stock incentive tied to deploying 100 terawatts of compute power via spacefaring data centers. *(Source: SpaceX IPO disclosure documents, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
