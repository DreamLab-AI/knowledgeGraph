public:: true

# MCP Server
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mcp-server",
  "@type": "Page",
  "vc:slug": "mcp-server",
  "title": "MCP Server",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mcp-server",
  "@type": "Class",
  "label": "MCP Server",
  "definition": "An MCP server is a program that exposes tools, resources, and prompts to AI applications through the Model Context Protocol. It advertises its capabilities during connection negotiation and executes requests forwarded by an MCP client, returning structured results for the model to consume. Servers encapsulate access to external systems such as databases, APIs, file systems, and developer tooling.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"}, {"@id": "urn:ngm:class:mcp-client", "label": "MCP Client"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An MCP server exposes tools, resources, and prompts to AI applications via the [[Model Context Protocol]], executing requests relayed by an [[MCP Client]]. It encapsulates integration with an external system behind a uniform protocol surface.
- ### Content
  - Servers declare capabilities at connection time and respond to typed requests over a transport such as stdio or HTTP/SSE. By standardising the integration boundary, MCP servers let any compliant host reuse the same connector, fostering an ecosystem of interoperable, composable AI integrations.
