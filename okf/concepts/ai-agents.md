---
okf_version: "0.2"
type: Class
title: AI Agents
resource: urn:ngm:class:ai-agents
domain: artificial-intelligence
description: "AI Agents are software entities that combine a reasoning core (typically a large language model) with tool-use capabilities, memory, and a perception-action loop to autonomously pursue user-specified goals across multiple steps. They differ from single-shot inference systems by operating in iterative observe-think-act cycles, invoking external APIs, executing code, browsing the web, or delegating "
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:goal-directed-system
hasPart:
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:perception
  - urn:ngm:class:agent-loop
  - urn:ngm:class:action-execution
  - urn:ngm:class:agent-memory
  - urn:ngm:class:orchestration
  - urn:ngm:class:sandboxing
  - urn:ngm:class:observation-interface
  - urn:ngm:class:tool-registry
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
  - urn:ngm:class:memory-store
  - urn:ngm:class:reasoning
  - urn:ngm:class:memory
  - urn:ngm:class:function-calling
  - urn:ngm:class:foundation-model
  - urn:ngm:class:context-window
enables:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:autonomous-decision-making
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:software-development-automation
  - urn:ngm:class:scientific-discovery
  - urn:ngm:class:emergent-behavior
  - urn:ngm:class:task-automation
dependsOn:
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:vector-databases
  - urn:ngm:class:function-calling
  - urn:ngm:class:task-planning
  - urn:ngm:class:agent-frameworks
implements:
  - urn:ngm:class:plan-and-execute
  - urn:ngm:class:re-act
  - urn:ngm:class:belief-desire-intention
  - urn:ngm:class:reflexion
  - urn:ngm:class:tree-of-thoughts
contrastsWith:
  - urn:ngm:class:chatbots
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:single-agent-systems
bridgesTo:
  - urn:ngm:class:robotic-system
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:robotic-system
  - urn:ngm:class:digital-twin
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:computer-use
  - urn:ngm:class:robotics
  - urn:ngm:class:agentic-internet
uses:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:sandboxing
  - urn:ngm:class:orchestration
  - urn:ngm:class:agent-communication-protocol
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:explainability
standardizedBy:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-safety
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-agent
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:emergence
---

# AI Agents

AI Agents are software entities that combine a reasoning core (typically a large language model) with tool-use capabilities, memory, and a perception-action loop to autonomously pursue user-specified goals across multiple steps. They differ from single-shot inference systems by operating in iterative observe-think-act cycles, invoking external APIs, executing code, browsing the web, or delegating sub-tasks to specialised agents. The architecture integrates classical notions of rational agency with modern deep learning, spanning planning, grounding, and self-correction mechanisms. Safety, controllability, and alignment are first-class concerns because agents can initiate irreversible real-world side-effects.
