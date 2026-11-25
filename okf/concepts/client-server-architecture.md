---
okf_version: "0.2"
type: Class
title: Client-Server Architecture
resource: urn:ngm:class:client-server-architecture
domain: distributed-systems
description: Client-server architecture is a distributed computing model in which client processes request services or resources and dedicated server processes provide them, typically over a network. The model centralises shared resources, data and logic on servers while distributing presentation and interaction to many clients. It is the foundational pattern for the web, networked applications and most online
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-architecture
hasPart:
  - urn:ngm:class:api
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:http
enables:
  - urn:ngm:class:scalability
implements:
  - urn:ngm:class:rest
contrastsWith:
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:http
  - urn:ngm:class:api
supports:
  - urn:ngm:class:load-balancing
partOf:
  - urn:ngm:class:distributed-architecture
relatedTo:
  - urn:ngm:class:stateless-protocol
  - urn:ngm:class:distributed-systems
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Client-Server Architecture

Client-server architecture is a distributed computing model in which client processes request services or resources and dedicated server processes provide them, typically over a network. The model centralises shared resources, data and logic on servers while distributing presentation and interaction to many clients. It is the foundational pattern for the web, networked applications and most online services, and it contrasts with peer-to-peer architectures where every node is both provider and consumer.
