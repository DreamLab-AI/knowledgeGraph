public:: true

# Cosine Similarity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cosine-similarity",
  "@type": "Page",
  "vc:slug": "cosine-similarity",
  "title": "Cosine Similarity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cosine-similarity",
  "@type": "Class",
  "label": "Cosine Similarity",
  "definition": "Cosine Similarity is a metric that measures the cosine of the angle between two non-zero vectors in an inner product space, yielding a value in [−1, 1] that quantifies directional similarity independently of vector magnitude. It is the dominant similarity measure for comparing high-dimensional sparse and dense vector representations of text, images, and other data in information retrieval and machine learning systems.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:vector-similarity-measure", "label": "Vector Similarity Measure"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"},
      {"@id": "urn:ngm:class:nearest-neighbour-search", "label": "Nearest Neighbour Search"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:vector-space-model", "label": "Vector Space Model"},
      {"@id": "urn:ngm:class:inner-product", "label": "Inner Product"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:embedding", "label": "Embedding"},
      {"@id": "urn:ngm:class:l2-normalisation", "label": "L2 Normalisation"},
      {"@id": "urn:ngm:class:dot-product", "label": "Dot Product"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:document-clustering", "label": "Document Clustering"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:approximate-nearest-neighbour", "label": "Approximate Nearest Neighbour"},
      {"@id": "urn:ngm:class:bi-encoder", "label": "Bi-Encoder"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:euclidean-distance", "label": "Euclidean Distance"},
      {"@id": "urn:ngm:class:cross-encoder-reranking", "label": "Cross-Encoder Reranking"},
      {"@id": "urn:ngm:class:jaccard-similarity", "label": "Jaccard Similarity"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:knowledge-graph-embedding", "label": "Knowledge Graph Embedding"},
      {"@id": "urn:ngm:class:hyperbolic-embedding", "label": "Hyperbolic Embedding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:embedding-search", "label": "Embedding Search"},
      {"@id": "urn:ngm:class:tf-idf", "label": "TF-IDF"},
      {"@id": "urn:ngm:class:matryoshka-representation-learning", "label": "Matryoshka Representation Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:angular-similarity", "label": "Angular Similarity"},
    {"@id": "urn:ngm:class:normalised-dot-product-similarity", "label": "Normalised Dot Product Similarity"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Cosine Similarity]] measures the cosine of the angle θ between two vectors A and B as cos(θ) = (A · B) / (‖A‖ · ‖B‖), returning 1 for identical directions, 0 for orthogonal, and −1 for opposite. It is the canonical comparison metric for [[Embedding]] vectors produced by language models, where semantic relatedness is encoded as angular proximity in high-dimensional space. It powers [[Semantic Search]] in [[Vector Database]] systems and provides the first-stage relevance signal before [[Cross-Encoder Reranking]] refines results using full cross-attention.

- ### Relationships
  - Cosine Similarity is classified within [[Information Retrieval]] as a foundational relevance measure. It operates on [[Embedding]] representations produced by encoder models and enables [[Semantic Search]] by identifying the nearest-neighbour embeddings to a query. It is integral to [[Vector Database]] indexing strategies such as HNSW and IVF, which approximate cosine-nearest-neighbour search at scale. [[Embedding Search]] is the operational use of cosine similarity for retrieval, whilst [[Cross-Encoder Reranking]] is a complementary and typically more accurate but more expensive downstream refinement step.

- ### Content
  - The cosine measure's application to document similarity originates in Gerard Salton's vector space model for information retrieval (Cornell University, 1960s–1970s), formalised in the SMART retrieval system. Salton observed that for bag-of-words TF-IDF vectors, the magnitude of a document vector reflects its length rather than its topical content; normalising by magnitude—equivalent to computing the cosine—allows short and long documents covering the same topics to receive comparable similarity scores. The measure became the default in information retrieval through TREC evaluation benchmarks throughout the 1990s.

  - Formally, for unit-normalised vectors (‖A‖ = ‖B‖ = 1), the cosine similarity equals the dot product A · B, which is the inner product computed as Σ_i A_i · B_i. This algebraic identity makes cosine similarity computationally equivalent to dot-product similarity on L2-normalised embeddings, enabling its computation via highly optimised BLAS matrix multiplication routines on GPUs. In practice, embedding vectors from transformer encoders (BERT, E5, BGE) are L2-normalised before indexing so that approximate nearest-neighbour (ANN) libraries such as FAISS, ScaNN, and hnswlib can use inner product search to approximate cosine retrieval at billion-scale with sub-millisecond latency.

  - The cosine similarity measure is central to the retrieval-augmented generation (RAG) stack: query embeddings are compared against document chunk embeddings to retrieve context for language model conditioning. Bi-encoder models fine-tuned on sentence-similarity datasets (MSMARCO, NLI, BEIR benchmarks) produce embeddings specifically optimised for cosine retrieval. Matryoshka representation learning (MRL) trains embeddings so that sub-vectors at multiple dimensionalities (e.g., 64, 128, 256, 768 dimensions) preserve cosine-similarity ordering, allowing retrieval systems to trade accuracy for speed by truncating embeddings.

  - In 2024–2025, the limitations of cosine similarity as a sole retrieval criterion are increasingly recognised: it captures directional similarity but conflates semantically distinct vectors that happen to be oriented similarly due to embedding space geometry. Anisotropy in pretrained language model embedding spaces—where vectors cluster in narrow cones—reduces effective cosine discrimination. Research into hyperbolic embeddings, contrastive de-anisotropy post-processing (UMAP, whitening), and learned similarity functions is addressing these limitations. Late-interaction models such as ColBERT use token-level maximum cosine similarity (MaxSim) operators rather than single vector cosine, providing substantially better retrieval quality at modest additional cost.