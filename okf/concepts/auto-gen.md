---
okf_version: "0.2"
type: Class
title: AutoGen
resource: urn:ngm:class:auto-gen
domain: artificial-intelligence
description: AutoGen is an open-source multi-agent conversation framework originating from Microsoft Research that defines conversable agents — autonomous entities backed by large language models, tools, or human inputs — which coordinate through structured message exchange to decompose and complete complex tasks. The framework introduced the conversable-agent abstraction as a unified primitive supporting LLM-
maturity: established
quality: 0.87
is-a:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agent-frameworks
hasPart:
  - urn:ngm:class:conversable-agent
  - urn:ngm:class:group-chat
  - urn:ngm:class:code-executor
  - urn:ngm:class:orchestration
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:code-execution
  - urn:ngm:class:agent-memory
requires:
  - urn:ngm:class:language-model
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:large-language-models
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:task-planning
  - urn:ngm:class:workflow-automation
dependsOn:
  - urn:ngm:class:api-integration
  - urn:ngm:class:language-model
  - urn:ngm:class:actor-model
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:agentic-workflow
contrastsWith:
  - urn:ngm:class:lang-graph
  - urn:ngm:class:crew-ai
  - urn:ngm:class:openai-research-organisation-agents-sdk
  - urn:ngm:class:metagpt
  - urn:ngm:class:single-agent-systems
uses:
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:model-context-protocol
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:retrieval-augmented-generation
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:model-context-protocol
relatedTo:
  - urn:ngm:class:semantic-kernel
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-agent
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:software-engineering
  - urn:ngm:class:swe-bench
  - urn:ngm:class:azure
---

# AutoGen

AutoGen is an open-source multi-agent conversation framework originating from Microsoft Research that defines conversable agents — autonomous entities backed by large language models, tools, or human inputs — which coordinate through structured message exchange to decompose and complete complex tasks. The framework introduced the conversable-agent abstraction as a unified primitive supporting LLM-powered reasoning, code execution, and adaptive human participation within a single coherent programming model. Forked in 2025 as the community-governed AG2 project and simultaneously merged by Microsoft into the broader Microsoft Agent Framework combining AutoGen agent abstractions with Semantic Kernel enterprise features.
