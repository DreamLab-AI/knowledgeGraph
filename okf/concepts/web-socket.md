---
okf_version: "0.2"
type: Class
title: WebSocket
resource: urn:ngm:class:web-socket
domain: infrastructure
description: WebSocket is an application-layer communication protocol defined in RFC 6455 that establishes a persistent, full-duplex channel over a single TCP connection, initiated via an HTTP/1.1 upgrade handshake. Unlike the request-response model of HTTP, WebSocket permits the server and client to send data frames independently at any time after connection establishment, enabling low-latency bidirectional c
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:transmission-control-protocol
  - urn:ngm:class:hypertext-transfer-protocol
enables:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:collaborative-editing
dependsOn:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:publish-subscribe-pattern
implements:
  - urn:ngm:class:full-duplex-communication
  - urn:ngm:class:rfc-6455
contrastsWith:
  - urn:ngm:class:rest-api
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:long-polling
  - urn:ngm:class:web-rtc
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:inference-serving
  - urn:ngm:class:inference-serving
uses:
  - urn:ngm:class:tls
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:protobuf
  - urn:ngm:class:message-framing
supports:
  - urn:ngm:class:message-queue
  - urn:ngm:class:api-gateway
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:g-rpc
---

# WebSocket

WebSocket is an application-layer communication protocol defined in RFC 6455 that establishes a persistent, full-duplex channel over a single TCP connection, initiated via an HTTP/1.1 upgrade handshake. Unlike the request-response model of HTTP, WebSocket permits the server and client to send data frames independently at any time after connection establishment, enabling low-latency bidirectional communication. The protocol specifies a lightweight framing mechanism with opcodes for text, binary, ping/pong keepalives, and graceful connection close, and is extended by RFC 7692 for per-message DEFLATE compression. It is the de facto standard transport for real-time web applications including collaborative editing, live dashboards, chat systems, and streaming LLM token output.
