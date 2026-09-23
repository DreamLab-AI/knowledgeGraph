---
okf_version: "0.2"
type: Class
title: Multi-Agent Orchestration
resource: urn:ngm:class:multi-agent-orchestration
domain: artificial-intelligence
description: Multi-agent orchestration is the coordination and management of multiple autonomous AI agents — each capable of perceiving, reasoning, and acting — such that their collective behaviour accomplishes complex tasks beyond the capacity of any single agent. Orchestration encompasses task decomposition, agent assignment, inter-agent communication, state sharing, conflict resolution, and result aggregati
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:orchestration
hasPart:
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:orchestration-layer
requires:
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:state-management
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-ai-agents
  - urn:ngm:class:tool-use
dependsOn:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:function-calling
contrastsWith:
  - urn:ngm:class:single-agent-systems
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:microservices-architecture
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:model-context-protocol
partOf:
  - urn:ngm:class:agentic-ai-systems
relatedTo:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:reinforcement-learning
---

# Multi-Agent Orchestration

Multi-agent orchestration is the coordination and management of multiple autonomous AI agents — each capable of perceiving, reasoning, and acting — such that their collective behaviour accomplishes complex tasks beyond the capacity of any single agent. Orchestration encompasses task decomposition, agent assignment, inter-agent communication, state sharing, conflict resolution, and result aggregation, typically mediated by an orchestrator layer or emergent via peer protocols.
