---
okf_version: "0.2"
type: Class
title: Service Endpoint
resource: urn:ngm:class:service-endpoint
domain: security
description: "A Service Endpoint is a network-addressable location, typically expressed as a URL or URI, at which a service exposes its functionality to clients. It defines where requests are sent and, together with a protocol and interface contract, how interactions are framed and authenticated. Service endpoints are central to APIs, microservices and decentralised-identity documents, where they advertise the "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:api
hasPart:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:microservices
dependsOn:
  - urn:ngm:class:authentication
implements:
  - urn:ngm:class:api
bridgesTo:
  - urn:ngm:class:decentralized-identifier
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:http
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:service-oriented-architecture
partOf:
  - urn:ngm:class:api
relatedTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-discovery
  - urn:ngm:class:decentralized-identifier
---

# Service Endpoint

A Service Endpoint is a network-addressable location, typically expressed as a URL or URI, at which a service exposes its functionality to clients. It defines where requests are sent and, together with a protocol and interface contract, how interactions are framed and authenticated. Service endpoints are central to APIs, microservices and decentralised-identity documents, where they advertise the reachable interfaces associated with an identity or capability.
