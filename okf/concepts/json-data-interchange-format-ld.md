---
okf_version: "0.2"
type: Class
title: JSON-LD
resource: urn:ngm:class:json-data-interchange-format-ld
domain: data
description: JSON-LD (JSON for Linking Data) is a W3C Recommendation (first published 2014, revised 1.1 in 2020) that defines a lightweight Linked Data serialisation syntax layered on top of JSON. A @context document maps compact JSON keys to full RDF IRIs, enabling any conformant JSON document to be interpreted as an RDF graph without abandoning existing JSON tooling. JSON-LD is the canonical syntax for W3C V
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:linked-data
requires:
  - urn:ngm:class:iri
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:json-data-interchange-format
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:ontology
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:structured-data
  - urn:ngm:class:data-integrity
implements:
  - urn:ngm:class:linked-data
  - urn:ngm:class:rdf
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
contrastsWith:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:turtle
  - urn:ngm:class:rdf-xml
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:search-engine-optimisation
uses:
  - urn:ngm:class:schema-org
  - urn:ngm:class:n-quads
standardizedBy:
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:sparql
  - urn:ngm:class:activity-pub
  - urn:ngm:class:owl
  - urn:ngm:class:shacl
---

# JSON-LD

JSON-LD (JSON for Linking Data) is a W3C Recommendation (first published 2014, revised 1.1 in 2020) that defines a lightweight Linked Data serialisation syntax layered on top of JSON. A @context document maps compact JSON keys to full RDF IRIs, enabling any conformant JSON document to be interpreted as an RDF graph without abandoning existing JSON tooling. JSON-LD is the canonical syntax for W3C Verifiable Credentials, Schema.org structured data embedded in HTML, and the ActivityPub social protocol, making it the most widely deployed Linked Data technology on the open web.
