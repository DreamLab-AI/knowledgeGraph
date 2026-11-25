---
okf_version: "0.2"
type: Class
title: LangChain
resource: urn:ngm:class:lang-chain
domain: artificial-intelligence
description: LangChain is an open-source Python and TypeScript framework for composing Large Language Model applications as chains of modular components — prompt templates, LLM wrappers, output parsers, memory stores, retrieval augmented generation pipelines, and tool-calling agents — providing a unified ...
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:llm-application-framework
  - urn:ngm:class:agent-orchestration-framework
hasPart:
  - urn:ngm:class:lang-graph
  - urn:ngm:class:langchain-chain
  - urn:ngm:class:langchain-agent
  - urn:ngm:class:langchain-tool
  - urn:ngm:class:langchain-memory
  - urn:ngm:class:langchain-retriever
  - urn:ngm:class:lang-graph
  - urn:ngm:class:langsmith-observability
requires:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:python-3
  - urn:ngm:class:vector-database
  - urn:ngm:class:large-language-model
enables:
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:tool-calling-agent
  - urn:ngm:class:conversational-memory
dependsOn:
  - urn:ngm:class:openai-research-organisation-api
  - urn:ngm:class:anthropic-claude-api
  - urn:ngm:class:chroma-vector-database
  - urn:ngm:class:faiss
  - urn:ngm:class:pinecone
implements:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:lcel-langchain-expression-language
  - urn:ngm:class:model-context-protocol
bridgesTo:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:solid-pod
  - urn:ngm:class:robot-operating-system
  - urn:ngm:class:auto-ml
partOf:
  - urn:ngm:class:llm-application-framework
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:llm-application-framework
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# LangChain

LangChain is an open-source Python and TypeScript framework for composing Large Language Model applications as chains of modular components — prompt templates, LLM wrappers, output parsers, memory stores, retrieval augmented generation pipelines, and tool-calling agents — providing a unified ...
