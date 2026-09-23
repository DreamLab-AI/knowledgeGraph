---
okf_version: "0.2"
type: Class
title: Agent Evaluation Benchmarks
resource: urn:ngm:class:agent-evaluation-benchmarks
domain: ai
description: Standardised benchmark suites and evaluation frameworks for measuring autonomous agent capabilities across software engineering, web navigation, reasoning, and general task completion — includes SWE-bench, WebArena, ARC-AGI-2, inspect_ai, AgentBench, and VitaBench.
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:llm-evaluation
  - urn:ngm:class:evaluation-harness
hasPart:
  - urn:ngm:class:swe-bench
  - urn:ngm:class:web-arena
  - urn:ngm:class:gaia-benchmark
  - urn:ngm:class:osworld
  - urn:ngm:class:agent-bench
  - urn:ngm:class:vita-bench
  - urn:ngm:class:metr-hcast
  - urn:ngm:class:inspect-ai
  - urn:ngm:class:webarena
  - urn:ngm:class:agentbench
  - urn:ngm:class:vitabench
  - urn:ngm:class:tau-bench
  - urn:ngm:class:terminal-bench
  - urn:ngm:class:arc-agi
requires:
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:large-language-model
  - urn:ngm:class:tool-use
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:foundation-model
  - urn:ngm:class:agent-harness
  - urn:ngm:class:chain-of-thought
enables:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:autonomous-coding
  - urn:ngm:class:computer-use
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:browser-automation
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:responsible-scaling-policy
dependsOn:
  - urn:ngm:class:agent-harness
  - urn:ngm:class:internal-ai-harness
  - urn:ngm:class:external-ai-harness
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:large-language-model
implements:
  - urn:ngm:class:llm-evaluation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:functional-verification
  - urn:ngm:class:safety-assessment
contrastsWith:
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:static-nlp-benchmarks
  - urn:ngm:class:llm-evaluation
uses:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:agent-execution-sandboxes
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:docker-containerisation-platform
supports:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:ai-safety
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:inspect-ai
  - urn:ngm:class:metr-hcast
  - urn:ngm:class:ai-safety-institute
relatedTo:
  - urn:ngm:class:evaluation-harness
  - urn:ngm:class:agent-development-sdks
  - urn:ngm:class:multi-agent-orchestration-frameworks
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:agent-frameworks
---

# Agent Evaluation Benchmarks

Standardised benchmark suites and evaluation frameworks for measuring autonomous agent capabilities across software engineering, web navigation, reasoning, and general task completion — includes SWE-bench, WebArena, ARC-AGI-2, inspect_ai, AgentBench, and VitaBench.
