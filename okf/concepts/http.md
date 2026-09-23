---
okf_version: "0.2"
type: Class
title: HTTP
resource: urn:ngm:class:http
domain: infrastructure
description: The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:application-layer
requires:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:tcp
  - urn:ngm:class:dns
enables:
  - urn:ngm:class:api
  - urn:ngm:class:restful-api
  - urn:ngm:class:web-browser
  - urn:ngm:class:cdn
implements:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:request-response-pattern
contrastsWith:
  - urn:ngm:class:web-socket
  - urn:ngm:class:g-rpc
bridgesTo:
  - urn:ngm:class:microservices
  - urn:ngm:class:service-mesh
  - urn:ngm:class:network-protocol
  - urn:ngm:class:communication-protocols
uses:
  - urn:ngm:class:tls
  - urn:ngm:class:http-header
  - urn:ngm:class:http-status-code
supports:
  - urn:ngm:class:web-socket
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:graph-ql
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:communication-protocols
  - urn:ngm:class:http2
  - urn:ngm:class:http3
  - urn:ngm:class:quic
---

# HTTP

The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.
