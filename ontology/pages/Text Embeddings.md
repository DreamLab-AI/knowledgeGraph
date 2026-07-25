public:: true

# Text Embeddings
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:text-embeddings",
  "@type": "Page",
  "vc:slug": "text-embeddings",
  "title": "Text Embeddings",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:text-embeddings",
  "@type": "Class",
  "label": "Text Embeddings",
  "definition": "Text embeddings are dense numerical vector representations of words, sentences, or documents that place semantically similar text close together in a high-dimensional space. They are produced by neural models trained so that distance or cosine similarity in the vector space reflects meaning rather than surface form. Embeddings are the foundation of semantic search, clustering, and retrieval-augmented generation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval Augmented Generation - RAG"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Text embeddings map text to dense vectors so that semantic similarity becomes geometric proximity, providing the retrieval substrate for [[Semantic Search]] and [[Retrieval-Augmented Generation (RAG)]].
- ### Content
  - An embedding model encodes a span of text into a fixed-length vector whose direction captures meaning, allowing similarity to be measured by cosine distance or dot product. These vectors are indexed in approximate-nearest-neighbour stores so that a query can retrieve the most relevant passages from millions of candidates in milliseconds. Embedding quality depends on the training objective and domain coverage, and modern instruction-tuned embedding models support asymmetric query-document matching used throughout RAG pipelines.
