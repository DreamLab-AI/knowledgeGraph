public:: true

# Vector Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f8d46944f9f6fa19d258b5df4b1c42db19ac46648f8424827fd7934dac9db149",
  "@type": "Page",
  "vc:slug": "vector-search",
  "title": "Vector Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embeddings",
      "vc:label": "Embeddings"
    },
    {
      "@id": "urn:visionflow:linked:semantic-search",
      "vc:label": "Semantic Search"
    },
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vector Search"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vector-search",
  "@type": "Class",
  "label": "Vector Search",
  "definition": "Vector search is a retrieval paradigm that identifies the items in a corpus whose high-dimensional vector representations are most similar to a query vector, using distance or similarity metrics such as cosine similarity, dot product, or Euclidean distance. Because exhaustive pairwise comparison scales as O(n·d) and becomes intractable for large corpora, practical systems use approximate nearest neighbour (ANN) algorithms — including HNSW, IVF-PQ, and LSH — that trade a small, configurable recall loss for orders-of-magnitude latency improvement. Vectors are typically produced by embedding models that encode semantic, visual, or multimodal meaning into dense float arrays, making vector search inherently meaning-sensitive rather than lexical. The paradigm underpins semantic search, recommendation systems, retrieval-augmented generation, duplicate detection, and cross-modal retrieval across text, image, audio, and structured data.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-retrieval",
      "label": "Information Retrieval"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
      },
      {
        "@id": "urn:ngm:class:embedding-model",
        "label": "Embedding Model"
      },
      {
        "@id": "urn:ngm:class:similarity-metric",
        "label": "Similarity Metric"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      },
      {
        "@id": "urn:ngm:class:cross-modal-retrieval",
        "label": "Cross-Modal Retrieval"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:approximate-nearest-neighbour",
        "label": "Approximate Nearest Neighbour"
      },
      {
        "@id": "urn:ngm:class:vector-index",
        "label": "Vector Index"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hnsw",
        "label": "HNSW"
      },
      {
        "@id": "urn:ngm:class:inverted-file-index",
        "label": "Inverted File Index"
      },
      {
        "@id": "urn:ngm:class:product-quantisation",
        "label": "Product Quantisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      },
      {
        "@id": "urn:ngm:class:dot-product",
        "label": "Dot Product"
      },
      {
        "@id": "urn:ngm:class:locality-sensitive-hashing",
        "label": "Locality-Sensitive Hashing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:keyword-search",
        "label": "Keyword Search"
      },
      {
        "@id": "urn:ngm:class:exact-nearest-neighbour",
        "label": "Exact Nearest Neighbour"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:dense-retrieval",
        "label": "Dense Retrieval"
      },
      {
        "@id": "urn:ngm:class:hybrid-search",
        "label": "Hybrid Search"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:spatial-indexing",
        "label": "Spatial Indexing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:nearest-neighbour-search",
      "label": "Nearest Neighbour Search"
    },
    {
      "@id": "urn:ngm:class:similarity-search",
      "label": "Similarity Search"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:vector-search:b91bdf2c4ce2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f8d46944f9f6fa19d258b5df4b1c42db19ac46648f8424827fd7934dac9db149"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embeddings]]",
      "resolved": "urn:visionflow:linked:embeddings",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Search]]",
      "resolved": "urn:visionflow:linked:semantic-search",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vector Database]]",
      "resolved": "urn:visionflow:linked:vector-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Retrieval]]",
      "resolved": "urn:visionflow:linked:information-retrieval",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Vector search is a retrieval paradigm that finds the items in a collection whose [[Embeddings]] — high-dimensional vector representations of semantic, visual, or multimodal content — are closest to a query vector under a chosen [[Similarity Metric]]. Rather than matching keywords lexically, it captures meaning, enabling [[Semantic Search]], [[Retrieval-Augmented Generation]], and [[Recommendation System]] applications where relevance is determined by proximity in an embedding space. The approach depends on [[Approximate Nearest Neighbour]] algorithms and specialised [[Vector Index]] structures to scale efficiently to tens of millions or billions of items. At infrastructure level, [[Vector Database]] systems combine these indexes with metadata filtering, replication, and query serving.

