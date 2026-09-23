---
okf_version: "0.2"
type: Class
title: Subagent
resource: urn:ngm:class:subagent
domain: artificial-intelligence
description: A subagent is a subordinate autonomous agent spawned by a parent or orchestrating agent to carry out a delegated subtask within its own isolated context window, returning only a distilled result to the parent. By running in a fresh context, a subagent keeps the noise of its intermediate exploration — long file reads, search output, failed attempts — out of the parent's limited context, while allow
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:aiagent
enables:
  - urn:ngm:class:task-decomposition
  - urn:ngm:class:taskdecomposition
uses:
  - urn:ngm:class:agent-loop
  - urn:ngm:class:agentloop
partOf:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:task-delegation
  - urn:ngm:class:taskdelegation
---

# Subagent

A subagent is a subordinate autonomous agent spawned by a parent or orchestrating agent to carry out a delegated subtask within its own isolated context window, returning only a distilled result to the parent. By running in a fresh context, a subagent keeps the noise of its intermediate exploration — long file reads, search output, failed attempts — out of the parent's limited context, while allowing many subtasks to proceed in parallel. Subagents may be specialised by role, tools, or model tier, and are the unit of work distribution in hierarchical multi-agent architectures.
