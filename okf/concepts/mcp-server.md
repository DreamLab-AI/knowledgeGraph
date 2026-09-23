---
okf_version: "0.2"
type: Class
title: MCP Server
resource: urn:ngm:class:mcp-server
domain: ai
description: An MCP server is a program that exposes tools, resources, and prompts to AI applications through the Model Context Protocol. It advertises its capabilities during connection negotiation and executes requests forwarded by an MCP client, returning structured results for the model to consume. Servers encapsulate access to external systems such as databases, APIs, file systems, and developer tooling.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:mcp-client
---

# MCP Server

An MCP server is a program that exposes tools, resources, and prompts to AI applications through the Model Context Protocol. It advertises its capabilities during connection negotiation and executes requests forwarded by an MCP client, returning structured results for the model to consume. Servers encapsulate access to external systems such as databases, APIs, file systems, and developer tooling.
