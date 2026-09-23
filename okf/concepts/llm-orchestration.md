---
okf_version: "0.2"
type: Class
title: LLM Orchestration
resource: urn:ngm:class:llm-orchestration
domain: ai
description: The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.
maturity: growing
quality: 0.6
is-a:
  - urn:ngm:class:large-language-models
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tool-use
enables:
  - urn:ngm:class:retrieval-augmented-generation
bridgesTo:
  - urn:ngm:class:lang-chain
---

# LLM Orchestration

The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.
