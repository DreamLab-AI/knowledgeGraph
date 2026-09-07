```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-primitives",
  "@type": "Page",
  "vc:slug": "agent-primitives",
  "title": "Agent Primitives",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Closed-Source AI Labs",
    "Open-Source AI Ecosystem"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-primitives",
  "@type": "Class",
  "label": "Agent Primitives",
  "definition": "The foundational software components and abstractions, such as orchestration, memory, and tool-use interfaces, that enable the construction of autonomous AI agents.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agent",
      "label": "Agent"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:open-source-ai",
        "label": "Open-Source AI"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "surprise-elon-anthropic-team-up-reshapes-ai-race.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** The open-source agent ecosystem has been leading on agent primitives, such as orchestration and memory, for nearly a year before closed labs like Anthropic shipped similar functionality in their native offerings. *(Source: Jatin Garg / AI Daily Brief Host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
