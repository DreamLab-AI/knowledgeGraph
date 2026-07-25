public:: true

# Nearest Neighbor Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d551477b8f735b41a38d40445d9b264aaedb87f85cdfb1890eff8b17e39f4c6",
  "@type": "Page",
  "vc:slug": "nearest-neighbor-search",
  "title": "Nearest Neighbor Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-search",
      "vc:label": "Semantic Search"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9981"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Nearest Neighbor Search"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nearest-neighbor-search",
  "@type": "Class",
  "label": "Nearest Neighbor Search",
  "definition": "Nearest Neighbor Search (NNS) is an algorithmic problem and family of techniques for finding the point(s) in a dataset most similar to a given query point, as measured by a distance or similarity metric such as Euclidean distance, cosine similarity, or inner product. Exact NNS guarantees retrieval of the true closest point but scales poorly in high dimensions, while Approximate Nearest Neighbor (ANN) methods trade a bounded loss in recall for dramatically faster query latency and memory efficiency. Foundational index structures — including KD-Trees, Ball Trees, Locality-Sensitive Hashing, Inverted File Indexes, and Hierarchical Navigable Small World graphs — each make different trade-offs between construction cost, query speed, recall, and support for dynamic updates. NNS is a core primitive of modern machine learning pipelines, powering vector database retrieval, recommendation systems, semantic search, image recognition, and retrieval-augmented generation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:search-algorithm",
      "label": "Search Algorithm"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:hnsw-index",
        "label": "HNSW"
      },
      {
        "@id": "urn:ngm:class:locality-sensitive-hashing",
        "label": "Locality-Sensitive Hashing"
      },
      {
        "@id": "urn:ngm:class:inverted-index",
        "label": "Inverted File Index"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:vector-embedding",
        "label": "Vector Embedding"
      },
      {
        "@id": "urn:ngm:class:distance-metric",
        "label": "Distance Metric"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:image-retrieval",
        "label": "Image Retrieval"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:embedding-model",
        "label": "Embedding Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      },
      {
        "@id": "urn:ngm:class:euclidean-distance",
        "label": "Euclidean Distance"
      },
      {
        "@id": "urn:ngm:class:kd-tree",
        "label": "KD-Tree"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:keyword-search",
        "label": "Keyword Search"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-index",
        "label": "Spatial Indexing"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:faiss",
        "label": "FAISS"
      },
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ann-search",
      "label": "ANN Search"
    },
    {
      "@id": "urn:ngm:class:vector-similarity-search",
      "label": "Vector Similarity Search"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:nearest-neighbor-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6d551477b8f735b41a38d40445d9b264aaedb87f85cdfb1890eff8b17e39f4c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Search Algorithm]]",
      "resolved": "urn:visionflow:owl:class:search-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Search]]",
      "resolved": "urn:visionflow:owl:class:semantic-search",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Nearest Neighbor Search (NNS) is the problem of identifying, within a finite dataset, the point(s) closest to a given query according to a chosen [[Distance Metric]] such as [[Euclidean Distance]] or [[Cosine Similarity]]. It is the foundational retrieval primitive underlying [[Semantic Search]], [[Recommendation System]] design, and [[Retrieval-Augmented Generation]] pipelines. Exact methods scan or index the full corpus to guarantee the true nearest neighbour, whereas [[Approximate Nearest Neighbor]] methods accept a small, quantifiable loss in recall in exchange for sub-linear query time, making billion-scale retrieval tractable in production systems built on [[Vector Database]] infrastructure.

- ### Overview
  - NNS formalises the intuition "find what is most similar to this." Given a query object represented as a numeric vector in a high-dimensional space, the goal is to return the k objects in a reference corpus whose vectors are least distant from the query.
  - The challenge — known as the *curse of dimensionality* — is that in very high dimensions (hundreds to thousands), Euclidean distance loses discriminative power and exhaustive scan does not scale. This motivates the rich landscape of approximate and indexing solutions.
  - Modern NNS infrastructure is tightly coupled to [[Vector Embedding]] models: a neural encoder (e.g. a [[Transformer]]-based sentence encoder) converts raw text, images, or audio into dense vectors, and NNS then retrieves semantically related items without requiring exact string match.
  - Performance is characterised by three dimensions: **recall** (fraction of true nearest neighbours returned), **latency** (query time), and **throughput** (queries per second). These form a Pareto frontier that different index structures navigate differently.

