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
  "definition": "An embedding is a learned mapping from discrete or high-dimensional objects—such as words, sentences, images, graphs, or code—into a continuous, low-dimensional vector space, such that semantically or functionally similar inputs are mapped to geometrically proximate vectors. Embeddings are fundamental to modern machine learning, enabling downstream tasks including similarity search, classification, clustering, and retrieval through compact, transferable representations.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:dimensionality-reduction", "label": "Dimensionality Reduction"},
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:latent-space", "label": "latent space"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An [[Embedding]] is a mathematical function mapping discrete or structured inputs into a continuous vector space—typically of 128 to 4096 dimensions—learned by a [[Neural Network]] during training so that semantic or functional similarity in the input domain corresponds to geometric proximity in the vector space. The resulting dense vectors lie within a [[latent space]] that compresses high-level structure into a compact, arithmetically manipulable form. Embeddings underpin [[Semantic Search]], [[Retrieval-Augmented Generation]], and recommendation systems, and are stored and searched efficiently in [[Vector Database]] infrastructure using approximate nearest-neighbour algorithms.

- ### Relationships
  - Embeddings are produced by [[Encoder]] architectures (transformer encoders, CNN feature extractors, graph neural networks) that perform [[Dimensionality Reduction]] from high-dimensional input spaces to compact vector representations. They enable [[Semantic Search]] by converting textual or multimodal queries into the same vector space as indexed documents, support [[Retrieval-Augmented Generation]] pipelines by providing retrievable context representations, and are persisted in [[Vector Database]] systems. They are fundamentally related to the [[latent space]] concept and to [[Feature Extraction]] as a broader ML paradigm.

- ### Content
  - The modern concept of learned embeddings traces to word2vec (Mikolov et al., 2013), which demonstrated that training a shallow neural network to predict word contexts from a large corpus produced vector representations with remarkable geometric properties—including additive analogical reasoning (king - man + woman ≈ queen). GloVe (2014) extended this via global co-occurrence statistics, and FastText (2016) added subword representations to handle morphologically rich languages and out-of-vocabulary words. These static word embeddings were quickly adopted across virtually all NLP applications.

  - Contextual embeddings—where a word's vector depends on its surrounding context—emerged with ELMo (2018) and were perfected by BERT (2018) and its successors. BERT's bidirectional transformer encoder produces contextual token embeddings that capture polysemy and long-range dependencies, enabling state-of-the-art performance on classification, named entity recognition, and question answering by fine-tuning or probing the representations. Sentence-level embeddings for semantic similarity and retrieval are produced by Sentence-BERT (SBERT) and its successors through contrastive fine-tuning on natural language inference and semantic textual similarity datasets.

  - Beyond text, embeddings have been extended to images (CLIP visual encoders), audio (wav2vec, EnCodec), molecules (graph neural network embeddings for drug discovery), code (CodeBERT, StarCoder embeddings), and heterogeneous knowledge graphs (TransE, RotatE). Multimodal embedding models align representations across modalities in a shared space, enabling cross-modal retrieval such as image search from text queries. Commercial embedding APIs (OpenAI Ada-002/3, Cohere Embed, Voyage AI) provide scalable embedding services for RAG and enterprise search applications.

  - In 2024-2025, embedding models are advancing on multiple fronts: long-context embeddings handling documents of 32k-128k tokens, instruction-tuned embeddings following task-specific instructions at query time (E5-instruct, BGE-M3), and matryoshka representation learning producing truncatable embeddings adaptable to storage and compute budgets without recomputation. The market for vector databases and embedding infrastructure (Pinecone, Weaviate, Qdrant, pgvector) has grown substantially, reflecting the embedding layer's status as critical infrastructure for modern AI applications.

