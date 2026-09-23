---
okf_version: "0.2"
type: Class
title: Server-Sent Events
resource: urn:ngm:class:server-sent-events
domain: infrastructure
description: Server-Sent Events (SSE) is a W3C and WHATWG-standardised unidirectional server-to-client push protocol layered atop HTTP/1.1 and HTTP/2, enabling servers to emit a continuous stream of newline-delimited text events to browser or API clients over a single persistent connection. Each event record may carry optional 'id', 'event', 'data', and 'retry' fields; clients reconnect automatically using the
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-network-and-comms
requires:
  - urn:ngm:class:http
  - urn:ngm:class:persistent-connection
enables:
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:server-push
  - urn:ngm:class:mentions-and-notifications
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:token-streaming
  - urn:ngm:class:mentions-and-notifications
implements:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:publish-subscribe-pattern
contrastsWith:
  - urn:ngm:class:web-socket
  - urn:ngm:class:long-polling
  - urn:ngm:class:grpc-streaming
bridgesTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:http2
  - urn:ngm:class:eventsource-api
  - urn:ngm:class:http
supports:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:llm-inference-api
  - urn:ngm:class:real-time-dashboard
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:whatwg
relatedTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:chunked-transfer-encoding
---

# Server-Sent Events

Server-Sent Events (SSE) is a W3C and WHATWG-standardised unidirectional server-to-client push protocol layered atop HTTP/1.1 and HTTP/2, enabling servers to emit a continuous stream of newline-delimited text events to browser or API clients over a single persistent connection. Each event record may carry optional 'id', 'event', 'data', and 'retry' fields; clients reconnect automatically using the last-received event id as a cursor. SSE is consumed via the browser's EventSource API and is the dominant transport for streaming large-language-model inference outputs in APIs such as OpenAI and Anthropic, as well as in the Model Context Protocol (MCP) transport layer.
