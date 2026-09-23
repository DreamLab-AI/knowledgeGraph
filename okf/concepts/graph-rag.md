---
okf_version: "0.2"
type: Class
title: GraphRAG
resource: urn:ngm:class:graph-rag
domain: ai
description: GraphRAG (Graph Retrieval-Augmented Generation) is an architecture that extends standard retrieval-augmented generation by structuring the indexed knowledge corpus as a knowledge graph of entities and relationships rather than as a flat collection of text chunks, enabling the retrieval system to answer questions that require multi-hop reasoning over connected facts — such as 'what do entities A an
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:retrieval-augmented-generation
enables:
  - urn:ngm:class:ontology-in-llm-operations
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:knowledge-base
supports:
  - urn:ngm:class:semantic-web-linked-data-standard
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:graph-database
  - urn:ngm:class:ontology
---

# GraphRAG

GraphRAG (Graph Retrieval-Augmented Generation) is an architecture that extends standard retrieval-augmented generation by structuring the indexed knowledge corpus as a knowledge graph of entities and relationships rather than as a flat collection of text chunks, enabling the retrieval system to answer questions that require multi-hop reasoning over connected facts — such as 'what do entities A and B have in common' — which naive vector similarity search over disconnected chunks cannot reliably resolve. Microsoft Research's GraphRAG implementation, open-sourced in 2024, uses an LLM to extract entity-relationship triples from a document corpus, builds a community-detected hierarchical graph, generates community summaries at multiple granularities, and retrieves relevant subgraphs and summaries at query time to ground the LLM's response in structured relational context.
