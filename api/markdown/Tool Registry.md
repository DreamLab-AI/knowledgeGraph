public:: true

# Tool Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tool-registry",
  "@type": "Page",
  "vc:slug": "tool-registry",
  "title": "Tool Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tool-registry",
  "@type": "Class",
  "label": "Tool Registry",
  "definition": "A tool registry is a catalogue that stores the definitions, schemas, permissions, and metadata of the external tools and functions an AI agent can invoke. It enables agents to discover, validate, and route calls to available capabilities at runtime, providing a governed and extensible interface between language models and the systems they act upon.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"}, {"@id": "urn:ngm:class:agentic-internet", "label": "Agentic Internet"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A catalogue of the tools, schemas, and permissions an agent may call, enabling runtime discovery and governed routing of capabilities. It is a core component of [[Agent Frameworks]] and the emerging [[Agentic Internet]].
- ### Content
  - Registries typically expose machine-readable descriptions, such as JSON schemas or MCP tool manifests, that let a model select an appropriate tool and bind arguments correctly. By centralising authorisation and versioning, a registry also enforces access control and auditability over what autonomous agents are permitted to do.
