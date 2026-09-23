---
okf_version: "0.2"
type: Class
title: Action Executor
resource: urn:ngm:class:action-executor
domain: ai
description: "An Action Executor is a software component within an agentic AI system responsible for translating high-level instructions or plans into concrete, observable operations in an environment. It serves as the effector layer that bridges planning and execution by dispatching tool calls, API requests, file operations, or process invocations. Action Executors typically implement sandboxing, retry logic, "
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:autonomous-agent
hasPart:
  - urn:ngm:class:tool-schema
  - urn:ngm:class:sandbox-environment
  - urn:ngm:class:error-handling
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:retry-policy
  - urn:ngm:class:audit-log
  - urn:ngm:class:argument-validator
  - urn:ngm:class:observability-emitter
requires:
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:runtime-environment
  - urn:ngm:class:tool-schema
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:tool-registry
  - urn:ngm:class:orchestration
  - urn:ngm:class:agent-loop
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:automated-planning
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:code-execution
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:autonomous-task-execution
dependsOn:
  - urn:ngm:class:orchestration
  - urn:ngm:class:orchestration-layer
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:memory-management
  - urn:ngm:class:large-language-models
  - urn:ngm:class:security-architecture
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:agent-loop
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:least-privilege-principle
contrastsWith:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:automated-planning
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:orchestration
  - urn:ngm:class:sandbox-environment
  - urn:ngm:class:error-handling
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:large-language-models
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:containerisation
supports:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:human-oversight
  - urn:ngm:class:observability
  - urn:ngm:class:digital-infrastructure
  - urn:ngm:class:cloud-native
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:json-data-interchange-format-schema
relatedTo:
  - urn:ngm:class:agent
  - urn:ngm:class:task-planning
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:action-space
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:lang-graph
  - urn:ngm:class:crew-ai
  - urn:ngm:class:auto-gen
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:aws-bedrock
  - urn:ngm:class:google-vertex-ai
---

# Action Executor

An Action Executor is a software component within an agentic AI system responsible for translating high-level instructions or plans into concrete, observable operations in an environment. It serves as the effector layer that bridges planning and execution by dispatching tool calls, API requests, file operations, or process invocations. Action Executors typically implement sandboxing, retry logic, and side-effect isolation to ensure safe and predictable operation. They are central to autonomous agent architectures where multiple sequential or parallel actions must be managed reliably.
