public:: true

# CrewAI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crew-ai",
  "@type": "Page",
  "vc:slug": "crew-ai",
  "title": "CrewAI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crew-ai",
  "@type": "Class",
  "label": "CrewAI",
  "definition": "CrewAI is an open-source Python framework for orchestrating teams of autonomous LLM-powered agents that collaborate on tasks through defined roles, goals, and processes. It models a crew of specialised agents that delegate, share context, and execute sequential or hierarchical workflows. It is widely used to build multi-agent automation and tool-using assistants.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cli-multi-agent-systems", "label": "CLI Multi-Agent Systems"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - CrewAI is a framework for orchestrating collaborating LLM agents organised as a role-based crew with shared goals and processes. It is one implementation underpinning [[CLI Multi-Agent Systems]].
- ### Content
  - Developers define agents with roles, backstories, and tools, then compose them into crews that run sequential or hierarchical task pipelines with delegation and memory. The framework abstracts inter-agent communication and tool invocation, making it a common choice for prototyping agentic workflows alongside alternatives such as AutoGen and LangGraph.
