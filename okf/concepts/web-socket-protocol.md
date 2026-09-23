---
okf_version: "0.2"
type: Class
title: WebSocket Protocol
resource: urn:ngm:class:web-socket-protocol
domain: infrastructure
description: The WebSocket Protocol is a standardised full-duplex communication protocol defined in RFC 6455 (2011) that provides a persistent, low-latency bidirectional channel between a client and a server over a single TCP connection. It was designed to overcome the limitations of HTTP polling and long-polling by upgrading an initial HTTP handshake to a persistent framed message channel, enabling servers to
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:transmission-control-protocol
  - urn:ngm:class:hypertext-transfer-protocol
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:realtime-collaboration
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:server-push
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:real-time-streaming
implements:
  - urn:ngm:class:rfc-6455
  - urn:ngm:class:full-duplex-communication
contrastsWith:
  - urn:ngm:class:g-rpc
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:http
  - urn:ngm:class:web-rtc
  - urn:ngm:class:http
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:multi-agent-system
uses:
  - urn:ngm:class:networking-infrastructure
  - urn:ngm:class:tcp-connection
supports:
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:publish-subscribe-pattern
relatedTo:
  - urn:ngm:class:web-socket
  - urn:ngm:class:realtime-communication
  - urn:ngm:class:http
  - urn:ngm:class:mqtt
  - urn:ngm:class:http
---

# WebSocket Protocol

The WebSocket Protocol is a standardised full-duplex communication protocol defined in RFC 6455 (2011) that provides a persistent, low-latency bidirectional channel between a client and a server over a single TCP connection. It was designed to overcome the limitations of HTTP polling and long-polling by upgrading an initial HTTP handshake to a persistent framed message channel, enabling servers to push data to clients without client-initiated requests. WebSocket frames carry minimal overhead — a 2-byte header for small messages — making the protocol suitable for high-frequency data streams such as financial tickers, collaborative editing, gaming, and real-time AI agent communications. It is supported natively in all major browsers and server-side runtimes, and forms the transport layer for many higher-level protocols including STOMP, MQTT-over-WebSocket, and the OpenAI Realtime API.
