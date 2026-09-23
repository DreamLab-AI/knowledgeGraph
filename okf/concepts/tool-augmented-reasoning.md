---
okf_version: "0.2"
type: Class
title: Tool-Augmented Reasoning
resource: urn:ngm:class:tool-augmented-reasoning
domain: ai
description: Tool-augmented reasoning is an approach in which a language model invokes external tools such as calculators, search or code execution to solve tasks beyond its parametric knowledge. The model interleaves reasoning steps with tool calls.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:reasoning
requires:
  - urn:ngm:class:tool-use
  - urn:ngm:class:reasoning
enables:
  - urn:ngm:class:agentic-ai
bridgesTo:
  - urn:ngm:class:hallucination
---

# Tool-Augmented Reasoning

Tool-augmented reasoning is an approach in which a language model invokes external tools such as calculators, search or code execution to solve tasks beyond its parametric knowledge. The model interleaves reasoning steps with tool calls.
