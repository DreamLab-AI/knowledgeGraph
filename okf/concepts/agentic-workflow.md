---
okf_version: "0.2"
type: Class
title: Agentic Workflow
resource: urn:ngm:class:agentic-workflow
domain: ai
description: An agentic workflow is a structured, iterative execution pattern in which an AI agent autonomously plans actions, invokes external tools or APIs, observes results, and revises its approach through successive reasoning cycles until a goal condition is satisfied or a stopping criterion is met. Unlike single-pass inference, agentic workflows employ persistent memory, branching logic, and multi-step p
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:workflow-automation
hasPart:
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:reflection-pattern
  - urn:ngm:class:tool-call-loop
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:agent-loop
requires:
  - urn:ngm:class:context-window
  - urn:ngm:class:large-language-models
  - urn:ngm:class:agent-memory
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
enables:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:task-planning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:ai-research-assistant
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:scientific-discovery
  - urn:ngm:class:data-engineering
dependsOn:
  - urn:ngm:class:inference
  - urn:ngm:class:api-integration
  - urn:ngm:class:inference
  - urn:ngm:class:foundation-model
  - urn:ngm:class:orchestration
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:reflection-pattern
contrastsWith:
  - urn:ngm:class:single-turn-inference
  - urn:ngm:class:traditional-workflow-orchestration
  - urn:ngm:class:robotic-process-automation
bridgesTo:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:prompt-injection
uses:
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:reasoning
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:vector-database
  - urn:ngm:class:reinforcement-learning
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:robotic-process-automation
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:model-context-protocol
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:orchestration
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:lang-graph
  - urn:ngm:class:crew-ai
  - urn:ngm:class:auto-gen
  - urn:ngm:class:openai-research-organisation-agents-sdk
  - urn:ngm:class:foundation-model
  - urn:ngm:class:swe-bench
  - urn:ngm:class:gaia
  - urn:ngm:class:webarena
---

# Agentic Workflow

An agentic workflow is a structured, iterative execution pattern in which an AI agent autonomously plans actions, invokes external tools or APIs, observes results, and revises its approach through successive reasoning cycles until a goal condition is satisfied or a stopping criterion is met. Unlike single-pass inference, agentic workflows employ persistent memory, branching logic, and multi-step planning that may span many inference calls and involve specialised sub-agents coordinated by an orchestrator. The pattern relies on large language model capabilities — tool use, function calling, long-context reasoning — and is the architectural basis for systems such as AutoGPT, LangGraph, CrewAI, OpenAI Agents SDK, and Anthropic's Claude toolset. Agentic workflows introduce novel safety and reliability challenges including error compounding, prompt injection via tool outputs, and the need for human-in-the-loop checkpoints in high-stakes deployments.
