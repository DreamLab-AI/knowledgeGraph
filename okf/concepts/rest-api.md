---
okf_version: "0.2"
type: Class
title: REST API
resource: urn:ngm:class:rest-api
domain: infrastructure
description: A REST API (Representational State Transfer Application Programming Interface) is a web service interface conforming to Roy Fielding's six architectural constraints — client–server separation, statelessness, cacheability, uniform interface, layered system, and optional code-on-demand — originally formalised in his 2000 doctoral dissertation. Resources are uniquely addressed by URIs, manipulated th
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:uri
  - urn:ngm:class:http-server
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:cloud-native
  - urn:ngm:class:api-economy
  - urn:ngm:class:cloud-native
implements:
  - urn:ngm:class:http
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:hateoas
  - urn:ngm:class:representational-state-transfer
contrastsWith:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:g-rpc
  - urn:ngm:class:web-socket
  - urn:ngm:class:soap
bridgesTo:
  - urn:ngm:class:llm-inference-api
  - urn:ngm:class:model-serving
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:xml
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:tls
  - urn:ngm:class:json-data-interchange-format
supports:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:content-negotiation
relatedTo:
  - urn:ngm:class:api-design
  - urn:ngm:class:stateless-protocol
  - urn:ngm:class:hypermedia
---

# REST API

A REST API (Representational State Transfer Application Programming Interface) is a web service interface conforming to Roy Fielding's six architectural constraints — client–server separation, statelessness, cacheability, uniform interface, layered system, and optional code-on-demand — originally formalised in his 2000 doctoral dissertation. Resources are uniquely addressed by URIs, manipulated through standard HTTP verbs (GET, POST, PUT, PATCH, DELETE), and represented in negotiated formats such as JSON or XML. The uniform interface constraint — encompassing resource identification, manipulation through representations, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS) — is the defining characteristic that separates REST from earlier RPC and SOAP-based architectures. REST APIs have become the dominant integration surface across cloud platforms, AI model serving, microservices ecosystems, and public developer APIs precisely because they align with existing HTTP infrastructure including caches, proxies, load balancers, and API gateways.
