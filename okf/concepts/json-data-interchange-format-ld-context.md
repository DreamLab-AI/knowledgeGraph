---
okf_version: "0.2"
type: Class
title: JSON-LD Context
resource: urn:ngm:class:json-data-interchange-format-ld-context
domain: ai
description: A JSON-LD Context is the machine-readable document or inline object that maps the shorthand terms and prefixes used in a JSON-LD document to their fully qualified IRIs in a target vocabulary or ontology. It serves as the bridge between the compact, human-readable JSON representation and the globally unambiguous RDF data model, enabling semantic interoperability across disparate systems. Contexts m
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:json-ld
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-interoperability
uses:
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:sparql
supports:
  - urn:ngm:class:ontology
  - urn:ngm:class:schema-registry
relatedTo:
  - urn:ngm:class:linked-data
  - urn:ngm:class:rdf
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:semantic-web-linked-data-standard
---

# JSON-LD Context

A JSON-LD Context is the machine-readable document or inline object that maps the shorthand terms and prefixes used in a JSON-LD document to their fully qualified IRIs in a target vocabulary or ontology. It serves as the bridge between the compact, human-readable JSON representation and the globally unambiguous RDF data model, enabling semantic interoperability across disparate systems. Contexts may be embedded inline within a document, referenced by URL, or composed from multiple context documents. The JSON-LD 1.1 specification extends context capabilities with scoped contexts, type-scoped and property-scoped contexts, and protected terms that resist accidental overriding. Correct context design is foundational to knowledge graph compilation and Linked Data publication.
