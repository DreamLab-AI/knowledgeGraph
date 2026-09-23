---
okf_version: "0.2"
type: Class
title: Business Logic Layer
resource: urn:ngm:class:business-logic-layer
domain: infrastructure
description: The Business Logic Layer (BLL) is the architectural tier in a multi-tier application that encapsulates domain rules, workflows, and computations specific to the problem domain, sitting between the presentation layer and the data access layer. It is responsible for validating inputs, enforcing business constraints, orchestrating data transformations, and coordinating service calls, ensuring that do
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:service-layer
enables:
  - urn:ngm:class:workflow-automation
dependsOn:
  - urn:ngm:class:data-layer
uses:
  - urn:ngm:class:middleware
supports:
  - urn:ngm:class:application-layer
relatedTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:service-oriented-architecture
---

# Business Logic Layer

The Business Logic Layer (BLL) is the architectural tier in a multi-tier application that encapsulates domain rules, workflows, and computations specific to the problem domain, sitting between the presentation layer and the data access layer. It is responsible for validating inputs, enforcing business constraints, orchestrating data transformations, and coordinating service calls, ensuring that domain invariants are maintained independently of user interface or persistence concerns.
