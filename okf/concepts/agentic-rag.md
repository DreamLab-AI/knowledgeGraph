---
okf_version: "0.2"
type: Class
title: Agentic RAG
resource: urn:ngm:class:agentic-rag
domain: ai
description: "Agentic RAG is an architecture that augments retrieval-augmented generation with an autonomous agent loop, letting a language model plan, decide when and what to retrieve, issue multiple queries across heterogeneous sources, reflect on retrieved evidence quality, reformulate queries, and verify results before generating a final response. Unlike the single-pass retrieve-then-read pipeline of naive "
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:ai-application
hasPart:
  - urn:ngm:class:query-rewriting
  - urn:ngm:class:retrieval-grader
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:self-rag
  - urn:ngm:class:corrective-rag
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:evidence-accumulator
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agent-loop
  - urn:ngm:class:vector-database
  - urn:ngm:class:embedding-model
  - urn:ngm:class:chunking
enables:
  - urn:ngm:class:multi-hop-reasoning
  - urn:ngm:class:hallucination-mitigation
  - urn:ngm:class:question-answering
  - urn:ngm:class:knowledge-grounding
  - urn:ngm:class:source-attribution
  - urn:ngm:class:semantic-search
  - urn:ngm:class:enterprise-search
dependsOn:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:foundation-model
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:nearest-neighbor-search
implements:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-use
  - urn:ngm:class:query-rewriting
  - urn:ngm:class:reranking
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:adaptive-rag
contrastsWith:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:parametric-knowledge
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:function-calling
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:reranking
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:embedding-search
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:chunking
  - urn:ngm:class:agent-memory
  - urn:ngm:class:context-window-management
supports:
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:source-attribution
  - urn:ngm:class:hallucination-reduction
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:graph-rag
  - urn:ngm:class:semantic-search
  - urn:ngm:class:orchestration
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:ai-agents
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:streaming-rag
  - urn:ngm:class:multimodal-ai-architecture-ai
---

# Agentic RAG

Agentic RAG is an architecture that augments retrieval-augmented generation with an autonomous agent loop, letting a language model plan, decide when and what to retrieve, issue multiple queries across heterogeneous sources, reflect on retrieved evidence quality, reformulate queries, and verify results before generating a final response. Unlike the single-pass retrieve-then-read pipeline of naive RAG, Agentic RAG treats retrieval as a first-class action in a multi-step reasoning cycle, enabling resolution of multi-hop questions, adaptive source selection, self-correction, and iterative evidence accumulation under agent-controlled stopping criteria.
