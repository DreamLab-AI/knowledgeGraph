public:: true

# HNSW Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hnsw-index",
  "@type": "Page",
  "vc:slug": "hnsw-index",
  "title": "HNSW Index",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hnsw-index",
  "@type": "Class",
  "label": "HNSW Index",
  "definition": "An HNSW (Hierarchical Navigable Small World) index is a graph-based data structure for approximate nearest-neighbour search over high-dimensional vectors. It builds a multi-layer proximity graph where greedy traversal from a sparse top layer down to a dense base layer locates close vectors in logarithmic time. HNSW is the standard index backing vector databases and semantic search at scale.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infra Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An HNSW index is a hierarchical proximity-graph structure for fast approximate nearest-neighbour lookup; it is implemented by [[Semantic Search]] systems and embedded in vector [[Storage Infrastructure]].
- ### Content
  - The index trades exactness for speed, tuning recall via parameters such as the connectivity M and the search beam ef. Its logarithmic query complexity and incremental insertion make it well suited to embedding retrieval for RAG, recommendation, and similarity search over millions to billions of vectors.
