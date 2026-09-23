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
  - urn:ngm:class:authorization
enables:
  - urn:ngm:class:api-management
implements:
  - urn:ngm:class:zero-trust-architecture
uses:
  - urn:ngm:class:oauth
  - urn:ngm:class:tls
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-design
standardizedBy:
  - urn:ngm:class:tls
relatedTo:
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:microservices
---

# API Security

API security is the discipline of protecting application programming interfaces from misuse, abuse, and attack across their lifecycle, covering authentication, authorisation, input validation, transport encryption, rate limiting, and monitoring. As APIs expose business logic and data directly to clients and partners, they present a broad attack surface addressed through tokens such as OAuth and JWT, gateways, and threat modelling against risks like broken object-level authorisation. It is a core component of modern application and web security.
