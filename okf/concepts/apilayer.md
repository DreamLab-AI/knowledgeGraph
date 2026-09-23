---
okf_version: "0.2"
type: Class
title: APILayer
resource: urn:ngm:class:apilayer
domain: infrastructure
description: The API Layer is the stratum that exposes a system's capabilities as callable, contractually defined endpoints. It sits above the application logic it fronts and below integration and interface strata that connect consumers. It contains endpoint definitions, request and response schemas, authentication hooks, and versioning.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:application-layer
enables:
  - urn:ngm:class:integration-layer
  - urn:ngm:class:interface-layer
bridgesTo:
  - urn:ngm:class:rest
  - urn:ngm:class:open-api-specification
---

# APILayer

The API Layer is the stratum that exposes a system's capabilities as callable, contractually defined endpoints. It sits above the application logic it fronts and below integration and interface strata that connect consumers. It contains endpoint definitions, request and response schemas, authentication hooks, and versioning.
