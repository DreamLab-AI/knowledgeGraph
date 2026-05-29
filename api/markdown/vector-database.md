- ### Definition
  - A vector database is a specialised data storage and retrieval system optimised for indexing and querying high-dimensional dense vectors (embeddings) using approximate nearest-neighbour (ANN) search algorithms such as HNSW, IVF-PQ, and ScaNN. These systems support efficient similarity search over millions to billions of embedding vectors representing text, images, or multimodal content, enabling retrieval-augmented generation, semantic search, and recommendation at scale. Vector databases typically provide filtering on structured metadata in conjunction with vector similarity, persistence, and versioning capabilities beyond what generic ANN libraries offer.

- ### Semantic Classification
  - owl-class:: vector-database:Vector Database
  - owl-role:: Concept

- ### Relationships
  - enables [[Retrieval-Augmented Generation]]
  - enables [[Semantic Search]]
  - requires [[Embedding Model]]
  - relatedTo [[Nearest Neighbor Search]]
  - relatedTo [[Information Retrieval]]
  - relatedTo [[Search Index]]

- ### Content
  Vector databases emerged as a distinct infrastructure category to address the limitations of traditional relational and document databases for embedding-based workloads. Where SQL databases excel at exact-match and range queries over structured fields, vector databases optimise the fundamentally different problem of finding the k nearest vectors to a query vector in high-dimensional Euclidean or cosine space — a problem where exhaustive linear scan becomes prohibitively slow at scale.

  The dominant indexing algorithms are Hierarchical Navigable Small World (HNSW) graphs, which offer excellent query latency at the cost of high memory usage; and Inverted File index with Product Quantisation (IVF-PQ), which compresses vectors to reduce memory footprint at some recall cost. Leading open-source vector databases include Qdrant, Weaviate, Milvus, and Chroma; hosted services include Pinecone and managed deployments of the open-source options. PostgreSQL extensions such as pgvector bring vector search to relational databases, trading off some performance for operational simplicity.

  In retrieval-augmented generation (RAG) pipelines, the vector database stores chunked document embeddings and returns the top-k most similar chunks to a query embedding, which are then inserted into the language model's context window. Metadata filtering (date range, source, category) is typically applied alongside vector similarity to improve precision. Hybrid search combining dense vector retrieval with sparse BM25 keyword retrieval has become common practice for production RAG systems, compensating for the known weaknesses of pure semantic search on proper nouns and precise identifiers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z