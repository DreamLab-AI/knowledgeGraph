---
okf_version: "0.2"
type: Class
title: HTTP Protocol
resource: urn:ngm:class:http-protocol
domain: infrastructure
description: The Hypertext Transfer Protocol (HTTP) is a stateless, application-layer request-response protocol that forms the foundation of data communication on the World Wide Web, defining the format and semantics of messages exchanged between clients (browsers, API consumers) and servers (web servers, API gateways) over TCP/IP connections. Each HTTP transaction consists of a request message specifying a me
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:http-header
  - urn:ngm:class:http-status-code
  - urn:ngm:class:http
requires:
  - urn:ngm:class:client-server-architecture
enables:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-gateway
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:content-delivery-network-cdn
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:web-application
  - urn:ngm:class:model-context-protocol
implements:
  - urn:ngm:class:request-response-pattern
  - urn:ngm:class:stateless-protocol
contrastsWith:
  - urn:ngm:class:g-rpc
bridgesTo:
  - urn:ngm:class:ai-agent
uses:
  - urn:ngm:class:tls
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:quic
  - urn:ngm:class:uri
standardizedBy:
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:caching
  - urn:ngm:class:load-balancer
---

# HTTP Protocol

The Hypertext Transfer Protocol (HTTP) is a stateless, application-layer request-response protocol that forms the foundation of data communication on the World Wide Web, defining the format and semantics of messages exchanged between clients (browsers, API consumers) and servers (web servers, API gateways) over TCP/IP connections. Each HTTP transaction consists of a request message specifying a method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS), a target URI, headers conveying metadata, and an optional body, followed by a response message containing a status code, headers, and an optional body. HTTP has evolved through versions 1.0, 1.1, 2, and 3, with each version improving multiplexing, compression, and connection management.
