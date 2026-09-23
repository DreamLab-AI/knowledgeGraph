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
---

# Application Programming Interface

An application programming interface (API) is a formally specified contract that defines how software components request services and exchange data with one another. It abstracts an implementation behind a stable set of operations, data types, and protocols, decoupling callers from internal details. APIs span in-process library interfaces, inter-process and network endpoints, and platform service boundaries.
