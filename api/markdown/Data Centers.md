```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-centers",
  "@type": "Page",
  "vc:slug": "data-centers",
  "title": "Data Centers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "AGI Milestones",
    "Sam Altman"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-centers",
  "@type": "Class",
  "label": "Data Centers",
  "definition": "Facilities that house the critical components of an organization's information technology infrastructure, including servers, storage, and networking equipment, essential for large-scale AI computation.",
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
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:computational-infrastructure",
        "label": "Computational Infrastructure"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "meta-delays-new-ai-model.md"
  }
}
```

- ### Overview
  - **[Emerging signal]** Sam Altman predicts that the majority of the world's intelligence [private] be inside data centers by 2028. *(Source: Sam Altman, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
