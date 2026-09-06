---
public: true
---

# AI Agent Capabilities
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-agent-capabilities",
  "@type": "Page",
  "vc:slug": "ai-agent-capabilities",
  "title": "AI Agent Capabilities",
  "vc:public": true,
  "vc:outboundWikilinks": ["Claude Co-work", "Open Claude"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-agent-capabilities",
  "@type": "Class",
  "label": "AI Agent Capabilities",
  "definition": "The specific functional attributes, such as tool use, multi-session support, and autonomous decision-making, that define the operational scope of an AI agent.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:tool-use", "label": "Tool Use"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:tool-use", "label": "Tool Use"}, {"@id": "urn:ngm:class:claude", "label": "Claude"}, {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "how-to-use-claude-cowork-on-the-go.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Ethan Mollick stated that Claude Co-work Dispatch covers 90% of his use cases for Open Claude but feels safer and more stable, though it lacks features like multi-session support and proactive heartbeats. *(Source: Ethan Mollick, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
