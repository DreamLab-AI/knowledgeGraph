---
okf_version: "0.2"
type: Class
title: Supervisor-Worker Pattern
resource: urn:ngm:class:supervisor-worker-pattern
domain: distributed-collaboration
description: The supervisor-worker pattern is a multi-agent coordination architecture in which a single supervisor agent decomposes a goal, delegates the resulting subtasks to a set of worker agents, and integrates their returned results into a coherent whole, without the workers communicating directly with one another. The supervisor owns planning, routing, verification, and error handling; the workers own ex
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-agent-coordination
  - urn:ngm:class:aiagentcoordination
requires:
  - urn:ngm:class:orchestration
uses:
  - urn:ngm:class:task-delegation
  - urn:ngm:class:taskdelegation
partOf:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:subagent
---

# Supervisor-Worker Pattern

The supervisor-worker pattern is a multi-agent coordination architecture in which a single supervisor agent decomposes a goal, delegates the resulting subtasks to a set of worker agents, and integrates their returned results into a coherent whole, without the workers communicating directly with one another. The supervisor owns planning, routing, verification, and error handling; the workers own execution of their assigned subtask. Centralising control this way makes the system's behaviour easy to reason about and to recover, at the cost of the supervisor becoming a throughput bottleneck and single point of failure.
