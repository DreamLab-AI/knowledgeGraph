---
okf_version: "0.2"
type: Class
title: Single-Turn Inference
resource: urn:ngm:class:single-turn-inference
domain: artificial-intelligence
description: "The stateless request-response mode of using a language model: a prompt goes in, one completion comes out, and the interaction ends — with no intermediate tool execution, environmental feedback, self-correction, or persistent state; it is the cheapest and most predictable inference pattern, suited to classification, extraction, translation, and summarisation, and serves as the baseline against whi"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-task-execution
uses:
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:chain-of-thought
---

# Single-Turn Inference

The stateless request-response mode of using a language model: a prompt goes in, one completion comes out, and the interaction ends — with no intermediate tool execution, environmental feedback, self-correction, or persistent state; it is the cheapest and most predictable inference pattern, suited to classification, extraction, translation, and summarisation, and serves as the baseline against which iterative agentic workflows are defined and evaluated.
