---
okf_version: "0.2"
type: Class
title: Query Vector
resource: urn:ngm:class:query-vector
domain: artificial-intelligence
description: "A Query Vector is a dense numerical representation of a search query produced by an embedding model, enabling similarity-based retrieval in a high-dimensional vector space. It is matched against stored document or passage embeddings using distance metrics such as cosine similarity or inner product, forming the core retrieval mechanism in semantic search and retrieval-augmented generation systems. "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:embedding-model
requires:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-database
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:information-retrieval
partOf:
  - urn:ngm:class:retrieval-augmented-generation
relatedTo:
  - urn:ngm:class:query-key-value
  - urn:ngm:class:query-processor
  - urn:ngm:class:retrieval-augmented-generation-rag
  - urn:ngm:class:natural-language-processing
---

# Query Vector

A Query Vector is a dense numerical representation of a search query produced by an embedding model, enabling similarity-based retrieval in a high-dimensional vector space. It is matched against stored document or passage embeddings using distance metrics such as cosine similarity or inner product, forming the core retrieval mechanism in semantic search and retrieval-augmented generation systems. Query vectors encode the semantic intent of a query independent of exact keyword overlap, allowing conceptually related results to be surfaced even when surface-level vocabulary differs.
