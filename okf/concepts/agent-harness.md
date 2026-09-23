---
okf_version: "0.2"
type: Class
title: Agent Harness
resource: urn:ngm:class:agent-harness
domain: ai
description: A runtime framework that turns model inference into agent action by managing the tool-call loop, approval gates, context routing, execution lifecycle, and failure recovery — the model thinks, the harness decides what that thinking is allowed to touch.
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:ai-agent-system
hasPart:
  - urn:ngm:class:internal-ai-harness
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:terminal-coding-agents
  - urn:ngm:class:ide-coding-agents
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:harness-configuration-packs
  - urn:ngm:class:personal-agent-runtimes
  - urn:ngm:class:progressive-disclosure-harnesses
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:agent-loop
  - urn:ngm:class:foundation-model
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:workflow-orchestration
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:task-automation
  - urn:ngm:class:durable-execution
dependsOn:
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:context-window
  - urn:ngm:class:state-persistence
  - urn:ngm:class:tool-registry
  - urn:ngm:class:credential-management
  - urn:ngm:class:sandboxed-code-execution
  - urn:ngm:class:agent-memory
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:checkpointing
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:plan-and-execute
  - urn:ngm:class:reflexion
contrastsWith:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:workflow-engine
uses:
  - urn:ngm:class:observability
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:sandboxed-code-execution
  - urn:ngm:class:agent-memory
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:function-calling
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:human-in-the-loop
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:agent-to-agent-protocol
relatedTo:
  - urn:ngm:class:terminal-coding-agents
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-evaluation-benchmarks
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:lang-graph
  - urn:ngm:class:temporal
  - urn:ngm:class:aws-bedrock-agentcore
---

# Agent Harness

A runtime framework that turns model inference into agent action by managing the tool-call loop, approval gates, context routing, execution lifecycle, and failure recovery — the model thinks, the harness decides what that thinking is allowed to touch.
