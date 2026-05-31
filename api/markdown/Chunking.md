public:: true

# Chunking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chunking",
  "@type": "Page",
  "vc:slug": "chunking",
  "title": "Chunking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chunking",
  "@type": "Class",
  "label": "Chunking",
  "definition": "Chunking is the process of segmenting source documents into smaller, semantically coherent passages before they are embedded and indexed for retrieval-augmented generation. Strategies range from fixed-size and overlapping windows to recursive, sentence-aware, and semantic chunking that respects document structure. It matters because chunk size and boundaries directly govern retrieval precision and the relevance of context supplied to a language model, making chunking a primary lever for RAG quality.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:gpts-and-custom-assistants", "label": "GPTs and Custom Assistants"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Chunking segments documents into retrievable passages prior to embedding, a foundational step in any [[RAG Pipeline]] and in knowledge-grounding for [[GPTs and Custom Assistants]].
- ### Content
  - Effective chunking balances chunk granularity against context coherence: too-small chunks fragment meaning while too-large chunks dilute relevance and waste context budget. Overlap, structure-aware splitting, and metadata enrichment improve recall and let the retriever surface focused, well-bounded evidence for generation.
