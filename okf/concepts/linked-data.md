---
okf_version: "0.2"
type: Class
title: Linked Data
resource: urn:ngm:class:linked-data
domain: data
description: "Linked Data is a set of design principles articulated by Tim Berners-Lee for publishing machine-readable structured data on the Web, requiring that entities be identified by HTTP URIs, that those URIs dereference to useful RDF descriptions, and that descriptions include typed links to further URIs enabling traversal across a global Web of Data. It constitutes the application layer of the Semantic "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:rdf
  - urn:ngm:class:http
  - urn:ngm:class:uri
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:knowledge-graph-construction
  - urn:ngm:class:federated-query
  - urn:ngm:class:open-data
implements:
  - urn:ngm:class:linked-data-platform
  - urn:ngm:class:five-star-data
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:data-silo
bridgesTo:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:entity-linking
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:json-ld
  - urn:ngm:class:sparql
  - urn:ngm:class:turtle
  - urn:ngm:class:owl
  - urn:ngm:class:schema-org
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:rdf-schema
relatedTo:
  - urn:ngm:class:ontology
  - urn:ngm:class:wikidata
  - urn:ngm:class:dbpedia
  - urn:ngm:class:dublin-core
---

# Linked Data

Linked Data is a set of design principles articulated by Tim Berners-Lee for publishing machine-readable structured data on the Web, requiring that entities be identified by HTTP URIs, that those URIs dereference to useful RDF descriptions, and that descriptions include typed links to further URIs enabling traversal across a global Web of Data. It constitutes the application layer of the Semantic Web stack and provides the architectural foundation for open knowledge graphs such as Wikidata, DBpedia, and the Linked Open Data cloud. The four canonical principles — use URIs as names, use HTTP URIs, return structured data on lookup, and include outbound links — create a decentralised, self-describing information mesh that transcends the boundaries of individual databases and siloed repositories.
