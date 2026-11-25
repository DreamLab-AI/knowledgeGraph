---
okf_version: "0.2"
type: Class
title: Application Programming Interface
resource: urn:ngm:class:application-programming-interface
domain: infrastructure
description: "An application programming interface (API) is a formally specified contract that defines how software components request services and exchange data with one another. It abstracts an implementation behind a stable set of operations, data types, and protocols, decoupling callers from internal details. APIs span in-process library interfaces, inter-process and network endpoints, and platform service "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:interface
hasPart:
  - urn:ngm:class:rest-api
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:rest-api
dependsOn:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:http
implements:
  - urn:ngm:class:interface
contrastsWith:
  - urn:ngm:class:graphics-pipeline
uses:
  - urn:ngm:class:software-engineering
supports:
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:scalability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Application Programming Interface

An application programming interface (API) is a formally specified contract that defines how software components request services and exchange data with one another. It abstracts an implementation behind a stable set of operations, data types, and protocols, decoupling callers from internal details. APIs span in-process library interfaces, inter-process and network endpoints, and platform service boundaries.
