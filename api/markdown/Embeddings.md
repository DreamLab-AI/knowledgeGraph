public:: true

# Embeddings
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:embeddings",
  "@type": "Page",
  "vc:slug": "embeddings",
  "title": "Embeddings",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embeddings",
  "@type": "Class",
  "label": "Embeddings",
  "definition": "Embeddings are dense, low-dimensional vector representations of discrete objects—words, sentences, images, code, graphs, or arbitrary entities—learned by neural networks such that geometric relationships in the vector space correspond to semantic or functional relationships between the original objects. The core property is that semantically similar inputs map to nearby vectors, enabling tasks like similarity search, clustering, and retrieval to be performed as efficient geometric operations. Embeddings are the foundational representation layer of modern deep learning, underpinning language models, recommendation systems, search engines, and retrieval-augmented generation pipelines. They transform high-dimensional sparse inputs into compact continuous representations that downstream neural architectures—particularly attention-based transformers—can process and reason over.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"}],
  "sameAs": [
    {"@id": "urn:ngm:class:vector-representation", "label": "Vector Representation"},
    {"@id": "urn:ngm:class:neural-embedding", "label": "Neural Embedding"},
    {"@id": "urn:ngm:class:latent-representation", "label": "Latent Representation"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:token-embedding", "label": "Token Embedding"},
      {"@id": "urn:ngm:class:soft-prompt-embedding", "label": "Soft Prompt Embedding"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"},
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:contrastive-learning", "label": "Contrastive Learning"},
      {"@id": "urn:ngm:class:dimensionality-reduction", "label": "Dimensionality Reduction"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:one-hot-encoding", "label": "One-Hot Encoding"},
      {"@id": "urn:ngm:class:bag-of-words", "label": "Bag of Words"},
      {"@id": "urn:ngm:class:symbolic-representation", "label": "Symbolic Representation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cosine-similarity", "label": "Cosine Similarity"},
      {"@id": "urn:ngm:class:approximate-nearest-neighbour", "label": "Approximate Nearest Neighbour"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:multimodal-learning", "label": "Multimodal Learning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:knowledge-graph-embedding", "label": "Knowledge Graph Embedding"}
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Embeddings]] are dense, low-dimensional continuous vector representations of discrete or structured objects—words, sentences, images, code, graphs, or arbitrary entities—learned by [[Neural Network]] models such that geometric relationships in the [[Vector Space]] correspond to semantic or functional relationships in the original domain. The foundational principle is that similar inputs cluster near one another in the embedding space, enabling [[Semantic Search]], clustering, classification, and [[Retrieval-Augmented Generation]] to be implemented as fast geometric operations such as [[Cosine Similarity]] or Euclidean distance. Embeddings constitute the primary representation layer of modern [[Deep Learning]] and are foundational to [[Transformer]] architectures, [[Recommendation System]]s, and enterprise search infrastructure.

- ### Overview
  - Embeddings solve the problem of making discrete symbolic objects tractable for neural computation. A vocabulary of fifty thousand words cannot be fed directly into a network that expects continuous-valued inputs; one-hot vectors are valid but astronomically sparse and convey no relational structure. Embeddings compress such inputs into compact latent vectors—typically 64 to 4096 dimensions—where proximity in the vector space encodes semantic relatedness.
  - The key insight, demonstrated by [[Word2Vec]] in 2013, is that training a shallow network to predict word context from surrounding words produces vectors with genuinely meaningful geometry: semantic analogies can be solved via vector arithmetic, and clusters in the space correspond to syntactic categories, named-entity types, and thematic groups. This distributional hypothesis—that words appearing in similar contexts have similar meanings—had long precedent in linguistics but embeddings operationalised it at scale.
  - Modern embeddings are bidirectional and contextual: each token receives a representation conditioned on its full surrounding context, computed through multi-head self-attention layers in [[Transformer]] models such as BERT, RoBERTa, and their successors. This context-sensitivity resolves lexical ambiguity that static embeddings could not: the token "bank" in "river bank" and "bank account" receives distinct vectors.
  - The practical impact is enormous. Embeddings underlie virtually every recommendation engine, enterprise knowledge base search, fraud detection system, and multi-modal AI pipeline in production today. The emergence of [[Retrieval-Augmented Generation]] has made embedding inference a high-volume commodity service, with providers including OpenAI, Cohere, Voyage AI, and open-source projects such as Sentence-Transformers offering specialised embedding APIs.

- ### Key Components and Mechanisms
  - **[[Token Embedding]] layers** — the first component in nearly every [[Large Language Model]]. A learned lookup table maps vocabulary indices to dense vectors, typically initialised randomly and trained end-to-end.
  - **[[Positional Encoding]]** — since [[Transformer]] attention is permutation-invariant, positional embeddings (sinusoidal or learned) are added to token embeddings to inject sequential order information.
  - **[[Soft Prompt Embedding]]** — trainable embedding vectors prepended to inputs during prompt tuning; a parameter-efficient fine-tuning technique that modifies only a small set of embedding parameters rather than the full model.
  - **[[Embedding Model]]** — a dedicated neural model (e.g., SBERT, E5, GTE, text-embedding-3) trained specifically to produce high-quality sentence or document embeddings for retrieval and similarity tasks, using [[Contrastive Learning]] objectives such as InfoNCE, triplet loss, or multiple-negatives ranking loss.
  - **[[Contrastive Learning]]** — the dominant training paradigm for modern embedding models. Positive pairs (semantically related inputs) are pulled together; negative pairs are pushed apart in the embedding space. CLIP, SimCSE, and similar models are trained this way.
  - **Dimensionality and quantisation** — embedding vectors range from 64-dimensional (efficient lightweight models) to 4096-dimensional (large frontier models). Binary quantisation compresses vectors to one bit per dimension, enabling significant storage reduction with modest retrieval quality loss.
  - **Matryoshka Representation Learning (MRL)** — a training technique that ensures the first N dimensions of an embedding are independently meaningful for varying N, permitting dynamic dimension truncation without retraining.

- ### Lineage of Embedding Techniques
  - **Pre-neural** — Latent Semantic Analysis (LSA), Pointwise Mutual Information (PMI) matrices; distributional hypothesis formalised.
  - **Static word embeddings** — [[Word2Vec]] (skip-gram, CBOW; 2013), GloVe (global co-occurrence; 2014), FastText (subword units; 2016). Fixed vector per type, context-independent.
  - **Contextual embeddings** — ELMo (character-level LSTMs; 2018), GPT-1 (unidirectional transformer; 2018), BERT (bidirectional masked LM; 2019). Context-dependent token representations.
  - **Sentence and document embeddings** — Sentence-BERT (SBERT; 2019) fine-tunes BERT using siamese networks on NLI and STS data to produce fixed-size sentence vectors suitable for cosine comparison. Universal Sentence Encoder, InferSent.
  - **Multimodal embeddings** — CLIP (2021, OpenAI) aligns text and image in a shared vector space using contrastive pre-training on 400M image-text pairs. ALIGN, Florence, ImageBind extend to audio and depth.
  - **Long-context embeddings** — models such as NV-Embed, E5-Mistral, and GTE-Qwen represent entire documents (up to 32K tokens) for improved [[Retrieval-Augmented Generation]] recall.
  - **Graph embeddings** — Node2Vec, TransE, RotatE, and their successors extend the concept to [[Knowledge Graph]] entities and relations, mapping nodes and edges into continuous space while preserving structural properties.

- ### Applications and Use Cases
  - **[[Semantic Search]]** — query and document embeddings are compared by [[Cosine Similarity]] or approximate nearest-neighbour algorithms (HNSW, IVF) in [[Vector Database]] systems (Pinecone, Weaviate, Qdrant, Milvus, pgvector) to retrieve semantically relevant results beyond keyword overlap.
  - **[[Retrieval-Augmented Generation]]** — external documents are pre-indexed as embeddings; at inference, a user query is embedded and the top-K nearest documents are retrieved and injected into the language model context, grounding generation in up-to-date factual content.
  - **[[Recommendation System]]s** — user preference vectors and item content vectors are learned jointly; product, music, video, and article recommendations reduce to approximate nearest-neighbour lookup in the joint embedding space.
  - **Duplicate detection and entity resolution** — records referring to the same real-world entity (products, people, organisations) embed near one another, enabling efficient deduplication at scale.
  - **Zero-shot and few-shot classification** — candidate class labels are embedded alongside input examples; classification proceeds by finding the nearest label embedding, requiring no task-specific training data.
  - **Code search and code completion** — code models (CodeBERT, UniXcoder) produce function and repository embeddings enabling semantic code retrieval; GitHub Copilot's retrieval layer uses embedding-based search over opened files.
  - **Fraud and [[Anomaly Detection]]** — transaction sequences, user sessions, and network flows are embedded as temporal sequences; anomalies appear as outliers in the learned normal-behaviour manifold.
  - **Computational biology** — protein language models (ESMFold, ProtTrans) produce amino-acid sequence embeddings that encode structural and functional properties, accelerating drug discovery and function annotation.
  - **[[Knowledge Graph Embedding]]** — link prediction and entity alignment in knowledge graphs (Wikidata, Freebase) use embeddings to infer missing relations and merge overlapping graphs.
  - **[[Multimodal Learning]]** — shared embedding spaces across text, image, audio, and video modalities enable cross-modal retrieval, image captioning, and visual question answering.

- ### Relationships
  - partOf:: [[Representation Learning]]
  - uses:: [[Transformer]]
  - uses:: [[Contrastive Learning]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Dimensionality Reduction]]
  - hasPart:: [[Token Embedding]]
  - hasPart:: [[Soft Prompt Embedding]]
  - hasPart:: [[Embedding Model]]
  - hasPart:: [[Positional Encoding]]
  - enables:: [[Semantic Search]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Vector Database]]
  - enables:: [[Recommendation System]]
  - enables:: [[Anomaly Detection]]
  - requires:: [[Neural Network]]
  - requires:: [[Training Data]]
  - dependsOn:: [[Backpropagation]]
  - dependsOn:: [[Loss Function]]
  - contrastsWith:: [[One-Hot Encoding]]
  - contrastsWith:: [[Bag of Words]]
  - contrastsWith:: [[Symbolic Representation]]
  - relatedTo:: [[Cosine Similarity]]
  - relatedTo:: [[Approximate Nearest Neighbour]]
  - relatedTo:: [[Knowledge Graph]]
  - relatedTo:: [[Multimodal Learning]]
  - bridges-to:: [[Knowledge Graph Embedding]]
  - bridges-to:: [[Spatial Computing]]

- ### Standards and Context
  - There is no single formal standard governing embedding formats; interoperability relies on de facto conventions. The most widely adopted serialisation is flat binary files of 32-bit floats (numpy `.npy`, HuggingFace safetensors). ONNX provides a model serialisation format enabling cross-framework inference of embedding models.
  - The Sentence-Transformers library (Reimers & Gurevych) and the Massive Text Embedding Benchmark (MTEB) have emerged as the primary community standards for evaluating and distributing embedding models. MTEB covers retrieval, clustering, classification, and semantic similarity tasks across many languages, and MTEB leaderboard rankings are widely used to select embedding models.
  - OpenAI's Embeddings API, Cohere's Embed API, and Voyage AI define the dominant commercial interfaces, typically accepting text strings and returning JSON arrays of floats. Most [[Vector Database]] vendors natively accept these formats.
  - IEEE and ACM have not formally standardised embedding methods, but the deep learning community's reproducibility norms—publishing model weights, training code, and evaluation benchmarks—provide a functional standards layer through HuggingFace Hub and Papers With Code.

- ### Provenance
  - sources:: Word2Vec (Mikolov et al., 2013); GloVe (Pennington et al., 2014); BERT (Devlin et al., 2019); SBERT (Reimers & Gurevych, 2019); CLIP (Radford et al., 2021); Matryoshka Representation Learning (Kusupati et al., 2022); MTEB (Muennighoff et al., 2023)
  - updated:: 2026-06-13
