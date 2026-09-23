---
okf_version: "0.2"
type: Class
title: ColBERT
resource: urn:ngm:class:colbert
domain: machine-learning
description: A late-interaction neural retrieval model that encodes queries and documents into per-token embedding matrices with BERT and scores relevance by summing each query token's maximum similarity over document tokens, retaining much of the accuracy of full cross-encoder attention whilst permitting document embeddings to be precomputed and indexed for scalable, fast retrieval.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:dense-retrieval
enables:
  - urn:ngm:class:semantic-search
contrastsWith:
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:dense-passage-retrieval
uses:
  - urn:ngm:class:bert
relatedTo:
  - urn:ngm:class:hybrid-search
  - urn:ngm:class:beir-benchmark
---

# ColBERT

A late-interaction neural retrieval model that encodes queries and documents into per-token embedding matrices with BERT and scores relevance by summing each query token's maximum similarity over document tokens, retaining much of the accuracy of full cross-encoder attention whilst permitting document embeddings to be precomputed and indexed for scalable, fast retrieval.
