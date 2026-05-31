public:: true

# Dense Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dense-retrieval",
  "@type": "Page",
  "vc:slug": "dense-retrieval",
  "title": "Dense Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dense-retrieval",
  "@type": "Class",
  "label": "Dense Retrieval",
  "definition": "Dense retrieval is an information-retrieval method that encodes queries and documents into dense vector embeddings and ranks results by vector similarity rather than lexical term overlap. A learned bi-encoder maps text into a shared semantic space so that conceptually related items are close even without shared keywords. It underpins semantic search and retrieval-augmented generation, often paired with approximate nearest-neighbour indexes for scale.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:embedding-search", "label": "Embedding Search"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Dense retrieval matches queries to documents by comparing learned embeddings in a shared vector space. It is the engine behind [[Embedding Search]] and a common implementation of [[Semantic Search]].
- ### Content
  - A bi-encoder produces fixed-length vectors stored in an ANN index (HNSW, IVF); retrieval is a nearest-neighbour lookup over these vectors. Compared with sparse lexical methods such as BM25, dense retrieval captures synonymy and paraphrase but can miss exact-term matches, motivating hybrid dense-plus-sparse pipelines.
