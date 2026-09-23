---
okf_version: "0.2"
type: Class
title: Graph Query Language
resource: urn:ngm:class:graph-query-language
domain: data
description: A graph query language is a declarative language for expressing queries, traversals, and pattern matches over graph-structured data composed of nodes and edges. Rather than joining tables, it lets users describe paths and subgraph patterns directly, making relationship-centric questions concise. Examples include Cypher and Gremlin, with GQL emerging as an ISO standard that unifies property-graph q
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graph-database
enables:
  - urn:ngm:class:knowledge-graph
dependsOn:
  - urn:ngm:class:graph-database
contrastsWith:
  - urn:ngm:class:sql
  - urn:ngm:class:sparql
bridgesTo:
  - urn:ngm:class:sparql
uses:
  - urn:ngm:class:data-model
supports:
  - urn:ngm:class:graph-database
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:iso
relatedTo:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:sql
  - urn:ngm:class:data-model
  - urn:ngm:class:knowledge-graph
---

# Graph Query Language

A graph query language is a declarative language for expressing queries, traversals, and pattern matches over graph-structured data composed of nodes and edges. Rather than joining tables, it lets users describe paths and subgraph patterns directly, making relationship-centric questions concise. Examples include Cypher and Gremlin, with GQL emerging as an ISO standard that unifies property-graph querying alongside the W3C SPARQL language for RDF.
