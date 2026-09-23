---
okf_version: "0.2"
type: Class
title: Plan and Execute Pattern
resource: urn:ngm:class:plan-and-execute-pattern
domain: ai
description: The plan-and-execute pattern is an agent-architecture design in which a dedicated planner component produces a structured task plan that an executor component then realises step by step using tools. Formalising the strategy as a reusable pattern lets agent frameworks separate high-level reasoning from low-level tool invocation, enabling re-planning and observability. It is widely implemented throu
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:function-calling
---

# Plan and Execute Pattern

The plan-and-execute pattern is an agent-architecture design in which a dedicated planner component produces a structured task plan that an executor component then realises step by step using tools. Formalising the strategy as a reusable pattern lets agent frameworks separate high-level reasoning from low-level tool invocation, enabling re-planning and observability. It is widely implemented through function-calling pipelines in LLM agent frameworks.
