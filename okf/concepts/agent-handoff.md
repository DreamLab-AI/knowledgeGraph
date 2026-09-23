---
okf_version: "0.2"
type: Class
title: Agent Handoff
resource: urn:ngm:class:agent-handoff
domain: artificial-intelligence
description: "The orchestration primitive by which one agent transfers control of a conversation or task to another agent, passing along the accumulated context, goal, and constraints so the receiving agent can continue the work with its own specialised tools and instructions. A handoff reassigns responsibility rather than merely requesting a result: control does not automatically return to the sender, and the "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:multiagentorchestration
requires:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-system
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
uses:
  - urn:ngm:class:task-delegation
  - urn:ngm:class:taskdelegation
relatedTo:
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:llmorchestration
---

# Agent Handoff

The orchestration primitive by which one agent transfers control of a conversation or task to another agent, passing along the accumulated context, goal, and constraints so the receiving agent can continue the work with its own specialised tools and instructions. A handoff reassigns responsibility rather than merely requesting a result: control does not automatically return to the sender, and the receiver becomes the active locus of decision-making, which is what distinguishes handoff-based routing from a simple tool call or a blocking sub-task.