- ### Overview
  - Vector search represents a fundamental shift from symbolic, keyword-based retrieval to geometric, meaning-based retrieval in continuous vector spaces.
  - Traditional [[Keyword Search]] matches exact or stemmed tokens; vector search matches learned semantic representations, tolerating paraphrase, synonymy, and cross-lingual variation.
  - The core operation is k-nearest-neighbour (k-NN) retrieval: given a query vector q and a corpus of n item vectors, return the k items whose vectors are closest to q under a distance function.
  - Practical importance:
    - Powers language model grounding in [[Retrieval-Augmented Generation]] pipelines.
    - Enables cross-modal retrieval (text-to-image, image-to-image) via shared embedding spaces such as those produced by [[CLIP]].
    - Underpins duplicate and near-duplicate detection at scale for content moderation and deduplication.
    - Central to modern [[Recommendation System]] architectures at major technology platforms.
  - Adoption is now mainstream: major cloud providers (AWS, GCP, Azure) offer managed vector search services, and open-source databases (Weaviate, Milvus, Qdrant, Chroma) are widely deployed.

- ### Key Components
  - #### Embedding Models
    - [[Embedding Model]] transforms raw data (text, images, audio) into dense float vectors of fixed dimensionality (commonly 128–4096 dimensions).
    - Text embeddings: sentence transformers, BERT-family encoders, commercial APIs (OpenAI, Cohere).
    - Image embeddings: [[CLIP]], ResNet feature layers, vision transformers.
    - Multimodal embeddings: joint text-image spaces for cross-modal retrieval.
    - Quality of the embedding model directly determines retrieval quality; vector search cannot compensate for a poor embedding.
  - #### Similarity Metrics
    - [[Cosine Similarity]]: measures angle between vectors; popular for normalised text embeddings; range −1 to 1.
    - [[Dot Product]]: equivalent to cosine similarity for unit-norm vectors; faster when vectors are already normalised.
    - Euclidean Distance (L2): measures geometric distance; preferred in some vision and audio applications.
    - Inner product and Manhattan distance used in specialised scenarios.
    - Choice of metric must align with the metric used during training of the embedding model.
  - #### Approximate Nearest Neighbour Algorithms
    - [[Approximate Nearest Neighbour]] algorithms sacrifice a configurable fraction of recall for drastically lower latency.
    - [[HNSW]] (Hierarchical Navigable Small World graphs): graph-based; excellent recall-latency trade-off; widely used (hnswlib, Faiss, most vector databases).
    - IVF-PQ (Inverted File Index + [[Product Quantisation]]): partitions space into Voronoi cells, compresses residuals with PQ; low memory footprint at scale.
    - [[Locality-Sensitive Hashing]]: hashes similar vectors to the same bucket with high probability; historically important, less dominant now.
    - DiskANN / SPANN: graph-based indexes designed for SSD-resident billion-scale corpora.
  - #### Vector Index Structures
    - [[Vector Index]] organises stored vectors for fast retrieval.
    - Flat (brute-force) indexes: exact search; only viable for small corpora (< ~100 k vectors).
    - IVF indexes: cluster-based partitioning enabling selective probing.
    - Scalar quantisation and binary quantisation: compress vectors to 8-bit integers or single bits, reducing memory at some accuracy cost.
  - #### Metadata Filtering
    - Real deployments combine vector similarity with structured predicate filters (category, date range, access control).
    - Pre-filtering vs. post-filtering strategies trade off recall and latency differently.
    - [[Hybrid Search]] systems combine vector similarity with [[BM25]] lexical scoring for improved precision on keyword-sensitive queries.

- ### Mechanisms
  - #### Indexing Pipeline
    - 1. Encode corpus items through the embedding model to produce a matrix of n × d floats.
    - 2. Build an ANN index (e.g., HNSW graph or IVF centroids) over the matrix.
    - 3. Optionally apply quantisation to compress storage.
    - 4. Persist index to disk or memory; distribute across shards for large corpora.
  - #### Query Pipeline
    - 1. Encode the query with the same embedding model.
    - 2. Run ANN search against the index, retrieving top-k candidate IDs and distances.
    - 3. Apply any metadata post-filters.
    - 4. Optionally re-rank candidates using a more expensive cross-encoder or [[Reciprocal Rank Fusion]] if [[Hybrid Search]] is used.
    - 5. Return ranked results to the application layer.
  - #### Recall–Latency Trade-off
    - ANN search parameters (HNSW ef, IVF nprobe) control the exploration breadth; higher values increase recall but increase latency.
    - Quantisation reduces memory and speeds distance computation at a recall penalty.
    - Sharding distributes load horizontally; replication provides read availability.

