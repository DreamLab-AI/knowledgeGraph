---
okf_version: "0.2"
type: Class
title: CrewAI
resource: urn:ngm:class:crew-ai
domain: ai
description: CrewAI is an open-source Python framework for orchestrating teams of autonomous LLM-powered agents that collaborate on complex tasks through defined roles, backstories, goals, and structured processes. It models a crew of specialised agents—each with distinct capabilities and a designated toolset—that delegate work, share context through a shared memory system, and execute sequential, parallel, or
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:agentic-workflow
hasPart:
  - urn:ngm:class:crew
  - urn:ngm:class:agent
  - urn:ngm:class:task
  - urn:ngm:class:process
  - urn:ngm:class:flow
  - urn:ngm:class:agent-memory
  - urn:ngm:class:tool-use
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:api-integration
  - urn:ngm:class:prompt-engineering
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:task-planning
  - urn:ngm:class:orchestration
  - urn:ngm:class:code-execution
dependsOn:
  - urn:ngm:class:context-window
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:re-act-pattern
implements:
  - urn:ngm:class:orchestration
  - urn:ngm:class:agent-memory
  - urn:ngm:class:tool-use
contrastsWith:
  - urn:ngm:class:lang-graph
  - urn:ngm:class:auto-gen
  - urn:ngm:class:metagpt
  - urn:ngm:class:openai-research-organisation-agents-sdk
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:tool-use
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:foundation-model
  - urn:ngm:class:function-calling
  - urn:ngm:class:retrieval-augmented-generation
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-safety
standardizedBy:
  - urn:ngm:class:model-context-protocol
relatedTo:
  - urn:ngm:class:cli-multi-agent-systems
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:auto-gen
  - urn:ngm:class:lang-graph
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:eu-ai-act-regulatory-instrument
---

# CrewAI

CrewAI is an open-source Python framework for orchestrating teams of autonomous LLM-powered agents that collaborate on complex tasks through defined roles, backstories, goals, and structured processes. It models a crew of specialised agents—each with distinct capabilities and a designated toolset—that delegate work, share context through a shared memory system, and execute sequential, parallel, or hierarchical workflows toward a common objective. With 47,800+ GitHub stars, 27 million downloads, and adoption by 63% of the Fortune 500 as of mid-2026, CrewAI has become one of the fastest-growing multi-agent orchestration frameworks in the agentic AI ecosystem.
