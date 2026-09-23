---
okf_version: "0.2"
type: Class
title: Hypertext Transfer Protocol
resource: urn:ngm:class:hypertext-transfer-protocol
domain: infrastructure
description: The Hypertext Transfer Protocol (HTTP) is an application-layer, request-response protocol for exchanging hypermedia documents and data across the web. Clients issue requests with methods and headers, and servers return responses with status codes and content. HTTP is the foundational protocol of the World Wide Web and of most modern web APIs.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:application-layer
requires:
  - urn:ngm:class:transmission-control-protocol
enables:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api
dependsOn:
  - urn:ngm:class:transmission-control-protocol
implements:
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:transmission-control-protocol
bridgesTo:
  - urn:ngm:class:rest-api
uses:
  - urn:ngm:class:tls
supports:
  - urn:ngm:class:rest-api
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:application-layer
relatedTo:
  - urn:ngm:class:http2
  - urn:ngm:class:network-protocol
---

# Hypertext Transfer Protocol

The Hypertext Transfer Protocol (HTTP) is an application-layer, request-response protocol for exchanging hypermedia documents and data across the web. Clients issue requests with methods and headers, and servers return responses with status codes and content. HTTP is the foundational protocol of the World Wide Web and of most modern web APIs.
