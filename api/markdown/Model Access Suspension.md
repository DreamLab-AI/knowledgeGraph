---
public: true
---

# Model Access Suspension
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-access-suspension",
  "@type": "Page",
  "vc:slug": "model-access-suspension",
  "title": "Model Access Suspension",
  "vc:public": true,
  "vc:outboundWikilinks": ["AI Export Controls", "US AI Policy"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-access-suspension",
  "@type": "Class",
  "label": "Model Access Suspension",
  "definition": "The temporary or permanent revocation of user or developer access to a specific AI model or API, typically triggered by regulatory compliance requirements, security incidents, or strategic business decisions.",
  "domain": "governance",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:export-controls", "label": "Export Controls"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:export-controls", "label": "Export Controls"}, {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}, {"@id": "urn:ngm:class:model", "label": "Model"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-5-minute-ai-weekly-recap-realignment-week.md"
  }
}
```

- ### Overview
  - Anthropic suspended access to Fable 5 and Mythos 5 in response to a new US export control directive. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
