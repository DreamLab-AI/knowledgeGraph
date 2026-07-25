public:: true

# Model Context Protocol Anthropic 2024
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-context-protocol-anthropic-2024",
  "@type": "Page",
  "vc:slug": "model-context-protocol-anthropic-2024",
  "title": "Model Context Protocol Anthropic 2024",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-context-protocol-anthropic-2024",
  "@type": "Class",
  "label": "Model Context Protocol Anthropic 2024",
  "definition": "The Model Context Protocol (MCP) is an open standard introduced by Anthropic in 2024 that defines a uniform JSON-RPC interface for connecting large language model applications to external tools, data sources, and prompts. It standardises how AI agents discover and invoke capabilities exposed by MCP servers, decoupling model hosts from integrations. It has been broadly adopted as a common plug-in layer for agentic systems.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agents", "label": "Agents"},
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Model Context Protocol (MCP), introduced by Anthropic in 2024, is an open JSON-RPC standard linking LLM apps to external tools and data. It standardises capability exposure for [[Agents]] and [[Computer Use and Browser Agents]].
- ### Content
  - MCP defines servers that advertise tools, resources, and prompts, and clients (model hosts) that negotiate and invoke them over a transport-agnostic protocol. By providing one interface for many integrations, it reduces bespoke connector work and lets the same tool server be reused across different agent runtimes.
