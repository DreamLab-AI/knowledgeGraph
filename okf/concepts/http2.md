---
okf_version: "0.2"
type: Class
title: Http2
resource: urn:ngm:class:http2
domain: infrastructure
description: HTTP/2 is a major revision of the Hypertext Transfer Protocol that introduces a binary framing layer, multiplexed streams over a single TCP connection, header compression and server push. It reduces latency and head-of-line blocking at the application layer compared with HTTP/1.1 while preserving the protocol's semantics. It is standardised in RFC 7540 (later RFC 9113) and is widely deployed acros
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:http
requires:
  - urn:ngm:class:tcp
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:latency
dependsOn:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:tls-handshake
implements:
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:quic
  - urn:ngm:class:web-socket
uses:
  - urn:ngm:class:multiplexing
  - urn:ngm:class:server-push
  - urn:ngm:class:transport-layer
supports:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:http
  - urn:ngm:class:application-layer
  - urn:ngm:class:api
  - urn:ngm:class:rest
---

# Http2

HTTP/2 is a major revision of the Hypertext Transfer Protocol that introduces a binary framing layer, multiplexed streams over a single TCP connection, header compression and server push. It reduces latency and head-of-line blocking at the application layer compared with HTTP/1.1 while preserving the protocol's semantics. It is standardised in RFC 7540 (later RFC 9113) and is widely deployed across the modern web.
