---
okf_version: "0.2"
type: Class
title: Vector Embedding
resource: urn:ngm:class:vector-embedding
domain: ai
description: A vector embedding is a dense, fixed-length numerical representation of a discrete object — a word, sentence, image, or user — in a continuous high-dimensional space, learned such that semantically similar objects map to nearby points. Embeddings convert unstructured data into a form amenable to mathematical operations like distance and dot product, enabling similarity search, clustering, recommen
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:embedding
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:vector-database
uses:
  - urn:ngm:class:embedding-model
relatedTo:
  - urn:ngm:class:natural-language-processing
---

# Vector Embedding

A vector embedding is a dense, fixed-length numerical representation of a discrete object — a word, sentence, image, or user — in a continuous high-dimensional space, learned such that semantically similar objects map to nearby points. Embeddings convert unstructured data into a form amenable to mathematical operations like distance and dot product, enabling similarity search, clustering, recommendation, and retrieval. They are produced by neural encoders and are the representational substrate beneath modern search, retrieval-augmented generation, and multimodal AI.
