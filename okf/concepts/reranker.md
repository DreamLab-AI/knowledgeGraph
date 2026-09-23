---
okf_version: "0.2"
type: Class
title: Reranker
resource: urn:ngm:class:reranker
domain: ai
description: A reranker is a second-stage scoring model in information retrieval and retrieval-augmented generation pipelines that reorders a set of candidate documents or passages — initially retrieved by a fast first-stage retriever such as a dense vector index — using a more computationally intensive cross-encoder or LLM-based relevance model that jointly encodes the query and each candidate together, produ
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:information-retrieval
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
uses:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:language-model
  - urn:ngm:class:machine-learning-discipline-technique
---

# Reranker

A reranker is a second-stage scoring model in information retrieval and retrieval-augmented generation pipelines that reorders a set of candidate documents or passages — initially retrieved by a fast first-stage retriever such as a dense vector index — using a more computationally intensive cross-encoder or LLM-based relevance model that jointly encodes the query and each candidate together, producing a higher-precision relevance score than bi-encoder similarity alone. Rerankers trade retrieval speed for ranking quality, operating on a reduced candidate set (typically 50-200 passages) rather than the full corpus, thereby making deep transformer inference tractable at query time.
