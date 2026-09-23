---
okf_version: "0.2"
type: Class
title: Agentic AI
resource: urn:ngm:class:agentic-ai
domain: artificial-intelligence
description: "Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions — including calling external tools, spawning sub-agents, and modifying their own environment — in pursuit of high-level objectives specified by a user or orchestrator. Agentic systems differ from reactive or conversational AI in that they operate over extended time "
maturity: emerging
quality: 0.92
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:ai-agents
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:agent-based-modelling
hasPart:
  - urn:ngm:class:agent-loop
  - urn:ngm:class:tool-registry
  - urn:ngm:class:working-memory
  - urn:ngm:class:agent-orchestrator
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:agent-memory
  - urn:ngm:class:task-planning
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
  - urn:ngm:class:memory-management
  - urn:ngm:class:task-planning
  - urn:ngm:class:foundation-model
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:ai-agent-payments
dependsOn:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:vector-database
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:foundation-model
  - urn:ngm:class:embedding-model
  - urn:ngm:class:transformer-architecture
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:function-calling
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:reflexion
contrastsWith:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:reactive-systems
  - urn:ngm:class:reactive-systems
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:single-turn-inference
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:internet-of-agents
uses:
  - urn:ngm:class:function-calling
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:agent-communication-protocol
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:prompt-injection
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:ai-agents
  - urn:ngm:class:orchestration
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:agent-identity
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:ai-agent-payments
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:agent-to-agent-protocol
---

# Agentic AI

Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions — including calling external tools, spawning sub-agents, and modifying their own environment — in pursuit of high-level objectives specified by a user or orchestrator. Agentic systems differ from reactive or conversational AI in that they operate over extended time horizons, maintain persistent state across steps, and may take consequential or irreversible actions without per-step human approval. The architectural backbone is typically a large language model serving as a cognitive core inside a closed sense-plan-act loop, augmented by memory stores, tool registries, and inter-agent communication protocols. The term encompasses both single-agent pipelines and heterogeneous multi-agent architectures in which agentic components collaborate, compete, or are hierarchically orchestrated.
