---
okf_version: "0.2"
type: Class
title: JSON-LD 1.1
resource: urn:ngm:class:json-data-interchange-format-ld-1-1
domain: data
description: JSON-LD 1.1 is a W3C Recommendation (published July 2020) that extends JSON-LD 1.0 with scoped contexts, type-scoped and property-scoped contexts, propagation control, and the @protected keyword, enabling richer and safer mapping of JSON document terms to IRIs within RDF-based knowledge systems. It standardises compaction, expansion, flattening, and framing algorithms that allow any conformant doc
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:linked-data
requires:
  - urn:ngm:class:rdf
  - urn:ngm:class:iri
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:json-data-interchange-format
enables:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:linked-data-platform
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did
implements:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:owl2
contrastsWith:
  - urn:ngm:class:turtle
  - urn:ngm:class:rdf-xml
  - urn:ngm:class:n-triples
  - urn:ngm:class:json-data-interchange-format-schema
bridgesTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did
  - urn:ngm:class:knowledge-graph-embedding
uses:
  - urn:ngm:class:json-ld
  - urn:ngm:class:context-document
  - urn:ngm:class:rdf-dataset
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:sparql
  - urn:ngm:class:activity-pub
  - urn:ngm:class:solid
  - urn:ngm:class:schema-org
  - urn:ngm:class:solid
---

# JSON-LD 1.1

JSON-LD 1.1 is a W3C Recommendation (published July 2020) that extends JSON-LD 1.0 with scoped contexts, type-scoped and property-scoped contexts, propagation control, and the @protected keyword, enabling richer and safer mapping of JSON document terms to IRIs within RDF-based knowledge systems. It standardises compaction, expansion, flattening, and framing algorithms that allow any conformant document to be normalised to a canonical RDF graph without custom mapping code. JSON-LD 1.1 serves as the primary serialisation format for Verifiable Credentials, ActivityPub, the Solid ecosystem, and numerous Linked Data Platform implementations. The specification is maintained by the W3C JSON-LD Working Group and is defined across three companion documents covering syntax, processing algorithms, and the framing API.
