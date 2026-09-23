---
okf_version: "0.2"
type: Class
title: LLM Agents
resource: urn:ngm:class:llm-agents
domain: ai
description: LLM Agents are autonomous software systems that use large language models as their core reasoning engine to perceive inputs, plan multi-step actions, invoke external tools, and pursue goals over extended horizons with minimal per-step human oversight. They extend base language models with memory, tool use, and feedback loops to accomplish tasks that require sequential decision-making.
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:agentic-ai
requires:
  - urn:ngm:class:function-calling
  - urn:ngm:class:agent-memory
  - urn:ngm:class:sandboxed-code-execution
enables:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:process-automation
dependsOn:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:instruction-following
implements:
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:plan-and-execute
contrastsWith:
  - urn:ngm:class:single-turn-inference
  - urn:ngm:class:robotic-process-automation
bridgesTo:
  - urn:ngm:class:enterprise-software-integration
  - urn:ngm:class:robotic-autonomous-systems
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:context-window
  - urn:ngm:class:vector-database
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-safety
relatedTo:
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:ai-alignment
---

# LLM Agents

LLM Agents are autonomous software systems that use large language models as their core reasoning engine to perceive inputs, plan multi-step actions, invoke external tools, and pursue goals over extended horizons with minimal per-step human oversight. They extend base language models with memory, tool use, and feedback loops to accomplish tasks that require sequential decision-making.
