```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mcp-connectors",
  "@type": "Page",
  "vc:slug": "mcp-connectors",
  "title": "MCP Connectors",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Claude Co-work",
    "Windows Platform"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mcp-connectors",
  "@type": "Class",
  "label": "MCP Connectors",
  "definition": "Standardized interfaces that allow AI models to connect to external tools, data sources, and systems via the Model Context Protocol.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-hardware-infrastructure",
      "label": "AI Hardware Infrastructure"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-hardware-infrastructure",
        "label": "AI Hardware Infrastructure"
      },
      {
        "@id": "urn:ngm:class:claude-co-work",
        "label": "Claude Co-work"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-latest-ai-models-and-model-rumors.md"
  }
}
```

- ### Overview
  - Anthropic's Claude Co-work feature is now available on Windows with full parity to macOS, including file access, multi-step task execution, plugins, and MCP connectors. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
