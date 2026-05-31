public:: true

# Embedding Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:embedding-search",
  "@type": "Page",
  "vc:slug": "embedding-search",
  "title": "Embedding Search",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embedding-search",
  "@type": "Class",
  "label": "Embedding Search",
  "definition": "Embedding search is a retrieval paradigm in which queries and documents are encoded into dense vector representations in a shared semantic space, and similarity—typically measured by cosine distance or dot product—is used to rank and retrieve the most relevant items. Unlike keyword-based search, embedding search captures semantic relatedness, enabling matches on meaning rather than exact lexical overlap.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:vector-embedding", "label": "Vector Embeddings"},
      {"@id": "urn:ngm:class:vector-store", "label": "Vector Store"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:vector-search", "label": "Vector Search"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dense-retrieval", "label": "Dense Retrieval"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  Embedding search is a retrieval technique that represents both queries and corpus items as [[Vector Embeddings]] in a shared high-dimensional space, ranking results by geometric proximity rather than keyword overlap, enabling [[Semantic Search]] across heterogeneous content types.

- ### Relationships
  Embedding search is a specialisation of [[Semantic Search]] and operates over [[Vector Embeddings]] stored in a [[Vector Store]]. It relies on [[Vector Search]] algorithms (approximate nearest neighbour search) for efficient retrieval at scale and is the retrieval backbone of [[Retrieval-Augmented Generation]] pipelines. It is closely related to [[Dense Retrieval]] research, which formalises the bi-encoder architecture underlying most production embedding search systems.

- ### Content
  - Embedding search evolved from earlier distributional semantics work—word2vec (2013) and GloVe (2014)—through sentence-level models such as Universal Sentence Encoder (2018) and SBERT (2019), which produced embeddings suitable for semantic similarity at the passage level. The introduction of dense passage retrieval (DPR, Karpukhin et al., 2020) demonstrated that bi-encoder architectures could outperform BM25 keyword search on open-domain question answering benchmarks, validating embedding search as a serious alternative to sparse retrieval. Scalable approximate nearest-neighbour (ANN) libraries—FAISS, ScaNN, HNSW—made billion-scale embedding search feasible.
  - The typical embedding search pipeline encodes the query using a transformer-based encoder model into a fixed-dimensional vector (commonly 384 to 4096 dimensions). The corpus is pre-encoded offline and stored in a vector index. At query time, ANN search retrieves the k nearest vectors using cosine or dot-product similarity, returning the corresponding documents or passages. Hybrid approaches combine embedding search (recall-oriented) with sparse BM25 (precision-oriented) using reciprocal rank fusion or learned re-ranking to balance semantic and lexical matching.
  - Embedding search underpins a wide range of applications: enterprise document search, e-commerce product discovery, recommendation systems, duplicate detection, and code search. In AI systems, it is the retrieval component of RAG pipelines that ground large language model responses in external knowledge bases. Its ability to cross language and modality boundaries—matching text queries against image or audio embeddings—enables multimodal search applications in media archives, medical imaging, and content moderation.
  - In 2024-2025, the field has seen rapid progress in embedding model quality, with models such as Cohere Embed v3, OpenAI text-embedding-3, and open-source alternatives (E5-large, BGE-M3) achieving high performance across multilingual and domain-specific benchmarks. Matryoshka Representation Learning (MRL) allows a single model to produce embeddings at multiple precisions, enabling storage-performance trade-offs. The rise of long-context embedding models (handling 8k+ tokens) has improved retrieval for lengthy documents. Vector databases (Pinecone, Weaviate, Qdrant, pgvector) have matured into production-grade infrastructure supporting filtered search, multi-tenancy, and real-time index updates.
