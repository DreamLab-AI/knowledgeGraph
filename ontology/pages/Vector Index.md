public:: true

# Vector Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vector-index",
  "@type": "Page",
  "vc:slug": "vector-index",
  "title": "Vector Index",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vector-index",
  "@type": "Class",
  "label": "Vector Index",
  "definition": "A vector index is a data structure that organises high-dimensional embedding vectors to enable fast approximate nearest-neighbour search over large collections. Using methods such as HNSW graphs, IVF partitioning or product quantisation, it trades a small amount of recall for large gains in query latency and scalability. Vector indexes are the retrieval engine behind semantic search and retrieval-augmented generation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval Augmented Generation - RAG"}, {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A vector index structures embeddings for fast nearest-neighbour lookup, forming a core part of [[Retrieval-Augmented Generation (RAG)]] and [[Semantic Search]].
- ### Content
  - Algorithms like HNSW build navigable small-world graphs, while IVF and product quantisation cluster and compress vectors to bound memory and latency. Vector databases expose these indexes with filtering, hybrid search and persistence, serving similarity queries at scale.
