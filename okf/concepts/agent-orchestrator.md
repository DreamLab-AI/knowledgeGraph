---
okf_version: "0.2"
type: Class
title: Agent Orchestrator
resource: urn:ngm:class:agent-orchestrator
domain: ai
description: An Agent Orchestrator is the directive control component of a multi-agent architecture that decomposes high-level goals into directed acyclic graphs of sub-tasks, selects and dispatches those tasks to specialised sub-agents via a structured Agent Communication Protocol, monitors execution state, resolves inter-task data dependencies, handles timeouts and failures through retry or fallback logic, a
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:intelligent-system
hasPart:
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:goal-planner
  - urn:ngm:class:result-validation
  - urn:ngm:class:error-recovery
  - urn:ngm:class:planning-and-scheduling
requires:
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:large-language-models
  - urn:ngm:class:agent-memory
  - urn:ngm:class:capability-advertisement
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:autonomous-coding
dependsOn:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:structured-output
  - urn:ngm:class:message-passing
implements:
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:contract-net-protocol
contrastsWith:
  - urn:ngm:class:single-agent-system
  - urn:ngm:class:workflow-engine
  - urn:ngm:class:workflow-automation
uses:
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:task-planning
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:function-calling
  - urn:ngm:class:model-context-protocol
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-to-agent-protocol
relatedTo:
  - urn:ngm:class:coordination-mechanisms
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:workflow-engine
  - urn:ngm:class:bdi-architecture
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:fipa-acl
  - urn:ngm:class:agentic-ai
---

# Agent Orchestrator

An Agent Orchestrator is the directive control component of a multi-agent architecture that decomposes high-level goals into directed acyclic graphs of sub-tasks, selects and dispatches those tasks to specialised sub-agents via a structured Agent Communication Protocol, monitors execution state, resolves inter-task data dependencies, handles timeouts and failures through retry or fallback logic, and assembles partial results into coherent outputs — operating atop an Agent Runtime that manages the lifecycle of individual agents and providing the coordination hub that transforms a pool of autonomous agents into a collaborative system capable of accomplishing complex, long-horizon objectives.
