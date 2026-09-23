---
okf_version: "0.2"
type: Class
title: LlamaIndex
resource: urn:ngm:class:meta-llama-model-family-index
domain: ai
description: LlamaIndex (formerly GPT Index) is an open-source data framework and Python library that provides the abstractions and tooling needed to connect large language models with external data sources through structured indexing, retrieval, and query pipelines, primarily enabling production-grade retrieval-augmented generation (RAG) applications. It handles the full pipeline from document ingestion and c
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:agent-frameworks
hasPart:
  - urn:ngm:class:data-connectors
  - urn:ngm:class:reranking
requires:
  - urn:ngm:class:chunking
  - urn:ngm:class:text-embeddings
  - urn:ngm:class:python
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:question-answering
implements:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:agentic-workflow
contrastsWith:
  - urn:ngm:class:lang-chain
bridgesTo:
  - urn:ngm:class:data
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:embeddings
  - urn:ngm:class:vector-database
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer
  - urn:ngm:class:nearest-neighbor-search
supports:
  - urn:ngm:class:enterprise-ai
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:fine-tuning
---

# LlamaIndex

LlamaIndex (formerly GPT Index) is an open-source data framework and Python library that provides the abstractions and tooling needed to connect large language models with external data sources through structured indexing, retrieval, and query pipelines, primarily enabling production-grade retrieval-augmented generation (RAG) applications. It handles the full pipeline from document ingestion and chunking, through embedding and vector storage, to query decomposition, retrieval, reranking, and response synthesis, providing high-level abstractions over underlying LLMs, embedding models, and vector databases. LlamaIndex is positioned as the data orchestration complement to LangChain's agent orchestration focus, with particular strength in structured data retrieval and multi-document reasoning.
