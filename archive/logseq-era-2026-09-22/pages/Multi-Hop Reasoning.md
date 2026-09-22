public:: true

# Multi-Hop Reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-hop-reasoning",
  "@type": "Page",
  "vc:slug": "multi-hop-reasoning",
  "title": "Multi-Hop Reasoning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-hop-reasoning",
  "@type": "Class",
  "label": "Multi-Hop Reasoning",
  "definition": "Multi-hop reasoning is the capability to answer a question or draw a conclusion by chaining together several intermediate inferences or retrieved facts, rather than relying on a single piece of evidence. In language models and retrieval systems it requires composing information across multiple documents or knowledge-graph edges. It is central to complex question answering and is a known weak point for shallow retrieval and single-pass models.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graphing", "label": "Knowledge Graphing"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval Augmented Generation - RAG"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Multi-hop reasoning chains several intermediate inferences or retrieved facts to reach an answer no single source provides. It is enabled by [[Knowledge Graphing]] and by [[Retrieval-Augmented Generation (RAG)]].
- ### Content
  - Solving multi-hop queries requires decomposing the question, retrieving evidence for each hop, and composing the partial results, often iteratively. Knowledge graphs make the hops explicit as traversable edges, while iterative or agentic RAG performs successive retrieval steps to assemble the reasoning chain.
