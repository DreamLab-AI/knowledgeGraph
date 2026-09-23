---
okf_version: "0.2"
type: Class
title: RDF
resource: urn:ngm:class:rdf
domain: data
description: The Resource Description Framework (RDF) is a W3C-standardised graph data model in which all statements are expressed as subject–predicate–object triples, where each component is identified by an IRI (Internationalised Resource Identifier) or, for literal values, a typed or language-tagged string. RDF triples compose into directed, labelled graphs that can be serialised in multiple syntaxes includ
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:iri
  - urn:ngm:class:rdf-triple
  - urn:ngm:class:rdf-graph
  - urn:ngm:class:rdf-literal
requires:
  - urn:ngm:class:iri
  - urn:ngm:class:namespace
enables:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:linked-data
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:federated-query
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:ontological-reasoning
implements:
  - urn:ngm:class:web-standard
  - urn:ngm:class:w3c-specification
  - urn:ngm:class:graph-data-model
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:property-graph
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:decentralised-identifier
uses:
  - urn:ngm:class:turtle
  - urn:ngm:class:json-ld
  - urn:ngm:class:sparql
  - urn:ngm:class:rdfs
supports:
  - urn:ngm:class:owl
  - urn:ngm:class:shacl
  - urn:ngm:class:triple-store
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:ontology
  - urn:ngm:class:schema-org
  - urn:ngm:class:provenance
---

# RDF

The Resource Description Framework (RDF) is a W3C-standardised graph data model in which all statements are expressed as subject–predicate–object triples, where each component is identified by an IRI (Internationalised Resource Identifier) or, for literal values, a typed or language-tagged string. RDF triples compose into directed, labelled graphs that can be serialised in multiple syntaxes including Turtle, N-Triples, JSON-LD, N-Quads, and RDF/XML, and queried via the SPARQL protocol and query language. As the foundational layer of the Semantic Web and Linked Data ecosystems, RDF enables machine-readable knowledge representation that supports federated querying, ontological reasoning with OWL2, and cross-source interoperability through shared vocabulary IRIs. The open-world assumption distinguishes RDF from closed-world relational models, allowing independent datasets to be merged without schema negotiation.
