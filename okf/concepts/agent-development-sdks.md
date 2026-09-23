---
okf_version: "0.2"
type: Class
title: Agent Development SDKs
resource: urn:ngm:class:agent-development-sdks
domain: ai
description: Official vendor SDKs and libraries for building custom AI agents with built-in tools, MCP support, session management, and deployment infrastructure — includes Claude Agent SDK, Google ADK, strands-agents, pydantic-ai, Composio, and SWE-agent.
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:llm-orchestration
hasPart:
  - urn:ngm:class:claude-agent-sdk
  - urn:ngm:class:google-adk
  - urn:ngm:class:strands-agents
  - urn:ngm:class:openai-research-organisation-agents-sdk
  - urn:ngm:class:pydantic-ai
  - urn:ngm:class:tool-registry
  - urn:ngm:class:memory-store
  - urn:ngm:class:mastra
  - urn:ngm:class:composio
  - urn:ngm:class:swe-agent
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:observability
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:persistence-layer
  - urn:ngm:class:context-window
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:tool-calling-api
enables:
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:browser-automation
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:computer-use
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:ai-safety
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:multi-agent-orchestration-frameworks
dependsOn:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:internal-ai-harness
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-context-protocol
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:a2-a-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:structured-output
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:agent-to-agent-protocol
contrastsWith:
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:lang-graph
  - urn:ngm:class:agent-frameworks
uses:
  - urn:ngm:class:tool-calling-api
  - urn:ngm:class:structured-output
  - urn:ngm:class:prompt-template
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:function-calling
  - urn:ngm:class:persistence-layer
supports:
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:observability
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-agent-payments
  - urn:ngm:class:agentic-ai
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:a2-a-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:ai-agent-payments
  - urn:ngm:class:autonomous-ai-agents
  - urn:ngm:class:agent-orchestrator
---

# Agent Development SDKs

Official vendor SDKs and libraries for building custom AI agents with built-in tools, MCP support, session management, and deployment infrastructure — includes Claude Agent SDK, Google ADK, strands-agents, pydantic-ai, Composio, and SWE-agent.
