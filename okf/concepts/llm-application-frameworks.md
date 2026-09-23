---
okf_version: "0.2"
type: Class
title: LLM Application Frameworks
resource: urn:ngm:class:llm-application-frameworks
domain: ai
description: General-purpose software frameworks for composing [[Large Language Models]] capabilities into production applications through chains, retrievers, [[Tool Use]], [[Retrieval-Augmented Generation]] pipelines, stateful workflows, and [[Multi-Agent Systems]] orchestration — including LangChain, LangGraph, LlamaIndex, Semantic Kernel, Microsoft Agent Framework, Mastra, Agno, n8n, Dify, Langflow, and Flo
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:workflow-automation
hasPart:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:tool-call-loop
  - urn:ngm:class:agent-memory
  - urn:ngm:class:agent-loop
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:information-retrieval
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:function-calling
  - urn:ngm:class:vector-database
  - urn:ngm:class:context-window
  - urn:ngm:class:api-integration
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:graph-rag
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:reasoning
dependsOn:
  - urn:ngm:class:api-integration
  - urn:ngm:class:foundation-model
  - urn:ngm:class:function-calling
  - urn:ngm:class:orchestration
  - urn:ngm:class:vector-database
  - urn:ngm:class:large-language-models
implements:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:tool-use
  - urn:ngm:class:mcp-server
  - urn:ngm:class:function-calling
contrastsWith:
  - urn:ngm:class:internal-ai-harness
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:workflow-automation
bridgesTo:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-execution-sandboxes
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:reasoning
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:mcp-server
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:agent-memory
  - urn:ngm:class:context-window
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:swe-bench
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:terminal-coding-agents
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:swe-bench
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:graph-rag
---

# LLM Application Frameworks

General-purpose software frameworks for composing [[Large Language Models]] capabilities into production applications through chains, retrievers, [[Tool Use]], [[Retrieval-Augmented Generation]] pipelines, stateful workflows, and [[Multi-Agent Systems]] orchestration — including LangChain, LangGraph, LlamaIndex, Semantic Kernel, Microsoft Agent Framework, Mastra, Agno, n8n, Dify, Langflow, and Flowise — providing the integration, observability, and deployment infrastructure that connects model inference to real application data, external APIs, and human approval workflows.
