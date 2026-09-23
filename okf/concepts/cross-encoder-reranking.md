---
okf_version: "0.2"
type: Class
title: Cross-Encoder Reranking
resource: urn:ngm:class:cross-encoder-reranking
domain: machine-learning
description: Cross-Encoder Reranking is a two-stage information retrieval technique in which a cross-encoder transformer model receives a query and a candidate document concatenated as a single input sequence, performs full bidirectional self-attention across both, and outputs a relevance score used to re-order an initial candidate set retrieved by a faster but less accurate first-stage retriever. It typically
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:neural-information-retrieval
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer
requires:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:transformer
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:dense-passage-retrieval
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:knowledge-retrieval
  - urn:ngm:class:agentic-rag
dependsOn:
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:gpu-inference
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:bert
  - urn:ngm:class:embedding-model
implements:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:neural-information-retrieval
contrastsWith:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:bi-encoder
  - urn:ngm:class:bm25
  - urn:ngm:class:colbert
  - urn:ngm:class:embedding-model
bridgesTo:
  - urn:ngm:class:natural-language-processing
uses:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:bert
  - urn:ngm:class:self-attention
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:contrastive-learning
supports:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:neural-information-retrieval
standardizedBy:
  - urn:ngm:class:acm-sigir
  - urn:ngm:class:trec-deep-learning-track
relatedTo:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:reciprocal-rank-fusion
  - urn:ngm:class:large-language-models
  - urn:ngm:class:hybrid-retrieval
---

# Cross-Encoder Reranking

Cross-Encoder Reranking is a two-stage information retrieval technique in which a cross-encoder transformer model receives a query and a candidate document concatenated as a single input sequence, performs full bidirectional self-attention across both, and outputs a relevance score used to re-order an initial candidate set retrieved by a faster but less accurate first-stage retriever. It typically yields substantially higher ranking quality than bi-encoder first-stage retrieval at the cost of higher computational latency.
