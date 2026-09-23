---
okf_version: "0.2"
type: Class
title: Tooling Layer
resource: urn:ngm:class:tooling-layer
domain: infrastructure
description: The Tooling Layer is the cross-cutting stratum that provides the development, deployment, and observability instruments used to build and operate the rest of the system. It sits beside the production strata rather than within the runtime data path and supports operational and research work. It contains build systems, debuggers, monitors, and automation utilities.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:runtime-layer
enables:
  - urn:ngm:class:operational-layer
  - urn:ngm:class:research-layer
bridgesTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:observability
---

# Tooling Layer

The Tooling Layer is the cross-cutting stratum that provides the development, deployment, and observability instruments used to build and operate the rest of the system. It sits beside the production strata rather than within the runtime data path and supports operational and research work. It contains build systems, debuggers, monitors, and automation utilities.
