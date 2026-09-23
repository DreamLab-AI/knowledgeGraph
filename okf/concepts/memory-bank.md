---
okf_version: "0.2"
type: Class
title: Memory Bank
resource: urn:ngm:class:memory-bank
domain: artificial-intelligence
description: A memory bank is a structured, persistent repository of curated project and task context that an autonomous agent reads at the start of every session and updates as work progresses, so that knowledge survives the resetting of the model's ephemeral context window. Typically realised as a set of versioned markdown or database records (project brief, active decisions, progress log, architectural note
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:agent-memory
  - urn:ngm:class:agentmemory
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
uses:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:datapersistence
partOf:
  - urn:ngm:class:context-management
  - urn:ngm:class:contextmanagement
relatedTo:
  - urn:ngm:class:memory-store
  - urn:ngm:class:memorystore
---

# Memory Bank

A memory bank is a structured, persistent repository of curated project and task context that an autonomous agent reads at the start of every session and updates as work progresses, so that knowledge survives the resetting of the model's ephemeral context window. Typically realised as a set of versioned markdown or database records (project brief, active decisions, progress log, architectural notes), it gives a stateless language model durable long-term memory, enabling continuity of intent, avoidance of repeated discovery, and coherent behaviour across many disconnected invocations of the same or different agents.
