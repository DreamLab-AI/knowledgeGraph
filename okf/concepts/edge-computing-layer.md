---
okf_version: "0.2"
type: Class
title: Edge Computing Layer
resource: urn:ngm:class:edge-computing-layer
domain: infrastructure
description: The Edge Computing Layer is the stratum that places computation and storage near the source of data, away from centralised facilities. It sits above the Hardware and Network strata at the periphery and below the application and inference workloads it hosts locally. It contains edge nodes, local schedulers, and the synchronisation logic that links edge to core.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:hardware-layer
  - urn:ngm:class:network-layer
enables:
  - urn:ngm:class:inference-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:latency
  - urn:ngm:class:distributed-computing
---

# Edge Computing Layer

The Edge Computing Layer is the stratum that places computation and storage near the source of data, away from centralised facilities. It sits above the Hardware and Network strata at the periphery and below the application and inference workloads it hosts locally. It contains edge nodes, local schedulers, and the synchronisation logic that links edge to core.
