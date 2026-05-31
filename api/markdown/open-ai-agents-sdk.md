- ### Definition
  - The OpenAI Agents SDK is a software development kit for building agentic applications on OpenAI models, providing primitives for agents, tools and handoffs. It supports orchestrating one or more agents that call functions and pass control between each other.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:OpenAIAgentsSDK
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Agentic Workflow]]
  - bridges-to:: [[OpenAI]], [[AI Agent]]
  - requires:: [[Language Model]], [[Function Calling]]
  - enables:: [[Multi-Agent Coordination]], [[Tool Use]]

- ### Content
  - The OpenAI Agents SDK provides building blocks for agent loops, including tool registration, guardrails, tracing and handoffs that transfer a task from one agent to another. It is intended to reduce boilerplate when wiring models to external functions.
  - The SDK targets developers building assistants and automation that need to call APIs, run code or coordinate several specialised agents. It is released as an open-source library that works with OpenAI models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z