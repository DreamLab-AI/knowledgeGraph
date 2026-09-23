---
okf_version: "0.2"
type: Class
title: Interface Layer
resource: urn:ngm:class:interface-layer
domain: infrastructure
description: The Interface Layer is the cross-cutting stratum that defines the boundaries and contracts through which components communicate. It sits above the integration and transport mechanisms that carry calls and below the applications that consume the contracts. It contains interface definitions, schemas, and the conventions that govern interaction.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:apilayer
  - urn:ngm:class:integration-layer
enables:
  - urn:ngm:class:application-layer
  - urn:ngm:class:presentation-layer
bridgesTo:
  - urn:ngm:class:interface-segregation-principle
  - urn:ngm:class:schema
---

# Interface Layer

The Interface Layer is the cross-cutting stratum that defines the boundaries and contracts through which components communicate. It sits above the integration and transport mechanisms that carry calls and below the applications that consume the contracts. It contains interface definitions, schemas, and the conventions that govern interaction.
