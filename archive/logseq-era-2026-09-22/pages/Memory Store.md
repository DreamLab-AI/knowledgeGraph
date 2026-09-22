public:: true

# Memory Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:memory-store",
  "@type": "Page",
  "vc:slug": "memory-store",
  "title": "Memory Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:memory-store",
  "@type": "Class",
  "label": "Memory Store",
  "definition": "A memory store is the persistence layer in an AI agent system that retains information across turns and sessions for later retrieval. It typically holds conversation history, facts, and learned context, often as embeddings in a vector database to enable semantic recall. The memory store is what allows agents to maintain continuity, personalise responses, and accumulate knowledge beyond a single context window.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"}, {"@id": "urn:ngm:class:context-engineering", "label": "Context Engineering"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A memory store persists an agent's information across turns and sessions, often as retrievable embeddings, enabling continuity and recall. It is a component of [[Agent Frameworks]] and a building block required for effective [[Context Engineering]].
- ### Content
  - Designs distinguish short-term working memory from long-term stores, and episodic from semantic memory, with retrieval gated by relevance and recency. Vector stores support semantic search, while summarisation and forgetting policies manage growth so that the most pertinent context is surfaced into the model's window.
