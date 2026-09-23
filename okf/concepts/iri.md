---
okf_version: "0.2"
type: Class
title: IRI
resource: urn:ngm:class:iri
domain: data
description: "An Internationalised Resource Identifier (IRI) is a compact string that uniquely identifies an abstract or physical resource, generalising the Uniform Resource Identifier (URI) to permit characters from the full Unicode repertoire rather than only ASCII. IRIs are the foundational naming mechanism of the Semantic Web: every node and predicate in an RDF graph is named by an IRI, allowing data publis"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:linked-data
requires:
  - urn:ngm:class:metadata
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:ontology
uses:
  - urn:ngm:class:http
supports:
  - urn:ngm:class:turtle
  - urn:ngm:class:sparql
standardizedBy:
  - urn:ngm:class:schema-org
partOf:
  - urn:ngm:class:linked-data
  - urn:ngm:class:rdf
relatedTo:
  - urn:ngm:class:uri
  - urn:ngm:class:namespace
  - urn:ngm:class:content-identifier
  - urn:ngm:class:decentralised-identifier
---

# IRI

An Internationalised Resource Identifier (IRI) is a compact string that uniquely identifies an abstract or physical resource, generalising the Uniform Resource Identifier (URI) to permit characters from the full Unicode repertoire rather than only ASCII. IRIs are the foundational naming mechanism of the Semantic Web: every node and predicate in an RDF graph is named by an IRI, allowing data published by independent parties to refer unambiguously to the same entity. An IRI may be mapped to an equivalent URI through percent-encoding, preserving compatibility with legacy web infrastructure.
