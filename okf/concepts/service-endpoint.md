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
  - urn:ngm:class:transport-layer-security
enables:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:microservices
dependsOn:
  - urn:ngm:class:authentication
implements:
  - urn:ngm:class:api
bridgesTo:
  - urn:ngm:class:decentralised-identifier
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
  - urn:ngm:class:decentralised-identifier
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Service Endpoint

A Service Endpoint is a network-addressable location, typically expressed as a URL or URI, at which a service exposes its functionality to clients. It defines where requests are sent and, together with a protocol and interface contract, how interactions are framed and authenticated. Service endpoints are central to APIs, microservices and decentralised-identity documents, where they advertise the reachable interfaces associated with an identity or capability.
