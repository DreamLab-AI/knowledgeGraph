---
okf_version: "0.2"
type: Class
title: Stateless Architecture
resource: urn:ngm:class:stateless-architecture
domain: infrastructure
description: "Stateless architecture is a design approach in which each request carries all the information needed to process it, and the serving component retains no client session state between requests. By externalising state to caches, databases, or tokens, stateless services can be freely replicated, replaced, and load-balanced, which simplifies horizontal scaling and fault recovery at the cost of pushing "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cloud-native
requires:
  - urn:ngm:class:load-balancing
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:load-balancing
dependsOn:
  - urn:ngm:class:scalability
implements:
  - urn:ngm:class:rest-api
contrastsWith:
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:rest-api
supports:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:containerisation
---

# Stateless Architecture

Stateless architecture is a design approach in which each request carries all the information needed to process it, and the serving component retains no client session state between requests. By externalising state to caches, databases, or tokens, stateless services can be freely replicated, replaced, and load-balanced, which simplifies horizontal scaling and fault recovery at the cost of pushing state management to dedicated stores.
