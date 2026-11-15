---
okf_version: "0.2"
type: Class
title: MCP Client
resource: urn:ngm:class:mcp-client
domain: ai
description: An MCP client is the component within an AI host application that establishes and maintains a connection to one or more Model Context Protocol servers. It negotiates capabilities, forwards tool, resource, and prompt requests from the language model, and relays results back into the model's context. Each client maintains a one-to-one session with a server, mediating the model's access to external s
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:mcp-server
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# MCP Client

An MCP client is the component within an AI host application that establishes and maintains a connection to one or more Model Context Protocol servers. It negotiates capabilities, forwards tool, resource, and prompt requests from the language model, and relays results back into the model's context. Each client maintains a one-to-one session with a server, mediating the model's access to external systems.
