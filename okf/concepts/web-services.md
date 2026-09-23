---
okf_version: "0.2"
type: Class
title: Web Services
resource: urn:ngm:class:web-services
domain: infrastructure
description: Web services are software components that expose machine-to-machine functionality over a network using standardised protocols and data formats. They enable interoperable application integration across heterogeneous platforms by defining contracts (interface descriptions), message envelopes, and transport bindings independent of the implementing technology. Web services encompass both the older SOA
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:soap
  - urn:ngm:class:web-services-description-language
  - urn:ngm:class:wsdl
enables:
  - urn:ngm:class:api
  - urn:ngm:class:service-oriented-architecture
uses:
  - urn:ngm:class:http
  - urn:ngm:class:xml
supports:
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:rest
  - urn:ngm:class:microservices
  - urn:ngm:class:api-specification
---

# Web Services

Web services are software components that expose machine-to-machine functionality over a network using standardised protocols and data formats. They enable interoperable application integration across heterogeneous platforms by defining contracts (interface descriptions), message envelopes, and transport bindings independent of the implementing technology. Web services encompass both the older SOAP/WSDL stack and lightweight RESTful styles, and underpin service-oriented and microservice architectures.
