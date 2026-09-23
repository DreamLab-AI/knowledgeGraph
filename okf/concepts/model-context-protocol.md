---
okf_version: "0.2"
type: Class
title: Model Context Protocol
resource: urn:ngm:class:model-context-protocol
domain: artificial-intelligence
description: The Model Context Protocol (MCP) is an open standard published by Anthropic in November 2024 that defines a JSON-RPC 2.0-based client–server protocol for connecting Large Language Model inference hosts (MCP clients) to external capability providers (MCP servers), exposing tools, resources, an...
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:json-rpc-protocol
hasPart:
  - urn:ngm:class:mcp-client
  - urn:ngm:class:mcp-prompt
  - urn:ngm:class:mcp-resource
  - urn:ngm:class:mcp-server
  - urn:ngm:class:mcp-tool
  - urn:ngm:class:mcp-transport-layer
requires:
  - urn:ngm:class:http-protocol
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:stdio-transport
  - urn:ngm:class:web-socket-protocol
enables:
  - urn:ngm:class:agent-tool-use
  - urn:ngm:class:context-injection
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:sandboxed-capability-discovery
dependsOn:
  - urn:ngm:class:json-schema-validator
  - urn:ngm:class:typescript-sdk
  - urn:ngm:class:python-mcp-sdk
implements:
  - urn:ngm:class:anthropic-mcp-specification-v0-1
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:oauth-2-0-resource-server
bridgesTo:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:agent-communication-protocol
  - urn:ngm:class:ros
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:solid-pod
  - urn:ngm:class:web-assembly
partOf:
  - urn:ngm:class:claude-agent-sdk
  - urn:ngm:class:lang-chain-agent-framework
  - urn:ngm:class:vision-claw-agentic-container
  - urn:ngm:class:langchain-agent-framework
---

# Model Context Protocol

The Model Context Protocol (MCP) is an open standard published by Anthropic in November 2024 that defines a JSON-RPC 2.0-based client–server protocol for connecting Large Language Model inference hosts (MCP clients) to external capability providers (MCP servers), exposing tools, resources, an...
