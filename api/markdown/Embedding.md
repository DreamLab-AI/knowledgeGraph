public:: true

# Embedding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:embedding",
  "@type": "Page",
  "vc:slug": "embedding",
  "title": "Embedding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embedding",
  "@type": "Class",
  "label": "Embedding",
  "definition": "An embedding is a learned mapping from discrete or high-dimensional objects—such as words, sentences, images, graphs, or code—into a continuous, low-dimensional vector space, such that semantically or functionally similar inputs are mapped to geometrically proximate vectors. Embeddings are fundamental to modern machine learning, enabling downstream tasks including similarity search, classification, clustering, and retrieval through compact, transferable representations. The quality of an embedding space is typically measured by how well geometric proximity in the vector space reflects semantic or functional similarity in the original domain.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:dimensionality-reduction", "label": "Dimensionality Reduction"},
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:contrastive-learning", "label": "Contrastive Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:text-classification", "label": "Text Classification"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:clustering", "label": "Clustering"},
      {"@id": "urn:ngm:class:cross-modal-retrieval", "label": "Cross-Modal Retrieval"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:latent-space", "label": "Latent Space"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:word2vec", "label": "Word2Vec"},
      {"@id": "urn:ngm:class:bert", "label": "BERT"},
      {"@id": "urn:ngm:class:approximate-nearest-neighbour", "label": "Approximate Nearest Neighbour"},
      {"@id": "urn:ngm:class:knowledge-graph-embedding", "label": "Knowledge Graph Embedding"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:one-hot-encoding", "label": "One-Hot Encoding"},
      {"@id": "urn:ngm:class:sparse-representation", "label": "Sparse Representation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-index", "label": "Spatial Index"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:vector-embedding", "label": "Vector Embedding"},
    {"@id": "urn:ngm:class:dense-vector-representation", "label": "Dense Vector Representation"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An [[Embedding]] is a learned mathematical mapping that transforms discrete or structured inputs—such as words, sentences, images, code snippets, or graph nodes—into dense, continuous vectors in a low-dimensional [[Latent Space]], such that semantic or functional similarity in the input domain corresponds to geometric proximity in the output space. The mapping is typically learned by a [[Neural Network]] (most commonly a [[Transformer]] encoder) by optimising a [[Loss Function]] that encourages similar inputs to cluster together and dissimilar inputs to separate. The resulting vectors compress rich structure into an arithmetically manipulable form that supports [[Semantic Search]], [[Clustering]], [[Text Classification]], and [[Retrieval-Augmented Generation]] without explicit symbolic rules.

- ### Overview
  - Embeddings solve the fundamental problem of representing symbolic, discrete, or otherwise non-numeric data in a form that statistical models can process efficiently. Raw text, for instance, cannot be directly fed into a gradient-based optimiser; mapping it to a fixed-length dense vector provides a continuous, differentiable representation.
  - The core intuition is the distributional hypothesis: entities that appear in similar contexts tend to have similar meanings, and this similarity should be reflected geometrically. Models trained with this objective produce spaces with remarkable algebraic structure—vector arithmetic can encode analogical relationships and compositional semantics.
  - Embeddings are now foundational infrastructure in AI: virtually every large-scale natural language processing, computer vision, and multimodal system relies on embedding layers internally, and embedding APIs are offered as standalone services for enterprise search, personalisation, and knowledge management.
  - The quality of an embedding space is empirically assessed via benchmarks measuring semantic textual similarity, retrieval recall at various ranks, and performance on downstream tasks after linear probing or fine-tuning.

- ### Key Mechanisms
  - **Training objectives** shape the geometry of the resulting space:
    - Predictive objectives (word2vec skip-gram, CBOW) train a shallow network to predict a word from its context window or vice versa, producing static word vectors.
    - Masked language modelling ([[BERT]], RoBERTa) trains a deep bidirectional [[Transformer]] to reconstruct masked tokens, yielding rich contextual token representations.
    - [[Contrastive Learning]] objectives (SimCSE, CLIP) push representations of matched pairs (e.g. image and its caption) together and unmatched pairs apart, producing aligned multimodal spaces.
    - Matryoshka Representation Learning trains a single model to produce truncatable embeddings at multiple nested dimensionalities, enabling storage–accuracy trade-offs without recomputation.
  - **Architectures** used to produce embeddings:
    - [[Encoder]]-only transformers (BERT, RoBERTa, E5, BGE, Nomic-Embed) for text.
    - Dual-encoder or bi-encoder networks (Sentence-BERT) for efficient sentence-level retrieval.
    - Convolutional and vision transformer encoders (CLIP ViT, DINOv2) for image embeddings.
    - Graph Neural Networks (TransE, RotatE, GraphSAGE) for [[Knowledge Graph Embedding]] and molecular representations.
    - Recurrent networks (wav2vec, EnCodec) for audio sequences.
  - **[[Dimensionality Reduction]]** techniques complement embeddings:
    - Principal Component Analysis (PCA) and UMAP reduce embedding dimensions for visualisation or storage cost.
    - Product quantisation compresses vectors for efficient indexing in [[Vector Database]] systems.
  - **Similarity metrics** used to compare embeddings:
    - Cosine similarity is the canonical metric for normalised text embeddings.
    - Dot product (inner product) is preferred for maximum inner product search (MIPS) in recommendation contexts.
    - Euclidean distance is used in some metric-learning settings.
    - [[Approximate Nearest Neighbour]] algorithms (HNSW, IVF-PQ, Annoy) enable sub-linear retrieval at scale.

- ### Applications and Use Cases
  - **[[Semantic Search]]** — queries and documents are embedded into the same space; retrieval ranks by cosine similarity rather than keyword overlap, capturing paraphrase and conceptual equivalence.
  - **[[Retrieval-Augmented Generation]]** — at inference time, a query embedding retrieves relevant context chunks from a [[Vector Database]] (Pinecone, Weaviate, Qdrant, pgvector, Milvus); these chunks are prepended to the language model prompt, grounding generation in retrieved facts.
  - **[[Recommendation System]]** — user and item embeddings are learned jointly so that a user's preference vector is geometrically close to the vectors of items they would like, enabling efficient candidate retrieval.
  - **[[Text Classification]] and clustering** — embeddings serve as feature inputs to lightweight classifiers or [[Clustering]] algorithms (k-means, HDBSCAN), enabling few-shot and zero-shot classification.
  - **[[Cross-Modal Retrieval]]** — multimodal models like CLIP align image and text embeddings in a shared space, enabling text-to-image and image-to-text search (used in DALL-E, Google Lens, Bing Visual Search).
  - **[[Knowledge Graph Embedding]]** — entities and relations in knowledge graphs are embedded such that plausible triples score higher than implausible ones, enabling link prediction and completion.
  - **Drug discovery and cheminformatics** — molecular graph embeddings encode chemical structure, enabling similarity search over compound libraries and property prediction.
  - **Code search and completion** — code embeddings (CodeBERT, StarCoder) enable semantic code search, clone detection, and code-to-documentation retrieval.
  - **Anomaly detection** — embeddings of normal behaviour cluster tightly; outliers appear as distant points, enabling unsupervised detection without labelled examples.
  - **Personalisation** — long-term user interaction histories are compressed into a single embedding representing user preferences, enabling real-time retrieval of personalised content.

- ### Notable Embedding Models and Systems
  - **Word2Vec** — the seminal shallow neural network model by Mikolov et al. (2013) that demonstrated distributional word vectors with additive analogy structure.
  - **GloVe** — global vectors trained on co-occurrence statistics, capturing global corpus statistics alongside local context windows.
  - **FastText** — extends word2vec with subword (character n-gram) representations for out-of-vocabulary generalisation.
  - **[[BERT]]** — bidirectional encoder from Google (2018) producing contextual token embeddings; foundation for most subsequent text embedding research.
  - **Sentence-BERT (SBERT)** — bi-encoder fine-tuned on natural language inference data to produce semantically meaningful sentence-level embeddings for efficient similarity search.
  - **CLIP** — OpenAI contrastive model aligning image and text encoders; the canonical multimodal embedding model.
  - **E5, BGE, Nomic-Embed, Voyage AI** — modern instruction-tuned text embedding models that accept task descriptions at query time to condition the representation.
  - **Matryoshka Embedding Models** — produce nested representations allowing dimension truncation without quality collapse.

- ### Relationships
  - uses:: [[Neural Network]]
  - uses:: [[Transformer]]
  - uses:: [[Encoder]]
  - uses:: [[Dimensionality Reduction]]
  - uses:: [[Contrastive Learning]]
  - enables:: [[Semantic Search]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Vector Database]]
  - enables:: [[Text Classification]]
  - enables:: [[Recommendation System]]
  - enables:: [[Clustering]]
  - enables:: [[Cross-Modal Retrieval]]
  - requires:: [[Training Data]]
  - requires:: [[Loss Function]]
  - relatedTo:: [[Latent Space]]
  - relatedTo:: [[Feature Extraction]]
  - relatedTo:: [[Word2Vec]]
  - relatedTo:: [[BERT]]
  - relatedTo:: [[Approximate Nearest Neighbour]]
  - relatedTo:: [[Knowledge Graph Embedding]]
  - contrastsWith:: [[One-Hot Encoding]]
  - contrastsWith:: [[Sparse Representation]]
  - bridges-to:: [[Spatial Index]]
  - bridges-to:: [[Knowledge Graph]]
  - subClassOf:: [[Representation Learning]]

- ### Standards and Context
  - There is no single formal standard governing embeddings, but several community conventions have emerged:
    - The Massive Text Embedding Benchmark (MTEB) by Hugging Face is the de facto evaluation standard, covering retrieval, classification, clustering, semantic textual similarity, and reranking across dozens of datasets and languages.
    - The BEIR benchmark standardises zero-shot information retrieval evaluation across heterogeneous corpora.
    - ONNX Runtime and GGUF formats are increasingly used to export embedding models for cross-platform inference.
    - The OpenAI Embeddings API and Cohere Embed API have established de facto conventions for embedding request/response schemas used by many downstream tools.
  - Embedding dimensions of 768 (BERT-base), 1024 (BERT-large), and 1536 (OpenAI Ada-002) have become reference sizes; recent models explore 256–4096 dimensions with matryoshka truncation.
  - Privacy considerations: embeddings can leak sensitive information from training data and may be partially inverted; regulatory guidance (GDPR, EU AI Act) increasingly requires disclosure when embeddings encode personal data.

- ### Provenance
  - sources:: Mikolov et al. (2013) word2vec; Devlin et al. (2018) BERT; Reimers & Gurevych (2019) Sentence-BERT; Radford et al. (2021) CLIP; Muennighoff et al. (2022) MTEB; Kusupati et al. (2022) Matryoshka Representation Learning
  - updated:: 2026-06-13
