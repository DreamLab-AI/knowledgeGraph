---
okf_version: "0.2"
type: Class
title: Tool Definition
resource: urn:ngm:class:tool-definition
domain: ai
description: A Tool Definition is a structured specification that describes a capability that an AI language model or agent can invoke at runtime, including the tool's name, a natural language description of its purpose, and a formal schema defining its input parameters and expected output format. Tool definitions are the primary mechanism through which AI systems access external functionality, enabling them t
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:tool-schema
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-agent
uses:
  - urn:ngm:class:schema-definition
  - urn:ngm:class:function-calling
supports:
  - urn:ngm:class:multi-agent-systems
relatedTo:
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-use
  - urn:ngm:class:json-data-interchange-format-schema
---

# Tool Definition

A Tool Definition is a structured specification that describes a capability that an AI language model or agent can invoke at runtime, including the tool's name, a natural language description of its purpose, and a formal schema defining its input parameters and expected output format. Tool definitions are the primary mechanism through which AI systems access external functionality, enabling them to call APIs, query databases, execute code, retrieve documents, or perform actions in the world beyond text generation. The format of tool definitions is standardised by providers such as Anthropic, OpenAI, and Google, typically using JSON Schema to describe parameters, and the quality of a tool definition's description and schema directly determines how reliably an AI model selects and invokes it.
