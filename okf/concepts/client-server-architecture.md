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
---

# Client-Server Architecture

Client-server architecture is a distributed computing model in which client processes request services or resources and dedicated server processes provide them, typically over a network. The model centralises shared resources, data and logic on servers while distributing presentation and interaction to many clients. It is the foundational pattern for the web, networked applications and most online services, and it contrasts with peer-to-peer architectures where every node is both provider and consumer.
