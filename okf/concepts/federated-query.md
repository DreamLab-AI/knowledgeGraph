---
okf_version: "0.2"
type: Class
title: Federated Query
resource: urn:ngm:class:federated-query
domain: data
description: A federated query is a single query that is decomposed and executed across multiple autonomous, distributed data sources, with partial results combined into a unified answer without first consolidating the data into one store. In the semantic-web context, SPARQL federation evaluates sub-queries against several remote endpoints, joining their bindings transparently to the requester. It enables inte
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-integration
requires:
  - urn:ngm:class:sparql-endpoint
enables:
  - urn:ngm:class:data-federation
  - urn:ngm:class:linked-data
  - urn:ngm:class:knowledge-graph
bridgesTo:
  - urn:ngm:class:semantic-web-linked-data-standard
uses:
  - urn:ngm:class:sparql
  - urn:ngm:class:sparql-endpoint
  - urn:ngm:class:rdf
supports:
  - urn:ngm:class:wikidata
  - urn:ngm:class:data-virtualization
partOf:
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:graph-database
  - urn:ngm:class:data-catalog
---

# Federated Query

A federated query is a single query that is decomposed and executed across multiple autonomous, distributed data sources, with partial results combined into a unified answer without first consolidating the data into one store. In the semantic-web context, SPARQL federation evaluates sub-queries against several remote endpoints, joining their bindings transparently to the requester. It enables integrated access to heterogeneous, independently governed datasets while leaving each source in place. Effective federation depends on source description, query planning, and distributed join optimisation.
