---
okf_version: "0.2"
type: Class
title: Retrieval-Augmented Generation
resource: urn:ngm:class:retrieval-augmented-generation
domain: artificial-intelligence
description: Retrieval-Augmented Generation (RAG) is an AI inference architecture that augments large language model generation by dynamically retrieving semantically relevant passages from an external knowledge store at query time, concatenating them into the model context window before the response is produced. A retriever component—typically a dense bi-encoder backed by a vector database—embeds both the que
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:context-window-management
requires:
  - urn:ngm:class:vector-database
  - urn:ngm:class:embedding-model
  - urn:ngm:class:chunking
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:chunking
  - urn:ngm:class:nearest-neighbor-search
enables:
  - urn:ngm:class:question-answering
  - urn:ngm:class:semantic-search
  - urn:ngm:class:hallucination-reduction
  - urn:ngm:class:knowledge-grounding
  - urn:ngm:class:source-attribution
  - urn:ngm:class:hallucination-reduction
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:parametric-knowledge
bridgesTo:
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:knowledge-management
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-inference
---

# Retrieval-Augmented Generation

Retrieval-Augmented Generation (RAG) is an AI inference architecture that augments large language model generation by dynamically retrieving semantically relevant passages from an external knowledge store at query time, concatenating them into the model context window before the response is produced. A retriever component—typically a dense bi-encoder backed by a vector database—embeds both the query and document corpus into a shared latent space and selects the top-k most similar chunks via approximate nearest-neighbour search. This non-parametric memory mechanism decouples factual knowledge from frozen model weights, dramatically reducing hallucination rates, enabling post-deployment knowledge updates without retraining, and providing fine-grained source attribution for generated claims. RAG has become the dominant architectural pattern for enterprise knowledge-intensive natural language processing applications, including question answering, customer support, legal research, and medical information retrieval.
