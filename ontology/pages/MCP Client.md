public:: true

# MCP Client
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mcp-client",
  "@type": "Page",
  "vc:slug": "mcp-client",
  "title": "MCP Client",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mcp-client",
  "@type": "Class",
  "label": "MCP Client",
  "definition": "An MCP client is the component within an AI host application that establishes and maintains a connection to one or more Model Context Protocol servers. It negotiates capabilities, forwards tool, resource, and prompt requests from the language model, and relays results back into the model's context. Each client maintains a one-to-one session with a server, mediating the model's access to external systems.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"}, {"@id": "urn:ngm:class:mcp-server", "label": "MCP Server"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An MCP client is the host-side connector that opens a session to a server under the [[Model Context Protocol]], relaying tool and resource calls to and from the model. It pairs with an [[MCP Server]] in a one-to-one connection.
- ### Content
  - The client handles capability negotiation, request routing, and lifecycle management, isolating the host from server-specific transport details. A single host can instantiate multiple clients to compose many servers, giving a model unified access to diverse tools and data sources.
