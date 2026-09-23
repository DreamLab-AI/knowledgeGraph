---
okf_version: "0.2"
type: Class
title: Integration Layer
resource: urn:ngm:class:integration-layer
domain: infrastructure
description: The Integration Layer is the cross-cutting stratum that connects otherwise independent systems so they can exchange data and invoke each other's functions. It sits above transport and protocol concerns and below the applications that orchestrate combined behaviour. It contains adapters, connectors, message translation, and the routing that mediates between heterogeneous endpoints.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:apilayer
enables:
  - urn:ngm:class:application-layer
  - urn:ngm:class:coordination-layer
bridgesTo:
  - urn:ngm:class:enterprise-integration-patterns
  - urn:ngm:class:message-queue
---

# Integration Layer

The Integration Layer is the cross-cutting stratum that connects otherwise independent systems so they can exchange data and invoke each other's functions. It sits above transport and protocol concerns and below the applications that orchestrate combined behaviour. It contains adapters, connectors, message translation, and the routing that mediates between heterogeneous endpoints.
