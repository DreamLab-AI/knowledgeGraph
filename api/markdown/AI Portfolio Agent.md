```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-portfolio-agent",
  "@type": "Page",
  "vc:slug": "ai-portfolio-agent",
  "title": "AI Portfolio Agent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Agent-Based Job Matching",
    "Interactive Resume"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-portfolio-agent",
  "@type": "Class",
  "label": "AI Portfolio Agent",
  "definition": "An interactive AI agent that represents a professional's skills and history, enabling dynamic querying of their capabilities.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agents",
      "label": "Agents"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agents",
        "label": "Agents"
      },
      {
        "@id": "urn:ngm:class:enterprise-ai",
        "label": "Enterprise Ai"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-16-coolest-agents-ive-built-so-far.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** The 'Chucky' agent acts as an interactive representative for AI builders, allowing potential clients to query the agent about the builder's past work and portfolio instead of reviewing a static resume. *(Source: Host (AI Daily Brief), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
