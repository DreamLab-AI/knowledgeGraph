---
okf_version: "0.2"
type: Class
title: RAG Pipeline
resource: urn:ngm:class:rag-pipeline
domain: ai
description: A RAG pipeline is the end-to-end software architecture that implements retrieval-augmented generation, encompassing document ingestion and chunking, embedding generation, vector store indexing, query-time retrieval, context assembly, and language model generation to produce grounded, verifiable responses from external knowledge sources. It operationalises the RAG paradigm as a deployable, maintain
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:embedding-search
  - urn:ngm:class:vector-store
  - urn:ngm:class:chunking
relatedTo:
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:knowledge-graph
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# RAG Pipeline

A RAG pipeline is the end-to-end software architecture that implements retrieval-augmented generation, encompassing document ingestion and chunking, embedding generation, vector store indexing, query-time retrieval, context assembly, and language model generation to produce grounded, verifiable responses from external knowledge sources. It operationalises the RAG paradigm as a deployable, maintainable system with distinct stages, each subject to independent optimisation.