- ### Key Mechanisms
  - #### Exact Methods
    - **Linear scan (brute-force)**: Computes the distance from the query to every database point. Guarantees perfect recall but O(n·d) per query — only practical for small corpora or as a correctness baseline.
    - **[[KD-Tree]]**: Binary space-partitioning tree that recursively splits dimensions at median values. Efficient for low-dimensional data (≤20 dims) but degrades toward linear scan as dimensionality rises.
    - **Ball Tree**: Partitions space using hyperspheres, offering better performance than KD-Trees in moderately high dimensions when the intrinsic dimensionality is lower than the embedding dimension.
  - #### Approximate Methods (ANN)
    - **[[Locality-Sensitive Hashing]] (LSH)**: Projects vectors into hash buckets such that similar vectors collide with high probability. Sub-linear query time; memory-efficient; well-suited to streaming or dynamic datasets.
    - **[[Inverted File Index]] (IVF)**: Clusters the corpus with k-means, then at query time probes only the nearest clusters. Parameter `nprobe` controls the recall/latency trade-off. Often combined with [[Product Quantisation]] to compress stored vectors.
    - **[[HNSW]] (Hierarchical Navigable Small World)**: Graph-based index that constructs a multi-layer proximity graph; greedy graph traversal from a high-level entry point converges quickly on near-neighbours. Currently the de-facto standard for high-recall, low-latency ANN in production, used in Faiss, Weaviate, Qdrant, and pgvector.
    - **ScaNN (Scalable Nearest Neighbours)**: Google's anisotropic quantisation approach optimising inner-product search; achieves strong recall at high throughput on asymmetric hardware.
  - #### Compression Techniques
    - **[[Product Quantisation]] (PQ)**: Divides the vector into sub-vectors and quantises each independently; the resulting codes are stored compactly and distances computed via lookup tables. Reduces memory by 8–64x with controllable recall loss.
    - **[[Scalar Quantisation]] (SQ)**: Maps float32 components to int8 or binary representations; simpler than PQ but less aggressive compression.
    - **Binary embeddings**: Extreme quantisation to 1-bit per dimension, enabling Hamming-distance search via bitwise operations at very high speed.

- ### Applications and Use Cases
  - **[[Retrieval-Augmented Generation]] (RAG)**: NNS over a document vector store retrieves context passages injected into an [[Large Language Model]] prompt, grounding generation in factual source material.
  - **[[Recommendation System]]**: User and item embeddings are indexed; NNS retrieves the k most similar items to a user's preference vector in real time, powering product, content, and music recommendation.
  - **[[Semantic Search]]**: Query text is encoded into a vector and NNS retrieves documents semantically related to the query, bypassing keyword brittleness. Deployed in enterprise search, legal discovery, and scientific literature retrieval.
  - **[[Image Retrieval]] and visual search**: Image encoders (e.g. CLIP, ResNet) embed images into shared vector spaces; NNS finds visually or semantically similar images for e-commerce, medical imaging, and content moderation.
  - **[[Anomaly Detection]]**: Points with unusually large distances to their nearest neighbours signal outliers; used in fraud detection, network intrusion detection, and sensor fault monitoring.
  - **[[Drug Discovery]]**: Molecular fingerprint vectors are compared via NNS to retrieve candidate compounds with similar biochemical properties, dramatically narrowing wet-lab search spaces.
  - **[[Natural Language Processing]]**: Word embedding neighbourhoods reveal semantic relationships (synonyms, analogies); sentence encoders use NNS for duplicate detection, clustering, and zero-shot classification.
  - **[[Robotics]] and autonomous agents**: LiDAR or occupancy-grid point clouds use NNS for obstacle proximity estimation, simultaneous localisation and mapping (SLAM), and real-time path planning.

