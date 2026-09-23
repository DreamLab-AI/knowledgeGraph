---
okf_version: "0.2"
type: Class
title: Data Exchange Format
resource: urn:ngm:class:data-exchange-format
domain: infrastructure
description: A data exchange format is an agreed structure and encoding for representing data so that it can be reliably transmitted, stored, and interpreted between independent systems. It defines syntax, data types, and often a schema, allowing a producer and a consumer that share no internal code to exchange information without loss of meaning. Common examples include JSON, XML, CSV, and binary formats such
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-format
hasPart:
  - urn:ngm:class:schema
  - urn:ngm:class:metadata
requires:
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:api
dependsOn:
  - urn:ngm:class:data-serialization
implements:
  - urn:ngm:class:data-serialization
contrastsWith:
  - urn:ngm:class:data-model
bridgesTo:
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:xml
supports:
  - urn:ngm:class:api
standardizedBy:
  - urn:ngm:class:standardisation
  - urn:ngm:class:standardisation
partOf:
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:data-standards
  - urn:ngm:class:protobuf
---

# Data Exchange Format

A data exchange format is an agreed structure and encoding for representing data so that it can be reliably transmitted, stored, and interpreted between independent systems. It defines syntax, data types, and often a schema, allowing a producer and a consumer that share no internal code to exchange information without loss of meaning. Common examples include JSON, XML, CSV, and binary formats such as Protocol Buffers, each trading off readability, compactness, and parsing speed.
