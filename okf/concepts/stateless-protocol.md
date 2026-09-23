---
okf_version: "0.2"
type: Class
title: Stateless Protocol
resource: urn:ngm:class:stateless-protocol
domain: infrastructure
description: A stateless protocol is a communication protocol in which each request from a client to a server is treated independently, carrying all the information needed to be understood without relying on stored context from previous requests. The server retains no session state between requests, which simplifies server design and improves scalability and resilience because any server instance can handle an
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:protocol
requires:
  - urn:ngm:class:client-server-architecture
enables:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:session-management
implements:
  - urn:ngm:class:rest
contrastsWith:
  - urn:ngm:class:session-management
bridgesTo:
  - urn:ngm:class:load-balancer
uses:
  - urn:ngm:class:http
supports:
  - urn:ngm:class:idempotency
  - urn:ngm:class:reliability
partOf:
  - urn:ngm:class:protocol
relatedTo:
  - urn:ngm:class:http
  - urn:ngm:class:rest
  - urn:ngm:class:idempotency
---

# Stateless Protocol

A stateless protocol is a communication protocol in which each request from a client to a server is treated independently, carrying all the information needed to be understood without relying on stored context from previous requests. The server retains no session state between requests, which simplifies server design and improves scalability and resilience because any server instance can handle any request. HTTP is the canonical example; where continuity is needed, state is reintroduced at a higher layer through tokens, cookies or explicit session management.
