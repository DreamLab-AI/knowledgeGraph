---
okf_version: "0.2"
type: Class
title: GraphQL
resource: urn:ngm:class:graph-ql
domain: infrastructure
description: GraphQL is a query language and runtime for APIs, developed by Facebook and open-sourced in 2015, that allows clients to specify precisely the data they need in a single request rather than consuming fixed-shape REST endpoints. It is defined by a strongly typed schema that describes the graph of types and fields the API exposes, and a runtime that resolves client queries against that schema by exe
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:api-standard
requires:
  - urn:ngm:class:type-system
enables:
  - urn:ngm:class:api-integration
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:code-generation
contrastsWith:
  - urn:ngm:class:rest-api
  - urn:ngm:class:g-rpc
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:schema-definition
  - urn:ngm:class:http-protocol
  - urn:ngm:class:type-system
supports:
  - urn:ngm:class:federation
standardizedBy:
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-management
  - urn:ngm:class:api-gateway
  - urn:ngm:class:g-rpc
  - urn:ngm:class:open-api-specification
---

# GraphQL

GraphQL is a query language and runtime for APIs, developed by Facebook and open-sourced in 2015, that allows clients to specify precisely the data they need in a single request rather than consuming fixed-shape REST endpoints. It is defined by a strongly typed schema that describes the graph of types and fields the API exposes, and a runtime that resolves client queries against that schema by executing resolver functions. GraphQL eliminates the over-fetching and under-fetching problems inherent in REST by shifting data shape control to the client, and its introspection capability enables rich developer tooling and automatic documentation generation.
