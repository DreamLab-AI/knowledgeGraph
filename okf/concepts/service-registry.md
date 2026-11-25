---
okf_version: "0.2"
type: Class
title: Service Registry
resource: urn:ngm:class:service-registry
domain: distributed-systems
description: A Service Registry is a database of available service instances and their network locations that underpins dynamic service discovery in distributed and microservice architectures. Instances register on startup and deregister on shutdown, while clients or load balancers query the registry to resolve a logical service name to a healthy endpoint. Health checks expire stale entries, keeping the regist
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:service-discovery
hasPart:
  - urn:ngm:class:api-gateway
requires:
  - urn:ngm:class:service-discovery
enables:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:load-balancing
dependsOn:
  - urn:ngm:class:high-availability
bridgesTo:
  - urn:ngm:class:kubernetes
uses:
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:api-gateway
  - urn:ngm:class:orchestration
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Service Registry

A Service Registry is a database of available service instances and their network locations that underpins dynamic service discovery in distributed and microservice architectures. Instances register on startup and deregister on shutdown, while clients or load balancers query the registry to resolve a logical service name to a healthy endpoint. Health checks expire stale entries, keeping the registry an accurate view of live topology in elastic, frequently changing deployments.
