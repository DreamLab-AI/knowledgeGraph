---
okf_version: "0.2"
type: Class
title: Simulation Layer
resource: urn:ngm:class:simulation-layer
domain: infrastructure
description: The Simulation Layer is the cross-cutting stratum that models system or environment behaviour to test and predict outcomes without acting on the real world. It sits above compute and model strata it uses and supports research, evaluation, and planning. It contains simulators, environment models, and the scenarios run within them.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:compute-layer
  - urn:ngm:class:model-layer
enables:
  - urn:ngm:class:research-layer
  - urn:ngm:class:evaluation-layer
bridgesTo:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:digital-twin
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Simulation Layer

The Simulation Layer is the cross-cutting stratum that models system or environment behaviour to test and predict outcomes without acting on the real world. It sits above compute and model strata it uses and supports research, evaluation, and planning. It contains simulators, environment models, and the scenarios run within them.
