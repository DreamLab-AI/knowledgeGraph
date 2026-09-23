---
okf_version: "0.2"
type: Class
title: Tool Use
resource: urn:ngm:class:tool-use
domain: artificial-intelligence
description: Tool Use is the capability of large language models and AI agent systems to invoke external functions, APIs, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools — a tool schema encoding names, descriptions, and JSON Schema parameter specifications — reas
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:tool-schema
  - urn:ngm:class:function-calling
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:orchestration-layer
enables:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:code-execution
dependsOn:
  - urn:ngm:class:inference-time-computation
  - urn:ngm:class:prompt-engineering
implements:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:function-calling
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:retrieval-augmented-generation
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:context-window
  - urn:ngm:class:structured-output
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:audit-logging
  - urn:ngm:class:access-control
relatedTo:
  - urn:ngm:class:react-prompting
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:planning
---

# Tool Use

Tool Use is the capability of large language models and AI agent systems to invoke external functions, APIs, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools — a tool schema encoding names, descriptions, and JSON Schema parameter specifications — reasons about which tool to call and with what arguments, executes that call via a surrounding orchestration layer, and incorporates the returned observation into its subsequent reasoning. This capability is foundational to agentic AI systems that must take real-world actions such as code execution, web search, database queries, file manipulation, or actuator control, bridging the boundary between language generation and executable computation.
