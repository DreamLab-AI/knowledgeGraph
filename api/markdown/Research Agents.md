public:: true

# Research Agents
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:research-agents",
  "@type": "Page",
  "vc:slug": "research-agents",
  "title": "Research Agents",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:research-agents",
  "@type": "Class",
  "label": "Research Agents",
  "definition": "Research agents are autonomous LLM-based systems that plan and execute multi-step information-gathering tasks, issuing searches, reading sources, and synthesising cited findings into reports. They combine tool use, memory, and reasoning to pursue an objective across many web or document queries with minimal supervision. They represent a leading application of agentic AI for knowledge work.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:context-engineering", "label": "Context Engineering"},
      {"@id": "urn:ngm:class:agentic-internet", "label": "Agentic Internet"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Research agents are autonomous systems that plan, search, read, and synthesise cited findings, relying on [[Context Engineering]] for effective grounding and forming a key use case of the [[Agentic Internet]].
- ### Content
  - A research agent typically decomposes a question into sub-queries, retrieves and ranks sources, tracks provenance, and iterates until it can produce a well-supported answer. Quality depends on robust retrieval, faithful citation, and reflection loops that detect gaps or contradictions before reporting.
