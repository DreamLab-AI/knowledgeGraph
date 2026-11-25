---
okf_version: "0.2"
type: Class
title: API Security
resource: urn:ngm:class:api-security
domain: security
description: API security is the discipline of protecting application programming interfaces from misuse, abuse, and attack across their lifecycle, covering authentication, authorisation, input validation, transport encryption, rate limiting, and monitoring. As APIs expose business logic and data directly to clients and partners, they present a broad attack surface addressed through tokens such as OAuth and JW
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:api-gateway
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
enables:
  - urn:ngm:class:api-management
implements:
  - urn:ngm:class:zero-trust-architecture
uses:
  - urn:ngm:class:oauth
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-design
standardizedBy:
  - urn:ngm:class:transport-layer-security
relatedTo:
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:microservices
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# API Security

API security is the discipline of protecting application programming interfaces from misuse, abuse, and attack across their lifecycle, covering authentication, authorisation, input validation, transport encryption, rate limiting, and monitoring. As APIs expose business logic and data directly to clients and partners, they present a broad attack surface addressed through tokens such as OAuth and JWT, gateways, and threat modelling against risks like broken object-level authorisation. It is a core component of modern application and web security.
