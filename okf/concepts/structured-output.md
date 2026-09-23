---
okf_version: "0.2"
type: Class
title: Structured Output
resource: urn:ngm:class:structured-output
domain: ai
description: Structured output is a technique for constraining a language model to emit responses that conform to a predefined schema such as JSON, a regular grammar, or a typed object. It is enforced through prompt instructions, constrained decoding, or function-calling interfaces so that downstream systems can parse results reliably. Structured output bridges free-form generation and deterministic software b
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:constrained-decoding
enables:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:function-calling
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:tool-use
dependsOn:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tokenization
implements:
  - urn:ngm:class:grammar-constrained-generation
  - urn:ngm:class:schema-validation
contrastsWith:
  - urn:ngm:class:chain-of-thought
bridgesTo:
  - urn:ngm:class:data
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:regular-expression
  - urn:ngm:class:type-system
supports:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:api-integration
  - urn:ngm:class:information-extraction
relatedTo:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:large-language-models
  - urn:ngm:class:pydantic
  - urn:ngm:class:openai-research-organisation-api
---

# Structured Output

Structured output is a technique for constraining a language model to emit responses that conform to a predefined schema such as JSON, a regular grammar, or a typed object. It is enforced through prompt instructions, constrained decoding, or function-calling interfaces so that downstream systems can parse results reliably. Structured output bridges free-form generation and deterministic software by guaranteeing machine-readable, validatable responses.
