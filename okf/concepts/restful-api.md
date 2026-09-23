---
okf_version: "0.2"
type: Class
title: RESTful API
resource: urn:ngm:class:restful-api
domain: infrastructure
description: A RESTful API is a web application programming interface that follows the Representational State Transfer architectural style, exposing resources identified by URIs and manipulated through a uniform set of HTTP methods. It is stateless, treats responses as representations of resource state, and uses standard status codes and media types so clients and servers can evolve independently. RESTful desi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:web-api
hasPart:
  - urn:ngm:class:http
  - urn:ngm:class:hateoas
requires:
  - urn:ngm:class:http
  - urn:ngm:class:stateless-protocol
enables:
  - urn:ngm:class:web-services
  - urn:ngm:class:api-management
implements:
  - urn:ngm:class:rest-api
  - urn:ngm:class:idempotency
contrastsWith:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:soap
bridgesTo:
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:http
  - urn:ngm:class:caching
supports:
  - urn:ngm:class:api-design
  - urn:ngm:class:microservices
standardizedBy:
  - urn:ngm:class:open-api-specification
partOf:
  - urn:ngm:class:web-api
  - urn:ngm:class:api-design
relatedTo:
  - urn:ngm:class:rest-api
  - urn:ngm:class:hateoas
---

# RESTful API

A RESTful API is a web application programming interface that follows the Representational State Transfer architectural style, exposing resources identified by URIs and manipulated through a uniform set of HTTP methods. It is stateless, treats responses as representations of resource state, and uses standard status codes and media types so clients and servers can evolve independently. RESTful design favours predictable, cacheable, hypermedia-driven interactions over the web.
