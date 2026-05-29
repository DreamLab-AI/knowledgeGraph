- ### Definition
  - An embedding model is a neural network trained to project discrete or high-dimensional inputs—such as tokens, sentences, images, or knowledge-graph nodes—into dense, fixed-dimensional vector representations in a continuous latent space that preserves semantic and structural relationships. The geometry of the resulting embedding space encodes similarity: semantically related inputs map to vectors with high cosine similarity, enabling downstream tasks such as semantic search, clustering, classification, and retrieval-augmented generation. Embedding models are trained using objectives such as contrastive learning, masked language modelling, or cross-modal alignment.

- ### Semantic Classification
  - owl-class:: embedding-model:Embedding Model
  - owl-role:: Concept

- ### Relationships
  - enables [[Semantic Search]]
  - enables [[Retrieval-Augmented Generation]]
  - dependsOn [[Transformer]]
  - uses [[Vector Database]]
  - relatedTo [[Knowledge Graph]]

- ### Content
  - Embedding models occupy a foundational position in the modern AI stack, transforming raw unstructured data into representations that other components—classifiers, search indices, recommendation engines—can process efficiently. Transformer-based sentence encoders such as BERT-derived models learn contextualised token embeddings, then pool them to form sentence-level or document-level vectors suitable for batch similarity computations.
  - The quality of an embedding space is typically measured by benchmark tasks such as Semantic Textual Similarity (STS-Benchmark), BEIR retrieval benchmarks, and the MTEB (Massive Text Embedding Benchmark) suite. High-quality embeddings cluster semantically related texts tightly and maintain clear separation between unrelated clusters, enabling approximate nearest-neighbour search with HNSW or FAISS indexing to retrieve relevant documents in milliseconds at billion-scale corpora.
  - Multimodal embedding models align representations from different input modalities into a shared vector space, enabling cross-modal retrieval—finding images given a text query or vice versa. Models trained with contrastive objectives on image-text pairs (such as CLIP-style architectures) demonstrate strong zero-shot classification and retrieval capability. Embedding models are also central to knowledge graph completion, where entity and relation embeddings are learned to predict missing links through scoring functions such as TransE, RotatE, or ComplEx.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z