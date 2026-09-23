---
okf_version: "0.2"
type: Class
title: Tool Schema
resource: urn:ngm:class:tool-schema
domain: artificial-intelligence
description: "A tool schema is a structured, machine-readable specification — typically expressed in JSON Schema format — that formally defines a function or external capability that an AI agent may invoke at inference time, encoding its name, natural-language description, parameter names and types, constraints, and required versus optional fields. Tool schemas are injected into an AI model's context window as "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:large-language-model
  - urn:ngm:class:structured-output
enables:
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:ai-agent
  - urn:ngm:class:tool-selection
dependsOn:
  - urn:ngm:class:schema-registry
  - urn:ngm:class:inference-compute
  - urn:ngm:class:inference-compute
implements:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:model-context-protocol
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:prompt-engineering
bridgesTo:
  - urn:ngm:class:restful-api
  - urn:ngm:class:microservices-architecture
uses:
  - urn:ngm:class:type-system
  - urn:ngm:class:natural-language-description
  - urn:ngm:class:parameter-validation
supports:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:retrieval-augmented-generation
partOf:
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:capability-manifest
relatedTo:
  - urn:ngm:class:context-window
  - urn:ngm:class:reinforcement-learning-from-human-feedback
---

# Tool Schema

A tool schema is a structured, machine-readable specification — typically expressed in JSON Schema format — that formally defines a function or external capability that an AI agent may invoke at inference time, encoding its name, natural-language description, parameter names and types, constraints, and required versus optional fields. Tool schemas are injected into an AI model's context window as part of the system prompt or capability manifest, enabling the model to reason about available operations and emit syntactically correct, structured function-call outputs that an orchestration layer can dispatch. They constitute the primary interface contract between large language models and the external systems, services, or data sources they interact with, determining both tool-selection accuracy and invocation correctness. The tool schema construct is foundational to agentic AI architectures and underpins modern function-calling APIs, the Model Context Protocol, and multi-agent orchestration frameworks.
