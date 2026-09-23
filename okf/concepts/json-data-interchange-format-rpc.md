---
okf_version: "0.2"
type: Class
title: JSON-RPC
resource: urn:ngm:class:json-data-interchange-format-rpc
domain: infrastructure
description: JSON-RPC is a lightweight, stateless, transport-agnostic remote procedure call (RPC) protocol that encodes method invocations and their responses as JSON objects. The JSON-RPC 2.0 specification, finalised in 2013, defines a minimal request envelope comprising a jsonrpc version field, a method name, an optional params argument (array or object), and a correlation id; the response carries either a r
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:push-notification
  - urn:ngm:class:batch-processing
  - urn:ngm:class:request-object
  - urn:ngm:class:response-object
  - urn:ngm:class:push-notification
  - urn:ngm:class:batch-processing
requires:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:network-transport
  - urn:ngm:class:json-data-interchange-format
enables:
  - urn:ngm:class:tool-use
  - urn:ngm:class:function-calling
  - urn:ngm:class:distributed-computing
implements:
  - urn:ngm:class:client-server-architecture
  - urn:ngm:class:request-response-pattern
contrastsWith:
  - urn:ngm:class:rest-api
  - urn:ngm:class:graph-ql
  - urn:ngm:class:g-rpc
  - urn:ngm:class:soap
bridgesTo:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:ai-infrastructure
uses:
  - urn:ngm:class:web-socket
  - urn:ngm:class:http
  - urn:ngm:class:json-data-interchange-format
supports:
  - urn:ngm:class:language-server-protocol
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:ethereum
partOf:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:api-standard
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:microservices
  - urn:ngm:class:message-passing
  - urn:ngm:class:inter-process-communication
---

# JSON-RPC

JSON-RPC is a lightweight, stateless, transport-agnostic remote procedure call (RPC) protocol that encodes method invocations and their responses as JSON objects. The JSON-RPC 2.0 specification, finalised in 2013, defines a minimal request envelope comprising a jsonrpc version field, a method name, an optional params argument (array or object), and a correlation id; the response carries either a result or a structured error object. The protocol operates over any byte-stream transport — HTTP, WebSocket, TCP, Unix domain sockets, or stdin/stdout — making it uniquely portable across networked and embedded contexts. It underpins foundational cross-domain infrastructure including the Ethereum node API, the Language Server Protocol, and the Model Context Protocol used for AI tool-calling.
