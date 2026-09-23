---
okf_version: "0.2"
type: Class
title: Embedding Model
resource: urn:ngm:class:embedding-model
domain: artificial-intelligence
description: "An embedding model is a neural network trained to project discrete or high-dimensional inputs—such as tokens, sentences, images, audio segments, or knowledge-graph nodes—into dense, fixed-dimensional vector representations in a continuous latent space that preserves semantic and structural relationships. The geometry of the resulting embedding space encodes similarity: semantically related inputs "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:representation-learning
hasPart:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:pooling-layer
  - urn:ngm:class:latent-space
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:encoder
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:training-data
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:zero-shot-classification
  - urn:ngm:class:knowledge-graph-completion
  - urn:ngm:class:cross-lingual-transfer
  - urn:ngm:class:clustering
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:training-data
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network-text-tokenisation
implements:
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:bi-encoder
  - urn:ngm:class:sentence-encoder
  - urn:ngm:class:feature-extraction
contrastsWith:
  - urn:ngm:class:sparse-representation
  - urn:ngm:class:large-language-model
  - urn:ngm:class:tf-idf
  - urn:ngm:class:bm25
  - urn:ngm:class:cross-encoder
bridgesTo:
  - urn:ngm:class:spatial-index
  - urn:ngm:class:knowledge-graph-completion
  - urn:ngm:class:vector-database
uses:
  - urn:ngm:class:vector-database
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:tokenization
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:representation-learning
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:information-retrieval
standardizedBy:
  - urn:ngm:class:mteb
  - urn:ngm:class:beir
  - urn:ngm:class:hugging-face
  - urn:ngm:class:sentence-transformers
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:word-embedding
---

# Embedding Model

An embedding model is a neural network trained to project discrete or high-dimensional inputs—such as tokens, sentences, images, audio segments, or knowledge-graph nodes—into dense, fixed-dimensional vector representations in a continuous latent space that preserves semantic and structural relationships. The geometry of the resulting embedding space encodes similarity: semantically related inputs map to vectors with high cosine similarity, enabling downstream tasks such as semantic search, clustering, classification, and retrieval-augmented generation. Embedding models are trained using objectives such as contrastive learning, masked language modelling, or cross-modal alignment, and are evaluated on standardised benchmarks including MTEB and BEIR.
