---
okf_version: "0.2"
type: Class
title: Vector Space Model
resource: urn:ngm:class:vector-space-model
domain: machine-learning
description: "The vector space model represents documents, queries or tokens as vectors in a high-dimensional space, typically weighted by term frequency, so that similarity between items can be computed geometrically. Cosine similarity between vectors is the standard measure of relatedness in this representation, underpinning classical information retrieval ranking. Modern token and word embeddings generalise "
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:information-retrieval
---

# Vector Space Model

The vector space model represents documents, queries or tokens as vectors in a high-dimensional space, typically weighted by term frequency, so that similarity between items can be computed geometrically. Cosine similarity between vectors is the standard measure of relatedness in this representation, underpinning classical information retrieval ranking. Modern token and word embeddings generalise the vector space model by learning dense, continuous representations rather than sparse term-frequency vectors.