- ### Applications / Use Cases
  - #### Retrieval-Augmented Generation (RAG)
    - [[Retrieval-Augmented Generation]] systems use vector search to fetch the most contextually relevant document chunks, injecting them into [[Large Language Model]] prompts to ground generation in external knowledge.
    - Reduces hallucination and keeps model knowledge current without retraining.
  - #### Semantic Document Search
    - Enterprise knowledge bases, legal document discovery, academic literature search — all benefit from query-by-meaning rather than keyword matching.
    - Overcomes vocabulary mismatch between user queries and author terminology.
  - #### Recommendation Systems
    - [[Recommendation System]] architectures in streaming, e-commerce, and social platforms retrieve candidate items by proximity of user and item embeddings, then re-rank with pointwise or pairwise ranking models.
    - Two-tower neural models produce user and item embeddings aligned in the same space for ANN retrieval.
  - #### Image and Multimodal Search
    - [[Cross-Modal Retrieval]] enables text-to-image queries (find photos matching a caption) and image-to-image similarity.
    - Reverse image search, visual product search, medical image retrieval.
  - #### Duplicate and Near-Duplicate Detection
    - News deduplication, plagiarism detection, dataset decontamination for [[Machine Learning]] training sets.
  - #### Anomaly Detection
    - Items whose vectors are distant from all cluster centroids are flagged as anomalies; used in fraud detection, network intrusion detection.
  - #### Knowledge Graph Augmentation
    - Vector search bridges [[Knowledge Graph]] structured retrieval and unstructured text retrieval, enabling semantic entity linking and relation discovery.

- ### Relationships
  - subClassOf:: [[Information Retrieval]]
  - requires:: [[Embeddings]]
  - requires:: [[Embedding Model]]
  - requires:: [[Similarity Metric]]
  - dependsOn:: [[Approximate Nearest Neighbour]]
  - dependsOn:: [[Vector Index]]
  - hasPart:: [[HNSW]]
  - hasPart:: [[Inverted File Index]]
  - hasPart:: [[Product Quantisation]]
  - uses:: [[Cosine Similarity]]
  - uses:: [[Dot Product]]
  - uses:: [[Locality-Sensitive Hashing]]
  - enables:: [[Semantic Search]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Recommendation System]]
  - enables:: [[Cross-Modal Retrieval]]
  - partOf:: [[Vector Database]]
  - contrastsWith:: [[Keyword Search]]
  - contrastsWith:: [[Exact Nearest Neighbour]]
  - relatedTo:: [[Large Language Model]]
  - relatedTo:: [[Dense Retrieval]]
  - relatedTo:: [[Hybrid Search]]
  - bridges-to:: [[Knowledge Graph]]
  - bridges-to:: [[Spatial Indexing]]

- ### Standards & Context
  - No single formal standard governs vector search; de facto standards emerge from open-source libraries.
  - **Faiss** (Facebook AI Similarity Search): foundational C++ library; reference implementation for IVF, HNSW, PQ indexes; widely used in research and production.
  - **hnswlib**: standalone Python/C++ implementation of HNSW; integrated into many vector databases.
  - **Annoy** (Approximate Nearest Neighbours Oh Yeah): tree-based ANN by Spotify; optimised for read-heavy, static corpora.
  - [[Vector Database]] vendors (Weaviate, Qdrant, Milvus, Pinecone, pgvector, Chroma) each implement their own index formats and query APIs.
  - **pgvector**: PostgreSQL extension that adds native vector column types and IVFFlat/HNSW indexes, making [[Relational Database]] systems capable of vector search.
  - **OpenSearch** and **Elasticsearch** have integrated k-NN plugins, converging [[Full-Text Search]] and vector search in a single engine.
  - ANN benchmark project (ann-benchmarks.com) provides standardised recall-throughput comparisons across algorithms and datasets.
  - IEEE and ACM SIGIR communities publish the foundational research; key conferences: SIGIR, NeurIPS, ICML, VLDB, OSDI.
  - Regulatory relevance: where vector search powers content recommendation or hiring decisions, [[Algorithmic Fairness]] and [[AI Governance]] considerations apply to the embedding models and retrieval policies.

- ### Provenance
  - sources:: Faiss documentation; ann-benchmarks.com; HNSW (Malkov & Yashunin 2018); Pinecone and Weaviate technical documentation; RAG survey literature; pgvector README
  - updated:: 2026-06-13
