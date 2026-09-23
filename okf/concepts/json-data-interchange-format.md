---
okf_version: "0.2"
type: Class
title: JSON Data Interchange Format
resource: urn:ngm:class:json-data-interchange-format
domain: infrastructure
description: "JSON (JavaScript Object Notation) is a lightweight, human-readable, language-agnostic data-interchange format standardised as ECMA-404 and RFC 8259, built on two universal data structures: a collection of name/value pairs (objects) and an ordered list of values (arrays). Originally derived from JavaScript object-literal syntax by Douglas Crockford in the early 2000s, JSON has become the dominant w"
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:json-object
  - urn:ngm:class:json-array
enables:
  - urn:ngm:class:json-ld
  - urn:ngm:class:rest-api
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:web-api
implements:
  - urn:ngm:class:ecma-404
  - urn:ngm:class:rfc-8259
contrastsWith:
  - urn:ngm:class:xml
  - urn:ngm:class:yaml
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:messagepack
  - urn:ngm:class:protobuf
bridgesTo:
  - urn:ngm:class:linked-data
  - urn:ngm:class:ontology
  - urn:ngm:class:rdf
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
uses:
  - urn:ngm:class:unicode
  - urn:ngm:class:utf-8-encoding
supports:
  - urn:ngm:class:api-standard
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:configuration-management
relatedTo:
  - urn:ngm:class:serialisation
  - urn:ngm:class:data-format
  - urn:ngm:class:java-script
  - urn:ngm:class:serialisation-format
  - urn:ngm:class:data-interchange
---

# JSON Data Interchange Format

JSON (JavaScript Object Notation) is a lightweight, human-readable, language-agnostic data-interchange format standardised as ECMA-404 and RFC 8259, built on two universal data structures: a collection of name/value pairs (objects) and an ordered list of values (arrays). Originally derived from JavaScript object-literal syntax by Douglas Crockford in the early 2000s, JSON has become the dominant wire format for REST APIs, configuration files, inter-service messaging, and AI pipeline payloads due to its minimal syntactic overhead, broad parser availability across every major programming language, and native mapping to in-memory data structures. Its strict subset relationship to JavaScript and its legibility to both humans and machines distinguishes it from predecessor formats such as XML while enabling seamless extension into semantic-web formats such as JSON-LD.
