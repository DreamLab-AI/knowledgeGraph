---
okf_version: "0.2"
type: Class
title: XML
resource: urn:ngm:class:xml
domain: infrastructure
description: XML (Extensible Markup Language) is a W3C-standardised, text-based markup language for encoding documents and structured data in a format that is both human-readable and machine-processable. It defines a strict syntax of nested, attributed elements and supports schema languages (DTD, XML Schema, RELAX NG) for validation, plus a family of related standards for querying, transforming and namespacing
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-serialization
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:data-serialization
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:data-serialization
implements:
  - urn:ngm:class:rdf-schema
contrastsWith:
  - urn:ngm:class:yaml
  - urn:ngm:class:html
bridgesTo:
  - urn:ngm:class:api
uses:
  - urn:ngm:class:schema
supports:
  - urn:ngm:class:soap
  - urn:ngm:class:rdf
  - urn:ngm:class:owl
relatedTo:
  - urn:ngm:class:rest
  - urn:ngm:class:interoperability
  - urn:ngm:class:ontology
---

# XML

XML (Extensible Markup Language) is a W3C-standardised, text-based markup language for encoding documents and structured data in a format that is both human-readable and machine-processable. It defines a strict syntax of nested, attributed elements and supports schema languages (DTD, XML Schema, RELAX NG) for validation, plus a family of related standards for querying, transforming and namespacing. Once dominant for data interchange and configuration, it remains foundational to many enterprise, financial and document standards even as JSON has overtaken it for lightweight web interchange.
