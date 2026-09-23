---
okf_version: "0.2"
type: Class
title: Planner-Executor Pattern
resource: urn:ngm:class:planner-executor-pattern
domain: artificial-intelligence
description: "A multi-agent orchestration pattern that separates deciding what to do from doing it: a planner component decomposes a goal into an ordered sequence of concrete steps, and one or more executor components carry those steps out, reporting results back so the plan can proceed or be revised. The split lets each role specialise — the planner reasons about strategy, dependencies, and ordering over the w"
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:multiagentorchestration
requires:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:multi-agent-system
uses:
  - urn:ngm:class:task-delegation
  - urn:ngm:class:taskdelegation
relatedTo:
  - urn:ngm:class:supervisor-worker-pattern
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:supervisorworkerpattern
  - urn:ngm:class:llmorchestration
---

# Planner-Executor Pattern

A multi-agent orchestration pattern that separates deciding what to do from doing it: a planner component decomposes a goal into an ordered sequence of concrete steps, and one or more executor components carry those steps out, reporting results back so the plan can proceed or be revised. The split lets each role specialise — the planner reasons about strategy, dependencies, and ordering over the whole task, while executors focus narrowly on faithfully performing individual steps with the appropriate tools — and it makes the plan an explicit, inspectable artefact rather than an implicit chain of ad-hoc decisions.
