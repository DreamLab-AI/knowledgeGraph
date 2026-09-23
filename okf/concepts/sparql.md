---
okf_version: "0.2"
type: Class
title: SPARQL
resource: urn:ngm:class:sparql
domain: data
description: SPARQL (SPARQL Protocol and RDF Query Language) is a W3C Recommendation defining a query language, update language, and HTTP-based protocol for retrieving and modifying data stored in RDF graph databases and Linked Data endpoints. SPARQL 1.1 (2013) introduced federated queries across multiple remote endpoints via the SERVICE keyword, property paths for graph traversal, aggregation functions, and t
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:rdf
  - urn:ngm:class:graph-database
  - urn:ngm:class:sparql-endpoint
enables:
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:linked-data
  - urn:ngm:class:federated-query
  - urn:ngm:class:ontology
  - urn:ngm:class:ontology
implements:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:open-world-assumption
  - urn:ngm:class:semantic-web-linked-data-standard
contrastsWith:
  - urn:ngm:class:sql
  - urn:ngm:class:graph-ql
  - urn:ngm:class:cypher-query-language
bridgesTo:
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:graph-pattern-matching
  - urn:ngm:class:http-protocol
  - urn:ngm:class:triple-pattern
  - urn:ngm:class:property-path
supports:
  - urn:ngm:class:owl-2-web-ontology-language
  - urn:ngm:class:shacl
  - urn:ngm:class:wikidata
  - urn:ngm:class:owl-2-web-ontology-language
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:turtle
  - urn:ngm:class:json-ld
  - urn:ngm:class:apache-jena
  - urn:ngm:class:turtle
---

# SPARQL

SPARQL (SPARQL Protocol and RDF Query Language) is a W3C Recommendation defining a query language, update language, and HTTP-based protocol for retrieving and modifying data stored in RDF graph databases and Linked Data endpoints. SPARQL 1.1 (2013) introduced federated queries across multiple remote endpoints via the SERVICE keyword, property paths for graph traversal, aggregation functions, and the SPARQL Update (SPARUL) sublanguage for graph mutation. It serves as the standard access layer for the Semantic Web and knowledge graph ecosystems, occupying a role analogous to SQL for relational databases. The four primary query forms — SELECT, CONSTRUCT, ASK, and DESCRIBE — provide flexible mechanisms for retrieving variable bindings, materialising derived graphs, testing graph patterns, and describing resources.
