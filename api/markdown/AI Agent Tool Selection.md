```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-agent-tool-selection",
  "@type": "Page",
  "vc:slug": "ai-agent-tool-selection",
  "title": "AI Agent Tool Selection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Software Commoditization",
    "Vendor-Customer Dynamics"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-agent-tool-selection",
  "@type": "Class",
  "label": "AI Agent Tool Selection",
  "definition": "The process by which AI agents autonomously evaluate, choose, and invoke specific external tools or APIs to accomplish tasks, often based on dynamic criteria rather than fixed user preferences.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-agent",
      "label": "AI Agent"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "is-software-dead.md"
  }
}
```

- ### Overview
  - **[Emerging signal]** Gokul Rajaram argues that delegating tool choice to AI agents is likely worse for software companies because AI will select the optimal tool based on changing criteria, leading to commoditization and reduced long-term customer relationships for specific software vendors. *(Source: Gokul Rajaram (Investor), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
