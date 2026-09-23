---
okf_version: "0.2"
type: Class
title: Schema Definition
resource: urn:ngm:class:schema-definition
domain: infrastructure
description: A Schema Definition is a formal, machine-readable specification of the structure, data types, constraints, and relationships that govern a dataset, message format, document, or knowledge representation, serving as a contract between data producers and consumers. Schema languages include W3C XML Schema Definition (XSD), JSON Schema (for JSON documents), OWL/RDFS (for ontologies over RDF graphs), SH
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:data-format-standard
requires:
  - urn:ngm:class:data-type
  - urn:ngm:class:namespace
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:linked-data
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:code-generation
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:rdf
  - urn:ngm:class:json-ld
  - urn:ngm:class:sparql
  - urn:ngm:class:xml-schema-definition
  - urn:ngm:class:protocol-buffer
supports:
  - urn:ngm:class:data-schema
  - urn:ngm:class:owl-class-hierarchy
  - urn:ngm:class:contract-testing
  - urn:ngm:class:schema-registry
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:ontology
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:data-governance
  - urn:ngm:class:api-contract
---

# Schema Definition

A Schema Definition is a formal, machine-readable specification of the structure, data types, constraints, and relationships that govern a dataset, message format, document, or knowledge representation, serving as a contract between data producers and consumers. Schema languages include W3C XML Schema Definition (XSD), JSON Schema (for JSON documents), OWL/RDFS (for ontologies over RDF graphs), SHACL and ShEx (for RDF graph shape constraints), Protocol Buffers and Apache Avro (for binary-serialised messages), OpenAPI (for REST API request/response bodies), and GraphQL SDL (for graph API types). A schema definition enables automated validation, code generation, documentation, and inter-system interoperability; in knowledge-graph contexts, the schema defines classes, properties, cardinality constraints, and axioms that allow OWL-based reasoning over the graph.
