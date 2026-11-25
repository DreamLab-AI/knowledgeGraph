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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Supervisor-Worker Pattern

The supervisor-worker pattern is a multi-agent coordination architecture in which a single supervisor agent decomposes a goal, delegates the resulting subtasks to a set of worker agents, and integrates their returned results into a coherent whole, without the workers communicating directly with one another. The supervisor owns planning, routing, verification, and error handling; the workers own execution of their assigned subtask. Centralising control this way makes the system's behaviour easy to reason about and to recover, at the cost of the supervisor becoming a throughput bottleneck and single point of failure.
