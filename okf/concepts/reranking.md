---
okf_version: "0.2"
type: Class
title: Reranking
resource: urn:ngm:class:reranking
domain: artificial-intelligence
description: Reranking is a second-stage retrieval step in which an initial, computationally cheap set of candidate documents or passages is reordered by a more expensive, higher-precision model that scores each candidate's relevance to the query more accurately. It is a standard component of retrieval-augmented generation and search pipelines, where a fast retriever (such as a bi-encoder or lexical index) fir
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:information-retrieval
partOf:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:context-engineering
---

# Reranking

Reranking is a second-stage retrieval step in which an initial, computationally cheap set of candidate documents or passages is reordered by a more expensive, higher-precision model that scores each candidate's relevance to the query more accurately. It is a standard component of retrieval-augmented generation and search pipelines, where a fast retriever (such as a bi-encoder or lexical index) first narrows a large corpus down to a manageable candidate set, and a cross-encoder or learned ranker then refines the ordering. Reranking improves precision at the cost of additional latency, so candidate set sizes are tuned to balance quality and speed.
