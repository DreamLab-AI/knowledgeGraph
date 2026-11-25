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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Agent Loop

The agent loop is the repeating control cycle — observe, plan, act, evaluate — through which an autonomous agent perceives its environment, selects a next action or tool call, executes it, and incorporates the result before repeating. It is the core execution pattern underlying agentic systems, terminal coding agents, and retrieval-augmented reasoning, continuing until a termination condition such as task completion or a step budget is reached. The loop's design governs how an agent balances exploration, tool use, and convergence toward a goal.
