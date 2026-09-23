---
okf_version: "0.2"
type: Class
title: Error Recovery
resource: urn:ngm:class:error-recovery
domain: distributed-systems
description: Error recovery is the set of mechanisms by which a system detects that an operation has failed or produced an invalid state and restores correct operation, through techniques such as retries with exponential backoff, checkpointing and rollback, compensating actions, graceful degradation, and escalation to human oversight. In autonomous agent systems it distinguishes robust task execution from brit
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:fault-tolerance
partOf:
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:agent-orchestrator
relatedTo:
  - urn:ngm:class:resilience
  - urn:ngm:class:interaction-design
---

# Error Recovery

Error recovery is the set of mechanisms by which a system detects that an operation has failed or produced an invalid state and restores correct operation, through techniques such as retries with exponential backoff, checkpointing and rollback, compensating actions, graceful degradation, and escalation to human oversight. In autonomous agent systems it distinguishes robust task execution from brittle scripted automation, and in interaction design it covers helping users notice, diagnose, and undo their own mistakes.
