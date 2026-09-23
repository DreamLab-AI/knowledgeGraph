---
okf_version: "0.2"
type: Class
title: Rate Limiting
resource: urn:ngm:class:rate-limiting
domain: infrastructure
description: Rate limiting is a traffic-management technique that controls the number of requests a client may make to a service within a defined time window, rejecting or queuing excess requests. It protects backend resources from overload, enforces fair usage and quota policies, and mitigates abuse such as brute-force and denial-of-service attacks. Commonly implemented at API gateways using token-bucket or s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:caching
requires:
  - urn:ngm:class:api-gateway
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:resilience
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:api-management
implements:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:api-management
contrastsWith:
  - urn:ngm:class:load-balancing
bridgesTo:
  - urn:ngm:class:service-mesh
uses:
  - urn:ngm:class:api
  - urn:ngm:class:caching
supports:
  - urn:ngm:class:security
partOf:
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:authentication
  - urn:ngm:class:microservices
---

# Rate Limiting

Rate limiting is a traffic-management technique that controls the number of requests a client may make to a service within a defined time window, rejecting or queuing excess requests. It protects backend resources from overload, enforces fair usage and quota policies, and mitigates abuse such as brute-force and denial-of-service attacks. Commonly implemented at API gateways using token-bucket or sliding-window algorithms, it is a core mechanism for the resilience and stability of networked systems.
