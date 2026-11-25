---
okf_version: "0.2"
type: Class
title: Request-Response Pattern
resource: urn:ngm:class:request-response-pattern
domain: infrastructure
description: The request-response pattern is a synchronous message-exchange model in which a client sends a request to a server and blocks, or awaits, until a corresponding response is returned. It establishes a one-to-one, correlated interaction where each request expects exactly one reply, forming the basis of most client-server communication. The pattern contrasts with asynchronous, event-driven, and publis
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-network-and-comms
requires:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:api
  - urn:ngm:class:microservices
dependsOn:
  - urn:ngm:class:distributed-systems
implements:
  - urn:ngm:class:http
  - urn:ngm:class:remote-procedure-call
contrastsWith:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:message-queue
  - urn:ngm:class:webhook
bridgesTo:
  - urn:ngm:class:microservices-architecture
uses:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:rest-api
supports:
  - urn:ngm:class:rest
  - urn:ngm:class:service-mesh
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:idempotency
  - urn:ngm:class:http-protocol
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Request-Response Pattern

The request-response pattern is a synchronous message-exchange model in which a client sends a request to a server and blocks, or awaits, until a corresponding response is returned. It establishes a one-to-one, correlated interaction where each request expects exactly one reply, forming the basis of most client-server communication. The pattern contrasts with asynchronous, event-driven, and publish-subscribe styles where senders do not wait for an immediate reply.
