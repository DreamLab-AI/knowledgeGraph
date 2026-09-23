---
okf_version: "0.2"
type: Class
title: Single-Agent System
resource: urn:ngm:class:single-agent-system
domain: artificial-intelligence
description: An architectural pattern in which one autonomous agent, equipped with its own model, memory, and tool access, carries an entire task from goal to completion within a single reasoning loop — with no delegation, inter-agent messaging, or coordination overhead; simpler to build, debug, and evaluate than multi-agent designs, and often the stronger baseline when a capable model with good tools can hold
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:architecture
hasPart:
  - urn:ngm:class:agent
contrastsWith:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-coordination
relatedTo:
  - urn:ngm:class:llm-agents
---

# Single-Agent System

An architectural pattern in which one autonomous agent, equipped with its own model, memory, and tool access, carries an entire task from goal to completion within a single reasoning loop — with no delegation, inter-agent messaging, or coordination overhead; simpler to build, debug, and evaluate than multi-agent designs, and often the stronger baseline when a capable model with good tools can hold the whole problem in context.
