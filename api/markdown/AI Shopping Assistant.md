```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-shopping-assistant",
  "@type": "Page",
  "vc:slug": "ai-shopping-assistant",
  "title": "AI Shopping Assistant",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Amazon Rufus",
    "Black Friday Sales Data"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-shopping-assistant",
  "@type": "Class",
  "label": "AI Shopping Assistant",
  "definition": "Conversational AI interfaces integrated into e-commerce platforms that assist consumers in product discovery, comparison, and purchase decisions.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-agents",
      "label": "AI Agents"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-agents",
        "label": "AI Agents"
      },
      {
        "@id": "urn:ngm:class:workflow-automation",
        "label": "Workflow Automation"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "microsoft-changing-ai-targets.md"
  }
}
```

- ### Overview
  - Amazon sessions using the Rufus chatbot that resulted in a sale were up by 100% compared to the trailing 30 days, while sessions that did not involve Rufus only increased by 20% during Black Friday. *(Source: Sensor Tower (cited in transcript), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
