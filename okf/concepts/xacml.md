---
okf_version: "0.2"
type: Class
title: XACML
resource: urn:ngm:class:xacml
domain: security
description: XACML (eXtensible Access Control Markup Language) is an OASIS standard that defines a declarative, XML-based language for expressing access-control policies and the requests and responses used to evaluate them. It specifies a reference architecture separating policy decision, enforcement, administration and information points, enabling fine-grained, attribute-based authorisation across heterogeneo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:attribute-based-access-control
hasPart:
  - urn:ngm:class:policy-decision-point
  - urn:ngm:class:policy-enforcement-point
enables:
  - urn:ngm:class:authorization
  - urn:ngm:class:access-control
implements:
  - urn:ngm:class:attribute-based-access-control
uses:
  - urn:ngm:class:xml
supports:
  - urn:ngm:class:security
standardizedBy:
  - urn:ngm:class:oasis
partOf:
  - urn:ngm:class:access-control-system
relatedTo:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:policy-engine
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:authentication
---

# XACML

XACML (eXtensible Access Control Markup Language) is an OASIS standard that defines a declarative, XML-based language for expressing access-control policies and the requests and responses used to evaluate them. It specifies a reference architecture separating policy decision, enforcement, administration and information points, enabling fine-grained, attribute-based authorisation across heterogeneous systems. XACML lets organisations externalise authorisation logic from applications into centrally managed policies.
