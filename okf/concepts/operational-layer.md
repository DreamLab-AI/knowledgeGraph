---
okf_version: "0.2"
type: Class
title: Operational Layer
resource: urn:ngm:class:operational-layer
domain: infrastructure
description: The Operational Layer is the cross-cutting stratum concerned with running, maintaining, and recovering a system in production. It sits above the runtime and tooling strata it relies on and supports the institutional commitments made above. It contains deployment pipelines, monitoring, incident response, and capacity management.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:runtime-layer
  - urn:ngm:class:tooling-layer
enables:
  - urn:ngm:class:institutional-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:incident-management
---

# Operational Layer

The Operational Layer is the cross-cutting stratum concerned with running, maintaining, and recovering a system in production. It sits above the runtime and tooling strata it relies on and supports the institutional commitments made above. It contains deployment pipelines, monitoring, incident response, and capacity management.
