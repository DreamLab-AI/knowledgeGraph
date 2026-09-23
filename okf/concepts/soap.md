---
okf_version: "0.2"
type: Class
title: SOAP
resource: urn:ngm:class:soap
domain: infrastructure
description: SOAP (Simple Object Access Protocol) is a standardised, XML-based messaging protocol for exchanging structured information between applications, typically over HTTP but also over other transports. It defines an envelope structure with a header and body, supports remote procedure calls and document-style messaging, and is described by WSDL contracts and extended by the WS-* specifications for secur
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:web-services
dependsOn:
  - urn:ngm:class:xml
implements:
  - urn:ngm:class:remote-procedure-call
contrastsWith:
  - urn:ngm:class:rest
bridgesTo:
  - urn:ngm:class:api
  - urn:ngm:class:middleware
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:http
supports:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:enterprise-integration
partOf:
  - urn:ngm:class:web-services
relatedTo:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:json-data-interchange-format
---

# SOAP

SOAP (Simple Object Access Protocol) is a standardised, XML-based messaging protocol for exchanging structured information between applications, typically over HTTP but also over other transports. It defines an envelope structure with a header and body, supports remote procedure calls and document-style messaging, and is described by WSDL contracts and extended by the WS-* specifications for security, transactions, and reliable messaging. SOAP underpinned the first generation of enterprise web services and remains common in regulated and legacy integration scenarios, contrasting with the lighter, resource-oriented REST style.
