---
okf_version: "0.2"
type: Class
title: Data Standards
resource: urn:ngm:class:data-standards
domain: data
description: Data Standards are formally agreed specifications, schemas, formats, vocabularies, and protocols that define how data is structured, encoded, exchanged, and interpreted across systems, organisations, and domains. They enable interoperability between heterogeneous systems by establishing shared semantics and syntactic conventions, reducing integration costs and data quality errors. Governed by bodi
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-governance
hasPart:
  - urn:ngm:class:data-schema
  - urn:ngm:class:metadata-standard
  - urn:ngm:class:data-exchange-format
  - urn:ngm:class:controlled-vocabulary
requires:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:data-interoperability
  - urn:ngm:class:data-integration
  - urn:ngm:class:linked-data
  - urn:ngm:class:open-data
dependsOn:
  - urn:ngm:class:standards-body
  - urn:ngm:class:consensus-process
implements:
  - urn:ngm:class:fair-data-principles
  - urn:ngm:class:fair-data-principles
contrastsWith:
  - urn:ngm:class:data-silo
  - urn:ngm:class:proprietary-format
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:federated-learning
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:rdf
  - urn:ngm:class:json-data-interchange-format
supports:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:iso
  - urn:ngm:class:w3-c
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:data-architecture
  - urn:ngm:class:ontology
---

# Data Standards

Data Standards are formally agreed specifications, schemas, formats, vocabularies, and protocols that define how data is structured, encoded, exchanged, and interpreted across systems, organisations, and domains. They enable interoperability between heterogeneous systems by establishing shared semantics and syntactic conventions, reducing integration costs and data quality errors. Governed by bodies such as ISO, W3C, IETF, and NIST, data standards span a spectrum from de facto industry conventions (e.g., JSON, CSV) to de jure normative specifications (e.g., SQL:2023, OWL2, FHIR). They are foundational to data governance, metadata management, and the reliable operation of distributed data ecosystems.
