---
okf_version: "0.2"
type: Class
title: Blackboard Pattern
resource: urn:ngm:class:blackboard-pattern
domain: artificial-intelligence
description: A coordination architecture in which multiple specialised agents collaborate not by messaging each other directly but by reading from and writing to a shared, structured workspace — the blackboard. Each agent watches the blackboard for a state it can act on, contributes its partial result back to the shared space, and lets other agents build on that contribution in turn, so a solution accretes inc
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:multiagentorchestration
requires:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-system
uses:
  - urn:ngm:class:memory-bank
  - urn:ngm:class:memorybank
relatedTo:
  - urn:ngm:class:supervisor-worker-pattern
  - urn:ngm:class:task-delegation
  - urn:ngm:class:supervisorworkerpattern
  - urn:ngm:class:taskdelegation
---

# Blackboard Pattern

A coordination architecture in which multiple specialised agents collaborate not by messaging each other directly but by reading from and writing to a shared, structured workspace — the blackboard. Each agent watches the blackboard for a state it can act on, contributes its partial result back to the shared space, and lets other agents build on that contribution in turn, so a solution accretes incrementally through many opportunistic updates rather than through a fixed pipeline. The pattern decouples the collaborators from one another: an agent needs to understand only the blackboard's contents, not the identity, order, or availability of its peers.
