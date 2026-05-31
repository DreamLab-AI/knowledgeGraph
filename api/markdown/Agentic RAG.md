public:: true

# Agentic RAG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agentic-rag",
  "@type": "Page",
  "vc:slug": "agentic-rag",
  "title": "Agentic RAG",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agentic-rag",
  "@type": "Class",
  "label": "Agentic RAG",
  "definition": "Agentic RAG is an architecture that augments retrieval-augmented generation with an autonomous agent loop, letting a language model plan, decide when and what to retrieve, issue multiple queries, and verify results before answering. Unlike single-shot RAG, it can route between sources, reformulate queries, and iterate retrieval and reasoning steps until a confidence threshold is met. This improves accuracy on multi-hop and ambiguous questions at the cost of higher latency and orchestration complexity.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval-Augmented Generation (RAG)"},
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Agentic RAG wraps [[Retrieval-Augmented Generation (RAG)]] in an agent control loop so the model decides when, where, and how often to retrieve. It generalizes the linear [[RAG Pipeline]] into an iterative plan-retrieve-reason-verify process.
- ### Content
  - The agent may consult multiple tools and indexes, rewrite queries, grade retrieved passages, and re-retrieve when evidence is weak. This handles multi-hop reasoning and source selection better than fixed pipelines, while requiring careful budget control to bound the number of tool calls and tokens.
