public:: true

# FAISS

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:faiss",
  "@type": "Page",
  "title": "FAISS",
  "vc:slug": "faiss",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:faiss",
  "@type": "Class",
  "label": "FAISS",
  "definition": "FAISS (Facebook AI Similarity Search) is an open-source library for efficient similarity search and clustering of dense vectors, providing exact and approximate nearest-neighbour algorithms that scale to billions of embeddings. It implements index structures such as inverted files and product quantisation, with GPU acceleration for high-throughput retrieval. FAISS is widely used as the vector index backend for semantic search and retrieval-augmented generation pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:vector-index",
      "label": "Vector Index"
    }
  ],
  "relations": {}
}
```
