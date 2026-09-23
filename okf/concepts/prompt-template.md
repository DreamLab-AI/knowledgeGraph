---
okf_version: "0.2"
type: Class
title: Prompt Template
resource: urn:ngm:class:prompt-template
domain: ai
description: A Prompt Template is a reusable, parameterised text structure that combines static instructional scaffolding with dynamic variable slots to produce consistent, well-formed inputs for large language models. Templates encode best-practice prompt engineering patterns — role declarations, task specifications, output format constraints, and chain-of-thought scaffolding — in a form that can be instantia
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:prompt-engineering
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agentic-workflow
contrastsWith:
  - urn:ngm:class:soft-prompt-embedding
uses:
  - urn:ngm:class:context-window
  - urn:ngm:class:instruction-following
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:system-prompt
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:instruction-tuning
---

# Prompt Template

A Prompt Template is a reusable, parameterised text structure that combines static instructional scaffolding with dynamic variable slots to produce consistent, well-formed inputs for large language models. Templates encode best-practice prompt engineering patterns — role declarations, task specifications, output format constraints, and chain-of-thought scaffolding — in a form that can be instantiated with runtime values such as user queries, document snippets, or API responses. They are the primary unit of composition in LLM orchestration frameworks such as LangChain, LlamaIndex, and DSPy, and they serve as version-controlled artefacts that enable systematic A/B testing of prompt variations. Effective prompt templates balance specificity (providing enough context to constrain model behaviour) with generality (accommodating the full range of valid inputs).
