---
okf_version: "0.2"
type: Class
title: Dense Passage Retrieval
resource: urn:ngm:class:dense-passage-retrieval
domain: ai
description: "Dense Passage Retrieval (DPR) is an information retrieval approach in which both queries and document passages are encoded into dense continuous vector representations using dual-encoder neural networks, enabling similarity search via dot-product or cosine distance rather than sparse lexical matching. It substantially outperforms traditional BM25 retrieval on semantic matching tasks and forms the "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:neural-information-retrieval
  - urn:ngm:class:semantic-search
  - urn:ngm:class:bi-encoder-retrieval
  - urn:ngm:class:realm
  - urn:ngm:class:drqa
  - urn:ngm:class:orqa
  - urn:ngm:class:colbert
  - urn:ngm:class:splade
  - urn:ngm:class:bge-m3
  - urn:ngm:class:ance
  - urn:ngm:class:e5-embedding
  - urn:ngm:class:hybrid-retrieval
hasPart:
  - urn:ngm:class:query-encoder
  - urn:ngm:class:passage-encoder
  - urn:ngm:class:faiss-index
  - urn:ngm:class:contrastive-training
  - urn:ngm:class:hard-negative-mining
  - urn:ngm:class:offline-indexing-pipeline
  - urn:ngm:class:online-retrieval-service
  - urn:ngm:class:in-batch-negative-sampling
requires:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-database
  - urn:ngm:class:training-dataset
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:bert
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:contrastive-learning
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
  - urn:ngm:class:open-domain-qa
  - urn:ngm:class:knowledge-intensive-nlp
  - urn:ngm:class:hallucination-reduction
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:fact-checking
dependsOn:
  - urn:ngm:class:bert
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:embedding-space
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:bi-encoder-architecture
  - urn:ngm:class:maximum-inner-product-search
  - urn:ngm:class:in-batch-negative-training
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:offline-index-online-serve-pattern
contrastsWith:
  - urn:ngm:class:bm25
  - urn:ngm:class:tf-idf
  - urn:ngm:class:colbert
  - urn:ngm:class:splade
  - urn:ngm:class:sparse-retrieval
  - urn:ngm:class:cross-encoder
  - urn:ngm:class:closed-book-generation
uses:
  - urn:ngm:class:embedding
  - urn:ngm:class:transformer
  - urn:ngm:class:vector-database
  - urn:ngm:class:faiss
  - urn:ngm:class:bm25
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:dot-product-similarity
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:ivf-index
  - urn:ngm:class:cross-encoder-reranking
supports:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:open-domain-question-answering
  - urn:ngm:class:dialogue-systems
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:legal-research
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:code-search
standardizedBy:
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:ms-marco
  - urn:ngm:class:trec-deep-learning-track
  - urn:ngm:class:kilt-benchmark
  - urn:ngm:class:natural-questions
relatedTo:
  - urn:ngm:class:embedding-search
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:language-model
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:vector-database
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:fusionindecoder
  - urn:ngm:class:atlas
  - urn:ngm:class:question-answering
---

# Dense Passage Retrieval

Dense Passage Retrieval (DPR) is an information retrieval approach in which both queries and document passages are encoded into dense continuous vector representations using dual-encoder neural networks, enabling similarity search via dot-product or cosine distance rather than sparse lexical matching. It substantially outperforms traditional BM25 retrieval on semantic matching tasks and forms the retriever component of open-domain question-answering and retrieval-augmented generation systems.
