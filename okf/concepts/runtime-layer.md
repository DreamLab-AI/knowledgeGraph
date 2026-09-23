---
okf_version: "0.2"
type: Class
title: Runtime Layer
resource: urn:ngm:class:runtime-layer
domain: infrastructure
description: The Runtime Layer is the stratum that provides the execution environment in which higher-level code and models actually run. It sits above the Compute Layer that allocates resources and below the application and inference strata it hosts. It contains process and memory management, schedulers, sandboxes, and the libraries that support running programmes.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:compute-layer
enables:
  - urn:ngm:class:inference-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:garbage-collection
---

# Runtime Layer

The Runtime Layer is the stratum that provides the execution environment in which higher-level code and models actually run. It sits above the Compute Layer that allocates resources and below the application and inference strata it hosts. It contains process and memory management, schedulers, sandboxes, and the libraries that support running programmes.
