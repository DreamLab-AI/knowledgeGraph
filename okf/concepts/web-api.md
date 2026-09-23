---
okf_version: "0.2"
type: Class
title: Web Api
resource: urn:ngm:class:web-api
domain: infrastructure
description: A web API is an application programming interface exposed over the web using HTTP, allowing programs to request and exchange data with a remote service rather than rendering pages for humans. It defines a contract of endpoints, request and response formats, authentication and error semantics, commonly returning structured data such as JSON. Web APIs are the backbone of integration between applicat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:api-design
hasPart:
  - urn:ngm:class:http
requires:
  - urn:ngm:class:client-server-architecture
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:microservices
dependsOn:
  - urn:ngm:class:web-standards
implements:
  - urn:ngm:class:rest
bridgesTo:
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:http
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:api-design
relatedTo:
  - urn:ngm:class:rest
  - urn:ngm:class:client-server-architecture
  - urn:ngm:class:web-standards
---

# Web Api

A web API is an application programming interface exposed over the web using HTTP, allowing programs to request and exchange data with a remote service rather than rendering pages for humans. It defines a contract of endpoints, request and response formats, authentication and error semantics, commonly returning structured data such as JSON. Web APIs are the backbone of integration between applications, mobile clients, microservices and third-party platforms, with REST and GraphQL being two prevailing architectural styles.
