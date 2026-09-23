---
okf_version: "0.2"
type: Class
title: Agent Loop
resource: urn:ngm:class:agent-loop
domain: ai
description: The agent loop is the repeating control cycle — observe, plan, act, evaluate — through which an autonomous agent perceives its environment, selects a next action or tool call, executes it, and incorporates the result before repeating. It is the core execution pattern underlying agentic systems, terminal coding agents, and retrieval-augmented reasoning, continuing until a termination condition such
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:agent-harness
partOf:
  - urn:ngm:class:agent-harness
---

# Agent Loop

The agent loop is the repeating control cycle — observe, plan, act, evaluate — through which an autonomous agent perceives its environment, selects a next action or tool call, executes it, and incorporates the result before repeating. It is the core execution pattern underlying agentic systems, terminal coding agents, and retrieval-augmented reasoning, continuing until a termination condition such as task completion or a step budget is reached. The loop's design governs how an agent balances exploration, tool use, and convergence toward a goal.