- ### Index Libraries and Tooling
  - **[[FAISS]]** (Meta AI): Open-source C++/Python library offering IVF, HNSW, PQ, and GPU-accelerated search; the reference implementation for billion-scale NNS benchmarks.
  - **Hnswlib**: Lightweight, header-only C++ implementation of HNSW with Python bindings; low overhead, easy to integrate.
  - **Annoy** (Spotify): Tree-based ANN using random projections; read-optimised (no dynamic updates) and memory-mapped for efficient multi-process serving.
  - **ScaNN** (Google): High-performance library optimised for inner-product search on modern CPUs with SIMD acceleration.
  - **[[Vector Database]] platforms** (Pinecone, Weaviate, Qdrant, Milvus, pgvector, Chroma): Managed or self-hosted services that embed NNS engines behind a metadata-filtering, CRUD, and API layer.

- ### Performance Considerations
  - **Recall@k vs latency**: Tunable via index parameters (e.g. HNSW `ef_search`, IVF `nprobe`). Increasing recall typically increases latency; benchmark suites like ANN-Benchmarks measure the Pareto frontier.
  - **Index construction time and memory**: HNSW construction is O(n log n) and memory-intensive (graph links per node); IVF+PQ is more memory-efficient at the cost of more complex build pipelines.
  - **Dynamic vs static corpora**: HNSW supports incremental inserts; LSH and tree methods are typically rebuilt in bulk. Some production systems use a hybrid of an online HNSW shard and periodic bulk-merge.
  - **Hardware acceleration**: GPU-accelerated search (FAISS-GPU) enables throughput orders of magnitude above CPU for large batch queries; increasingly relevant for serving billion-vector indexes.
  - **[[Dimensionality Reduction]]**: Applying PCA or [[UMAP]] before indexing can improve both speed and recall by concentrating variance; trade-off is information loss in the reduced space.

- ### Relationships
  - hasPart:: [[Approximate Nearest Neighbor]]
  - hasPart:: [[HNSW]]
  - hasPart:: [[Locality-Sensitive Hashing]]
  - hasPart:: [[Inverted File Index]]
  - requires:: [[Vector Embedding]]
  - requires:: [[Distance Metric]]
  - enables:: [[Semantic Search]]
  - enables:: [[Recommendation System]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Image Retrieval]]
  - dependsOn:: [[Vector Database]]
  - dependsOn:: [[Embedding Model]]
  - uses:: [[Cosine Similarity]]
  - uses:: [[Euclidean Distance]]
  - uses:: [[KD-Tree]]
  - contrastsWith:: [[Exact Search]]
  - contrastsWith:: [[Keyword Search]]
  - relatedTo:: [[FAISS]]
  - relatedTo:: [[Dimensionality Reduction]]
  - relatedTo:: [[Quantisation]]
  - bridges-to:: [[Spatial Indexing]]
  - bridges-to:: [[Knowledge Graph Embedding]]

- ### Standards and Context
  - No formal ISO or IEEE standard governs NNS algorithm design; the field evolves through peer-reviewed benchmarks and open-source libraries.
  - **ANN-Benchmarks** (ann-benchmarks.com): Community benchmark tracking recall-latency Pareto frontiers across algorithms and datasets; the de-facto standard for comparing NNS implementations.
  - **ANNS-Track at NeurIPS / BigANN Benchmarks**: Competition series benchmarking billion-scale ANN search with a focus on memory constraints and streaming update scenarios.
  - [[Vector Database]] vendors increasingly publish their own benchmarks, making vendor-neutral third-party comparison critical for system selection.
  - Distance metric choice (inner product vs cosine vs L2) interacts with [[Embedding Model]] training objectives — models trained with contrastive loss often prefer cosine similarity, while those trained with dot-product loss benefit from maximum inner product search (MIPS) variants.

- ### Provenance
  - sources:: ANN-Benchmarks community benchmark; FAISS documentation (Meta AI Research); original HNSW paper — Malkov & Yashunin (2018); LSH foundational work — Indyk & Motwani (1998)
  - updated:: 2026-06-13
