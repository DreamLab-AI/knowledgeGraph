---
okf_version: "0.2"
type: Class
title: Syntactic Interoperability
resource: urn:ngm:class:syntactic-interoperability
domain: data
description: Syntactic interoperability is the ability of two or more systems to exchange data using compatible formats, structures, and encoding rules so that the receiving system can correctly parse the transmitted information. It concerns agreement on data formats, message structure, and serialisation grammar, independent of the meaning of the data. Syntactic interoperability is a prerequisite layer beneath
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:interoperability
hasPart:
  - urn:ngm:class:data-format
  - urn:ngm:class:message-format
requires:
  - urn:ngm:class:data-schema
  - urn:ngm:class:protocol
enables:
  - urn:ngm:class:semantic-interoperability
dependsOn:
  - urn:ngm:class:data
contrastsWith:
  - urn:ngm:class:semantic-interoperability
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:data-mapping
supports:
  - urn:ngm:class:data-integration
partOf:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:data-model
  - urn:ngm:class:standards
  - urn:ngm:class:api
---

# Syntactic Interoperability

Syntactic interoperability is the ability of two or more systems to exchange data using compatible formats, structures, and encoding rules so that the receiving system can correctly parse the transmitted information. It concerns agreement on data formats, message structure, and serialisation grammar, independent of the meaning of the data. Syntactic interoperability is a prerequisite layer beneath semantic interoperability in interoperability frameworks.
