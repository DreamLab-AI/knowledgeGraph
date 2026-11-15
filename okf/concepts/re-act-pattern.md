---
okf_version: "0.2"
type: Class
title: ReAct Pattern
resource: urn:ngm:class:re-act-pattern
domain: ai
description: ReAct (Reasoning and Acting) is a prompting and agent-control pattern in which a language model interleaves explicit reasoning traces with action steps such as tool calls, observing the results before reasoning again. This loop lets the model decompose tasks, gather information, and self-correct rather than answering in a single pass. It is a foundational design for tool-using LLM agents.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:agent-frameworks
  - urn:ngm:class:function-calling
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ReAct Pattern

ReAct (Reasoning and Acting) is a prompting and agent-control pattern in which a language model interleaves explicit reasoning traces with action steps such as tool calls, observing the results before reasoning again. This loop lets the model decompose tasks, gather information, and self-correct rather than answering in a single pass. It is a foundational design for tool-using LLM agents.
