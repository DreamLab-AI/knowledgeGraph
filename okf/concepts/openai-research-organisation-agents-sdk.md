---
okf_version: "0.2"
type: Class
title: OpenAI Agents SDK
resource: urn:ngm:class:openai-research-organisation-agents-sdk
domain: artificial-intelligence
description: The OpenAI Agents SDK is a software development kit for building agentic applications on OpenAI models, providing primitives for agents, tools and handoffs. It supports orchestrating one or more agents that call functions and pass control between each other.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:agentic-workflow
requires:
  - urn:ngm:class:language-model
  - urn:ngm:class:function-calling
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:tool-use
bridgesTo:
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:ai-agent
---

# OpenAI Agents SDK

The OpenAI Agents SDK is a software development kit for building agentic applications on OpenAI models, providing primitives for agents, tools and handoffs. It supports orchestrating one or more agents that call functions and pass control between each other.
